const { GoogleGenerativeAI } = require("@google/generative-ai");
import * as dotenv from "dotenv";
dotenv.config();
const fs = require("fs");

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

async function geminiPromptWithImage(prompt, imageParts) {
  const genAI = new GoogleGenerativeAI(process.env.BARD_API_KEY);

  // For text-and-image input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  return text;
}

async function imageToTrackRecommendations(imageParts) {
  const prompt = `You are a DJ. Please Generate a list of 5 songs in JSON format. The songs should relate to this image. Use the format like this example Example: {"recommendations": ["Song - Artist", "Song - Artist", ...]}`;
  const response = await geminiPromptWithImage(prompt, imageParts);
  return response;
}

async function run() {
  const imageParts = [
    fileToGenerativePart(`${process.cwd()}/functions/image1.png`, "image/png"),
  ];
  const resp = await imageToTrackRecommendations(imageParts);
  console.log(resp);
}

run();
