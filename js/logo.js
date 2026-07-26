/* ============ SHARED: OS logo markup ============
 * Utilisé par la grille du catalogue (petit, lazy) et par la page détail
 * (grand, eager). Source unique pour qu'un correctif ici ne puisse pas
 * diverger entre les deux pages, comme c'était arrivé auparavant.
 *
 * Les logos étaient auparavant chargés à l'exécution depuis
 * https://cdn.simpleicons.org/<slug>/<hex>, soit une requête vers un tiers
 * par logo et par page — et surtout aucun logo hors-ligne, alors que le site
 * se présente comme une PWA utilisable sans connexion (le service worker ne
 * met en cache que les réponses de même origine). Les tracés sont désormais
 * intégrés dans data.js (champ `svg`), donc plus aucune requête réseau.
 *
 * Le champ `icon` ne sert plus qu'à mémoriser le slug Simple Icons d'origine,
 * pour pouvoir régénérer un tracé si le logo de la marque change.
 * Voir icons/BRAND-LOGOS.txt pour la provenance et la licence.
 */
function logoInner(os, { size = 30, lazy = true } = {}) {
  if (os.svg) return os.svg;
  // Pas de tracé disponible : monogramme aux couleurs du projet.
  const letter = os.name.replace(/^[^A-Za-z]+/, '').charAt(0).toUpperCase() || os.name.charAt(0);
  return `<span class="mg">${letter}</span>`;
}
