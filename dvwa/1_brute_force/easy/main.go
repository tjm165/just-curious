package main

import (
	"fmt"
	"os"
	"os/exec"
	"bufio"
	"net/http"
)

func main() {
	listUrl := "https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-Credentials/best15.txt"
	
	// Make HTTP GET request
	resp, err := http.Get(listUrl)
	if err != nil {
		fmt.Println("Error fetching file:", err)
		return
	}
	defer resp.Body.Close()

	// Check if HTTP status is OK
	if resp.StatusCode != http.StatusOK {
		fmt.Println("Error: HTTP status", resp.Status)
		return
	}

	// Read file line by line
	scanner := bufio.NewScanner(resp.Body)
	for scanner.Scan() {
		line := scanner.Text()

		// Define the shell script path
		scriptPath := "./request.sh" // Ensure the script has execute permission (chmod +x *.sh)

		// Define the argument
		arg := line

		fmt.Println("Trying exec.Command:", scriptPath, arg) // Process each line

		// Execute the script with the argument
		cmd := exec.Command(scriptPath, arg)

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
