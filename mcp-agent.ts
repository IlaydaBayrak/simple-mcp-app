import { MCPClient } from "@mastra/mcp";
import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";
import dotenv from "dotenv";

dotenv.config();

// MCP Client ayarı: Smithery HTTP MCP Server
// Not: Bu endpoint çalışmıyorsa, önce basit agent'ı kullanın
export async function createMCPAgent() {
  try {
    const mcp = new MCPClient({
      servers: {
        smithery: {
          // Smithery endpoint'i - bu format doğru olmayabilir
          url: new URL("https://server.smithery.ai/@IlaydaBayrak/simple-mcp/mcp"),
          requestInit: {
            headers: {
              'Authorization': 'Bearer d67d4026-6aea-450e-a272-e61dd3ab3f27',
            },
          },
          timeout: 30000,
        },
      },
    });

    // MCP araçlarını al
    const tools = await mcp.getTools();
    console.log("🔧 MCP araçları yüklendi:", Object.keys(tools));

    // Agent'ı MCP araçları ile oluştur
    const agent = new Agent({
      name: "MCPAgent",
      instructions: "Sen Türkçe konuşan yardımcı bir AI asistanısın. MCP araçlarını kullanarak kullanıcılara yardım ediyorsun.",
      model: openai("gpt-4o-mini"),
      tools: tools,
    });

    return { agent, mcp };
  } catch (error) {
    console.error("❌ MCP Agent oluşturulamadı:", error);
    throw error;
  }
}

// Test fonksiyonu
export async function testMCPAgent() {
  try {
    const { agent, mcp } = await createMCPAgent();
    
    console.log("🤖 MCP Agent test başlıyor...");
    
    const response = await agent.generate("Merhaba! Hangi araçları kullanabilirsin?");
    console.log("✅ Agent yanıtı:", response.text);
    
    // MCP bağlantısını temizle
    await mcp.disconnect();
    
  } catch (error) {
    console.error("❌ MCP Agent test hatası:", error);
  }
}

// Eğer bu dosya doğrudan çalıştırılırsa test et
if (import.meta.url === `file://${process.argv[1]}`) {
  testMCPAgent();
}
