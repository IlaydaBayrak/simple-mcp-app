# Mastra Agent Projesi

Bu proje, Mastra framework'ü kullanarak oluşturulmuş Türkçe konuşan bir AI agent'ıdır. Agent, OpenAI GPT-4o-mini modelini kullanır ve çeşitli araçlarla donatılmıştır.

## 🚀 Özellikler

- **Türkçe Konuşma**: Agent Türkçe olarak iletişim kurar
- **Araç Kullanımı**: Metin ters çevirme aracı dahil
- **İnteraktif Chat**: Terminal üzerinden gerçek zamanlı sohbet
- **Mastra Framework**: Modern AI agent geliştirme framework'ü
- **MCP Desteği**: Model Context Protocol entegrasyonu (opsiyonel)

## 📋 Gereksinimler

- Node.js 20.9.0 veya üzeri
- npm veya yarn
- OpenAI API Key

## 🛠️ Kurulum

1. **Projeyi klonlayın:**
```bash
git clone <repo-url>
cd smple-mstr
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Environment değişkenlerini ayarlayın:**
`.env` dosyasında OpenAI API key'inizi ayarlayın:
```
OPENAI_API_KEY=your-openai-api-key-here
```

## 🎮 Kullanım

### İnteraktif Chat
Terminal üzerinden agent ile sohbet etmek için:
```bash
npm run chat
```

### Agent Test
Agent'ın temel işlevlerini test etmek için:
```bash
npm run test-agent
```

### Mastra Development Server
Web arayüzü ile agent'ı kullanmak için:
```bash
npm run dev
```
Sonra tarayıcıda `http://localhost:4111/` adresine gidin.

### MCP Test (Opsiyonel)
MCP entegrasyonunu test etmek için:
```bash
npm run test-mcp
```

## 🔧 Mevcut Araçlar

- **reverse_text_tool**: Verilen metni ters çevirir

## 📁 Proje Yapısı

```
├── simple_agent.ts     # Ana agent tanımı
├── chat.ts            # İnteraktif chat interface
├── test-agent.ts      # Agent test dosyası
├── mcp-agent.ts       # MCP entegrasyonu (opsiyonel)
├── src/mastra/        # Mastra yapılandırması
│   └── index.ts
├── .env               # Environment değişkenleri
└── package.json       # Proje bağımlılıkları
```

## 🤖 Agent Özellikleri

Agent şu yeteneklere sahiptir:
- Türkçe sohbet
- Metin işleme araçları
- Kullanıcı talimatlarını anlama ve uygulama
- Araçları otomatik olarak seçme ve kullanma

## 🔗 MCP Entegrasyonu

Proje, Model Context Protocol (MCP) desteği içerir. MCP server'ları ile entegrasyon için `mcp-agent.ts` dosyasını kullanabilirsiniz.

## 📝 Notlar

- Agent OpenAI GPT-4o-mini modelini kullanır
- Tüm konuşmalar Türkçe olarak gerçekleşir
- Chat'ten çıkmak için `exit` yazın
- Development server Swagger UI sağlar

## 🆘 Sorun Giderme

Eğer agent çalışmıyorsa:
1. OpenAI API key'inizin doğru olduğundan emin olun
2. Node.js versiyonunuzun 20.9.0+ olduğunu kontrol edin
3. `npm install` komutunu tekrar çalıştırın

## 📄 Lisans

ISC
"# simple-mcp-app" 
