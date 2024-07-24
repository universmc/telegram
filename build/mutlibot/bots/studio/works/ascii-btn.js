const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {

hudTensor="╔╗╚╝═║╠╣╦╩╬"         // Caractères spéciaux utilisés pour le design du menu
    
const initAscii = `
    print "";
    print "╔═══════════════════════════════════════╗       
    print "╠             ✨ Pi-ia btn              ╣       
    print "╚═══════════════════════════════════════╝ 
    print "
`;
const chatCompletion = await groq.chat.completions.create({
    "messages": [
        
      {role: "system",name:"[🌌_system", content:`Response in ${initAscii}`},
      {role: "assistant",name:"[📔_codex]", content:"[📔.codex]_Phase[01]:[RUN]:[brainstorming[.Generator.]]"},
      {role: "user",name:"[🌴_Groq]", content: "[🌴_Groq]+[promptmodel]+[🤖_emojis.sh]+[[💬emojispicker]!" },
      {role: "assistant",name:"[📔_codex]", content:"[📔.codex]_Phase[01]:[RUN]:[response.${initAscii}]]"},
    
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const gqlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "ascii-lvl-🤖_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".gql";
    fs.writeFileSync(outputFilePath, gqlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});

}

main();
