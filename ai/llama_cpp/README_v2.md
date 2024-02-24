Quick start

1. Download the [huggingface model](https://huggingface.co/TheBloke/CodeLlama-7B-GGUF/blob/main/codellama-7b.Q4_0.gguf)

1. `conda create -n llama python=3.9.16`

1. `pip install llama-cpp-python`

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
