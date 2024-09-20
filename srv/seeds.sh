#!/bin/bash

# Fonction pour générer un nombre aléatoire de 24 chiffres
generate_random_number() {
    # Utilise `od` pour générer des données aléatoires et `tr` pour garder seulement les chiffres
    random_number=$(od -An -N38 -tu4 /dev/urandom | tr -d ' \n' | cut -c1-81)
    echo "$random_number"
}

# Initialisation de la boucle de génération
while true; do
    random_number=$(generate_random_number) # Génère un nombre aléatoire de 24 chiffres

    # Affiche le nombre sur la même ligne
    echo -ne "\r ✨ : $random_number : ✨"

    sleep 1 # Pause de 1 seconde avant de générer le prochain nombre
done
