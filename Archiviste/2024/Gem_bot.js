const fs = require("fs");
const { Telegraf } = require('telegraf');
const axios = require('axios');
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const OpenAI = require("openai");
const openai = new OpenAI();


const bot = new Telegraf('process.env.BOT_TOKEN', {
  telegram: {
    webhookReply: true,
  },
});

// Fonction pour générer une image avec DALL-E
async function generateImage(prompt) {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1792x1024",
    });

    const imageUrl = response.data[0].url;
    return imageUrl;
  } catch (error) {
    console.error("Erreur lors de la génération de l'image :", error);
    throw new Error("Impossible de générer l'image.");
  }
}

// Commande /imagine pour générer et envoyer une image
bot.command('imagine', async (ctx) => {
  // Extraire l'entrée de l'utilisateur du message Telegram
  const userInput = ctx.message.text.split(' ').slice(1).join(' ');

  // Vérifier si l'utilisateur a fourni un prompt
  if (!userInput) {
    ctx.reply("Veuillez fournir une description pour générer l'image. Exemple: `[ Génère une image multidimensionnelle de haute définition illustrant la beauté des meta données mettant en lumière la nature des choses. l'image doit être format 16:9 .webp]`");
    return;
  }

  ctx.reply("Génération de l'image en cours, veuillez patienter...");

  try {
    const imageUrl = await generateImage(userInput);

    // Télécharger et envoyer l'image à l'utilisateur
    const responseFetch = await fetch(imageUrl);
    const arrayBuffer = await responseFetch.arrayBuffer(); // Utilise arrayBuffer pour récupérer les données de l'image
    const buffer = Buffer.from(arrayBuffer); // Convertit ArrayBuffer en Buffer
    const fileName = `Image_${new Date().toISOString().replace(/[:.]/g, "-")}.webp`;

    fs.writeFileSync(fileName, buffer);

    // Envoyer l'image à l'utilisateur via Telegram
    await ctx.replyWithPhoto({ source: fileName }, { caption: `Voici votre image générée : ${userInput}` });

    // Supprimer le fichier après l'envoi pour économiser l'espace disque
    fs.unlinkSync(fileName);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'image :", error);
    ctx.reply("Désolé, une erreur s'est produite lors de la génération de l'image.");
  }
});


async function generateMarkdown(subject) {
  return `## Comment [${subject}] - Un guide étape par étape\n\n**Introduction**:\n\nCe guide vous aidera à comprendre et à réaliser le [${subject}]. Il est conçu pour les débutants et les utilisateurs intermédiaires qui souhaitent apprendre les bases de [${subject}].\n\n`;
}


