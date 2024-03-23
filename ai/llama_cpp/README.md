This should just be dockerized too many issues

Quick start

1. Download the [huggingface model](https://huggingface.co/TheBloke/CodeLlama-7B-GGUF/blob/main/codellama-7b.Q4_0.gguf)

1. `conda create -n llama python=3.9.16`

1. `conda activate llama`

1. `pip install llama-cpp-python`
   OR what worked for me was
   `CMAKE_ARGS="-DLLAMA_METAL=off -DLLAMA_CLBLAST=on" FORCE_CMAKE=1 pip install -U git+https://github.com/abetlen/llama-cpp-python.git --no-cache-dir`

1. `pip install 'llama-cpp-python[server]'`

Run in server mode

```
export MODEL=codellama-7b.Q4_0.gguf
python3 -m llama_cpp.server --model $MODEL --n_gpu_layers 1
```

http://localhost:8000/docs

```
curl -X 'POST' \
 'http://localhost:8000/v1/completions' \
 -H 'accept: application/json' \
 -H 'Content-Type: application/json' \
 -d '{
  "prompt": "How many pianos are in London?",
}'
```
