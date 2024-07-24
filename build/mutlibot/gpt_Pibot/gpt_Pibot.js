const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const bot = new Telegraf('7479210224:AAFt7JlZx8vfalJV9adrGYPe9q5BDOC7E-k', {
    telegram: {
      webhookReply: true,
    },
  });

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
    
    bot.start((ctx) => {
      ctx.reply('Bienvenue dans notre salon dédié à l\'apprentissage automatique et à l\'intelligence artificielle Mendiant nationale ou autrement dit mandataire financier!');
    });
    
    
    bot.help((ctx) => {
      const helpMessage = `
      Commandes disponibles:
      /start - Initialisation du serveur Mandiant-Ia
      /help - Affiche cette aide
      /taxation - Gestion de la collecte de TVA
      /exercice - Compte de résultat
      /campagne - Compte de Campagne
      /bilan - Bilan Comptable à l'ouverture
      /gain - Matrice des Gains
      /prediction - Bilan Prévisionnel
      /conversation_log - Affiche le bilan de la conversation
      /cv - Génération de CV
      /comptes - Gestion de comptes
      /collecte - Opérations de collecte
      `;
        ctx.reply(helpMessage);
      });
    
      bot.command('taxation', async (ctx) => {
        try {
          const query = `*[_type == "tax"] | order(date desc)`;
          const taxes = await client.fetch(query);
      
          if (taxes.length === 0) {
            ctx.reply('Aucune taxe enregistrée.');
            return;
          }
      
          let taxMessage = 'Détails des taxes collectées:\n';
          taxes.forEach(tax => {
            taxMessage += `Date: ${tax.date}\nMontant: ${tax.amount}\nDescription: ${tax.description}\n\n`;
          });
      
          ctx.reply(taxMessage);
        } catch (error) {
          console.error('Erreur lors de la collecte des taxes:', error);
          ctx.reply('Une erreur est survenue lors de la collecte des taxes.');
        }
      });
    
    
    bot.command('conversation_log', (ctx) => {
      if (conversationLog.length === 0) {
        ctx.reply('Aucune conversation enregistrée.');
        return;
      }
    
      let logMessage = 'Bilan de la conversation:\n';
      conversationLog.forEach(entry => {
        logMessage += `[${entry.timestamp.toLocaleString()}] ${entry.user}: ${entry.message}\n`;
      });
    
      ctx.reply(logMessage);
    });
    
    bot.command('comptes', (ctx) => {
      // Ajouter la logique pour gérer les comptes de campagne, comptes de résultats, bilan comptable prévisionnel, etc.
      ctx.reply('Veuillez spécifier l\'action à effectuer sur les comptes (comptes de campagne, comptes de résultats, etc.)');
    });
    
    bot.command('collecte', (ctx) => {
      // Ajouter la logique pour gérer les opérations de collecte
      ctx.reply('Veuillez spécifier l\'action à effectuer sur les opérations de collecte.');
    });
    
    
    bot.command('cv', (ctx) => {
      // Ajouter la logique pour générer un CV en fonction de l'apprentissage automatique de l'IA
      ctx.reply('Génération de CV en cours...');
    });
    
    
    bot.on('message', async (ctx) => {
      const message = ctx.message.text.trim().toLowerCase();
    
      // Détecte si le message commence avec la commande "/"
      if (message.startsWith('/')) {
          try {
              const chatCompletion = await groq.chat.completions.create({
                  messages: [
                      { role: 'system',content: `${universmc}+${Pibot}+${bot}+${promptTelegraf}+${serveur}${menu}+${cmd}`},
                        
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
    console.log(`Server Telegram running ✨.gpt_Pibot.`);
    bot.launch();