const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY_BOT1 });

const bot = new Telegraf(process.env.BOT_TOKEN_BOT1, {
    telegram: {
        webhookReply: true,
    },
});

bot.start((ctx) => {
    ctx.reply('Bienvenue dans notre salon Telegram Bot 1 !');
});

// Ajoutez les commandes et les fonctionnalités spécifiques à ce bot ici

module.exports = bot;
