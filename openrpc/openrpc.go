package openrpc

import (
	"encoding/json"

	openrpc "github.com/vmkteam/meta-schema"
	"github.com/vmkteam/zenrpc/v2/smd"
)

// Generator main package structure
type Generator struct {
	schema openrpc.OpenrpcDocument
}

// NewClient create Generator from zenrpc/v2 SMD.
func NewClient(schema smd.Schema, title, host string) *Generator {
	if title == "" {
		title = "json-rpc 2.0 sever"
	}
	if host == "" {
		host = "http://localhost"
	}

	return &Generator{schema: NewSchema(schema, title, host)}
}

// Generate returns generated openrpc schema.
func (g Generator) Generate() ([]byte, error) {
	return json.MarshalIndent(g.schema, "", "	")
}

// GenerateSchema returns generated openrpc schema as struct.
func (g Generator) GenerateSchema() openrpc.OpenrpcDocument {
	return g.schema
}
