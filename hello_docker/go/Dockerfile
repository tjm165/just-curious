# Use an official Golang image as the base
FROM golang:1.21 AS builder

# Set the working directory inside the container
WORKDIR /app

COPY ./ ./

# Build the Go program
RUN go build -o main main.go

# Use a minimal base image for the final container
FROM alpine:latest

# Set the working directory in the new image
WORKDIR /root/

# Copy the compiled binary from the builder stage
COPY --from=builder /app/main .

# Set execution permissions
RUN chmod +x main

# Command to run the executable
CMD ["./main"]
