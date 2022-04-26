package openrpc

import (
	"testing"

	"github.com/vmkteam/zenrpc/v2"
	"github.com/vmkteam/zenrpc/v2/smd"
	"github.com/vmkteam/zenrpc/v2/testdata"
)

func TestNewDiff(t *testing.T) {
	rpc := zenrpc.NewServer(zenrpc.Options{})
	rpc.Register("arith", testdata.ArithService{})

	old := rpc.SMD()
	openrpcOld := NewSchema(old, "test_old", "")

	// change sum args and return to float
	new := old
	service := new.Services["arith.Sum"]
	service.Parameters = []smd.JSONSchema{
		{
			Name:        "items",
			Type:        smd.Array,
			Optional:    false,
			Description: "items to sum",
			Items:       map[string]string{"type": smd.Float},
		},
	}
	service.Returns.Type = smd.Float
	new.Services["arith.Sum"] = service

	openrpcNew := NewSchema(new, "test_new", "")
	openrpcNew.Methods = append(openrpcNew.Methods[1:], openrpcNew.Methods[:1]...)

	NewDiff(openrpcOld, openrpcNew)
}
