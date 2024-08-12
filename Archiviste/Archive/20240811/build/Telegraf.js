const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');
const nlp = require('node-nlp');


const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const bot = new Telegraf('6824523892:AAHw8cW7YSXBOHGqWD4S5--iSQa2OBj-Lmc', {
    telegram: {
      webhookReply: true,
    },
  });
  

const universmc = `https://t.me/+-CukoBUWXL84N2Vk`;
const Pibot = `@PyArcade_bot`;
const PibotRetro = `@PitBotRetro_bot`;

const github = "https://github.com/universmc/Telegram.git";
const hub = `telegram.git -version`

const dchub = "t.me/PyArcade_bot/dchub";
const RPG = "t.me/PyArcade_bot?game=RPG";
const universUmc = "https://t.me/universmc6";

const LangIA = nlp;

const lang = "Traduction_{lang=FR, Français}";

const input = 'user-telegram';

const umc = `${lang}+${LangIA},${dchub},${universUmc},${github},${hub},${universmc},${Pibot},${RPG},${PibotRetro}`;

bot.on('message', async (ctx) => {
    const message = ctx.message.text.command().toLowerCase();

    // Détecte si le message commence avec la commande "/brainstorm"
    if (message.startsWith('/')) {
        try {
            const chatCompletion = await groq.chat.completions.create({
                messages: [
                    { role: 'system',content: `${umc}`},
                    {
                        role: 'system',
                        name: 'user-telegram',
                        content: 'Initialisation de la session sur Telegram universmc sur https://github.com/universmc/Telegram.git dans le [CONTEXT] de mon sallon sur TELEGRAM',
                    },
                    {
                        role: 'assistant',
                        name: 'Pibot',
                        content: `${input}`,
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
