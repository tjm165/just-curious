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

func longestConsecutive(nums []int) int {
	if len(nums) <= 1 {
		return len(nums)
	}
	valid := make(map[int]bool)
	for _, num := range nums {
		valid[num] = true
	}
	var result, left, right int
	for _, num := range nums {
		if !valid[num] {
			continue
		}
		for left = num - 1; valid[left]; left-- {
			delete(valid, left)
		}
		for right = num + 1; valid[right]; right++ {
			delete(valid, right)
		}
		if result < right-left-1 {
			result = right - left - 1
		}
	}
	return result
}

func HandleRequest(request Request) (Response, error) {
        longestConsecutive([]int{45, 76, 56, 25, 27, 89, 38, 6, 9, 74, 94, 79, 31, 5, 52, 87, 40, 50, 85, 90, 9, 33, 46, 71, 35, 9, 17, 80, 62, 12, 95, 78, 35, 11, 89, 34, 75, 92, 54, 91, 53, 17, 62, 91, 40, 36, 29, 49, 68, 7, 56, 78, 6, 32, 10, 35, 90, 27, 33, 91, 9, 78, 32, 84, 12, 1, 99, 62, 58, 64, 35, 61, 69, 70, 26, 25, 8, 26, 48, 30, 84, 96, 84, 21, 100, 42, 36, 94, 89, 27, 91, 49, 21, 29, 43, 33, 3, 10, 60, 11})

	var message bytes.Buffer
	message.WriteString("{\"message\": \"")
	message.WriteString("Hello from Go - Longest Consecutive Sequence")
	message.WriteString("\"}")

        return Response {
                Body: fmt.Sprintf(message.String()),
                StatusCode: 200,
        }, nil
}

func main() {
        lambda.Start(HandleRequest)
}