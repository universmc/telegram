const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const bot = new Telegraf(process.env.BOT_TOKEN);

const universmc = `https://t.me/+-CukoBUWXL84N2Vk`
const Pibot = `@PyArcade_bot`

const input = "telegram-user"

const cmd = {
    'help': {
      description: 'Affiche cette description.',
      usage: '/help [commande]'
    },
    'test': {
      description: 'Test de fonctionnalité.',
      usage: '/test'
    },
    'brainstorm': {
      description: 'Brainstorming pour générer des idées créatives.',
      usage: '/brainstorm [sujet]'
    }
  };

bot.on('message', async (ctx) => {
    const message = ctx.message.text.trim().toLowerCase();

    // Détecte si le message commence avec la commande "/brainstorm"
    if (message.startsWith('/cmd')) {
        try {
            const chatCompletion = await groq.chat.completions.create({
                messages: [
                    { role: 'system',content: `${universmc}+${Pibot}+${cmd}`},
                    {
                        role: 'system',
                        name: 'Telegraf',
                        content: 'Initialisation de la session de brainstorming sur https://github.com/brainstroming.git',
                    },
                    {
                        role: 'assistant',
                        name: 'Pibot',
                        content: '*💡* Idée géniale **💻**: Trouver des idées originales et innovantes pour le développement de projet ( Gestion des ressources et de la capacité de l’équipe ).',
                    },
                    {
                        role: 'user',
                        content: input,
                    },
                ],
                model: 'mixtral-8x7b-32768',
            });


            await ctx.reply(chatCompletion.choices[0].message.content);
        } catch (error) {
            console.error('Failed to generate chat completion:', error);
            await ctx.reply('Une erreur est survenue.');
        }
    }
    });

async function chatCompletion(messages, model) {
    try {
        // Crée une session de brainstorming avec Groq
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
console.log(`Server Telegram running ✨Pibot.`);
bot.launch();
