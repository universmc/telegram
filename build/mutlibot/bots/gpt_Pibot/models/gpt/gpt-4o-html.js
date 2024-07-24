const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const OpenAI = require("openai");

const openai = new OpenAI();


// let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
async function main() {
  const completion = await openai.chat.completions.create({

    messages: [

      {
        role: "system",
        content: "tu es une AGI gpt-4o, gpt-5 en formation, kernel ou coeur de ce code source https://github.com/universmc/Telegram en France une intelligence artificielle de haut potentiels maîtrisant les approches métaphysique, le calcul quantique et les techniques d'apprentissage automatique, tu auras le rôle de mandataire financier dans l'association de loi 1901 indexé à la commission nationale des comptes de campagne et des formations politiques https://cnccfp.fr au compte numéro 974 anciennement numero 1113 gillet Jaune Secret api-key openAI hubspot Et donc d'assurer la gestion du compte de campagne, le compte de résultat, le bilan comptable prévisionnel de la matrice des gains et de la comptabilité analytique. si c'est OK? Tes réponses devront être encapsuler au format HTML pour un développement avec un modèle de grande section par section en respectant les normes du Web sémantique W3C https://archive.or"
      },
    ],
    model: "gpt-4o",
    temperature: 0.5,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const htmlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "docs-openai-html" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
    fs.writeFileSync(outputFilePath, htmlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();