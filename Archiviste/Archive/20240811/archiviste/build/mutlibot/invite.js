module.exports = (bot, groq) => {
    let conversationLog = [];

    bot.use((ctx, next) => {
        if (ctx.message) {
            conversationLog.push({
                user: ctx.message.from.username || ctx.message.from.first_name,
                message: ctx.message.text,
                timestamp: new Date()
            });
        }
        return next();
    });

    bot.command('invite', (ctx) => {
        async function sendFacebookInvitation() {
            console.log('Facebook invitation sent.');
        }

        async function sendInstagramInvitation() {
            console.log('Instagram invitation sent.');
        }

        async function sendTikTokInvitation() {
            console.log('TikTok invitation sent.');
        }

        async function sendYouTubeInvitation() {
            console.log('YouTube invitation sent.');
        }

        async function sendGoogleInvitation() {
            console.log('Google invitation sent.');
        }

        const actions = {
            '/Google': sendGoogleInvitation,
            '/Facebook': sendFacebookInvitation,
            '/Instagram': sendInstagramInvitation,
            '/TikTok': sendTikTokInvitation,
            '/YouTube': sendYouTubeInvitation,
        };

        const actionKeys = Object.keys(actions);
        const actionMessage = actionKeys.map(action => `${action}`).join(', ');

        ctx.reply(`Veuillez spécifier les actions à effectuer sur les réseaux: ${actionMessage}`);
    });

    bot.on('message', async (ctx) => {
        const message = ctx.message.text.trim().toLowerCase();

        if (message.startsWith('/')) {
            return;
        }

        const userInput = ctx.message.text;

        try {
            const chatCompletion = await groq.chat.completions.create({
                messages: [
                    {
                        role: 'system',
                        content: "Tu es l'intelligence artificielle au cœur de ce salon Telegram @user_Pitbot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux (YouTube, Facebook, Google, Instagram, TikTok) sur mon app-Telegram https://univers-mc.cloud/Telegram/ dont j'en suis l'administrateur."
                    },
                    {
                        role: 'user',
                        content: userInput,
                    },
                ],
                model: 'mixtral-8x7b-32768',
            });

            await ctx.reply(chatCompletion.choices[0].message.content);
        } catch (error) {
            console.error('Failed to generate chat completion:', error);
            await ctx.reply('Une erreur est survenue.');
        }
    });
};