"use server";
const { GoogleGenerativeAI } = require("@google/generative-ai");
import * as dotenv from "dotenv";
dotenv.config();

const mimeType = "image/png";

async function geminiPromptWithImage(prompt: string, imageParts: any) {
  const genAI = new GoogleGenerativeAI(process.env.BARD_API_KEY);

  // For text-and-image input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  return text;
}

async function imageToTrackRecommendations(imageParts: any) {
  const prompt = `You are an assistant that generates JSON. You always return JSON with no additional text. Please Generate a list of 5 songs in JSON format. The songs should relate to this image. Use the format like this example Example: {"recommendations": ["Song - Artist", "Song - Artist", ...]}.`;
  const response = await geminiPromptWithImage(prompt, imageParts);

  // Could make more durable with regex
  const responsePrime = response.substring(
    " ```json".length,
    response.length - "```".length
  );
  return JSON.parse(responsePrime);
}

export async function getRecommendationsFromImage(buf: any) {
  const imageParts = [
    {
      inlineData: {
        data: Buffer.from(buf).toString("base64"),
        mimeType,
      },
    },
  ];

  const response = await imageToTrackRecommendations(imageParts);
  return response;
}
