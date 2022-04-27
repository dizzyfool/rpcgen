package openrpc_diff

import (
	"fmt"
	"github.com/fatih/structs"
	openrpc "github.com/vmkteam/rpcgen/v2/openrpc_document"
	"reflect"
	"strings"
)

type CriticalityLevel string

const (
	Breaking    CriticalityLevel = "BREAKING"
	NonBreaking CriticalityLevel = "NON_BREAKING"
	Dangerous   CriticalityLevel = "DANGEROUS"
)

type ChangeType string

const (
	Added   ChangeType = "ADDED"
	Removed ChangeType = "REMOVED"
	Changed ChangeType = "CHANGED"
)

type ChangeObject string

const (
	OpenRPCVersion ChangeObject = "OPEN_RPC_VERSION"

	SchemaInfo    ChangeObject = "SCHEMA_INFO"
	SchemaVersion ChangeObject = "SCHEMA_VERSION"
	SchemaServers ChangeObject = "SCHEMA_SERVERS"

	Method               ChangeObject = "METHOD"
	MethodTags           ChangeObject = "METHOD_TAGS"
	MethodSummary        ChangeObject = "METHOD_SUMMARY"
	MethodParamStructure ChangeObject = "METHOD_PARAM_STRUCTURE"

	MethodParam         ChangeObject = "METHOD_PARAM"
	MethodParamRequired ChangeObject = "METHOD_PARAM_REQUIRED"
	MethodParamType     ChangeObject = "METHOD_PARAM_TYPE" // type + ref + items type + items ref
	MethodParamDesc     ChangeObject = "METHOD_PARAM_DESC"

	MethodResultName ChangeObject = "METHOD_RESULT"
	MethodResultDesc ChangeObject = "METHOD_RESULT_DESC"
	MethodResultType ChangeObject = "METHOD_RESULT_TYPE" // schema type + ref

	MethodError        ChangeObject = "METHOD_ERROR"
	MethodErrorMessage ChangeObject = "METHOD_ERROR_MSG"

	ComponentsSchema             ChangeObject = "COMPONENTS_SCHEMA"
	ComponentsSchemaProperty     ChangeObject = "COMPONENTS_SCHEMA_PROPERTY"
	ComponentsSchemaPropertyDesc ChangeObject = "COMPONENTS_SCHEMA_PROPERTY_REQUIRED"
	ComponentsSchemaPropertyType ChangeObject = "COMPONENTS_SCHEMA_PROPERTY_TYPE" // type + ref + items type + items ref

	ComponentsDescriptor        ChangeObject = "COMPONENTS_DESCRIPTOR"
	ComponentsDescriptorSummary ChangeObject = "COMPONENTS_DESCRIPTOR_SUMMARY"
	ComponentsDescriptorType    ChangeObject = "COMPONENTS_DESCRIPTOR_TYPE"

	Other ChangeObject = "OTHER"
)

func (c ChangeObject) Level(changeType ChangeType, from, to interface{}) CriticalityLevel {
	switch c {
	case OpenRPCVersion:
		return Dangerous
	case Method:
		if changeType == Removed {
			return Breaking
		}
	case MethodParamStructure:
		toV := to.(openrpc.MethodObjectParamStructure)
		if changeType == Removed || toV == "" {
			toV = openrpc.MethodObjectParamStructureEnum2
		}

		if toV == openrpc.MethodObjectParamStructureEnum2 {
			return NonBreaking
		}

		fromV := from.(openrpc.MethodObjectParamStructure)
		if fromV == openrpc.MethodObjectParamStructureEnum2 {
			return Dangerous
		}

		if fromV != toV {
			return Breaking
		}
	case MethodParam:
		if changeType == Removed {
			return Breaking
		}
	case MethodParamRequired:
		if changeType == Added || changeType == Changed {
			return Dangerous
		}
	case MethodParamType:
		return Breaking
	case MethodResultName, MethodResultType:
		return Breaking
	case MethodError:
		if changeType == Removed {
			return Breaking
		}
	case ComponentsSchema:
		if changeType == Removed {
			return Breaking
		}
	case ComponentsSchemaProperty:
		if changeType == Removed {
			return Breaking
		}
	case ComponentsSchemaPropertyType:
		return Breaking
	case ComponentsDescriptor:
		if changeType == Removed {
			return Breaking
		}
	case ComponentsDescriptorType:
		return Breaking
	case Other:
		return Dangerous
	}

	return NonBreaking
}

