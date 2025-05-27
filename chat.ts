import { agent } from './simple_agent';
import * as readline from 'readline';

// Readline interface oluştur
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Chat geçmişi
let chatHistory: Array<{ role: 'user' | 'assistant', content: string }> = [];

console.log("🤖 Mastra Agent Chat'e Hoş Geldiniz!");
console.log("💬 Agent ile konuşmaya başlayabilirsiniz. Çıkmak için 'exit' yazın.");
console.log("🔧 Mevcut araçlar: reverse_text_tool (metin ters çevirme)");
console.log("─".repeat(50));

async function chat() {
  rl.question('\n👤 Siz: ', async (userInput) => {
    if (userInput.toLowerCase() === 'exit') {
      console.log('\n👋 Görüşmek üzere!');
      rl.close();
      return;
    }

    if (userInput.trim() === '') {
      chat();
      return;
    }

    try {
      console.log('\n🤖 Agent düşünüyor...');
      
      // Chat geçmişini güncelle
      chatHistory.push({ role: 'user', content: userInput });
      
      // Agent'a mesajı gönder
      const response = await agent.generate(userInput);
      
      // Yanıtı chat geçmişine ekle
      chatHistory.push({ role: 'assistant', content: response.text });
      
      console.log(`\n🤖 Agent: ${response.text}`);
      
    } catch (error) {
      console.error('\n❌ Hata:', error);
    }
    
    // Sonraki soruyu sor
    chat();
  });
}

// Chat'i başlat
chat();

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n👋 Chat sonlandırılıyor...');
  rl.close();
  process.exit(0);
});
