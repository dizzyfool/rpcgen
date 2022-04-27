package openrpc_diff

import (
	"encoding/json"
	"fmt"

	openrpc "github.com/vmkteam/rpcgen/v2/openrpc_document"
)

// Generator main package structure
type Generator struct {
	old openrpc.OpenrpcDocument
	new openrpc.OpenrpcDocument
}

// NewClient create Generator from zenrpc/v2 SMD.
func NewClient(old, new openrpc.OpenrpcDocument) *Generator {
	return &Generator{old: old, new: new}
}

// Generate returns generated openrpc schema.
func (g Generator) Generate() ([]byte, error) {
	diff, err := NewDiff(g.old, g.new)
	if err != nil {
		return nil, fmt.Errorf("build diff error: %w", err)
	}
	return json.MarshalIndent(diff, " ", "	")
}
