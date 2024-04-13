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

export default async function getRecommendationForImage() {
  const genAI = new GoogleGenerativeAI(process.env.BARD_API_KEY);

  // For text-and-image input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt = "Describe this picture";

  const imageParts = [
    fileToGenerativePart(`${process.cwd()}/sandbox/image1.png`, "image/png"),
  ];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

getRecommendationForImage();
