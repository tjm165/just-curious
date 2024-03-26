1. Download the [huggingface model](https://huggingface.co/TheBloke/CodeLlama-7B-GGUF/blob/main/codellama-7b.Q4_0.gguf) to `$(pwd)/models/codellama-7b.Q4_0.gguf`
1. `docker pull ghcr.io/abetlen/llama-cpp-python:v0.2.57`
1. `docker run --rm -it -p 8000:8000 -v $(pwd)/models:/models -e MODEL=/models/codellama-7b.Q4_0.gguf ghcr.io/abetlen/llama-cpp-python:latest`
