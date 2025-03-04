package main

import (
	"fmt"
	"os"
	"os/exec"
	"bufio"
	"net/http"
)

func pullTxtData(url string) (*bufio.Scanner, error) {
	// Make HTTP GET request
	resp, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("error fetching file: %v", err)
	}

	// Check if HTTP status is OK
	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("error: HTTP status %s", resp.Status)
	}

	return bufio.NewScanner(resp.Body), nil
}

func main() {
	scriptPath := "./request.sh" // Ensure the script has execute permission (chmod +x *.sh)
	listUrl := "https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-Credentials/best15.txt"
	
	scanner, _ := pullTxtData(listUrl)

	// Read file line by line
	for scanner.Scan() {
		line := scanner.Text()
		fmt.Println("Trying exec.Command:", scriptPath, line) // Process each line
		cmd := exec.Command(scriptPath, line)

		// Capture the output
		output, err := cmd.CombinedOutput()
		if err != nil {
			fmt.Println("Error:", err)
			os.Exit(1)
		}

		// Print the output
		fmt.Println(string(output))
	}

	// Handle scanning errors
	if err := scanner.Err(); err != nil {
		fmt.Println("Error reading response body:", err)
	}
}
