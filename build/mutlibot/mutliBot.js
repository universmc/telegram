const bot1 = require('./bots/bot1');
const bot2 = require('./bots/bot2');
const youtube_Pibot = require('./bots/youtube_Pibot');
const botaname = require('./bots/botaname');
const user_Pibot = require('./bots/user_Pibot');

const bots = [bot1, bot2, youtube_Pibot, botaname, user_Pibot];

bots.forEach(bot => {
    bot.launch()
        .then(() => {
            console.log(`Bot ${bot.options.username} is running`);
        })
        .catch(error => {
            console.error(`Failed to launch bot ${bot.options.username}:`, error);
        });
});

process.once('SIGINT', () => {
    bots.forEach(bot => bot.stop('SIGINT'));
});
process.once('SIGTERM', () => {
    bots.forEach(bot => bot.stop('SIGTERM'));
});
