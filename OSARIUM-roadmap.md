# OSARIUM — Roadmap d'évolution

*Dernière mise à jour : juillet 2026*

## ✅ Fait (cette session — correctifs + liens partageables + checklist)

**Correctifs (bugs trouvés à l'audit, pas demandés)**

- **Cache offline réparé** (`sw.js`) — la liste `ASSETS` était restée à la v4 : `css/hw.css`, `css/pcage.css`, `css/shortcuts.css`, `js/hardware-check.js`, `js/pcage.js`, `js/shortcuts.js`, `js/recent.js` et `js/recent-strip.js` n'y figuraient pas. Hors-ligne, « Vérifier mon PC », le widget « PC de quelle année », les raccourcis clavier et « Vus récemment » ne se chargeaient donc pas. Liste reconstruite (45 entrées, complétude vérifiée par script contre les `<link>`/`<script>` des 4 pages), cache passé en `osarium-v6`. Ajout de `ignoreSearch:true` sur les requêtes de navigation : sans ça, `os.html?id=xxx` ne retombait jamais sur la page `os.html` en cache et **toutes les fiches étaient KO hors-ligne** au premier passage.
- **Catalogue navigable au clavier** — les cartes étaient des `<article>` avec un `location.href` au clic : ni tabulation, ni Entrée, ni ouverture en nouvel onglet, et rien d'exploitable par un lecteur d'écran. Le titre porte désormais un vrai `<a class="card-link">` étiré sur toute la carte (la carte reste cliquable en entier). Les boutons ★ et + sont passés de `<div>` à `<button>` avec `aria-pressed` et `aria-label` explicite. Ils sont masqués par `opacity` (et non `display:none`) pour rester dans l'ordre de tabulation naturel — fav → cmp → lien — avec `pointer-events:none` tant qu'ils sont invisibles. Le focus est restauré sur le bon bouton après le re-rendu de la grille (sinon il retombait sur `<body>`). Ajout d'un `:focus-visible` global et d'un lien d'évitement sur les deux pages.
- **`alert()` remplacés par des toasts** (`js/toast.js`, `css/toast.css`) — les deux messages du comparateur (max 4 / min 2) passaient par des `alert()` natifs bloquants. Toast `aria-live` remontant au-dessus de la barre du comparateur.
- **Difficulté « Expert » réintégrée** — 7 systèmes (Arch, Gentoo, NixOS, Qubes, BlackArch, Parabola, Hyperbola) portent `diff:"Expert"` dans `data.js`, valeur absente du sélecteur de niveau **et** du barème `diffRank`. Conséquences : impossible de les filtrer, et le tri par difficulté comme le score du wizard produisaient `NaN` sur ces 7 fiches. Option ajoutée au filtre + rang 3 dans `diffRank` (tri vérifié : 0 inversion sur 170, Expert bien en fin de liste).

**Liens partageables**

- **État du catalogue dans l'URL** (`js/catalog.js`) — recherche, catégorie, niveau, licence, tri, favoris, filtre matériel (`ram`/`hide`) et comparateur (`cmp=id1,id2`) sont écrits en `replaceState` à chaque interaction et rejoués au chargement. Licences raccourcies en `libre`/`proprio` pour garder une URL lisible. Bouton **« Copier le lien de cette comparaison »** dans le comparateur.
- Vérifié en navigateur réel : `?cat=gaming&diff=Facile&sort=name&cmp=steamos,bazzite` restaure la pastille de catégorie, les deux sélecteurs et les 2 emplacements du comparateur ; l'URL se met à jour en direct pendant la frappe dans la recherche.

**Checklist d'installation**

- **Progression cochable par étape** sur les fiches (`js/progress.js`, section `.ckl-panel` dans `js/detail.js`, styles dans `css/detail.css`) — barre de progression, compteur `n / N étapes`, message de fin, bouton de réinitialisation qui n'apparaît qu'une fois commencé. Stockage `localStorage` par système (clé `osarium_steps`), rien n'est envoyé nulle part. Case redessinée (`appearance:none`) parce que la case native s'affiche en blanc vif et jure avec le thème sombre.
- Testé en navigateur réel : cochage, barre à 40 % puis 100 %, persistance après rechargement, isolation entre deux fiches (Ubuntu et Windows 11), rendu contrôlé en thème clair **et** sombre, aucune erreur console sur `index.html`, `os.html` et `arbre.html`.

**Écarté volontairement** : l'export PDF/impression d'une fiche (peu d'intérêt réel) et le lot SEO/diffusion — les données structurées JSON-LD n'apportent quasiment plus rien depuis que Google a supprimé l'affichage « HowTo » et restreint « FAQPage », et un Open Graph par fiche exigerait de pré-générer 170 pages HTML statiques (les aperçus de lien sont lus avant l'exécution du JavaScript), soit un chantier à part entière.

## ✅ Fait (session précédente — +5 systèmes, 165 → 170)

- **5 nouveaux systèmes ajoutés, recherchés individuellement (pas de contenu générique)** :
  - **Asahi Linux / Fedora Asahi Remix** (desktop, `asahi`) — version 44 vérifiée, portage Linux pour Mac Apple Silicon (M1/M2 pleinement supportés, M3+ pas encore), installation en une commande depuis le Terminal macOS (pas de clé USB), dual-boot préservé. Particularités documentées : firmware Wi-Fi/Bluetooth extrait de macOS, pilote graphique développé spécifiquement par le projet (rétro-ingénierie du GPU Apple).
  - **Mobian** (mobile, `mobian`) — version 13 Trixie stable (oct. 2025) vérifiée, Debian porté sur PinePhone/PinePhone Pro/PineTab/Librem 5, différenciation claire avec postmarketOS (Debian/.deb vs Alpine/apk) documentée en FAQ.
  - **KolibriOS** (rétro, `kolibrios`) — version 0.7.7.0+ vérifiée (encore d'actualité mi-2026), OS graphique complet écrit intégralement en assembleur FASM, tient sur une disquette 1,44 Mo, 8 Mo de RAM suffisent.
  - **Zentyal Server** (serveur, `zentyal`) — version 8.1 sur Ubuntu 24.04 LTS vérifiée, remplaçant direct d'un contrôleur de domaine Active Directory (Samba 4) basé sur Ubuntu Server, licence Development gratuite vs Commercial payante documentée.
  - **OpenMandriva Lx** (desktop, `openmandriva`) — version 6.0 vérifiée (branches Rock stable / ROME rolling), distribution RPM indépendante héritière de Mandriva, particularité Clang/LLVM (au lieu de GCC) documentée avec ses implications pratiques (paquets tiers).
  - Chaque fiche a été recherchée via le web (versions/specs/licences à jour mi-2026), pas générée par template — même standard de qualité que les sessions précédentes.
  - **Liens « Systèmes similaires » réciproques** mis à jour sur les fiches proches (Fedora, Fedora KDE, Debian, postmarketOS, UCS, Mageia, PCLinuxOS, FreeDOS, ReactOS) pour intégrer les nouveaux venus des deux côtés.
  - **Arbre de filiation** : `base` correctement renseigné pour un rattachement automatique (Asahi → Fedora, Mobian → Debian, Zentyal → Ubuntu ; KolibriOS et OpenMandriva en `base:"—"` comme les autres OS réellement indépendants, pour éviter de créer un faux nœud de famille synthétique).
  - **Validation automatisée** : 170/170 ids uniques, 170/170 `errors` à 3 entrées, 0 lien `alt` cassé/auto-référencé, 170/170 `req.ram` reconnus par le vrai parseur de `js/hardware-check.js` (regex rejouée telle quelle, pas une approximation).
  - **Vérification visuelle** (Playwright headless local) : les 5 fiches, la recherche catalogue et l'arbre de filiation contrôlés par capture d'écran — rendu correct, aucune erreur console JS.
  - Compteurs mis à jour (`index.html`, `os.html`) et sitemap régénéré (176 URLs).

## ✅ Fait (session précédente — +5 systèmes, 160 → 165)

- **5 nouveaux systèmes ajoutés, recherchés individuellement (pas de contenu générique)** :
  - **Windows 10** (desktop, `win10`) — RAM/disque/CPU vérifiés (specs Microsoft actuelles), section dédiée à la fin de support (oct. 2025) et au programme ESU (gratuit/payant jusqu'en oct. 2027).
  - **Unraid** (server, `unraid`) — version 7.3.2 vérifiée, base Slackware confirmée, licence payante avec essai 30 jours documentée ; particularité propre à ce système (la clé USB est le média de démarrage permanent, pas juste un support d'installation) explicitement expliquée en FAQ/erreurs.
  - **/e/OS** (mobile, `eos`) — version 4.1.1, base LineageOS confirmée (fork), méthode d'installation à jour (l'ancien Easy Installer déprécié, installeur web + méthode CLI 200+ appareils).
  - **Sailfish OS** (mobile, `sailfishos`) — version 5.0 Tampella, nuance licence (cœur libre + Sailfish X payant sur Xperia officiel) et voie communautaire non officielle documentées.
  - **CalyxOS** (mobile, `calyxos`) — version 7.2.2.0, base Android (AOSP) confirmée (pas un fork de LineageOS malgré des composants empruntés), mention honnête de la pause de maintenance 2025-2026 avant reprise.
  - Chaque fiche a été recherchée via le web (versions/specs/licences à jour mi-2026), pas générée par template — même standard de qualité que les ajouts précédents (+8 systèmes, session antérieure).
  - **Liens « Systèmes similaires » réciproques** mis à jour sur les fiches existantes proches (LineageOS, GrapheneOS, postmarketOS, Windows 11) pour intégrer les nouveaux venus des deux côtés.
  - **Validation automatisée** : 165/165 ids uniques, 165/165 `errors` à 3 entrées, 0 lien `alt` cassé/auto-référencé, 165/165 `req.ram` reconnus par le parseur RAM (`HwCheck`). Arbre de filiation vérifié visuellement (Chrome) : `/e/OS` rattaché à LineageOS, CalyxOS au cluster synthétique Android (AOSP), Sailfish OS en système indépendant.
  - Compteurs mis à jour (`index.html`, `os.html`, hero/kick) et sitemap régénéré (171 URLs).

- **Raccourcis clavier** dans le catalogue — `/` (recherche), `W` (wizard), `H` (vérifier mon PC), `F` (favoris), `T` (thème), `Échap` (fermer/quitter le focus), `?` (aide-mémoire, modale dédiée). Désactivés pendant une saisie dans un champ. Testé au clavier réel (Chrome), tous fonctionnels.

## ✅ Fait (session précédente — appli desktop)

- **Appli desktop Electron** (`desktop-app/`) — coquille séparée qui charge le site existant tel quel (aucune duplication, `../index.html` chargé directement) et ajoute la **détection matérielle réelle** (CPU, GPU, RAM exacte, disques) via `systeminformation` (paquet npm gratuit, open-source, 100% local, aucun appel réseau ni clé API). Le mode « Vérifier mon PC » du site (`js/hardware-check.js` → `detectDesktop()`, branché dans `js/catalog.js` → `renderHwBody()`) bascule automatiquement sur ces valeurs réelles quand il tourne dans l'appli desktop ; en navigateur classique, rien ne change (estimation `navigator.deviceMemory` comme avant).
- Motivation : un navigateur ne peut techniquement pas lire le modèle réel d'une machine (restriction anti-fingerprinting commune à tous les navigateurs) — seule une appli avec accès natif (Electron ici) peut aller au-delà de l'estimation RAM déjà en place.
- **Repo GitHub public** créé et poussé : https://github.com/tommarcorelli/OSARIUM. Pattern de release repris du projet Amarre : `.github/workflows/release.yml` build les installateurs Windows/macOS/Linux à chaque tag `v*` et les attache à une Release GitHub (jamais commités, voir `.gitignore`). Bouton « 💾 Télécharger l'appli Windows (.exe) » du hero → lien stable `releases/latest/download/OSARIUM-Setup.exe`. Tag `v1.0.0` publié et testé de bout en bout (build CI réussi sur les 3 OS, lien de téléchargement vérifié fonctionnel).

## ✅ Fait (cette session — Phase 3/4)

- **Widget « Quel OS pour un PC de [année] ? »** — remplace l'idée d'articles de fond statiques par quelque chose d'interactif et branché sur les données du site : nouvelle section sur `index.html` (`#pcage`, entre le hero et « Préparer »), curseur d'année (1995→2026, `js/pcage.js`, style `css/pcage.css`). L'année choisie est convertie en RAM typique d'un PC grand public neuf à l'époque (paliers historiques indicatifs), puis réutilise directement `window.HwCheck` (déjà en place pour « Vérifier mon PC ») pour filtrer et trier les 160 fiches par compatibilité RAM, avec badges ✓ Compatible / ≈ RAM limite. Testé au clavier (bornes 1995 → FreeDOS seul compatible à 32 Mo, 2026 → 16 Go) et en thème clair, aucune erreur console.
- **Génération automatique de `sitemap.xml`** — `scripts/generate-sitemap.js` regénère les 166 URLs (160 OS + 4 outils + pages statiques) avec `<lastmod>` basé sur la date de modif réelle des fichiers sources, au lieu d'une édition manuelle à chaque ajout de fiche. Usage documenté dans `README.txt`.

## ✅ Fait (session — Phase 4)

- **Mode « check hardware »** : petit détecteur JS qui compare la RAM de l'appareil du visiteur aux prérequis de chaque fiche.
  - `js/hardware-check.js` : parseur robuste du champ `req.ram` (texte libre : « 4 Go min. (…) », « 512 Mo à 1 Go », « 1-2 Go min. »…) testé et validé sur les **160/160 fiches** (0 valeur non reconnue). Détection via `navigator.deviceMemory` (RAM, Chrome/Edge/Android uniquement, plafonné à 8 Go) et `navigator.hardwareConcurrency` (cœurs, affiché à titre indicatif seulement — non utilisé dans le filtre, car les fiches ne décrivent pas de minimum de cœurs exploitable de façon fiable).
  - Repli manuel pour Firefox/Safari (RAM non détectable dans ces navigateurs) : sélecteur de RAM (512 Mo → 32 Go+) avec valeur pré-remplie sur la détection la plus proche quand disponible.
  - Nouveau bouton nav **« 🖥️ Vérifier mon PC »** ouvrant un panneau (mêmes codes visuels que le wizard existant) : RAM détectée/choisie, case « masquer les incompatibles », application au catalogue.
  - **Badges de compatibilité** sur chaque carte (✓ Compatible / ≈ RAM limite / ✕ RAM insuffisante), calcul par un seuil à 50 % du minimum requis pour distinguer « limite » de « insuffisant ».
  - **Chip de statut persistante** dans la barre de filtres (`🖥️ X Go · modifier ✕`) permettant de rouvrir ou réinitialiser le filtre sans revenir dans le menu.
  - **Testé de bout en bout** (Playwright, navigateur réel headless) : détection simulée à 4 Go/1 cœur, filtre à 1 Go + masquage → 160→115 fiches, répartition des badges cohérente (56 compatibles, 59 limite, 0 insuffisant affiché car masqués), Windows 11 correctement exclu, réinitialisation restaurant les 160 fiches et masquant la chip. Aucune erreur JS générée par le nouveau code (les seuls 403 observés viennent de CDN externes bloqués par le bac à sable de test, pas du site).
  - Limite assumée et documentée dans l'UI : seule la RAM entre dans le filtre (donnée la plus fiable et la plus souvent bloquante) ; CPU, GPU et stockage ne sont pas pris en compte, le navigateur ne les exposant pas de façon fiable.

## ✅ Fait (session précédente)

- **Phase 3 — Section « Erreurs fréquentes » par étape d'installation** : ajoutée sur les **160 fiches**, entre les étapes d'installation et la FAQ. Pour éviter de répéter l'erreur du texte générique dupliqué (déjà rencontrée et corrigée en Phase 1), le contenu n'est **pas un bloc unique collé partout** : **15 profils de dépannage** ont été définis selon la vraie expérience d'installation (Windows/TPM, live-USB desktop classique, Arch/NixOS manuel, atomique/immuable, conteneur/cloud, BSD, pare-feu réseau, live sécurité/persistance, bas de gamme/matériel ancien, serveur headless, gaming, mobile/flashing, HTPC, outils de récupération, OS rétro/esotériques), chacun avec 3 erreurs + solutions rédigées spécifiquement pour ce contexte d'installation. Chaque fiche a été rattachée au profil correspondant à sa vraie méthode d'installation (et non simplement à sa catégorie du site, ex. : les OS "avancés" atomiques/immuables et les OS "avancés" à installation manuelle façon Arch ont des profils différents).
  - Nouveau champ `errors:[{q,a}]` dans `data.js`, nouvelle section accordéon (`.err-block`) dans `os.html`/`js/detail.js`, style dédié avec accent ambre-orangé (`css/detail.css`) pour la distinguer visuellement de la FAQ.
  - Validation automatisée : 160/160 fiches avec exactement 3 entrées `errors` complètes (q + a).

- **Reliquat Phase 1 traité — relecture des `alt` (« Systèmes similaires »)** : le champ était en réalité généré **séquentiellement** (chaque fiche pointait vers les 2-3 fiches suivantes dans le fichier, sans lien réel de parenté ou d'usage). Reconstruction complète sur les **160 fiches** en deux passes :
  1. **Calcul automatique** priorisant la **catégorie d'usage** puis la **base technique** partagée (148/160 fiches changées) + **13 corrections manuelles** ciblées (trio KDE `kdeneon`/`kubuntu`/`fedorakde`, `crux` mal rapproché d'OS immuables, Windows 11 qui traînait dans les suggestions Debian/LMDE/Trisquel, `osmc`/`coreelec`, trio rétro `reactos`/`freedos`/`aros`).
  2. **Relecture manuelle intégrale des 160 lignes** (et non plus seulement un contrôle d'intégrité automatique) : a débusqué **7 paires supplémentaires** non connectées malgré une parenté évidente, dues à un champ `base` incomplet en amont ou à un artefact de tri — `nixos`↔`guix` (la fiche Guix se compare elle-même à NixOS dans son propre texte), `devuan`↔`artix` (les deux seuls OS « sans systemd » du catalogue), `tumbleweed`↔`microos`↔`opensuse` (même famille openSUSE).
  - **Validation automatisée** (script Node) : 0 référence cassée, 0 auto-référence, 0 fiche sans suggestion sur les 160.
  - **20 corrections manuelles au total**, en plus du recalcul automatique de base.

**Phase 1 est maintenant intégralement close.**

## ✅ Fait (session de relecture Phase 1)

- **Relecture manuelle des 21 systèmes `popular:true`** : config (RAM/disque/CPU) vérifiée contre les specs officielles et FAQ dédupliquée sur les 9 fiches desktop (Windows 11, Ubuntu, Debian, Fedora, Mint, openSUSE, Manjaro, Pop!_OS, Kubuntu), qui partageaient toutes exactement le même texte générique.
- **3 erreurs factuelles corrigées** : Raspberry Pi OS (config/FAQ copiées à tort d'un template "vieux PC x86" — c'est un OS pour cartes ARM), Android-x86 (config indiquait "smartphone" alors que c'est un OS pour PC x86), Windows 11 (disque minimum affiché à 20-25 Go au lieu des 64 Go officiels Microsoft).
- **Pop!_OS mis à jour** : version 22.04 → 24.04 LTS avec le nouveau bureau COSMIC (Rust/Wayland) qui remplace l'ancien Pop Shell/GNOME.
- **Kali Linux et Haiku OS** : config alignée sur les chiffres officiels (Kali était surestimé, Haiku avait des valeurs très surestimées pour un OS aussi léger).
- **FAQ différenciée** sur les paires qui partageaient un texte identique : Kali/Tails, Arch/NixOS, FreeBSD/OpenBSD.
- **Les 4 fiches restantes du lot des 21 populaires ont été vérifiées** (elles n'étaient pas "déjà correctes" comme supposé) :
  - **SteamOS** : RAM min. corrigée 8→4 Go (specs officielles Valve), ajout de l'exigence SSD **NVMe obligatoire** (absente), FAQ désormais spécifique (n'était plus dupliquée avec Garuda Linux).
  - **Proxmox VE** : version 8.x→**9.x** (sortie août 2025, Debian 13 Trixie), RAM/disque alignés sur la doc officielle, FAQ désormais spécifique (n'était plus dupliquée avec TrueNAS Scale).
  - **Arch Linux** : erreur factuelle corrigée — le champ CPU affichait *"temps de compilation important"*, copié-collé de la fiche Gentoo (Arch installe des paquets binaires, aucune compilation). RAM min. corrigée 2 Go→512 Mo (chiffre ArchWiki).
  - **FreeBSD** : version 14.x→**15.x** (branche de production actuelle depuis déc. 2025).

**Phase 1 (relecture des 21 systèmes `popular:true`) considérée close.**

## ✅ Fait (cette session précédente)

- **160 systèmes** au total (156 → 160) : ajout de LineageOS, GrapheneOS, Ubuntu Touch, CoreELEC
- **Nouvelle catégorie « Rétro »** : FreeDOS, ReactOS, AROS (reclassés depuis « Alternatif »)
- **Config indicative** (CPU / RAM / stockage) sur les **160 fiches**, affichée en pastilles + reprise dans le comparateur
- **FAQ dépliable** (1-2 questions) sur les **160 fiches**
- **« Systèmes similaires »** en bas de chaque fiche (2-3 liens vers des OS proches)
- `sitemap.xml` mis à jour

**Note de qualité** : les fiches historiques (celles qui existaient déjà avant les +8 systèmes ajoutés récemment) ont reçu une config/FAQ **générée par catégorie** (desktop, gaming, server, security…) plutôt que rédigée à la main système par système. C'est cohérent et honnête à l'usage, mais moins précis que les fiches enrichies manuellement (Windows 11, Ubuntu, LineageOS, GrapheneOS, etc.). Un passage de relecture ciblé sur les ~20-30 systèmes les plus consultés (`popular:true`) apporterait le plus gros gain de précision pour le moins d'effort — voir Phase 1.

---

## 🎯 Phase 1 — Finition du contenu (rapide, fort impact)

**Phase 1 considérée close.**

- ✅ Relecture manuelle des 21 systèmes `popular:true` (session précédente, voir "Fait" plus haut)
- ✅ **FAQ « erreur fréquente » ajoutée sur les 51 systèmes `diff:"Avancé"`** : une question ciblée sur le piège le plus courant de chaque système (ex. mise à jour partielle sous Arch/CachyOS, absence de systemd sous Devuan/Artix, immuabilité de Silverblue/Kinoite/MicroOS, pas de shell SSH sur Talos, perte de données au déverrouillage du bootloader sous LineageOS…)
- ✅ **11 numéros de version rafraîchis** après vérification des sources officielles : Alpine (3.20→3.24), OpenBSD (7.5→7.9), NetBSD (10.0→10.1), OpenWrt (23.05→25.12), VyOS (1.4 Sagitta→1.5 Circinus), TrueNAS Scale (24.04 Dragonfish→25.10 Goldeye), Kali Purple (2024.1→2026.2), Devuan (5 Daedalus→6.1 Excalibur), LineageOS (21→23.2), Ubuntu Touch (20.04 OTA→24.04-1.3), Tsurugi (2024.1→26.03)
- ✅ **Relecture des `alt` générés automatiquement** : voir détail dans « Fait (cette session) » plus haut — traité intégralement.

**Phase 1 intégralement close, aucun reliquat restant.**

## 🧭 Phase 2 — Nouvelles fonctionnalités de navigation

- ✅ **Arbre de filiation des distributions Linux** (`arbre.html` / `js/arbre.js`) — visuel interactif basé sur le champ `base`, avec regroupement en familles synthétiques (Windows NT, BSD, RHEL…)
- ✅ **Assistant « Trouve-moi un OS »** (wizard dans `js/catalog.js`) — 3 questions (usage, niveau, préférence) → recommandations personnalisées ; couvre le besoin de « comparer par usage »
- ✅ **Filtre combiné catégorie + licence** — nouveau sélecteur licence (`#licenseSelect`), combinable avec catégorie/niveau/recherche
- ✅ **Historique de navigation « Vus récemment »** — `js/recent.js` (localStorage, même pattern que les favoris) + bandeau sur `index.html` (`js/recent-strip.js`), alimenté depuis `os.html`

Phase 2 considérée close.

## 🎨 Phase 3 — Contenu enrichi additionnel

- ✅ **Section « Erreurs fréquentes »** par étape d'installation — voir détail dans « Fait (cette session) » plus haut.
- **Captures d'écran / mini-GIFs** de l'interface pour les OS desktop les plus populaires
- ✅ **« Articles de fond »** — transformé en widget interactif « Quel OS pour un PC de [année] ? » plutôt qu'un texte statique, voir détail plus haut.
- **Badges de fraîcheur** : date de dernière vérification par fiche, avec rappel visuel si > 12 mois — écarté pour l'instant par choix de l'utilisateur

## 🌍 Phase 4 — Portée & technique

- ✅ **Mode « check hardware »** — voir détail dans « Fait (cette session) » plus haut.
- **Mode anglais (i18n)** — gros chantier mais élargit fortement l'audience du site statique
- **Recherche vocale / raccourcis clavier** dans le catalogue
- ✅ **Génération de sitemap automatique** — voir détail plus haut (`scripts/generate-sitemap.js`).
- ✅ **Raccourcis clavier** dans le catalogue — `js/shortcuts.js` + `css/shortcuts.css` : `/` (recherche), `W` (wizard), `H` (vérifier mon PC), `F` (favoris), `T` (thème), `Échap` (fermer/quitter le focus), `?` (aide-mémoire, modale dédiée). Désactivés pendant une saisie dans un champ. Testé au clavier réel (Chrome), tous fonctionnels.

## 💡 Idées plus exploratoires (à valider avant d'investir du temps)

- Export PDF d'une fiche (« imprimer ce guide »)
- Mini-quiz ludique « Teste tes connaissances OS » en fin de fiche
- API JSON publique du catalogue pour que d'autres sites puissent l'exploiter
- Système de vote communautaire « Ce guide vous a-t-il aidé ? » (nécessiterait un backend léger, rompt avec le principe 100% statique actuel)

---

## Comment prioriser

Phases 1 et 2 sont désormais **intégralement closes**. En Phase 4, le mode « check hardware » est traité. Reste, par ordre de gain/effort : les 2 points de contenu Phase 3 (captures d'écran, articles de fond), puis les 3 chantiers Phase 4 restants (sitemap auto et raccourcis clavier sont rapides ; i18n est le plus lourd et se justifie surtout si l'audience visée dépasse le public francophone).
