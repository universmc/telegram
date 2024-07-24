const express = require('express');
const app = express();
const { Webhook } = require('groq-sdk');

const PORT = process.env.PORT || 5000;

app.use(express.json());

// Créez et configurez votre webhook Groq
const webhook = new Webhook({
    id: 'GROQ_WEBHOOK_ID',
    secret: 'GROQ_WEBHOOK_SECRET',
});

app.post('/webhook', webhook.middleware(), (req, res) => {
    // Traitez les demandes Webhook
});

// Démarrez votre serveur Express
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
