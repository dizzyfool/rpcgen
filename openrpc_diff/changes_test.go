package openrpc_diff

import (
	"github.com/vmkteam/rpcgen/v2/openrpc"
	"testing"

	"github.com/vmkteam/zenrpc/v2"
	"github.com/vmkteam/zenrpc/v2/smd"
	"github.com/vmkteam/zenrpc/v2/testdata"
)

func TestNewDiff(t *testing.T) {
	rpc := zenrpc.NewServer(zenrpc.Options{})
	rpc.Register("arith", testdata.ArithService{})

	old := rpc.SMD()
	openrpcOld := openrpc.NewSchema(old, "test_old", "")

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

	openrpcNew := openrpc.NewSchema(new, "test_new", "")
	openrpcNew.Methods = append(openrpcNew.Methods[1:], openrpcNew.Methods[:1]...)

	diff, err := NewDiff(openrpcOld, openrpcNew)
	if err != nil {
		t.Fatalf("new diff error: %v", err)
	}

	if diff.Criticality != Breaking {
		t.Fatalf("diff.Criticality = %v, want: %v", diff.Criticality, Breaking)
	}

	if len(diff.Changes) != 6 {
		t.Fatalf("len(diff.Changes) = %v, want: %v", len(diff.Changes), 6)
	}
}
