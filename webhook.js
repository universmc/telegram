const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const bot = new Telegraf('6824523892:AAHw8cW7YSXBOHGqWD4S5--iSQa2OBj-Lmc', {
    telegram: {
      webhookReply: true,
    },
  });


const universmc = `https://t.me/+-CukoBUWXL84N2Vk`
const Pibot = `@PyArcade_bot`
const Pibot2 = `@PitBotRetro_bot`

const input = "tele"

const regex = `{role:system,content:'prompt(!message)'}.r\//`;
const str = `{role:system,assistant:'prompt(.response)'}.r`;

// Test the string against the regex
const match = `${regex}+${str}`;

const promptTelegraf = `prompt-telegraf`;

bot.start((ctx) => {
    ctx.reply('Welcome to Pibot!');
  });

  
bot.on('message', async (ctx) => {
    const message = ctx.message.text.trim().toLowerCase();

    // Détecte si le message commence avec la commande "/"
    if (message.startsWith('/')) {
        try {
            const chatCompletion = await groq.chat.completions.create({
                messages: [
                    { role: 'system',content: `${universmc}+${Pibot}+${bot}+${promptTelegraf}`},
                    {
                        role: 'system',
                        name: 'prompt-telegraf',
                        content: 'Initialisation de `Pibot`.r sur https://github.com/universmc/Telegram.git ./webhook. & du repertoire racine (`/`)',
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
