/* BOOT//GUIDE — base de données des outils de préparation de clé USB.
   Un outil = une fiche dédiée, sur le même principe que les OS (voir data.js). */
window.TOOLS_DATA = [
  {
    id: "rufus",
    name: "Rufus",
    color: "#E8590C",
    category: "Graveur ISO",
    platforms: ["Windows"],
    tag: "L'outil de référence sous Windows pour créer une clé USB bootable : rapide, portable, sans installation.",
    time: "~5 min",
    site: "rufus.ie",
    idealFor: "Toute ISO sous Windows, en particulier quand tu dois choisir précisément GPT/UEFI vs MBR/Legacy, ou contourner les exigences TPM/Secure Boot de Windows 11.",
    pros: [
      "Gratuit, open-source, et 100% portable (aucune installation)",
      "Contrôle fin du schéma de partition (GPT/UEFI ou MBR/BIOS legacy)",
      "Options intégrées pour contourner TPM 2.0 / Secure Boot / compte Microsoft sur Windows 11",
      "Le plus rapide des trois graveurs sur clé neuve"
    ],
    cons: [
      "Windows uniquement — aucune version macOS ou Linux",
      "Interface plus technique, quelques options peuvent dérouter un débutant",
      "Efface la clé à chaque nouvelle ISO : une seule ISO à la fois"
    ],
    steps: [
      { t: "Télécharger Rufus", d: "Sur le site officiel rufus.ie. La version « portable » ne nécessite aucune installation : double-clique et c'est parti." },
      { t: "Brancher la clé USB", d: "8 Go minimum recommandés. Toutes les données présentes seront intégralement effacées — sauvegarde-les avant si besoin." },
      { t: "Sélectionner le périphérique et l'ISO", d: "Dans Rufus : « Périphérique » = ta clé USB (vérifie bien qu'il s'agit du bon disque), « Sélection de démarrage » = ton fichier ISO téléchargé." },
      { t: "Choisir le bon schéma de partition", d: "GPT pour l'UEFI moderne (immense majorité des PC depuis ~2013). MBR uniquement pour du très vieux BIOS legacy — vérifie le mode de ta carte mère si tu doutes.", code: "Schéma de partition : GPT → cible UEFI (non CSM)" },
      { t: "Cas Windows 11 : contourner TPM/Secure Boot", d: "Si l'ISO est Windows 11 et que le PC cible n'a pas de TPM 2.0, cocher « Supprimer les exigences (TPM 2.0, Secure Boot, RAM 4 Go, compte en ligne) » dans les options avancées avant de lancer." },
      { t: "Démarrer et attendre", d: "Cliquer sur « Démarrer », garder le mode ISO par défaut. Compte 5 à 15 minutes selon la vitesse de la clé. Ne jamais débrancher avant la fin." }
    ]
  },
  {
    id: "etcher",
    name: "balenaEtcher",
    color: "#1E88E5",
    category: "Graveur ISO",
    platforms: ["Windows", "macOS", "Linux"],
    tag: "Le graveur multiplateforme le plus simple : trois écrans, aucune option piège, protection anti-erreur intégrée.",
    time: "~8 min",
    site: "etcher.balena.io",
    idealFor: "Débuter, graver depuis macOS ou Linux (là où Rufus n'existe pas), ou simplement vouloir un outil qui ne peut pas se tromper de disque.",
    pros: [
      "Identique sur Windows, macOS et Linux (AppImage disponible)",
      "N'affiche que les disques amovibles — impossible d'écraser ton disque système par erreur",
      "Vérifie automatiquement l'écriture après la gravure",
      "Interface minimale, zéro jargon"
    ],
    cons: [
      "Pas de choix manuel entre GPT et MBR — réplique l'image telle quelle",
      "Plus lent que Rufus à cause de la vérification systématique",
      "Moins d'options avancées pour du dual-boot ou du multi-partition"
    ],
    steps: [
      { t: "Télécharger balenaEtcher", d: "Sur etcher.balena.io, choisir l'installeur (Windows/macOS) ou l'AppImage (Linux, à rendre exécutable)." },
      { t: "Flash from file", d: "Ouvrir Etcher, cliquer « Flash from file » et sélectionner l'ISO téléchargée." },
      { t: "Select target", d: "Etcher liste uniquement les disques amovibles détectés. Vérifier la taille/le nom affiché avant de continuer — c'est la sécurité intégrée de l'outil." },
      { t: "Flash !", d: "Lancer l'écriture. Etcher écrit puis relit l'image pour vérifier l'intégrité : c'est plus long que Rufus mais plus sûr." },
      { t: "Alternative en ligne de commande (macOS/Linux)", d: "Pour les habitués du terminal, identifier le disque puis écrire directement avec dd (à utiliser avec précaution, aucune protection anti-erreur ici) :", code: "sudo dd if=fichier.iso of=/dev/rdiskN bs=1m   # macOS\nsudo dd if=fichier.iso of=/dev/sdX bs=4M status=progress   # Linux" }
    ]
  },
  {
    id: "ventoy",
    name: "Ventoy",
    color: "#2E7D32",
    category: "Multi-boot",
    platforms: ["Windows", "Linux"],
    tag: "Un fonctionnement radicalement différent : on installe Ventoy une seule fois, puis on copie-colle les ISO comme de simples fichiers — jusqu'à en garder plusieurs sur la même clé.",
    time: "~10 min (installation) puis secondes par ISO",
    site: "ventoy.net",
    idealFor: "Qui teste ou installe souvent plusieurs OS différents, ou veut garder une trousse à outils permanente (Windows + plusieurs Linux + un live de secours) sur une seule clé.",
    pros: [
      "Une seule installation de Ventoy sur la clé, ensuite plus jamais besoin de « regraver »",
      "Plusieurs ISO en simultané sur la même clé, sélection au boot via un menu",
      "Ajouter/retirer une ISO = simple glisser-déposer, comme sur une clé USB classique",
      "La clé reste utilisable comme stockage normal à côté des ISO"
    ],
    cons: [
      "Fonctionnement différent des autres outils : à comprendre avant de s'en servir",
      "Certaines ISO très spécifiques (quelques firmwares, distributions anciennes ou très personnalisées) ne sont pas 100% compatibles",
      "L'installation initiale de Ventoy efface la clé — les copies d'ISO suivantes, non"
    ],
    steps: [
      { t: "Télécharger Ventoy", d: "Sur ventoy.net, télécharger l'archive correspondant à ton OS (Windows ou Linux) et la décompresser." },
      { t: "Installer Ventoy sur la clé (une seule fois)", d: "Lancer Ventoy2Disk.exe (Windows) ou ventoy2disk.sh (Linux), sélectionner la clé USB, cliquer « Install ». Cette étape efface la clé et crée deux zones : une zone Ventoy (cachée) et une zone de données visible.", code: "sudo sh Ventoy2Disk.sh -i /dev/sdX   # Linux" },
      { t: "Copier les ISO sur la clé", d: "Une fois Ventoy installé, la clé apparaît comme un disque normal dans l'explorateur de fichiers. Il suffit d'y copier-coller un ou plusieurs fichiers .iso — aucun logiciel de gravure supplémentaire n'est nécessaire." },
      { t: "Ajouter d'autres ISO plus tard", d: "Pour ajouter ou retirer un système, glisser-déposer les fichiers .iso comme sur n'importe quelle clé USB. La zone Ventoy elle-même n'a besoin d'être réinstallée qu'en cas de mise à jour majeure de Ventoy." },
      { t: "Démarrer et choisir l'ISO", d: "Au démarrage sur la clé, Ventoy affiche un menu listant toutes les ISO présentes. Sélectionner celle à booter avec les flèches, puis Entrée." },
      { t: "Vérifier la compatibilité si besoin", d: "Pour une ISO peu courante, consulter la liste de compatibilité officielle sur ventoy.net avant de l'ajouter, notamment pour du matériel ancien ou des distributions très spécifiques." }
    ]
  },
  {
    id: "checksum",
    name: "Vérification SHA-256",
    color: "#00897B",
    category: "Vérification",
    platforms: ["Windows", "macOS", "Linux"],
    tag: "Pas un graveur : une étape de contrôle, à faire juste après le téléchargement et avant de graver quoi que ce soit.",
    time: "~1 min",
    site: null,
    idealFor: "Systématiquement, avant de graver n'importe quelle ISO — surtout téléchargée depuis un miroir ou une connexion lente/instable où une corruption est plus probable.",
    pros: [
      "Détecte un téléchargement corrompu avant qu'il ne cause une installation ratée",
      "Détecte une ISO altérée ou piégée si elle ne provient pas de la source officielle",
      "Prend une minute, aucun logiciel à installer (commandes déjà présentes sur les 3 OS)"
    ],
    cons: [
      "Ne protège que si le hash officiel est lui-même récupéré depuis une source de confiance",
      "Étape en ligne de commande — un peu plus technique qu'un simple clic"
    ],
    steps: [
      { t: "Récupérer le hash officiel", d: "Sur la page de téléchargement officielle du projet (jamais un miroir ou un forum), noter la valeur SHA-256 fournie à côté de l'ISO." },
      { t: "Calculer le hash sous Windows", d: "Ouvrir une invite de commandes dans le dossier de l'ISO :", code: "certutil -hashfile fichier.iso SHA256" },
      { t: "Calculer le hash sous macOS", d: "Ouvrir le Terminal :", code: "shasum -a 256 fichier.iso" },
      { t: "Calculer le hash sous Linux", d: "Ouvrir un terminal :", code: "sha256sum fichier.iso" },
      { t: "Comparer et conclure", d: "Comparer caractère par caractère la valeur obtenue avec celle du site officiel. Si elles diffèrent, ne pas graver : retélécharger l'ISO, idéalement depuis une autre source ou connexion." }
    ]
  },
  {
    id: "rpi-imager",
    name: "Raspberry Pi Imager",
    color: "#C51A4A",
    category: "Carte SD / SBC",
    platforms: ["Windows", "macOS", "Linux"],
    tag: "Le seul outil d'ici qui configure le système avant même le premier démarrage : nom de machine, SSH, Wi-Fi et compte utilisateur sont écrits directement dans l'image.",
    time: "~10 min",
    site: "raspberrypi.com/software",
    idealFor: "Tout ce qui démarre sur carte microSD plutôt que sur clé USB : Raspberry Pi OS bien sûr, mais aussi LibreELEC, Batocera, RecalBox, OpenWrt ou Ubuntu Server sur carte ARM. Indispensable pour un Pi sans écran ni clavier, puisqu'il permet d'activer SSH et le Wi-Fi à l'avance.",
    pros: [
      "Pré-configuration avant le premier boot : nom d'hôte, compte utilisateur, mot de passe, clé SSH, réseau Wi-Fi, fuseau horaire et clavier",
      "Catalogue intégré : télécharge l'image officielle lui-même, sans passer par un site tiers",
      "Vérifie l'écriture après coup, et sait aussi écrire un fichier .img ou .iso local",
      "Gère les cartes microSD comme les clés USB et les SSD externes"
    ],
    cons: [
      "Pensé pour les cartes ARM : sans intérêt pour installer un OS de bureau x86 sur un PC",
      "La pré-configuration ne s'applique qu'aux systèmes qui la comprennent (famille Raspberry Pi OS et dérivés)",
      "Le téléchargement intégré passe par le réseau à chaque écriture si l'image n'est pas déjà en cache"
    ],
    steps: [
      { t: "Installer Raspberry Pi Imager", d: "Depuis raspberrypi.com/software. Sous Linux, il est aussi packagé dans la plupart des dépôts.", code: "sudo apt install rpi-imager" },
      { t: "Choisir le modèle de carte", d: "Premier menu : le modèle de Raspberry Pi visé. Ce choix filtre ensuite le catalogue pour ne proposer que des images compatibles — une carte ARM64 et une ARMv6 n'acceptent pas les mêmes." },
      { t: "Choisir le système", d: "Second menu : soit une image du catalogue intégré (Raspberry Pi OS, mais aussi LibreELEC, Batocera, Ubuntu…), soit « Use custom » pour pointer un fichier .img/.iso déjà téléchargé." },
      { t: "Sélectionner la carte SD ou la clé", d: "Troisième menu. Vérifier la capacité affichée : c'est le seul garde-fou avant un effacement complet du support." },
      { t: "Pré-configurer le système (l'étape qui change tout)", d: "Avant de lancer l'écriture, ouvrir les options de personnalisation. Renseigner le nom d'hôte, le compte utilisateur et son mot de passe, le réseau Wi-Fi et surtout activer SSH. Un Pi ainsi préparé est joignable au réseau dès son premier démarrage, sans jamais y brancher d'écran.", code: "ssh utilisateur@nomdhote.local" },
      { t: "Écrire et vérifier", d: "Lancer l'écriture, puis laisser la phase de vérification aller au bout. Retirer la carte seulement quand l'outil annonce que le support peut être débranché." }
    ]
  },
  {
    id: "dd",
    name: "La commande dd",
    mono: "dd",
    color: "#546E7A",
    category: "Ligne de commande",
    platforms: ["macOS", "Linux", "BSD"],
    tag: "Pas un logiciel : une commande présente d'origine sur tout système Unix. Aucune interface, aucun garde-fou — elle écrit exactement où on lui dit, y compris sur le mauvais disque.",
    time: "~5 min",
    site: null,
    idealFor: "Graver depuis un système sans interface graphique (serveur, live de secours, machine distante en SSH), ou quand aucun outil n'est installable. C'est aussi la méthode citée par la documentation officielle de la plupart des distributions et des BSD.",
    pros: [
      "Déjà présente sur Linux, macOS et les BSD : rien à installer, rien à télécharger",
      "Fonctionne en SSH sur une machine sans écran, là où un outil graphique est inutilisable",
      "Écrit l'image octet pour octet, sans interprétation : convient aux images qu'un graveur classique refuse",
      "Se scripte, donc se répète à l'identique"
    ],
    cons: [
      "Aucune protection : une lettre de périphérique erronée efface le disque système, sans confirmation ni annulation possible",
      "N'affiche rien par défaut pendant l'écriture — on peut croire qu'elle a planté",
      "Ne vérifie pas ce qu'elle a écrit : la vérification est une étape manuelle séparée",
      "La syntaxe diffère légèrement entre macOS et Linux"
    ],
    steps: [
      { t: "Identifier le périphérique — l'étape critique", d: "Lister les disques et repérer la clé par sa taille, jamais par sa position dans la liste (elle change d'un branchement à l'autre). Se tromper ici détruit le disque visé.", code: "lsblk -o NAME,SIZE,MODEL,MOUNTPOINT   # Linux\ndiskutil list                          # macOS" },
      { t: "Démonter les partitions montées", d: "Le support doit être démonté, mais pas éjecté : le périphérique doit rester présent dans /dev.", code: "sudo umount /dev/sdX*          # Linux\ndiskutil unmountDisk /dev/diskN  # macOS" },
      { t: "Écrire l'image", d: "Cibler le disque entier (/dev/sdb), pas une partition (/dev/sdb1). Sous macOS, /dev/rdiskN — avec le « r » — est nettement plus rapide que /dev/diskN.", code: "sudo dd if=image.iso of=/dev/sdX bs=4M status=progress conv=fsync   # Linux\nsudo dd if=image.iso of=/dev/rdiskN bs=1m                          # macOS" },
      { t: "Suivre la progression sur macOS", d: "macOS n'a pas status=progress. Envoyer un SIGINFO avec Ctrl+T dans le terminal affiche l'avancement sans interrompre l'écriture." },
      { t: "Vider les tampons avant de débrancher", d: "dd peut rendre la main alors que le noyau n'a pas fini d'écrire. Forcer la synchronisation, puis attendre qu'elle se termine avant de retirer la clé.", code: "sync" },
      { t: "Vérifier l'écriture (optionnel mais recommandé)", d: "Relire depuis la clé exactement le nombre d'octets de l'image et comparer l'empreinte à celle du fichier source.", code: "sudo dd if=/dev/sdX bs=4M count=$(( $(stat -c %s image.iso) / 4194304 + 1 )) | sha256sum" }
    ]
  },
  {
    id: "mediacreationtool",
    name: "Media Creation Tool",
    color: "#0078D4",
    category: "Graveur ISO",
    platforms: ["Windows"],
    tag: "L'outil officiel de Microsoft : il télécharge Windows depuis les serveurs Microsoft et prépare la clé dans la foulée, sans ISO à récupérer soi-même.",
    time: "~30 min (téléchargement inclus)",
    site: "microsoft.com/software-download",
    idealFor: "Installer Windows sur une machine qui remplit les prérequis officiels, quand on veut la certitude d'une image authentique et à jour sans avoir à vérifier soi-même une empreinte SHA-256.",
    pros: [
      "L'image vient directement de Microsoft : ni miroir, ni empreinte à contrôler manuellement",
      "Télécharge la version la plus récente, avec les correctifs déjà intégrés",
      "Prépare la clé bootable dans la même opération, sans second logiciel",
      "Peut aussi produire un simple fichier ISO, à graver ensuite avec Rufus ou Ventoy"
    ],
    cons: [
      "Windows uniquement, et pour installer Windows uniquement",
      "Aucun contrôle du schéma de partition : impossible de forcer GPT ou MBR",
      "Ne permet aucun contournement des exigences TPM 2.0 / Secure Boot — c'est précisément ce que Rufus sait faire",
      "Long : le téléchargement complet de Windows précède la gravure"
    ],
    steps: [
      { t: "Récupérer l'outil", d: "Sur microsoft.com/software-download, à la page de la version de Windows visée, section « Créer un support d'installation ». Le fichier est un exécutable à lancer, pas un installeur." },
      { t: "Accepter et choisir le mode", d: "Sélectionner « Créer un support d'installation pour un autre PC » plutôt que la mise à niveau de la machine courante." },
      { t: "Langue, édition, architecture", d: "Décocher « Utiliser les options recommandées » pour choisir explicitement, notamment si la clé doit servir sur une autre machine que celle utilisée pour la créer." },
      { t: "Choisir le support", d: "« Disque mémoire flash USB » écrit directement sur la clé (8 Go minimum, contenu effacé). « Fichier ISO » produit une image à graver ensuite avec un autre outil — utile pour Ventoy ou pour archiver." },
      { t: "Laisser télécharger puis écrire", d: "L'outil télécharge Windows puis prépare la clé. Compter l'essentiel du temps sur le téléchargement ; ne pas débrancher la clé ni mettre le PC en veille pendant l'opération." },
      { t: "Si le PC cible ne remplit pas les prérequis", d: "Media Creation Tool ne contourne rien. Dans ce cas, produire un ISO ici puis le graver avec Rufus, qui propose explicitement de retirer les exigences TPM 2.0, Secure Boot et compte en ligne." }
    ]
  },
  {
    id: "fedora-media-writer",
    name: "Fedora Media Writer",
    color: "#51A2DA",
    category: "Graveur ISO",
    platforms: ["Windows", "macOS", "Linux"],
    tag: "L'outil officiel du projet Fedora : il liste les éditions disponibles, télécharge celle qu'on choisit, vérifie son authenticité et grave la clé — le tout sans quitter l'application.",
    time: "~15 min (téléchargement inclus)",
    site: "fedoraproject.org",
    idealFor: "Toute la famille Fedora présente dans le catalogue — Fedora Workstation et KDE, les variantes atomiques Silverblue et Kinoite, Nobara, Bazzite, Bluefin, Aurora, Ultramarine, Asahi Remix. Il grave aussi n'importe quelle autre ISO, et sait écrire les images pour cartes ARM.",
    pros: [
      "Télécharge et vérifie l'image automatiquement : la signature est contrôlée sans intervention",
      "Présente les éditions et variantes Fedora en clair, sans avoir à naviguer sur le site",
      "Disponible sur les trois systèmes, y compris en Flatpak",
      "Accepte aussi une ISO quelconque déjà téléchargée, et gère les images pour cartes ARM"
    ],
    cons: [
      "Intérêt limité hors de la famille Fedora : pour une ISO quelconque, Etcher ou Rufus font le même travail",
      "Pas de choix manuel GPT/MBR, comme Etcher",
      "Le catalogue intégré ne connaît que les éditions officielles Fedora — les dérivés se gravent par l'option ISO locale"
    ],
    steps: [
      { t: "Installer Fedora Media Writer", d: "Depuis fedoraproject.org, ou via Flathub sous Linux.", code: "flatpak install flathub org.fedoraproject.MediaWriter" },
      { t: "Choisir l'édition ou une ISO locale", d: "L'écran d'accueil liste les éditions officielles (Workstation, KDE, Server, les variantes atomiques, les spins). Pour un dérivé comme Nobara ou Bazzite, télécharger l'ISO depuis son site puis utiliser l'option d'image locale." },
      { t: "Laisser télécharger et vérifier", d: "L'outil récupère l'image et contrôle son intégrité et sa signature avant d'écrire — l'équivalent automatique de l'étape SHA-256 faite à la main ailleurs." },
      { t: "Sélectionner la clé USB", d: "Vérifier la capacité affichée. Le contenu du support sera intégralement effacé." },
      { t: "Écrire", d: "Lancer l'écriture et attendre la fin de la phase de vérification. L'outil propose ensuite de restaurer la clé en support de stockage normal — pratique, la partition d'installation n'étant pas reconnue par Windows après coup." }
    ]
  }
];
