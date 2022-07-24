package main

import (
        "fmt"
        "github.com/aws/aws-lambda-go/lambda"
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
        return Response {
                Body: fmt.Sprintf("Hello from GetGo new4"),
                StatusCode: 200,
        }, nil
}

func main() {
        lambda.Start(HandleRequest)
}


// GOOS=linux go build -o filename
// handler is filename