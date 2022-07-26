# Terraform AWS Serverless API Template

Template to write and deploy serverless APIs on AWS

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

## Useful Terraform Commands

- `terraform output api-endpoint`
- `terraform fmt -recursive`
- `terraform init`
- `terraform graph | pbcopy` -> `https://dreampuf.github.io/GraphvizOnline/`

## Cool Idea

`terraform watch`
Generalize into modules
