const fs = require("fs");
const Groq = require('groq-sdk');
const axios = require('axios');
const emoji = require('node-emoji');

// Initialiser Groq avec la clé API depuis les variables d'environnement
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const Composants = [
   "howto-Bootstrap",
  // "Hero Section",
  // "Service Cards"
   // Ajouter d'autres composants si nécessaire
];

// Fonction Générique pour Générer du Contenu
async function generateContent(composant, contentType, extension) {
  try {
    const messages = [
      { role: "system", content: `Vous êtes un assistant spécialisé dans la génération de ${composant} Bootstrap via https://cdnjs.com/. Votre tâche est de produire du code ${contentType} uniquement, sans explications, et formaté comme un composant Bootstrap valide.` },
      { role: "user", content: `Génère uniquement le code source ${contentType} pour le composant Bootstrap "${composant}" fonctionnel. Assurez-vous d'inclure l'import du CDN et d'utiliser les conventions du web sémantique W3C.` }
    ];

    const completion = await groq.chat.completions.create({
      messages,
      model: "gemma2-9b-it",
      temperature: 0.3,
      max_tokens: 4096,
    });

    const content = completion.choices[0]?.message?.content.trim();
    const outputFilePath = `build/${composant}_component_${new Date().toISOString().replace(/[-:TZ]/g, "")}.${extension}`;
    fs.writeFileSync(outputFilePath, content);
    console.log(`Le composant ${composant} a été généré au format ${extension} dans ${outputFilePath}`);
  } catch (error) {
    console.error(`Une erreur s'est produite lors de la génération du composant ${contentType} :`, error);
  }
}

// Fonction pour Générer la Documentation
async function generateDocumentation(composant) {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Vous êtes un assistant chargé de générer la documentation pour des composants Bootstrap." },
        { role: "user", content: `Génère la documentation détaillée pour le composant Bootstrap nommé "${composant}".` }
      ],
      model: "gemma2-9b-it",
      temperature: 0.6,
      max_tokens: 4096,
    });

    const mdContent = completion.choices[0]?.message?.content.trim();
    const outputFilePath = `build/${composant}_documentation_${new Date().toISOString().replace(/[-:TZ]/g, "")}.md`;
    fs.writeFileSync(outputFilePath, mdContent);
    console.log(`La documentation pour le composant ${composant} a été générée dans ${outputFilePath}`);
  } catch (error) {
    console.error("Une erreur s'est produite lors de la génération de la documentation :", error);
  }
}

// Fonction Principale
async function main() {
  for (const composant of Composants) {
    await Promise.all([
      generateContent(composant, 'HTML', 'html'),
      generateContent(composant, 'SCSS', 'scss'),
      generateContent(composant, 'JavaScript', 'js'),
      generateDocumentation(composant)
    ]);
  }
}

main();
