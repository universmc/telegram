const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY_GOOGLE });

const bot = new Telegraf('7475487226:AAGSNlDnPk6BWneChbqpKUwvFzPVvwdmNM8', {
    telegram: {
      webhookReply: true,
    },
  });

bot.start((ctx) => {
    ctx.reply('Bienvenue dans notre salon Telegram Google PiBot !');
});

// Ajoutez les commandes et les fonctionnalités spécifiques à ce bot ici

module.exports = bot;
