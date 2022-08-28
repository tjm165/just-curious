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

module "api_hello_world_node" {
  source         = "./modules/api_lambda"
  route_key      = "hello_world/node"
  method_type    = "GET"
  source_dir     = "src/project/hello_world/node"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
  runtime        = "nodejs12.x"
}

module "api_hello_world_python" {
  source         = "./modules/api_lambda"
  route_key      = "hello_world/python"
  method_type    = "GET"
  source_dir     = "src/project/hello_world/python"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
}

module "api_hello_world_go" {
  source         = "./modules/api_lambda"
  route_key      = "hello_world/go"
  method_type    = "GET"
  source_dir     = "src/project/hello_world/go"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
  runtime        = "go1.x"
}

###
module "api_22_two_sum_node" {
  source         = "./modules/api_lambda"
  route_key      = "22_two_sum/node"
  method_type    = "GET"
  source_dir     = "src/project/22_two_sum/node"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
  runtime        = "nodejs12.x"
}

module "api_22_two_sum_python" {
  source         = "./modules/api_lambda"
  route_key      = "22_two_sum/python"
  method_type    = "GET"
  source_dir     = "src/project/22_two_sum/python"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
}

module "api_22_two_sum_go" {
  source         = "./modules/api_lambda"
  route_key      = "22_two_sum/go"
  method_type    = "GET"
  source_dir     = "src/project/22_two_sum/go"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
  runtime        = "go1.x"
}

###

module "api_128_longest_consecutive_sequence_node" {
  source         = "./modules/api_lambda"
  route_key      = "128_longest_consecutive_sequence/node"
  method_type    = "GET"
  source_dir     = "src/project/128_longest_consecutive_sequence/node"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
  runtime        = "nodejs12.x"
}

module "api_128_longest_consecutive_sequence_python" {
  source         = "./modules/api_lambda"
  route_key      = "128_longest_consecutive_sequence/python"
  method_type    = "GET"
  source_dir     = "src/project/128_longest_consecutive_sequence/python"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
}

module "api_128_longest_consecutive_sequence_go" {
  source         = "./modules/api_lambda"
  route_key      = "128_longest_consecutive_sequence/go"
  method_type    = "GET"
  source_dir     = "src/project/128_longest_consecutive_sequence/go"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
  runtime        = "go1.x"
}

###
module "api_217_contains_duplicate_node" {
  source         = "./modules/api_lambda"
  route_key      = "217_contains_duplicate/node"
  method_type    = "GET"
  source_dir     = "src/project/217_contains_duplicate/node"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
  runtime        = "nodejs12.x"
}

module "api_217_contains_duplicate_python" {
  source         = "./modules/api_lambda"
  route_key      = "217_contains_duplicate/python"
  method_type    = "GET"
  source_dir     = "src/project/217_contains_duplicate/python"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
}

module "api_217_contains_duplicate_go" {
  source         = "./modules/api_lambda"
  route_key      = "217_contains_duplicate/go"
  method_type    = "GET"
  source_dir     = "src/project/217_contains_duplicate/go"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
  runtime        = "go1.x"
}

###
module "api_238_product_except_self_node" { # Tommy Problem
  source         = "./modules/api_lambda"
  route_key      = "238_product_except_self/node"
  method_type    = "GET"
  source_dir     = "src/project/238_product_except_self/node"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
  runtime        = "nodejs12.x"
}

module "api_238_product_except_self_python" {
  source         = "./modules/api_lambda"
  route_key      = "238_product_except_self/python"
  method_type    = "GET"
  source_dir     = "src/project/238_product_except_self/python"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
}

module "api_238_product_except_self_go" {
  source         = "./modules/api_lambda"
  route_key      = "238_product_except_self/go"
  method_type    = "GET"
  source_dir     = "src/project/238_product_except_self/go"
  api_id         = module.global_api_gateway.api_id
  api_source_arn = module.global_api_gateway.execution_arn
  runtime        = "go1.x"
}