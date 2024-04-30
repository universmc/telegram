const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const bot = new Telegraf(process.env.BOT_TOKEN);

const universmc = 'https://t.me/+-CukoBUWXL84N2Vk';
const Pibot = '@PyArcade_bot';

const cmd = {
    'help': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: '/help'
    },
    'test': {
        description: 'Test de fonctionnalité.',
        usage: '/test'
    },
    'brainstorm': {
        description: 'Brainstorming pour générer des idées créatives.',
        usage: '/brainstorm [sujet]'
    },
    'brainstorm': {
        description: 'Brainstorming pour générer des idées créatives.',
        usage: '/brainstorm [sujet]'
    },
    // Ajoutez d'autres commandes ici sous la même forme
};

bot.start((ctx) => ctx.reply('Bienvenue! Utilisez /help pour afficher la liste des commandes.'));

bot.help((ctx) => {
    const commands = Object.keys(cmd).map((command) => `- ${command}: ${cmd[command].description}`).join('\n');
    return ctx.reply(`Liste des commandes disponibles :\n${commands}`);
});

bot.on('message', async (ctx) => {
    const message = ctx.message.text.trim().toLowerCase();

    if (message.startsWith('/')) {
        const command = message.split(' ')[0].slice(1);
        if (cmd[command]) {
            if (cmd[command].usage) {
                ctx.reply(`Utilisation : ${cmd[command].usage}`);
            } else {
                ctx.reply(`Commande ${command} exécutée avec succès.`);
            }
        } else {
            ctx.reply('Commande inconnue. Utilisez /help pour afficher la liste des commandes disponibles.');
        }
    } else {
        // Détecte si le message contient la mention "/brainstorm"
        if (message.includes('/brainstorm')) {
            try {
                const chatCompletion = await groq.chat.completions.create({
                    messages: [
                        { role: 'system', content: `${universmc}+${Pibot}+${cmd}` },
                        {
                            role: 'system',
                            name: 'Telegraf',
                            content: 'Initialisation de la session /dev Pibot -version sur server ssh http://univers-mc.cloud/Telegram et le system Version de Pibot avec @botFather de telegram sur https://github.com/universmc/Telegram/',
                        },
                        {
                            role: 'assistant',
                            name: 'Pibot',
                            content: '*💡* Idée géniale **💻**: Trouver des idées originales et innovantes pour le développement de projet.',
                        },
                        {
                            role: 'user',
                            content: message,
                        },
                    ],
                    model: 'mixtral-8x7b-32768',
                });

                await ctx.reply(chatCompletion.choices[0].message.content);
            } catch (error) {
                console.error('Échec de la génération de la réponse :', error);
                await ctx.reply('Une erreur est survenue.');
            }
        }
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
        console.error('Échec de la génération de la réponse :', error);
        return 'Une erreur est survenue.';
    }
}

module.exports = { chatCompletion };

console.log(`Server Telegram running ✨Pibot.`);
bot.launch();