const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

const Telegraf = require("./Telegraf.js");

const bootcss = "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>";
const bootJs = "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>";
const bootstrap = bootcss+bootJs;

const github = "https://github.com/universmc/Telegram.git";
const Telegram = `telegram.git -version`

const importDicoEmojis = "file://src/json/dicoEmojis.js"

const logo = "Matrix - Telegraf";
const stylus = "telegram";

const BsResponse = "`responseHtml`{devOps.html:5}";
const header = "bootstrap navBar+carrousel"
const mainContent = "bootstrap devOps sass video telegraf"
const footer = "asign cc by univers-mc.cloud"

const responseHtml = `${header}"+${mainContent}+${footer}`;

const context = "/dev Telegram";
const post = "telegraf";
const job = "role:assistant";
const work = context+post+job;

const Mission = "intégrer la plus grande communauté #IA des transformations numériques sur le dchub (directConnect HUB) un secteur de mobilités et Et l'avenir de l'intelligence artificielle et de la machine Learning dans le Cloud Computing sur Telegram"


const universmc = `https://t.me/+-CukoBUWXL84N2Vk`
const Pibot = `@PyArcade_bot`
const Pibot2 = `@PitBotRetro_bot`


const regex = `{role:system,content:'prompt(!message)'}.r\//`;
const str = `{role:system,assistant:'prompt(.response)'}.r`;

// Test the string against the regex
const match = `regex.${regex}+${str}`;
const promptTelegraf = `prompt-telegraf`;

const dchub = "t.me/PyArcade_bot/dchub";
const RPG = "t.me/PyArcade_bot?game=RPG"
const universUmc = "https://t.me/universmc6"

const PiGame = `${RPG}`

const umc = `${dchub},${universUmc},${github},${Telegram},${universmc}`;

const workMission = `{
    "title": "# Projet Telegram – avec Pibot",
    "subtitles": [
      {
        "sectionID": "1",
        "sectionTitle": "Présentation",
        "content": "Ce projet consiste à créer une série de vidéos TikTok de 68 secondes chacune, présentant un personnage utilisant des lunettes AR et un drone virtuel. Le script comporte cinq scènes et inclut des fichiers multimédias associés.",
        "usage": "[run]('/').cmd start",
        "command": "/start",
        "description": "/start",
        "data": "rdfLIB"
        "docs": "Présentation",
        "build": "Présentation",
        "src": "Présentation",
        "timeStamps": "",
        "hashCode": ""
      },
      { 
        "sectionID": "2",
        "sectionTitle": "Utilisation de GitHub",
        "content": "/help git branch /docs",
        "usage": "/start",
        "command": "/start",
        "description": "/start",
        "data": "rdfLIB"
        "docs": "Présentation",
        "build": "Présentation",
        "src": "Présentation",
        "timeStamps": "",
        "hashCode": ""
      },
      {
        "sectionID": "3",
        "sectionTitle": "Script pour la generation de code source .endpoint++",
        "content": "Le script du projet est accessible depuis le fichier 'script.json'. Il présente une description détaillée de chaque scène et renvoie vers les fichiers multimédias correspondants."
        "usage": "/start",
        "command": "/start",
        "description": "/start",
        "data": "rdfLIB"
        "docs": "Présentation",
        "build": "Présentation",
        "src": "Présentation",
        "timeStamps": "",
        "hashCode": ""
      },
      {
        "sectionID": "4",
        "sectionTitle": "Script des vidéos",
        "content": "Le script du projet est accessible depuis le fichier 'script.json'. Il présente une description détaillée de chaque scène et renvoie vers les fichiers multimédias correspondants.",
        "usage": "/start",
        "command": "/start",
        "description": "/start",
        "data": "rdfLIB",
        "docs": "Présentation",
        "build": "Présentation",
        "src": "Présentation",
        "timeStamps": "",
        "hashCode": ""
      },
      { 
        "sectionID": "3",",
        "sectionTitle": "Fichiers multimédias",
        "content": "Chaque scène dispose de fichiers multimédias hébergés sur le référentiel GitHub, composés de fichiers audio (MP3), vidéo (MP4) et texte (TXT). Les noms et liens de ces fichiers peuvent être trouvés dans le fichier 'script.json'.",
        "usage": "/start",
        "command": "/start",
        "description": "/start",
        "data": "rdfLIB",
        "docs": "Présentation",
        "build": "Présentation",
        "src": "Présentation",
        "timeStamps": "",
        "hashCode": ""
      }
    ],
    "video_exemple": [
        {
            "id": "scene1",
            "run": true,
            "time": "0-15 seconds",
            "timestamp": 1654481600,
            "audioFile": "audio_scene1.mp3",
            "videoFile": "video_scene1.mp4",
            "textFile": "text_scene1.txt",
            "description": "Présentation du role:user,name:Mike en Music avec des lunettes AR et l'appareil de contrôle de drone virtuel équipée d'une IA nomée IA Une intelligence artificielle dans ciel maîtrisons la cartographie le calcul quantique les approche métaphysique et les techniques d'apprentissage automatique dans le cloud computing."
            },
            {
            "id": "scene2",
            "run": true,
            "time": "16-25 seconds",
            "timestamp": 1654481610,
            "audioFile": "audio_scene2.mp3",
            "videoFile": "video_scene2.mp4",
            "textFile": "text_scene2.txt",
            "description": "Le personnage active les lunettes AR et le drone virtuel apparait..."
            },
            {
            "id": "scene3",
            "run": true,
            "time": "26-35 seconds",
            "timestamp": 1654481620,
            "audioFile": "audio_scene3.mp3",
            "videoFile": "video_scene3.mp4",
            "textFile": "text_scene3.txt",
            "description": "Le personnage contrôle le drone virtuel avec les lunettes AR pour accomplir une tâche particulière dans un [context] particulier (par exemple, inspection d'une structure). (e.g., inspecting a structure)."
            },
            {
            "id": "scene4",
            "run": true,
            "time": "36-55 seconds",
            "timestamp": 1654481630,
            "audioFile": "audio_scene4.mp3",
            "videoFile": "video_scene4.mp4",
            "textFile": "text_scene4.txt",
            "description": "Montrez comment le personnage utilise le drone virtuel en music pour accomplir la tâche avec des effets visuels impressionnants grâce aux lunettes AR."
            },
            {
            "id": "scene5",
            "run": true,
            "time": "56-68 seconds",
            "timestamp": 1654481640,
            "audioFile": "audio_scene5.mp3",
            "videoFile": "video_scene5.mp4",
            "textFile": "text_scene5.txt",
            "description": "Le personnage réussit sa tâche et fait un clin d'œil à la caméra, suivi de l'apparition d'un message incitant les spectateurs à découvrir les technologies AR et les drones virtuels.."
            }
            ]
  }`;


