Resources
https://github.com/abetlen/llama-cpp-python

⭐ https://github.com/abetlen/llama-cpp-python/blob/main/docs/install/macos.md
https://huggingface.co/TheBloke/CodeLlama-7B-GGUF/blob/main/codellama-7b.Q4_0.gguf

Setup

```
brew install cmake
CMAKE_ARGS="-DLLAMA_METAL=off -DLLAMA_CLBLAST=on" FORCE_CMAKE=1 pip install -U git+https://github.com/abetlen/llama-cpp-python.git --no-cache-dir





export MODEL=codellama-7b.Q4_0.gguf
python3 -m llama_cpp.server --model $MODEL  --n_gpu_layers 1

```

Issues

1. Miniforge3-MacOSX-arm64.sh: line 299: /Users/tommymoawad/miniforge3/conda.exe: Bad CPU type in executable
   - $ chsh -s path
   - https://support.apple.com/en-us/102360
1. ninja: build stopped: subcommand failed.
   - https://github.com/abetlen/llama-cpp-python/issues/791#issuecomment-1750316025
