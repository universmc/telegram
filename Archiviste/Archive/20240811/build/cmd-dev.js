const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const bot = new Telegraf(process.env.BOT_TOKEN);

const input = "commands"

const universmc = `https://t.me/+-CukoBUWXL84N2Vk`
const Pibot = `@PyArcade_bot`



const help = [
        description = "Affiche la liste des commandes disponibles.",
        usage = "/help"
 ];
 const dev = `[
        "description": 'devOps Fonction',
        usage: 'if{[/dev]_dev(description)]}'
 ]`;
const test = `[
        description: 'Test de fonctionnalité.',
        usage: 'if{[/test]_dev(description)]}'
]`;
const brainstorm = `[
        description: 'Brainstorming pour générer des idées créatives.',
        usage: 'if{[/brainstorm]_dev[description]',

]`;
const configuration = `[
        description: 'configuration de l'instance groq-sdk, Telegram, et botFather',
        usage: 'if{[/config]]_dev(description)]}'
]`;
const comands = `${help}+${dev}++${dev}+${test}+${brainstorm}+${configuration}`

const ssh = `/Users/universmc/.ssh/config`
const dns = `http://univers-mc.cloud//Telegram/`
const github = `htts://github.com/universmc/Telegram`
const google = `hubmaster74@gmail.com _google-Authenticator`

const config = `${dns}+${ssh}+${github}+${google}`

bot.on('message', async (ctx) => {
    const message = ctx.message.text.trim().toLowerCase();

    // Détecte si le message commence avec la commande "/brainstorm"
    if (message.startsWith('/')) {
        try {
            const chatCompletion = await groq.chat.completions.create({
                messages: [
                    { role: 'system',content: `${universmc}+${Pibot}+${config}${comands}`},
                    { role: 'system',name:'@botFater',content: `if(insert[command]){RUN[/cmd]}`},
                    {
                        role: 'system',
                        name: 'Telegraf',
                        content: 'phase1:initalisation de Pibot',
                    },
                    {
                        role: 'assistant',
                        name: 'Pibot',
                        content: "bonjour je suis '✨' une Ia aux `${'Makefile'+'/'+'magic(META)'}`, Je maîtrise les fondation de engine -ia prompting, calcul quantique les accroche métaphysique et les techniques d'apprentissage automatique dans ce script ou code source sur Telegram comment je peut aider ?",
                    },
                    { role: 'system',name:'@botFater',content: "list des comandes `${commands}`"},
                    {
                        role: 'user',
                        content: `"/dev ${comands}"`,
                    },
                    { role: 'system',name:'@botFater',content: "auto.chatCompletion"},
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
