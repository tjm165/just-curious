data "archive_file" "file_zip" {
  count       = var.is_dir ? 0 : 1
  type        = "zip"
  source_file = var.source_path
  # source_dir  = var.source_path
  output_path = var.output_path
}

data "archive_file" "dir_zip" {
  count       = var.is_dir ? 1 : 0
  type        = "zip"
  source_dir  = var.source_path
  output_path = var.output_path
}

output "zip" {
  value = var.is_dir ? data.archive_file.dir_zip[0] : data.archive_file.file_zip[0]
}