variable "is_dir" {
  type        = bool
  description = "True if source_path is a directory. False if the source_path is a file"
}

variable "source_path" {
  type        = string
  description = "The source to zip"
}

variable "output_path" {
  type        = string
  description = "Where to zip the file to"
}