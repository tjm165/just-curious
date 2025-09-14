import sys
from gtts import gTTS
import os

if len(sys.argv) < 2:
    print("Usage: python main.py <text_file>")
    sys.exit(1)

text_file = sys.argv[1]

with open(text_file, 'r') as file:
    text = file.read()

mp3_file = os.path.splitext(text_file)[0] + '.mp3'

tts = gTTS(text)
tts.save(mp3_file)