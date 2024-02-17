import os
import openai
from openai import OpenAI

client = OpenAI()
print(openai)

client.chat.completions.create(model="gpt-3.5-turbo",
messages=[
  {"role": "user", "content": "Hello!"}
])


print(completion.choices[0].message)