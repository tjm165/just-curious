from llama_cpp import Llama

llm = Llama(
      model_path="codellama-7b.Q4_0.gguf",
      chat_format="chatml",
      # n_gpu_layers=-1, # Uncomment to use GPU acceleration
      # seed=1337, # Uncomment to set a specific seed
      # n_ctx=2048, # Uncomment to increase the context window
)
# output = llm(
#       "Q: Explain why Lebron James is the best player ever A:", # Prompt
#       echo=True, # Echo the prompt back in the output
#       stop=["Q:", "\n"],
#       max_tokens=32,
# ) # Generate a completion, can also call create_completion



output = llm.create_chat_completion(
    messages=[
        {
            "role": "system",
            "content": "You are a helpful assistant that outputs in JSON.",
        },
        {"role": "user", "content": "Why is Lebron James the GOAT?"},
    ],
    response_format={
        "type": "json_object",
    },
    temperature=0.7,
)


print("-----------")
print(output)
