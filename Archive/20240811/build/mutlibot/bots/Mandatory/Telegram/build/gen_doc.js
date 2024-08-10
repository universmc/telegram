const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
    
  actions = "devOps;"

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      
      {role: "system",name:"[📔.codex]", content:`${actions}`},
      {role: "assistant",name:"[📔.codex]", content:"[📔.codex]/phase[01]:[RUN]:[init:roles)]"},
      {
        "role": "assistant",
        "name":"[✨_pi]",
        "content": "groq"
      },
      {
        "role": "user",
        "name":"[👨🏽‍💻.Mike]",
        "content": "[👨🏽‍💻.Mike]: dashboard des .responses au [message] groq encapuslé en HTML avec `${bootstrap}`"
      },
      
      {role: "assistant",name:"[📔.codex]", content:"[📔.codex]/phase[02]:[RUN]:[brainstorming(devOps)]"},

      {role: "system",name:"[📔.codex]", content:"dev completion"},

    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.8,
    max_tokens: 4096,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const htmlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "Mike.👨🏽‍💻" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
    fs.writeFileSync(outputFilePath, htmlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();
