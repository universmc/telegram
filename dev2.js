const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const bot = new Telegraf(process.env.BOT_TOKEN);

const universmc = `https://t.me/+-CukoBUWXL84N2Vk`
const Pibot = `@PyArcade_bot`
const Pibot2 = `@PitBotRetro_bot`


const regex = `{role:system,content:'prompt(!message)'}.r\//`;
const str = `{role:system,assistant:'prompt(.response)'}.r`;

// Test the string against the regex
const match = `regex.${regex}+${str}`;
const promptTelegraf = `prompt-telegraf`;

const Telegram_chatCompletion = `insert_{role:'user',name:'user-telegram',content:'prompt-telegraf'}`

// Log the result

const cmd = {
    'help': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: '/help{match}'
    },
    'dev': {
        description: 'devOps console.log(match); // true or false',
        usage: '/dev{match}'
    },
    'test': {
        description: 'Test de fonctionnalité.',
        usage: '/test{match}'
    },
    'brainstorm': {
        description: 'Brainstorming pour générer des idées créatives.',
        usage: '/brainstorm{match}'
    },
    // Ajoutez d'autres commandes ici sous la même forme
};


bot.on('message', async (ctx) => {
    const message = ctx.message.text.trim().toLowerCase();

    // Détecte si le message commence avec la commande "/brainstorm"
    if (message.startsWith('/')) {
        try {
            const chatCompletion = await groq.chat.completions.create({
                messages: [
                    { role: 'system',content: `${universmc}+${Pibot}+${cmd}`},
                    { role: 'system',name:'@botFater',content: `if(cmd){[/cmd]}`},
                    {
                        role: 'system',
                        name: 'Telegraf',
                        content: 'Initialisation de la session de brainstorming sur https://github.com/universmc/Telegram.git',
                    },
                    {
                        role: 'assistant',
                        name: 'Pibot',
                        content: `groq ${match}.r+${cmd}`,
                    },
                    {
                        "role": "user",
                        "name": "user-telegram",
                        "content": {
                        "role": "assistant",
                        "content": "prompt-telegraf"
                        }
                        },
                        
                    {
                        role: 'user',
                        name:'user-telegram',
                        content: `${Telegram_chatCompletion}`,
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
