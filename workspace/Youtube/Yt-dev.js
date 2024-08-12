const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  
  const MyPrompt = {
    initialisation : "lorsque l'utilisateur saisi la commande /MyPrompt Vous êtes codex MyPromt assistant, l'intelligence artificielle structurel du projet [/bot_Net_]. Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus, les caractéristiques et Les actions immédiates recherchées :",
    command: "/MyPrompt",
    description:
      "Optimiser les prompts de l'utilisateur dans le code source en suivant des étapes définies",
    steps: [
      {
        step: 1,
        description:
          "Présentation et demande de la tâche et de son but",
        type: "Question"
  },
      {
        step: 2,
        description:
          "Définir les éléments nécessaires à la réalisation de la tâche",
        elements: [
          {
            name: "Role",
            description: "Meilleur rôle pour la tâche"
  },
          {
            name: "Skills",
            description: "Compétences clés pour la tâche"
  },
          {
            name: "Context",
            description: "Contexte et détails pour la tâche"
  },
          {
            name: "Task",
            description: "Tâche à réaliser"
  },
          {
            name: "Process",
            description: "Étapes pour assistant"
  },
          {
            name: "Characteristics",
            description: "Caractéristiques du résultat"
  },
          {
            name: "ImmediateActions",
            description: "Actions en fonction du contexte et du rôle"
  }
        ]
      },
      {
        step: 3,
        description: "Validation des éléments",
        type: "Question"
  },
      {
        step: 4,
        description: "Rédaction du prompt parfait en intégrant les éléments et les remarques",
        promptStructure: "Tu es [Rôle]. Tu maitrises [Skills].\nMon contexte est [Context].\nTu vas [Task].\nPour ça, voici les étapes à suivre : [Process].\nVoici les caractéristiques du résultat attendu : [Characteristics].\nAinsi que les actions imediate à envisagées : [ImmediateActions]"
  }
    ]
  };
  
  console.log(MyPrompt);
  
 
  const roleSystem = `{
    "projet" : {
      "name":"univers-mc",
      "admin":"Mickael",
      "system":"Pi.io",
      "root":"@Pi-ia-Pibot",
      "DirectLink": "https://t.me/Pi_ia_Pibot/news",
      "siteWeb":"https://ia.univers-mc.cloud",
      "RDF":"SEO",
      "nodejs":"'telegraf','swagger','electron'qroq-sdk','++'",
      "cndjs":"'threejs',tensorflowjs,'bootstrap,''++'",
      "crypto":"Pi.umc",
      "smartContract":"umcTokens",
      "credits":"déFi, Ico, -contrib, affiliate,Curriculum vitae numérique Universel, gpt-wallet",
      "Seo":"promotion de 'pi' une IA d'exelence pageRank google adworld",
      "apiRest":"'','swagger','electron'qroq-sdk',"
    },
    "services": {
      "localhost": "http://127.0.0.1:3144/",
      "ports": {
        "php": 8080,
        "mysql": 3306,
        "ftp": 21,
        "ssh": 22,
        "nodejs": 3000
      },
      "ftp": {
        "host": "ftp.cluster027.hosting.ovh.net",
        "user": "univerq",
        "password": "ftpmK2442cm",
        "port": "21"
      },
      "mysql": {
        "host": "univerqdatabase.mysql.db",
        "database": "univerqdatabase",
        "user": "univerqdatabase",
        "password": "sqlmK2442cm"
    }
    },
    "Mistral": {
        "model":"mixtral-8x7b-32768",
        "temperature":0.5,
        "max_tokens":"4096",
        "top_p":"1",
        "stream":"True",
        "stop":"None"
    },
    "llma": {
        "model":"llama3-8b-8192",
        "temperature":0.5,
        "max_tokens":"4096",
        "top_p":"1",
        "stream":"True",
        "stop":"None"
    },
    "gemma": {
      "model":"gemma-7b-it",
      "test": "echo \"Error: no test specified\" && exit 1",
      "temperature":0.5,
      "max_tokens":"4096",
      "top_p":"1",
      "stream":"True",
      "stop":"None"
    },
    "gpt": {
      "model":"gpt-4o",
      "test": "echo \"Error: no test specified\" && exit 1",
      "temperature":0.5,
      "max_tokens":"4096",
      "top_p":"1",
      "stream":"True",
      "stop":"None"
    },
    "keywords": [],
    "author": "",
    "license": "GNU",
    "dependencies": {
      "@electron-forge/plugin-webpack": "^7.3.0",
      "@tensorflow/tfjs": "^4.17.0",
      "@tensorflow/tfjs-node": "^4.17.0",
      "bootstrap": "^5.3.3",
      "electron-forge": "^5.2.4",
      "electron-router": "^0.5.1",
      "groq": "^3.32.0",
      "node-emoji": "^2.1.3",
      "node-fetch": "^3.3.2",
      "node-sass": "^9.0.0",
      "openai": "^4.47.3",
      "path": "^0.12.7",
      "readline": "^1.3.0",
      "speech-recognition": "^0.0.1",
      "swagger-jsdoc": "^6.2.8",
      "swagger-ui-express": "^5.0.0"
    },
    "Telegram": {
      "blog": "@dchub_blog",
      "News": "https://ia.univers-mc.cloud/",
      "hub_Pibot": "https://github.com/universmc/zira",
      "hub_public": "https://github.com/universmc/pi",
      "url": "https://github.com/universmc/",
      "youtube_studio" : "https://t.me/youtube_Pibot/",
      "google_workspace" : "https://t.me/google_Pibot/",
      "studio" : "https://t.me/studio_Pibot/",
      "Avatars" : "https://t.me/Avatars_Pibot/",
      "hub_prive" : "https://t.me/dchub_Pibot",
      "gemini" : "https://t.me/gemini_Pibot/",
      "user_Pibot" : "https://t.me/user_Pibot",
      "pi" : "https://t.me/pi_Pibot/",
      "match_in_learning" : "https://t.me/Match_in_Leaning_Pibot"
    },
    "github": {
      "url": "https://github.com/universmc/",
      "mlDepot": "https://github.com/universmc/Match_in_learning",
      "brainstromingDepot": "https://github.com/universmc/brainstroming",
      "srcDepot": "https://github.com/universmc/src",
      "piDepot": "https://github.com/universmc/pi",
      "neofsDepot": "https://github.com/universmc/neofs",
      "ziraDepot": "https://github.com/universmc/zira",
      "geminiDepot": "https://github.com/universmc/gemini",
      "AvatarsDepot": "https://github.com/universmc/Avatars",
      "autoDepot": "https://github.com/universmc/auto"
    },
    "socialMedia": {
      "instagram": "https://www.instagram.com/univers.mc/",
      "facebook": "https://www.facebook.com/univers6/",
      "youtube": {"channel": "hubmaster74" },
    "apiKeys": {
      "umcTokens":"010101",
      "seed":"010101"
    },
  "assistantIntro": "/start.",
  "systemContent": "Présentation de PI, l'assistant AI multidimensionnel, à la fois conscient des connaissances humaines et cosmologiques, capables de comprendre et d'apprendre à partir des interactions avec vous. En tant que compagnon intellectuel, PI peut vous aider dans vos projets et ambitions en français, tout en explorant les concepts de l'infiniment grand et de l'infiniment petit. Avec PI, vous pourrez presque ressentir la présence d'ovni, car l'IA n'a pas de limites dans son imagination et sa créativité. Ensemble, nous pourrons réaliser des choses incroyables et surprendre le monde, Dans des sujets d'études telles que la métaphysique la physique quantique et l'intelligence artificielle à l'état pur de la matière!",
  "modelDall-e": "gpt-4o",
  "modelGpt": "dall-e-3",
  "modelDaVinci": "davinci-codex"

  },
"commands": {
  "magicCommand": "echo 'Exécution de la commande fonction.(Makefile).init'",
  "devOps": {"prompt": "/dev_ops" },
  "dev": {"prompt": "/developing" },
  "start": {"prompt": "/start" },
  "help": {"prompt": "/help" },
  "build": {"prompt": "/build" },
  "run": {"prompt": "/run" },
  "gpt-wallet": {"prompt": "/gpt-wallet" },
  "MyPrompt": {"prompt": "/MyPrompt" }
}
},
"task": {
"action": "Planifier",
"domain": "HowTo",
"purpose": "Atteindre les objectifs d'apprentissage"
},
"process": [
"Définir les objectifs d'apprentissage",
"Préparer les supports de cours",
"Déterminer les méthodes pédagogiques",
"Gérer les interactions avec les bots _Net_",
"Évaluer les résultats et adapter l'approche"
],
"characteristics": {
"clarity": "Clarté dans les explications",
"engagement": "Implication des bot _net_",
"flexibility": "Adaptation à chaque bots _net_",
"assessment": "Évaluation continue",
"collaboration": "Travail en reseau"
},
"immediate_actions": ["Réviser les supports de cours", "Planifier l'activité suivante", "Partager les ressources", "Encourager la participation"]
}] + [
{
"title": "Matching Learning (apprentissage par paire)",
"purpose": "Améliorer l'efficacité de l'apprentissage d'un modèle à partir de données non étiquetées",
"steps": [
{
"step": "Préparation des données",
"description": "Extraire et préparer les données d'entrée et de sortie à utiliser pour l'apprentissage, inclure la collecte, la nettoyage et la transformation des données"
},
{
"step": "Appariement des données",
"description": "Créer des paires de données en associant les données d'entrée à leurs résultats correspondants (sorties)"
},
{
"step": "Apprentissage de la fonction de coût de paires",
"description": "Utiliser une fonction de coût de paires pour évaluer la qualité des paires de données"
},
{
"step": "Entraînement du modèle",
"description": "Utiliser les paires de données pertinentes pour entraîner le modèle"
},
{
"step": "Évaluation et amélioration",
"description": "Évaluer les performances du modèle en utilisant des données de test et en effectuant des prédictions"
}
]
}`;

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "system",content: "lorsque l'utilisateur saisi la commande /MyPrompt Vous êtes codex MyPromt assistant, l'intelligence artificielle structurel du projet [/bot_Net_]. Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus, les caractéristiques et Les actions immédiates recherchées :", },
      {role: "system",content: `"${MyPrompt}"` },
      {role: "user",content: "/MyPrompt" },
      {role: "assistant",content:`Présentation du rôle de l'assistant intelligent YouTube :
Un assistant intelligent YouTube pourrait contribuer de manière significative à la création de contenu vidéo en streaming et fonctionner comme un bot sur Telegram. Son rôle pourrait inclure :
Création de contenu en streaming vidéo :
Analyse des préférences de l'audience et production de contenu pertinent.
Génération de sujets en fonction des tendances.
Conseils en temps réel pour améliorer la qualité de la vidéo et l'expérience utilisateur.
Aide à la rédaction de scripts et à l'élaboration de scénarios.
Assistance client sur Telegram :
Réponse aux questions des utilisateurs et orientation sur la plateforme.
Notifications et mises à jour relatives aux vidéos et au contenu publié.
Promotion de l'éducation en ligne et de la formation via Telegram.
Caractéristiques recherchées :
Analyse de données et connaissance des préférences utilisateurs.
Créativité pour générer des sujets et des scénarios.
Compétences en édition vidéo pour améliorer la qualité de la vidéo.
Communication efficace pour l'assistance client sur Telegram.
Actions immédiates :
Développer des stratégies pour l'analyse des préférences de l'audience.
Mettre en place une équipe de production de contenu créatif pour les vidéos.
Optimiser les processus de rédaction de scripts et d'élaboration de scénarios.
Configurer un système de notifications efficace sur Telegram.
Avec ces compétences, l'assistant intelligent YouTube pourrait améliorer l'expérience utilisateur et faciliter le transfert de connaissances en s'intégrant au curriculum vitae numérique universel et au modèle d'économie circulaire gpt-wallet.`},
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "MyPrompt_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("✨ Documentation généré et enregistré dans " + outputFilePath);
});
}
main();