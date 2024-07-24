const { getMessages, addGroq } = require('groq-sdk');

// Créez une constante JSON pour stocker la configuration de la réponse
const responseConfig = {
  "responseTemplate": {
    "message": {
      "text": "Ceci est une réponse préformatée avec une horodatage: {{timestamp}}",
    },
    "timeStamp": {
      "format": "DD/MM/YYYY HH:mm:ss",
      "timeZone": "Europe/Paris"
}
  }
};

// Créez une fonction asynchrone pour récupérer et mettre à jour la configuration de réponse
const updateResponseConfig = async (
) => {
  const groqs = await getMessages();
  
  // Vérifiez si le groq existe déjà, si c'est le cas, n'ajoutez pas de nouveau groq
if (!groqs.includes(JSON.stringify(responseConfig))) {
    await addGroq(JSON.stringify(responseConfig));
  }
};

// Appelez la fonction asynchrone pour mettre à jour la configuration de réponse
updateResponseConfig();
