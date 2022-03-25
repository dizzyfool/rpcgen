package openrpc_typescript

import (
	"bytes"
	"encoding/json"
	openrpc_document "github.com/open-rpc/meta-schema"
	"github.com/vmkteam/rpcgen/v2/openrpc"
	"github.com/vmkteam/zenrpc/v2/smd"
	"io/ioutil"
	"os"
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

	if !bytes.Equal(generated, testData) {
		t.Fatalf("bad generator output")
	}
}

func TestGenerateOpenRPCClientAPISRV(t *testing.T) {
	bs, err := ioutil.ReadFile("./testdata/api.json")
	if err != nil {
		t.Fatalf("read json: %v", err)
	}

	schema := smd.Schema{}
	if err := json.Unmarshal(bs, &schema); err != nil {
		t.Fatalf("read smd: %v", err)
	}

	openrpcCl := openrpc.NewClient(schema, "test", "http://localhost")

	typeMapper := func(in openrpc_document.JSONSchema, tsType Type) Type {
		//if in.Type == "object" {
		//	if in.Description == "ApiPharmacy" && in.Name == "pharmacies" {
		//		tsType.Type = fmt.Sprintf("Record<number, I%s>", in.Description)
		//	}
		//	if in.Description == "ApiMapExtendedPickupPrice" && in.Name == "extendedPickups" {
		//		tsType.Type = fmt.Sprintf("Record<number, I%s>", in.Description)
		//	}
		//	if in.Description == "ApiMapPharmacyPrice" && in.Name == "pharmacies" {
		//		tsType.Type = fmt.Sprintf("Record<number, I%s>", in.Description)
		//	}
		//	if in.Description == "ApiMapPartner" && in.Name == "partners" {
		//		tsType.Type = fmt.Sprintf("Record<number, I%s>", in.Description)
		//	}
		//}
		return tsType
	}
	cl := NewClient(openrpcCl.GenerateSchema(), typeMapper)

	generated, err := cl.Generate()
	if err != nil {
		t.Fatalf("generate go client: %v", err)
	}

	err = ioutil.WriteFile("./testdata/apisrv.ts", generated, os.ModePerm)
	if err != nil {
		t.Fatalf("save openrpc: %v", err)
	}
}
