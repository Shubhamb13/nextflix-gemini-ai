import OpenAI from "openai";
import { GptApiKey } from "./constans";

const openai = new OpenAI({
  apiKey: GptApiKey,dangerouslyAllowBrowser: true // This is the default and can be omitted
});
export default openai;

import { GoogleGenAI } from "@google/genai";

