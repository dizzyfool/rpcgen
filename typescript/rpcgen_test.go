package typescript

import (
	"bytes"
	"encoding/json"
	"fmt"
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

	cl := NewClient(rpc.SMD(), nil)

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

	typeMapper := func(in smd.JSONSchema, tsType Type) Type {
		if in.Type == "object" {
			if in.Description == "ApiPharmacy" && in.Name == "pharmacies" {
				tsType.Type = fmt.Sprintf("Record<number, I%s>", in.Description)
			}
			if in.Description == "ApiMapExtendedPickupPrice" && in.Name == "extendedPickups" {
				tsType.Type = fmt.Sprintf("Record<number, I%s>", in.Description)
			}
			if in.Description == "ApiMapPharmacyPrice" && in.Name == "pharmacies" {
				tsType.Type = fmt.Sprintf("Record<number, I%s>", in.Description)
			}
			if in.Description == "ApiMapPartner" && in.Name == "partners" {
				tsType.Type = fmt.Sprintf("Record<number, I%s>", in.Description)
			}
		}
		return tsType
	}
	cl := NewClient(schema, typeMapper)

	generated, err := cl.Generate()
	if err != nil {
		t.Fatalf("generate go client: %v", err)
	}

	err = ioutil.WriteFile("./testdata/apisrv.ts", generated, os.ModePerm)
	if err != nil {
		t.Fatalf("save openrpc: %v", err)
	}
}