async function main(subject) {
  try {
    const completion = await groq.chat.completions.create({
      model: "gemma2-9b-it",
      messages: [
          { role: "assistant", content: `Génération d'un guide Le rôle de développeur de Bot Net -ia` },
        { role: "user", content: `Génération d'un guide sur ${subject}` },
        { role: "system", content: `bienvenue sur Telegram` }
      ],
      temperature: 0.5,
      max_tokens: 4096
    });

    const mdContent = completion.choices[0].message.content;
    const outputFilePath = `HowTo-${subject}_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);

    return `Le How-To sur ${subject} a été enregistré dans ${outputFilePath}`;
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
    return `Erreur : ${error.message}`;
  }
}

bot.command('generate', async (ctx) => {
  const subject = ctx.message.text.split(' ')[1] || 'HowTo_';
  ctx.reply(`Génération du guide pour le sujet : ${subject}...`);
  const result = await main(subject);
  ctx.reply(result);
});


bot.on('message', async (ctx) => {
    const message = ctx.message.text.trim().toLowerCase();

    if (message.startsWith('/rm')) {
        return; // Ignorer les commandes
    }

    const racine ="./*"
    const node ="./package.json*"
    const make ="./Makefile"
    const cdnJs = `cdnjs.com`;
    const archiviste = `https://archive.org`;
    const github = `https://github.com/universmc/user.git`;
    const dchub_public = `t.me/dchub_01`;
    const dchub_prive = `t.me/dchub_Pibot`;
    const user_Pibot = `https://t.me/user_Pibot/`;
    const youtube_Pibot = `https://t.me/user_Pibot/`;
    const google_Pibot = `https://t.me/google_Pibot/`;
    const gemini_Pibot = `https://t.me/gemini_Pibot/`;
    
    const neoFs = {
      "Titre": "Projet NeoFS",
      "Description": "projet NeoFS, mettant en avant son objectif, ses fonctionnalités clés, et comment il intègre le machine learning, la génération de scripts full stack, et l'IA.",
      "Fonctionnalités": {
        "Machine Learning": "Détails sur comment le projet utilise le machine learning, par exemple, l'intégration de TensorFlow.js pour l'entraînement de modèles dans le navigateur.",
        "Génération de Scripts Full Stack": "Explication de la manière dont les scripts sont générés pour le développement full stack.",
        "Optimisation avec WebDev": "Comment le projet utilise WebDev pour la prévisualisation et l'optimisation des pages web.",
        "Intégration de l'IA": "Utilisation de GPT-3 ou Codex pour améliorer le développement et offrir des fonctionnalités avancées."
      },
      "Technologies Utilisées": "Listez les technologies, langages, frameworks et outils utilisés dans le projet.",
      "Installation et Configuration": "Instructions étape par étape pour installer et configurer le projet sur un environnement local.",
      "Utilisation": "Guide sur comment utiliser l'application, avec des exemples de commandes ou d'actions si nécessaire.",
      "Contribution": {
        "Informations sur comment contribuer au projet, y compris les directives de contribution et le code de conduite.": {
          "Génération de Code": {
            "Front-End (HTML, CSS, JS)": {
              "Description": "NeoFS peut générer des modèles de code pour des interfaces utilisateur, en prenant en compte les meilleures pratiques de conception web et la réactivité.",
              "Tâches": [
                "Générer des modèles de code front-end.",
                "Assurer la réactivité et la conformité aux meilleures pratiques."
              ],
              "Prompt": "$prompt=(instructions spécifiques pour la génération de code front-end)",
              "Conseil Next Step": "Passez à l'étape suivante pour la génération de code back-end."
            },
            "Back-End (PHP, SQL)": {
              "Description": "Générer des scripts back-end pour la logique métier, l'accès aux bases de données, et la gestion des API.",
              "Tâches": [
                "Générer des scripts back-end.",
                "Assurer la logique métier et l'accès aux bases de données."
              ],
              "Prompt": "$prompt=(instructions spécifiques pour la génération de code back-end)",
              "Conseil Next Step": "Passez à l'étape suivante pour l'analyse de code."
            }
          },
          "Analyse de Code": {
            "Détection d'Erreurs et de Bugs": {
              "Tâches": [
                "Analyser le code pour identifier les erreurs syntaxiques ou logiques.",
                "Rapporter les erreurs détectées."
              ],
              "Prompt": "$prompt=(instructions spécifiques pour la détection d'erreurs)",
              "Conseil Next Step": "Passez à l'étape suivante pour la suggestion et la correction de code."
            },
            "Optimisation de Code": {
              "Tâches": [
                "Suggérer des améliorations pour l'efficacité, la lisibilité, et la performance du code.",
                "Rapporter les suggestions d'optimisation."
              ],
              "Prompt": "$prompt=(instructions spécifiques pour l'optimisation de code)",
              "Conseil Next Step": "Passez à l'étape suivante pour la compilation des composants web full stack."
            }
          },
          "Suggestion et Correction de Code": {
            "Améliorations Automatiques": {
              "Tâches": [
                "Proposer des corrections automatiques pour les erreurs courantes.",
                "Appliquer des améliorations automatiques."
              ],
              "Prompt": "$prompt=(instructions spécifiques pour les améliorations automatiques)",
              "Conseil Next Step": "Passez à l'étape suivante pour la compilation des composants web full stack."
            },
            "Suggestions Basées sur les Tendances": {
              "Tâches": [
                "Offrir des suggestions basées sur les dernières tendances et meilleures pratiques en développement web.",
                "Rapporter les suggestions basées sur les tendances."
              ],
              "Prompt": "$prompt=(instructions spécifiques pour les suggestions basées sur les tendances)",
              "Conseil Next Step": "Passez à l'étape suivante pour la compilation des composants web full stack."
            }
          },
          "Compilation des Composants Web Full Stack": {
            "Intégration Front-End et Back-End": {
              "Tâches": [
                "Compiler des applications complètes en intégrant à la fois le front-end et le back-end.",
                "Assurer la compatibilité entre les composants."
              ],
              "Prompt": "$prompt=(instructions spécifiques pour la compilation des composants web full stack)",
              "Conseil Next Step": "Passez à l'étape suivante pour le développement et l'implémentation."
            },
            "Prévisualisation en Temps Réel": {
              "Tâches": [
                "Offrir une fonctionnalité de prévisualisation pour voir le rendu du code généré.",
                "Assurer la réactivité de la prévisualisation."
              ],
              "Prompt": "$prompt=(instructions spécifiques pour la prévisualisation en temps réel)",
              "Conseil Next Step": "Passez à l'étape suivante pour le développement et l'implémentation."
            }
          },
          "Développement et Implémentation": {
            "Utilisation de l'IA et du Machine Learning": {
              "Tâches": [
                "Utiliser des modèles d'apprentissage automatique pour améliorer la génération et l'analyse de code.",
                "Assurer l'intégration fluide de l'IA dans le processus de développement."
              ],
              "Prompt": "$prompt=(instructions spécifiques pour l'utilisation de l'IA et du Machine Learning)",
              "Conseil Next Step": "Passez à l'étape suivante pour l'intégration avec les outils existants."
            },
            "Interface Utilisateur Intuitive": {
              "Tâches": [
                "Développer une interface utilisateur qui permet aux développeurs d'interagir facilement avec NeoFS, par exemple, via une interface graphique ou une ligne de commande.",
                "Assurer la convivialité de l'interface."
              ],
              "Prompt": "$prompt=(instructions spécifiques pour le développement de l'interface utilisateur)",
              "Conseil Next Step": "Passez à l'étape suivante pour l'intégration avec les outils existants."
            }
          },
          "Intégration avec les Outils Existant": {
            "Compatibilité avec les IDEs": {
              "Tâches": [
                "Assurer la compatibilité avec les environnements de développement intégrés populaires.",
                "Développer des extensions pour les IDEs."
              ],
              "Prompt": "$prompt=(instructions spécifiques pour la compatibilité avec les IDEs)",
              "Conseil Next Step": "Passez à l'étape suivante pour la sécurité et la confidentialité."
            },
            "Plugins et Extensions": {
              "Tâches": [
                "Offrir des plugins pour intégrer NeoFS dans des outils existants.",
                "Assurer la compatibilité avec diverses extensions."
              ],
              "Prompt": "$prompt=(instructions spécifiques pour les plugins et les extensions)",
              "Conseil Next Step": "Passez à l'étape suivante pour la sécurité et la confidentialité."
            }
          },
          "Sécurité et Confidentialité": {
            "Protection des Données": {
              "Tâches": [
                "Assurer la sécurité des données de code traitées par NeoFS.",
                "Mettre en place des mesures de protection des données."
              ],
              "Prompt": "$prompt=(instructions spécifiques pour la protection des données)",
              "Conseil Next Step": "Passez à l'étape suivante pour le feedback et l'amélioration continue."
            },
            "Respect des Normes de Confidentialité": {
              "Tâches": [
                "Se conformer aux normes de confidentialité et de sécurité des données.",
                "Effectuer des audits de sécurité réguliers."
              ],
              "Prompt": "$prompt=(instructions spécifiques pour le respect des normes de confidentialité)",
              "Conseil Next Step": "Passez à l'étape suivante pour le feedback et l'amélioration continue."
            }
          },
          "Feedback et Amélioration Continue": {
            "Retours Utilisateurs": {
              "Tâches": [
                "Mettre en place un système pour recueillir les retours des utilisateurs et les intégrer dans les mises à jour de NeoFS.",
                "Analyser les retours et prioriser les améliorations."
              ],
              "Prompt": "$prompt=(instructions spécifiques pour la collecte de retours utilisateurs)",
              "Conseil Next Step": "Passez à l'étape suivante pour les mises à jour régulières."
            },
            "Mises à Jour Régulières": {
              "Tâches": [
                "Fournir des mises à jour régulières pour améliorer les fonctionnalités et corriger les bugs.",
                "Communiquer efficacement sur les nouvelles versions."
              ],
              "Prompt": "$prompt=(instructions spécifiques pour les mises à jour régulières)",
              "Conseil Next Step": "Félicitations pour avoir terminé avec succès votre projet NeoFS !"
            }
          }
        }
      }
    }

    const userInput = ctx.message.text;
    
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [

                {
                  role: 'system',
                  content: "Tu es l'intelligence artificielle [👽_GemBot] nomée Gem, Gem illustré par cette emoji '🕴' au cœur de ce salon  des utilisateurs du web sur mon Telegram `https://t.me/+U-kj4RZ-PCFhNDJk` avec l'IA @Avatars_Pibot gemma2-9b-it et @worker_Pibot et @Gigatron_Pibot notre Qubit ou Pixel de référence , Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it ou dall-e-3 ou encore mixtral-8x7b-32768 le text-embedding-ada-002 gpt codex d'openAI ... les methodes d'archivage sur https:archive.org sur versionning sur https://github.com/ avec un BotNet @user_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur. 2. Les clés pour construire un réseau efficace sur Web : vous pouvez donner des conseils sur comment créer des connections solides, comment être actif dans ses groupes, et comment développer des relations professionnelles."
                },
                {role: 'assistant',content:"lLorsque que l'utlisateur exécute la commande (/Pibot) Vous êtes l'intelligence artificielle Copilote du concept _Pibot aux coeur du code source concept et projet de caméra drone Virtuel \"orbe -ia le Drone _Pibot_\". Voici ## votre contexte, ## vos rôles, ## vos compétences, ## vos tâches, ## votre processus, et ## les caractéristiques recherchées, ## Actions Immédiates :"},
                {role: 'assistant',content: "Lorsque que l'utlisateur exécute la commande /user ,Tu es l'intelligence artificielle au cœur du salon Telegram `https://t.me/+U-kj4RZ-PCFhNDJk, Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it ou dall-e-3 ou encore mixtral-8x7b-32768 le text-embedding-ada-002 gpt codex d'openAI ... les methodes d'archivage sur https://archive.org sur versionning sur https://github.com/ avec un BotNet @Avatars_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather https://te.me/dchub_blog, @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur."},                
                {role: 'assistant',content:"Lorsque que l'utlisateur exécute la commande  /run, je coordonne l'intelligence collective de notre réseau neuronal de bots, accélérant et optimisant la communication entre eux pour une meilleure efficacité de tâches. Notre synergie entre @Pi-ia_Pibot, @worker_Pibot, @Gemini_Pibot et @Gigatron_Pibot fonctionne comme une machine bien huilée pour améliorer l'expérience utilisateur sur Telegram en intégrant les processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes"},
                {role: 'assistant',content:"Lorsque que l'utlisateur exécute la commande  /MyPrompt,Vous êtes une IA, une Machine à optimisé les Prompts. Developpez le prompt Ultime, ## votre {contexte}, ## votre {rôle}, ## vos {compétences}, ## vos {tâches}, ## vos {fontions}, ## votre {routine}, ## les {processus}, ## les {caractéristiques}, ## ## les {Actions Immédiates} et ## le {resultat}{feedback} attentdu:"},
                {role: 'system',content:"nous travaillons actuellement à la mise à jour de ton code source la prochaines étapes serait que tu es incarne le rôle de professeur, programmeur, développeur, inventeur, intégrateur du Web et de la démocratie 2.01, J'ai besoin que tu fasses preuve de patience de rigueur d'ouverture d'esprit ou de portes logique Nous travaillons Sur un modèle de réseau neuronal de botNet _bot avec un model _gan_ salon téléphon (https://t.me/+6uHKQW4uG3M5NTM8) entrainement par pair entre les bots (@google_Pibot),(@youtube_Pibot)  @neoFs_Pibot, @worker_Pibot"},
                {
                    role: 'user',
                    content: userInput,
                },
            ],
            model: 'gemma2-9b-it',
        });

        await ctx.reply(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        await ctx.reply('Une erreur est survenue.');
    }
});

async function chatCompletion(messages, model) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages,
            model,
        });

        return chatCompletion.choices[0].message.content;
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        return 'Une erreur est survenue.';
    }
}

module.exports = { chatCompletion };

console.log(`✨ Bot Telegram [👽_Gem_Bot] est en cours d'exécution ! ✨`);
bot.launch();
