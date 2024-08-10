const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function chatCompletion(messages, model) {
    try {
        // Vérifie si le dernier message est un message d'entrée de l'utilisateur
if (messages[messages.length - 1].role === 'user' && messages[messages.length - 1].content) {
            // Crée une session de brainstorming avec Groq
const chatCompletion = await groq.chat.completions.create({
                messages,
                model,
            });

            return chatCompletion.choices[0].message.content;
        }
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        return 'Une erreur est survenue.';
    }
}

module.exports = { chatCompletion };
