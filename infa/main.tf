provider "aws" {
  region = "us-east-2"
}
locals {
  name = "AWS_METRICS_TEST" # remember to set your lambda to call this name
}
output "api-endpoint" {
  value = module.global_api_gateway.lambda_api.api_endpoint
}

### Create API Gateway
module "global_api_gateway" {
  source = "./modules/api_gateway"
  name   = local.name
}

### Create a simple lambda at a particular API path
module "api_lambda_python" {
  source         = "./modules/api_lambda"
  route_key      = "python"
  method_type    = "GET"
  source_dir     = "src/project/helloworld/python"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
}

module "api_lambda_go" {
  source         = "./modules/api_lambda"
  route_key      = "go"
  method_type    = "GET"
  source_dir     = "src/project/helloworld/go"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
  runtime        = "go1.x"
}