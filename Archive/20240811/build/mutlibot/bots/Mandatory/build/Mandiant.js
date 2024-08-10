const path = require("path"); // Ajouté pour utiliser path.join
const Groq = require("groq-sdk");
const groq = new Groq();
const fs = require('fs');

// Charger le fichier de configuration JSON
const assistantConfig = JSON.parse(fs.readFileSync('assistant_config.json', 'utf8'));

console.log(assistantConfig);
