const Telegraf = require('telegraf');
const bot = new Telegraf('TOKEN');

bot.on('text', (ctx) => {
  const fromId = ctx.message.from.id;
  const text = ctx.message.text;
  console.log(`From ID ${fromId}: ${text}`);
  ctx.reply(`Hello from the bot! You said: ${text}`);
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));