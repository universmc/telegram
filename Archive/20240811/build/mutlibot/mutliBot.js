const youtubePiBot = require('./youtube_Pibot');
const googlePiBot = require('./google_Pibot');
const userPibot = require('./user_Pibot');
const MandatoryAibot = require('./MandatoryAi_bot');
const geminiPibot = require('./gemini_Pibot');

const bots = [youtubePiBot, googlePiBot, userPibot,geminiPibot, MandatoryAibot];

bots.forEach(bot => bot.launch());

console.log('Tous les bots sont en cours d\'exécution');
