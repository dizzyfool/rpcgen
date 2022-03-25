package openrpc_typescript

import (
	"bytes"
	"github.com/vmkteam/rpcgen/v2/openrpc"
	"io/ioutil"
	"testing"

	"github.com/vmkteam/zenrpc/v2"
	"github.com/vmkteam/zenrpc/v2/testdata"
)

func TestGenerateTypeScriptClient(t *testing.T) {
	rpc := zenrpc.NewServer(zenrpc.Options{})
	rpc.Register("catalogue", testdata.CatalogueService{})

	// openrpc
	openrpcCl := openrpc.NewClient(rpc.SMD(), "test", "http://localhost")
	cl := NewClient(openrpcCl.GenerateSchema(), nil)

	generated, err := cl.Generate()
	if err != nil {
		t.Fatalf("generate typescript client: %v", err)
	}

	testData, err := ioutil.ReadFile("./testdata/catalogue_client.ts")
	if err != nil {
		t.Fatalf("open test data file: %v", err)
	}

	//err = ioutil.WriteFile("./testdata/catalogue_client_out.ts", generated, os.ModePerm)
	//if err != nil {
	//	t.Fatalf("save openrpc: %v", err)
	//}

	if !bytes.Equal(generated, testData) {
		t.Fatalf("bad generator output")
	}
}
