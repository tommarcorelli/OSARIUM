DÉPENDANCES TIERCES EMBARQUÉES
==============================

lenis.min.js — Lenis 1.1.14
  Bibliothèque de défilement fluide.
  Auteur  : darkroom.engineering
  Licence : MIT
  Source  : https://github.com/darkroomengineering/lenis
  Copie exacte de https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.min.js

  Pourquoi en local : le fichier était chargé depuis le CDN jsdelivr, que le
  service worker ne met pas en cache (il ne stocke que les réponses de même
  origine). Hors-ligne, le script échouait et le site retombait sur le
  défilement natif. Le filet de sécurité de js/scroll.js gérait le cas sans
  erreur, mais le comportement différait selon la connexion.

  Pour mettre à jour : retélécharger le fichier depuis le CDN à la version
  voulue, et vérifier que la chaîne de version en tête du fichier correspond.