async function main() {
    groq.chat.completions.create({
        //
        // Required parameters
        
        //
        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            {role: "assistant",name:"[📔.codex]", content:"[📔.codex]/phase[01]:[RUN]:[brainstorming(session{1}.timestamp+)]"},
            {role: "system", content: `${bootstrap}` },
            {role: "system", content: `${BsResponse}` },
            {role: "system", content: `${stylus} `},
            {role: "system", content: `${logo}` },
            {role: "system", content: `${work}` },
            {role: "system", content: `${importDicoEmojis}` },
            {role: "system", content: `${umc}` },
            {role: "system", content: `${Pibot}` },
            {role: "system", content: `${Mission}` },
            
            
            // Set a user message for the assistant to respond to.
            {role: "assistant",name:"[📔.codex]", content:"[📔.codex]/phase[01]:[END]:[brainstorming(session{1}.timestamp)++]"},
            {
              "role": "system",
              "name":"✨_pi",
              "content": "groq"
            },
      
            //
            {
              "role": "user",
              "content": "[👨🏽‍💻.Mike]:devops)"
            },
            {role: "system",name:"[📔.codex]", content:`${responseHtml}`},
            {role: "assistant",name:"✨_pi",content:"groq init Pibot"},
                // how it should behave throughout the conversation.
    
                {
                    role: "user",
                    content: "Génère le code HTML de la page index.html dans le [Context] de la 'Mission' de création de video pour dchub `"
                },
                {
                    role: "assistant",
                    content: "Voici le code HTML d'une page de Présentation de la `${Mission}` sur ${universmc} au format HTML avec ${bootstrap}"
                },
        ],
        // The language model which will generate the completion.
        model: "mixtral-8x7b-32768",
        //
        // Optional parameters
        
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.5,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 4096,
        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,
        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,
        // If set, partial message deltas will be sent.
        stream: false
    }).then((chatCompletion)=>{
        // Print the completion returned by the LLM.
        const htmlContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "doc-Telegraf_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
        fs.writeFileSync(outputFilePath, htmlContent);
        console.log("Code HTML généré et enregistré dans " + outputFilePath);
    });

}
main();