const { Telegraf } = require('telegraf');
const express = require('express');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const app = express();
const port = 3000;

const bot = new Telegraf(process.env.BOT_TOKEN);

// Répondre à chaque message envoyé au bot
bot.on('text', (ctx) => {
    const fromId = ctx.message.from.id;
    const text = ctx.message.text;
    console.log(`From ID ${fromId}: ${text}`);
    ctx.reply(`Hello from the bot! You said: ${text}`);
  });
  
  
  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));

// Endpoint pour utiliser Groq avec un message type
app.get('/groq', async (req, res) => {
    try {
        // Simuler une conversation avec des rôles fixes
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: 'Initialisation de la session de brainstorming...',
                },
                {
                    role: 'assistant',
                    content: '*💡* Idée géniale **💻**: Trouver des idées originales et innovantes pour le développement de projet (📅 Gestion des ressources et de la capacité de l’équipe 🕒).',
                }
            ],
            model: 'mixtral-8x7b-32768',
        });

        res.status(200).json(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        res.status(500).json({ error: 'Une erreur est survenue' });
    }
});

// Lancement du bot Telegram
bot.launch();

// Démarrage du serveur Express
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});