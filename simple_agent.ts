import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";
import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

// Basit bir reverse text tool oluşturalım (MCP yerine)
const reverseTextTool = createTool({
  id: "reverse_text_tool",
  inputSchema: z.object({
    text: z.string().describe("Ters çevrilecek metin"),
  }),
  description: "Verilen metni ters çevirir",
  execute: async ({ context: { text } }) => {
    const reversed = text.split('').reverse().join('');
    return { reversed_text: reversed };
  },
});

// Agent'ı basit araçlar ile oluşturuyoruz
export const agent = new Agent({
  name: "SimpleAgent",
  instructions: "Sen Türkçe konuşan yardımcı bir AI asistanısın. Kullanıcılara yardım ediyorsun ve araçları kullanabilirsin.",
  model: openai("gpt-4o-mini"),
  tools: {
    reverseTextTool,
  },
});