func GetChangeObject(path []string) ChangeObject {
	if matchPath(path, "openrpc") {
		return OpenRPCVersion
	}

	if matchPath(path, "info") {
		if matchPath(path, "info.version") {
			return SchemaVersion
		}
		return SchemaInfo
	}

	if matchPath(path, "servers") {
		return SchemaServers
	}

	if matchPath(path, "methods") {
		if matchPath(path, "methods.*.params") {
			if matchPath(path, "methods.*.params.*.schema") {
				return MethodParamType
			}
			if matchPath(path, "methods.*.params.*.description") {
				return MethodParamDesc
			}

			return MethodParam
		}
		if matchPath(path, "methods.*.paramsStructure") {
			return MethodParamStructure
		}
		if matchPath(path, "methods.*.tags") {
			return MethodTags
		}
		if matchPath(path, "methods.*.summary") {
			return MethodSummary
		}

		if matchPath(path, "methods.*.result") {
			if matchPath(path, "methods.*.result.name") {
				return MethodResultName
			}
			if matchPath(path, "methods.*.result.description") {
				return MethodResultDesc
			}
			return MethodResultType
		}

		if matchPath(path, "methods.*.errors") {
			if matchPath(path, "methods.*.errors.message") {
				return MethodErrorMessage
			}
			return MethodError
		}

		return Method
	}

	if matchPath(path, "components.schemas") {
		if matchPath(path, "components.schemas.*.properties") {
			if matchPath(path, "components.schemas.*.properties.*.type") {
				return ComponentsSchemaPropertyType
			}
			if matchPath(path, "components.schemas.*.properties.*.description") {
				return ComponentsSchemaPropertyDesc
			}
			return ComponentsSchemaProperty
		}

		return ComponentsSchema
	}

	if matchPath(path, "components.contentDescriptors") {
		if matchPath(path, "components.contentDescriptors.*.summary") {
			return ComponentsDescriptorSummary
		}
		if matchPath(path, "components.contentDescriptors.*.schema") {
			return ComponentsDescriptorType
		}

		return ComponentsDescriptor
	}

	return Other
}

type Change struct {
	Path        []string         `json:"path"`
	Type        ChangeType       `json:"type"`
	Object      ChangeObject     `json:"object"`
	Criticality CriticalityLevel `json:"criticality"`
	From        interface{}
	To          interface{}

	// TODO Add related paths to definitions/schemas diffs
	//Related     []string `json:"related"`
}

type Diff struct {
	Criticality CriticalityLevel
	Changes     []Change
}

func NewDiff(oldSchema, newSchema openrpc.OpenrpcDocument) (*Diff, error) {
	diff := &Diff{
		Criticality: NonBreaking,
		Changes:     []Change{},
	}

	compareRecursive(diff)(oldSchema, newSchema, []string{})

	for _, c := range diff.Changes {
		if c.Criticality == Dangerous {
			diff.Criticality = Dangerous
		}
		if c.Criticality == Breaking {
			diff.Criticality = Breaking
			break
		}
	}

	return diff, nil
}

func NewChange(path []string, changeType ChangeType, from, to interface{}) Change {
	object := GetChangeObject(path)
	level := object.Level(changeType, from, to)

	return Change{
		Path:        path,
		Type:        changeType,
		Object:      object,
		Criticality: level,
		From:        from,
		To:          to,
	}
}

