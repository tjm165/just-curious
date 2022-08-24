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

func containsDuplicate(nums []int) bool {
	record := make(map[int]bool, len(nums))
	for _, n := range nums {
		if _, found := record[n]; found {
			return true
		}
		record[n] = true
	}
	return false
}

func HandleRequest(request Request) (Response, error) {
        containsDuplicate([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 9})

	var message bytes.Buffer
	message.WriteString("{\"message\": \"")
	message.WriteString("Hello from Go - Contains Duplicate")
	message.WriteString("\"}")

        return Response {
                Body: fmt.Sprintf(message.String()),
                StatusCode: 200,
        }, nil
}

func main() {
        lambda.Start(HandleRequest)
}