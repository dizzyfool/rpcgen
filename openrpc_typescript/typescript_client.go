package openrpc_typescript

import (
	"bytes"
	"fmt"
	"path"
	"reflect"
	"sort"
	"strings"
	"text/template"
	"unicode"

	openrpc "github.com/open-rpc/meta-schema"
)

const (
	interfacePrefix = "I"
	voidResponse    = "void"

	definitionsPrefix = "#/components/schemas/"
)

type Generator struct {
	schema openrpc.OpenrpcDocument

	typeMapper TypeMapper
}

func NewClient(schema openrpc.OpenrpcDocument, typeMapper TypeMapper) *Generator {
	return &Generator{schema: schema, typeMapper: typeMapper}
}

type TypeMapper func(in openrpc.JSONSchema, tsType Type) Type

// Generate returns generate TypeScript client
func (g *Generator) Generate() ([]byte, error) {
	tsModels := g.tsModels()

	var fns = template.FuncMap{
		"len": func(a interface{}) int {
			return reflect.ValueOf(a).Len() - 1
		},
	}

	tmpl, err := template.New("test").Funcs(fns).Parse(
		`/* eslint-disable */{{range .Interfaces}}
export interface {{.Name}} {
{{$len := len .Parameters}}{{range $i,$e := .Parameters}}  {{.Name}}{{if .Optional}}?{{end}}: {{.Type}}{{if ne $i $len}},{{end}}{{if ne .Comment ""}} // {{.Comment}}{{end}}{{if ne $i $len}}
{{end}}{{end}}
}
{{end}}
export const factory = (send) => ({
{{$lenN := len .Namespaces}}{{range $i,$e := .Namespaces}}  {{.Name}}: {
{{$lenS := len .Services}}{{range $i,$e := .Services}}    {{.NameLCF}}({{if .HasParams}}params: {{.Params}}{{end}}): Promise<{{.Response}}> {
      return send('{{.Namespace}}.{{.Name}}'{{if .HasParams}}, params{{end}})
    }{{if ne $i $lenS}},
{{end}}{{end}}
  }{{if ne $i $lenN}},
{{end}}{{end}}
})
`)
	if err != nil {
		return nil, err
	}

	// compile template
	var buf bytes.Buffer
	if err := tmpl.Execute(&buf, tsModels); err != nil {
		return nil, err
	}

	return buf.Bytes(), nil
}

type tsInterface struct {
	Name       string
	Parameters []Type
}

type Type struct {
	Name     string
	Comment  string
	Type     string
	Optional bool
}

type tsServiceNamespace struct {
	Name     string
	Services []tsService
}

type tsService struct {
	Namespace string
	Name      string
	NameLCF   string
	HasParams bool
	Params    string
	Response  string
}

type tsModels struct {
	Interfaces []tsInterface
	Namespaces []tsServiceNamespace
}

// tsModels return converted schema to TypeScript.
func (g *Generator) tsModels() tsModels {
	var (
		models          tsModels
		interfacesCache = map[string]interface{}{}
	)

	// iterate over all services
	for _, serviceObject := range *g.schema.Methods {
		service := *serviceObject.MethodObject

		serviceNameParts := strings.Split(string(*service.Name), ".")
		if len(serviceNameParts) != 2 {
			continue
		}
		namespace := serviceNameParts[0]
		method := serviceNameParts[1]
		interfaceName := fmt.Sprintf("%s%s%sParams", interfacePrefix, strings.Title(namespace), strings.Title(method))

		// add service params as TypeScript interfaces
		if service.Params != nil && len(*service.Params) > 0 {
			tsTypes := make([]Type, len(*service.Params))
			for i, param := range *service.Params {
				tsTypes[i] = convertTSDescriptor(*param.ContentDescriptorObject, g.typeMapper)
			}
			addTSInterface(&models, interfacesCache, tsInterface{
				Name:       interfaceName,
				Parameters: tsTypes,
			})
		}

		// add service "returns" as TypeScript interface
		respType := convertTSReturn(service.Result, g.schema.Components.ContentDescriptors, g.typeMapper)

		if g.schema.Components.Schemas != nil {
			for name, schema := range *g.schema.Components.Schemas {
				if v, ok := schema.(*openrpc.JSONSchema); ok {
					addTSComplexInterface(&models, interfacesCache, name, *v, g.typeMapper)
				}
			}
		}

		// add namespace to TypeScript services
		nIdx := -1
		for i := range models.Namespaces {
			if models.Namespaces[i].Name == namespace {
				nIdx = i
			}
		}
		if nIdx == -1 {
			models.Namespaces = append(models.Namespaces, tsServiceNamespace{
				Name:     namespace,
				Services: nil,
			})
			nIdx = len(models.Namespaces) - 1
		}

		// add service to TypeScript services
		respService := tsService{
			Namespace: namespace,
			Name:      method,
			NameLCF:   nameLCF(method),
			HasParams: false,
			Params:    "",
			Response:  respType.Type,
		}
		if service.Params != nil && len(*service.Params) > 0 {
			respService.HasParams = true
			respService.Params = interfaceName
		}
		if respService.Response == "" {
			respService.Response = voidResponse
		}

		models.Namespaces[nIdx].Services = append(models.Namespaces[nIdx].Services, respService)
	}

	// sort interfaces
	sort.Slice(models.Interfaces, func(i, j int) bool {
		return models.Interfaces[i].Name < models.Interfaces[j].Name
	})

	// sort namespaces
	sort.Slice(models.Namespaces, func(i, j int) bool {
		return models.Namespaces[i].Name < models.Namespaces[j].Name
	})

	// sort methods
	for idx := range models.Namespaces {
		sort.Slice(models.Namespaces[idx].Services, func(i, j int) bool {
			return models.Namespaces[idx].Services[i].Name < models.Namespaces[idx].Services[j].Name
		})
	}

	return models
}

