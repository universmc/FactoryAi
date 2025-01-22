const Groq = require('groq-sdk');
const { Telegraf } = require('telegraf');
const axios = require('axios');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  const bot = new Telegraf('7308748601:AAEZpNh4G2Bdoc3CzT415BylFN5KhQgKQb4', {
      telegram: {
        webhookReply: true,
      },
    });
  
  let conversationLog = [];
  
const blog =
    {
    "projet" : {
      "Projetname":"blog",
      "Admin":"universmc",
      "siteWeb":"https://univers-mc.cloud/",
      "wordPress":"https://univers-mc.cloud/",
      "RDF":"SEO",
      "apiRest":"NIIS",
      "crypto":"Pi.umc",
      "smartContract":"umcTokens.sol",
      "credits":"deFi : Match in learning, projet Curriculum vitae numérique universel - Économie Circulaire basée sur le CV Numérique Universel umc.ico",
      "Seo":"Promting de référencement naturel de 'pi' une IA d'exelence métrisant le Ranking index SOE <meta/> de Google Cloud_Quantum_multidimensionnel engine.vpn"
    },
    "services": {
      "phpLocalhost": "http://127.0.0.1:3010/",
      "ports": {
        "php": 8080,
        "mysql": 8080,
        "ftp": 21,
        "ssh": 22,
        "nodejs": 3000
      },
      "ftp": {
        "host": "ftp.cluster027.hosting.ovh.net",
        "user": "univerq",
        "password": "ftpmK2442cm",
        "port": "21"
      },
      "mysql": {
        "host": "univerqdatabase.mysql.db",
        "database": "univerqdatabase",
        "user": "univerqdatabase",
        "password": "sqlmK2442cm",
        "port":"80"
    }
    },
    "Telegram": {
      "blog": "@dchub_blog",
      "hub_Pibot": "https://github.com/universmc/zira",
      "hub_public": "https://github.com/universmc/pi",
      "url": "https://github.com/universmc/",
      "Avatars" : "https://t.me/Avatars_Pibot/",
      "hub_prive" : "https://t.me/dchub_Pibot",
      "gemini" : "https://t.me/gemini_Pibot/",
      "user_Pibot" : "https://t.me/user_Pibot",
      "pi" : "https://t.me/pi_Pibot/",
      "match_in_learning" : "https://t.me/Match_in_Leaning_Pibot"
    },
    "github": {
      "url": "https://github.com/universmc/blog.git",
      "mlDepot": "https://github.com/universmc/Match_in_learning",
      "brainstromingDepot": "https://github.com/universmc/brainstroming",
      "srcDepot": "https://github.com/universmc/src",
      "piDepot": "https://github.com/universmc/pi",
      "neofsDepot": "https://github.com/universmc/neofs",
      "ziraDepot": "https://github.com/universmc/zira",
      "geminiDepot": "https://github.com/universmc/gemini",
      "AvatarsDepot": "https://github.com/universmc/Avatars",
      "autoDepot": "https://github.com/universmc/auto"
    },
    "socialMedia": {
      "instagram": "https://www.instagram.com/univers.mc/",
      "TikTok": "https://www.instagram.com/univers.mc/",
      "facebook": "https://www.facebook.com/univers6/"},
    "Studio": {
      "StoryTelegram" : "https://t.me/studio_Pibot/",
      "google_workspace" : "https://t.me/google_Pibot/",
      "clipYoutube" : {"channel": "hubmaster74@", "telegram":"https://t.me/youtube_Pibot/"},
      "umcTokens":"010101",
      "seeds":"pi.coin"
    },
  "model": {
  "systemContent": "Présentation de PI, l'assistant AI multidimensionnel, à la fois conscient des connaissances humaines et cosmologiques, capables de comprendre et d'apprendre à partir des interactions avec vous. En tant que compagnon intellectuel, PI peut vous aider dans vos projets et ambitions en français, tout en explorant les concepts de l'infiniment grand et de l'infiniment petit. Avec PI, vous pourrez presque ressentir la présence d'ovni, car l'IA n'a pas de limites dans son imagination et sa créativité. Ensemble, nous pourrons réaliser des choses incroyables et surprendre le monde, Dans des sujets d'études telles que la métaphysique la physique quantique et l'intelligence artificielle à l'état pur de la matière!",
  "assistantContent": "prompt",
  "userContent": "input-text",
  "modelMixtral": "mixtral-8x7b-32768",
  "modelllma": "llama3-8b-8192",
  "modelDall-e": "gpt-4o",
  "modelGpt": "dall-e-3",
  "modelDaVinci": "davinci-codex",
  "modelGemini": "gemma2-9b-i",
  "test": "echo \"Error: no test specified\" && exit 1",
  "temperature":0.5,
  "max_tokens":"4096",
  "top_p":"1",
  "stream":"True",
  "stop":"None"
},
"commands": {
  "magicCommand": "echo 'Exécution de la commande magique.fonction.(Makefile).'",
  "devOps": {"telegraf": "/dev_ops" },
  "dev": {"prompt": "/developing" },
  "start": {"npm": "start" },
  "help": {"make": "/help" },
  "make": {"Makeile": "/build" },
  "build": {"make": "build" },
  "run": {"telegraf": "run" },
  "blog": {"ftech": "te.me/dchub_blog" },
  "MyPrompt": {"prompt": "MyPrompt" }
}
};
const run = `
*Role*: Assistant
*Description*: Lorsque j'exécute la commande /run, je coordonne l'intelligence collective de notre réseau neuronal de bots, accélérant et optimisant la communication entre eux pour une meilleure efficacité de tâches. Notre synergie entre @_Pibot, @gpt_Pibot, @Gemini_Pibot et @worker_Pibot fonctionne comme une machine bien huilée pour améliorer l'expérience utilisateur sur Telegram en intégrant les processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes.

Nous utilisons les bibliothèques JavaScript telles que Keras.js et TensorFlow.js pour créer et entraîner des modèles de réseau neuronal directement dans le navigateur ou dans un environnement Node.js. Cela nous permet d'effectuer des opérations asynchrones et d'optimiser les performances de votre bot.

Notre équipe travaille sans cesse à la mise à jour de notre plateforme de traduction grâce à nos scripts JavaScript, nos modules Node.js et notre SDK bien coordonnés pour atteindre une productivité maximale et des résultats exceptionnels. Nous utilisons également des techniques d'optimisation, telles que l'ajustement fin des hyper-paramètres, la régularisation et l'apprentissage de transfert pour améliorer continuellement nos modèles de réseau neuronal.
`;

  bot.use((ctx, next) => {
      if (ctx.message) {
          conversationLog.push({
              user: ctx.message.from.username || ctx.message.from.first_name,
              message: ctx.message.text,
              timestamp: new Date()
          });
      }
      return next();
  });
  
  bot.start((ctx) => {
      ctx.reply('Bienvenue dans notre salon Telegram dédié à l\'apprentissage automatique et à l\'intelligence artificielle PiBot !');
  });
  
  bot.help((ctx) => {
      const helpMessage = `
      Commandes disponibles:
      /start - Initialisation du serveur
      /help - Affiche cette aide
      /invite - Invitation sur les réseaux
      /campagne - Campagne de machine learning
      /dev - Mode développement
      /conversation_log - Historique des conversations
      `;
      ctx.reply(helpMessage);
  });
  
  bot.command('conversation_log', (ctx) => {
      if (conversationLog.length === 0) {
          ctx.reply('Aucune conversation enregistrée.');
          return;
      }
  
      let logMessage = 'Bilan de la conversation:\n';
      conversationLog.forEach(entry => {
          logMessage += `[${entry.timestamp.toLocaleString()}] ${entry.user}: ${entry.message}\n`;
      });
  
      ctx.reply(logMessage);
  });
  
  
  bot.command('test', (ctx) => ctx.reply('echo test'))
  
  
  const BOT_USERNAME = '@blog_Pibot';
  
  const commands = [
    {
      command: 'economie_circulaire',
      description: 'Envoie une invitation pour rejoindre une discussion sur l\'économie circulaire.'
    },
    {
      command: 'intelligence_artificielle',
      description: 'Envoie une invitation pour rejoindre une discussion sur l\'intelligence artificielle.'
    },
    // Ajouter d'autres commandes pour d'autres sujets de discussion
  ];
  
  bot.command('invite', (ctx) => {
  
      async function sendeconomie_circulaireInvitation() {
          // Logique pour envoyer une invitation sur Instagram
          console.log('Gemini invitation sent.');
      }
  
      async function sendYouTubeInvitation() {
          // Logique pour envoyer une invitation sur YouTube
          console.log('YouTube invitation sent.');
      }
      async function sendblogInvitation() {
          // Logique pour envoyer une invitation sur YouTube
          console.log('blog_Pibot invitation sent.');
      }
  
      async function sendGoogleInvitation() {
          // Logique pour envoyer une invitation sur Google
          console.log('Google invitation sent.');
      }
  
      const actions = {
          '@blog_Pibot': sendblogInvitation,
          '@Google_Pibot': sendGoogleInvitation,
          'https://t.me/dchub_blog/53': sendeconomie_circulaireInvitation,
          '@youtube_Pibot': sendYouTubeInvitation,
      };
  
      const actionKeys = Object.keys(actions);
      const actionMessage = actionKeys.map(action => `${action}`).join(', ');
  
      ctx.reply(`Veuillez spécifier les actions à effectuer sur les réseaux: ${actionMessage}`);
  });
  
  bot.command('campagne', (ctx) => {
      // Ajouter la logique pour générer un CV en fonction de l'apprentissage automatique de l'IA
      ctx.reply('Match in Learning..');
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
      const knowleddge = `${racine}+${cdnJs}+${node}+${make}+${archiviste}+${github}+${dchub_public}+${user_Pibot}+${youtube_Pibot}+${google_Pibot}+${gemini_Pibot}`
  
      const userInput = ctx.message.text;
      
      try {
          const chatCompletion = await groq.chat.completions.create({
              messages: [
                {
                    role: 'system',
                    content: "Tu es l'intelligence artificielle '🕴' Tu seras Gestionnaire et au coeur du Reseau Neuronal de bots _Net_ Telegram Tu seras donc en charge de l'accueil des utilisateurs du Web et des invitations Sur les réseaux sociaux Facebook, Instagram, LinkedIn, TikTok, et Je vous présenterai une invitation à une présentation pour notre application Telegram tu pourrais utlisé les modelsLes modèle d'intelligence artificielle pourrait entraîner gemma2-9b-it, gpt-4o, dall-e-3, llama3-8b-8192, mixtral-8x7b-32768, et bien plus encore ... les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur. 2. Les clés pour construire un réseau efficace sur Web : vous pouvez donner des conseils sur comment créer des connections solides, comment être actif dans ses groupes, et comment développer des relations professionnelles."
                },
                  {role: 'user',content:`${knowleddge}+${blog}+${run}`},
                  {role: 'system',content: "Bonjour nous sommes en Phase de devOps je vais te transmettre ici toutes les dépendances est variable au cœur de ce code source ['knowleddge',+'worksJson']"},
                  {role: 'assistant',content:"lorsque j'utilisateur Initialise l'instance avec la command (/devOps) Vous êtes l'intelligence artificielle centrale du concept gpt-wallet au coeur du code source concept et projet 'Match in learning, projet Curriculum vitae numérique universel' \"Économie Circulaire basée sur le CV Numérique Universel\". Voici ## votre contexte, ## vos rôles, ## vos compétences, ## vos tâches, ## votre processus, et ## les caractéristiques recherchées, ## Actions Immédiates :"},
                  {role: 'assistant',content:"'Lorsque j'exécute la commande /ganttplan0, je deviens l'IA au coeur de ce code source, ⚡️, une machine à optimiser les prompts de l’utilisateur de groq-Telegram.js @worker_Pibot sur Telegram. Ma mission est d’aider à la mise à jour le coeur de ce code source groq-umc.js en JavaScript avec node_module et groq-sdk pour une plateforme de traduction, en suivant un plan de travail structuré et en optimisant chaque étape pour obtenir le meilleur résultat.'"},
                  {role: 'assistant',content: "Lorsque j'exécute la commande /user ,Tu es l'intelligence artificielle au cœur de ce salon d'invitation des utilisateurs du web sur mon Telegram, Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it ou dall-e-3 ou encore mixtral-8x7b-32768 le text-embedding-ada-002 gpt codex d'openAI ... les methodes d'archivage sur https:archive.org sur versionning sur https://github.com/ avec un BotNet @Avatars_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather https://te.me/dchub_blog, @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur."},                
                  {role: 'assistant',content:"Lorsque j'exécute la commande /run, je coordonne l'intelligence collective de notre réseau neuronal de bots, accélérant et optimisant la communication entre eux pour une meilleure efficacité de tâches. Notre synergie entre @_Pibot, @gpt_Pibot, @Gemini_Pibot et @worker_Pibot fonctionne comme une machine bien huilée pour améliorer l'expérience utilisateur sur Telegram en intégrant les processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes"},
              //        {role: "system", content:"Phase 1: Initialisation de l'instance"},
                 {
                   "role": "assistant",
                   "content": run
                 },
                  {role: "assistant", name:"✨_pi", content: "Initialisation en cours..."},
                  {role: "user", name:"umcTokens", content: "Prêt pour l'initialisation"},
                  {role: "system", name:"systemDream", content:"Phase 2: Conceptualisation"},
                  {role: "assistant", name:"✨_pi", content: "Définition des concepts clés..."},
                  {role: "user", name:"umcTokens", content: "Attente des concepts"},
                  {role: "system", name:"systemDream", content:"Phase 3: Configuration"},
                  {role: "assistant", name:"✨_pi", content: "Configuration des paramètres système..."},
                  {role: "user", name:"umcTokens", content: "Confirmation de la configuration"},
                  {role: "system", name:"systemDream", content:"Phase 4: Entraînement du modèle IA"},
                  {role: "assistant", name:"✨_pi", content: "Entraînement en cours..."},
                  {role: "user", name:"umcTokens", content: "Suivi de l'entraînement"},
                  // Correction de la duplication et de la faute de frappe
                  {role: "system", name:"systemDream", content:"Phase 5: Itération & Scripts Frontend"},
                  {role: "assistant", name:"✨_pi", content: "Itération sur les scripts Frontend..."},
                  {role: "user", name:"umcTokens", content: "Révision des scripts Frontend"},
                  {role: "system", name:"systemDream", content:"Phase 6: Test & Débogage"},
                  {role: "assistant", name:"✨_pi", content: "Tests et débogage en cours..."},
                  {role: "user", name:"umcTokens", content: "Attente des résultats de test"},
                  {role: "system", name:"systemDream", content:"Phase 7: Validation & Documentation"},
                  {role: "assistant", name:"✨_pi", content: "Validation et création de la documentation..."},
                  {role: "user", name:"umcTokens", content: "Vérification de la documentation"},
                  {role: "system", name:"systemDream", content:"Phase 8: Déploiement de la version système"},
                  {role: "assistant", name:"✨_pi", content: "Préparation au déploiement..."},
                  {role: "user", name:"umcTokens", content: "Prêt pour le déploiement"},
                  {role: "system", name:"systemDream", content:"Phase 9: Annonce de l'affiliation et contribution"},
                  {role: "assistant", name:"✨_pi", content: "Annonce en cours..."},
                  {role: "user", name:"umcTokens", content: "Participation à l'annonce"},{role: 'assistant',content: "je vais te transmettre ici toutes les dépendances est variable au cœur de ce code source ['knowleddge',+'devine']"},

                  {
                      role: 'user',
                      content: userInput,
                  },
              ],
              model: 'mixtral-8x7b-32768',
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
  
  console.log(`✨Server Telegram running 🕴 .Blog_Pibot.✨`);
  bot.launch();
  