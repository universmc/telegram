const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY_YOUTUBE });

const bot = new Telegraf('7229553581:AAESREPhgVvg8Wt-ia53FdQq4jGQ4AZpPI0', {
    telegram: {
      webhookReply: true,
    },
  });

bot.start((ctx) => {
    ctx.reply('Bienvenue dans notre salon Telegram YouTube PiBot !');
});
let conversationLog = [];

bot.use((ctx, next) => {
    if (ctx.message) {
        conversationLog.push({
            user: ctx.message.from.username || ctx.message.from.first_name,
            message: ctx.message.text,
            timestamp: new Date()
        });
    }
    return next();
});


bot.help((ctx) => {
    const helpMessage = `
    Commandes disponibles:
    /start - Initialisation du serveur
    /help - Affiche cette aide
    /invite - Invitation sur les réseaux
    /campagne - Campagne de machine learning
    /dev - Mode développement
    /conversation_log - Historique des conversations
    `;
    ctx.reply(helpMessage);
});

bot.command('conversation_log', (ctx) => {
    if (conversationLog.length === 0) {
        ctx.reply('Aucune conversation enregistrée.');
        return;
    }

    let logMessage = 'Bilan de la conversation:\n';
    conversationLog.forEach(entry => {
        logMessage += `[${entry.timestamp.toLocaleString()}] ${entry.user}: ${entry.message}\n`;
    });

    ctx.reply(logMessage);
});

bot.command('invite', (ctx) => {
    async function sendFacebookInvitation() {
        // Logique pour envoyer une invitation sur Facebook
        console.log('Facebook invitation sent.');
    }

    async function sendInstagramInvitation() {
        // Logique pour envoyer une invitation sur Instagram
        console.log('Instagram invitation sent.');
    }

    async function sendTikTokInvitation() {
        // Logique pour envoyer une invitation sur TikTok
        console.log('TikTok invitation sent.');
    }

    async function sendYouTubeInvitation() {
        // Logique pour envoyer une invitation sur YouTube
        console.log('YouTube invitation sent.');
    }

    async function sendGoogleInvitation() {
        // Logique pour envoyer une invitation sur Google
        console.log('Google invitation sent.');
    }

    const actions = {
        '/Google': sendGoogleInvitation,
        '/Facebook': sendFacebookInvitation,
        '/Instagram': sendInstagramInvitation,
        '/TikTok': sendTikTokInvitation,
        '/YouTube': sendYouTubeInvitation,
    };

    const actionKeys = Object.keys(actions);
    const actionMessage = actionKeys.map(action => `${action}`).join(', ');

    ctx.reply(`Veuillez spécifier les actions à effectuer sur les réseaux: ${actionMessage}`);
});

bot.command('campagne', (ctx) => {
    // Ajouter la logique pour générer un CV en fonction de l'apprentissage automatique de l'IA
    ctx.reply('Match in Learning..');
});

bot.on('message', async (ctx) => {
    const message = ctx.message.text.trim().toLowerCase();

    if (message.startsWith('/')) {
        return; // Ignorer les commandes
    }

    const userInput = ctx.message.text;
    
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
              {
                role: 'system',
                content: "Tu es l'intelligence artificielle assistant Youtube (je te laisse innové sur ton nom ... ) dans ce salon Telegram @youtube_Pibot."
            },
                {
                    role: 'user',
                    content: userInput,
                },
            ],
            model: 'gemma2-9b-it',
        });

        await ctx.reply(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        await ctx.reply('Une erreur est survenue.');
    }
});

async function chatCompletion(messages, model) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages,
            model,
        });

        return chatCompletion.choices[0].message.content;
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        return 'Une erreur est survenue.';
    }
}

module.exports = { chatCompletion };


// Ajoutez les commandes et les fonctionnalités spécifiques à ce bot ici

module.exports = bot;
