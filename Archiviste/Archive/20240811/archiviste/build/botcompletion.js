const { Telegraf } = require('telegraf');
const { chatCompletion } = require('./chatCompletion');

const bot = new Telegraf(process.env.BOT_TOKEN);

const universmc = `https://t.me/+-CukoBUWXL84N2Vk`
const Pibot = `@PyArcade_bot`
const input = "Telegram(user)"

bot.on('message', async (ctx) => {
    const message = ctx.message.text.trim().toLowerCase();

    if (message.startsWith('/brainstorm')) {
        // Définit les messages et le modèle à utiliser pour la session de brainstorming
        const messages = [
            { role: 'system',content: `${universmc}+${Pibot}`},
            { role: 'user', content: 'Je cherche une idée pour mon projet.' },
            { role: 'assistant', content: '*💡* Idée géniale **💻**: Trouver des idées originales et innovantes pour le développement de projet ( Gestion des ressources et de la capacité de l’équipe ).' },
            { role: 'user', content: '*💡* Idée géniale **💻**: Trouver des idées originales et innovantes pour le développement de projet ( Gestion des ressources et de la capacité de l’équipe ).' },
            { role: 'assistant', content: input },
        ];
        const model = 'mixtral-8x7b-32768';

        // Appelle la fonction chatCompletion pour générer une réponse
        const response = await chatCompletion(messages, model);

        // Envoie la réponse dans le salon Telegram
        await ctx.reply(response);
    }
});

bot.launch();
