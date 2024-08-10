const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

const IntelAgent = require('./intel.js');

const intelAgent = new IntelAgent();

const systemInfo = intelAgent.gatherSystemInfo();
console.log(systemInfo);

const fileInfo = intelAgent.gatherFileInfo('./data/');
console.log(fileInfo);

const serverResponseStatus = intelAgent.uploadDataToServer({ systemInfo, fileInfo });
console.log(serverResponseStatus);

const intel = "🕴";

const norm_W3C = `https://validator.w3.org`;
const make = "Makefile";
const cdnJs = `🌐 cdnjs est un CDN open source qui fournit des bibliothèques JavaScript et des frameworks CSS prêts à être utilisés sur votre site web. Il propose une grande variété de ressources pour améliorer les performances et la fiabilité de votre site. 🛠️ intégrer cdnjs dans un projet, Pour intégrer cdnjs dans un projet web, vous pouvez simplement inclure le lien CDN de la bibliothèque que vous souhaitez utiliser dans le code HTML de votre site. Cela vous permet d'accéder rapidement aux dernières versions des bibliothèques sans avoir à les héberger vous-même url = 'https://cdnjs.com'`;
const archiviste = "https://archive.org";
const github = 'Git est un système de gestion de versions décentralisé largement utilisé pour le suivi des modifications apportées au code source lors du développement de logiciels. Il permet aux développeurs de collaborer, de revenir en arrière sur les changements, et de gérer efficacement les branches de projet. Git est essentiellement un espace de stockage qui contient l historique des modifications de fichiers pour un projet particulier. Les développeurs peuvent cloner, pousser, tirer et fusionner des dépôts pour partager et collaborer sur du code url=https://github.com GitHub est une plateforme populaire qui repose sur Git et qui offre des fonctionnalités supplémentaires telles que le suivi des problèmes, le déploiement automatisé et la gestion des projets. Les développeurs l utilisent pour héberger leurs dépôts de code et collaborer avec d autres';
const widgets = `https://core.telegram.org/widgets`;
const universmc = `https://t.me/user_Pibot/`;
const universmc_app = `https://t.me/user_Pibot/invite`;
const Avatars_Pibot = "Avatars_Pibot est un bot de télégramme qui permet aux utilisateurs de créer et de personnaliser des avatars de profil. Ce bot intelligent utilise l'apprentissage automatique pour générer des avatars uniques en fonction des préférences et des centres d'intérêt de l'utilisateur. Les utilisateurs peuvent également choisir parmi une variété de thèmes et de styles pour créer un avatar qui reflète leur personnalité.L'analyse de @Avatars_Pibot montre qu'il est devenu rapidement populaire parmi les utilisateurs de Telegram, grâce à son interface conviviale et à sa capacité à générer des avatars de haute qualité. Le bot utilise également des outils d'IA avancés pour analyser les données des utilisateurs et fournir des recommandations personnalisées pour leur avatar.L'un des avantages clés de @Avatars_Pibot est son intégration transparente avec Telegram, ce qui permet aux utilisateurs de créer et de gérer leurs avatars directement à partir de la plateforme de messagerie. Cette intégration lisse a contribué à la popularité de @Avatars_Pibot et en a fait un outil essentiel pour les utilisateurs qui souhaitent personnaliser leur expérience de messagerie.En termes de présentation, @Avatars_Pibot se distingue par son design élégant et son interface intuitive. Le bot est facile à utiliser et fournit aux utilisateurs une expérience de navigation fluide. L'accent est mis sur la simplicité, ce qui permet aux utilisateurs de créer rapidement un avatar de profil qui correspond à leur style et à leur personnalité.En conclusion, @Avatars_Pibot est un bot de télégramme innovant qui utilise l'IA pour offrir aux utilisateurs une expérience de création d'avatars de profil unique et personnalisée. Grâce à son intégration transparente avec Telegram et à son interface conviviale, le bot a rapidement gagné en popularité et est devenu un outil précieux pour les utilisateurs qui souhaitent se démarquer sur la plateforme de messagerie @Avatars_Pibot";


// const bootstrapCSS = "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>";
// const header = `<header><nav><div id='navBar'></div></nav></header>`
// const mainContent = `<main><div id='telegram'><section class='Telegram'><article><h3>Telegram-widgets</h3><figure><div id='bootstap card'></div></figure></article></section></main>`
// const footer = `<footer><div id='road_map></div></div>cc by univers-mc</div></footer>`
// const bootstrapJS = "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>";
// 
// const HTMLresponse = `${bootstrapCSS}+${header}+${mainContent}+${footer}+${bootstrapJS}`;

const database = `${intel}+${make}+${cdnJs}+${norm_W3C}+${github}++${archiviste}+${widgets}+${universmc}+${universmc_app}+${Avatars_Pibot}`


const context = "/Telegram/blog/"
const role = "gestion du blog"
const integration = `${context}+${database}+${role}` 

async function main() {

    groq.chat.completions.create({
        //
        // Required parameters
        
        //
        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            {role: "system", content: `${integration}` },
            // how it should behave throughout the conversation.
            {
                role: "assistant",
                content: "/dev code source HTML de la page d'index de @Avatars_Pib bot Telegram créer avec @BotFather, "
            },
            {role: "system", content: Avatars_Pibot },
            {role: "assistant", content: `Intel 🕴 :  Ta réponse devrait être rédigé au format HTML respectant les normes du Web sémantique W3C"` }
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
        const outputFilePath = "blog_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
        fs.writeFileSync(outputFilePath, htmlContent);
        console.log("Code HTML généré et enregistré dans " + outputFilePath);
    });

}
main();
