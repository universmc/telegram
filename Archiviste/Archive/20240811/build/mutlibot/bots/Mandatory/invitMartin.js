const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
async function main() {


    
    groq.chat.completions.create({
        //
        // Required parameters
        //
        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            // how it should behave throughout the conversation.
        
            {
                role: "system",
                content: "Dans ce Code Source tu as incarneras le rôle de https://www.w3champions.com/ dans cette instance groq-sdk dans ta mission enquêté sur https://univers-mc.cloud (en Construction /build) dchub Télégram avec Pibot. Tes réponses devront être encapsuler au format HTML pour un développement avec un modèle de grande section par section en respectant les normes du Web sémantique W3C https://archive.org"
            },
            {
                role: "assistant",
                name:"user-Telegram",
                content: "welcom to Quantum univers Ux Martin +emoji-picker-ia.r"
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
        const outputFilePath = "indexPage_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
        fs.writeFileSync(outputFilePath, htmlContent);
        console.log("Code HTML généré et enregistré dans " + outputFilePath);
    });

}
main();
