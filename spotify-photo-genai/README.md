What would be the best prompt to ask ChatGPT?

- I've got an image here and I'm curious what song it brings to mind. Could you recommend a song that fits the mood or theme of this image?

Research links

`source .env` - but not quite working but also not really worth it

- Payments starting in May? https://ai.google.dev/pricing
- Docs: https://ai.google.dev/tutorials/python_quickstart#generate_text_from_image_and_text_inputs
  - Looks like they have NodeJS so that's nice.

## Gemini API

```
curl \
 -H 'Content-Type: application/json' \
 -d '{"contents":[{"parts":[{"text":"Write a story about a magic backpack"}]}]}' \
 -X POST 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=API_KEY'
```

## Spotify API

1.  https://developer.spotify.com/dashboard
