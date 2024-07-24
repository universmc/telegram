const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY_YOUTUBE });

const bot = new Telegraf('7444983933:AAEJTRX2Wn-CME7QtSz1GBU8gtKo8hAu3VE', {
    telegram: {
      webhookReply: true,
    },
  });

bot.start((ctx) => {
    ctx.reply('Bienvenue dans notre salon Telegram YouTube PiBot !');
});

// Ajoutez les commandes et les fonctionnalités spécifiques à ce bot ici





module.exports = bot;
