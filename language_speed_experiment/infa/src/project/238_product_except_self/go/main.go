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

func productExceptSelf(nums []int) []int {
        forward := make([]int, len(nums))
        backward := make([]int, len(nums))
        result := make([]int, len(nums))
    
        for i := range nums {
            forward[i], backward[i] = 1, 1
        }
    
        for i := 1; i < len(nums); i++ {
            forward[i] = forward[i - 1] * nums[i - 1]
        }
    
        for i := len(nums) - 2; i >= 0; i-- {
            backward[i] = backward[i + 1] * nums[i + 1]
        }
    
        for i := range nums {
            result[i] = forward[i] * backward[i]
        }
    
        return result
    }

func HandleRequest(request Request) (Response, error) {
        productExceptSelf([]int{45, 76, 56, 25, 27, 89, 38, 6, 9, 74, 94, 79, 31, 5, 52, 87, 40, 50, 85, 90, 9, 33, 46, 71, 35, 9, 17, 80, 62, 12, 95, 78, 35, 11, 89, 34, 75, 92, 54, 91, 53, 17, 62, 91, 40, 36, 29, 49, 68, 7, 56, 78, 6, 32, 10, 35, 90, 27, 33, 91, 9, 78, 32, 84, 12, 1, 99, 62, 58, 64, 35, 61, 69, 70, 26, 25, 8, 26, 48, 30, 84, 96, 84, 21, 100, 42, 36, 94, 89, 27, 91, 49, 21, 29, 43, 33, 3, 10, 60, 11})

	var message bytes.Buffer
	message.WriteString("{\"message\": \"")
	message.WriteString("Hello from Go - Product Except Self")
	message.WriteString("\"}")

        return Response {
                Body: fmt.Sprintf(message.String()),
                StatusCode: 200,
        }, nil
}

func main() {
        lambda.Start(HandleRequest)
}