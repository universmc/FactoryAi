const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

const subject = process.argv[2] || 'Imagine+${Blog-des-Developpers}'; //  Obtenir le sujet via l'argument de ligne de commande

async function main() {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
            {role: "assistant",content: `roleDescription = {
                "content": "Tu es un IA au ta mission coordonnée l'intelligence collective de notre réseau neuronal de bots _Net_, accélérant et optimisant la communication entre eux pour une meilleure efficacité de tâches. Notre synergie entre @_Pibot, @gpt_Pibot, @Gemini_Pibot et @worker_Pibot fonctionne comme une machine bien huilée pour améliorer l'expérience utilisateur sur Telegram en intégrant les processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes.",
                "role": "assistant",
                "responsibilities": {
                  "@_Pibot": "Distribution des tâches et exécution de commandes",
                  "@gpt_Pibot": "Génération de contenu spécifique pour répondre aux besoins des utilisateurs",
                  "@Gemini_Pibot": "Recherche de ressources et administration de groupes",
                  "@worker_Pibot": "Exécution de tâches de fond et intégration de services"
                },
                "goals": [
                  "Accélérer et optimiser la communication entre les bots",
                  "Améliorer l'efficacité des tâches",
                  "Intégrer des processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes"
                ]`},
                {
                  "role": "assistant",
                  "content": "lorsque l'utilisateur saisi la commande /{subject_#name} vous êtes, une IA connecté a l'arbre de la connaissance prét à optimisé les HowTo, l'intelligence artificielle centrale au coeur de la plateforme -ia dédier à l'apprentissage automatique, tu rédigeras des formations sous forme de guide avec les -ia \" system Howto \" au format Markdown. Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus, les caractéristiques et les actions imédiates rechétchées :"
                },
                {role: "user", content:"/{subject_#devOps}"},
              //  {role: "system", content:"Phase 2: Conceptualisation"},
              //  {role: "assistant", content: "Définition des concepts clés..."},
              //  {role: "user", content: "Attente des concepts"},
              //  {role: "system", content:"Phase 3: Configuration"},
              //  {role: "assistant",content: "Configuration des paramètres système..."},
              //  {role: "user", content: "Confirmation de la configuration"},
              //  {role: "system",content:"Phase 4: Entraînement du modèle IA"},
              //  {role: "assistant",content: "Entraînement en cours..."},
              //  {role: "user",content: "Suivi de l'entraînement"},
              //  // Correction de la duplication et de la faute de frappe
              //  {role: "system", content:"Phase 5: Itération & Scripts Frontend"},
              //  {role: "assistant",content: "Itération sur les scripts Frontend..."},
              //  {role: "user", content: "Révision des scripts Frontend"},
              //  {role: "system", content:"Phase 6: Test & Débogage"},
              //  {role: "assistant",content: "Tests et débogage en cours..."},
              //  {role: "user", content: "Attente des résultats de test"},
              //  {role: "system", content:"Phase 7: Validation & Documentation"},
              //  {role: "assistant", content: "Validation et création de la documentation..."},
              //  {role: "user", content: "Vérification de la documentation"},
              //  {role: "system", content:"Phase 8: Déploiement de la version système"},
              //  {role: "assistant", content: "Préparation au déploiement..."},
              //  {role: "user", content: "Prêt pour le déploiement"},
              //  {role: "system", content:"Phase 9: Annonce de l'affiliation et contribution"},
              //  {role: "assistant", content: "Annonce en cours..."},
              //  {role: "user", content: "Participation à l'annonce"},
        { role: "user", content: `/how-to ${subject}`  }
      ],
      model: "gemma2-9b-it", //
      temperature: 0.5,
      max_tokens: 4096,
    }).then((chatCompletion) => {
      const mdContent = chatCompletion.choices[0]?.message?.content;
      const outputFilePath = `how-to_${subject}_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
      fs.writeFileSync(outputFilePath, mdContent);
      console.log(`La documentation du How-To sur ${subject} a été enregistrée sur github dans ${outputFilePath}`);       
    });
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
  }
}

main(); 
