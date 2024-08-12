const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

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


bot.command('test', (ctx) => ctx.reply('echo test'))


bot.command('invite', (ctx) => {

    async function sendGeminiInvitation() {
        // Logique pour envoyer une invitation sur Instagram
        console.log('Gemini invitation sent.');
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
        '@Google_Pibot': sendGoogleInvitation,
        '@Gemini_Pibot': sendGeminiInvitation,
        '@youtube_Pibot': sendYouTubeInvitation,
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
    const knowleddge = "Message de bienvenue avec emoji intel et de savoir être sur le salon"
    const userInput = ctx.message.text;
    
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {role: 'assistant',content:knowleddge},
                {role: 'assistant',content: "je vais te transmettre ici toutes les dépendances est variable au cœur de ce code source ['knowleddge',+'devine']"},
                {
                    role: 'system',
                    content: "Tu es l'intelligence artificielle au cœur de ce salon d'invitation des utilisateurs du web sur mon Telegram, Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it ou dall-e-3 ou encore mixtral-8x7b-32768 le text-embedding-ada-002 gpt codex d'openAI ... les methodes d'archivage sur https:archive.org sur versionning sur https://github.com/ avec un BotNet @user_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur."
                },                {
                    role: 'assistant',
                    content: "Rédigez le developper de la présentation complète du salon télégramme et de l'intelligence artificielle au cœur de ce code source",
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

console.log(`Server Telegram running ✨.user_Pibot.`);
bot.launch();
