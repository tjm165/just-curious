# Use the official Ubuntu image as a base
FROM ubuntu:latest

# Update and install tcpdump
RUN apt-get update && \
    apt-get install -y tcpdump && \
    apt-get clean

# Set the default command to run when the container starts
CMD ["bash"]
