import { agent } from './simple_agent';

async function testAgent() {
  try {
    console.log("🤖 Agent test başlıyor...");

    const response = await agent.generate("Merhaba! Sen kimsin ve hangi araçları kullanabilirsin?");

    console.log("✅ Agent yanıtı:", response.text);

    // Aracı kullanmaya çalışalım
    const toolResponse = await agent.generate("reverse_text_tool aracını kullanarak 'Merhaba Dünya' yazısını ters çevir.");

    console.log("🔄 Araç ile yanıt:", toolResponse.text);

  } catch (error) {
    console.error("❌ Hata:", error);
  }
}

testAgent();
