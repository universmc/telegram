const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const bot = new Telegraf(process.env.BOT_TOKEN);

const input = "telegram-user"
const universmc = `https://t.me/+-CukoBUWXL84N2Vk`
const Pibot = `@PyArcade_bot`

bot.on('message', async (ctx) => {
    const message = ctx.message.text.trim().toLowerCase();

    // Détecte si le message commence avec la commande "/brainstorm"
if (message.startsWith('/test')) {
        try {
            const chatCompletion = await groq.chat.completions.create({
                messages: [
                    { role: 'system',content: `${universmc}+${Pibot}`},
                    {
                        role: 'system',
                        content: 'Initialisation de la session de test sur Telegram ',
                    },
                    {
                        role: 'assistant',
                        content: 'test',
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
