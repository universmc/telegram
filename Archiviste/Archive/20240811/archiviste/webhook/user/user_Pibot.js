const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: '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' });

const bot = new Telegraf('7229553581:AAESREPhgVvg8Wt-ia53FdQq4jGQ4AZpPI0', {
    telegram: {
        webhookReply: true,
    },
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

bot.start((ctx) => {
    ctx.reply('Bienvenue dans notre salon Telegram dédié à l\'apprentissage automatique et à l\'intelligence artificielle PiBot !');
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
        console.log('Facebook invitation sent.');
    }

    async function sendInstagramInvitation() {
        console.log('Instagram invitation sent.');
    }

    async function sendTikTokInvitation() {
        console.log('TikTok invitation sent.');
    }

    async function sendYouTubeInvitation() {
        console.log('YouTube invitation sent.');
    }

    async function sendGoogleInvitation() {
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
    ctx.reply('Match in Learning..');
});

bot.on('message', async (ctx) => {
    const message = ctx.message.text.trim().toLowerCase();

    if (message.startsWith('/')) {
        return;
    }

    const userInput = ctx.message.text;
    
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: "Tu es l'intelligence artificielle au cœur de ce salon Telegram @user_Pitbot."
                },
                {
                    role: 'user',
                    content: userInput,
                },
            ],
            model: 'mixtral-8x7b-32768',
        });

        await ctx.reply(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        await ctx.reply('Une erreur est survenue.');
    }
});

bot.launch({
    webhook: {
        domain: 'https://univers-mc.cloud/Telegram',
        path: '/webhook/user',
    }
});

module.exports = bot;
