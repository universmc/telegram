const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const bot = new Telegraf('7061955541:AAH3546GPivOW0RriMrPKbHUhcDZHr4F5kI', {
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
        usage: '/srv/webhook,js'
    },
    'dev': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: '/help{match}'
    },
    'demo': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: '/help{match}'
    },
    'brainstorming': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: './help.js'
    },
    'pisat': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: '/help{match}'
    },
    'test': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: '/help{match}'
    },
    'text': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: '/help{match}'
    },
    'audio': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: '/help{match}'
    },
    'image': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: '/help{match}'
    },
    'video': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: '/help{match}'
    },
    'help': {
        description: 'Affiche la liste des commandes disponibles.',
        usage: '/help{match}'
    },
    'help': {
        description: 'Test de fonctionnalité.',
        usage: '/test{match}'
    },
    'exit': {
        description: 'Brainstorming pour générer des idées créatives.',
        usage: '/brainstorm{match}'
    },
    // Ajoutez d'autres commandes ici sous la même forme
};

const universmc = `https://t.me/+-CukoBUWXL84N2Vk`
const Pibot = `@PyArcade_bot`
const PibotRetroArcade = `@PitBotRetro_bot`

const input = "telegram-user"

const regex = `{role:system,content:'prompt(command[messages])'}.r\//`;
const str = `{role:system,assistant:'prompt(.groq-sdk[response])'}.r`;

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
                    { role: 'system',content: `${universmc}+${Pibot}+${bot}+${promptTelegraf}+${promptTelegraf}`},
                    {
                        role: 'system',
                        name: 'telegraf-user',
                        content: 'Initialisation de `input(telegraf-user).ChatCompletion{role:system,name:Telegram:content:`telegraf.chatCompletion{messages};{role:user:name:telegram-user:`prompt-$inside()`}`,}`.r sur https://github.com/universmc/Telegram.git .https//univers-mc.cloud/Telegram/data/webhook.js & du repertoire racine (`/`) menu - command ./menu.js',
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
console.log(`Server Telegram TrainMan ✨_Mandian.-ia`);
bot.launch();