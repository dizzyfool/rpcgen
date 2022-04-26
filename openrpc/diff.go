package openrpc

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

	MethodResultRef        ChangeObject = "METHOD_RESULT_REF"
	MethodResultName       ChangeObject = "METHOD_RESULT_NAME"
	MethodResultDesc       ChangeObject = "METHOD_RESULT_DESC"
	MethodResultSchemaRef  ChangeObject = "METHOD_RESULT_SCHEMA_REF"
	MethodResultSchemaDesc ChangeObject = "METHOD_RESULT_SCHEMA_DESC"

	MethodError        ChangeObject = "METHOD_ERROR"
	MethodErrorMessage ChangeObject = "METHOD_ERROR_MSG"

	ComponentsSchema             ChangeObject = "COMPONENTS_SCHEMA"
	ComponentsSchemaProperty     ChangeObject = "COMPONENTS_SCHEMA_PROPERTY"
	ComponentsSchemaPropertyDesc ChangeObject = "COMPONENTS_SCHEMA_PROPERTY_REQUIRED"
	ComponentsSchemaPropertyType ChangeObject = "COMPONENTS_SCHEMA_PROPERTY_TYPE" // type + ref + items type + items ref

	ComponentsDescriptor        ChangeObject = "COMPONENTS_DESCRIPTOR"
	ComponentsDescriptorSummary ChangeObject = "COMPONENTS_DESCRIPTOR_SUMMARY"
	ComponentsDescriptorType    ChangeObject = "COMPONENTS_DESCRIPTOR_TYPE"
)

type Change struct {
	Path        []string         `json:"path"`
	Type        ChangeType       `json:"type"`
	Object      ChangeObject     `json:"object"`
	Criticality CriticalityLevel `json:"criticality"`
	From        interface{}
	To          interface{}

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

	fmt.Println(diff)

	return nil, nil
}

func compareRecursive(diff *Diff) func(old, new interface{}, path []string) {
	return func(old, new interface{}, path []string) {
		if !sameType(old, new) {
			diff.Changes = append(diff.Changes, Change{
				Path:        path,
				Type:        Changed,
				Object:      "",
				Criticality: "",
				From:        old,
				To:          new,
			})
		}

		if (isStruct(old) && isStruct(new)) || (isMap(old) && isMap(new)) || (isSlice(old) && isSlice(new)) {
			oldMap := getMap(old)
			newMap := getMap(new)

			for oldFieldName, oldFieldVal := range oldMap {
				if newFieldVal, ok := newMap[oldFieldName]; ok {
					compareRecursive(diff)(oldFieldVal, newFieldVal, append(path, oldFieldName))

					delete(newMap, oldFieldName)
				} else {
					diff.Changes = append(diff.Changes, Change{
						Path:        append(path, oldFieldName),
						Type:        Removed,
						Object:      "",
						Criticality: "",
						From:        oldFieldVal,
						To:          nil,
					})
				}
			}

			for leftFieldName, leftFieldVal := range newMap {
				diff.Changes = append(diff.Changes, Change{
					Path:        append(path, leftFieldName),
					Type:        Added,
					Object:      "",
					Criticality: "",
					From:        nil,
					To:          leftFieldVal,
				})
			}

			return
		}

		if changed, changeType := compare(old, new); changed {
			diff.Changes = append(diff.Changes, Change{
				Path:        path,
				Type:        changeType,
				Object:      "",
				Criticality: "",
				From:        old,
				To:          new,
			})
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

func compare(old, new interface{}) (bool, ChangeType) {
	if reflect.DeepEqual(old, new) {
		return false, ""
	}

	if isNil(old) {
		return true, Added
	}

	if isNil(new) {
		return false, Removed
	}

	return true, Changed
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
