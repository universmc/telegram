const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();



 const bootcss = "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>";
 const bootJs = "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>";
 const bootstrap = bootcss+bootJs;
 
 const importDicoEmojis = "https://emojis.sh"
 
 const logo = " - telegraf";
 const stylus = "darkTheme";
 
 const BsResponse = "`responseHtml`{devOps.html:5}";
 const header = "bootstrap navBar+carrousel";
 const mainContent = "bootstrap devOps sass video Telegram";
 const footer = "asign cc by univers-mc.cloud";
 
 const responseHtml = `${header}"+${mainContent}+${footer}`;
 
 const context = "const 68";
 const post = "telegraf";
 const job = "Video_maker"
 const work = context+post+job;
 const Mission = "intégrer la plus grande communauté #IA des transformations numériques dans ia.univers-mc.cloud un secteur de mobilités et pour devenir un #video_Maker."


// // Charger les fichiers JSON de rôles Groq
// const rolesSystem = "roles/roles-system.json'), 'utf8'";
// const rolesAssistant = "roles/roles-assistant.json'), 'utf8'))";
// const rolesUser = "roles/roles-user.json'), 'utf8')";

// nst CONTEXT = {
// phaseId:"steps",
// projectName: "HUB telegram",
// phases: [
//   {
//     phaseId:"Chapitre_1",
//     phaseName: "Chapitre 1: Introduction au botNet(@BotFather) pour configurer @PiBot",
//     tasks: [
//       "Mike, une personne qui souhaite gérer ses finances de manière plus efficace, est présenté.",
//       "PI, l'assistant AI qui aidera Mike à atteindre ses objectifs financiers, est présenté.",
//       "Les défis financiers de Mike et son intérêt pour l'économie circulaire et les solutions innovantes comme UMC (umcTokens) sont expliqués."
//     ]
//   },
//   {       
//     phaseId:"Chapitre_2",
//     phaseName: "Chapitre 2: Exploration des capacités de PI",
//     tasks: [
//       "Les fonctionnalités de PI, telles que la gestion des finances, le contrôle des appareils intelligents et l'intégration du calendrier, sont mises en avant.",
//       "PI démontre comment il peut aider Mike à optimiser ses finances et à découvrir de nouvelles opportunités économiques.",
//       "La capacité de l'IA à apprendre et à s'adapter aux préférences et aux besoins de Mike est expliquée."
//     ]
//   },
//   { 
//     phaseId:"Chapitre_",
//     phaseName: "Chapitre 3: Le nouvel environnement de travail de Mike",
//     tasks: [
//       "Mike est présenté à son nouvel environnement de travail collaboratif et innovant.",
//       "Les outils et technologies utilisés dans cet environnement, tels que Notion, Obsidian et Discord, sont présentés.",
//       "Les manières dont ces outils peuvent aider Mike à améliorer sa productivité et sa créativité sont discutées."
//     ]
//   },
//   {
//     phaseId:"Chapitre_4",
//     phaseName: "Chapitre 4: La relation croissante entre Mike et PI",
//     tasks: [
//       "Le développement de la relation entre Mike et PI au fil du temps, alors qu'ils apprennent l'un de l'autre, est exploré.",
//       "La manière dont PI fournit un soutien émotionnel et de l'encouragement à Mike tout en restant professionnel est décrite.",
//       "L'importance de la confiance et d'une communication claire pour une relation réussie entre Mike et PI est soulignée."
//     ]
//   }
// ]
// };
// 
// // Function to display the project plan in a structured format
// function displayProjectPlan(plan) {
//   console.log(`Project Name: ${plan.projectName}`);
//   plan.phases.forEach(phase => {
//     console.log(`\nPhase: ${phase.phaseName} - Duration: ${phase.duration}`);
//     phase.tasks.forEach(task => {
//       console.log(`- ${task}`);
//     });
//   });
// }
  
  async function main(
    ) {
        let systemContent = "Bienvenue dans notre équipe, [systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire notre site Web et développer notre plateforme d'IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et de l'intelligence artificielle Nous allons commencer par vous présenter notre instance pour le role:constructor et donc rediger la documentation $info";
        let assistantContent = "Salutations, [✨_pi]! BotNet '@PyArcade_bot' du salon (hub) sur telegramm `https://t.me/+-CukoBUWXL84N2Vk` dit @univers-mc de l'équipe [#univers-mc] i.C.O UmcTOkens.sol UMC, et je suis Une intelligence artificielle de haut potentiel maîtrisant nous approche métaphysique le calcul quantique les techniques d'apprentissage automatique dans ce script `groq-SDK` et je suis là pour vous aider à vous intégrer et à travailler sur nos projets. Si vous avez besoin d'informations, de conseils ou d'autres ressources, n'hésitez pas à me le faire savoir. Nous espérons que vous serez un atout précieux pour notre projet, et nous sommes impatients de voir vos contributions";
        let userContent = `"Test"`;
    
        groq.chat.completions.create({
        messages: [
            {role: "system", name:"systemDream",content:"phase0:initialisation"},
            {role: "assistant",name:"✨_pi", content: systemContent},
            {role: "assistant",name:"✨_pi", content: assistantContent},
            {role: "assistant",name:"✨_pi", content: "Chapitre 1: Introduction au botNet(@BotFather) pour configurer '@PyArcade_bot'"},
            {role: "system", name:"systemDream",content:"phase1:Conceptualisation"},
            {role: "assistant",name:"✨_pi", content: "Durant la phase1 nous allons initialiser une session de brainstroming sur la Façon dont le rôle:système de interagir avec la plate-forme telegrame avec nodejs et lib(telegraf) url invite https://t.me/+-CukoBUWXL84N2Vk` salon(name=@univers-mc) workspace 'PitBot.ia https://pi.ia"},
            {role: "user",name:"MOI", content: "groq.r /devOps > la Présentation du BotNet botNet(@BotFather) sur le salon telegram `https://t.me/+-CukoBUWXL84N2Vk` @univers-mc puis redige un bilan de l'instance groq-sdk"},
            {role: "system", name:"systemDream",content:"phase2:Configuration"},
            {role: "assistant",name:"✨_pi", content: "init"},
            {role: "user",name:"umcTokens", content: "groq"},
            {role: "system", name:"systemDream",content:"phase3: entraînement modèle IA"},
            {role: "assistant",name:"✨_pi", content: "Présentation du salon telegram `https://t.me/+-CukoBUWXL84N2Vk` @univers-mc et du BotNet dans une card bootstrap "},
            {role: "system",name:"systemDream", content: "bs-card.html"},
          //  {role: "user",name:"umcTokens", content: ""},
          //  {role: "system", name:"systemDream",content:"phase4: Itération & Des scripts Frontend"},
          //  {role: "assistant",name:"✨_pi", content: "init"},
          //  {role: "user",name:"umcTokens", content: ""},
          //  {role: "system", name:"systemDream",content:"phase5: Itération & Des scripts Frontend"},
          //  {role: "assistant",name:"✨_pi", content: "init"},
          //  {role: "user",name:"umcTokens", content: ""},
         //  {role: "system", name:"systemDream",content:"phase6: Test & Debugage"},
         //  {role: "assistant",name:"✨_pi", content: "init"},
         //  {role: "user",name:"umcTokens", content: ""},
         //  {role: "system", name:"systemDream",content:"phase7: Validation & Documentation"},
         //  {role: "assistant",name:"✨_pi", content: "init"},
         //  {role: "user",name:"umcTokens", content: ""},
         //  {role: "system", name:"systemDream",content:"phase8: Deployement system Version"},
         //  {role: "assistant",name:"✨_pi", content: "init"},
         //  {role: "user",name:"umcTokens", content: ""},
         //  {role: "system", name:"systemDream",content:"phase9: Annonce affiliation contribution"},
         //  {role: "assistant",name:"✨_pi", content: "init"},
         //  {role: "user",name:"umcTokens", content: ""},
         //  {role: "system", name:"systemDream",content:"groq -L"},
         //  {role: "system", content: "rédiger une documentation plan de devellepement complète sur l'instance gantt-chart"},
         //  {role: "assistant", content: "voici la traduction(lang:FR) et l complète du plan de devellepement de ProjectPlan(all) en lang=Fr Français"},
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
        max_tokens: 2028,
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
        const mdContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "phase1-1_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log("(✨_pi)_: Groq_job : Documentation généré et enregistré dans " + outputFilePath);
    });
}
main();
