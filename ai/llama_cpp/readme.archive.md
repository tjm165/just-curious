\*\*\* This is an old readme file while I was trying things out. It does n

Resources
https://github.com/abetlen/llama-cpp-python

⭐ https://github.com/abetlen/llama-cpp-python/blob/main/docs/install/macos.md
https://huggingface.co/TheBloke/CodeLlama-7B-GGUF/blob/main/codellama-7b.Q4_0.gguf

Setup

```
 conda activate llama

brew install cmake
CMAKE_ARGS="-DLLAMA_METAL=off -DLLAMA_CLBLAST=on" FORCE_CMAKE=1 pip install -U git+https://github.com/abetlen/llama-cpp-python.git --no-cache-dir

conda create -n llama python=3.9.16

```

conda activate llama
export MODEL=codellama-7b.Q4_0.gguf
python3 -m llama_cpp.server --model $MODEL --n_gpu_layers 1

```

Issues

1. Miniforge3-MacOSX-arm64.sh: line 299: /Users/tommymoawad/miniforge3/conda.exe: Bad CPU type in executable
   - $ chsh -s path
   - https://support.apple.com/en-us/102360
1. ninja: build stopped: subcommand failed.
   - https://github.com/abetlen/llama-cpp-python/issues/791#issuecomment-1750316025

```

curl -X 'POST' \
 'http://localhost:8000/v1/completions' \
 -H 'accept: application/json' \
 -H 'Content-Type: application/json' \
 -d '{
"prompt": "\n\n### Instructions:\nWhat is the capital of France?\n\n### Response:\n",
"stop": [
"\n",
"###"
]
}'

```

```
