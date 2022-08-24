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
module "api_lambda1_python" {
  source         = "./modules/api_lambda"
  route_key      = "python1"
  method_type    = "GET"
  source_dir     = "src/project/lambda1/python"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
}

# module "api_lambda1_go" {
#   source         = "./modules/api_lambda"
#   route_key      = "go1"
#   method_type    = "GET"
#   source_dir     = "src/project/lambda1/go"
#   api_id         = module.global_api_gateway.api_id
#   api_source_arn = module.global_api_gateway.execution_arn
#   runtime        = "go1.x"
# }

module "api_lambda2_python" {
  source         = "./modules/api_lambda"
  route_key      = "python2"
  method_type    = "GET"
  source_dir     = "src/project/lambda2/python"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
}

module "api_lambda2_go" {
  source         = "./modules/api_lambda"
  route_key      = "go2"
  method_type    = "GET"
  source_dir     = "src/project/lambda2/go"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
  runtime        = "go1.x"
}

# bytes is 
# wc -c src/project/lambda2/python/lambda.py 