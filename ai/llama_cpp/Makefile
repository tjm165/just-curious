
init:
	conda activate llama



run:
	conda create -n llama python=3.9.16
	conda activate llama
	pip install -r requirements.txt
	export MODEL=codellama-7b.Q4_0.gguf
	python3 -m llama_cpp.server --model $MODEL --n_gpu_layers 1
	open http://localhost:8000/docs
