const youtubePiBot = require('./youtube_Pibot');
const googlePiBot = require('./google_Pibot');

const bots = [youtubePiBot, googlePiBot];

bots.forEach(bot => bot.launch());

console.log('Tous les bots sont en cours d\'exécution');
