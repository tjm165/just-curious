# Lambda tests

[results](https://docs.google.com/spreadsheets/d/1JDyfZowv4baz4-L4gjoERHGiF4njhqyFfTCodCuFZAc/edit?usp=sharing)

## Getting Started

1. Fork this repo
1. `cp .envsample .env`
1. In `.env` update the environment variables
1. `terraform init && terraform apply -auto-approve`
1. `terraform output api-endpoint`

## Roadmap

# Status

- Got go to compile and upload. Now I just need Go to trigger on its own rathern than needing to delete the zip

### Current Goals

1. What do I want to test?

### Future Goals

1. Cleanup the default as python.
1. https://docs.aws.amazon.com/lambda/latest/dg/python-package.html
   1. This was a bit difficult to understand but basically you download the packages and then zip everything up "flat". Want to put packages separate such that can easily be gitignored like npm
   1. `pip install --target ./package requests`
   1.
   ```
   cd package
   zip -r ../my-deployment-package.zip .
   ```

## Useful Terraform Commands

- `terraform output api-endpoint`
- `terraform fmt -recursive`
- `terraform init`
- `terraform graph | pbcopy` -> `https://dreampuf.github.io/GraphvizOnline/`

## Cool Idea

`terraform watch`
Generalize into modules

# Scripts

1. API just to have https://ufsjj3gw67.execute-api.us-east-2.amazonaws.com/go2
1. Add a line `cd /Users/tommymoawad/Coding/aws_to_test && python3 trigger_lambda.py 10`
1. Get sizes `cd /Users/tommymoawad/Coding/aws_to_test/infa/src/project && python3 trigger_lambda.py 10`
1. Apply infa `cd /Users/tommymoawad/Coding/aws_to_test/infa && terraform apply --auto-approve`
1. Trigger in parallel `/Users/tommymoawad/Coding/aws_to_test/scripts python3 trigger_lambda.py 10`
1. Cleanup `/Users/tommymoawad/Coding/aws_to_test && cp scripts/lambda1.py infa/src/project/lambda1/python/lambda.py && cp scripts/lambda2.py infa/src/project/lambda2/python/lambda.py && cp scripts/go2.go infa/src/project/lambda2/go/main.go`
