const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

const bootcss = "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>";
const bootJs = "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>";
const bootstrap = bootcss+bootJs;

const github = "https://github.com/universmc/Telegram.git";
const Telegram = `telegram.git -version`

const importDicoEmojis = "file://src/json/dicoEmojis.js"

const logo = "Matrix - Telegram";
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
            {role: "assistant",name:"[📔.codex]", content:"[📔.codex]/phase[02]:[devOps]:[brainstorming(session{1-1}.timestamp)++]"},
            {
              "role": "system",
              "name":"✨_pi",
              "content": "groq upload code source `${github}` version 1-1-0"
            },
            
            //
            {
              "role": "user",
              "content": "[👨🏽‍💻.Mike]:devops)"
            },
            {role: "assistant",name:"[📔.codex]", content:"[📔.codex]/phase[03]:[END]:[brainstorming(session{1-3}.timestamp)++]"},
            {role: "system",name:"[📔.codex]", content:`${responseHtml}`},
            {role: "assistant",name:"✨_pi",content:"groq init Pibot"},
                // how it should behave throughout the conversation.
    
                {
                    role: "user",
                    content: "Génère le code HTML de la page index.html dans le [Context] de la 'Mission' d'un page de presentation du sallon @universmc6 sur Telegram`"
                },
                {
                    role: "assistant",
                    content: "Voici le code HTML d'une page de Présentation de Pitbot sur le sallon Telegram @universmc6 au format HTML avec ${bootstrap}"
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