// addTSInterface adds TypeScript interface to client.
func addTSInterface(models *tsModels, interfaces map[string]interface{}, ti tsInterface) {
	if len(ti.Parameters) == 0 {
		return
	}

	if _, ok := interfaces[ti.Name]; !ok {
		models.Interfaces = append(models.Interfaces, ti)
		interfaces[ti.Name] = struct{}{}
	}
}

// convertTSScalar converts TypeScript scalars.
func convertTSScalar(t openrpc.Type) string {
	// TODO empty type?
	if t.SimpleTypes == nil {
		return "string"
	}

	var stringType string
	switch v := (*t.SimpleTypes).(type) {
	case string:
		stringType = v
	case []string:
		stringType = v[0]
	default:
		stringType = "string"
	}

	switch stringType {
	case "integer", "int":
		return "number"
	case "null":
		return voidResponse
	default:
		return stringType
	}
}

// convertTsDescriptor converts openrpc.ContentDescriptorObject to Type.
func convertTSDescriptor(in openrpc.ContentDescriptorObject, typeMapper TypeMapper) Type {
	var name = string(*in.Name)

	var required bool
	if in.Required != nil {
		required = bool(*in.Required)
	}

	var comm string
	if in.Description != nil {
		comm = string(*in.Description)
	}

	return convertTSType(name, *in.Schema, required, comm, typeMapper)
}

// convertTSType converts openrpc.JSONSchema to Type.
func convertTSType(name string, in openrpc.JSONSchema, required bool, comment string, typeMapper TypeMapper) Type {
	result := Type{
		Name:     name,
		Comment:  comment,
		Optional: !required,
	}

	// detect array sub type
	if in.JSONSchemaObject.Items != nil {
		var subType string
		items := in.JSONSchemaObject.Items.JSONSchema.JSONSchemaObject
		if items.Type != nil {
			subType = convertTSScalar(*items.Type)
		}
		if items.Ref != nil {
			subType = interfacePrefix + strings.TrimPrefix(string(*items.Ref), definitionsPrefix)
		}

		result.Type = fmt.Sprintf("Array<%s>", subType)
	} else if in.JSONSchemaObject.Ref != nil {
		result.Type = interfacePrefix + strings.TrimPrefix(string(*in.JSONSchemaObject.Ref), definitionsPrefix)
	} else if in.JSONSchemaObject.Type != nil {
		result.Type = convertTSScalar(*in.JSONSchemaObject.Type)
	}

	// apply hook
	if typeMapper != nil {
		result = typeMapper(in, result)
	}

	return result
}

func convertTSReturn(in *openrpc.MethodObjectResult, components *openrpc.ContentDescriptorComponents, typeMapper TypeMapper) Type {
	if in.ReferenceObject != nil && components != nil {
		baseName := refBase(in.ReferenceObject.Ref)
		if descriptor, ok := (*components)[baseName]; ok {
			return convertTSDescriptor(*descriptor.(*openrpc.ContentDescriptorObject), typeMapper)
		}
	}

	if in.ContentDescriptorObject != nil {
		return convertTSDescriptor(*in.ContentDescriptorObject, typeMapper)
	}

	// TODO Any type?
	return Type{}
}

// addTSComplexInterface converts complex type stored in smd1.JSONSchema to tsInterface and adds it to client.
func addTSComplexInterface(models *tsModels, interfacesCache map[string]interface{}, name string, in openrpc.JSONSchema, typeMapper func(in openrpc.JSONSchema, tsType Type) Type) {
	var tsTypes []Type

	schema := *in.JSONSchemaObject

	for name, p := range *schema.Properties {
		propSchema, ok := p.(openrpc.JSONSchema)
		if !ok {
			continue
		}

		var comm string
		if propSchema.JSONSchemaObject.Description != nil {
			comm = string(*propSchema.JSONSchemaObject.Description)
		}

		tsTypes = append(tsTypes, convertTSType(
			name,
			propSchema,
			isRequired(name, in.JSONSchemaObject.Required),
			comm,
			typeMapper,
		))
	}

	addTSInterface(models, interfacesCache, tsInterface{
		Name:       interfacePrefix + name,
		Parameters: tsTypes,
	})
}

// nameLCF converts "GetKits" to "getKits", "FAQ" to "FAQ"
func nameLCF(str string) string {
	if strings.ToUpper(str) == str {
		return str
	}

	for _, v := range str {
		u := string(unicode.ToLower(v))
		return u + str[len(u):]
	}
	return ""
}

func isRequired(name string, required *openrpc.StringArray) bool {
	if required == nil {
		return false
	}

	for _, s := range *required {
		if name == string(s) {
			return true
		}
	}

	return false
}

func refBase(ref *openrpc.Ref) string {
	return path.Base(string(*ref))
}
