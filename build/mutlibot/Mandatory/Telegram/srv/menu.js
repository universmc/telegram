const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const bot = new Telegraf('6824523892:AAHw8cW7YSXBOHGqWD4S5--iSQa2OBj-Lmc', {
    telegram: {
      webhookReply: true,
    },
  });

  const menu = [
    start = "Start serveur",
    dev = "Develloppement piBot",
    demo = "demotration groq-sdk",
    brainstroming = "Braintroming Session",
    pitsat = "Completion Chat",
    test = "Completion Chat",
    images = "Completion images",
    audio = "Completion audio",
    video = "Completion video",
    image = "Completion script",
    help = "Documentation github CoPilote",
    exit = "Quité le menu"
]
const cmd = {
    'start': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: 'node webhook.js'
    },
    'dev': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: 'node dev.js'
    },
    'demo': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: 'node demo.js'
    },
    'brainstorming': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: 'node brainstorming.js'
    },
    'pisat': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: 'node pisat.js'
    },
    'test': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: '/help{match}'
    },
    'text': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: 'Redigez (@dchub/text)'
    },
    'audio': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: 'Composez(@dchub)'
    },
    'image': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: '/imaginez > {@dchub/image}'
    },
    'video': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: '/@vid{@dchub}'
    },
    'help': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: '/cmd{help}'
    },
    'option': {
        description: 'Test de fonctionnalité.',
        usage: '/cmd{opt}'
    },
    'exit': {
        description: 'Brainstorming pour générer des idées créatives.',
        usage: '/cmd{exit}'
    },
    // Ajoutez d'autres commandes ici sous la même forme
};

const universmc = `https://t.me/+-CukoBUWXL84N2Vk`;
const Pibot = `@PyArcade_bot`;
const PibotRetroArcade = `@PitBotRetro_bot`;
const input = "telegram-user"

// Test the string against the regex

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
                    { role: 'system',content: `${universmc}+${Pibot}+${bot}+${promptTelegraf}+${promptTelegraf}`},
                    {
                        role: 'system',
                        name: 'prompt-telegraf',
                        content: 'Initialisation de `Pibot`.r sur https://github.com/universmc/Telegram.git .https//univers-mc.cloud/Telegram/data/webhook.js & du repertoire racine (`/`) menu - command ./menu.js',
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
