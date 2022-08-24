locals {
  zip_path      = "./dist/${var.source_dir}/lambda.zip"
  lambda_name   = "lambda-${var.method_type}-${var.route_key}"
  iam_role_name = "role-api-lambda-${var.route_key}"
}


output "iam_role" {
  value = aws_iam_role.lambda-iam
}

resource "null_resource" "compile" {
  # Use the directory hash to determine if any changes have been made
  triggers = {
    always_run = "${timestamp()}"
  }
  provisioner "local-exec" {
    working_dir = "${path.module}/../../../${var.source_dir}"
    command     = var.runtime == "go1.x" ? "GOOS=linux GOARCH=amd64 go build -o lambda main.go" : "echo pass for python and go"
  }
}

module "lambda-zip" {
  depends_on = [
    null_resource.compile
  ]
  source      = "../flex_zip"
  source_path = var.runtime == "go1.x" ? "${var.source_dir}/lambda" : var.source_dir
  is_dir      = var.runtime != "go1.x"
  output_path = local.zip_path
}

resource "aws_iam_role" "lambda-iam" {
  name = local.iam_role_name
  tags = {
    Name        = "serverless_template"
    Environment = "production"
  }
  assume_role_policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": "sts:AssumeRole",
            "Principal": {
                "Service": "lambda.amazonaws.com"
            },
            "Effect": "Allow",
            "Sid": ""
        }
    ]
}
EOF
}

resource "aws_lambda_function" "lambda" {
  filename         = local.zip_path
  function_name    = local.lambda_name
  role             = aws_iam_role.lambda-iam.arn
  handler          = var.runtime == "go1.x" ? "lambda" : "lambda.lambda_handler"
  source_code_hash = module.lambda-zip.zip.output_base64sha256
  runtime          = var.runtime
  tags = {
    Name        = "serverless_template"
    Environment = "production"
  }
  timeout = 300
}

resource "aws_apigatewayv2_integration" "lambda-integration" {
  api_id             = var.api_id
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
  integration_uri    = aws_lambda_function.lambda.invoke_arn
}
resource "aws_apigatewayv2_route" "lambda_route" {
  api_id    = var.api_id
  route_key = "${var.method_type} /${var.route_key}"
  target    = "integrations/${aws_apigatewayv2_integration.lambda-integration.id}"
}

resource "aws_lambda_permission" "api-gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda.arn
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${var.api_source_arn}/*/*/*"
}