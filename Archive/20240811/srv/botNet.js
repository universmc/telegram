const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const bot = new Telegraf('6824523892:AAHw8cW7YSXBOHGqWD4S5--iSQa2OBj-Lmc', {
    telegram: {
      webhookReply: true,
    },
  });

// Import de la bibliothèque node-telegram-bot-api
const TelegramBot = require('node-telegram-bot-api');

// Définir les tokens et les noms des bots
const bot1 = { token: 'YOUR_BOT1_TOKEN', name: 'Bot1' };
const bot2 = { token: 'YOUR_BOT2_TOKEN', name: 'Bot2' };

// Créer deux instances de bot avec leurs tokens respectifs
const bot1Instance = new TelegramBot(bot1.token, { polling: true });
const bot2Instance = new TelegramBot(bot2.token, { polling: true });

// Définir des gestionnaires d'événements pour chaque bot
bot1Instance.on('message', (msg) => {
  console.log(`Nouveau message reçu par ${bot1.name}: ${msg.text}`);
  // Ajouter ici votre logique de traitement du message pour Bot1
});

bot2Instance.on('message', (msg) => {
  console.log(`Nouveau message reçu par ${bot2.name}: ${msg.text}`);
  // Ajouter ici votre logique de traitement du message pour Bot2
});
