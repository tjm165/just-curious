package main

import (
        "fmt"
        "github.com/aws/aws-lambda-go/lambda"
        "bytes"
)

type Request struct {
        ID float64 `json:"id"`
        Value string `json:"value"`
}

type Response struct {
        Body string `json:"body"`
        StatusCode int `json:"statusCode"`
}

func HandleRequest(request Request) (Response, error) {

        for i:=0; i < 10000; i++ {
                fmt.Println(i)
        }   

	var message bytes.Buffer
	message.WriteString("{\"message\": \"")
	message.WriteString("Hello from Go - Iterate")
	message.WriteString("\"}")

        return Response {
                Body: fmt.Sprintf(message.String()),
                StatusCode: 200,
        }, nil
}

func main() {
        lambda.Start(HandleRequest)
}