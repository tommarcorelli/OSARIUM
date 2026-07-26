OSARIUM — La collection ultime de systèmes d'exploitation
==========================================================

Site statique (HTML/CSS/JS) — aucune installation, aucun backend.
Ouvre "index.html" dans ton navigateur (double-clic).
C'est aussi une PWA : hébergé en HTTPS, tu peux l'installer sur
mobile/desktop et l'utiliser hors-ligne.

Anciennement « BOOT//GUIDE » — refonte complète en OSARIUM :
nouveau nom, nouveau logo, mode application (PWA) et +30 systèmes.

Nouveautés de cette version (OSARIUM v4)
----------------------------------------
* Nouveau nom + identité : OSARIUM, avec logo (anneaux phosphore + ambre).
* PWA complète : manifest, service worker offline, icônes, bouton
  « Installer l'app » qui apparaît quand l'installation est possible.
* +29 systèmes ajoutés (total : 160, puis 165 avec Windows 10, Unraid, /e/OS, Sailfish OS et CalyxOS).
* 2 nouvelles catégories : Média (home cinéma) et Mobile (smartphones/tablettes).
* Logos : logos officiels via Simple Icons quand ils existent, sinon
  monogramme stylé aux couleurs officielles de chaque projet.
* Scroll fluide (Lenis) revérifié, filet de sécurité sur les animations.

CONTENU
-------
index.html          → accueil : hero, recherche, filtres, catalogue, comparateur.
os.html             → page détaillée d'un système (?id=...).
data.js             → base de données des systèmes.
manifest.webmanifest→ manifeste PWA.
sw.js               → service worker (cache offline).
icons/              → icônes de l'application.
css/                → système de design (thème terminal phosphore, grain CRT).
js/                 → logique (catalogue, détail, reveal, scroll, logo, pwa).

LIENS PARTAGEABLES
------------------
L'état du catalogue est reflété dans l'URL : recherche, catégorie, niveau,
licence, tri, favoris, filtre matériel et comparateur. Copier la barre
d'adresse suffit à partager une vue exacte. Paramètres reconnus :
    q, cat, diff, lic (libre|proprio), sort, fav=1, ram, hide=1, cmp=id1,id2
Exemple : index.html?cat=gaming&diff=Facile&cmp=steamos,bazzite
Le comparateur propose aussi un bouton « Copier le lien de cette comparaison ».

PROGRESSION D'INSTALLATION
--------------------------
Chaque fiche affiche une checklist : les étapes se cochent au fur et à mesure,
la progression (barre + compteur) est enregistrée par système dans le
localStorage (clé osarium_steps). Rien n'est envoyé nulle part.

CACHE OFFLINE — À NE PAS OUBLIER
--------------------------------
La liste ASSETS de sw.js doit rester exhaustive : `addAll` échoue en bloc si
un seul fichier manque, et tout css/js absent de cette liste ne sera pas
disponible hors-ligne. À chaque nouveau fichier ajouté à une page, l'ajouter
à ASSETS **et** incrémenter la constante CACHE (osarium-vN), sinon les
navigateurs déjà passés garderont l'ancienne version.

AJOUTER UN SYSTÈME
------------------
Ajoute un objet dans OS_DATA (data.js). La carte, la page détail et le
comparateur se génèrent automatiquement. Pour un logo officiel, renseigne
`icon:"slug-simpleicons"`. Sinon laisse `icon:null` : un monogramme aux
couleurs du projet est généré. Nouvelle catégorie ? Complète OS_CATS en bas.

SITEMAP
-------
sitemap.xml se régénère automatiquement (au lieu d'une édition manuelle) :
    node scripts/generate-sitemap.js
À relancer après tout ajout/suppression de fiche OS ou d'outil. Pense à
remplacer le domaine placeholder (osarium.example) dans le script une fois
le site déployé.

APPLI DESKTOP (.exe)
---------------------
desktop-app/ contient une coquille Electron qui charge ce site tel quel et
ajoute la détection matérielle réelle (CPU/GPU/RAM/disque, via le paquet
systeminformation — gratuit, local, aucun réseau) au mode « Vérifier mon
PC ». Le site web reste inchangé et fonctionne pareil sans cette appli.
Voir desktop-app/README.md pour lancer en dev ou générer le .exe.

Même pattern que le projet Amarre : les installateurs ne sont JAMAIS commités
dans le dépôt (voir .gitignore). Ils sont construits automatiquement par
.github/workflows/release.yml à chaque tag de version poussé :
    git tag v1.0.0 && git push origin v1.0.0
GitHub Actions build les 3 systèmes (Windows/macOS/Linux) et les attache à
une Release GitHub. Le bouton « Télécharger l'appli Windows (.exe) » du hero
(index.html) pointe vers
https://github.com/tommarcorelli/OSARIUM/releases/latest/download/OSARIUM-Setup.exe
— ce lien ne fonctionne qu'une fois une première Release publiée. Installeur
non signé (pas de certificat) : Windows SmartScreen avertit au premier
lancement, c'est attendu.

Fait avec soin. Bon boot.
