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
  }
];
