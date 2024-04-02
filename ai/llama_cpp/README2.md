1. Download the [huggingface model](https://huggingface.co/TheBloke/CodeLlama-7B-GGUF/blob/main/codellama-7b.Q4_0.gguf)

1. `conda create -n llama python=3.9.16`

1. `conda activate llama`

1. `pip install llama-cpp-python`

   - Note that my Intel Chip MacBook Pro required using this command instead `CMAKE_ARGS="-DLLAMA_METAL=off -DLLAMA_CLBLAST=on" FORCE_CMAKE=1 pip install -U git+https://github.com/abetlen/llama-cpp-python.git --no-cache-dir`

1. `pip install 'llama-cpp-python[server]'`
1. `python3 -m llama_cpp.server --model models/codellama-7b.Q4_0.gguf --n_gpu_layers 1`
