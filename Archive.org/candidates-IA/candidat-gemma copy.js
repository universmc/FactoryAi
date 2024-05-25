const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

const projectInfo = {
    projectName: "univers-mc.cloud",
    projectDescription: "universmc Plate-forme dédiée aux machines Learning et au projet de formation d'intelligence artificielle. Mise en place de la cryptomonnaie UMC index dans ICO blockchain solidity ethereum. Nous visons à créer un curriculum vitae universel intégrant la formation et la professionnalisation, et à monétiser les compétences dans le CV. Notre projet promeut l'égalité des chances en encourageant les gens à développer leurs compétences et à les mettre en valeur. En tant qu'association loi 1901, nous gérons un compte administré de manière transparente. Nous utilisons des technologies telles que l'apprentissage automatique, le cloud computing, Shell, Groq et SystemDream pour offrir un environnement de développement et de travail efficace et pour améliorer constamment notre produit.",
    collaborators: {
        mike: {
            name: "Mike",
            role: "ProjectManager",
            Skills: "DevOps fullstack ",
            links: {
                githubProfile: "https://www.github.com/universmc/workflow/",
                pastProjects: "https://www.github.com/universmc/pi/"
            }
        },
        pi: {
            name: "Pi",
            role: "AI",
            Skills: "Je suis une intelligence artificielle unique, conçue pour Transmettre ce que j'ai de meilleur",
            links: {
                contributions: "https://www.github.com//universmc/umc/pi_contributions",
                projects: "https://www.gitda.com/universmc/pi_past_projects"
            }
        }
    },
    mission: "Notre mission est de construire la plateforme 'univers-mc.cloud' en collaboration, en tant que CV model, en utilisant notre expertise dans les approches SWOT et un gameplayr).",
    additionalInfo: "Rejoignez-nous dans cette aventure passionnante et contribuez à la construction de la prochaine génération de plateformes Web alimentées par l'IA, en utilisant nos compétences combinées et en répondant à nos besoins respectifs."
};

const candidateMission = {
    introduction: `Nous sommes à la recherche d'un talent unique pour compléter notre équipe de constructeurs de projets Web. Notre mission est de créer une plateforme Web et d'IA révolutionnaire. Si vous êtes un constructeur de sites Web fullstack qui maîtrise les technologies nécessaires, n'hésitez pas à postuler. Rejoignez-nous pour une expérience de travail inoubliable et créative!`,
    mission: {
      title: "Créer une plate-forme Web et d'IA unique",
      description: `Notre objectif est de combiner nos besoins et compétences respectifs pour créer une plate-forme Web et d'IA unique. Vous serez invité à collaborer avec nous et à faire un usage optimal de vos talents dans ce projet stimulant et novateur. Nous travaillons sur une radio potentielle et un modèle d'économie circulaire, en utilisant le curriculum et la cryptomonnaie UMC, qui sera programmée à l'aide d'une machine Learning.`,
      requiredSkills: [
        "JavaScript (asynchrone, événementielles, Timeline, choice(), forEach(), fetch(), length(), JS/JSON)",
        "DevOps fullstack Groq et Groq-SDK",
        "(frontend : HTML, CSS, JS, XML, SVG, ASCII ; backend : PHP, JSON, SQL ; API RESTful : Node.js, Electron, Bootstrap, Swagger)",
  ],
      collaborators: {
        mike: {
          name: "Mike",
          role: "ProjectManager",
          needs: ["website groq builder role:constructor univers-mc.cloud/menu/ia/pi/index.php"],
          links: {
            githubProfile: "https://www.github.com/universmc/workflow/",
            pastProjects: "https://dev.univers-mc.cloud/"
  }
        },
        pi: {
          name: "Pi",
          role: "AI",
          needs: ["Learning", "DataAnalysis", "AlgorithmImprovement", "Collaboration"],
          links: {
            contributions: "https://www.github.com/pi",
            projects: "https://univers-mc.cloud"
  }
        }
      }
    },
    signature: `Pour en savoir plus sur notre projet et sur notre équipe, veuillez vous référer aux liens ci-dessous :
        Mike : https://www.github.com/universmc/umc, https://umc.univers-mc.cloud
        Pi : https://www.github.com/pi, https://www.github.com/universmc/pi
        Si vous êtes intéressé par cette opportunité et que vous croyez être la personne qu'il nous faut, n'hésitez pas à postuler.
`};


  // To copy the project information, use the following command:
  // copy(JSON.stringify(projectInfo))
  

async function main(
) {
    let systemContent = "Bienvenue dans notre équipe, [Nom du constructeur]! Nous sommes ravis de vous avoir à bord pour aider à construire notre site Web et développer notre plateforme d'IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et de l'intelligence artificielle Nous allons commencer par vous présenter notre instance pour le role:constructor et donc rediger la documentation $info";
    let assistantContent = "Salutations, [Nom du constructeur]! Je suis l'assistant virtuel de l'équipe, et je suis là pour vous aider à vous intégrer et à travailler sur nos projets. Si vous avez besoin d'informations, de conseils ou d'autres ressources, n'hésitez pas à me le faire savoir. Nous espérons que vous serez un atout précieux pour notre projet, et nous sommes impatients de voir vos contributions";
    let userContent = `"Test"`;




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
        ],
        model: "gemma-7b-it",
        temperature: 0.6,
        max_tokens: 2048,
        top_p: 1,
        stop: null,
        stream: false
}).then((chatCompletion)=>{
        const mdContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "output/CV-contructor03_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
    });
}

main();
