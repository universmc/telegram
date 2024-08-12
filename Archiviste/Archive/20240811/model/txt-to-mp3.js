const express = require('express');
const app = express();
const fs = require('fs');
const Groq = require('groq-sdk');


const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.get('/audio', async (req, res) => {
  try {
    const text = `Votre texte à convertir en fichier audio`; // Votre prompt ou texte pour la narration
const audioFileName = await createAudioFile(text);
    res.download(`output/${audioFileName}`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Fichier audio ${audioFileName} téléchargé.`);
      }
    });
  } catch (error) {
    console.error('Une erreur s\'est produite:', error);
    res.status(500).send('Une erreur s\'est produite lors de la génération du fichier audio.');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur en cours d'exécution sur http://localhost:${port}`));
