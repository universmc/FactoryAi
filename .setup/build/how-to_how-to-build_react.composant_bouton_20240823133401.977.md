## Comment créer un bouton dynamique avec React

**Introduction**:

Ce guide vous aidera à comprendre et à réaliser un bouton dynamique avec React. Il est conçu pour les débutants et les utilisateurs intermédiaires qui souhaitent apprendre les bases de la création d'interfaces utilisateur interactives avec React.

Un bouton dynamique est un élément d'interface utilisateur qui peut changer d'apparence ou de comportement en fonction de l'état de l'application. 

**Prérequis**:

* Une connaissance de base de JavaScript
* Installation de Node.js et npm (ou yarn)
* Connaissance des concepts de base de React (jsx, composants, props)

**Étapes**:

1. **Créer un nouveau projet React**:
   * Si vous n'avez pas encore de projet React, vous pouvez en créer un facilement avec Create React App : `npx create-react-app mon-bouton-dynamique`
   * Naviguez dans le répertoire du projet : `cd mon-bouton-dynamique`

2. **Créer un composant bouton**:
   * Créez un nouveau fichier nommé `Button.jsx` dans le dossier `src` de votre projet.
   * Ajoutez le code suivant à ce fichier :

```jsx
import React, { useState } from 'react';

function Button({ label, onClick }) {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(!isPressed);
    onClick(); // Exécute la fonction onClick passée en prop
  };

  return (
    <button style={{ backgroundColor: isPressed ? 'green' : 'blue' }} onClick={handleClick}>
      {label}
    </button>
  );
}

export default Button;
```

3. **Utiliser le composant bouton dans App.js**:
   * Ouvrez le fichier `App.js` dans votre projet.
   * Importez le composant `Button` :

```jsx
import Button from './Button';

function App() {
  const handleClick = () => {
    console.log('Bouton cliqué!');
  };

  return (
    <div>
      <Button label="Cliquez-moi !" onClick={handleClick} />
    </div>
  );
}

export default App;
```

4. **Lancer l'application**:
   * Exécutez la commande `npm start` dans votre terminal.
   * Ouvrez votre navigateur et accédez à l'adresse `http://localhost:3000/` pour voir votre bouton dynamique en action.

**Conseils**:

* Vous pouvez modifier le style du bouton en ajoutant plus de propriétés CSS à l'attribut `style`.
* Vous pouvez ajouter des autres fonctionnalités à votre bouton, comme une animation ou un changement de texte.
* N'hésitez pas à expérimenter et à personnaliser votre bouton en fonction de vos besoins.

**Ressources supplémentaires**:

* Documentation officielle de React : https://reactjs.org/docs/getting-started.html
* Tutoriels sur React : https://www.freecodecamp.org/news/how-to-build-a-simple-react-app/



