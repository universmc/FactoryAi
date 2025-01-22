const groq = require('groq');

// Chargez le script JSON
const jsonScript = `...`; // Collez le code JSON ici

// Convertissez le JSON en objet JavaScript
const parsedJson = JSON.parse(jsonScript);

// Créez le contexte Groq
const context = groq.ctx({
  'system': '/MyPrompt',
});

// Utilisez le script JSON dans le contexte
console.log(`Le rôle est ${parsedJson['roles'][0]}`);
console.log(`Le contenu est ${parsedJson['promptType']}`);
console.log(`La sortie Groq est ${groq.join([
  parsedJson['roles'][0],
  'maîtrisant ',
  parsedJson['skills'].join(','),
  '\n\n',
  '"',
  parsedJson['conextInfo']['techEnvironment'],
  '" est mon contexte.\n\n',
  'Ma tâche consiste à ',
  parsedJson['taskDefinition']['description'],
  '. \n\n',
  'Voici les étapes à suivre : \n',
  parsedJson['processSteps'].map((step, index) => `${index + 1}. ${step.instructions}\n`).join(''),
  '\nLes caractéristiques du résultat attendu sont : \n',
  parsedJson['desiredFeatures'].join('\n')
])}`);


