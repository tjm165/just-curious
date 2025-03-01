# Use an official OpenJDK image as a base
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the Java source files into the container
COPY . /app

# Compile the Java files
RUN javac -d . mypackage/Main.java

# Command to run the Java application
CMD ["java", "mypackage.Main"]