func compareRecursive(diff *Diff) func(old, new interface{}, path []string) {
	return func(old, new interface{}, path []string) {
		if !sameType(old, new) {
			diff.Changes = append(diff.Changes, NewChange(path, Changed, old, new))
		}

		if (isStruct(old) && isStruct(new)) || (isMap(old) && isMap(new)) || (isSlice(old) && isSlice(new)) {
			oldMap := getMap(old)
			newMap := getMap(new)

			for oldFieldName, oldFieldVal := range oldMap {
				if newFieldVal, ok := newMap[oldFieldName]; ok {
					compareRecursive(diff)(oldFieldVal, newFieldVal, append(path, oldFieldName))

					delete(newMap, oldFieldName)
				} else {
					diff.Changes = append(diff.Changes, NewChange(append(path, oldFieldName), Removed, oldFieldVal, nil))
				}
			}

			for leftFieldName, leftFieldVal := range newMap {
				diff.Changes = append(diff.Changes, NewChange(append(path, leftFieldName), Added, nil, leftFieldVal))
			}

			return
		}

		if change := compare(path, old, new); change != nil {
			diff.Changes = append(diff.Changes, *change)
		}
	}
}

func getMap(v interface{}) map[string]interface{} {
	result := map[string]interface{}{}
	if isNil(v) {
		return result
	}

	s := reflect.ValueOf(v)
	if s.Kind() == reflect.Ptr || s.Kind() == reflect.Interface {
		s = s.Elem()
	}

	switch s.Kind() {
	case reflect.Slice:
		for i := 0; i < s.Len(); i++ {
			val := s.Index(i).Interface()

			if isStruct(val) {
				if key, val := getIdentifier(val); key != nil {
					result[*key] = val
					continue
				}
			}

			result[fmt.Sprintf("%d", i)] = val
		}
	case reflect.Map:
		for _, k := range s.MapKeys() {
			result[fmt.Sprintf("%v", k.Interface())] = s.MapIndex(k).Interface()
		}
	case reflect.Struct:
		st := structs.New(s.Interface())
		for _, field := range st.Fields() {
			if !field.IsExported() {
				continue
			}
			if field.IsEmbedded() {
				for ek, ev := range getMap(field.Value()) {
					if _, ok := result[ek]; !ok {
						result[ek] = ev
					}
				}
				continue
			}

			tag := field.Tag("json")
			if tag == "-" {
				continue
			}
			if strings.Contains(tag, "omitempty") && field.IsZero() {
				continue
			}
			if tag == "" {
				tag = field.Name()
			}
			result[strings.Split(tag, ",")[0]] = field.Value()
		}
	}

	return result
}

func getIdentifier(v interface{}) (*string, interface{}) {
	str := structs.New(v)
	for _, field := range str.Fields() {
		if field.IsEmbedded() {
			return getIdentifier(field.Value())
		}
		if tag := field.Tag("json"); strings.Contains(tag, "identifier") {
			val := fmt.Sprintf("%v", field.Value())
			return &val, v
		}
	}

	return nil, nil
}

func compare(path []string, old, new interface{}) *Change {
	if reflect.DeepEqual(old, new) {
		return nil
	}

	var ch Change
	if isNil(old) {
		ch = NewChange(path, Added, nil, new)
	} else if isNil(new) {
		ch = NewChange(path, Removed, old, nil)
	} else {
		ch = NewChange(path, Changed, old, new)
	}

	return &ch
}

func isNil(v interface{}) bool {
	return v == nil || (reflect.ValueOf(v).Kind() == reflect.Ptr && reflect.ValueOf(v).IsNil())
}

func isStruct(v interface{}) bool {
	return structs.IsStruct(v)
}

func isSlice(v interface{}) bool {
	s := reflect.ValueOf(v)
	if s.Kind() == reflect.Ptr || s.Kind() == reflect.Interface {
		s = s.Elem()
	}

	return s.Kind() == reflect.Slice
}

func isMap(v interface{}) bool {
	s := reflect.ValueOf(v)
	if s.Kind() == reflect.Ptr || s.Kind() == reflect.Interface {
		s = s.Elem()
	}

	return s.Kind() == reflect.Map
}

func sameType(old, new interface{}) bool {
	return reflect.TypeOf(old) == reflect.TypeOf(new)
}

func matchPath(path []string, pattern string) bool {
	pp := strings.Split(pattern, ".")
	if len(path) < len(pp) {
		return false
	}

	for i, p := range pp {
		if p == "*" {
			continue
		}
		if path[i] != p {
			return false
		}
	}

	return true
}
