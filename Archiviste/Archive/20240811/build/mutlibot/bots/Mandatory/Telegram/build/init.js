const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const bot = new Telegraf(process.env.BOT_TOKEN);

const universmc = `https://t.me/+-CukoBUWXL84N2Vk`
const Pibot = `@PyArcade_bot`
const Pibot2 = `@PitBotRetro_bot`

const input = "telegram"

const regex = `{role:system,content:'prompt(!message)'}.r\//`;
const str = `{role:system,assistant:'prompt(.response)'}.r`;

// Test the string against the regex
const match = `${regex}+${str}`;

const promptTelegraf = `prompt-telegraf`;

const Telegram_chatCompletion = `insert{role:'system',name:'user-telegram',content:if('/')bot.commad.r}`

// Log the result
bot.command('start', async ctx => {
    try {
        const result = await groq.chat.completions.create(`
            {
              role: system,
              content: "Welcome to my bot! Use /help to see available commands."
            }
          `);

        await ctx.replyWithHTML(result.content);
    } catch (e) {
        console.error(e);
    }
});


bot.on('message', async (ctx) => {
    const message = ctx.message.text.trim().toLowerCase();

    // Détecte si le message commence avec la commande "/brainstorm"
    if (message.startsWith('/')) {
        try {
            const chatCompletion = await groq.chat.completions.create({
                messages: [
                    { role: 'system',content: `${universmc}+${Pibot}+${bot}+${promptTelegraf}`},
                    { role: 'system',name:'@botFater',content: `if('/'){[meta.completion]}`},
                    {
                        role: 'system',
                        name: 'prompt-telegraf',
                        content: 'Initialisation de la session de brainstorming sur https://github.com/universmc/Telegram.git',
                    },
                    {
                        role: 'assistant',
                        name: 'Pibot',
                        content: `groq ${match}+${bot.command}`,
                    },
                    {
                        role: 'user',
                        name: 'prompt-telegraf',
                        content: `groq ${Telegram_chatCompletion}+${promptTelegraf}`,
                    }
                      
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
