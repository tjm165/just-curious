"use server";
const { GoogleGenerativeAI } = require("@google/generative-ai");
import * as dotenv from "dotenv";
dotenv.config();
const fs = require("fs");

const mimeType = "image/png";

// Converts local file information to a GoogleGenerativeAI.Part object.

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
  return response;
}

export async function getRecommendationsFromImage(buf: any) {
  console.log("BUFF IS");
  console.log(buf);
  console.log(typeof buf);
  console.log(Object.keys(buf));

  const fileToGenerativePart = () => {
    return {
      inlineData: {
        data: Buffer.from(buf).toString("base64"),
        mimeType,
      },
    };
  };

  const imageParts = [fileToGenerativePart()];

  const resp = await imageToTrackRecommendations(imageParts);
  console.log(resp);

  console.log("-------");

  // Could make more durable with regex
  const resultString = resp.substring(
    " ```json".length,
    resp.length - "```".length
  );
  console.log(resultString);

  const respJson = JSON.parse(resultString);
  console.log(respJson);

  return respJson;
}
