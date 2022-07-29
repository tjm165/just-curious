# Lambda Tests

The goal of this is to creaet a general infastructure and scripts to run experiments in AWS Lambda.

[results](https://docs.google.com/spreadsheets/d/1JDyfZowv4baz4-L4gjoERHGiF4njhqyFfTCodCuFZAc/edit?usp=sharing)

# Experiment

1. [Python vs Network Python vs Go](https://docs.google.com/spreadsheets/d/1JDyfZowv4baz4-L4gjoERHGiF4njhqyFfTCodCuFZAc/edit#gid=166982984)

## Getting Started

1. Fork this repo
1. `cp .envsample .env`
1. In `.env` update the environment variables
1. `terraform init && terraform apply -auto-approve`
1. `terraform output api-endpoint`

# Current Endpoints (just to have. Obviously base could change.)

1. [Python1](https://ufsjj3gw67.execute-api.us-east-2.amazonaws.com/python1) calls Python2
1. [Python2](https://ufsjj3gw67.execute-api.us-east-2.amazonaws.com/python2)
1. [Go2](https://ufsjj3gw67.execute-api.us-east-2.amazonaws.com/go2)

# Scripts/Functionality

## Automated Infa

1. Create endpoints
1. Compile Go vs not compile python

## Scripts to Automate

1. Add a line

   ```
   cd /Users/tommymoawad/Coding/aws_to_test && python3 trigger_lambda.py 10
   ```

1. Get sizes

   ```
   cd /Users/tommymoawad/Coding/aws_to_test/infa/src/project && python3 trigger_lambda.py 10
   ```

1. Apply infa

   ```
   cd /Users/tommymoawad/Coding/aws_to_test/infa && terraform apply --auto-approve
   ```

1. Trigger in parallel
   ```
   cd /Users/tommymoawad/Coding/aws_to_test/scripts python3 trigger_lambda.py 10
   ```
1. Cleanup
   ```
   cd /Users/tommymoawad/Coding/aws_to_test && cp scripts/lambda1.py infa/src/project/lambda1/python/lambda.py && cp scripts/lambda2.py infa/src/project/lambda2/python/lambda.py && cp scripts/go2.go infa/src/project/lambda2/go/main.go
   ```
1. [Install Python Dependencies](https://docs.aws.amazon.com/lambda/latest/dg/python-package.html)
   1. This was a bit difficult to understand but basically you download the packages and then zip everything up "flat". Want to put packages separate such that can easily be gitignored like npm
   1. `pip install --target ./package requests`
   1. ```
      cd package
      zip -r ../my-deployment-package.zip .
      ```

### To Do

1. Cleanup the default as python.
