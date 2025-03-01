# Use OpenJDK base image
FROM openjdk:17

# Set the working directory in the container
WORKDIR /app

# Copy the Java files to the container
COPY Main.java .

# Compile the Java program
RUN javac Main.java

# Run the Java program when the container starts
CMD ["java", "Main"]
