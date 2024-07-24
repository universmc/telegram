const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main(
) {
    let systemContent = "Bienvenue";
    let assistantContent = "Salutations, [user]!";
    let userContent = `"./.zshrc"`;

    groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: systemContent
            },
            {
                role: "assistant",
                content: assistantContent
            },
            {
                role: "system",
                content: "groq 'sum(input.value)' --data-csv input.csv"
            },
            {role: "user",content: userContent},
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.5,
        max_tokens: 2048,
        top_p: 1,
        stop: null,
        stream: false
}).then((chatCompletion)=>{
        const mdContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "output/(✨_pi)_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
    });
}

main();
