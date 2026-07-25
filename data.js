/* BOOT//GUIDE — base de données des systèmes (v3).
   Chaque OS : logo de marque (Simple Icons CDN, colorisé) + couleur officielle. */
window.OS_DATA = [
  /* ===================== BUREAU ===================== */
  {
    id:"win11", name:"Windows 11", version:"23H2", cat:"desktop", color:"#2F9BE6", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#2F9BE6"><path d="M2.5 2.5h8.5v8.5H2.5zM13 2.5h8.5v8.5H13zM2.5 13h8.5v8.5H2.5zM13 13h8.5v8.5H13z"/></svg>',
    tag:"Le système grand public de Microsoft, moderne et hardware-exigeant.",
    site:"microsoft.com", license:"Propriétaire", popular:true, isNew:false,
    time:"~15 min", diff:"Facile", base:"Windows NT",
    req:{ram:"4 Go min. (officiellement ; 8 Go+ conseillés en pratique)", disk:"64 Go min. (exigence officielle Microsoft)", cpu:"64 bits, 1 GHz, 2 cœurs min. + TPM 2.0 et UEFI Secure Boot obligatoires"},
    steps:[
      {t:"Télécharger l'ISO officiel", d:"Depuis microsoft.com/software-download/windows11, section « Télécharger l'image disque (ISO) »."},
      {t:"Créer la clé bootable", d:"Ouvrir Rufus, sélectionner l'ISO et la clé USB. Choisir le schéma GPT / UEFI.", code:"Rufus → GPT → UEFI (non CSM)"},
      {t:"Vérifier le TPM 2.0", d:"Windows 11 exige TPM 2.0 et Secure Boot. Vérifier dans le BIOS/UEFI avant de démarrer."},
      {t:"Démarrer sur la clé", d:"Redémarrer, ouvrir le menu de boot (F12 / F8 / Échap selon la carte mère) et choisir la clé USB."},
      {t:"Installer", d:"Suivre l'assistant : langue, partition, compte. Astuce : Maj+F10 puis OOBE\\BYPASSNRO pour éviter le compte Microsoft.", code:"Maj + F10 → oobe\\bypassnro"}
    ],
    alt:["win10","ubuntu","debian","fedora"],
    errors:[
      {q:"Secure Boot ou TPM 2.0 bloque l'installation",a:"Vérifie l'activation du TPM 2.0 et de Secure Boot dans le BIOS/UEFI avant de démarrer sur la clé. Si le PC est trop ancien, un contournement existe via le registre ou une option dédiée de Rufus, mais Microsoft ne garantit alors ni les mises à jour ni le support."},
      {q:"La clé USB n'apparaît pas dans le menu de boot",a:"Le disque doit être partitionné en GPT (pas MBR) et le mode UEFI activé dans le BIOS, CSM/Legacy désactivé. Recrée la clé avec Rufus en confirmant bien le schéma GPT/UEFI."},
      {q:"Aucun disque détecté pendant l'installation",a:"Certains contrôleurs de stockage (NVMe RAID, Intel VMD) nécessitent un pilote supplémentaire. Bascule le mode SATA/RAID du BIOS en AHCI ou charge le pilote via « Charger un pilote » dans l'assistant."}
    ],
    faq:[
      {q:"Mon PC n'a pas de TPM 2.0, puis-je quand même installer Windows 11 ?", a:"Oui via un contournement (registre ou option Rufus dédiée), mais Microsoft ne garantit alors ni les mises à jour ni la prise en charge ; solution à réserver à un usage ponctuel ou de test."},
      {q:"Faut-il obligatoirement une licence pour terminer l'installation ?", a:"Non, l'installation peut se terminer sans clé de licence ; Windows reste utilisable avec des limitations (filigrane, personnalisation) jusqu'à activation."}
    ]
  },
  {
    id:"ubuntu", name:"Ubuntu", version:"24.04 LTS", cat:"desktop", color:"#E95420", icon:"ubuntu",
    tag:"La distribution Linux la plus populaire. Idéale pour débuter.",
    site:"ubuntu.com", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~12 min", diff:"Facile", base:"Debian",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"25 Go min. (officiel Ubuntu)", cpu:"2 GHz dual-core, 64 bits"},
    steps:[
      {t:"Télécharger l'ISO", d:"Sur ubuntu.com/download/desktop, choisir la version Desktop LTS (support 5 ans)."},
      {t:"Vérifier le SHA-256", d:"Comparer l'empreinte avec le fichier SHA256SUMS publié.", code:"sha256sum ubuntu-24.04-desktop-amd64.iso"},
      {t:"Graver la clé", d:"Utiliser balenaEtcher ou Rufus en mode image/DD."},
      {t:"Essayer avant d'installer", d:"Booter sur la clé et choisir « Try Ubuntu » pour tester le live sans rien modifier."},
      {t:"Installer", d:"Lancer l'installeur, choisir dual-boot ou effacement disque, puis créer l'utilisateur."}
    ],
    alt:["deepin","nitrux","lmde"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Quelle est la différence entre la version LTS et les versions intermédiaires ?", a:"La LTS (comme 24.04) est supportée 5 ans et pensée pour la stabilité ; les versions intermédiaires (24.10, 25.04…) sortent tous les 6 mois avec des logiciels plus récents mais seulement 9 mois de support."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"debian", name:"Debian", version:"12 Bookworm", cat:"desktop", color:"#D2094A", icon:"debian",
    tag:"La distribution universelle, socle de milliers d'autres. Stable comme un roc.",
    site:"debian.org", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"—",
    req:{ram:"1 Go min. (2 Go conseillés, 4 Go pour un bureau GNOME/KDE confortable)", disk:"10 Go min. (20-25 Go conseillés avec environnement de bureau)", cpu:"1 GHz, 64 bits (i686 minimum sur les architectures 32 bits)"},
    steps:[
      {t:"Télécharger l'ISO", d:"Sur debian.org, prendre l'image netinst (petite) ou l'image DVD complète."},
      {t:"Graver la clé", d:"cp/dd sous Linux, Rufus (mode DD) sous Windows.", code:"sudo dd if=debian-12.iso of=/dev/sdX bs=4M status=progress"},
      {t:"Démarrer l'installeur", d:"Choisir « Graphical install » ou « Install » (ncurses)."},
      {t:"Réseau & miroir", d:"Configurer le miroir APT le plus proche pour des téléchargements rapides."},
      {t:"Choisir l'environnement", d:"tasksel : GNOME, KDE, Xfce… ou serveur minimal sans interface."}
    ],
    alt:["ubuntu","fedora","mobian"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Pourquoi Debian est-elle réputée plus stable que les autres distributions ?", a:"Ses paquets passent par une longue phase de test (testing) avant d'entrer dans la version stable, ce qui limite les régressions au prix de logiciels souvent moins récents que sur Fedora ou Arch."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Un peu plus que sur Ubuntu ou Mint : l'installeur par défaut est moins guidé et certains pilotes/codecs propriétaires demandent une configuration manuelle des dépôts."}
    ]
  },
  {
    id:"fedora", name:"Fedora", version:"40 Workstation", cat:"desktop", color:"#51A2DA", icon:"fedora",
    tag:"À la pointe de la technologie, sponsorisée par Red Hat. GNOME pur.",
    site:"getfedora.org", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~12 min", diff:"Facile", base:"—",
    req:{ram:"2 Go min. (4 Go conseillés, 8 Go pour un usage confortable)", disk:"15 Go min. (40 Go conseillés officiellement)", cpu:"2 GHz dual-core (x86_64 ou ARM)"},
    steps:[
      {t:"Télécharger l'ISO", d:"getfedora.org → Workstation. Ou utiliser Fedora Media Writer."},
      {t:"Graver la clé", d:"Fedora Media Writer automatise tout, ou balenaEtcher."},
      {t:"Démarrer le live", d:"Booter et tester Fedora en session live avant installation."},
      {t:"Anaconda", d:"Lancer l'installeur Anaconda, définir disque, fuseau et utilisateur."},
      {t:"Premier démarrage", d:"Activer les dépôts tiers (RPM Fusion) pour les codecs et pilotes.", code:"sudo dnf install rpmfusion-free-release rpmfusion-nonfree-release"}
    ],
    alt:["debian","mint","asahi"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Pourquoi installer RPM Fusion dès le premier démarrage ?", a:"Fedora n'inclut par défaut que des logiciels libres ; RPM Fusion ajoute les codecs multimédias et pilotes propriétaires (NVIDIA notamment) nécessaires à un usage courant."},
      {q:"Fedora convient-il à un usage quotidien grand public ?", a:"Oui, mais son cycle de mises à jour très fréquent (nouvelles versions tous les 6 mois, paquets récents) le destine surtout à ceux qui veulent les dernières technologies Linux sans attendre."}
    ]
  },
  {
    id:"mint", name:"Linux Mint", version:"21.3 Virginia", cat:"desktop", color:"#87CF3E", icon:"linuxmint",
    tag:"L'alternative Windows la plus douce. Cinnamon, élégant et familier.",
    site:"linuxmint.com", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"20 Go min. (100 Go conseillés officiellement)", cpu:"64 bits (32 bits non supporté depuis Mint 20)"},
    steps:[
      {t:"Télécharger l'ISO", d:"linuxmint.com → édition Cinnamon (ou MATE / Xfce)."},
      {t:"Graver la clé", d:"Rufus ou balenaEtcher, mode image."},
      {t:"Session live", d:"Booter et essayer le bureau Cinnamon avant d'installer."},
      {t:"Installer", d:"Cocher « Installer les codecs multimédias » pendant l'assistant."},
      {t:"Driver Manager", d:"Après installation, ouvrir le gestionnaire de pilotes pour le GPU/Wi-Fi."}
    ],
    alt:["popos","zorin","elementary"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Cinnamon, MATE ou Xfce : laquelle choisir ?", a:"Cinnamon est la plus moderne et complète (matériel récent conseillé), Xfce la plus légère (idéale sur PC ancien), MATE un compromis entre les deux."},
      {q:"Pourquoi Linux Mint plutôt qu'Ubuntu directement ?", a:"Mint reprend la base d'Ubuntu mais retire Snap par défaut et propose une interface plus proche de Windows, ce qui facilite la transition pour les nouveaux venus."}
    ]
  },
  {
    id:"opensuse", name:"openSUSE", version:"Leap 15.6", cat:"desktop", color:"#73BA25", icon:"opensuse",
    tag:"Robuste et pro. YaST, l'outil de config le plus puissant du monde Linux.",
    site:"opensuse.org", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"—",
    req:{ram:"2 Go min. (4 Go+ fortement conseillés)", disk:"16 Go min. pour un bureau graphique (40 Go conseillés avec snapshots Btrfs)", cpu:"AMD64/Intel EM64T 64 bits"},
    steps:[
      {t:"Télécharger l'ISO", d:"get.opensuse.org → Leap (stable) ou Tumbleweed (rolling)."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Démarrer l'installeur", d:"Choisir la langue, accepter la disposition proposée."},
      {t:"Bureau", d:"Sélectionner KDE Plasma, GNOME ou serveur."},
      {t:"YaST", d:"Utiliser YaST pour gérer paquets, réseau et services après installation."}
    ],
    alt:["tumbleweed","mint","manjaro"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Leap ou Tumbleweed, laquelle choisir ?", a:"Leap est une version stable à cycle fixe (proche de SUSE Linux Enterprise), Tumbleweed une rolling release avec les paquets les plus récents, testée en continu avant publication."},
      {q:"YaST remplace-t-il complètement le terminal ?", a:"Non, mais il centralise la quasi-totalité de l'administration (paquets, réseau, pare-feu, utilisateurs) dans une interface unique, unique en son genre dans l'écosystème Linux."}
    ]
  },
  {
    id:"manjaro", name:"Manjaro", version:"rolling", cat:"desktop", color:"#35BF5C", icon:"manjaro",
    tag:"La puissance d'Arch, sans la douleur de l'installation. Rolling accessible.",
    site:"manjaro.org", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~15 min", diff:"Facile", base:"Arch",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"30 Go conseillés (rolling release, les mises à jour s'accumulent)", cpu:"x86_64, 1 GHz dual-core"},
    steps:[
      {t:"Télécharger l'ISO", d:"manjaro.org → édition KDE, GNOME ou Xfce."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Live + Calamares", d:"Booter le live puis lancer l'installeur graphique Calamares."},
      {t:"Configurer", d:"Choisir disque, utilisateur, options de swap."},
      {t:"Mettre à jour", d:"Rafraîchir les miroirs et le système.", code:"sudo pacman-mirrors -f && sudo pacman -Syu"}
    ],
    alt:["opensuse","popos","mint"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Le fait d'être une rolling release comme Arch pose-t-il les mêmes risques ?", a:"Moins : Manjaro retarde volontairement les paquets d'Arch de quelques semaines pour les tester avant de les publier, réduisant le risque de casse au prix d'une fraîcheur légèrement moindre."},
      {q:"Peut-on installer des paquets AUR comme sous Arch ?", a:"Oui, via un helper AUR (yay, pamac) ; c'est un des grands atouts de Manjaro par rapport aux autres distributions grand public."}
    ]
  },
  {
    id:"popos", name:"Pop!_OS", version:"24.04 LTS (COSMIC)", cat:"desktop", color:"#48B9C7", icon:"popos",
    tag:"Par System76. Depuis la 24.04, le bureau maison COSMIC (Rust, Wayland) remplace GNOME + Pop Shell. Top pour dev et gaming.",
    site:"system76.com", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20 Go min.", cpu:"64 bits ; GPU compatible Wayland pour de bonnes performances avec COSMIC"},
    steps:[
      {t:"Télécharger l'ISO", d:"pop.system76.com → choisir la variante NVIDIA ou AMD/Intel."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Installer", d:"Assistant clair : langue, disque (chiffrement proposé), utilisateur."},
      {t:"Tiling", d:"Le tiling automatique est natif dans COSMIC : l'activer et régler les espaces de travail depuis les Paramètres."},
      {t:"Pop!_Shop", d:"Installer les apps via le store intégré, dépôts Flatpak inclus."}
    ],
    alt:["zorin","elementary","mint"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"COSMIC remplace-t-il complètement GNOME ?", a:"Oui, depuis la version 24.04 : COSMIC est un environnement de bureau entièrement nouveau écrit en Rust par System76, plus qu'une simple extension de GNOME comme l'ancien Pop Shell."},
      {q:"Les pilotes NVIDIA posent-ils encore problème ?", a:"Beaucoup moins qu'ailleurs : Pop!_OS propose une ISO dédiée NVIDIA avec les pilotes propriétaires préinstallés, ce qui évite la configuration manuelle nécessaire sur d'autres distributions."}
    ]
  },
  {
    id:"zorin", name:"Zorin OS", version:"17", cat:"desktop", color:"#0CC1F3", icon:"zorin",
    tag:"Conçu pour les migrants de Windows/macOS. Look configurable en un clic.",
    site:"zorin.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"zorin.com → édition Core (gratuite) ou Pro."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Session live", d:"Tester le bureau avant installation."},
      {t:"Installer", d:"Assistant standard type Ubuntu."},
      {t:"Zorin Appearance", d:"Choisir un layout Windows-like ou macOS-like en un clic."}
    ],
    alt:["popos","elementary","linuxlite"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"elementary", name:"elementary OS", version:"7 Horus", cat:"desktop", color:"#64BAFF", icon:"elementary",
    tag:"Le plus beau Linux. Design soigné à la macOS, philosophie « pay what you want ».",
    site:"elementary.io", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"elementary.io → payer 0 € ou plus, puis télécharger."},
      {t:"Graver la clé", d:"balenaEtcher (recommandé par le projet)."},
      {t:"Live + install", d:"Booter et lancer l'installeur épuré."},
      {t:"AppCenter", d:"Store d'apps « pay what you want », curated et sécurisé."},
      {t:"Gestes", d:"Configurer les gestes multitouch dans les Paramètres."}
    ],
    alt:["zorin","linuxlite","popos"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"linuxlite", name:"Linux Lite", version:"6.6", cat:"desktop", color:"#66B32E", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="#66B32E"><path d="M12 2C8 2 5 5.5 5 10c0 6.5 5.5 10.5 7 11.7 1.5-1.2 7-5.2 7-11.7 0-4.5-3-8-7-8zm0 4.2c1.9 0 3.4 1.6 3.4 3.6S13.9 13.4 12 13.4 8.6 11.8 8.6 9.8 10.1 6.2 12 6.2z"/></svg>',
    tag:"Pensé pour les migrants de Windows sur du matériel modeste. Xfce simplifié.",
    site:"linuxliteos.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"linuxliteos.com/download.php → dernière version stable."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus, mode image."},
      {t:"Session live", d:"Tester le bureau Xfce allégé avant d'installer."},
      {t:"Installer", d:"Assistant simplifié type Ubuntu, disque et utilisateur."},
      {t:"Lite Welcome", d:"Utiliser l'app de bienvenue pour installer logiciels et mises à jour groupées."}
    ],
    alt:["elementary","zorin","kdeneon"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"deepin", name:"Deepin", version:"23", cat:"desktop", color:"#0080FF", icon:"deepin",
    tag:"Le Linux chinois le plus élégant. DDE : environnement de bureau signature.",
    site:"deepin.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Facile", base:"Debian",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"deepin.org → version 23 stable, ISO complète."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus, mode DD."},
      {t:"Live + installeur", d:"Booter puis lancer l'installeur graphique Deepin."},
      {t:"Partitionner", d:"Mode simple (auto) ou personnalisé avec Btrfs recommandé."},
      {t:"Deepin Store", d:"Store maison avec applications curées, dépôts Flatpak activés par défaut."}
    ],
    alt:["ubuntu","nitrux","lmde"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"kdeneon", name:"KDE Neon", version:"User Edition", cat:"desktop", color:"#1D99F3", icon:"kde",
    tag:"La dernière version de KDE Plasma, sur base Ubuntu LTS. Vitrine officielle.",
    site:"kde.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"neon.kde.org → User Edition (stable) ou Testing/Unstable."},
      {t:"Graver la clé", d:"balenaEtcher, Rufus ou dd."},
      {t:"Live Plasma", d:"Tester la dernière version de Plasma en session live."},
      {t:"Calamares", d:"Installeur graphique Calamares : disque, utilisateur."},
      {t:"Mise à jour Plasma", d:"Neon reçoit les mises à jour Plasma en priorité.", code:"pkcon update"}
    ],
    alt:["kubuntu","fedorakde","opensuse"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"solus", name:"Solus", version:"4.5 Resilience", cat:"desktop", color:"#5294E2", icon:"solus",
    tag:"Rolling curated, indépendante. Budgie, GNOME, KDE ou Xfce. Pas basée sur autre chose.",
    site:"getsol.us", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"—",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"getsol.us → édition Budgie (signature), GNOME, KDE ou Xfce."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus en mode image."},
      {t:"Live + install", d:"Session live puis installeur graphique."},
      {t:"eopkg", d:"Gestionnaire de paquets maison, rapide et propre.", code:"sudo eopkg update-repo && sudo eopkg upgrade"},
      {t:"Software Center", d:"Store d'apps intégré avec support Flatpak et Snap disponibles."}
    ],
    alt:["kdeneon","chromeosflex","deepin"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"chromeosflex", name:"ChromeOS Flex", version:"stable", cat:"desktop", color:"#1A73E8", icon:"googlechrome",
    tag:"Google Chrome OS pour vieux PC/Mac. Cloud-first, ultra-léger, gestion entreprise.",
    site:"chromeenterprise.google", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"ChromeOS",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Installer l'extension", d:"Sur Chrome : Chromebook Recovery Utility depuis le Chrome Web Store."},
      {t:"Créer le média", d:"Lancer l'utilitaire → « ChromeOS Flex » → sélectionner la clé USB (8 Go min)."},
      {t:"Booter la clé", d:"Redémarrer sur la clé via le menu de boot du BIOS/UEFI."},
      {t:"Essayer", d:"Choisir « Try it first » pour valider la compatibilité matérielle avant installation."},
      {t:"Installer", d:"Confirmer l'installation : écrase totalement le disque. Se connecter avec un compte Google."}
    ],
    alt:["solus","kdeneon","deepin"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  /* ===================== GAMING ===================== */
  {
    id:"steamos", name:"SteamOS", version:"3.7 (Holo)", cat:"gaming", color:"#66C0F4", icon:"steam",
    tag:"L'OS du Steam Deck. Arch + KDE + Gamescope, pensé pour le jeu.",
    site:"steampowered.com", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~20 min", diff:"Intermédiaire", base:"Arch",
    req:{ram:"4 Go min. (8-16 Go conseillés)", disk:"64 Go min. sur SSD NVMe (SATA non supporté officiellement), 200 Go+ conseillés selon la ludothèque", cpu:"CPU 64 bits récent, GPU AMD recommandé (meilleur support pilotes que Nvidia)"},
    steps:[
      {t:"Télécharger le Recovery", d:"store.steampowered.com/steamos/download → image de récupération Steam Deck."},
      {t:"Graver la clé", d:"Rufus ou balenaEtcher."},
      {t:"Booter", d:"Depuis un Steam Deck ou PC compatible, démarrer sur la clé."},
      {t:"Réinstaller SteamOS", d:"Choisir « Reimage Steam Deck » dans l'outil de récupération."},
      {t:"Mode Bureau", d:"Basculer en mode Desktop (KDE) pour installer des apps Flatpak."}
    ],
    alt:["garuda","cachyos","chimeraos"],
    errors:[
      {q:"La manette n'est pas reconnue",a:"Certaines manettes (notamment Xbox récentes en Bluetooth) demandent un pilote ou un appairage manuel au premier lancement. Branche-la en filaire pour la configuration initiale, plus fiable."},
      {q:"Les jeux/ROMs n'apparaissent pas",a:"Les BIOS des consoles émulées ne sont jamais fournis (question de droits) et doivent être ajoutés manuellement dans le bon dossier ; sans eux, plusieurs émulateurs refusent de lancer un jeu même valide."},
      {q:"Écran noir après une mise à jour des pilotes GPU",a:"Sur les systèmes basés Arch avec pilotes propriétaires NVIDIA, une mise à jour de kernel sans régénération de l'initramfs peut casser le démarrage graphique. Un rollback (si le système le permet) ou un chroot depuis une clé live permet de revenir en arrière."}
    ],
    faq:[
      {q:"Pourquoi un SSD NVMe est-il exigé ?", a:"L'installeur officiel de SteamOS ne prend en charge que les disques NVMe ; un SSD SATA classique n'est pas reconnu comme cible d'installation, contrairement à la plupart des distributions Linux."},
      {q:"Peut-on installer SteamOS sur n'importe quel PC gaming ?", a:"Le support matériel reste plus étroit que sous Windows : les GPU AMD récents (RDNA 2+) sont les mieux pris en charge, Nvidia et le Wi-Fi de certains portables posent parfois problème."}
    ]
  },
  {
    id:"garuda", name:"Garuda Linux", version:"rolling", cat:"gaming", color:"#FF4C60", icon:"garudalinux",
    tag:"Arch dopé pour le gaming. BTRFS + snapshots, look néon spectaculaire.",
    site:"garudalinux.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Arch",
    req:{ram:"8 Go min. (16 Go conseillés)", disk:"64 Go min., bien plus selon la bibliothèque de jeux", cpu:"CPU récent + GPU dédié compatible"},
    steps:[
      {t:"Télécharger l'ISO", d:"garudalinux.org → édition Dragonized (KDE) recommandée."},
      {t:"Graver la clé", d:"balenaEtcher ou Ventoy."},
      {t:"Live + Calamares", d:"Booter le live puis lancer l'installeur."},
      {t:"Garuda Assistant", d:"Outil maison pour maintenance, snapshots et tweaks gaming."},
      {t:"Mettre à jour", d:"Utiliser le wrapper garuda-update.", code:"garuda-update"}
    ],
    alt:["steamos","cachyos","chimeraos"],
    errors:[
      {q:"La manette n'est pas reconnue",a:"Certaines manettes (notamment Xbox récentes en Bluetooth) demandent un pilote ou un appairage manuel au premier lancement. Branche-la en filaire pour la configuration initiale, plus fiable."},
      {q:"Les jeux/ROMs n'apparaissent pas",a:"Les BIOS des consoles émulées ne sont jamais fournis (question de droits) et doivent être ajoutés manuellement dans le bon dossier ; sans eux, plusieurs émulateurs refusent de lancer un jeu même valide."},
      {q:"Écran noir après une mise à jour des pilotes GPU",a:"Sur les systèmes basés Arch avec pilotes propriétaires NVIDIA, une mise à jour de kernel sans régénération de l'initramfs peut casser le démarrage graphique. Un rollback (si le système le permet) ou un chroot depuis une clé live permet de revenir en arrière."}
    ],
    faq:[
      {q:"Tous les jeux Windows fonctionnent-ils ?", a:"La compatibilité dépend de la couche de traduction utilisée (Proton, Wine) : la plupart des jeux populaires fonctionnent, mais certains titres avec anti-triche noyau restent incompatibles."},
      {q:"Faut-il une carte graphique dédiée ?", a:"Non obligatoire, mais fortement recommandée pour de bonnes performances en jeu."}
    ]
  },
  {
    id:"nobara", name:"Nobara", version:"40", cat:"gaming", color:"#8657D8", icon:"nobaralinux",
    tag:"Fedora modifiée par GloriousEggroll (proton-ge). Patches gaming et codecs prêts à l'emploi.",
    site:"nobaraproject.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Facile", base:"Fedora",
    req:{ram:"8 Go min. (16 Go conseillés)", disk:"64 Go min., bien plus selon la bibliothèque de jeux", cpu:"CPU récent + GPU dédié compatible"},
    steps:[
      {t:"Télécharger l'ISO", d:"nobaraproject.org → édition GNOME ou KDE, variante standard ou gaming pur."},
      {t:"Graver la clé", d:"Fedora Media Writer ou balenaEtcher."},
      {t:"Live + install", d:"Booter et lancer l'installeur Anaconda modifié."},
      {t:"Nobara Welcome", d:"Utiliser l'app de bienvenue pour appliquer les correctifs GPU/codecs."},
      {t:"Proton-GE", d:"Vérifier que Proton-GE est déjà intégré à Steam pour la compatibilité Windows."}
    ],
    alt:["garuda","bazzite","steamos"],
    errors:[
      {q:"La manette n'est pas reconnue",a:"Certaines manettes (notamment Xbox récentes en Bluetooth) demandent un pilote ou un appairage manuel au premier lancement. Branche-la en filaire pour la configuration initiale, plus fiable."},
      {q:"Les jeux/ROMs n'apparaissent pas",a:"Les BIOS des consoles émulées ne sont jamais fournis (question de droits) et doivent être ajoutés manuellement dans le bon dossier ; sans eux, plusieurs émulateurs refusent de lancer un jeu même valide."},
      {q:"Écran noir après une mise à jour des pilotes GPU",a:"Sur les systèmes basés Arch avec pilotes propriétaires NVIDIA, une mise à jour de kernel sans régénération de l'initramfs peut casser le démarrage graphique. Un rollback (si le système le permet) ou un chroot depuis une clé live permet de revenir en arrière."}
    ],
    faq:[
      {q:"Tous les jeux Windows fonctionnent-ils ?", a:"La compatibilité dépend de la couche de traduction utilisée (Proton, Wine) : la plupart des jeux populaires fonctionnent, mais certains titres avec anti-triche noyau restent incompatibles."},
      {q:"Faut-il une carte graphique dédiée ?", a:"Non obligatoire, mais fortement recommandée pour de bonnes performances en jeu."}
    ]
  },
  {
    id:"bazzite", name:"Bazzite", version:"40", cat:"gaming", color:"#5A4FCF", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="#5A4FCF"><path d="M12 2 4 9l8 13 8-13-8-7zm0 2.7L17.8 9H6.2L12 4.7zM6 11h5.1l-1.4 8.4L6 11zm7 8.4L11.6 11H16L13 19.4z"/></svg>',
    tag:"Fedora Atomic (immuable) façon SteamOS. Idéal pour Steam Deck, handhelds et salon.",
    site:"bazzite.gg", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Fedora Atomic",
    req:{ram:"8 Go min. (16 Go conseillés)", disk:"64 Go min., bien plus selon la bibliothèque de jeux", cpu:"CPU récent + GPU dédié compatible"},
    steps:[
      {t:"Télécharger l'image", d:"bazzite.gg → choisir la variante (Deck, desktop KDE/GNOME, HTPC)."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Installer", d:"Live ISO puis installeur graphique type GNOME/KDE."},
      {t:"Système immuable", d:"Comprendre rpm-ostree : les mises à jour se font par image, pas paquet par paquet.", code:"rpm-ostree upgrade"},
      {t:"ujust", d:"Utiliser les commandes ujust pour activer des réglages gaming préconfigurés.", code:"ujust --list"}
    ],
    alt:["nobara","cachyos","garuda"],
    errors:[
      {q:"La manette n'est pas reconnue",a:"Certaines manettes (notamment Xbox récentes en Bluetooth) demandent un pilote ou un appairage manuel au premier lancement. Branche-la en filaire pour la configuration initiale, plus fiable."},
      {q:"Les jeux/ROMs n'apparaissent pas",a:"Les BIOS des consoles émulées ne sont jamais fournis (question de droits) et doivent être ajoutés manuellement dans le bon dossier ; sans eux, plusieurs émulateurs refusent de lancer un jeu même valide."},
      {q:"Écran noir après une mise à jour des pilotes GPU",a:"Sur les systèmes basés Arch avec pilotes propriétaires NVIDIA, une mise à jour de kernel sans régénération de l'initramfs peut casser le démarrage graphique. Un rollback (si le système le permet) ou un chroot depuis une clé live permet de revenir en arrière."}
    ],
    faq:[
      {q:"Tous les jeux Windows fonctionnent-ils ?", a:"La compatibilité dépend de la couche de traduction utilisée (Proton, Wine) : la plupart des jeux populaires fonctionnent, mais certains titres avec anti-triche noyau restent incompatibles."},
      {q:"Faut-il une carte graphique dédiée ?", a:"Non obligatoire, mais fortement recommandée pour de bonnes performances en jeu."}
    ]
  },
  {
    id:"cachyos", name:"CachyOS", version:"rolling", cat:"gaming", color:"#00E5B0", icon:"cachyos",
    tag:"Arch optimisée à l'extrême : noyau BORE, paquets x86-64-v3/v4. Perf pure.",
    site:"cachyos.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Arch",
    req:{ram:"8 Go min. (16 Go conseillés)", disk:"64 Go min., bien plus selon la bibliothèque de jeux", cpu:"CPU récent + GPU dédié compatible"},
    steps:[
      {t:"Télécharger l'ISO", d:"cachyos.org → ISO Desktop."},
      {t:"Graver la clé", d:"balenaEtcher ou Ventoy."},
      {t:"Installeur", d:"Choisir le bureau et le noyau optimisé (cachyos-bore)."},
      {t:"Détection CPU", d:"L'installeur active automatiquement les dépôts v3/v4 selon ton CPU."},
      {t:"Mettre à jour", d:"Système à jour via pacman.", code:"sudo pacman -Syu"}
    ],
    alt:["garuda","steamos","chimeraos"],
    errors:[
      {q:"La manette n'est pas reconnue",a:"Certaines manettes (notamment Xbox récentes en Bluetooth) demandent un pilote ou un appairage manuel au premier lancement. Branche-la en filaire pour la configuration initiale, plus fiable."},
      {q:"Les jeux/ROMs n'apparaissent pas",a:"Les BIOS des consoles émulées ne sont jamais fournis (question de droits) et doivent être ajoutés manuellement dans le bon dossier ; sans eux, plusieurs émulateurs refusent de lancer un jeu même valide."},
      {q:"Écran noir après une mise à jour des pilotes GPU",a:"Sur les systèmes basés Arch avec pilotes propriétaires NVIDIA, une mise à jour de kernel sans régénération de l'initramfs peut casser le démarrage graphique. Un rollback (si le système le permet) ou un chroot depuis une clé live permet de revenir en arrière."}
    ],
    faq:[
      {q:"Tous les jeux Windows fonctionnent-ils ?", a:"La compatibilité dépend de la couche de traduction utilisée (Proton, Wine) : la plupart des jeux populaires fonctionnent, mais certains titres avec anti-triche noyau restent incompatibles."},
      {q:"Faut-il une carte graphique dédiée ?", a:"Non obligatoire, mais fortement recommandée pour de bonnes performances en jeu."},
      {q:"Quelle erreur fréquente faut-il éviter après l'installation ?", a:"Comme sur Arch, ne jamais faire une mise à jour partielle (installer un seul paquet sans synchroniser tout le système) : cela peut casser des dépendances. Toujours utiliser une mise à jour complète via pacman."}
    ]
  },
  /* ===================== SERVEUR ===================== */
  {
    id:"rocky", name:"Rocky Linux", version:"9.x", cat:"server", color:"#10B981", icon:"rockylinux",
    tag:"Le successeur de CentOS. Binaire-compatible RHEL, gratuit et communautaire.",
    site:"rockylinux.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"RHEL",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64 (physique ou VM)"},
    steps:[
      {t:"Télécharger l'ISO", d:"rockylinux.org → DVD ou Minimal ISO."},
      {t:"Graver la clé", d:"dd ou balenaEtcher."},
      {t:"Anaconda", d:"Définir disque, réseau, mot de passe root et utilisateur."},
      {t:"Sélection logicielle", d:"Serveur minimal, avec GUI, station de travail…"},
      {t:"Post-install", d:"Mettre à jour et activer EPEL au besoin.", code:"sudo dnf install epel-release && sudo dnf update"}
    ],
    alt:["almalinux","centos","oraclelinux"],
    errors:[
      {q:"Pas d'écran connecté / installation headless",a:"La plupart de ces systèmes proposent un mode d'installation automatisée par fichier de configuration (kickstart, cloud-init, preseed) plutôt que l'assistant graphique — vérifie la documentation officielle avant de brancher un écran inutilement."},
      {q:"Pas d'IP après le premier démarrage",a:"Le réseau par défaut est souvent en DHCP sur la première interface détectée seulement. Si plusieurs cartes réseau sont présentes, vérifie laquelle a reçu une adresse via la console locale avant de chercher à s'y connecter à distance."},
      {q:"Configuration RAID/ZFS refusée à l'installation",a:"Un disque ayant déjà une table de partition ou des métadonnées RAID d'une installation précédente peut bloquer l'assistant. Efface les disques cibles via la console avant de relancer l'installation."}
    ],
    faq:[
      {q:"Peut-on l'administrer sans interface graphique ?", a:"Oui, l'essentiel de l'administration se fait en ligne de commande via SSH, ce qui est d'ailleurs la pratique recommandée en production."},
      {q:"Quelle fréquence de mises à jour de sécurité ?", a:"Cela dépend du cycle de support choisi ; privilégier une version LTS/stable pour un serveur en production."}
    ]
  },
  {
    id:"almalinux", name:"AlmaLinux", version:"9.x", cat:"server", color:"#1C7ED6", icon:"almalinux",
    tag:"Clone RHEL 1:1 par CloudLinux. Stable, gratuit, orienté production.",
    site:"almalinux.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"RHEL",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64 (physique ou VM)"},
    steps:[
      {t:"Télécharger l'ISO", d:"almalinux.org → DVD ou Minimal."},
      {t:"Graver la clé", d:"dd ou balenaEtcher."},
      {t:"Anaconda", d:"Configurer disque, réseau, root et utilisateur."},
      {t:"Rôle serveur", d:"Choisir un profil (serveur minimal, web, virtualisation)."},
      {t:"Post-install", d:"Mettre à jour et sécuriser SSH.", code:"sudo dnf update && sudo systemctl enable sshd"}
    ],
    alt:["rocky","centos","oraclelinux"],
    errors:[
      {q:"Pas d'écran connecté / installation headless",a:"La plupart de ces systèmes proposent un mode d'installation automatisée par fichier de configuration (kickstart, cloud-init, preseed) plutôt que l'assistant graphique — vérifie la documentation officielle avant de brancher un écran inutilement."},
      {q:"Pas d'IP après le premier démarrage",a:"Le réseau par défaut est souvent en DHCP sur la première interface détectée seulement. Si plusieurs cartes réseau sont présentes, vérifie laquelle a reçu une adresse via la console locale avant de chercher à s'y connecter à distance."},
      {q:"Configuration RAID/ZFS refusée à l'installation",a:"Un disque ayant déjà une table de partition ou des métadonnées RAID d'une installation précédente peut bloquer l'assistant. Efface les disques cibles via la console avant de relancer l'installation."}
    ],
    faq:[
      {q:"Peut-on l'administrer sans interface graphique ?", a:"Oui, l'essentiel de l'administration se fait en ligne de commande via SSH, ce qui est d'ailleurs la pratique recommandée en production."},
      {q:"Quelle fréquence de mises à jour de sécurité ?", a:"Cela dépend du cycle de support choisi ; privilégier une version LTS/stable pour un serveur en production."}
    ]
  },
  {
    id:"centos", name:"CentOS Stream", version:"9", cat:"server", color:"#A55CC9", icon:"centos",
    tag:"L'amont continu de RHEL. Pour tester ce qui arrive dans Red Hat Enterprise.",
    site:"centos.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"RHEL",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64 (physique ou VM)"},
    steps:[
      {t:"Télécharger l'ISO", d:"centos.org → CentOS Stream 9, DVD ou boot."},
      {t:"Graver la clé", d:"dd ou balenaEtcher."},
      {t:"Anaconda", d:"Réseau, disque, root, utilisateur."},
      {t:"Dépôts", d:"Activer CRB et EPEL pour plus de paquets.", code:"sudo dnf config-manager --set-enabled crb"},
      {t:"Mettre à jour", d:"Système rolling en amont de RHEL.", code:"sudo dnf update"}
    ],
    alt:["almalinux","rocky","oraclelinux"],
    errors:[
      {q:"Pas d'écran connecté / installation headless",a:"La plupart de ces systèmes proposent un mode d'installation automatisée par fichier de configuration (kickstart, cloud-init, preseed) plutôt que l'assistant graphique — vérifie la documentation officielle avant de brancher un écran inutilement."},
      {q:"Pas d'IP après le premier démarrage",a:"Le réseau par défaut est souvent en DHCP sur la première interface détectée seulement. Si plusieurs cartes réseau sont présentes, vérifie laquelle a reçu une adresse via la console locale avant de chercher à s'y connecter à distance."},
      {q:"Configuration RAID/ZFS refusée à l'installation",a:"Un disque ayant déjà une table de partition ou des métadonnées RAID d'une installation précédente peut bloquer l'assistant. Efface les disques cibles via la console avant de relancer l'installation."}
    ],
    faq:[
      {q:"Peut-on l'administrer sans interface graphique ?", a:"Oui, l'essentiel de l'administration se fait en ligne de commande via SSH, ce qui est d'ailleurs la pratique recommandée en production."},
      {q:"Quelle fréquence de mises à jour de sécurité ?", a:"Cela dépend du cycle de support choisi ; privilégier une version LTS/stable pour un serveur en production."}
    ]
  },
  {
    id:"ubuntuserver", name:"Ubuntu Server", version:"24.04 LTS", cat:"server", color:"#E95420", icon:"ubuntu",
    tag:"Sans interface graphique, pour héberger sites, bases de données et conteneurs.",
    site:"ubuntu.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64 (physique ou VM)"},
    steps:[
      {t:"Télécharger l'ISO", d:"ubuntu.com/download/server → Server 24.04 LTS."},
      {t:"Graver la clé", d:"dd ou Rufus."},
      {t:"Installeur Subiquity", d:"Installeur texte : réseau, stockage (LVM), profil."},
      {t:"OpenSSH", d:"Cocher l'installation d'OpenSSH pour l'accès distant immédiat."},
      {t:"Snaps serveur", d:"Installer des services clés en main (nginx, docker) via snap.", code:"sudo snap install docker"}
    ],
    alt:["proxmox","truenas","openmediavault"],
    errors:[
      {q:"Pas d'écran connecté / installation headless",a:"La plupart de ces systèmes proposent un mode d'installation automatisée par fichier de configuration (kickstart, cloud-init, preseed) plutôt que l'assistant graphique — vérifie la documentation officielle avant de brancher un écran inutilement."},
      {q:"Pas d'IP après le premier démarrage",a:"Le réseau par défaut est souvent en DHCP sur la première interface détectée seulement. Si plusieurs cartes réseau sont présentes, vérifie laquelle a reçu une adresse via la console locale avant de chercher à s'y connecter à distance."},
      {q:"Configuration RAID/ZFS refusée à l'installation",a:"Un disque ayant déjà une table de partition ou des métadonnées RAID d'une installation précédente peut bloquer l'assistant. Efface les disques cibles via la console avant de relancer l'installation."}
    ],
    faq:[
      {q:"Peut-on l'administrer sans interface graphique ?", a:"Oui, l'essentiel de l'administration se fait en ligne de commande via SSH, ce qui est d'ailleurs la pratique recommandée en production."},
      {q:"Quelle fréquence de mises à jour de sécurité ?", a:"Cela dépend du cycle de support choisi ; privilégier une version LTS/stable pour un serveur en production."}
    ]
  },
  {
    id:"oraclelinux", name:"Oracle Linux", version:"9", cat:"server", color:"#F80000", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#F80000" stroke-width="3"><ellipse cx="12" cy="12" rx="8" ry="5.5"/></svg>',
    tag:"Clone RHEL gratuit par Oracle. Kernel UEK optionnel, support entreprise disponible.",
    site:"oracle.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"RHEL",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64 (physique ou VM)"},
    steps:[
      {t:"Télécharger l'ISO", d:"oracle.com/linux/downloads → image complète ou boot minimal."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Anaconda", d:"Installeur graphique identique à RHEL/CentOS."},
      {t:"Choisir le kernel", d:"Option Unbreakable Enterprise Kernel (UEK) ou Red Hat Compatible Kernel."},
      {t:"dnf", d:"Activer les dépôts et mettre à jour.", code:"sudo dnf update -y"}
    ],
    alt:["centos","almalinux","rocky"],
    errors:[
      {q:"Pas d'écran connecté / installation headless",a:"La plupart de ces systèmes proposent un mode d'installation automatisée par fichier de configuration (kickstart, cloud-init, preseed) plutôt que l'assistant graphique — vérifie la documentation officielle avant de brancher un écran inutilement."},
      {q:"Pas d'IP après le premier démarrage",a:"Le réseau par défaut est souvent en DHCP sur la première interface détectée seulement. Si plusieurs cartes réseau sont présentes, vérifie laquelle a reçu une adresse via la console locale avant de chercher à s'y connecter à distance."},
      {q:"Configuration RAID/ZFS refusée à l'installation",a:"Un disque ayant déjà une table de partition ou des métadonnées RAID d'une installation précédente peut bloquer l'assistant. Efface les disques cibles via la console avant de relancer l'installation."}
    ],
    faq:[
      {q:"Peut-on l'administrer sans interface graphique ?", a:"Oui, l'essentiel de l'administration se fait en ligne de commande via SSH, ce qui est d'ailleurs la pratique recommandée en production."},
      {q:"Quelle fréquence de mises à jour de sécurité ?", a:"Cela dépend du cycle de support choisi ; privilégier une version LTS/stable pour un serveur en production."}
    ]
  },
  {
    id:"windowsserver", name:"Windows Server 2022", version:"21H2", cat:"server", color:"#00A4EF", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="#00A4EF"><path d="M2.5 2.5h8.5v8.5H2.5zM13 2.5h8.5v8.5H13zM2.5 13h8.5v3.2H2.5zM13 13h8.5v3.2H13zM2.5 18h8.5v3.5H2.5zM13 18h8.5v3.5H13z"/></svg>',
    tag:"Le serveur Microsoft : Active Directory, Hyper-V, IIS. Standard en entreprise.",
    site:"microsoft.com", license:"Propriétaire", popular:false, isNew:false,
    time:"~20 min", diff:"Intermédiaire", base:"Windows NT",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64 (physique ou VM)"},
    steps:[
      {t:"Télécharger l'ISO", d:"microsoft.com/evalcenter → évaluation 180 jours gratuite."},
      {t:"Créer la clé bootable", d:"Rufus en GPT/UEFI, ou monter l'ISO directement en VM."},
      {t:"Choisir l'édition", d:"Desktop Experience (avec GUI) ou Server Core (sans interface)."},
      {t:"Installer", d:"Assistant standard : partition, mot de passe administrateur local."},
      {t:"Rôles serveur", d:"Ajouter les rôles via le Gestionnaire de serveur (AD DS, DNS, DHCP, IIS…)."}
    ],
    alt:["winserver2025","oraclelinux","proxmox"],
    errors:[
      {q:"Secure Boot ou TPM 2.0 bloque l'installation",a:"Vérifie l'activation du TPM 2.0 et de Secure Boot dans le BIOS/UEFI avant de démarrer sur la clé. Si le PC est trop ancien, un contournement existe via le registre ou une option dédiée de Rufus, mais Microsoft ne garantit alors ni les mises à jour ni le support."},
      {q:"La clé USB n'apparaît pas dans le menu de boot",a:"Le disque doit être partitionné en GPT (pas MBR) et le mode UEFI activé dans le BIOS, CSM/Legacy désactivé. Recrée la clé avec Rufus en confirmant bien le schéma GPT/UEFI."},
      {q:"Aucun disque détecté pendant l'installation",a:"Certains contrôleurs de stockage (NVMe RAID, Intel VMD) nécessitent un pilote supplémentaire. Bascule le mode SATA/RAID du BIOS en AHCI ou charge le pilote via « Charger un pilote » dans l'assistant."}
    ],
    faq:[
      {q:"Peut-on l'administrer sans interface graphique ?", a:"Oui, l'essentiel de l'administration se fait en ligne de commande via SSH, ce qui est d'ailleurs la pratique recommandée en production."},
      {q:"Quelle fréquence de mises à jour de sécurité ?", a:"Cela dépend du cycle de support choisi ; privilégier une version LTS/stable pour un serveur en production."}
    ]
  },
  {
    id:"proxmox", name:"Proxmox VE", version:"9.x", cat:"server", color:"#E57000", icon:"proxmox",
    tag:"Plateforme de virtualisation. KVM + LXC gérés via une interface web.",
    site:"proxmox.com", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~20 min", diff:"Avancé", base:"Debian",
    req:{ram:"2 Go min. pour le système seul (8 Go+ conseillés en production, plus la RAM allouée aux VM)", disk:"32 Go min. sur SSD, bien plus selon les VM/conteneurs hébergés", cpu:"x86_64 avec virtualisation matérielle (Intel VT-x/AMD-V)"},
    steps:[
      {t:"Télécharger l'ISO", d:"proxmox.com → Proxmox VE ISO Installer."},
      {t:"Graver la clé", d:"dd (mode image obligatoire) ou balenaEtcher."},
      {t:"Installeur", d:"Choisir le disque (ZFS possible), réseau statique conseillé."},
      {t:"Accès web", d:"Se connecter à l'interface d'administration.", code:"https://IP-DU-SERVEUR:8006"},
      {t:"Créer une VM/CT", d:"Uploader une ISO ou un template LXC puis déployer."}
    ],
    alt:["truenas","ubuntuserver","openmediavault"],
    errors:[
      {q:"Pas d'écran connecté / installation headless",a:"La plupart de ces systèmes proposent un mode d'installation automatisée par fichier de configuration (kickstart, cloud-init, preseed) plutôt que l'assistant graphique — vérifie la documentation officielle avant de brancher un écran inutilement."},
      {q:"Pas d'IP après le premier démarrage",a:"Le réseau par défaut est souvent en DHCP sur la première interface détectée seulement. Si plusieurs cartes réseau sont présentes, vérifie laquelle a reçu une adresse via la console locale avant de chercher à s'y connecter à distance."},
      {q:"Configuration RAID/ZFS refusée à l'installation",a:"Un disque ayant déjà une table de partition ou des métadonnées RAID d'une installation précédente peut bloquer l'assistant. Efface les disques cibles via la console avant de relancer l'installation."}
    ],
    faq:[
      {q:"Quelle est la différence entre une VM et un conteneur LXC sous Proxmox ?", a:"Une VM (KVM) émule un matériel complet et peut faire tourner n'importe quel OS invité, isolation maximale mais plus gourmande ; un conteneur LXC partage le noyau de l'hôte, démarre quasi instantanément et consomme beaucoup moins de RAM, mais reste limité à des invités Linux."},
      {q:"Le VT-x/AMD-V est-il vraiment indispensable ?", a:"Oui pour les VM KVM : sans ce flag de virtualisation matérielle activé dans le BIOS/UEFI, seules les fonctions de conteneur LXC restent utilisables."},
      {q:"Pourquoi mes mises à jour échouent-elles avec une erreur d'abonnement ?", a:"Par défaut Proxmox pointe vers le dépôt Enterprise qui nécessite une licence payante. Sans abonnement, il faut basculer sur le dépôt gratuit « no-subscription » dans les sources APT."}
    ]
  },
  {
    id:"truenas", name:"TrueNAS Scale", version:"25.10 Goldeye", cat:"server", color:"#0095D5", icon:"truenas",
    tag:"NAS sous stéroïdes. ZFS, conteneurs, VMs, réplication. Debian sous le capot.",
    site:"truenas.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~20 min", diff:"Avancé", base:"Debian",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64 (physique ou VM)"},
    steps:[
      {t:"Télécharger l'ISO", d:"truenas.com/download-truenas-scale → dernière ISO Scale."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Installeur", d:"Menu texte : choisir le disque d'installation (dédié, pas de données)."},
      {t:"Configuration IP", d:"Définir une IP statique et noter l'URL d'accès web."},
      {t:"Créer un pool ZFS", d:"Interface web → Storage → créer un pool RAID-Z sur les disques data.", code:"https://IP-TRUENAS"}
    ],
    alt:["proxmox","ubuntuserver","openmediavault"],
    errors:[
      {q:"Pas d'écran connecté / installation headless",a:"La plupart de ces systèmes proposent un mode d'installation automatisée par fichier de configuration (kickstart, cloud-init, preseed) plutôt que l'assistant graphique — vérifie la documentation officielle avant de brancher un écran inutilement."},
      {q:"Pas d'IP après le premier démarrage",a:"Le réseau par défaut est souvent en DHCP sur la première interface détectée seulement. Si plusieurs cartes réseau sont présentes, vérifie laquelle a reçu une adresse via la console locale avant de chercher à s'y connecter à distance."},
      {q:"Configuration RAID/ZFS refusée à l'installation",a:"Un disque ayant déjà une table de partition ou des métadonnées RAID d'une installation précédente peut bloquer l'assistant. Efface les disques cibles via la console avant de relancer l'installation."}
    ],
    faq:[
      {q:"Peut-on l'administrer sans interface graphique ?", a:"Oui, l'essentiel de l'administration se fait en ligne de commande via SSH, ce qui est d'ailleurs la pratique recommandée en production."},
      {q:"Quelle fréquence de mises à jour de sécurité ?", a:"Cela dépend du cycle de support choisi ; privilégier une version LTS/stable pour un serveur en production."},
      {q:"Puis-je installer TrueNAS sur un des disques qui serviront au stockage ?", a:"Non : le disque de démarrage doit être dédié et séparé des disques du pool de stockage, sous peine de perdre l'usage de ce disque pour le RAID/ZFS."}
    ]
  },
  /* ===================== SÉCURITÉ ===================== */
  {
    id:"kali", name:"Kali Linux", version:"2024.x", cat:"security", color:"#5C8DBC", icon:"kalilinux",
    tag:"L'arsenal du pentester : plus de 600 outils de sécurité préinstallés.",
    site:"kali.org", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"2 Go min. (4-8 Go conseillés avec l'environnement Xfce par défaut)", disk:"20 Go min. (officiel Kali) ; prévoir plus pour une clé USB persistante", cpu:"x86_64 exclusivement (le 32 bits n'est plus supporté depuis 2020)"},
    steps:[
      {t:"Télécharger l'ISO", d:"kali.org/get-kali → Installer Images (64-bit). Vérifier l'empreinte."},
      {t:"Graver la clé", d:"balenaEtcher ou dd. Kali propose aussi une version « Live »."},
      {t:"Démarrer", d:"Choisir Graphical Install ou Live selon l'usage."},
      {t:"Chiffrer (recommandé)", d:"Activer le LUKS full-disk encryption pour protéger les données."},
      {t:"Post-install", d:"Mettre à jour et installer les métapaquets voulus.", code:"sudo apt update && sudo apt full-upgrade"}
    ],
    alt:["tails","parrot","whonix"],
    errors:[
      {q:"Les modifications disparaissent après redémarrage",a:"En mode live sans persistance activée, tout est perdu au redémarrage par conception. Configure une partition de persistance chiffrée à la création de la clé si tu veux conserver des données."},
      {q:"Le système ne démarre pas en machine virtuelle",a:"Certains de ces systèmes nécessitent la virtualisation matérielle (VT-x/AMD-V, et VT-d pour l'isolation complète des périphériques) activée dans le BIOS — sans ça, l'installation échoue silencieusement."},
      {q:"Tor met un temps anormalement long à se connecter",a:"Un réseau bridé (Wi-Fi d'entreprise, hôtel) bloque parfois les nœuds Tor par défaut. Utilise les « ponts » (bridges) proposés dans l'assistant de connexion au lieu de la connexion directe."}
    ],
    faq:[
      {q:"Est-ce légal de l'utiliser ?", a:"Oui, l'outil lui-même est légal. C'est l'usage qui est encadré : ne l'utiliser que sur des systèmes dont on est propriétaire ou avec une autorisation écrite explicite."},
      {q:"Faut-il l'installer ou peut-on rester en mode Live ?", a:"Le mode Live suffit pour la plupart des usages ponctuels ; une installation persistante est utile pour un usage régulier et la sauvegarde des outils/configurations."}
    ]
  },
  {
    id:"tails", name:"Tails", version:"6.x", cat:"security", color:"#8E64C8", icon:"tails",
    tag:"L'OS de l'anonymat. Amnésique, tout passe par Tor. Utilisé par les journalistes.",
    site:"tails.net", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"8-32 Go pour une clé USB persistante", cpu:"x86_64 (VM recommandée pour l'isolement)"},
    steps:[
      {t:"Télécharger l'image USB", d:"tails.net → image .img. Vérifier la signature OpenPGP."},
      {t:"Graver la clé", d:"balenaEtcher ou GNOME Disks. Tails vit sur la clé, pas sur le disque."},
      {t:"Démarrer sur Tails", d:"Booter la clé : rien n'est écrit sur l'ordinateur hôte."},
      {t:"Stockage persistant", d:"Créer un volume persistant chiffré si besoin de garder des fichiers."},
      {t:"Naviguer via Tor", d:"Tout le trafic passe automatiquement par le réseau Tor."}
    ],
    alt:["kali","parrot","whonix"],
    errors:[
      {q:"Les modifications disparaissent après redémarrage",a:"En mode live sans persistance activée, tout est perdu au redémarrage par conception. Configure une partition de persistance chiffrée à la création de la clé si tu veux conserver des données."},
      {q:"Le système ne démarre pas en machine virtuelle",a:"Certains de ces systèmes nécessitent la virtualisation matérielle (VT-x/AMD-V, et VT-d pour l'isolation complète des périphériques) activée dans le BIOS — sans ça, l'installation échoue silencieusement."},
      {q:"Tor met un temps anormalement long à se connecter",a:"Un réseau bridé (Wi-Fi d'entreprise, hôtel) bloque parfois les nœuds Tor par défaut. Utilise les « ponts » (bridges) proposés dans l'assistant de connexion au lieu de la connexion directe."}
    ],
    faq:[
      {q:"Tails garde-t-il une trace de ce que j'ai fait après extinction ?", a:"Non, sauf si un volume persistant chiffré a été créé : par défaut, tout est effacé de la RAM à l'arrêt et rien n'est jamais écrit sur le disque de l'ordinateur hôte."},
      {q:"Tor ralentit-il beaucoup la navigation ?", a:"Oui, sensiblement : le trafic passe par plusieurs relais chiffrés dans le monde, ce qui augmente la latence par rapport à une connexion directe."}
    ]
  },
  {
    id:"parrot", name:"Parrot OS", version:"6.x", cat:"security", color:"#00E5CE", icon:"parrotsecurity",
    tag:"L'alternative à Kali. Pentest + confidentialité + dev, sur base Debian testing.",
    site:"parrotsec.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"8-32 Go pour une clé USB persistante", cpu:"x86_64 (VM recommandée pour l'isolement)"},
    steps:[
      {t:"Télécharger l'ISO", d:"parrotsec.org → Security Edition (pentest) ou Home."},
      {t:"Graver la clé", d:"balenaEtcher ou Ventoy."},
      {t:"Live ou install", d:"Session live puis Calamares pour installer."},
      {t:"AnonSurf", d:"Outil intégré pour router tout le trafic via Tor.", code:"sudo anonsurf start"},
      {t:"Mise à jour", d:"Rolling stable, mettre à jour régulièrement.", code:"sudo parrot-upgrade"}
    ],
    alt:["tails","kali","whonix"],
    errors:[
      {q:"Les modifications disparaissent après redémarrage",a:"En mode live sans persistance activée, tout est perdu au redémarrage par conception. Configure une partition de persistance chiffrée à la création de la clé si tu veux conserver des données."},
      {q:"Le système ne démarre pas en machine virtuelle",a:"Certains de ces systèmes nécessitent la virtualisation matérielle (VT-x/AMD-V, et VT-d pour l'isolation complète des périphériques) activée dans le BIOS — sans ça, l'installation échoue silencieusement."},
      {q:"Tor met un temps anormalement long à se connecter",a:"Un réseau bridé (Wi-Fi d'entreprise, hôtel) bloque parfois les nœuds Tor par défaut. Utilise les « ponts » (bridges) proposés dans l'assistant de connexion au lieu de la connexion directe."}
    ],
    faq:[
      {q:"Est-ce légal de l'utiliser ?", a:"Oui, l'outil lui-même est légal. C'est l'usage qui est encadré : ne l'utiliser que sur des systèmes dont on est propriétaire ou avec une autorisation écrite explicite."},
      {q:"Faut-il l'installer ou peut-on rester en mode Live ?", a:"Le mode Live suffit pour la plupart des usages ponctuels ; une installation persistante est utile pour un usage régulier et la sauvegarde des outils/configurations."}
    ]
  },
  {
    id:"blackarch", name:"BlackArch", version:"rolling", cat:"security", color:"#1793D1", icon:"archlinux",
    tag:"2800+ outils de pentest sur base Arch. Le rasoir des professionnels.",
    site:"blackarch.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~40 min", diff:"Expert", base:"Arch",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"8-32 Go pour une clé USB persistante", cpu:"x86_64 (VM recommandée pour l'isolement)"},
    steps:[
      {t:"Télécharger l'ISO", d:"blackarch.org → Full ISO (~20 Go) ou Slim ISO."},
      {t:"Graver la clé", d:"dd obligatoire pour l'image hybride.", code:"sudo dd if=blackarch.iso of=/dev/sdX bs=4M"},
      {t:"Installeur texte", d:"Booter puis se connecter root/blackarch et lancer l'installeur.", code:"blackarch-install"},
      {t:"Choisir les groupes", d:"Sélectionner les catégories d'outils : webapp, forensic, crypto…"},
      {t:"Mise à jour", d:"Mise à jour Arch + BlackArch.", code:"sudo pacman -Syu"}
    ],
    alt:["athenaos","parrot","qubes"],
    errors:[
      {q:"Les modifications disparaissent après redémarrage",a:"En mode live sans persistance activée, tout est perdu au redémarrage par conception. Configure une partition de persistance chiffrée à la création de la clé si tu veux conserver des données."},
      {q:"Le système ne démarre pas en machine virtuelle",a:"Certains de ces systèmes nécessitent la virtualisation matérielle (VT-x/AMD-V, et VT-d pour l'isolation complète des périphériques) activée dans le BIOS — sans ça, l'installation échoue silencieusement."},
      {q:"Tor met un temps anormalement long à se connecter",a:"Un réseau bridé (Wi-Fi d'entreprise, hôtel) bloque parfois les nœuds Tor par défaut. Utilise les « ponts » (bridges) proposés dans l'assistant de connexion au lieu de la connexion directe."}
    ],
    faq:[
      {q:"Est-ce légal de l'utiliser ?", a:"Oui, l'outil lui-même est légal. C'est l'usage qui est encadré : ne l'utiliser que sur des systèmes dont on est propriétaire ou avec une autorisation écrite explicite."},
      {q:"Faut-il l'installer ou peut-on rester en mode Live ?", a:"Le mode Live suffit pour la plupart des usages ponctuels ; une installation persistante est utile pour un usage régulier et la sauvegarde des outils/configurations."}
    ]
  },
  {
    id:"qubes", name:"Qubes OS", version:"4.2", cat:"security", color:"#3874D8", icon:"qubesos",
    tag:"Sécurité par compartimentation. Chaque tâche dans une VM Xen isolée. Snowden approuve.",
    site:"qubes-os.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~35 min", diff:"Expert", base:"Fedora",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"8-32 Go pour une clé USB persistante", cpu:"x86_64 (VM recommandée pour l'isolement)"},
    steps:[
      {t:"Télécharger l'ISO", d:"qubes-os.org → dernière version stable. Vérifier la signature PGP."},
      {t:"Vérifier le matériel", d:"Consulter la HCL : VT-x/AMD-V + VT-d/AMD-Vi obligatoires."},
      {t:"Graver la clé", d:"dd uniquement, pas Rufus (image hybride).", code:"sudo dd if=Qubes-R4.2.iso of=/dev/sdX bs=1M"},
      {t:"Anaconda modifié", d:"Installeur graphique : chiffrement LUKS activé par défaut."},
      {t:"Premier boot", d:"Créer les qubes système (sys-net, sys-firewall, sys-usb) puis les qubes de travail."}
    ],
    alt:["blackarch","whonix","parrot"],
    errors:[
      {q:"Les modifications disparaissent après redémarrage",a:"En mode live sans persistance activée, tout est perdu au redémarrage par conception. Configure une partition de persistance chiffrée à la création de la clé si tu veux conserver des données."},
      {q:"Le système ne démarre pas en machine virtuelle",a:"Certains de ces systèmes nécessitent la virtualisation matérielle (VT-x/AMD-V, et VT-d pour l'isolation complète des périphériques) activée dans le BIOS — sans ça, l'installation échoue silencieusement."},
      {q:"Tor met un temps anormalement long à se connecter",a:"Un réseau bridé (Wi-Fi d'entreprise, hôtel) bloque parfois les nœuds Tor par défaut. Utilise les « ponts » (bridges) proposés dans l'assistant de connexion au lieu de la connexion directe."}
    ],
    faq:[
      {q:"Est-ce légal de l'utiliser ?", a:"Oui, l'outil lui-même est légal. C'est l'usage qui est encadré : ne l'utiliser que sur des systèmes dont on est propriétaire ou avec une autorisation écrite explicite."},
      {q:"Faut-il l'installer ou peut-on rester en mode Live ?", a:"Le mode Live suffit pour la plupart des usages ponctuels ; une installation persistante est utile pour un usage régulier et la sauvegarde des outils/configurations."}
    ]
  },
  {
    id:"whonix", name:"Whonix", version:"17", cat:"security", color:"#5B9BD5", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="#5B9BD5"><path d="M4 9c0-2.2 2-4 5-4s5 1.8 5 4-2 5-5 5-5-2.8-5-5zm2.4 0a2.6 1.8 0 1 0 5.2 0 2.6 1.8 0 1 0-5.2 0z"/><path d="M10 9c0-2.2 2-4 5-4s5 1.8 5 4-2 5-5 5-5-2.8-5-5zm2.4 0a2.6 1.8 0 1 0 5.2 0 2.6 1.8 0 1 0-5.2 0z" opacity=".6"/></svg>',
    tag:"Deux VM : une passerelle Tor + un poste isolé. Impossible à désanonymiser.",
    site:"whonix.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~20 min", diff:"Avancé", base:"Debian",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"8-32 Go pour une clé USB persistante", cpu:"x86_64 (VM recommandée pour l'isolement)"},
    steps:[
      {t:"Télécharger les VMs", d:"whonix.org → images VirtualBox (Gateway + Workstation)."},
      {t:"Installer VirtualBox", d:"Depuis virtualbox.org, la dernière version stable."},
      {t:"Importer les OVA", d:"Fichier → Importer une application virtuelle → sélectionner les .ova."},
      {t:"Démarrer Gateway d'abord", d:"Toujours lancer sys-whonix-gateway avant la workstation."},
      {t:"Utiliser Workstation", d:"Tout le trafic de la workstation passe par la gateway Tor."}
    ],
    alt:["parrot","tails","kali"],
    errors:[
      {q:"Les modifications disparaissent après redémarrage",a:"En mode live sans persistance activée, tout est perdu au redémarrage par conception. Configure une partition de persistance chiffrée à la création de la clé si tu veux conserver des données."},
      {q:"Le système ne démarre pas en machine virtuelle",a:"Certains de ces systèmes nécessitent la virtualisation matérielle (VT-x/AMD-V, et VT-d pour l'isolation complète des périphériques) activée dans le BIOS — sans ça, l'installation échoue silencieusement."},
      {q:"Tor met un temps anormalement long à se connecter",a:"Un réseau bridé (Wi-Fi d'entreprise, hôtel) bloque parfois les nœuds Tor par défaut. Utilise les « ponts » (bridges) proposés dans l'assistant de connexion au lieu de la connexion directe."}
    ],
    faq:[
      {q:"Est-ce légal de l'utiliser ?", a:"Oui, l'outil lui-même est légal. C'est l'usage qui est encadré : ne l'utiliser que sur des systèmes dont on est propriétaire ou avec une autorisation écrite explicite."},
      {q:"Faut-il l'installer ou peut-on rester en mode Live ?", a:"Le mode Live suffit pour la plupart des usages ponctuels ; une installation persistante est utile pour un usage régulier et la sauvegarde des outils/configurations."},
      {q:"Puis-je utiliser la Workstation Whonix seule, sans la Gateway ?", a:"Non : Whonix fonctionne en duo (Gateway + Workstation), les deux doivent tourner en machines virtuelles séparées pour garantir l'isolation du trafic via Tor."}
    ]
  },
  /* ===================== LÉGER ===================== */
  {
    id:"backbox", name:"BackBox", version:"9", cat:"security", color:"#000000", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="#000000" stroke="#666" stroke-width="0.5"><path d="M12 2 20 6v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg>',
    tag:"Distribution d'audit basée sur Ubuntu. Interface légère XFCE, orientée pentest et forensic.",
    site:"backbox.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"8-32 Go pour une clé USB persistante", cpu:"x86_64 (VM recommandée pour l'isolement)"},
    steps:[
      {t:"Télécharger l'ISO", d:"backbox.org → section Downloads, édition Desktop."},
      {t:"Vérifier le hash", d:"Comparer le SHA256 fourni sur le site.", code:"sha256sum backbox-9-desktop-amd64.iso"},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus, mode image."},
      {t:"Session live", d:"Booter en live pour tester les outils avant d'installer."},
      {t:"Installer", d:"Assistant Ubuntu classique, puis mise à jour des dépôts d'outils."}
    ],
    alt:["caine","tsurugi","whonix"],
    errors:[
      {q:"Les modifications disparaissent après redémarrage",a:"En mode live sans persistance activée, tout est perdu au redémarrage par conception. Configure une partition de persistance chiffrée à la création de la clé si tu veux conserver des données."},
      {q:"Le système ne démarre pas en machine virtuelle",a:"Certains de ces systèmes nécessitent la virtualisation matérielle (VT-x/AMD-V, et VT-d pour l'isolation complète des périphériques) activée dans le BIOS — sans ça, l'installation échoue silencieusement."},
      {q:"Tor met un temps anormalement long à se connecter",a:"Un réseau bridé (Wi-Fi d'entreprise, hôtel) bloque parfois les nœuds Tor par défaut. Utilise les « ponts » (bridges) proposés dans l'assistant de connexion au lieu de la connexion directe."}
    ],
    faq:[
      {q:"Est-ce légal de l'utiliser ?", a:"Oui, l'outil lui-même est légal. C'est l'usage qui est encadré : ne l'utiliser que sur des systèmes dont on est propriétaire ou avec une autorisation écrite explicite."},
      {q:"Faut-il l'installer ou peut-on rester en mode Live ?", a:"Le mode Live suffit pour la plupart des usages ponctuels ; une installation persistante est utile pour un usage régulier et la sauvegarde des outils/configurations."}
    ]
  },
  {
    id:"mxlinux", name:"MX Linux", version:"23 Libretto", cat:"lightweight", color:"#8AA5C4", icon:"mxlinux",
    tag:"Léger, rapide, ultra-stable. Debian + Xfce, plébiscité sur DistroWatch.",
    site:"mxlinux.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Debian",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"mxlinux.org → Xfce (par défaut), KDE ou Fluxbox."},
      {t:"Graver la clé", d:"balenaEtcher ou l'outil MX Live USB Maker."},
      {t:"Live persistant", d:"Option unique : mode live avec persistance des données."},
      {t:"Installer", d:"Installeur graphique simple et rapide."},
      {t:"MX Tools", d:"Boîte à outils maison pour tweaks, snapshots et pilotes."}
    ],
    alt:["antix","peppermint","q4os"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"alpine", name:"Alpine Linux", version:"3.24", cat:"lightweight", color:"#0D9BD7", icon:"alpinelinux",
    tag:"Minuscule (~130 Mo), sécurisée, la star des conteneurs Docker.",
    site:"alpinelinux.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Avancé", base:"—",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"alpinelinux.org → Standard ou Extended."},
      {t:"Graver la clé", d:"dd de l'ISO."},
      {t:"Connexion & setup", d:"Se connecter en root puis lancer le script.", code:"setup-alpine"},
      {t:"Choisir le disque", d:"Mode sys pour une installation classique sur disque."},
      {t:"Paquets", d:"Gérer les paquets avec apk, ultra-rapide.", code:"apk add nano openssh"}
    ],
    alt:["mxlinux","lubuntu","xubuntu"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."},
      {q:"Pourquoi certains binaires précompilés ne fonctionnent pas sur Alpine ?", a:"Alpine utilise musl libc et non glibc : les binaires compilés pour des distributions glibc (Ubuntu, Debian) peuvent ne pas s'exécuter sans une couche de compatibilité comme gcompat."}
    ]
  },
  {
    id:"lubuntu", name:"Lubuntu", version:"24.04 LTS", cat:"lightweight", color:"#2E7CD6", icon:"lubuntu",
    tag:"Ubuntu ultra-léger avec LXQt. Ressuscite les PC anciens.",
    site:"lubuntu.me", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"lubuntu.me → dernière LTS."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Live LXQt", d:"Bureau LXQt léger, parfait pour 2 Go de RAM."},
      {t:"Installer (Calamares)", d:"Assistant graphique simple."},
      {t:"Discover", d:"Installer des apps via le store, dépôts Ubuntu complets."}
    ],
    alt:["xubuntu","bodhi","trisquelmini"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"xubuntu", name:"Xubuntu", version:"24.04 LTS", cat:"lightweight", color:"#0664B5", icon:"xfce",
    tag:"Ubuntu + Xfce : léger, stable et hautement personnalisable.",
    site:"xubuntu.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"xubuntu.org → dernière LTS."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Live Xfce", d:"Tester le bureau Xfce réactif avant installation."},
      {t:"Installer", d:"Assistant Ubuntu classique."},
      {t:"Personnaliser", d:"Configurer panneaux, thèmes et raccourcis Xfce."}
    ],
    alt:["lubuntu","bodhi","trisquelmini"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"antix", name:"antiX", version:"23 Arditi", cat:"lightweight", color:"#7FBF3F", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#7FBF3F" stroke-width="3" stroke-linecap="round"><path d="M5 5l14 14M19 5L5 19"/></svg>',
    tag:"Sans systemd, ultra-frugal (~256 Mo RAM). Pour les machines vraiment vieilles.",
    site:"antixlinux.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"antixlinux.com → full, base ou net."},
      {t:"Graver la clé", d:"balenaEtcher ou l'outil live-usb intégré."},
      {t:"Live persistant", d:"Support de la persistance pour usage nomade."},
      {t:"Installer", d:"Installeur maison léger, sans systemd (runit/sysvinit)."},
      {t:"Gestionnaires légers", d:"IceWM, Fluxbox, JWM préconfigurés pour la vitesse."}
    ],
    alt:["mxlinux","peppermint","q4os"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"puppy", name:"Puppy Linux", version:"BookwormPup 10", cat:"lightweight", color:"#F0A500", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="#F0A500"><ellipse cx="12" cy="16" rx="5.5" ry="4.5"/><ellipse cx="5.5" cy="9" rx="2" ry="2.6"/><ellipse cx="10.2" cy="6" rx="2" ry="2.6"/><ellipse cx="13.8" cy="6" rx="2" ry="2.6"/><ellipse cx="18.5" cy="9" rx="2" ry="2.6"/></svg>',
    tag:"Tout tient en RAM. Démarre sur n'importe quoi, même sans disque dur.",
    site:"puppylinux.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Debian/Ubuntu",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"puppylinux.com → BookwormPup64 (base Debian)."},
      {t:"Graver la clé", d:"balenaEtcher ou l'outil natif."},
      {t:"Boot en RAM", d:"Puppy charge tout en mémoire : ultra-rapide."},
      {t:"Frugal install", d:"Installation « frugale » sur clé ou disque, en quelques fichiers."},
      {t:"Save file", d:"À l'arrêt, sauvegarder la session dans un fichier de persistance."}
    ],
    alt:["antix","tinycore","xubuntu"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"tinycore", name:"Tiny Core Linux", version:"15.0", cat:"lightweight", color:"#4E4E4E", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#4E4E4E" stroke-width="1.6"><circle cx="12" cy="12" r="2.6" fill="#4E4E4E" stroke="none"/><ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/></svg>',
    tag:"Un bureau complet en ~20 Mo. Modulaire à l'extrême, tout se charge en RAM.",
    site:"tinycorelinux.net", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Avancé", base:"—",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"tinycorelinux.net → Core (CLI), TinyCore ou CorePlus selon le besoin."},
      {t:"Graver la clé", d:"balenaEtcher ou dd, l'image fait quelques Mo seulement."},
      {t:"Booter", d:"Système entièrement chargé en RAM au démarrage, très rapide."},
      {t:"Extensions", d:"Installer des « TCZ » (extensions) via l'App Browser intégré.", code:"tce-load -wi nano.tcz"},
      {t:"Persistance", d:"Configurer une partition ou clé pour sauvegarder la config entre les redémarrages."}
    ],
    alt:["puppy","bodhi","antix"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."},
      {q:"Pourquoi mes fichiers disparaissent-ils après un redémarrage ?", a:"Tiny Core s'exécute en RAM par défaut sans persistance : il faut configurer explicitement une sauvegarde (backup/restore ou installation sur disque) pour conserver les modifications."}
    ]
  },
  {
    id:"bodhi", name:"Bodhi Linux", version:"7.0", cat:"lightweight", color:"#8DC63F", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="#8DC63F"><path d="M12 21c-5-2-8-6-8-11 0-3 2-6 5-7 0 4 1 7 3 9 2-2 3-5 3-9 3 1 5 4 5 7 0 5-3 9-8 11z"/></svg>',
    tag:"Ubuntu minimaliste avec Moksha (fork d'Enlightenment). Léger mais très personnalisable.",
    site:"bodhilinux.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"bodhilinux.com → édition Standard, AppPack ou Legacy selon le matériel."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Session live", d:"Découvrir le bureau Moksha avant d'installer."},
      {t:"Installer", d:"Installeur Ubiquity classique (base Ubuntu)."},
      {t:"Moksha", d:"Personnaliser thèmes, gadgets et raccourcis via le menu de configuration Moksha."}
    ],
    alt:["xubuntu","lubuntu","trisquelmini"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  /* ===================== AVANCÉ ===================== */
  {
    id:"arch", name:"Arch Linux", version:"rolling", cat:"advanced", color:"#1793D1", icon:"archlinux",
    tag:"Construis ton système from scratch. Contrôle total, rolling release. BTW.",
    site:"archlinux.org", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~40 min", diff:"Expert", base:"—",
    req:{ram:"512 Mo min. (2 Go+ conseillés pour un usage bureau)", disk:"2 Go min. pour la base (15-20 Go conseillés avec un environnement de bureau complet)", cpu:"x86_64, installation par paquets binaires (pas de compilation, contrairement à Gentoo)"},
    steps:[
      {t:"Télécharger l'ISO", d:"archlinux.org/download → miroir proche ou torrent officiel."},
      {t:"Graver la clé", d:"dd sous Linux/macOS, Rufus (mode DD) sous Windows."},
      {t:"Connexion réseau", d:"Wi-Fi via iwctl, puis vérifier la connexion.", code:"iwctl → station wlan0 connect SSID"},
      {t:"Partitionner & formater", d:"cfdisk pour créer les partitions, mkfs pour formater.", code:"cfdisk /dev/sda ; mkfs.ext4 /dev/sda2"},
      {t:"Installer la base", d:"pacstrap, générer fstab puis chroot pour configurer.", code:"pacstrap -K /mnt base linux linux-firmware"},
      {t:"Bootloader", d:"Installer GRUB ou systemd-boot, définir la locale et le mot de passe root."}
    ],
    alt:["nixos","endeavouros","voidlinux"],
    errors:[
      {q:"Pas de réseau dans le shell live",a:"Le Wi-Fi se configure manuellement via iwctl ou wpa_supplicant selon le système. Sans connexion, impossible de récupérer les paquets pendant l'installation — vérifie-la avant de lancer la phase de bootstrap."},
      {q:"Le système ne boote plus après l'installation",a:"Cause la plus fréquente : partition EFI non montée sur /boot ou /boot/efi avant d'installer le bootloader, ou fstab généré trop tôt/oublié. Revérifie le montage des partitions avant de chrooter."},
      {q:"L'installation ou la synchronisation des paquets échoue",a:"Vérifie l'horloge système avant toute opération réseau — un décalage d'horloge fait souvent échouer la vérification des clés de signature des dépôts."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."}
    ]
  },
  {
    id:"nixos", name:"NixOS", version:"24.05", cat:"advanced", color:"#5277C3", icon:"nixos",
    tag:"Config déclarative & reproductible. Ton système entier dans un seul fichier.",
    site:"nixos.org", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~25 min", diff:"Expert", base:"—",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"nixos.org → ISO graphique (Calamares) ou minimal."},
      {t:"Graver la clé", d:"dd ou balenaEtcher."},
      {t:"Partitionner", d:"Manuel (parted) ou automatique via l'installeur graphique."},
      {t:"configuration.nix", d:"Décrire tout le système dans un fichier déclaratif.", code:"nixos-generate-config --root /mnt"},
      {t:"Installer & rebuild", d:"Lancer l'installation puis reconstruire à volonté.", code:"nixos-install ; nixos-rebuild switch"}
    ],
    alt:["guix","arch","endeavouros"],
    errors:[
      {q:"Pas de réseau dans le shell live",a:"Le Wi-Fi se configure manuellement via iwctl ou wpa_supplicant selon le système. Sans connexion, impossible de récupérer les paquets pendant l'installation — vérifie-la avant de lancer la phase de bootstrap."},
      {q:"Le système ne boote plus après l'installation",a:"Cause la plus fréquente : partition EFI non montée sur /boot ou /boot/efi avant d'installer le bootloader, ou fstab généré trop tôt/oublié. Revérifie le montage des partitions avant de chrooter."},
      {q:"L'installation ou la synchronisation des paquets échoue",a:"Vérifie l'horloge système avant toute opération réseau — un décalage d'horloge fait souvent échouer la vérification des clés de signature des dépôts."}
    ],
    faq:[
      {q:"Qu'est-ce que « déclaratif » change concrètement ?", a:"Tout le système (paquets, services, configuration) est décrit dans un ou plusieurs fichiers .nix ; réinstaller le même système ailleurs revient à copier ces fichiers et lancer un rebuild, sans réinstallation manuelle."},
      {q:"Peut-on revenir en arrière après une mise à jour ratée ?", a:"Oui, c'est l'un des principaux atouts : chaque rebuild crée une génération distincte, sélectionnable au démarrage, ce qui permet un rollback immédiat sans réinstallation."}
    ]
  },
  {
    id:"endeavouros", name:"EndeavourOS", version:"rolling", cat:"advanced", color:"#7F3FBF", icon:"endeavouros",
    tag:"Arch presque pur, avec un installeur. Le pont idéal vers le vanilla Arch.",
    site:"endeavouros.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Arch",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"endeavouros.com → dernière ISO (Cassini/Galileo)."},
      {t:"Graver la clé", d:"balenaEtcher ou Ventoy."},
      {t:"Calamares en ligne", d:"Mode « Online » pour choisir ton environnement de bureau."},
      {t:"Installer", d:"Sélectionner DE, disque et utilisateur."},
      {t:"eos-update", d:"Maintenance via l'outil intégré.", code:"eos-update --aur"}
    ],
    alt:["artix","blendos","parabola"],
    errors:[
      {q:"Pas de réseau dans le shell live",a:"Le Wi-Fi se configure manuellement via iwctl ou wpa_supplicant selon le système. Sans connexion, impossible de récupérer les paquets pendant l'installation — vérifie-la avant de lancer la phase de bootstrap."},
      {q:"Le système ne boote plus après l'installation",a:"Cause la plus fréquente : partition EFI non montée sur /boot ou /boot/efi avant d'installer le bootloader, ou fstab généré trop tôt/oublié. Revérifie le montage des partitions avant de chrooter."},
      {q:"L'installation ou la synchronisation des paquets échoue",a:"Vérifie l'horloge système avant toute opération réseau — un décalage d'horloge fait souvent échouer la vérification des clés de signature des dépôts."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."}
    ]
  },
  {
    id:"voidlinux", name:"Void Linux", version:"rolling", cat:"advanced", color:"#478061", icon:"voidlinux",
    tag:"Indépendante, sans systemd. Runit + XBPS, rolling maîtrisée.",
    site:"voidlinux.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~30 min", diff:"Avancé", base:"—",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"voidlinux.org → base (glibc ou musl) ou live avec DE."},
      {t:"Graver la clé", d:"dd de l'ISO hybride."},
      {t:"Live + installeur", d:"Se connecter root/voidlinux puis lancer l'installeur.", code:"void-installer"},
      {t:"Configurer XBPS", d:"Choisir la source, la locale, le disque et les paquets."},
      {t:"Post-install", d:"Mettre à jour et installer services.", code:"sudo xbps-install -Su"}
    ],
    alt:["endeavouros","gentoo","nixos"],
    errors:[
      {q:"Pas de réseau dans le shell live",a:"Le Wi-Fi se configure manuellement via iwctl ou wpa_supplicant selon le système. Sans connexion, impossible de récupérer les paquets pendant l'installation — vérifie-la avant de lancer la phase de bootstrap."},
      {q:"Le système ne boote plus après l'installation",a:"Cause la plus fréquente : partition EFI non montée sur /boot ou /boot/efi avant d'installer le bootloader, ou fstab généré trop tôt/oublié. Revérifie le montage des partitions avant de chrooter."},
      {q:"L'installation ou la synchronisation des paquets échoue",a:"Vérifie l'horloge système avant toute opération réseau — un décalage d'horloge fait souvent échouer la vérification des clés de signature des dépôts."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."},
      {q:"Pourquoi mes scripts basés sur systemd ne fonctionnent pas ?", a:"Void Linux utilise runit comme système d'init, pas systemd : les commandes comme systemctl sont absentes ; il faut utiliser les outils runit (commande sv)."}
    ]
  },
  {
    id:"gentoo", name:"Gentoo", version:"rolling", cat:"advanced", color:"#54487A", icon:"gentoo",
    tag:"Tout compiler depuis les sources. Optimisations chirurgicales, apprentissage total.",
    site:"gentoo.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~2-6 h", diff:"Expert", base:"—",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger le stage3", d:"gentoo.org/downloads → ISO minimal + tarball stage3 selon l'archi."},
      {t:"Booter et partitionner", d:"Booter l'ISO, partitionner (parted), formater et monter /mnt/gentoo."},
      {t:"Extraire le stage3", d:"Décompresser l'archive de base dans /mnt/gentoo.", code:"tar xpvf stage3-*.tar.xz --xattrs-include='*.*' --numeric-owner"},
      {t:"Chroot & Portage", d:"Configurer make.conf, synchroniser Portage, choisir un profil.", code:"emerge-webrsync ; eselect profile list"},
      {t:"Compiler noyau + world", d:"emerge le noyau, GRUB puis le système complet.", code:"emerge --ask sys-kernel/gentoo-sources"},
      {t:"Bootloader", d:"Installer GRUB, générer la config, redémarrer sur le système final."}
    ],
    alt:["voidlinux","slackware","endeavouros"],
    errors:[
      {q:"Pas de réseau dans le shell live",a:"Le Wi-Fi se configure manuellement via iwctl ou wpa_supplicant selon le système. Sans connexion, impossible de récupérer les paquets pendant l'installation — vérifie-la avant de lancer la phase de bootstrap."},
      {q:"Le système ne boote plus après l'installation",a:"Cause la plus fréquente : partition EFI non montée sur /boot ou /boot/efi avant d'installer le bootloader, ou fstab généré trop tôt/oublié. Revérifie le montage des partitions avant de chrooter."},
      {q:"L'installation ou la synchronisation des paquets échoue",a:"Vérifie l'horloge système avant toute opération réseau — un décalage d'horloge fait souvent échouer la vérification des clés de signature des dépôts."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."}
    ]
  },
  {
    id:"slackware", name:"Slackware", version:"15.0", cat:"advanced", color:"#333333", icon:"slackware",
    tag:"La plus ancienne distribution encore active (1993). Unix-like, pas de dépendances auto.",
    site:"slackware.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~30 min", diff:"Avancé", base:"—",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"slackware.com → miroir officiel, DVD complet."},
      {t:"Graver la clé", d:"dd de l'ISO."},
      {t:"Booter et partitionner", d:"Se connecter root, partitionner avec cfdisk.", code:"cfdisk /dev/sda"},
      {t:"setup", d:"Lancer l'installeur texte historique.", code:"setup"},
      {t:"Choisir les series", d:"Sélectionner les groupes de paquets (A, AP, D, K, N, X, XAP…)."},
      {t:"LILO", d:"Installer le bootloader LILO ou ELILO puis redémarrer."}
    ],
    alt:["gentoo","artix","voidlinux"],
    errors:[
      {q:"Pas de réseau dans le shell live",a:"Le Wi-Fi se configure manuellement via iwctl ou wpa_supplicant selon le système. Sans connexion, impossible de récupérer les paquets pendant l'installation — vérifie-la avant de lancer la phase de bootstrap."},
      {q:"Le système ne boote plus après l'installation",a:"Cause la plus fréquente : partition EFI non montée sur /boot ou /boot/efi avant d'installer le bootloader, ou fstab généré trop tôt/oublié. Revérifie le montage des partitions avant de chrooter."},
      {q:"L'installation ou la synchronisation des paquets échoue",a:"Vérifie l'horloge système avant toute opération réseau — un décalage d'horloge fait souvent échouer la vérification des clés de signature des dépôts."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."},
      {q:"Pourquoi l'installation d'un paquet échoue-t-elle à cause de dépendances manquantes ?", a:"Le gestionnaire de paquets natif de Slackware ne résout pas les dépendances automatiquement ; il faut les installer manuellement ou utiliser un outil tiers comme slackpkg+ ou sbopkg."}
    ]
  },
  {
    id:"artix", name:"Artix Linux", version:"rolling", cat:"advanced", color:"#20B1F2", icon:"artixlinux",
    tag:"Arch Linux sans systemd. Choix entre OpenRC, runit ou s6 comme init.",
    site:"artixlinux.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~30 min", diff:"Avancé", base:"Arch",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"artixlinux.org/download.php → variante base (OpenRC, runit, s6, dinit)."},
      {t:"Graver la clé", d:"dd de l'ISO sur la clé USB.", code:"dd if=artix.iso of=/dev/sdX bs=4M status=progress"},
      {t:"Partitionner", d:"cfdisk ou fdisk, puis formater et monter les partitions."},
      {t:"basestrap", d:"Installer le système de base (équivalent pacstrap sans systemd).", code:"basestrap /mnt base base-devel openrc elogind-openrc"},
      {t:"Init & bootloader", d:"Configurer l'init choisi, activer les services, installer GRUB."}
    ],
    alt:["devuan","endeavouros","parabola"],
    errors:[
      {q:"Pas de réseau dans le shell live",a:"Le Wi-Fi se configure manuellement via iwctl ou wpa_supplicant selon le système. Sans connexion, impossible de récupérer les paquets pendant l'installation — vérifie-la avant de lancer la phase de bootstrap."},
      {q:"Le système ne boote plus après l'installation",a:"Cause la plus fréquente : partition EFI non montée sur /boot ou /boot/efi avant d'installer le bootloader, ou fstab généré trop tôt/oublié. Revérifie le montage des partitions avant de chrooter."},
      {q:"L'installation ou la synchronisation des paquets échoue",a:"Vérifie l'horloge système avant toute opération réseau — un décalage d'horloge fait souvent échouer la vérification des clés de signature des dépôts."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."},
      {q:"Pourquoi certains paquets de l'AUR échouent-ils à l'installation ?", a:"Artix exclut systemd (choix entre OpenRC, runit, s6) : les paquets AUR qui dépendent explicitement de systemd nécessitent des adaptations ou ne fonctionnent pas."}
    ]
  },
  /* ===================== BSD ===================== */
  {
    id:"freebsd", name:"FreeBSD", version:"15.x", cat:"bsd", color:"#C0392B", icon:"freebsd",
    tag:"Pas Linux, mais Unix pur. Réputé serveur, réseau et stabilité extrême.",
    site:"freebsd.org", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~25 min", diff:"Avancé", base:"BSD",
    req:{ram:"1-2 Go min.", disk:"10-20 Go d'espace disque", cpu:"x86_64 (ARM selon le projet)"},
    steps:[
      {t:"Télécharger l'image", d:"freebsd.org → memstick.img pour clé USB."},
      {t:"Graver la clé", d:"dd de l'image memstick.", code:"dd if=FreeBSD-15-memstick.img of=/dev/da0 bs=1M"},
      {t:"bsdinstall", d:"Installeur texte : clavier, hostname, composants."},
      {t:"Partition ZFS", d:"Choisir Auto (ZFS) pour bénéficier des snapshots."},
      {t:"Post-install", d:"Configurer le réseau, créer un utilisateur, activer sshd."}
    ],
    alt:["openbsd","netbsd","dragonfly"],
    errors:[
      {q:"Pas de Wi-Fi détecté après l'installation",a:"Le firmware du chipset Wi-Fi n'est souvent pas inclus par défaut (licence propriétaire). Installe le paquet firmware correspondant après le premier boot, en filaire, avant de configurer le sans-fil."},
      {q:"Confusion entre pkg et les ports",a:"pkg installe des binaires précompilés (rapide), les ports compilent depuis les sources (plus de contrôle, plus long). Pour débuter, reste sur pkg — mélanger les deux peut créer des incohérences de versions."},
      {q:"Le choix par défaut entre UFS et ZFS interroge",a:"ZFS demande plus de RAM mais apporte snapshots et intégrité des données ; UFS est plus léger. Sur une machine avec moins de 4 Go de RAM, préfère UFS."}
    ],
    faq:[
      {q:"En quoi est-ce différent de Linux ?", a:"Les BSD partagent un ancêtre Unix commun mais un noyau et un espace utilisateur distincts de Linux, avec une base de code et une documentation historiquement très cohérentes."},
      {q:"La compatibilité matérielle est-elle aussi large que sous Linux ?", a:"Globalement un peu plus restreinte, notamment sur le matériel très récent ou les portables grand public ; vérifier les listes de compatibilité officielles avant d'installer."},
      {q:"Puis-je exécuter directement des logiciels compilés pour Linux ?", a:"Non sans activer la couche de compatibilité Linux (linux_enable) ; par défaut FreeBSD n'exécute que des binaires natifs FreeBSD."}
    ]
  },
  {
    id:"openbsd", name:"OpenBSD", version:"7.9", cat:"bsd", color:"#F5CA13", icon:"openbsd",
    tag:"Sécurité paranoïaque par défaut. Auteurs d'OpenSSH, LibreSSL, pf. Code audité ligne à ligne.",
    site:"openbsd.org", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~15 min", diff:"Avancé", base:"BSD",
    req:{ram:"1-2 Go min.", disk:"10-20 Go d'espace disque", cpu:"x86_64 (ARM selon le projet)"},
    steps:[
      {t:"Télécharger l'installateur", d:"openbsd.org → install75.img (clé USB) ou install75.iso."},
      {t:"Graver la clé", d:"dd de l'image installXX.img.", code:"dd if=install75.img of=/dev/sdX bs=1M"},
      {t:"Booter", d:"Répondre (I)nstall à l'invite."},
      {t:"Répondre aux questions", d:"Installeur texte ultra-court : disque, réseau, sets, utilisateur."},
      {t:"pkg_add", d:"Installer des paquets binaires depuis les miroirs.", code:"pkg_add vim git"}
    ],
    alt:["freebsd","netbsd","dragonfly"],
    errors:[
      {q:"Pas de Wi-Fi détecté après l'installation",a:"Le firmware du chipset Wi-Fi n'est souvent pas inclus par défaut (licence propriétaire). Installe le paquet firmware correspondant après le premier boot, en filaire, avant de configurer le sans-fil."},
      {q:"Confusion entre pkg et les ports",a:"pkg installe des binaires précompilés (rapide), les ports compilent depuis les sources (plus de contrôle, plus long). Pour débuter, reste sur pkg — mélanger les deux peut créer des incohérences de versions."},
      {q:"Le choix par défaut entre UFS et ZFS interroge",a:"ZFS demande plus de RAM mais apporte snapshots et intégrité des données ; UFS est plus léger. Sur une machine avec moins de 4 Go de RAM, préfère UFS."}
    ],
    faq:[
      {q:"Pourquoi une réputation de sécurité aussi forte ?", a:"Le code source entier est audité en continu par l'équipe du projet, avec une politique stricte de désactivation des fonctionnalités non essentielles par défaut ; c'est aussi le berceau d'OpenSSH, LibreSSL et pf."},
      {q:"OpenBSD convient-il pour un usage bureautique quotidien ?", a:"C'est possible mais rare : le projet cible avant tout les pare-feux, serveurs et routeurs, avec un support matériel et logiciel plus restreint que Linux pour un usage desktop."},
      {q:"Comment appliquer les correctifs de sécurité sur OpenBSD ?", a:"Via syspatch pour les mises à jour binaires du système de base, séparément de pkg_add -u qui ne concerne que les paquets tiers ; les deux sont nécessaires."}
    ]
  },
  {
    id:"netbsd", name:"NetBSD", version:"10.1", cat:"bsd", color:"#F7961D", icon:"netbsd",
    tag:"« Of course it runs NetBSD. » Portée sur 60+ architectures matérielles. Élégance BSD.",
    site:"netbsd.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~20 min", diff:"Avancé", base:"BSD",
    req:{ram:"1-2 Go min.", disk:"10-20 Go d'espace disque", cpu:"x86_64 (ARM selon le projet)"},
    steps:[
      {t:"Télécharger l'image", d:"netbsd.org → NetBSD-10.0 pour ton architecture (amd64, aarch64…)."},
      {t:"Graver la clé", d:"dd de l'image install."},
      {t:"sysinst", d:"Installeur texte historique, très simple à naviguer."},
      {t:"Sélection sets", d:"Choisir les sets à installer (base, comp, games, X11…)."},
      {t:"pkgin", d:"Installer et gérer les paquets binaires.", code:"pkgin install tmux vim"}
    ],
    alt:["openbsd","dragonfly","freebsd"],
    errors:[
      {q:"Pas de Wi-Fi détecté après l'installation",a:"Le firmware du chipset Wi-Fi n'est souvent pas inclus par défaut (licence propriétaire). Installe le paquet firmware correspondant après le premier boot, en filaire, avant de configurer le sans-fil."},
      {q:"Confusion entre pkg et les ports",a:"pkg installe des binaires précompilés (rapide), les ports compilent depuis les sources (plus de contrôle, plus long). Pour débuter, reste sur pkg — mélanger les deux peut créer des incohérences de versions."},
      {q:"Le choix par défaut entre UFS et ZFS interroge",a:"ZFS demande plus de RAM mais apporte snapshots et intégrité des données ; UFS est plus léger. Sur une machine avec moins de 4 Go de RAM, préfère UFS."}
    ],
    faq:[
      {q:"En quoi est-ce différent de Linux ?", a:"Les BSD partagent un ancêtre Unix commun mais un noyau et un espace utilisateur distincts de Linux, avec une base de code et une documentation historiquement très cohérentes."},
      {q:"La compatibilité matérielle est-elle aussi large que sous Linux ?", a:"Globalement un peu plus restreinte, notamment sur le matériel très récent ou les portables grand public ; vérifier les listes de compatibilité officielles avant d'installer."},
      {q:"Pourquoi certains périphériques ne sont-ils pas reconnus après l'installation ?", a:"NetBSD privilégie la portabilité mais son support matériel est plus restreint que Linux ; il faut vérifier la liste de compatibilité (HARDWARE) de la version installée avant de graver l'ISO."}
    ]
  },
  {
    id:"dragonfly", name:"DragonFly BSD", version:"6.4", cat:"bsd", color:"#EB2E42", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="#EB2E42"><ellipse cx="7" cy="8" rx="6" ry="2.6" transform="rotate(-20 7 8)"/><ellipse cx="17" cy="8" rx="6" ry="2.6" transform="rotate(20 17 8)"/><ellipse cx="8" cy="15" rx="5.5" ry="2.4" transform="rotate(-15 8 15)"/><ellipse cx="16" cy="15" rx="5.5" ry="2.4" transform="rotate(15 16 15)"/><rect x="10.8" y="6" width="2.4" height="14" rx="1.2"/></svg>',
    tag:"Fork de FreeBSD. HAMMER2 : système de fichiers pensé pour clusters et snapshots.",
    site:"dragonflybsd.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~20 min", diff:"Avancé", base:"BSD",
    req:{ram:"1-2 Go min.", disk:"10-20 Go d'espace disque", cpu:"x86_64 (ARM selon le projet)"},
    steps:[
      {t:"Télécharger l'image", d:"dragonflybsd.org → dfly-x86_64-*.img.bz2."},
      {t:"Décompresser & graver", d:"bunzip2 puis dd sur la clé.", code:"bunzip2 dfly-*.img.bz2 && dd if=dfly.img of=/dev/sdX bs=1M"},
      {t:"Installeur", d:"Choisir « Install DragonFly » puis suivre les invites."},
      {t:"HAMMER2", d:"Choisir HAMMER2 comme filesystem pour bénéficier des snapshots."},
      {t:"pkg", d:"Installer les paquets binaires avec DPorts.", code:"pkg install nano"}
    ],
    alt:["netbsd","openbsd","freebsd"],
    errors:[
      {q:"Pas de Wi-Fi détecté après l'installation",a:"Le firmware du chipset Wi-Fi n'est souvent pas inclus par défaut (licence propriétaire). Installe le paquet firmware correspondant après le premier boot, en filaire, avant de configurer le sans-fil."},
      {q:"Confusion entre pkg et les ports",a:"pkg installe des binaires précompilés (rapide), les ports compilent depuis les sources (plus de contrôle, plus long). Pour débuter, reste sur pkg — mélanger les deux peut créer des incohérences de versions."},
      {q:"Le choix par défaut entre UFS et ZFS interroge",a:"ZFS demande plus de RAM mais apporte snapshots et intégrité des données ; UFS est plus léger. Sur une machine avec moins de 4 Go de RAM, préfère UFS."}
    ],
    faq:[
      {q:"En quoi est-ce différent de Linux ?", a:"Les BSD partagent un ancêtre Unix commun mais un noyau et un espace utilisateur distincts de Linux, avec une base de code et une documentation historiquement très cohérentes."},
      {q:"La compatibilité matérielle est-elle aussi large que sous Linux ?", a:"Globalement un peu plus restreinte, notamment sur le matériel très récent ou les portables grand public ; vérifier les listes de compatibilité officielles avant d'installer."},
      {q:"DragonFly BSD utilise-t-il les mêmes paquets que FreeBSD ?", a:"Non : bien qu'issu d'un fork de FreeBSD, DragonFly a son propre gestionnaire de paquets et son propre système de fichiers natif HAMMER2, incompatibles avec les outils FreeBSD."}
    ]
  },
  {
    id:"ghostbsd", name:"GhostBSD", version:"24.10", cat:"bsd", color:"#37BC9B", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="#37BC9B"><path d="M12 2C7.6 2 4 5.6 4 10v11l2.5-2 2.5 2 3-2 3 2 2.5-2 2.5 2V10c0-4.4-3.6-8-8-8z"/><circle cx="9" cy="10" r="1.3" fill="#0b1512"/><circle cx="15" cy="10" r="1.3" fill="#0b1512"/></svg>',
    tag:"FreeBSD pensé pour le bureau. Installeur graphique simple, MATE ou Xfce par défaut.",
    site:"ghostbsd.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"FreeBSD",
    req:{ram:"1-2 Go min.", disk:"10-20 Go d'espace disque", cpu:"x86_64 (ARM selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"ghostbsd.org/download → édition MATE ou Xfce."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Session live", d:"Booter en live pour tester le bureau avant d'installer."},
      {t:"Installeur graphique", d:"Assistant simple : disque (UFS ou ZFS), fuseau, utilisateur."},
      {t:"OS pkg / Ports", d:"Installer des logiciels via pkg ou compiler depuis les Ports.", code:"sudo pkg install firefox"}
    ],
    alt:["midnightbsd","hardenedbsd","nomadbsd"],
    errors:[
      {q:"Pas de Wi-Fi détecté après l'installation",a:"Le firmware du chipset Wi-Fi n'est souvent pas inclus par défaut (licence propriétaire). Installe le paquet firmware correspondant après le premier boot, en filaire, avant de configurer le sans-fil."},
      {q:"Confusion entre pkg et les ports",a:"pkg installe des binaires précompilés (rapide), les ports compilent depuis les sources (plus de contrôle, plus long). Pour débuter, reste sur pkg — mélanger les deux peut créer des incohérences de versions."},
      {q:"Le choix par défaut entre UFS et ZFS interroge",a:"ZFS demande plus de RAM mais apporte snapshots et intégrité des données ; UFS est plus léger. Sur une machine avec moins de 4 Go de RAM, préfère UFS."}
    ],
    faq:[
      {q:"En quoi est-ce différent de Linux ?", a:"Les BSD partagent un ancêtre Unix commun mais un noyau et un espace utilisateur distincts de Linux, avec une base de code et une documentation historiquement très cohérentes."},
      {q:"La compatibilité matérielle est-elle aussi large que sous Linux ?", a:"Globalement un peu plus restreinte, notamment sur le matériel très récent ou les portables grand public ; vérifier les listes de compatibilité officielles avant d'installer."}
    ]
  },
  /* ===================== RÉSEAU ===================== */
  {
    id:"opnsense", name:"OPNsense", version:"24.x", cat:"network", color:"#D94F00", icon:"opnsense",
    tag:"Pare-feu open source. Fork de pfSense, UI moderne, community-friendly. FreeBSD dessous.",
    site:"opnsense.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"FreeBSD",
    req:{ram:"512 Mo à 1 Go", disk:"4-8 Go (carte CF/SSD selon le boîtier)", cpu:"x86_64 faible consommation ou matériel dédié"},
    steps:[
      {t:"Télécharger l'image", d:"opnsense.org/download → image DVD (ISO) ou USB (img.bz2)."},
      {t:"Graver la clé", d:"dd de l'image décompressée."},
      {t:"Live et login", d:"Booter la clé et se connecter avec installer / opnsense."},
      {t:"Installer", d:"Choisir le disque, la partition (ZFS conseillé), configurer le fuseau."},
      {t:"Interface web", d:"Accéder à l'admin et configurer WAN/LAN.", code:"https://192.168.1.1"}
    ],
    alt:["pfsense","ipfire","vyos"],
    errors:[
      {q:"Plus d'accès à l'interface après configuration réseau",a:"Une mauvaise règle de pare-feu ou un mauvais port assigné en WAN peut couper l'accès à l'interface web. Garde toujours un accès console/série de secours avant de modifier les règles depuis l'interface elle-même."},
      {q:"Les ports WAN/LAN sont inversés",a:"L'assignation des interfaces se fait à l'installation ou via la console : vérifie le nommage exact avant de câbler, certains boîtiers n'étiquettent pas leurs ports dans l'ordre logique."},
      {q:"L'image ne boote pas sur le boîtier",a:"Vérifie que l'image téléchargée correspond bien à l'architecture exacte du boîtier (x86_64 générique vs image spécifique constructeur) — flasher la mauvaise image est la cause n°1 d'échec sur ce type de matériel."}
    ],
    faq:[
      {q:"Faut-il un matériel dédié (boîtier pare-feu) ?", a:"Non obligatoire : un mini-PC ou une machine virtuelle avec plusieurs interfaces réseau suffit pour débuter."},
      {q:"Peut-on migrer sa configuration existante ?", a:"Selon les projets, des outils d'import de configuration existent (règles de pare-feu, DHCP…) ; sinon la reconfiguration se fait manuellement."}
    ]
  },
  {
    id:"pfsense", name:"pfSense CE", version:"2.7", cat:"network", color:"#212121", icon:"pfsense",
    tag:"Le standard du pare-feu open source. Netgate. Ultra-fiable en prod.",
    site:"pfsense.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"FreeBSD",
    req:{ram:"512 Mo à 1 Go", disk:"4-8 Go (carte CF/SSD selon le boîtier)", cpu:"x86_64 faible consommation ou matériel dédié"},
    steps:[
      {t:"Télécharger l'ISO", d:"pfsense.org/download → Community Edition (gratuite)."},
      {t:"Graver la clé", d:"Décompresser puis dd de l'image mémoire.", code:"gunzip pfSense-CE-*.iso.gz && dd if=pfSense.iso of=/dev/sdX"},
      {t:"Installeur", d:"Sélectionner le disque, ZFS ou UFS, redémarrer."},
      {t:"Interfaces WAN/LAN", d:"Assigner les cartes réseau lors du 1er boot (menu console)."},
      {t:"UI web", d:"Se connecter à l'admin depuis le LAN.", code:"https://192.168.1.1 (admin / pfsense)"}
    ],
    alt:["opnsense","ipfire","vyos"],
    errors:[
      {q:"Plus d'accès à l'interface après configuration réseau",a:"Une mauvaise règle de pare-feu ou un mauvais port assigné en WAN peut couper l'accès à l'interface web. Garde toujours un accès console/série de secours avant de modifier les règles depuis l'interface elle-même."},
      {q:"Les ports WAN/LAN sont inversés",a:"L'assignation des interfaces se fait à l'installation ou via la console : vérifie le nommage exact avant de câbler, certains boîtiers n'étiquettent pas leurs ports dans l'ordre logique."},
      {q:"L'image ne boote pas sur le boîtier",a:"Vérifie que l'image téléchargée correspond bien à l'architecture exacte du boîtier (x86_64 générique vs image spécifique constructeur) — flasher la mauvaise image est la cause n°1 d'échec sur ce type de matériel."}
    ],
    faq:[
      {q:"Faut-il un matériel dédié (boîtier pare-feu) ?", a:"Non obligatoire : un mini-PC ou une machine virtuelle avec plusieurs interfaces réseau suffit pour débuter."},
      {q:"Peut-on migrer sa configuration existante ?", a:"Selon les projets, des outils d'import de configuration existent (règles de pare-feu, DHCP…) ; sinon la reconfiguration se fait manuellement."}
    ]
  },
  {
    id:"ipfire", name:"IPFire", version:"2.29", cat:"network", color:"#901111", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="#901111"><path d="M12 2c1 3-2 4-2 7 0 1.3 1 2 2 2s2-.7 2-2c2 2 3 4.5 3 7 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-4.5 3-6.5 5-9 1-1.2 1.5-2.8 1-5-1 .5-1.5 1.3-1.5 2.3 0 .7.5 1.3 1 1.7-.5-1-1-2.2-1-4z"/></svg>',
    tag:"Pare-feu segmenté par zones (GREEN/RED/ORANGE/BLUE). IDS/IPS Suricata intégré.",
    site:"ipfire.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Linux From Scratch",
    req:{ram:"512 Mo à 1 Go", disk:"4-8 Go (carte CF/SSD selon le boîtier)", cpu:"x86_64 faible consommation ou matériel dédié"},
    steps:[
      {t:"Télécharger l'ISO", d:"ipfire.org/download → image ISO pour installation classique."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Installeur texte", d:"Choisir clavier, disque, puis démarrer l'installation de base."},
      {t:"Zones réseau", d:"Assigner les interfaces GREEN (LAN), RED (WAN), ORANGE/BLUE (DMZ/Wi-Fi) en console."},
      {t:"Interface web", d:"Terminer la configuration depuis l'admin web.", code:"https://<ip-green>:444"}
    ],
    alt:["pfsense","opnsense","vyos"],
    errors:[
      {q:"Plus d'accès à l'interface après configuration réseau",a:"Une mauvaise règle de pare-feu ou un mauvais port assigné en WAN peut couper l'accès à l'interface web. Garde toujours un accès console/série de secours avant de modifier les règles depuis l'interface elle-même."},
      {q:"Les ports WAN/LAN sont inversés",a:"L'assignation des interfaces se fait à l'installation ou via la console : vérifie le nommage exact avant de câbler, certains boîtiers n'étiquettent pas leurs ports dans l'ordre logique."},
      {q:"L'image ne boote pas sur le boîtier",a:"Vérifie que l'image téléchargée correspond bien à l'architecture exacte du boîtier (x86_64 générique vs image spécifique constructeur) — flasher la mauvaise image est la cause n°1 d'échec sur ce type de matériel."}
    ],
    faq:[
      {q:"Faut-il un matériel dédié (boîtier pare-feu) ?", a:"Non obligatoire : un mini-PC ou une machine virtuelle avec plusieurs interfaces réseau suffit pour débuter."},
      {q:"Peut-on migrer sa configuration existante ?", a:"Selon les projets, des outils d'import de configuration existent (règles de pare-feu, DHCP…) ; sinon la reconfiguration se fait manuellement."}
    ]
  },
  /* ===================== ALTERNATIF ===================== */
  {
    id:"haiku", name:"Haiku OS", version:"R1/beta4", cat:"alt", color:"#3AB4F2", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#3AB4F2" stroke-width="1.7" stroke-linecap="round"><path d="M5 3h11l3 3v15H5z" fill="#3AB4F2" fill-opacity=".12"/><path d="M8 9h8M8 13h8M8 17h5"/></svg>',
    tag:"L'héritier open source de BeOS. Kernel maison, réactivité incroyable, look unique.",
    site:"haiku-os.org", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~10 min", diff:"Facile", base:"BeOS",
    req:{ram:"384 Mo min. (512 Mo-1 Go conseillés pour un usage confortable)", disk:"1,5 à 3 Go d'espace disque", cpu:"x86 (Pentium ou mieux) ; x86_64 et ARM/RISC-V en développement"},
    steps:[
      {t:"Télécharger l'ISO anyboot", d:"haiku-os.org/get-haiku → image anyboot (USB + DVD)."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Live", d:"Booter et découvrir Haiku en session live."},
      {t:"Installer", d:"Menu Applications → Installateur Haiku. Partition BFS."},
      {t:"HaikuDepot", d:"Store d'apps intégré : navigateur, dev tools, jeux BeOS legacy."}
    ],
    alt:["serenityos","redox","templeos"],
    errors:[
      {q:"Aucun pilote pour le GPU ou le Wi-Fi modernes",a:"Ces projets ciblent un public restreint et le support matériel récent est très limité par design. Privilégie une machine ancienne ou une machine virtuelle plutôt qu'un PC neuf pour de meilleures chances de compatibilité."},
      {q:"Un logiciel Windows/Linux classique ne fonctionne pas",a:"La compatibilité annoncée reste partielle sur ces projets communautaires : teste sur un cas simple avant de compter dessus pour un usage précis."},
      {q:"Très peu de documentation en cas de blocage",a:"La communauté est réduite ; le forum ou le wiki officiel du projet reste la meilleure source, plus fiable que des tutoriels tiers généralistes qui datent vite sur ce type de système."}
    ],
    faq:[
      {q:"Pourquoi choisir un système aussi confidentiel ?", a:"Pour explorer une architecture ou une philosophie différente — souvent la curiosité technique ou la recherche d'alternatives aux grands écosystèmes."},
      {q:"Le support logiciel est-il suffisant pour un usage quotidien ?", a:"Généralement plus limité que sur les systèmes grand public ; à réserver à un usage secondaire, en test, ou pour les passionnés."}
    ]
  },
  {
    id:"reactos", name:"ReactOS", version:"0.4.14", cat:"retro", color:"#183246", icon:"reactos",
    tag:"OS libre binaire-compatible Windows. Objectif : exécuter des .exe Windows nativement.",
    site:"reactos.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Intermédiaire", base:"—",
    req:{ram:"96 Mo min. (256 Mo conseillés)", disk:"1,5 Go", cpu:"x86 32 bits"},
    steps:[
      {t:"Télécharger l'ISO", d:"reactos.org/download → Boot CD (installation) ou Live CD."},
      {t:"Graver la clé", d:"Rufus ou balenaEtcher."},
      {t:"Installeur texte", d:"Style Windows XP : choisir langue, partition, formater FAT32/NTFS."},
      {t:"Installeur GUI", d:"Deuxième phase graphique : composants, nom d'ordinateur, mot de passe."},
      {t:"Application Manager", d:"Store maison pour installer Firefox, LibreOffice, jeux Win legacy."}
    ],
    alt:["freedos","aros","kolibrios"],
    errors:[
      {q:"Aucun pilote pour le GPU ou le Wi-Fi modernes",a:"Ces projets ciblent un public restreint et le support matériel récent est très limité par design. Privilégie une machine ancienne ou une machine virtuelle plutôt qu'un PC neuf pour de meilleures chances de compatibilité."},
      {q:"Un logiciel Windows/Linux classique ne fonctionne pas",a:"La compatibilité annoncée reste partielle sur ces projets communautaires : teste sur un cas simple avant de compter dessus pour un usage précis."},
      {q:"Très peu de documentation en cas de blocage",a:"La communauté est réduite ; le forum ou le wiki officiel du projet reste la meilleure source, plus fiable que des tutoriels tiers généralistes qui datent vite sur ce type de système."}
    ],
    faq:[
      {q:"Peut-on l'utiliser comme un vrai Windows au quotidien ?", a:"Non recommandé en usage principal : ReactOS reste en développement actif, avec une compatibilité logicielle et matérielle partielle."}
    ]
  },
  {
    id:"freedos", name:"FreeDOS", version:"1.3", cat:"retro", color:"#004A9F", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#004A9F" stroke-width="1.8"><rect x="2.5" y="4" width="19" height="16" rx="1.5" fill="#004A9F" fill-opacity=".12"/><path d="M6 9l3 3-3 3M11 15h6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    tag:"Clone libre de MS-DOS. Compatibilité totale pour vieux logiciels, jeux DOS et outils BIOS.",
    site:"freedos.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Facile", base:"DOS",
    req:{ram:"1 Mo suffit (fonctionne sur presque tout)", disk:"quelques dizaines de Mo", cpu:"x86, y compris très ancien matériel"},
    steps:[
      {t:"Télécharger l'ISO", d:"freedos.org/download → « Standard » (installateur complet) ou « Lite »."},
      {t:"Graver la clé", d:"Rufus (mode DD) ou balenaEtcher."},
      {t:"Booter", d:"Démarrer sur la clé, choisir « Install to harddisk »."},
      {t:"Installeur texte", d:"Partitionner avec FDISK intégré, formater en FAT32, copier les fichiers."},
      {t:"Utilisation", d:"Lancer des .exe/.com DOS, ou utiliser FreeDOS pour flasher un BIOS/firmware."}
    ],
    alt:["reactos","aros","kolibrios"],
    errors:[
      {q:"Aucun pilote pour le GPU ou le Wi-Fi modernes",a:"Ces projets ciblent un public restreint et le support matériel récent est très limité par design. Privilégie une machine ancienne ou une machine virtuelle plutôt qu'un PC neuf pour de meilleures chances de compatibilité."},
      {q:"Un logiciel Windows/Linux classique ne fonctionne pas",a:"La compatibilité annoncée reste partielle sur ces projets communautaires : teste sur un cas simple avant de compter dessus pour un usage précis."},
      {q:"Très peu de documentation en cas de blocage",a:"La communauté est réduite ; le forum ou le wiki officiel du projet reste la meilleure source, plus fiable que des tutoriels tiers généralistes qui datent vite sur ce type de système."}
    ],
    faq:[
      {q:"À quoi ça sert encore aujourd'hui ?", a:"Flashage de BIOS/firmware, exécution de vieux logiciels DOS, tests sur matériel ancien, ou simplement l'apprentissage de l'informatique bas niveau."}
    ]
  },
  /* ===================== AJOUTS v3.2 ===================== */
  {
    id:"kubuntu", name:"Kubuntu", version:"24.04 LTS", cat:"desktop", color:"#0079C1", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#0079C1" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#0079C1">Ku</text></svg>',
    tag:"Ubuntu avec KDE Plasma. Un bureau élégant, fluide et hautement personnalisable.",
    site:"kubuntu.org", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés, Plasma étant plus gourmand que GNOME)", disk:"25 Go min.", cpu:"2 GHz dual-core, 64 bits"},
    steps:[
      {t:"Télécharger l'ISO", d:"Sur kubuntu.org/getkubuntu, choisir l'édition LTS."},
      {t:"Vérifier le SHA-256", d:"Comparer l'empreinte avec le fichier SHA256SUMS publié.", code:"sha256sum kubuntu-24.04-desktop-amd64.iso"},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus en mode image."},
      {t:"Session live", d:"Booter et tester Plasma avant d'installer."},
      {t:"Installer", d:"Suivre l'assistant, cocher les codecs multimédias tiers."}
    ],
    alt:["kdeneon","fedorakde","ubuntumate"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Quelle est la différence avec Ubuntu classique ?", a:"La même base et les mêmes dépôts, mais l'environnement de bureau KDE Plasma remplace GNOME : plus personnalisable visuellement, avec des réglages plus fins accessibles par défaut."},
      {q:"Plasma est-il aussi stable que GNOME sur Ubuntu ?", a:"Oui pour l'édition LTS ; Plasma a une réputation historique de bugs mineurs d'affichage, largement résorbée depuis les versions Plasma 5.27 et suivantes."}
    ]
  },
  {
    id:"peppermint", name:"Peppermint OS", version:"Debian Edition 2", cat:"lightweight", color:"#D6234A", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#D6234A" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#D6234A">Pm</text></svg>',
    tag:"Xfce léger orienté cloud/apps web, taillé pour les machines modestes.",
    site:"peppermintos.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Debian",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"peppermintos.com/guide/install → édition Debian (Bookworm)."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Live", d:"Tester le bureau Xfce minimaliste avant d'installer."},
      {t:"Calamares", d:"Lancer l'installeur graphique Calamares."},
      {t:"ICE", d:"Utiliser l'outil ICE pour transformer tes sites web en applications autonomes."}
    ],
    alt:["q4os","dietpi","antix"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"q4os", name:"Q4OS", version:"5.8", cat:"lightweight", color:"#2E86C1", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#2E86C1" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#2E86C1">Q4</text></svg>',
    tag:"Distro Debian ultra-légère, pensée pour ressusciter les vieux PC.",
    site:"q4os.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Facile", base:"Debian",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"q4os.org/downloads.html → édition Desktop ou Core (sans bureau)."},
      {t:"Graver la clé", d:"Rufus (mode DD) ou balenaEtcher."},
      {t:"Live", d:"Booter en live, RAM très basse suffit (512 Mo)."},
      {t:"Installer", d:"Assistant Calamares : disque, langue, utilisateur."},
      {t:"Desktop Profiler", d:"Choisir un profil KDE Plasma allégé (Trinity en option)."}
    ],
    alt:["peppermint","dietpi","antix"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"pclinuxos", name:"PCLinuxOS", version:"2024 KDE", cat:"desktop", color:"#0C5A9D", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#0C5A9D" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#0C5A9D">Pc</text></svg>',
    tag:"Distro rolling indépendante historique. Stable, sans systemd, communauté fidèle.",
    site:"pclinuxos.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"—",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"pclinuxos.com/?page_id=13 → édition KDE, MATE ou Xfce."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Live", d:"Session live complète avant installation."},
      {t:"Installer", d:"Lancer l'icône « Install PCLinuxOS » sur le bureau live."},
      {t:"Synaptic", d:"Gérer les paquets via Synaptic ou apt-get (dérivé RPM historique passé en apt)."}
    ],
    alt:["kubuntu","ultramarine","openmandriva"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"batocera", name:"Batocera", version:"39", cat:"gaming", color:"#E4572E", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#E4572E" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#E4572E">Bt</text></svg>',
    tag:"OS de rétro-gaming clé en main. Boot direct, des dizaines d'émulateurs préconfigurés.",
    site:"batocera.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Linux",
    req:{ram:"2 Go min. (4 Go+ pour les consoles récentes émulées)", disk:"8 Go min., + espace pour les ROMs", cpu:"x86 ou ARM (Raspberry Pi pris en charge)"},
    steps:[
      {t:"Télécharger l'image", d:"batocera.org/download → choisir l'image adaptée (PC x86_64, Pi, etc.)."},
      {t:"Graver la clé/carte", d:"balenaEtcher, écrire l'image brute (pas d'ISO classique)."},
      {t:"Premier boot", d:"L'interface EmulationStation se lance directement."},
      {t:"Ajouter des ROMs", d:"Copier les ROMs sur le partage réseau/USB exposé par Batocera."},
      {t:"Configurer les manettes", d:"Associer les manettes via le menu « Controllers »."}
    ],
    alt:["lakka","recalbox","chimeraos"],
    errors:[
      {q:"La manette n'est pas reconnue",a:"Certaines manettes (notamment Xbox récentes en Bluetooth) demandent un pilote ou un appairage manuel au premier lancement. Branche-la en filaire pour la configuration initiale, plus fiable."},
      {q:"Les jeux/ROMs n'apparaissent pas",a:"Les BIOS des consoles émulées ne sont jamais fournis (question de droits) et doivent être ajoutés manuellement dans le bon dossier ; sans eux, plusieurs émulateurs refusent de lancer un jeu même valide."},
      {q:"Écran noir après une mise à jour des pilotes GPU",a:"Sur les systèmes basés Arch avec pilotes propriétaires NVIDIA, une mise à jour de kernel sans régénération de l'initramfs peut casser le démarrage graphique. Un rollback (si le système le permet) ou un chroot depuis une clé live permet de revenir en arrière."}
    ],
    faq:[
      {q:"Batocera fournit-elle des jeux ?", a:"Non, Batocera est un émulateur/frontend seul. Les fichiers de jeux (ROMs) doivent être fournis par l'utilisateur, en respectant la légalité locale."}
    ]
  },
  {
    id:"lakka", name:"Lakka", version:"5.0", cat:"gaming", color:"#00ADEF", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#00ADEF" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#00ADEF">Lk</text></svg>',
    tag:"« Linux-libretro » : distribution minimaliste entièrement bâtie autour de RetroArch.",
    site:"lakka.tv", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Facile", base:"Linux",
    req:{ram:"8 Go min. (16 Go conseillés)", disk:"64 Go min., bien plus selon la bibliothèque de jeux", cpu:"CPU récent + GPU dédié compatible"},
    steps:[
      {t:"Télécharger l'image", d:"lakka.tv → choisir l'image pour ton matériel (PC, Pi, Switch…)."},
      {t:"Graver la carte/clé", d:"balenaEtcher, écriture image brute."},
      {t:"Premier boot", d:"L'interface RetroArch (XMB) se lance automatiquement."},
      {t:"Cores", d:"Télécharger les cores d'émulation via le menu en ligne intégré."},
      {t:"Réseau", d:"Activer Samba pour déposer facilement les ROMs depuis un PC."}
    ],
    alt:["batocera","recalbox","chimeraos"],
    errors:[
      {q:"La manette n'est pas reconnue",a:"Certaines manettes (notamment Xbox récentes en Bluetooth) demandent un pilote ou un appairage manuel au premier lancement. Branche-la en filaire pour la configuration initiale, plus fiable."},
      {q:"Les jeux/ROMs n'apparaissent pas",a:"Les BIOS des consoles émulées ne sont jamais fournis (question de droits) et doivent être ajoutés manuellement dans le bon dossier ; sans eux, plusieurs émulateurs refusent de lancer un jeu même valide."},
      {q:"Écran noir après une mise à jour des pilotes GPU",a:"Sur les systèmes basés Arch avec pilotes propriétaires NVIDIA, une mise à jour de kernel sans régénération de l'initramfs peut casser le démarrage graphique. Un rollback (si le système le permet) ou un chroot depuis une clé live permet de revenir en arrière."}
    ],
    faq:[
      {q:"Tous les jeux Windows fonctionnent-ils ?", a:"La compatibilité dépend de la couche de traduction utilisée (Proton, Wine) : la plupart des jeux populaires fonctionnent, mais certains titres avec anti-triche noyau restent incompatibles."},
      {q:"Faut-il une carte graphique dédiée ?", a:"Non obligatoire, mais fortement recommandée pour de bonnes performances en jeu."}
    ]
  },
  {
    id:"winserver2025", name:"Windows Server 2025", version:"LTSC", cat:"server", color:"#0078D4", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#0078D4" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#0078D4">WS</text></svg>',
    tag:"La dernière génération serveur de Microsoft : Hyper-V, Active Directory, sécurité renforcée.",
    site:"microsoft.com", license:"Propriétaire", popular:false, isNew:false,
    time:"~20 min", diff:"Intermédiaire", base:"Windows NT",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64 (physique ou VM)"},
    steps:[
      {t:"Télécharger l'ISO d'évaluation", d:"Depuis le Centre d'évaluation Microsoft (180 jours)."},
      {t:"Créer la clé bootable", d:"Rufus, schéma GPT / UEFI.", code:"Rufus → GPT → UEFI"},
      {t:"Démarrer l'installeur", d:"Choisir « Desktop Experience » ou installation Core (sans GUI)."},
      {t:"Rôles serveur", d:"Ajouter les rôles via le Gestionnaire de serveur (AD DS, DNS, DHCP…)."},
      {t:"Activation", d:"Entrer une clé de licence ou activer via KMS/AD."}
    ],
    alt:["windowsserver","clearos","openmediavault"],
    errors:[
      {q:"Secure Boot ou TPM 2.0 bloque l'installation",a:"Vérifie l'activation du TPM 2.0 et de Secure Boot dans le BIOS/UEFI avant de démarrer sur la clé. Si le PC est trop ancien, un contournement existe via le registre ou une option dédiée de Rufus, mais Microsoft ne garantit alors ni les mises à jour ni le support."},
      {q:"La clé USB n'apparaît pas dans le menu de boot",a:"Le disque doit être partitionné en GPT (pas MBR) et le mode UEFI activé dans le BIOS, CSM/Legacy désactivé. Recrée la clé avec Rufus en confirmant bien le schéma GPT/UEFI."},
      {q:"Aucun disque détecté pendant l'installation",a:"Certains contrôleurs de stockage (NVMe RAID, Intel VMD) nécessitent un pilote supplémentaire. Bascule le mode SATA/RAID du BIOS en AHCI ou charge le pilote via « Charger un pilote » dans l'assistant."}
    ],
    faq:[
      {q:"Peut-on l'administrer sans interface graphique ?", a:"Oui, l'essentiel de l'administration se fait en ligne de commande via SSH, ce qui est d'ailleurs la pratique recommandée en production."},
      {q:"Quelle fréquence de mises à jour de sécurité ?", a:"Cela dépend du cycle de support choisi ; privilégier une version LTS/stable pour un serveur en production."}
    ]
  },
  {
    id:"clearos", name:"ClearOS", version:"7.x Community", cat:"server", color:"#4CAF50", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#4CAF50" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#4CAF50">Cl</text></svg>',
    tag:"Serveur/passerelle tout-en-un pour PME : pare-feu, VPN, messagerie, partage de fichiers.",
    site:"clearos.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"RHEL",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64 (physique ou VM)"},
    steps:[
      {t:"Télécharger l'ISO", d:"clearos.com/downloads → édition Community."},
      {t:"Graver la clé", d:"Rufus ou balenaEtcher."},
      {t:"Installeur texte", d:"Partitionnement automatique conseillé pour débuter."},
      {t:"Assistant Marketplace", d:"Choisir les modules à activer (pare-feu, proxy, antivirus…)."},
      {t:"Webconfig", d:"Terminer la config depuis l'interface web sur le port 81.", code:"https://<ip>:81"}
    ],
    alt:["oraclelinux","centos","almalinux"],
    errors:[
      {q:"Pas d'écran connecté / installation headless",a:"La plupart de ces systèmes proposent un mode d'installation automatisée par fichier de configuration (kickstart, cloud-init, preseed) plutôt que l'assistant graphique — vérifie la documentation officielle avant de brancher un écran inutilement."},
      {q:"Pas d'IP après le premier démarrage",a:"Le réseau par défaut est souvent en DHCP sur la première interface détectée seulement. Si plusieurs cartes réseau sont présentes, vérifie laquelle a reçu une adresse via la console locale avant de chercher à s'y connecter à distance."},
      {q:"Configuration RAID/ZFS refusée à l'installation",a:"Un disque ayant déjà une table de partition ou des métadonnées RAID d'une installation précédente peut bloquer l'assistant. Efface les disques cibles via la console avant de relancer l'installation."}
    ],
    faq:[
      {q:"Peut-on l'administrer sans interface graphique ?", a:"Oui, l'essentiel de l'administration se fait en ligne de commande via SSH, ce qui est d'ailleurs la pratique recommandée en production."},
      {q:"Quelle fréquence de mises à jour de sécurité ?", a:"Cela dépend du cycle de support choisi ; privilégier une version LTS/stable pour un serveur en production."}
    ]
  },
  {
    id:"kicksecure", name:"Kicksecure", version:"18", cat:"security", color:"#6B46C1", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#6B46C1" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#6B46C1">Ks</text></svg>',
    tag:"Debian durci par défaut (les mêmes protections que Whonix, sans le routage Tor obligatoire).",
    site:"kicksecure.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"8-32 Go pour une clé USB persistante", cpu:"x86_64 (VM recommandée pour l'isolement)"},
    steps:[
      {t:"Télécharger l'ISO", d:"kicksecure.com/wiki/Download → image ISO ou VM."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Installeur Debian", d:"Suivre l'installeur standard, chiffrement de disque recommandé (LUKS)."},
      {t:"Durcissement", d:"Les protections (AppArmor, kernel hardening) sont actives dès le premier boot."},
      {t:"Mises à jour", d:"Utiliser l'outil « Update-Kicksecure » plutôt qu'apt seul pour garder la cohérence sécurité."}
    ],
    alt:["whonix","parrot","tails"],
    errors:[
      {q:"Les modifications disparaissent après redémarrage",a:"En mode live sans persistance activée, tout est perdu au redémarrage par conception. Configure une partition de persistance chiffrée à la création de la clé si tu veux conserver des données."},
      {q:"Le système ne démarre pas en machine virtuelle",a:"Certains de ces systèmes nécessitent la virtualisation matérielle (VT-x/AMD-V, et VT-d pour l'isolation complète des périphériques) activée dans le BIOS — sans ça, l'installation échoue silencieusement."},
      {q:"Tor met un temps anormalement long à se connecter",a:"Un réseau bridé (Wi-Fi d'entreprise, hôtel) bloque parfois les nœuds Tor par défaut. Utilise les « ponts » (bridges) proposés dans l'assistant de connexion au lieu de la connexion directe."}
    ],
    faq:[
      {q:"Est-ce légal de l'utiliser ?", a:"Oui, l'outil lui-même est légal. C'est l'usage qui est encadré : ne l'utiliser que sur des systèmes dont on est propriétaire ou avec une autorisation écrite explicite."},
      {q:"Faut-il l'installer ou peut-on rester en mode Live ?", a:"Le mode Live suffit pour la plupart des usages ponctuels ; une installation persistante est utile pour un usage régulier et la sauvegarde des outils/configurations."}
    ]
  },
  {
    id:"dietpi", name:"DietPi", version:"9.x", cat:"lightweight", color:"#6BAF41", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#6BAF41" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#6BAF41">Di</text></svg>',
    tag:"OS minimaliste pour Raspberry Pi / SBC, avec un menu d'installation de services en un clic.",
    site:"dietpi.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Facile", base:"Debian",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'image", d:"dietpi.com/#download → choisir la carte/SBC cible."},
      {t:"Graver la carte SD", d:"balenaEtcher ou Raspberry Pi Imager."},
      {t:"Config pré-boot", d:"Éditer dietpi.txt sur la partition boot pour Wi-Fi/SSH à l'avance."},
      {t:"Premier boot", d:"Connexion SSH, le script dietpi-software se lance automatiquement."},
      {t:"Logiciels", d:"Installer Pi-hole, Nextcloud, Home Assistant… via le menu dietpi-software."}
    ],
    alt:["q4os","peppermint","sparkylinux"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"silverblue", name:"Fedora Silverblue", version:"40", cat:"advanced", color:"#3C6EB4", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#3C6EB4" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#3C6EB4">Sb</text></svg>',
    tag:"Fedora immuable façon image atomique (rpm-ostree). Rollbacks natifs, apps en Flatpak.",
    site:"fedoraproject.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Avancé", base:"Fedora",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"fedoraproject.org/atomic-desktops/silverblue → image officielle."},
      {t:"Graver la clé", d:"Fedora Media Writer ou balenaEtcher."},
      {t:"Installer", d:"Anaconda classique, mais système de fichiers en lecture seule ensuite."},
      {t:"Couches", d:"Ajouter des paquets système avec rpm-ostree.", code:"rpm-ostree install <paquet>"},
      {t:"Rollback", d:"En cas de souci, revenir au déploiement précédent au redémarrage (menu GRUB)."}
    ],
    alt:["kinoite","bluefin","aurora"],
    errors:[
      {q:"« Aucun paquet à installer » / le gestionnaire de paquets classique échoue",a:"Le système de fichiers racine est en lecture seule par design. Utilise l'outil dédié à la surcouche (rpm-ostree, transactional-update, ABRoot selon le système), puis redémarre pour appliquer le changement."},
      {q:"Le changement ne prend pas effet immédiatement",a:"Les mises à jour et installations système préparent une nouvelle image, activée seulement au redémarrage suivant. C'est normal, contrairement à un système classique."},
      {q:"Une application graphique manque au premier lancement",a:"Installe-la via Flatpak (déjà préconfiguré sur la plupart de ces systèmes) ou dans un conteneur toolbox/distrobox plutôt que sur le système hôte, qui reste volontairement minimal."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."},
      {q:"Pourquoi la commande dnf install ne fonctionne pas comme sur Fedora Workstation ?", a:"Fedora Silverblue a un système de fichiers immuable : il faut utiliser rpm-ostree install (nécessite un redémarrage) pour le système de base, ou Flatpak/toolbox pour les applications."}
    ]
  },
  {
    id:"chimera", name:"Chimera Linux", version:"rolling", cat:"advanced", color:"#708090", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#708090" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#708090">Ch</text></svg>',
    tag:"Distro expérimentale musl/LLVM avec un userland BSD (dinit, bmake). Ni GNU ni systemd.",
    site:"chimera-linux.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"—",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"chimera-linux.org/download → image bootstrap."},
      {t:"Graver la clé", d:"dd ou balenaEtcher."},
      {t:"Live", d:"Booter en live, ouvrir un terminal."},
      {t:"chimera-bootstrap", d:"Lancer le script d'installation interactif.", code:"chimera-bootstrap-install"},
      {t:"apk", d:"Gérer les paquets avec apk (comme sur Alpine) une fois installé."}
    ],
    alt:["voidlinux","silverblue","kinoite"],
    errors:[
      {q:"Pas de réseau dans le shell live",a:"Le Wi-Fi se configure manuellement via iwctl ou wpa_supplicant selon le système. Sans connexion, impossible de récupérer les paquets pendant l'installation — vérifie-la avant de lancer la phase de bootstrap."},
      {q:"Le système ne boote plus après l'installation",a:"Cause la plus fréquente : partition EFI non montée sur /boot ou /boot/efi avant d'installer le bootloader, ou fstab généré trop tôt/oublié. Revérifie le montage des partitions avant de chrooter."},
      {q:"L'installation ou la synchronisation des paquets échoue",a:"Vérifie l'horloge système avant toute opération réseau — un décalage d'horloge fait souvent échouer la vérification des clés de signature des dépôts."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."},
      {q:"Chimera Linux utilise-t-il systemd ?", a:"Non, Chimera utilise son propre système d'init « dinit » et la libc musl ; les scripts pensés pour systemd ou glibc doivent être adaptés."}
    ]
  },
  {
    id:"openindiana", name:"OpenIndiana", version:"Hipster", cat:"bsd", color:"#F26522", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#F26522" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#F26522">Oi</text></svg>',
    tag:"Héritier libre d'OpenSolaris (illumos). ZFS natif, zones, DTrace : l'ADN Solaris préservé.",
    site:"openindiana.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"illumos",
    req:{ram:"1-2 Go min.", disk:"10-20 Go d'espace disque", cpu:"x86_64 (ARM selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"openindiana.org/download → édition Hipster (rolling)."},
      {t:"Graver la clé", d:"dd ou balenaEtcher."},
      {t:"Live", d:"Booter en session live GNOME/Xfce."},
      {t:"Installer", d:"Lancer l'installeur graphique, partitionnement sur ZFS conseillé."},
      {t:"pkg", d:"Gérer les paquets IPS avec la commande pkg.", code:"pkg install <paquet>"}
    ],
    alt:["midnightbsd","ghostbsd","dragonfly"],
    errors:[
      {q:"Pas de Wi-Fi détecté après l'installation",a:"Le firmware du chipset Wi-Fi n'est souvent pas inclus par défaut (licence propriétaire). Installe le paquet firmware correspondant après le premier boot, en filaire, avant de configurer le sans-fil."},
      {q:"Confusion entre pkg et les ports",a:"pkg installe des binaires précompilés (rapide), les ports compilent depuis les sources (plus de contrôle, plus long). Pour débuter, reste sur pkg — mélanger les deux peut créer des incohérences de versions."},
      {q:"Le choix par défaut entre UFS et ZFS interroge",a:"ZFS demande plus de RAM mais apporte snapshots et intégrité des données ; UFS est plus léger. Sur une machine avec moins de 4 Go de RAM, préfère UFS."}
    ],
    faq:[
      {q:"En quoi est-ce différent de Linux ?", a:"Les BSD partagent un ancêtre Unix commun mais un noyau et un espace utilisateur distincts de Linux, avec une base de code et une documentation historiquement très cohérentes."},
      {q:"La compatibilité matérielle est-elle aussi large que sous Linux ?", a:"Globalement un peu plus restreinte, notamment sur le matériel très récent ou les portables grand public ; vérifier les listes de compatibilité officielles avant d'installer."},
      {q:"Comment revenir en arrière après une mise à jour qui pose problème ?", a:"OpenIndiana (illumos) gère des environnements d'amorçage ZFS via beadm : on peut redémarrer sur l'environnement précédent depuis le menu de boot, contrairement à un simple rollback sous Linux."}
    ]
  },
  {
    id:"midnightbsd", name:"MidnightBSD", version:"3.2", cat:"bsd", color:"#1A1A40", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#1A1A40" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#1A1A40">Mb</text></svg>',
    tag:"Fork de FreeBSD orienté bureau, avec son propre gestionnaire de paquets mport.",
    site:"midnightbsd.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"FreeBSD",
    req:{ram:"1-2 Go min.", disk:"10-20 Go d'espace disque", cpu:"x86_64 (ARM selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"midnightbsd.org → image d'installation."},
      {t:"Graver la clé", d:"dd depuis un terminal Unix."},
      {t:"Installeur bsdinstall", d:"Suivre les étapes texte : disque, partitions, réseau."},
      {t:"Premier boot", d:"Créer un utilisateur, configurer le clavier."},
      {t:"mport", d:"Installer des logiciels avec mport plutôt que pkg.", code:"mport install <paquet>"}
    ],
    alt:["ghostbsd","hardenedbsd","nomadbsd"],
    errors:[
      {q:"Pas de Wi-Fi détecté après l'installation",a:"Le firmware du chipset Wi-Fi n'est souvent pas inclus par défaut (licence propriétaire). Installe le paquet firmware correspondant après le premier boot, en filaire, avant de configurer le sans-fil."},
      {q:"Confusion entre pkg et les ports",a:"pkg installe des binaires précompilés (rapide), les ports compilent depuis les sources (plus de contrôle, plus long). Pour débuter, reste sur pkg — mélanger les deux peut créer des incohérences de versions."},
      {q:"Le choix par défaut entre UFS et ZFS interroge",a:"ZFS demande plus de RAM mais apporte snapshots et intégrité des données ; UFS est plus léger. Sur une machine avec moins de 4 Go de RAM, préfère UFS."}
    ],
    faq:[
      {q:"En quoi est-ce différent de Linux ?", a:"Les BSD partagent un ancêtre Unix commun mais un noyau et un espace utilisateur distincts de Linux, avec une base de code et une documentation historiquement très cohérentes."},
      {q:"La compatibilité matérielle est-elle aussi large que sous Linux ?", a:"Globalement un peu plus restreinte, notamment sur le matériel très récent ou les portables grand public ; vérifier les listes de compatibilité officielles avant d'installer."},
      {q:"Les paquets FreeBSD sont-ils compatibles avec MidnightBSD ?", a:"Non, MidnightBSD a divergé de FreeBSD depuis des années et maintient son propre dépôt de paquets (mports) ; il ne faut pas mélanger les sources des deux systèmes."}
    ]
  },
  {
    id:"vyos", name:"VyOS", version:"1.5 Circinus", cat:"network", color:"#00B39F", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#00B39F" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#00B39F">Vy</text></svg>',
    tag:"Routeur/pare-feu open source « as code », CLI façon Cisco/Juniper, config versionnable.",
    site:"vyos.io", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Avancé", base:"Debian",
    req:{ram:"512 Mo à 1 Go", disk:"4-8 Go (carte CF/SSD selon le boîtier)", cpu:"x86_64 faible consommation ou matériel dédié"},
    steps:[
      {t:"Télécharger l'image", d:"vyos.io/downloads → build LTS (compte communautaire gratuit)."},
      {t:"Graver la clé", d:"dd ou balenaEtcher."},
      {t:"Live puis install", d:"Se connecter (vyos/vyos), lancer l'installeur.", code:"install image"},
      {t:"Configuration", d:"Entrer en mode config et définir les interfaces réseau.", code:"configure\nset interfaces ethernet eth0 address dhcp"},
      {t:"Sauvegarde", d:"Valider et sauvegarder la configuration.", code:"commit\nsave"}
    ],
    alt:["ipfire","pfsense","opnsense"],
    errors:[
      {q:"Plus d'accès à l'interface après configuration réseau",a:"Une mauvaise règle de pare-feu ou un mauvais port assigné en WAN peut couper l'accès à l'interface web. Garde toujours un accès console/série de secours avant de modifier les règles depuis l'interface elle-même."},
      {q:"Les ports WAN/LAN sont inversés",a:"L'assignation des interfaces se fait à l'installation ou via la console : vérifie le nommage exact avant de câbler, certains boîtiers n'étiquettent pas leurs ports dans l'ordre logique."},
      {q:"L'image ne boote pas sur le boîtier",a:"Vérifie que l'image téléchargée correspond bien à l'architecture exacte du boîtier (x86_64 générique vs image spécifique constructeur) — flasher la mauvaise image est la cause n°1 d'échec sur ce type de matériel."}
    ],
    faq:[
      {q:"Faut-il un matériel dédié (boîtier pare-feu) ?", a:"Non obligatoire : un mini-PC ou une machine virtuelle avec plusieurs interfaces réseau suffit pour débuter."},
      {q:"Peut-on migrer sa configuration existante ?", a:"Selon les projets, des outils d'import de configuration existent (règles de pare-feu, DHCP…) ; sinon la reconfiguration se fait manuellement."},
      {q:"Pourquoi mes modifications de configuration disparaissent-elles ?", a:"VyOS exige que toute la configuration passe par le mode configure de sa CLI puis commit et save ; modifier des fichiers directement dans le shell ne persiste pas après redémarrage."}
    ]
  },
  {
    id:"serenityos", name:"SerenityOS", version:"nightly", cat:"alt", color:"#9B59B6", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#9B59B6" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#9B59B6">Se</text></svg>',
    tag:"OS graphique écrit from scratch par des passionnés, esprit fin-90s. Surtout pour tester en VM.",
    site:"serenityos.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"—",
    req:{ram:"2-4 Go selon le projet", disk:"8-16 Go d'espace disque", cpu:"x86_64 standard"},
    steps:[
      {t:"Compiler l'image", d:"Cloner le dépôt GitHub et suivre le build documenté (pas d'ISO officielle stable)."},
      {t:"Prérequis", d:"Installer les dépendances de build (CMake, Qt, Ninja…)."},
      {t:"Build", d:"Lancer le script de build qui génère l'image disque.", code:"Meta/serenity.sh run"},
      {t:"Tester en VM", d:"L'image générée se lance directement dans QEMU."},
      {t:"Découvrir", d:"Explorer les applis maison : navigateur Ladybird, éditeur, terminal."}
    ],
    alt:["redox","haiku","templeos"],
    errors:[
      {q:"Aucun pilote pour le GPU ou le Wi-Fi modernes",a:"Ces projets ciblent un public restreint et le support matériel récent est très limité par design. Privilégie une machine ancienne ou une machine virtuelle plutôt qu'un PC neuf pour de meilleures chances de compatibilité."},
      {q:"Un logiciel Windows/Linux classique ne fonctionne pas",a:"La compatibilité annoncée reste partielle sur ces projets communautaires : teste sur un cas simple avant de compter dessus pour un usage précis."},
      {q:"Très peu de documentation en cas de blocage",a:"La communauté est réduite ; le forum ou le wiki officiel du projet reste la meilleure source, plus fiable que des tutoriels tiers généralistes qui datent vite sur ce type de système."}
    ],
    faq:[
      {q:"Pourquoi choisir un système aussi confidentiel ?", a:"Pour explorer une architecture ou une philosophie différente — souvent la curiosité technique ou la recherche d'alternatives aux grands écosystèmes."},
      {q:"Le support logiciel est-il suffisant pour un usage quotidien ?", a:"Généralement plus limité que sur les systèmes grand public ; à réserver à un usage secondaire, en test, ou pour les passionnés."},
      {q:"Puis-je utiliser SerenityOS comme système principal ?", a:"Non : c'est un projet expérimental en développement actif, pensé pour la curiosité technique et la contribution, pas pour un usage quotidien en production."}
    ]
  },
  {
    id:"redox", name:"Redox OS", version:"0.9", cat:"alt", color:"#CC0000", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#CC0000" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#CC0000">Rx</text></svg>',
    tag:"OS écrit en Rust, microkernel, orienté sécurité mémoire. Projet de recherche actif.",
    site:"redox-os.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Avancé", base:"—",
    req:{ram:"2-4 Go selon le projet", disk:"8-16 Go d'espace disque", cpu:"x86_64 standard"},
    steps:[
      {t:"Télécharger l'image", d:"redox-os.org/download → image .img pré-compilée."},
      {t:"Graver la clé", d:"dd ou balenaEtcher (image brute, pas ISO)."},
      {t:"Booter", d:"Démarrer sur la clé, l'environnement Orbital se lance."},
      {t:"Tester en VM", d:"Alternative recommandée : lancer directement l'image dans QEMU."},
      {t:"pkg", d:"Installer des logiciels avec le gestionnaire de paquets intégré.", code:"pkg install <paquet>"}
    ],
    alt:["serenityos","haiku","templeos"],
    errors:[
      {q:"Aucun pilote pour le GPU ou le Wi-Fi modernes",a:"Ces projets ciblent un public restreint et le support matériel récent est très limité par design. Privilégie une machine ancienne ou une machine virtuelle plutôt qu'un PC neuf pour de meilleures chances de compatibilité."},
      {q:"Un logiciel Windows/Linux classique ne fonctionne pas",a:"La compatibilité annoncée reste partielle sur ces projets communautaires : teste sur un cas simple avant de compter dessus pour un usage précis."},
      {q:"Très peu de documentation en cas de blocage",a:"La communauté est réduite ; le forum ou le wiki officiel du projet reste la meilleure source, plus fiable que des tutoriels tiers généralistes qui datent vite sur ce type de système."}
    ],
    faq:[
      {q:"Pourquoi choisir un système aussi confidentiel ?", a:"Pour explorer une architecture ou une philosophie différente — souvent la curiosité technique ou la recherche d'alternatives aux grands écosystèmes."},
      {q:"Le support logiciel est-il suffisant pour un usage quotidien ?", a:"Généralement plus limité que sur les systèmes grand public ; à réserver à un usage secondaire, en test, ou pour les passionnés."},
      {q:"Le matériel réel est-il bien supporté ?", a:"Redox OS cible d'abord la virtualisation (QEMU/VirtualBox) : le support du matériel physique reste partiel et expérimental, mieux vaut tester en VM avant d'envisager du matériel réel."}
    ]
  },
  /* ===================== OUTILS / SECOURS ===================== */
  {
    id:"clonezilla", name:"Clonezilla Live", version:"3.1", cat:"recovery", color:"#F7B500", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#F7B500" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#F7B500">Cz</text></svg>',
    tag:"Outil de clonage/sauvegarde d'images disque, l'équivalent libre de Norton Ghost.",
    site:"clonezilla.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"512 Mo à 1 Go", disk:"2-4 Go (clé USB bootable)", cpu:"x86_64, fonctionne sur la plupart des PC"},
    steps:[
      {t:"Télécharger l'ISO", d:"clonezilla.org/downloads.php → édition stable amd64."},
      {t:"Graver la clé", d:"Rufus (mode DD) ou balenaEtcher."},
      {t:"Démarrer", d:"Booter sur la clé, choisir « Clonezilla live »."},
      {t:"Mode device-image", d:"Sauvegarder un disque/partition vers une image sur disque externe/réseau."},
      {t:"Restauration", d:"Relancer Clonezilla et choisir « restoredisk » pour réinjecter l'image."}
    ],
    alt:["rescatux","gpartedlive","redorescue"],
    errors:[
      {q:"Mauvais disque sélectionné pendant un clonage",a:"C'est l'erreur la plus dangereuse possible avec ce type d'outil : une cible mal choisie efface définitivement le disque de destination. Vérifie toujours deux fois la taille et le nom exact du disque affiché avant de valider."},
      {q:"Les modifications ne sont pas conservées",a:"Ces systèmes tournent en RAM depuis la clé USB et ne conservent rien au redémarrage par conception — toute donnée à garder doit être copiée sur un support externe avant d'éteindre."},
      {q:"Un contrôleur RAID/NVMe exotique n'est pas reconnu",a:"Le noyau embarqué sur ces outils est parfois plus ancien que celui du système d'origine et peut manquer un pilote récent. Une version plus à jour de l'outil règle souvent le problème."}
    ],
    faq:[
      {q:"L'outil modifie-t-il le disque automatiquement ?", a:"Non, il s'utilise en mode Live et ne touche au disque que sur action explicite (formatage, restauration, écriture d'image)."},
      {q:"Peut-on l'utiliser sur n'importe quel PC en panne ?", a:"Dans la majorité des cas oui, tant que le PC peut démarrer sur une clé USB ; en cas de panne matérielle plus grave, un diagnostic matériel reste nécessaire."}
    ]
  },
  {
    id:"systemrescue", name:"SystemRescue", version:"11", cat:"recovery", color:"#2ECC71", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#2ECC71" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#2ECC71">Sr</text></svg>',
    tag:"Live Linux de dépannage (Arch-based) : partitionnement, récupération de données, réseau.",
    site:"sysrescue.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Intermédiaire", base:"Arch",
    req:{ram:"512 Mo à 1 Go", disk:"2-4 Go (clé USB bootable)", cpu:"x86_64, fonctionne sur la plupart des PC"},
    steps:[
      {t:"Télécharger l'ISO", d:"sysrescue.org/Download → image amd64."},
      {t:"Graver la clé", d:"Rufus ou balenaEtcher."},
      {t:"Démarrer", d:"Booter en UEFI ou Legacy, session live avec Xfce ou console."},
      {t:"Outils", d:"GParted, TestDisk/PhotoRec, ddrescue déjà installés."},
      {t:"Réseau", d:"Se connecter en Wi-Fi/Ethernet pour télécharger des paquets Arch au besoin.", code:"pacman -Sy <paquet>"}
    ],
    alt:["clonezilla","rescatux","gpartedlive"],
    errors:[
      {q:"Mauvais disque sélectionné pendant un clonage",a:"C'est l'erreur la plus dangereuse possible avec ce type d'outil : une cible mal choisie efface définitivement le disque de destination. Vérifie toujours deux fois la taille et le nom exact du disque affiché avant de valider."},
      {q:"Les modifications ne sont pas conservées",a:"Ces systèmes tournent en RAM depuis la clé USB et ne conservent rien au redémarrage par conception — toute donnée à garder doit être copiée sur un support externe avant d'éteindre."},
      {q:"Un contrôleur RAID/NVMe exotique n'est pas reconnu",a:"Le noyau embarqué sur ces outils est parfois plus ancien que celui du système d'origine et peut manquer un pilote récent. Une version plus à jour de l'outil règle souvent le problème."}
    ],
    faq:[
      {q:"L'outil modifie-t-il le disque automatiquement ?", a:"Non, il s'utilise en mode Live et ne touche au disque que sur action explicite (formatage, restauration, écriture d'image)."},
      {q:"Peut-on l'utiliser sur n'importe quel PC en panne ?", a:"Dans la majorité des cas oui, tant que le PC peut démarrer sur une clé USB ; en cas de panne matérielle plus grave, un diagnostic matériel reste nécessaire."}
    ]
  },
  {
    id:"rescatux", name:"Rescatux", version:"0.75", cat:"recovery", color:"#E74C3C", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#E74C3C" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#E74C3C">Rt</text></svg>',
    tag:"Live de secours guidé par menus (Rescapp) : réparer GRUB, mots de passe, permissions.",
    site:"rescatux.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Facile", base:"Debian",
    req:{ram:"512 Mo à 1 Go", disk:"2-4 Go (clé USB bootable)", cpu:"x86_64, fonctionne sur la plupart des PC"},
    steps:[
      {t:"Télécharger l'ISO", d:"rescatux.org → dernière version stable."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Démarrer Rescapp", d:"L'interface graphique de dépannage se lance au boot live."},
      {t:"Réparer GRUB", d:"Bouton dédié « Restore GRUB » pour un dual-boot cassé."},
      {t:"Autres réparations", d:"Réinitialiser un mot de passe Windows/Linux, vérifier le système de fichiers."}
    ],
    alt:["clonezilla","gpartedlive","redorescue"],
    errors:[
      {q:"Mauvais disque sélectionné pendant un clonage",a:"C'est l'erreur la plus dangereuse possible avec ce type d'outil : une cible mal choisie efface définitivement le disque de destination. Vérifie toujours deux fois la taille et le nom exact du disque affiché avant de valider."},
      {q:"Les modifications ne sont pas conservées",a:"Ces systèmes tournent en RAM depuis la clé USB et ne conservent rien au redémarrage par conception — toute donnée à garder doit être copiée sur un support externe avant d'éteindre."},
      {q:"Un contrôleur RAID/NVMe exotique n'est pas reconnu",a:"Le noyau embarqué sur ces outils est parfois plus ancien que celui du système d'origine et peut manquer un pilote récent. Une version plus à jour de l'outil règle souvent le problème."}
    ],
    faq:[
      {q:"L'outil modifie-t-il le disque automatiquement ?", a:"Non, il s'utilise en mode Live et ne touche au disque que sur action explicite (formatage, restauration, écriture d'image)."},
      {q:"Peut-on l'utiliser sur n'importe quel PC en panne ?", a:"Dans la majorité des cas oui, tant que le PC peut démarrer sur une clé USB ; en cas de panne matérielle plus grave, un diagnostic matériel reste nécessaire."}
    ]
  },
  /* ===================== AJOUTS v3.3 ===================== */
  {
    id:"ultramarine", name:"Ultramarine Linux", version:"41", cat:"desktop", color:"#4169E1", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#4169E1" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#4169E1">Um</text></svg>',
    tag:"Fedora repensée grand public : préconfigurée, codecs inclus, plusieurs bureaux au choix.",
    site:"ultramarine-linux.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Fedora",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"ultramarine-linux.org/download → édition GNOME, Budgie ou Flagship."},
      {t:"Graver la clé", d:"balenaEtcher ou Fedora Media Writer."},
      {t:"Live", d:"Tester en live, codecs multimédias déjà présents."},
      {t:"Installer", d:"Anaconda, comme sur Fedora classique."},
      {t:"Premier démarrage", d:"Les dépôts tiers (RPM Fusion) sont déjà activés."}
    ],
    alt:["mageia","pclinuxos","kubuntu"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"mageia", name:"Mageia", version:"9", cat:"desktop", color:"#1E88E5", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#1E88E5" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#1E88E5">Mg</text></svg>',
    tag:"Fork communautaire de Mandriva. Installeur DrakX réputé, très complet.",
    site:"mageia.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"—",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"mageia.org/fr/downloads → édition Live ou Classic (netinstall)."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Installeur DrakX", d:"Suivre les étapes : partitionnement, groupes de paquets, bootloader."},
      {t:"Bureau", d:"Choisir KDE Plasma, GNOME, Xfce ou LXQt."},
      {t:"Centre de contrôle Mageia", d:"Outil unifié pour gérer réseau, matériel et services après installation."}
    ],
    alt:["ultramarine","pclinuxos","openmandriva"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"chimeraos", name:"ChimeraOS", version:"48", cat:"gaming", color:"#17A2B8", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#17A2B8" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#17A2B8">Cm</text></svg>',
    tag:"Alternative libre à SteamOS pour n'importe quel PC. Boot direct en Big Picture / mode console.",
    site:"chimeraos.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Arch",
    req:{ram:"8 Go min. (16 Go conseillés)", disk:"64 Go min., bien plus selon la bibliothèque de jeux", cpu:"CPU récent + GPU dédié compatible"},
    steps:[
      {t:"Télécharger l'image", d:"chimeraos.org → image d'installation la plus récente."},
      {t:"Graver la clé", d:"balenaEtcher, écriture image brute."},
      {t:"Installer", d:"Booter sur la clé, lancer l'installeur graphique (efface le disque cible)."},
      {t:"Premier démarrage", d:"Steam se lance directement en mode Big Picture."},
      {t:"Autres launchers", d:"Ajouter Lutris, Heroic ou EmuDeck via le menu desktop caché."}
    ],
    alt:["cachyos","garuda","steamos"],
    errors:[
      {q:"La manette n'est pas reconnue",a:"Certaines manettes (notamment Xbox récentes en Bluetooth) demandent un pilote ou un appairage manuel au premier lancement. Branche-la en filaire pour la configuration initiale, plus fiable."},
      {q:"Les jeux/ROMs n'apparaissent pas",a:"Les BIOS des consoles émulées ne sont jamais fournis (question de droits) et doivent être ajoutés manuellement dans le bon dossier ; sans eux, plusieurs émulateurs refusent de lancer un jeu même valide."},
      {q:"Écran noir après une mise à jour des pilotes GPU",a:"Sur les systèmes basés Arch avec pilotes propriétaires NVIDIA, une mise à jour de kernel sans régénération de l'initramfs peut casser le démarrage graphique. Un rollback (si le système le permet) ou un chroot depuis une clé live permet de revenir en arrière."}
    ],
    faq:[
      {q:"Tous les jeux Windows fonctionnent-ils ?", a:"La compatibilité dépend de la couche de traduction utilisée (Proton, Wine) : la plupart des jeux populaires fonctionnent, mais certains titres avec anti-triche noyau restent incompatibles."},
      {q:"Faut-il une carte graphique dédiée ?", a:"Non obligatoire, mais fortement recommandée pour de bonnes performances en jeu."}
    ]
  },
  {
    id:"openmediavault", name:"OpenMediaVault", version:"7", cat:"server", color:"#009688", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#009688" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#009688">Om</text></svg>',
    tag:"NAS libre basé sur Debian. Partage réseau, RAID logiciel, plugins pour Docker/Nextcloud.",
    site:"openmediavault.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64 (physique ou VM)"},
    steps:[
      {t:"Télécharger l'ISO", d:"openmediavault.org/?page_id=195 → dernière image stable."},
      {t:"Graver la clé", d:"Rufus ou balenaEtcher."},
      {t:"Installeur texte", d:"Basé sur l'installeur Debian, choisir le disque système."},
      {t:"Interface web", d:"Se connecter depuis un navigateur (identifiants par défaut admin/openmediavault).", code:"http://<ip-du-nas>"},
      {t:"Stockage", d:"Créer les systèmes de fichiers et partages SMB/NFS depuis l'interface web."}
    ],
    alt:["ucs","truenas","proxmox"],
    errors:[
      {q:"Pas d'écran connecté / installation headless",a:"La plupart de ces systèmes proposent un mode d'installation automatisée par fichier de configuration (kickstart, cloud-init, preseed) plutôt que l'assistant graphique — vérifie la documentation officielle avant de brancher un écran inutilement."},
      {q:"Pas d'IP après le premier démarrage",a:"Le réseau par défaut est souvent en DHCP sur la première interface détectée seulement. Si plusieurs cartes réseau sont présentes, vérifie laquelle a reçu une adresse via la console locale avant de chercher à s'y connecter à distance."},
      {q:"Configuration RAID/ZFS refusée à l'installation",a:"Un disque ayant déjà une table de partition ou des métadonnées RAID d'une installation précédente peut bloquer l'assistant. Efface les disques cibles via la console avant de relancer l'installation."}
    ],
    faq:[
      {q:"Peut-on l'administrer sans interface graphique ?", a:"Oui, l'essentiel de l'administration se fait en ligne de commande via SSH, ce qui est d'ailleurs la pratique recommandée en production."},
      {q:"Quelle fréquence de mises à jour de sécurité ?", a:"Cela dépend du cycle de support choisi ; privilégier une version LTS/stable pour un serveur en production."}
    ]
  },
  {
    id:"xcpng", name:"XCP-ng", version:"8.3", cat:"server", color:"#F47B20", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#F47B20" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#F47B20">Xn</text></svg>',
    tag:"Hyperviseur libre basé sur Xen, alternative sérieuse à ESXi. Géré via Xen Orchestra.",
    site:"xcp-ng.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Xen",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64 (physique ou VM)"},
    steps:[
      {t:"Télécharger l'ISO", d:"xcp-ng.org/#easy-to-install → image d'installation officielle."},
      {t:"Graver la clé", d:"Rufus (mode DD) ou balenaEtcher."},
      {t:"Installeur texte", d:"Choisir le disque, le fuseau horaire et le mot de passe root."},
      {t:"Réseau", d:"Configurer l'IP de gestion (statique recommandée pour un serveur)."},
      {t:"Xen Orchestra", d:"Déployer Xen Orchestra (VM ou appliance) pour piloter l'hyperviseur via le web."}
    ],
    alt:["openmediavault","clearos","winserver2025"],
    errors:[
      {q:"Pas d'écran connecté / installation headless",a:"La plupart de ces systèmes proposent un mode d'installation automatisée par fichier de configuration (kickstart, cloud-init, preseed) plutôt que l'assistant graphique — vérifie la documentation officielle avant de brancher un écran inutilement."},
      {q:"Pas d'IP après le premier démarrage",a:"Le réseau par défaut est souvent en DHCP sur la première interface détectée seulement. Si plusieurs cartes réseau sont présentes, vérifie laquelle a reçu une adresse via la console locale avant de chercher à s'y connecter à distance."},
      {q:"Configuration RAID/ZFS refusée à l'installation",a:"Un disque ayant déjà une table de partition ou des métadonnées RAID d'une installation précédente peut bloquer l'assistant. Efface les disques cibles via la console avant de relancer l'installation."}
    ],
    faq:[
      {q:"Peut-on l'administrer sans interface graphique ?", a:"Oui, l'essentiel de l'administration se fait en ligne de commande via SSH, ce qui est d'ailleurs la pratique recommandée en production."},
      {q:"Quelle fréquence de mises à jour de sécurité ?", a:"Cela dépend du cycle de support choisi ; privilégier une version LTS/stable pour un serveur en production."},
      {q:"Comment gérer XCP-ng après l'installation ?", a:"XCP-ng n'a pas d'interface graphique locale : la gestion se fait à distance via Xen Orchestra (ou XenCenter), à installer séparément sur un autre poste ou VM."}
    ]
  },
  {
    id:"athenaos", name:"Athena OS", version:"25.0", cat:"security", color:"#C0392B", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#C0392B" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#C0392B">At</text></svg>',
    tag:"Distro pentest basée sur Arch, orientée personnalisation (BlackArch/Kali repos en option).",
    site:"athenaos.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Arch",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"8-32 Go pour une clé USB persistante", cpu:"x86_64 (VM recommandée pour l'isolement)"},
    steps:[
      {t:"Télécharger l'ISO", d:"athenaos.org/en/download → image ISO officielle."},
      {t:"Graver la clé", d:"Rufus ou balenaEtcher."},
      {t:"Live", d:"Booter en live, environnement Hyprland ou KDE selon l'édition."},
      {t:"Installer", d:"Lancer l'installeur graphique (Calamares)."},
      {t:"athena-*", d:"Utiliser les scripts athena-add-repo / athena-tool pour ajouter des outils de sécurité."}
    ],
    alt:["blackarch","caine","kicksecure"],
    errors:[
      {q:"Les modifications disparaissent après redémarrage",a:"En mode live sans persistance activée, tout est perdu au redémarrage par conception. Configure une partition de persistance chiffrée à la création de la clé si tu veux conserver des données."},
      {q:"Le système ne démarre pas en machine virtuelle",a:"Certains de ces systèmes nécessitent la virtualisation matérielle (VT-x/AMD-V, et VT-d pour l'isolation complète des périphériques) activée dans le BIOS — sans ça, l'installation échoue silencieusement."},
      {q:"Tor met un temps anormalement long à se connecter",a:"Un réseau bridé (Wi-Fi d'entreprise, hôtel) bloque parfois les nœuds Tor par défaut. Utilise les « ponts » (bridges) proposés dans l'assistant de connexion au lieu de la connexion directe."}
    ],
    faq:[
      {q:"Est-ce légal de l'utiliser ?", a:"Oui, l'outil lui-même est légal. C'est l'usage qui est encadré : ne l'utiliser que sur des systèmes dont on est propriétaire ou avec une autorisation écrite explicite."},
      {q:"Faut-il l'installer ou peut-on rester en mode Live ?", a:"Le mode Live suffit pour la plupart des usages ponctuels ; une installation persistante est utile pour un usage régulier et la sauvegarde des outils/configurations."},
      {q:"Athena OS convient-il à un débutant en cybersécurité ?", a:"Non recommandé en première distribution : la base Arch Linux exige une bonne autonomie (pacman, AUR) en plus des connaissances pentest ; mieux vaut démarrer sur Kali."}
    ]
  },
  {
    id:"caine", name:"CAINE", version:"12", cat:"security", color:"#1F3A5F", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#1F3A5F" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#1F3A5F">Ca</text></svg>',
    tag:"Distro forensique (Computer Aided INvestigative Environment), basée sur Ubuntu. Écriture bloquée par défaut.",
    site:"caine-live.net", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Intermédiaire", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"8-32 Go pour une clé USB persistante", cpu:"x86_64 (VM recommandée pour l'isolement)"},
    steps:[
      {t:"Télécharger l'ISO", d:"caine-live.net/page5/page5.html → dernière version stable."},
      {t:"Graver la clé", d:"balenaEtcher (attention : ne pas monter les disques à analyser en écriture)."},
      {t:"Démarrer en live", d:"Les périphériques de stockage sont montés en lecture seule par défaut."},
      {t:"Outils", d:"Autopsy, Sleuth Kit, PhotoRec et une suite forensique complète sont préinstallés."},
      {t:"Rapport", d:"Utiliser le générateur de rapport intégré pour documenter l'analyse."}
    ],
    alt:["tsurugi","backbox","athenaos"],
    errors:[
      {q:"Les modifications disparaissent après redémarrage",a:"En mode live sans persistance activée, tout est perdu au redémarrage par conception. Configure une partition de persistance chiffrée à la création de la clé si tu veux conserver des données."},
      {q:"Le système ne démarre pas en machine virtuelle",a:"Certains de ces systèmes nécessitent la virtualisation matérielle (VT-x/AMD-V, et VT-d pour l'isolation complète des périphériques) activée dans le BIOS — sans ça, l'installation échoue silencieusement."},
      {q:"Tor met un temps anormalement long à se connecter",a:"Un réseau bridé (Wi-Fi d'entreprise, hôtel) bloque parfois les nœuds Tor par défaut. Utilise les « ponts » (bridges) proposés dans l'assistant de connexion au lieu de la connexion directe."}
    ],
    faq:[
      {q:"Est-ce légal de l'utiliser ?", a:"Oui, l'outil lui-même est légal. C'est l'usage qui est encadré : ne l'utiliser que sur des systèmes dont on est propriétaire ou avec une autorisation écrite explicite."},
      {q:"Faut-il l'installer ou peut-on rester en mode Live ?", a:"Le mode Live suffit pour la plupart des usages ponctuels ; une installation persistante est utile pour un usage régulier et la sauvegarde des outils/configurations."}
    ]
  },
  {
    id:"sparkylinux", name:"SparkyLinux", version:"7 Orion Belt", cat:"lightweight", color:"#E67E22", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#E67E22" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#E67E22">Sp</text></svg>',
    tag:"Basée sur Debian Testing, légère et rapide, avec des éditions spécialisées (multimédia, gaming).",
    site:"sparkylinux.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Debian",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"sparkylinux.org/download → édition stable ou rolling."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Live", d:"Booter et tester l'un des bureaux légers (Xfce, LXQt, MATE…)."},
      {t:"Calamares", d:"Installer via l'assistant graphique."},
      {t:"APTus", d:"Utiliser l'outil APTus pour installer rapidement des groupes de logiciels."}
    ],
    alt:["bunsenlabs","dietpi","q4os"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"4mlinux", name:"4MLinux", version:"46", cat:"lightweight", color:"#27AE60", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#27AE60" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#27AE60">4M</text></svg>',
    tag:"Micro-distribution (boot depuis un CD, tient en quelques dizaines de Mo) : maintenance, multimédia, mini-serveur.",
    site:"4mlinux.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~6 min", diff:"Facile", base:"—",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"4mlinux.com/index.php?page=download → édition Core ou complète."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Live", d:"Boot très rapide, utilisable directement depuis la RAM."},
      {t:"Mode installation", d:"Taper « install » au menu de boot pour une installation sur disque."},
      {t:"Utilisation", d:"Choisir un des 4 profils (maintenance, multimédia, mini-serveur, gaming rétro)."}
    ],
    alt:["sparkylinux","bunsenlabs","dietpi"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"bunsenlabs", name:"BunsenLabs", version:"Boron", cat:"lightweight", color:"#2C9F9F", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#2C9F9F" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#2C9F9F">Bl</text></svg>',
    tag:"Successeur communautaire de CrunchBang. Openbox minimaliste sur base Debian, très clavier-friendly.",
    site:"bunsenlabs.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"bunsenlabs.org/installation.html → dernière version stable."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Live", d:"Booter en live, environnement Openbox + tint2."},
      {t:"Installer", d:"Lancer Calamares depuis le menu conky/raccourci bureau."},
      {t:"bl-welcome", d:"Utiliser l'utilitaire de bienvenue pour configurer thèmes et raccourcis."}
    ],
    alt:["sparkylinux","dietpi","q4os"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"kinoite", name:"Fedora Kinoite", version:"40", cat:"advanced", color:"#294172", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#294172" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#294172">Kn</text></svg>',
    tag:"Équivalent KDE Plasma de Silverblue : bureau immuable, mises à jour atomiques, Flatpak par défaut.",
    site:"fedoraproject.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Avancé", base:"Fedora",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"fedoraproject.org/atomic-desktops/kinoite → image officielle."},
      {t:"Graver la clé", d:"Fedora Media Writer ou balenaEtcher."},
      {t:"Installer", d:"Anaconda, puis système en lecture seule (/usr immuable)."},
      {t:"Couches", d:"Ajouter des paquets système avec rpm-ostree.", code:"rpm-ostree install <paquet>"},
      {t:"Applications", d:"Installer le reste via Flatpak/Flathub plutôt qu'en couche système."}
    ],
    alt:["silverblue","bluefin","aurora"],
    errors:[
      {q:"« Aucun paquet à installer » / le gestionnaire de paquets classique échoue",a:"Le système de fichiers racine est en lecture seule par design. Utilise l'outil dédié à la surcouche (rpm-ostree, transactional-update, ABRoot selon le système), puis redémarre pour appliquer le changement."},
      {q:"Le changement ne prend pas effet immédiatement",a:"Les mises à jour et installations système préparent une nouvelle image, activée seulement au redémarrage suivant. C'est normal, contrairement à un système classique."},
      {q:"Une application graphique manque au premier lancement",a:"Installe-la via Flatpak (déjà préconfiguré sur la plupart de ces systèmes) ou dans un conteneur toolbox/distrobox plutôt que sur le système hôte, qui reste volontairement minimal."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."},
      {q:"Comment installer un logiciel qui n'est pas disponible en Flatpak sur Kinoite ?", a:"Comme sur Silverblue, il faut passer par rpm-ostree install (overlay au niveau système, redémarrage requis) car le système de fichiers de base est immuable."}
    ]
  },
  {
    id:"devuan", name:"Devuan", version:"6.1 Excalibur", cat:"advanced", color:"#8E1B3C", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#8E1B3C" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#8E1B3C">Dv</text></svg>',
    tag:"Fork de Debian sans systemd (init sysvinit/OpenRC/runit au choix). Pour les puristes Unix.",
    site:"devuan.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Debian",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"devuan.org/os/download → netinstall ou live desktop."},
      {t:"Graver la clé", d:"dd ou balenaEtcher."},
      {t:"Installeur texte", d:"Basé sur l'installeur Debian classique."},
      {t:"Choix de l'init", d:"Sélectionner sysvinit (défaut), OpenRC ou runit lors de l'installation."},
      {t:"Post-install", d:"Vérifier les services avec l'outil correspondant à l'init choisi.", code:"service --status-all"}
    ],
    alt:["artix","vanillaos","guix"],
    errors:[
      {q:"Pas de réseau dans le shell live",a:"Le Wi-Fi se configure manuellement via iwctl ou wpa_supplicant selon le système. Sans connexion, impossible de récupérer les paquets pendant l'installation — vérifie-la avant de lancer la phase de bootstrap."},
      {q:"Le système ne boote plus après l'installation",a:"Cause la plus fréquente : partition EFI non montée sur /boot ou /boot/efi avant d'installer le bootloader, ou fstab généré trop tôt/oublié. Revérifie le montage des partitions avant de chrooter."},
      {q:"L'installation ou la synchronisation des paquets échoue",a:"Vérifie l'horloge système avant toute opération réseau — un décalage d'horloge fait souvent échouer la vérification des clés de signature des dépôts."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."},
      {q:"Pourquoi systemctl n'est pas disponible sur Devuan ?", a:"Devuan est un fork de Debian qui exclut délibérément systemd au profit de sysvinit ou OpenRC ; il faut utiliser service ou rc-service selon l'init choisi."}
    ]
  },
  {
    id:"guix", name:"Guix System", version:"1.4", cat:"advanced", color:"#FFB400", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#FFB400" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#FFB400">Gx</text></svg>',
    tag:"Distro GNU 100% libre, configuration déclarative en Scheme, rollbacks transactionnels façon NixOS.",
    site:"gnu.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"—",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"guix.gnu.org/en/download → image d'installation officielle."},
      {t:"Graver la clé", d:"dd ou balenaEtcher."},
      {t:"Installeur", d:"Mode graphique guidé ou installation manuelle en ligne de commande."},
      {t:"config.scm", d:"Décrire le système dans un fichier de configuration Scheme."},
      {t:"Reconfigurer", d:"Appliquer la config avec guix system.", code:"guix system reconfigure config.scm"}
    ],
    alt:["nixos","devuan","chimera"],
    errors:[
      {q:"Pas de réseau dans le shell live",a:"Le Wi-Fi se configure manuellement via iwctl ou wpa_supplicant selon le système. Sans connexion, impossible de récupérer les paquets pendant l'installation — vérifie-la avant de lancer la phase de bootstrap."},
      {q:"Le système ne boote plus après l'installation",a:"Cause la plus fréquente : partition EFI non montée sur /boot ou /boot/efi avant d'installer le bootloader, ou fstab généré trop tôt/oublié. Revérifie le montage des partitions avant de chrooter."},
      {q:"L'installation ou la synchronisation des paquets échoue",a:"Vérifie l'horloge système avant toute opération réseau — un décalage d'horloge fait souvent échouer la vérification des clés de signature des dépôts."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."},
      {q:"Pourquoi certains logiciels ne trouvent pas leurs bibliothèques ?", a:"Guix System stocke les paquets dans /gnu/store selon un modèle fonctionnel (pas de FHS classique) ; les binaires non empaquetés pour Guix qui s'attendent à /usr/lib peuvent échouer sans adaptation."}
    ]
  },
  {
    id:"hardenedbsd", name:"HardenedBSD", version:"14-STABLE", cat:"bsd", color:"#7A1F1F", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#7A1F1F" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#7A1F1F">Hb</text></svg>',
    tag:"Fork de FreeBSD axé exploit mitigation (ASLR, PIE partout, durcissement du noyau par défaut).",
    site:"hardenedbsd.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"FreeBSD",
    req:{ram:"1-2 Go min.", disk:"10-20 Go d'espace disque", cpu:"x86_64 (ARM selon le projet)"},
    steps:[
      {t:"Télécharger l'image", d:"hardenedbsd.org/pages/download.html → image d'installation."},
      {t:"Graver la clé", d:"dd depuis un terminal Unix."},
      {t:"bsdinstall", d:"Suivre les étapes texte : disque (ZFS conseillé), réseau, utilisateur."},
      {t:"Vérification", d:"Les protections mémoire sont actives par défaut dès le premier boot."},
      {t:"Mises à jour", d:"Utiliser hbsd-update pour la base système durcie.", code:"hbsd-update"}
    ],
    alt:["midnightbsd","nomadbsd","ghostbsd"],
    errors:[
      {q:"Pas de Wi-Fi détecté après l'installation",a:"Le firmware du chipset Wi-Fi n'est souvent pas inclus par défaut (licence propriétaire). Installe le paquet firmware correspondant après le premier boot, en filaire, avant de configurer le sans-fil."},
      {q:"Confusion entre pkg et les ports",a:"pkg installe des binaires précompilés (rapide), les ports compilent depuis les sources (plus de contrôle, plus long). Pour débuter, reste sur pkg — mélanger les deux peut créer des incohérences de versions."},
      {q:"Le choix par défaut entre UFS et ZFS interroge",a:"ZFS demande plus de RAM mais apporte snapshots et intégrité des données ; UFS est plus léger. Sur une machine avec moins de 4 Go de RAM, préfère UFS."}
    ],
    faq:[
      {q:"En quoi est-ce différent de Linux ?", a:"Les BSD partagent un ancêtre Unix commun mais un noyau et un espace utilisateur distincts de Linux, avec une base de code et une documentation historiquement très cohérentes."},
      {q:"La compatibilité matérielle est-elle aussi large que sous Linux ?", a:"Globalement un peu plus restreinte, notamment sur le matériel très récent ou les portables grand public ; vérifier les listes de compatibilité officielles avant d'installer."},
      {q:"Les paquets binaires FreeBSD sont-ils utilisables tels quels ?", a:"Pas toujours : les renforcements de sécurité modifient parfois l'ABI, aussi HardenedBSD maintient ses propres dépôts de paquets recompilés plutôt que de réutiliser tels quels ceux de FreeBSD."}
    ]
  },
  {
    id:"openwrt", name:"OpenWrt", version:"25.12", cat:"network", color:"#00B5E2", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#00B5E2" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#00B5E2">Ow</text></svg>',
    tag:"Firmware libre pour routeurs. Remplace le firmware d'usine par un vrai Linux configurable.",
    site:"openwrt.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Linux",
    req:{ram:"512 Mo à 1 Go", disk:"4-8 Go (carte CF/SSD selon le boîtier)", cpu:"x86_64 faible consommation ou matériel dédié"},
    steps:[
      {t:"Vérifier la compatibilité", d:"Chercher son routeur sur le Table of Hardware d'OpenWrt avant tout."},
      {t:"Télécharger le firmware", d:"openwrt.org → image factory (1er flash) ou sysupgrade (mise à jour)."},
      {t:"Flasher", d:"Depuis l'interface du firmware d'origine ou via TFTP selon le modèle."},
      {t:"Premier accès", d:"Se connecter à LuCI (interface web).", code:"http://192.168.1.1"},
      {t:"Configuration", d:"Définir le mot de passe root, le Wi-Fi et les règles de pare-feu."}
    ],
    alt:["endian","vyos","ipfire"],
    errors:[
      {q:"Plus d'accès à l'interface après configuration réseau",a:"Une mauvaise règle de pare-feu ou un mauvais port assigné en WAN peut couper l'accès à l'interface web. Garde toujours un accès console/série de secours avant de modifier les règles depuis l'interface elle-même."},
      {q:"Les ports WAN/LAN sont inversés",a:"L'assignation des interfaces se fait à l'installation ou via la console : vérifie le nommage exact avant de câbler, certains boîtiers n'étiquettent pas leurs ports dans l'ordre logique."},
      {q:"L'image ne boote pas sur le boîtier",a:"Vérifie que l'image téléchargée correspond bien à l'architecture exacte du boîtier (x86_64 générique vs image spécifique constructeur) — flasher la mauvaise image est la cause n°1 d'échec sur ce type de matériel."}
    ],
    faq:[
      {q:"Faut-il un matériel dédié (boîtier pare-feu) ?", a:"Non obligatoire : un mini-PC ou une machine virtuelle avec plusieurs interfaces réseau suffit pour débuter."},
      {q:"Peut-on migrer sa configuration existante ?", a:"Selon les projets, des outils d'import de configuration existent (règles de pare-feu, DHCP…) ; sinon la reconfiguration se fait manuellement."},
      {q:"Quelle est l'erreur la plus fréquente qui bloque le routeur ?", a:"Utiliser la mauvaise image (factory au lieu de sysupgrade, ou modèle de routeur incorrect) : il faut toujours vérifier la référence exacte du matériel sur le wiki OpenWrt avant de flasher."}
    ]
  },
  {
    id:"aros", name:"AROS", version:"20240601", cat:"retro", color:"#E2231A", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#E2231A" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#E2231A">Ar</text></svg>',
    tag:"Réimplémentation libre d'AmigaOS 3.x, compatible avec de nombreux logiciels Amiga d'origine.",
    site:"sourceforge.io", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Intermédiaire", base:"AmigaOS",
    req:{ram:"512 Mo min.", disk:"1 Go", cpu:"x86 (build ABIv0) — matériel ancien ou récent en VM"},
    steps:[
      {t:"Télécharger l'image", d:"aros.sourceforge.io/download.php → édition x86 « Live/Install »."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Live", d:"Booter et découvrir le Workbench (interface historique Amiga)."},
      {t:"Installer", d:"Lancer l'icône d'installation depuis le bureau live."},
      {t:"Logiciels", d:"Récupérer des applis via les archives Aminet compatibles AROS."}
    ],
    alt:["freedos","reactos"],
    errors:[
      {q:"Aucun pilote pour le GPU ou le Wi-Fi modernes",a:"Ces projets ciblent un public restreint et le support matériel récent est très limité par design. Privilégie une machine ancienne ou une machine virtuelle plutôt qu'un PC neuf pour de meilleures chances de compatibilité."},
      {q:"Un logiciel Windows/Linux classique ne fonctionne pas",a:"La compatibilité annoncée reste partielle sur ces projets communautaires : teste sur un cas simple avant de compter dessus pour un usage précis."},
      {q:"Très peu de documentation en cas de blocage",a:"La communauté est réduite ; le forum ou le wiki officiel du projet reste la meilleure source, plus fiable que des tutoriels tiers généralistes qui datent vite sur ce type de système."}
    ],
    faq:[
      {q:"Peut-on faire tourner de vrais logiciels Amiga dessus ?", a:"De nombreux programmes et jeux Amiga d'origine fonctionnent nativement grâce à la compatibilité API avec AmigaOS 3.1."}
    ]
  },
  {
    id:"templeos", name:"TempleOS", version:"5.03", cat:"alt", color:"#FFD700", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#FFD700" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#FFD700">Tp</text></svg>',
    tag:"OS 64 bits écrit seul par Terry A. Davis, en HolyC, avec compilateur/EDL/3D intégrés. Curiosité historique de l'informatique DIY.",
    site:"templeos.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~5 min", diff:"Intermédiaire", base:"—",
    req:{ram:"2-4 Go selon le projet", disk:"8-16 Go d'espace disque", cpu:"x86_64 standard"},
    steps:[
      {t:"Télécharger l'ISO", d:"templeos.org → image officielle (projet figé, non maintenu activement)."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Tester en VM", d:"Fortement recommandé : QEMU/VirtualBox plutôt qu'un boot sur métal nu (peu de pilotes)."},
      {t:"Découvrir HolyC", d:"Le shell exécute directement du code HolyC compilé à la volée."},
      {t:"Explorer", d:"Documentation, jeux et démos 3D sont accessibles depuis le bureau textuel."}
    ],
    alt:["redox","serenityos","9front"],
    errors:[
      {q:"Aucun pilote pour le GPU ou le Wi-Fi modernes",a:"Ces projets ciblent un public restreint et le support matériel récent est très limité par design. Privilégie une machine ancienne ou une machine virtuelle plutôt qu'un PC neuf pour de meilleures chances de compatibilité."},
      {q:"Un logiciel Windows/Linux classique ne fonctionne pas",a:"La compatibilité annoncée reste partielle sur ces projets communautaires : teste sur un cas simple avant de compter dessus pour un usage précis."},
      {q:"Très peu de documentation en cas de blocage",a:"La communauté est réduite ; le forum ou le wiki officiel du projet reste la meilleure source, plus fiable que des tutoriels tiers généralistes qui datent vite sur ce type de système."}
    ],
    faq:[
      {q:"Pourquoi choisir un système aussi confidentiel ?", a:"Pour explorer une architecture ou une philosophie différente — souvent la curiosité technique ou la recherche d'alternatives aux grands écosystèmes."},
      {q:"Le support logiciel est-il suffisant pour un usage quotidien ?", a:"Généralement plus limité que sur les systèmes grand public ; à réserver à un usage secondaire, en test, ou pour les passionnés."}
    ]
  },
  {
    id:"corelinux", name:"Fedora CoreOS", version:"stable", cat:"container", color:"#294172", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#294172" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#294172">Co</text></svg>',
    tag:"OS minimal auto-mis-à-jour, conçu pour exécuter des conteneurs à grande échelle (successeur de CoreOS).",
    site:"getfedora.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Avancé", base:"Fedora",
    req:{ram:"2-4 Go min.", disk:"10-20 Go d'espace disque", cpu:"x86_64, virtualisation matérielle recommandée (VT-x/AMD-V)"},
    steps:[
      {t:"Générer une config Ignition", d:"Écrire un fichier Butane (YAML) puis le convertir en Ignition.", code:"butane config.bu > config.ign"},
      {t:"Télécharger l'image", d:"getfedora.org/coreos/download → image bare metal, ISO ou cloud."},
      {t:"Premier boot", d:"L'ISO lit la config Ignition pour installer et configurer le système automatiquement."},
      {t:"Accès", d:"Se connecter en SSH avec la clé définie dans la config Ignition."},
      {t:"Conteneurs", d:"Lancer des services via Podman/systemd (pas de gestionnaire de paquets classique)."}
    ],
    alt:["flatcar","talos","bottlerocket"],
    errors:[
      {q:"Impossible de se connecter en SSH classique",a:"Ces systèmes n'ont généralement pas de shell interactif complet par défaut. L'administration passe par une API ou un outil dédié, pas par un login shell traditionnel."},
      {q:"Aucun gestionnaire de paquets disponible",a:"Ces OS sont volontairement minimalistes : tout logiciel supplémentaire tourne en conteneur, jamais installé sur l'hôte. Cherche une image de conteneur plutôt qu'un paquet système."},
      {q:"La configuration ne survit pas à un redémarrage",a:"La configuration doit être fournie via un fichier cloud-init / user-data au provisionnement, pas modifiée à la main après coup — ces systèmes réinitialisent l'état non déclaré au redémarrage."}
    ],
    faq:[
      {q:"Quelle différence avec Docker Desktop ?", a:"Il s'agit ici d'un système d'exploitation complet dédié aux conteneurs/à l'orchestration, alors que Docker Desktop est une application installée sur un OS classique."},
      {q:"Faut-il des connaissances en Kubernetes/conteneurs pour s'en servir ?", a:"Oui, ce type de système cible des usages d'infrastructure ; des bases solides en conteneurisation sont recommandées avant de se lancer."},
      {q:"Pourquoi je ne peux pas me connecter après l'installation sans configuration préalable ?", a:"Fedora CoreOS ne propose pas d'installation interactive classique : la configuration (utilisateurs, clés SSH, réseau) doit être fournie via un fichier Ignition au premier démarrage."}
    ]
  },
  {
    id:"flatcar", name:"Flatcar Container Linux", version:"stable", cat:"container", color:"#4495D1", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#4495D1" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#4495D1">Fc</text></svg>',
    tag:"Fork communautaire de CoreOS Container Linux. Immuable, mises à jour automatiques façon ChromeOS.",
    site:"flatcar.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Avancé", base:"—",
    req:{ram:"2-4 Go min.", disk:"10-20 Go d'espace disque", cpu:"x86_64, virtualisation matérielle recommandée (VT-x/AMD-V)"},
    steps:[
      {t:"Choisir le canal", d:"Stable, Beta ou Alpha depuis flatcar.org/releases."},
      {t:"Générer une config Ignition", d:"Décrire utilisateurs, réseau et services en Ignition JSON."},
      {t:"Télécharger l'image", d:"Image adaptée à la cible : bare metal, cloud (AWS/Azure/GCP), ou VM."},
      {t:"Premier boot", d:"Le système applique la config Ignition une seule fois à l'installation."},
      {t:"Mises à jour", d:"Automatiques et atomiques via omaha/nebraska, avec rollback possible."}
    ],
    alt:["corelinux","talos","bottlerocket"],
    errors:[
      {q:"Impossible de se connecter en SSH classique",a:"Ces systèmes n'ont généralement pas de shell interactif complet par défaut. L'administration passe par une API ou un outil dédié, pas par un login shell traditionnel."},
      {q:"Aucun gestionnaire de paquets disponible",a:"Ces OS sont volontairement minimalistes : tout logiciel supplémentaire tourne en conteneur, jamais installé sur l'hôte. Cherche une image de conteneur plutôt qu'un paquet système."},
      {q:"La configuration ne survit pas à un redémarrage",a:"La configuration doit être fournie via un fichier cloud-init / user-data au provisionnement, pas modifiée à la main après coup — ces systèmes réinitialisent l'état non déclaré au redémarrage."}
    ],
    faq:[
      {q:"Quelle différence avec Docker Desktop ?", a:"Il s'agit ici d'un système d'exploitation complet dédié aux conteneurs/à l'orchestration, alors que Docker Desktop est une application installée sur un OS classique."},
      {q:"Faut-il des connaissances en Kubernetes/conteneurs pour s'en servir ?", a:"Oui, ce type de système cible des usages d'infrastructure ; des bases solides en conteneurisation sont recommandées avant de se lancer."},
      {q:"Peut-on installer des paquets classiques (apt/yum) sur Flatcar ?", a:"Non : le système de fichiers racine est en lecture seule et il n'y a pas de gestionnaire de paquets système ; les applications tournent en conteneurs, la configuration passe par Ignition/Butane."}
    ]
  },
  {
    id:"talos", name:"Talos Linux", version:"1.7", cat:"container", color:"#4B32C3", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#4B32C3" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#4B32C3">Tl</text></svg>',
    tag:"OS minimal sans SSH ni shell, piloté uniquement par API, conçu spécifiquement pour Kubernetes.",
    site:"talos.de", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Linux",
    req:{ram:"2-4 Go min.", disk:"10-20 Go d'espace disque", cpu:"x86_64, virtualisation matérielle recommandée (VT-x/AMD-V)"},
    steps:[
      {t:"Télécharger l'ISO", d:"talos.dev → image ISO ou image cloud selon la cible."},
      {t:"Booter les nœuds", d:"Démarrer les machines (control-plane et workers) sur l'image Talos."},
      {t:"Générer la config", d:"Créer les manifestes de cluster avec talosctl.", code:"talosctl gen config mon-cluster https://<ip-cp>:6443"},
      {t:"Appliquer la config", d:"Envoyer la configuration à chaque nœud via l'API Talos.", code:"talosctl apply-config -n <ip-noeud> -f controlplane.yaml"},
      {t:"Bootstrap Kubernetes", d:"Initialiser le cluster puis récupérer le kubeconfig.", code:"talosctl bootstrap -n <ip-cp>\ntalosctl kubeconfig"}
    ],
    alt:["bottlerocket","flatcar","corelinux"],
    errors:[
      {q:"Impossible de se connecter en SSH classique",a:"Ces systèmes n'ont généralement pas de shell interactif complet par défaut. L'administration passe par une API ou un outil dédié, pas par un login shell traditionnel."},
      {q:"Aucun gestionnaire de paquets disponible",a:"Ces OS sont volontairement minimalistes : tout logiciel supplémentaire tourne en conteneur, jamais installé sur l'hôte. Cherche une image de conteneur plutôt qu'un paquet système."},
      {q:"La configuration ne survit pas à un redémarrage",a:"La configuration doit être fournie via un fichier cloud-init / user-data au provisionnement, pas modifiée à la main après coup — ces systèmes réinitialisent l'état non déclaré au redémarrage."}
    ],
    faq:[
      {q:"Quelle différence avec Docker Desktop ?", a:"Il s'agit ici d'un système d'exploitation complet dédié aux conteneurs/à l'orchestration, alors que Docker Desktop est une application installée sur un OS classique."},
      {q:"Faut-il des connaissances en Kubernetes/conteneurs pour s'en servir ?", a:"Oui, ce type de système cible des usages d'infrastructure ; des bases solides en conteneurisation sont recommandées avant de se lancer."},
      {q:"Comment se connecter en SSH sur un nœud Talos ?", a:"Impossible : Talos Linux n'a pas de shell interactif ni de SSH par conception ; toute l'administration passe par l'API et l'outil talosctl."}
    ]
  },
  {
    id:"gpartedlive", name:"GParted Live", version:"1.6.0", cat:"recovery", color:"#1ABC9C", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#1ABC9C" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#1ABC9C">Gp</text></svg>',
    tag:"Live minimaliste dédié au partitionnement graphique (redimensionner, déplacer, formater).",
    site:"gparted.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~5 min", diff:"Facile", base:"Debian",
    req:{ram:"512 Mo à 1 Go", disk:"2-4 Go (clé USB bootable)", cpu:"x86_64, fonctionne sur la plupart des PC"},
    steps:[
      {t:"Télécharger l'ISO", d:"gparted.org/download.php → image stable amd64."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Démarrer", d:"Booter sur la clé, garder les réglages clavier/langue par défaut au menu."},
      {t:"Manipuler les partitions", d:"Redimensionner, créer, supprimer ou formater depuis l'interface graphique."},
      {t:"Appliquer", d:"Cliquer sur le bouton « Appliquer » (✓) pour exécuter les opérations en file d'attente."}
    ],
    alt:["rescatux","clonezilla","redorescue"],
    errors:[
      {q:"Mauvais disque sélectionné pendant un clonage",a:"C'est l'erreur la plus dangereuse possible avec ce type d'outil : une cible mal choisie efface définitivement le disque de destination. Vérifie toujours deux fois la taille et le nom exact du disque affiché avant de valider."},
      {q:"Les modifications ne sont pas conservées",a:"Ces systèmes tournent en RAM depuis la clé USB et ne conservent rien au redémarrage par conception — toute donnée à garder doit être copiée sur un support externe avant d'éteindre."},
      {q:"Un contrôleur RAID/NVMe exotique n'est pas reconnu",a:"Le noyau embarqué sur ces outils est parfois plus ancien que celui du système d'origine et peut manquer un pilote récent. Une version plus à jour de l'outil règle souvent le problème."}
    ],
    faq:[
      {q:"L'outil modifie-t-il le disque automatiquement ?", a:"Non, il s'utilise en mode Live et ne touche au disque que sur action explicite (formatage, restauration, écriture d'image)."},
      {q:"Peut-on l'utiliser sur n'importe quel PC en panne ?", a:"Dans la majorité des cas oui, tant que le PC peut démarrer sur une clé USB ; en cas de panne matérielle plus grave, un diagnostic matériel reste nécessaire."}
    ]
  },
  {
    id:"hirensbootcd", name:"Hiren's BootCD PE", version:"1.0.3", cat:"recovery", color:"#2980B9", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#2980B9" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#2980B9">Hb</text></svg>',
    tag:"Environnement de secours basé sur Windows PE : dépannage, récupération de données, antivirus hors ligne.",
    site:"hirensbootcd.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Intermédiaire", base:"Windows PE",
    req:{ram:"512 Mo à 1 Go", disk:"2-4 Go (clé USB bootable)", cpu:"x86_64, fonctionne sur la plupart des PC"},
    steps:[
      {t:"Télécharger l'ISO", d:"hirensbootcd.org → dernière version PE."},
      {t:"Graver la clé", d:"Rufus en mode DD (respecter les instructions du site pour l'UEFI)."},
      {t:"Démarrer", d:"Booter sur la clé, un bureau Windows PE minimal se lance."},
      {t:"Outils", d:"Accéder aux utilitaires de partitionnement, récupération de mots de passe, antivirus."},
      {t:"Sauvegarde", d:"Copier les fichiers d'un disque endommagé vers un support externe avant réparation."}
    ],
    alt:["gpartedlive","rescatux","ubcd"],
    errors:[
      {q:"Mauvais disque sélectionné pendant un clonage",a:"C'est l'erreur la plus dangereuse possible avec ce type d'outil : une cible mal choisie efface définitivement le disque de destination. Vérifie toujours deux fois la taille et le nom exact du disque affiché avant de valider."},
      {q:"Les modifications ne sont pas conservées",a:"Ces systèmes tournent en RAM depuis la clé USB et ne conservent rien au redémarrage par conception — toute donnée à garder doit être copiée sur un support externe avant d'éteindre."},
      {q:"Un contrôleur RAID/NVMe exotique n'est pas reconnu",a:"Le noyau embarqué sur ces outils est parfois plus ancien que celui du système d'origine et peut manquer un pilote récent. Une version plus à jour de l'outil règle souvent le problème."}
    ],
    faq:[
      {q:"L'outil modifie-t-il le disque automatiquement ?", a:"Non, il s'utilise en mode Live et ne touche au disque que sur action explicite (formatage, restauration, écriture d'image)."},
      {q:"Peut-on l'utiliser sur n'importe quel PC en panne ?", a:"Dans la majorité des cas oui, tant que le PC peut démarrer sur une clé USB ; en cas de panne matérielle plus grave, un diagnostic matériel reste nécessaire."}
    ]
  },
  /* ===================== AJOUTS v3.4 ===================== */
  {
    id:"nitrux", name:"Nitrux", version:"3.7", cat:"desktop", color:"#5E2CA5", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#5E2CA5" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#5E2CA5">Nx</text></svg>',
    tag:"Bureau NX Desktop maison au-dessus de KDE Frameworks, tout en AppImage via NX Software Center.",
    site:"nxos.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"nxos.org/download → dernière image stable."},
      {t:"Graver la clé", d:"balenaEtcher (image spécifique, éviter Rufus en mode ISO)."},
      {t:"Live", d:"Booter et découvrir le bureau NX Desktop maison."},
      {t:"Installer", d:"Lancer Calamares depuis le bureau live."},
      {t:"NX Software Center", d:"Installer des applis packagées en AppImage plutôt qu'en paquets système."}
    ],
    alt:["lmde","endless","deepin"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"kaos", name:"KaOS", version:"2024.05", cat:"desktop", color:"#21B6A8", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#21B6A8" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#21B6A8">Ka</text></svg>',
    tag:"Distro indépendante 100% KDE Plasma/Qt, rolling, philosophie « un seul bureau fait bien ».",
    site:"kaosx.us", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"—",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"kaosx.us/download → image live la plus récente."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Live", d:"Session live Plasma pure, sans autre environnement disponible."},
      {t:"Calamares", d:"Installer via l'assistant graphique."},
      {t:"Octopi", d:"Gérer les paquets avec Octopi (interface graphique de pacman)."}
    ],
    alt:["nitrux","ferenos","regolith"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"ferenos", name:"Feren OS", version:"2024.03", cat:"desktop", color:"#0F6FC5", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#0F6FC5" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#0F6FC5">Fr</text></svg>',
    tag:"Base Ubuntu/Mint, bureau Cinnamon personnalisé façon Windows pour une transition en douceur.",
    site:"weebly.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"ferenos.weebly.com → dernière version stable."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Live", d:"Tester le bureau façon Windows (menu démarrer, barre des tâches)."},
      {t:"Installer", d:"Installeur Ubiquity classique."},
      {t:"Feren OS Welcome", d:"Utiliser l'appli de bienvenue pour changer de thème (Windows/macOS/Chrome OS)."}
    ],
    alt:["regolith","ubuntumate","ubuntubudgie"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"regolith", name:"Regolith Linux", version:"3.1", cat:"desktop", color:"#E64A19", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#E64A19" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#E64A19">Rg</text></svg>',
    tag:"Ubuntu avec un gestionnaire de fenêtres en tuiles (i3/Sway) préconfiguré, pour les claviéristes.",
    site:"regolith-desktop.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Intermédiaire", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"regolith-desktop.com/docs/install → image ISO officielle."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Live", d:"Booter en live, se familiariser avec les raccourcis i3wm (Super+…)."},
      {t:"Installer", d:"Installeur Ubuntu standard."},
      {t:"Regolith Control Center", d:"Personnaliser raccourcis, thème et barre i3bar après installation."}
    ],
    alt:["ferenos","ubuntumate","ubuntubudgie"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"ucs", name:"Univention Corporate Server", version:"5.2", cat:"server", color:"#FF6600", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#FF6600" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#FF6600">Uc</text></svg>',
    tag:"Serveur d'annuaire/identité open source (compatible Active Directory) basé sur Debian.",
    site:"univention.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~20 min", diff:"Avancé", base:"Debian",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64 (physique ou VM)"},
    steps:[
      {t:"Télécharger l'ISO", d:"univention.com/downloads → édition Core (gratuite)."},
      {t:"Graver la clé", d:"Rufus ou balenaEtcher."},
      {t:"Installeur", d:"Choisir le rôle du serveur (Domain Controller Master pour le premier)."},
      {t:"UCS Management Console", d:"Terminer la configuration depuis l'interface web.", code:"https://<ip-serveur>"},
      {t:"App Center", d:"Installer des services complémentaires (Nextcloud, Samba, mail) en un clic."}
    ],
    alt:["openmediavault","truenas","zentyal"],
    errors:[
      {q:"Pas d'écran connecté / installation headless",a:"La plupart de ces systèmes proposent un mode d'installation automatisée par fichier de configuration (kickstart, cloud-init, preseed) plutôt que l'assistant graphique — vérifie la documentation officielle avant de brancher un écran inutilement."},
      {q:"Pas d'IP après le premier démarrage",a:"Le réseau par défaut est souvent en DHCP sur la première interface détectée seulement. Si plusieurs cartes réseau sont présentes, vérifie laquelle a reçu une adresse via la console locale avant de chercher à s'y connecter à distance."},
      {q:"Configuration RAID/ZFS refusée à l'installation",a:"Un disque ayant déjà une table de partition ou des métadonnées RAID d'une installation précédente peut bloquer l'assistant. Efface les disques cibles via la console avant de relancer l'installation."}
    ],
    faq:[
      {q:"Peut-on l'administrer sans interface graphique ?", a:"Oui, l'essentiel de l'administration se fait en ligne de commande via SSH, ce qui est d'ailleurs la pratique recommandée en production."},
      {q:"Quelle fréquence de mises à jour de sécurité ?", a:"Cela dépend du cycle de support choisi ; privilégier une version LTS/stable pour un serveur en production."},
      {q:"Puis-je installer plusieurs serveurs UCS sans définir de rôle au préalable ?", a:"Non : le premier serveur doit être installé en tant que « Master de domaine » avant que d'autres serveurs (Backup, Slave, Membre) puissent le rejoindre."}
    ]
  },
  {
    id:"smartos", name:"SmartOS", version:"2024", cat:"server", color:"#00A4E4", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#00A4E4" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#00A4E4">Sm</text></svg>',
    tag:"Hyperviseur illumos taillé pour le cloud : zones légères + KVM, ZFS natif, live USB uniquement.",
    site:"smartos.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"illumos",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64 (physique ou VM)"},
    steps:[
      {t:"Télécharger l'image", d:"smartos.org/get-smartos → image USB officielle."},
      {t:"Graver la clé", d:"dd (SmartOS s'exécute toujours en live, jamais installé sur disque)."},
      {t:"Booter", d:"Démarrer sur la clé, répondre aux quelques questions réseau."},
      {t:"Zones", d:"Créer des zones (conteneurs illumos) ou VM KVM via la CLI vmadm.", code:"vmadm create -f vm.json"},
      {t:"Stockage", d:"Les données persistantes vivent sur un pool ZFS séparé de la clé de boot."}
    ],
    alt:["ucs","harvester","xcpng"],
    errors:[
      {q:"Pas d'écran connecté / installation headless",a:"La plupart de ces systèmes proposent un mode d'installation automatisée par fichier de configuration (kickstart, cloud-init, preseed) plutôt que l'assistant graphique — vérifie la documentation officielle avant de brancher un écran inutilement."},
      {q:"Pas d'IP après le premier démarrage",a:"Le réseau par défaut est souvent en DHCP sur la première interface détectée seulement. Si plusieurs cartes réseau sont présentes, vérifie laquelle a reçu une adresse via la console locale avant de chercher à s'y connecter à distance."},
      {q:"Configuration RAID/ZFS refusée à l'installation",a:"Un disque ayant déjà une table de partition ou des métadonnées RAID d'une installation précédente peut bloquer l'assistant. Efface les disques cibles via la console avant de relancer l'installation."}
    ],
    faq:[
      {q:"Peut-on l'administrer sans interface graphique ?", a:"Oui, l'essentiel de l'administration se fait en ligne de commande via SSH, ce qui est d'ailleurs la pratique recommandée en production."},
      {q:"Quelle fréquence de mises à jour de sécurité ?", a:"Cela dépend du cycle de support choisi ; privilégier une version LTS/stable pour un serveur en production."},
      {q:"Pourquoi mes réglages système disparaissent-ils au redémarrage ?", a:"SmartOS est conçu pour rester sans état : le système démarre en RAM depuis l'image, seule la configuration explicite via l'outil de config ou le pool de données persiste."}
    ]
  },
  {
    id:"harvester", name:"Harvester", version:"1.3", cat:"server", color:"#0075A8", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#0075A8" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#0075A8">Hv</text></svg>',
    tag:"Plateforme hyperconvergée open source (KubeVirt + Kubernetes) par SUSE/Rancher, pour VM et conteneurs.",
    site:"harvesterhci.io", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~20 min", diff:"Avancé", base:"openSUSE",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64 (physique ou VM)"},
    steps:[
      {t:"Télécharger l'ISO", d:"harvesterhci.io/download → image d'installation officielle."},
      {t:"Graver la clé", d:"Rufus (mode DD) ou balenaEtcher."},
      {t:"Installeur", d:"Choisir « Create a new Harvester cluster » sur le premier nœud."},
      {t:"Réseau de gestion", d:"Définir une VIP (IP virtuelle) pour accéder au tableau de bord."},
      {t:"Dashboard", d:"Se connecter à l'interface web pour créer VM et namespaces.", code:"https://<vip>"}
    ],
    alt:["smartos","ucs","xcpng"],
    errors:[
      {q:"Pas d'écran connecté / installation headless",a:"La plupart de ces systèmes proposent un mode d'installation automatisée par fichier de configuration (kickstart, cloud-init, preseed) plutôt que l'assistant graphique — vérifie la documentation officielle avant de brancher un écran inutilement."},
      {q:"Pas d'IP après le premier démarrage",a:"Le réseau par défaut est souvent en DHCP sur la première interface détectée seulement. Si plusieurs cartes réseau sont présentes, vérifie laquelle a reçu une adresse via la console locale avant de chercher à s'y connecter à distance."},
      {q:"Configuration RAID/ZFS refusée à l'installation",a:"Un disque ayant déjà une table de partition ou des métadonnées RAID d'une installation précédente peut bloquer l'assistant. Efface les disques cibles via la console avant de relancer l'installation."}
    ],
    faq:[
      {q:"Peut-on l'administrer sans interface graphique ?", a:"Oui, l'essentiel de l'administration se fait en ligne de commande via SSH, ce qui est d'ailleurs la pratique recommandée en production."},
      {q:"Quelle fréquence de mises à jour de sécurité ?", a:"Cela dépend du cycle de support choisi ; privilégier une version LTS/stable pour un serveur en production."},
      {q:"Harvester fonctionne-t-il bien avec un seul serveur ?", a:"Ce n'est pas l'usage prévu : Harvester est une plateforme HCI pensée pour un cluster (3 nœuds minimum recommandés) afin d'assurer la haute disponibilité du stockage distribué."}
    ]
  },
  {
    id:"kalipurple", name:"Kali Purple", version:"2026.2", cat:"security", color:"#7A288A", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#7A288A" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#7A288A">Kp</text></svg>',
    tag:"Version défensive (blue team) de Kali : SIEM, IDS et outils SOC préinstallés aux côtés des classiques.",
    site:"kali.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Debian",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"8-32 Go pour une clé USB persistante", cpu:"x86_64 (VM recommandée pour l'isolement)"},
    steps:[
      {t:"Télécharger l'ISO", d:"kali.org/get-kali → sélectionner l'image Purple."},
      {t:"Graver la clé", d:"Rufus ou balenaEtcher."},
      {t:"Live ou install", d:"Tester en live ou installer via Calamares."},
      {t:"kali-purple-*", d:"Lancer les métapaquets pour installer les piles SOC (Elastic, Suricata…)."},
      {t:"Tableaux de bord", d:"Accéder aux interfaces web des outils défensifs une fois les services démarrés."}
    ],
    alt:["kicksecure","whonix","parrot"],
    errors:[
      {q:"Les modifications disparaissent après redémarrage",a:"En mode live sans persistance activée, tout est perdu au redémarrage par conception. Configure une partition de persistance chiffrée à la création de la clé si tu veux conserver des données."},
      {q:"Le système ne démarre pas en machine virtuelle",a:"Certains de ces systèmes nécessitent la virtualisation matérielle (VT-x/AMD-V, et VT-d pour l'isolation complète des périphériques) activée dans le BIOS — sans ça, l'installation échoue silencieusement."},
      {q:"Tor met un temps anormalement long à se connecter",a:"Un réseau bridé (Wi-Fi d'entreprise, hôtel) bloque parfois les nœuds Tor par défaut. Utilise les « ponts » (bridges) proposés dans l'assistant de connexion au lieu de la connexion directe."}
    ],
    faq:[
      {q:"Est-ce légal de l'utiliser ?", a:"Oui, l'outil lui-même est légal. C'est l'usage qui est encadré : ne l'utiliser que sur des systèmes dont on est propriétaire ou avec une autorisation écrite explicite."},
      {q:"Faut-il l'installer ou peut-on rester en mode Live ?", a:"Le mode Live suffit pour la plupart des usages ponctuels ; une installation persistante est utile pour un usage régulier et la sauvegarde des outils/configurations."},
      {q:"Kali Purple contient-il les mêmes outils que Kali Linux classique ?", a:"Non : Kali Purple se concentre sur les outils défensifs et SOC (détection, réponse à incident) plutôt que sur la boîte à outils offensive de Kali standard."}
    ]
  },
  {
    id:"tsurugi", name:"Tsurugi Linux", version:"26.03", cat:"security", color:"#B71C1C", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#B71C1C" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#B71C1C">Ts</text></svg>',
    tag:"Distro forensique/DFIR basée sur Ubuntu LTS, orientée investigation numérique et OSINT.",
    site:"tsurugi-linux.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Avancé", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"8-32 Go pour une clé USB persistante", cpu:"x86_64 (VM recommandée pour l'isolement)"},
    steps:[
      {t:"Télécharger l'ISO", d:"tsurugi-linux.org/downloads.php → édition DFIR ou Lab (avec Windows Sandbox)."},
      {t:"Graver la clé", d:"balenaEtcher, écriture en lecture seule recommandée pour l'analyse."},
      {t:"Live", d:"Booter en live, disques d'analyse montés en lecture seule par défaut."},
      {t:"Outils", d:"Autopsy, Volatility, Wireshark et suite OSINT préinstallés."},
      {t:"Rapport", d:"Documenter l'investigation avec les modèles de rapport intégrés."}
    ],
    alt:["caine","backbox","kalipurple"],
    errors:[
      {q:"Les modifications disparaissent après redémarrage",a:"En mode live sans persistance activée, tout est perdu au redémarrage par conception. Configure une partition de persistance chiffrée à la création de la clé si tu veux conserver des données."},
      {q:"Le système ne démarre pas en machine virtuelle",a:"Certains de ces systèmes nécessitent la virtualisation matérielle (VT-x/AMD-V, et VT-d pour l'isolation complète des périphériques) activée dans le BIOS — sans ça, l'installation échoue silencieusement."},
      {q:"Tor met un temps anormalement long à se connecter",a:"Un réseau bridé (Wi-Fi d'entreprise, hôtel) bloque parfois les nœuds Tor par défaut. Utilise les « ponts » (bridges) proposés dans l'assistant de connexion au lieu de la connexion directe."}
    ],
    faq:[
      {q:"Est-ce légal de l'utiliser ?", a:"Oui, l'outil lui-même est légal. C'est l'usage qui est encadré : ne l'utiliser que sur des systèmes dont on est propriétaire ou avec une autorisation écrite explicite."},
      {q:"Faut-il l'installer ou peut-on rester en mode Live ?", a:"Le mode Live suffit pour la plupart des usages ponctuels ; une installation persistante est utile pour un usage régulier et la sauvegarde des outils/configurations."},
      {q:"Comment éviter de modifier accidentellement un support à analyser ?", a:"Toujours monter les disques en lecture seule (mode forensic) ou utiliser un bloqueur d'écriture matériel avant toute analyse, sous peine d'altérer les preuves numériques."}
    ]
  },
  {
    id:"pentoo", name:"Pentoo", version:"2024.0", cat:"security", color:"#54487A", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#54487A" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#54487A">Pt</text></svg>',
    tag:"Overlay pentest pour Gentoo. Compilation source, kernel durci (hardened), pour utilisateurs avancés.",
    site:"pentoo.ch", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~20 min", diff:"Avancé", base:"Gentoo",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"8-32 Go pour une clé USB persistante", cpu:"x86_64 (VM recommandée pour l'isolement)"},
    steps:[
      {t:"Télécharger l'ISO", d:"pentoo.ch/download → image live amd64 (hardened)."},
      {t:"Graver la clé", d:"dd ou balenaEtcher."},
      {t:"Live", d:"Booter en live, mot de passe root par défaut à changer immédiatement."},
      {t:"Installer (optionnel)", d:"Utiliser install-gentoo pour une installation persistante, façon Gentoo classique."},
      {t:"Portage", d:"Mettre à jour les outils avec emerge, comme sur Gentoo standard.", code:"emerge --sync && emerge -uDN @world"}
    ],
    alt:["tsurugi","kalipurple","caine"],
    errors:[
      {q:"Les modifications disparaissent après redémarrage",a:"En mode live sans persistance activée, tout est perdu au redémarrage par conception. Configure une partition de persistance chiffrée à la création de la clé si tu veux conserver des données."},
      {q:"Le système ne démarre pas en machine virtuelle",a:"Certains de ces systèmes nécessitent la virtualisation matérielle (VT-x/AMD-V, et VT-d pour l'isolation complète des périphériques) activée dans le BIOS — sans ça, l'installation échoue silencieusement."},
      {q:"Tor met un temps anormalement long à se connecter",a:"Un réseau bridé (Wi-Fi d'entreprise, hôtel) bloque parfois les nœuds Tor par défaut. Utilise les « ponts » (bridges) proposés dans l'assistant de connexion au lieu de la connexion directe."}
    ],
    faq:[
      {q:"Est-ce légal de l'utiliser ?", a:"Oui, l'outil lui-même est légal. C'est l'usage qui est encadré : ne l'utiliser que sur des systèmes dont on est propriétaire ou avec une autorisation écrite explicite."},
      {q:"Faut-il l'installer ou peut-on rester en mode Live ?", a:"Le mode Live suffit pour la plupart des usages ponctuels ; une installation persistante est utile pour un usage régulier et la sauvegarde des outils/configurations."},
      {q:"Pourquoi l'installation ou la mise à jour est-elle si longue ?", a:"Pentoo hérite du système Portage de Gentoo, qui compile les paquets depuis les sources : prévoir un temps de compilation nettement plus long qu'avec des distributions à paquets binaires."}
    ]
  },
  {
    id:"absolutelinux", name:"Absolute Linux", version:"15.0", cat:"lightweight", color:"#2F4F4F", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#2F4F4F" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#2F4F4F">Ab</text></svg>',
    tag:"Slackware simplifiée avec IceWM, pensée pour rester légère et rapide sans sacrifier la stabilité.",
    site:"absolutelinux.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Slackware",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"absolutelinux.org/download.html → dernière version stable."},
      {t:"Graver la clé", d:"dd ou balenaEtcher."},
      {t:"Installeur texte", d:"Suivre les étapes façon Slackware : disque, paquets, LILO/GRUB."},
      {t:"Premier boot", d:"Bureau IceWM léger, prêt à l'emploi."},
      {t:"Paquets", d:"Gérer les logiciels avec Synaptic ou les outils Slackware (slackpkg, epkg)."}
    ],
    alt:["porteus","trisquelmini","raspios"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"trisquelmini", name:"Trisquel Mini", version:"11", cat:"lightweight", color:"#4A90D9", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#4A90D9" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#4A90D9">Tq</text></svg>',
    tag:"Édition légère (LXDE) de Trisquel, distro 100% logiciel libre approuvée par la FSF, basée sur Ubuntu.",
    site:"trisquel.info", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"trisquel.info/en/download → édition Mini."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Live", d:"Booter en live, uniquement des logiciels et pilotes 100% libres."},
      {t:"Installer", d:"Installeur Ubiquity classique."},
      {t:"Dépôts", d:"Aucun dépôt non-libre n'est disponible par défaut, conformément à la charte FSF."}
    ],
    alt:["bodhi","xubuntu","lubuntu"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"crux", name:"CRUX", version:"3.7", cat:"advanced", color:"#C0392B", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#C0392B" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#C0392B">Cx</text></svg>',
    tag:"Distro source-based minimaliste, gestionnaire de ports façon BSD, pour puristes du « fait main ».",
    site:"crux.nu", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~30 min", diff:"Avancé", base:"—",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"crux.nu/Download → image d'installation amd64."},
      {t:"Graver la clé", d:"dd ou balenaEtcher."},
      {t:"Installeur texte", d:"Partitionner, monter, puis installer le système de base minimal."},
      {t:"Ports", d:"Synchroniser la collection de ports et compiler les paquets nécessaires.", code:"ports -u && prt-get depinst <paquet>"},
      {t:"Configuration finale", d:"Configurer manuellement bootloader, réseau et fstab (peu d'automatisation)."}
    ],
    alt:["gentoo","slackware","voidlinux"],
    errors:[
      {q:"Pas de réseau dans le shell live",a:"Le Wi-Fi se configure manuellement via iwctl ou wpa_supplicant selon le système. Sans connexion, impossible de récupérer les paquets pendant l'installation — vérifie-la avant de lancer la phase de bootstrap."},
      {q:"Le système ne boote plus après l'installation",a:"Cause la plus fréquente : partition EFI non montée sur /boot ou /boot/efi avant d'installer le bootloader, ou fstab généré trop tôt/oublié. Revérifie le montage des partitions avant de chrooter."},
      {q:"L'installation ou la synchronisation des paquets échoue",a:"Vérifie l'horloge système avant toute opération réseau — un décalage d'horloge fait souvent échouer la vérification des clés de signature des dépôts."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."},
      {q:"Pourquoi dois-je compiler moi-même la plupart des logiciels ?", a:"CRUX est une distribution source minimaliste : son gestionnaire de paquets compile les logiciels à partir de scripts « Pkgfile », il n'y a pas de dépôt de binaires officiels."}
    ]
  },
  {
    id:"bluefin", name:"Bluefin", version:"stable (GTS)", cat:"advanced", color:"#1565C0", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#1565C0" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#1565C0">Bf</text></svg>',
    tag:"Bureau GNOME immuable du projet Universal Blue, basé sur Fedora Atomic, orienté dev/cloud-native.",
    site:"projectbluefin.io", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"Fedora",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"projectbluefin.io → image ISO ou installeur web."},
      {t:"Graver la clé", d:"Fedora Media Writer ou balenaEtcher."},
      {t:"Installer", d:"Anaconda, puis système en lecture seule basé sur bootc/OCI."},
      {t:"ujust", d:"Utiliser les recettes ujust pour installer des outils courants.", code:"ujust --list"},
      {t:"Devcontainers", d:"Développer dans des « toolbx »/devcontainers isolés du système hôte."}
    ],
    alt:["aurora","kinoite","silverblue"],
    errors:[
      {q:"« Aucun paquet à installer » / le gestionnaire de paquets classique échoue",a:"Le système de fichiers racine est en lecture seule par design. Utilise l'outil dédié à la surcouche (rpm-ostree, transactional-update, ABRoot selon le système), puis redémarre pour appliquer le changement."},
      {q:"Le changement ne prend pas effet immédiatement",a:"Les mises à jour et installations système préparent une nouvelle image, activée seulement au redémarrage suivant. C'est normal, contrairement à un système classique."},
      {q:"Une application graphique manque au premier lancement",a:"Installe-la via Flatpak (déjà préconfiguré sur la plupart de ces systèmes) ou dans un conteneur toolbox/distrobox plutôt que sur le système hôte, qui reste volontairement minimal."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."}
    ]
  },
  {
    id:"aurora", name:"Aurora", version:"stable (GTS)", cat:"advanced", color:"#8E44AD", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#8E44AD" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#8E44AD">Au</text></svg>',
    tag:"Équivalent KDE Plasma de Bluefin (Universal Blue) : bureau immuable, mises à jour atomiques.",
    site:"getaurora.de", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"Fedora",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"getaurora.dev → image ISO ou installeur web."},
      {t:"Graver la clé", d:"Fedora Media Writer ou balenaEtcher."},
      {t:"Installer", d:"Anaconda, puis système immuable basé sur bootc."},
      {t:"ujust", d:"Recettes prêtes à l'emploi pour outils de dev et jeux.", code:"ujust --list"},
      {t:"Flatpak", d:"Toutes les applications de bureau s'installent via Flathub."}
    ],
    alt:["bluefin","kinoite","silverblue"],
    errors:[
      {q:"« Aucun paquet à installer » / le gestionnaire de paquets classique échoue",a:"Le système de fichiers racine est en lecture seule par design. Utilise l'outil dédié à la surcouche (rpm-ostree, transactional-update, ABRoot selon le système), puis redémarre pour appliquer le changement."},
      {q:"Le changement ne prend pas effet immédiatement",a:"Les mises à jour et installations système préparent une nouvelle image, activée seulement au redémarrage suivant. C'est normal, contrairement à un système classique."},
      {q:"Une application graphique manque au premier lancement",a:"Installe-la via Flatpak (déjà préconfiguré sur la plupart de ces systèmes) ou dans un conteneur toolbox/distrobox plutôt que sur le système hôte, qui reste volontairement minimal."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."}
    ]
  },
  {
    id:"microos", name:"openSUSE MicroOS", version:"Tumbleweed", cat:"advanced", color:"#4E9A06", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#4E9A06" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#4E9A06">Mo</text></svg>',
    tag:"openSUSE immuable en transactions atomiques (transactional-update), pensée conteneurs et edge.",
    site:"opensuse.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Avancé", base:"openSUSE",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"get.opensuse.org/microos → édition Desktop (GNOME/KDE) ou serveur."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Installeur", d:"YaST propose un partitionnement Btrfs avec snapshots automatiques."},
      {t:"Mises à jour", d:"Le système applique les mises à jour en transaction puis redémarre.", code:"transactional-update"},
      {t:"Conteneurs", d:"Utiliser Podman/Distrobox pour le reste des logiciels, le système de base reste figé."}
    ],
    alt:["tumbleweed","aurora","bluefin"],
    errors:[
      {q:"« Aucun paquet à installer » / le gestionnaire de paquets classique échoue",a:"Le système de fichiers racine est en lecture seule par design. Utilise l'outil dédié à la surcouche (rpm-ostree, transactional-update, ABRoot selon le système), puis redémarre pour appliquer le changement."},
      {q:"Le changement ne prend pas effet immédiatement",a:"Les mises à jour et installations système préparent une nouvelle image, activée seulement au redémarrage suivant. C'est normal, contrairement à un système classique."},
      {q:"Une application graphique manque au premier lancement",a:"Installe-la via Flatpak (déjà préconfiguré sur la plupart de ces systèmes) ou dans un conteneur toolbox/distrobox plutôt que sur le système hôte, qui reste volontairement minimal."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."},
      {q:"Pourquoi les mises à jour ne prennent-elles effet qu'après redémarrage ?", a:"MicroOS applique les mises à jour de façon transactionnelle (image en lecture seule, snapshot Btrfs) : les changements ne sont activés qu'au redémarrage suivant, garantissant un retour en arrière possible."}
    ]
  },
  {
    id:"nomadbsd", name:"NomadBSD", version:"140R", cat:"bsd", color:"#A93226", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#A93226" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#A93226">Nb</text></svg>',
    tag:"FreeBSD prêt à l'emploi sur clé USB persistante : détection auto du matériel, bureau graphique inclus.",
    site:"nomadbsd.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Facile", base:"FreeBSD",
    req:{ram:"1-2 Go min.", disk:"10-20 Go d'espace disque", cpu:"x86_64 (ARM selon le projet)"},
    steps:[
      {t:"Télécharger l'image", d:"nomadbsd.org/download.html → image compressée officielle."},
      {t:"Graver la clé", d:"balenaEtcher ou dd (image brute, pas d'ISO)."},
      {t:"Premier boot", d:"L'assistant de configuration se lance automatiquement (clavier, fuseau, utilisateur)."},
      {t:"Usage nomade", d:"Le système persiste directement sur la clé USB, aucune installation sur disque requise."},
      {t:"pkg", d:"Installer des logiciels avec pkg, comme sur FreeBSD classique.", code:"pkg install <paquet>"}
    ],
    alt:["hardenedbsd","midnightbsd","ghostbsd"],
    errors:[
      {q:"Pas de Wi-Fi détecté après l'installation",a:"Le firmware du chipset Wi-Fi n'est souvent pas inclus par défaut (licence propriétaire). Installe le paquet firmware correspondant après le premier boot, en filaire, avant de configurer le sans-fil."},
      {q:"Confusion entre pkg et les ports",a:"pkg installe des binaires précompilés (rapide), les ports compilent depuis les sources (plus de contrôle, plus long). Pour débuter, reste sur pkg — mélanger les deux peut créer des incohérences de versions."},
      {q:"Le choix par défaut entre UFS et ZFS interroge",a:"ZFS demande plus de RAM mais apporte snapshots et intégrité des données ; UFS est plus léger. Sur une machine avec moins de 4 Go de RAM, préfère UFS."}
    ],
    faq:[
      {q:"En quoi est-ce différent de Linux ?", a:"Les BSD partagent un ancêtre Unix commun mais un noyau et un espace utilisateur distincts de Linux, avec une base de code et une documentation historiquement très cohérentes."},
      {q:"La compatibilité matérielle est-elle aussi large que sous Linux ?", a:"Globalement un peu plus restreinte, notamment sur le matériel très récent ou les portables grand public ; vérifier les listes de compatibilité officielles avant d'installer."}
    ]
  },
  {
    id:"endian", name:"Endian Firewall", version:"Community 3.4", cat:"network", color:"#16A085", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#16A085" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#16A085">Ef</text></svg>',
    tag:"UTM (Unified Threat Management) libre basé sur Linux : pare-feu, VPN, antivirus, filtrage web.",
    site:"endian.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"Linux",
    req:{ram:"512 Mo à 1 Go", disk:"4-8 Go (carte CF/SSD selon le boîtier)", cpu:"x86_64 faible consommation ou matériel dédié"},
    steps:[
      {t:"Télécharger l'ISO", d:"endian.com/community → édition Community gratuite."},
      {t:"Graver la clé", d:"Rufus ou balenaEtcher."},
      {t:"Installeur texte", d:"Efface le disque cible et installe le système minimal."},
      {t:"Zones réseau", d:"Assigner GREEN (LAN), RED (WAN), ORANGE (DMZ) comme sur IPFire."},
      {t:"Interface web", d:"Terminer la configuration depuis le portail d'administration.", code:"https://<ip-green>:10443"}
    ],
    alt:["openwrt","vyos","ipfire"],
    errors:[
      {q:"Plus d'accès à l'interface après configuration réseau",a:"Une mauvaise règle de pare-feu ou un mauvais port assigné en WAN peut couper l'accès à l'interface web. Garde toujours un accès console/série de secours avant de modifier les règles depuis l'interface elle-même."},
      {q:"Les ports WAN/LAN sont inversés",a:"L'assignation des interfaces se fait à l'installation ou via la console : vérifie le nommage exact avant de câbler, certains boîtiers n'étiquettent pas leurs ports dans l'ordre logique."},
      {q:"L'image ne boote pas sur le boîtier",a:"Vérifie que l'image téléchargée correspond bien à l'architecture exacte du boîtier (x86_64 générique vs image spécifique constructeur) — flasher la mauvaise image est la cause n°1 d'échec sur ce type de matériel."}
    ],
    faq:[
      {q:"Faut-il un matériel dédié (boîtier pare-feu) ?", a:"Non obligatoire : un mini-PC ou une machine virtuelle avec plusieurs interfaces réseau suffit pour débuter."},
      {q:"Peut-on migrer sa configuration existante ?", a:"Selon les projets, des outils d'import de configuration existent (règles de pare-feu, DHCP…) ; sinon la reconfiguration se fait manuellement."}
    ]
  },
  /* ===================== ALTERNATIF (suite) ===================== */
  {
    id:"9front", name:"9front", version:"rolling", cat:"alt", color:"#7F8C8D", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#7F8C8D" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#7F8C8D">9f</text></svg>',
    tag:"Fork communautaire de Plan 9 from Bell Labs. Philosophie « tout est un fichier » poussée à l'extrême.",
    site:"9front.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Plan 9",
    req:{ram:"2-4 Go selon le projet", disk:"8-16 Go d'espace disque", cpu:"x86_64 standard"},
    steps:[
      {t:"Télécharger l'ISO", d:"9front.org → image d'installation la plus récente."},
      {t:"Graver la clé", d:"dd depuis un terminal Unix."},
      {t:"Booter", d:"Démarrer sur la clé, choisir le mode d'installation (fresh install)."},
      {t:"Configuration", d:"Répondre aux questions de partitionnement et de réseau (concepts propres à Plan 9)."},
      {t:"Découvrir", d:"Explorer acme (éditeur), rio (fenêtres) et le système de fichiers 9P distribué."}
    ],
    alt:["inferno","genode","templeos"],
    errors:[
      {q:"Aucun pilote pour le GPU ou le Wi-Fi modernes",a:"Ces projets ciblent un public restreint et le support matériel récent est très limité par design. Privilégie une machine ancienne ou une machine virtuelle plutôt qu'un PC neuf pour de meilleures chances de compatibilité."},
      {q:"Un logiciel Windows/Linux classique ne fonctionne pas",a:"La compatibilité annoncée reste partielle sur ces projets communautaires : teste sur un cas simple avant de compter dessus pour un usage précis."},
      {q:"Très peu de documentation en cas de blocage",a:"La communauté est réduite ; le forum ou le wiki officiel du projet reste la meilleure source, plus fiable que des tutoriels tiers généralistes qui datent vite sur ce type de système."}
    ],
    faq:[
      {q:"Pourquoi choisir un système aussi confidentiel ?", a:"Pour explorer une architecture ou une philosophie différente — souvent la curiosité technique ou la recherche d'alternatives aux grands écosystèmes."},
      {q:"Le support logiciel est-il suffisant pour un usage quotidien ?", a:"Généralement plus limité que sur les systèmes grand public ; à réserver à un usage secondaire, en test, ou pour les passionnés."},
      {q:"Puis-je exécuter des logiciels Unix/Linux classiques sur 9front ?", a:"Non directement : Plan 9 (et son fork 9front) repose sur une architecture radicalement différente (protocole 9P, absence de couche POSIX standard), les logiciels doivent être portés spécifiquement."}
    ]
  },
  {
    id:"genode", name:"Genode OS Framework", version:"24.05", cat:"alt", color:"#F39C12", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#F39C12" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#F39C12">Ge</text></svg>',
    tag:"Framework d'OS à composants, exécutable sur plusieurs microkernels (seL4, NOVA…). Sculpt OS en est la distro phare.",
    site:"genode.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"seL4 / NOVA",
    req:{ram:"2-4 Go selon le projet", disk:"8-16 Go d'espace disque", cpu:"x86_64 standard"},
    steps:[
      {t:"Télécharger l'image", d:"genode.org/download → image Sculpt OS (distribution basée sur Genode)."},
      {t:"Graver la clé", d:"dd ou balenaEtcher."},
      {t:"Booter", d:"Démarrer sur la clé, l'interface Leitzentrale gère composants et VM."},
      {t:"Composants", d:"Ajouter/retirer des composants isolés (pilotes, apps) via l'interface graphique."},
      {t:"Tester en VM", d:"Alternative recommandée pour découvrir l'architecture avant un déploiement réel."}
    ],
    alt:["9front","inferno","templeos"],
    errors:[
      {q:"Aucun pilote pour le GPU ou le Wi-Fi modernes",a:"Ces projets ciblent un public restreint et le support matériel récent est très limité par design. Privilégie une machine ancienne ou une machine virtuelle plutôt qu'un PC neuf pour de meilleures chances de compatibilité."},
      {q:"Un logiciel Windows/Linux classique ne fonctionne pas",a:"La compatibilité annoncée reste partielle sur ces projets communautaires : teste sur un cas simple avant de compter dessus pour un usage précis."},
      {q:"Très peu de documentation en cas de blocage",a:"La communauté est réduite ; le forum ou le wiki officiel du projet reste la meilleure source, plus fiable que des tutoriels tiers généralistes qui datent vite sur ce type de système."}
    ],
    faq:[
      {q:"Pourquoi choisir un système aussi confidentiel ?", a:"Pour explorer une architecture ou une philosophie différente — souvent la curiosité technique ou la recherche d'alternatives aux grands écosystèmes."},
      {q:"Le support logiciel est-il suffisant pour un usage quotidien ?", a:"Généralement plus limité que sur les systèmes grand public ; à réserver à un usage secondaire, en test, ou pour les passionnés."},
      {q:"Genode est-il une distribution prête à l'emploi ?", a:"Pas vraiment : Genode est un framework pour construire son propre système, il faut choisir un noyau de base (seL4, NOVA...) et composer les scénarios soi-même."}
    ]
  },
  {
    id:"inferno", name:"Inferno", version:"20240202", cat:"alt", color:"#D35400", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#D35400" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#D35400">In</text></svg>',
    tag:"Successeur spirituel de Plan 9 par les mêmes équipes Bell Labs, exécuté nativement ou hébergé sur un autre OS.",
    site:"vitanuova.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Avancé", base:"Plan 9",
    req:{ram:"2-4 Go selon le projet", disk:"8-16 Go d'espace disque", cpu:"x86_64 standard"},
    steps:[
      {t:"Télécharger l'archive", d:"vitanuova.com/inferno → distribution hébergée (Linux/Windows/macOS) ou native."},
      {t:"Installer (hébergé)", d:"Décompresser et lancer emu, l'émulateur qui exécute Inferno dans l'OS hôte."},
      {t:"Native (optionnel)", d:"Graver l'image native sur clé avec dd pour un boot direct sur x86."},
      {t:"Limbo", d:"Découvrir le langage Limbo, conçu spécifiquement pour Inferno."},
      {t:"Styx", d:"Explorer le protocole Styx (héritier de 9P) pour les ressources distribuées."}
    ],
    alt:["9front","genode","templeos"],
    errors:[
      {q:"Aucun pilote pour le GPU ou le Wi-Fi modernes",a:"Ces projets ciblent un public restreint et le support matériel récent est très limité par design. Privilégie une machine ancienne ou une machine virtuelle plutôt qu'un PC neuf pour de meilleures chances de compatibilité."},
      {q:"Un logiciel Windows/Linux classique ne fonctionne pas",a:"La compatibilité annoncée reste partielle sur ces projets communautaires : teste sur un cas simple avant de compter dessus pour un usage précis."},
      {q:"Très peu de documentation en cas de blocage",a:"La communauté est réduite ; le forum ou le wiki officiel du projet reste la meilleure source, plus fiable que des tutoriels tiers généralistes qui datent vite sur ce type de système."}
    ],
    faq:[
      {q:"Pourquoi choisir un système aussi confidentiel ?", a:"Pour explorer une architecture ou une philosophie différente — souvent la curiosité technique ou la recherche d'alternatives aux grands écosystèmes."},
      {q:"Le support logiciel est-il suffisant pour un usage quotidien ?", a:"Généralement plus limité que sur les systèmes grand public ; à réserver à un usage secondaire, en test, ou pour les passionnés."},
      {q:"Inferno s'installe-t-il directement sur le matériel comme un OS classique ?", a:"Il peut tourner nativement, mais l'usage le plus courant est « hébergé » : Inferno s'exécute comme une application (machine virtuelle Dis) au-dessus d'un autre système (Linux, Windows, Plan 9)."}
    ]
  },
  /* ===================== OUTILS / SECOURS (suite) ===================== */
  {
    id:"ubcd", name:"Ultimate Boot CD", version:"5.3.9", cat:"recovery", color:"#34495E", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#34495E" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#34495E">Ub</text></svg>',
    tag:"Compilation historique d'utilitaires de diagnostic matériel, tests mémoire, disques et BIOS.",
    site:"ultimatebootcd.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Intermédiaire", base:"FreeDOS / Linux",
    req:{ram:"512 Mo à 1 Go", disk:"2-4 Go (clé USB bootable)", cpu:"x86_64, fonctionne sur la plupart des PC"},
    steps:[
      {t:"Télécharger l'ISO", d:"ultimatebootcd.com → dernière version stable."},
      {t:"Graver la clé", d:"Rufus (mode DD) ou balenaEtcher."},
      {t:"Démarrer", d:"Booter sur la clé, menu classé par catégories d'outils."},
      {t:"Diagnostic", d:"Memtest86+, tests SMART disques, outils fabricants (Seagate, WD…)."},
      {t:"Utilisation ciblée", d:"Choisir uniquement l'outil nécessaire, l'ensemble n'est pas un OS complet."}
    ],
    alt:["trinityrescuekit","hirensbootcd","gpartedlive"],
    errors:[
      {q:"Mauvais disque sélectionné pendant un clonage",a:"C'est l'erreur la plus dangereuse possible avec ce type d'outil : une cible mal choisie efface définitivement le disque de destination. Vérifie toujours deux fois la taille et le nom exact du disque affiché avant de valider."},
      {q:"Les modifications ne sont pas conservées",a:"Ces systèmes tournent en RAM depuis la clé USB et ne conservent rien au redémarrage par conception — toute donnée à garder doit être copiée sur un support externe avant d'éteindre."},
      {q:"Un contrôleur RAID/NVMe exotique n'est pas reconnu",a:"Le noyau embarqué sur ces outils est parfois plus ancien que celui du système d'origine et peut manquer un pilote récent. Une version plus à jour de l'outil règle souvent le problème."}
    ],
    faq:[
      {q:"L'outil modifie-t-il le disque automatiquement ?", a:"Non, il s'utilise en mode Live et ne touche au disque que sur action explicite (formatage, restauration, écriture d'image)."},
      {q:"Peut-on l'utiliser sur n'importe quel PC en panne ?", a:"Dans la majorité des cas oui, tant que le PC peut démarrer sur une clé USB ; en cas de panne matérielle plus grave, un diagnostic matériel reste nécessaire."}
    ]
  },
  {
    id:"trinityrescuekit", name:"Trinity Rescue Kit", version:"3.4", cat:"recovery", color:"#D68910", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#D68910" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#D68910">Tr</text></svg>',
    tag:"Live orienté maintenance de parc : scan antivirus hors ligne, réinitialisation de mots de passe Windows.",
    site:"trinityhome.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Intermédiaire", base:"Linux",
    req:{ram:"512 Mo à 1 Go", disk:"2-4 Go (clé USB bootable)", cpu:"x86_64, fonctionne sur la plupart des PC"},
    steps:[
      {t:"Télécharger l'ISO", d:"trinityhome.org → dernière version disponible."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Démarrer", d:"Booter sur la clé, interface en ligne de commande avec menus guidés."},
      {t:"Antivirus", d:"Lancer un scan hors-ligne avec ClamAV intégré.", code:"virusscan --update && virusscan /mnt/win"},
      {t:"Mot de passe Windows", d:"Utiliser winpass pour réinitialiser un compte local Windows verrouillé."}
    ],
    alt:["kasperskyrescue","ubcd","hirensbootcd"],
    errors:[
      {q:"Mauvais disque sélectionné pendant un clonage",a:"C'est l'erreur la plus dangereuse possible avec ce type d'outil : une cible mal choisie efface définitivement le disque de destination. Vérifie toujours deux fois la taille et le nom exact du disque affiché avant de valider."},
      {q:"Les modifications ne sont pas conservées",a:"Ces systèmes tournent en RAM depuis la clé USB et ne conservent rien au redémarrage par conception — toute donnée à garder doit être copiée sur un support externe avant d'éteindre."},
      {q:"Un contrôleur RAID/NVMe exotique n'est pas reconnu",a:"Le noyau embarqué sur ces outils est parfois plus ancien que celui du système d'origine et peut manquer un pilote récent. Une version plus à jour de l'outil règle souvent le problème."}
    ],
    faq:[
      {q:"L'outil modifie-t-il le disque automatiquement ?", a:"Non, il s'utilise en mode Live et ne touche au disque que sur action explicite (formatage, restauration, écriture d'image)."},
      {q:"Peut-on l'utiliser sur n'importe quel PC en panne ?", a:"Dans la majorité des cas oui, tant que le PC peut démarrer sur une clé USB ; en cas de panne matérielle plus grave, un diagnostic matériel reste nécessaire."}
    ]
  },
  {
    id:"bottlerocket", name:"Bottlerocket", version:"1.x", cat:"container", color:"#FF9900", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#FF9900" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#FF9900">Br</text></svg>',
    tag:"OS minimal orienté conteneurs porté par AWS, pensé pour EKS/ECS, sans shell ni gestionnaire de paquets classique.",
    site:"github.io", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Avancé", base:"Linux",
    req:{ram:"2-4 Go min.", disk:"10-20 Go d'espace disque", cpu:"x86_64, virtualisation matérielle recommandée (VT-x/AMD-V)"},
    steps:[
      {t:"Choisir la variante", d:"aws.github.io/bottlerocket → image adaptée (EKS, ECS, VMware, bare metal)."},
      {t:"Déployer l'image", d:"Sur AWS, lancer via AMI Bottlerocket dans un Auto Scaling Group ou nodegroup EKS."},
      {t:"Configuration utilisateur", d:"Fournir un user-data TOML décrivant réseau et paramètres kubelet."},
      {t:"Accès admin", d:"Passer par le conteneur « admin container » plutôt qu'un shell SSH classique."},
      {t:"Mises à jour", d:"Le système applique les mises à jour en image complète avec rollback via updog.", code:"apiclient update check"}
    ],
    alt:["talos","photon","rancheros"],
    errors:[
      {q:"Impossible de se connecter en SSH classique",a:"Ces systèmes n'ont généralement pas de shell interactif complet par défaut. L'administration passe par une API ou un outil dédié, pas par un login shell traditionnel."},
      {q:"Aucun gestionnaire de paquets disponible",a:"Ces OS sont volontairement minimalistes : tout logiciel supplémentaire tourne en conteneur, jamais installé sur l'hôte. Cherche une image de conteneur plutôt qu'un paquet système."},
      {q:"La configuration ne survit pas à un redémarrage",a:"La configuration doit être fournie via un fichier cloud-init / user-data au provisionnement, pas modifiée à la main après coup — ces systèmes réinitialisent l'état non déclaré au redémarrage."}
    ],
    faq:[
      {q:"Quelle différence avec Docker Desktop ?", a:"Il s'agit ici d'un système d'exploitation complet dédié aux conteneurs/à l'orchestration, alors que Docker Desktop est une application installée sur un OS classique."},
      {q:"Faut-il des connaissances en Kubernetes/conteneurs pour s'en servir ?", a:"Oui, ce type de système cible des usages d'infrastructure ; des bases solides en conteneurisation sont recommandées avant de se lancer."},
      {q:"Comment installer un outil de débogage sur Bottlerocket ?", a:"Il n'y a pas de gestionnaire de paquets ni d'accès SSH classique : on utilise le « admin container » ou le « control container » dédiés, le système de fichiers principal restant en lecture seule."}
    ]
  },
  /* ===================== AJOUTS v4 (OSARIUM) ===================== */
  {
    id:"raspios", name:"Raspberry Pi OS", version:"Bookworm", cat:"lightweight", color:"#C51A4A", icon:"raspberrypi",
    tag:"L'OS officiel du Raspberry Pi. Debian allégé, taillé pour les cartes ARM.",
    site:"raspberrypi.com", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~8 min", diff:"Facile", base:"Debian",
    req:{ram:"1 Go min. (2-8 Go selon le modèle de Raspberry Pi)", disk:"8 Go de carte microSD min. (16-32 Go conseillés)", cpu:"Carte Raspberry Pi (Zero à 5) — pas un PC x86 classique"},
    steps:[
      {t:"Télécharger l'outil", d:"raspberrypi.com/software → installer Raspberry Pi Imager."},
      {t:"Choisir l'image", d:"Sélectionner Raspberry Pi OS (32/64-bit) dans l'Imager."},
      {t:"Graver la carte SD", d:"Configurer Wi-Fi/SSH dans les options avancées puis écrire."},
      {t:"Premier boot", d:"Insérer la carte, brancher le Pi, suivre l'assistant de bienvenue."}
    ],
    alt:["crunchbang","slax","emmabuntus"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Peut-on l'installer sur un PC classique plutôt qu'un Raspberry Pi ?", a:"Non, ce système est compilé pour l'architecture ARM des cartes Raspberry Pi ; pour redonner vie à un vieux PC x86, mieux vaut se tourner vers une distribution comme Peppermint ou Lubuntu."},
      {q:"Quelle version choisir selon son modèle de Pi ?", a:"La version 64-bit est recommandée sur Raspberry Pi 3/4/5 (RAM ≥ 2 Go) ; la version 32-bit reste utile sur les modèles plus anciens comme le Pi Zero ou le Pi 1/2."}
    ]
  },
  {
    id:"ubuntumate", name:"Ubuntu MATE", version:"24.04 LTS", cat:"desktop", color:"#84A454", icon:"ubuntumate",
    tag:"Ubuntu avec le bureau MATE traditionnel : familier, léger et configurable.",
    site:"ubuntu-mate.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"ubuntu-mate.org/download → dernière LTS."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus, mode image."},
      {t:"Session live", d:"Tester le bureau MATE avant d'installer."},
      {t:"Installer", d:"Assistant Ubuntu ; MATE Tweak pour ajuster les panneaux."}
    ],
    alt:["ubuntubudgie","ubuntukylin","regolith"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"ubuntubudgie", name:"Ubuntu Budgie", version:"24.04 LTS", cat:"desktop", color:"#4B4C6E", icon:"ubuntu",
    tag:"Ubuntu avec le bureau Budgie : élégant, moderne et épuré.",
    site:"ubuntubudgie.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"ubuntubudgie.org → dernière LTS."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Live", d:"Découvrir Budgie et son Raven (centre de notifications)."},
      {t:"Installer", d:"Assistant Ubuntu standard, applets Budgie inclus."}
    ],
    alt:["ubuntumate","ubuntukylin","regolith"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"ubuntukylin", name:"Ubuntu Kylin", version:"24.04 LTS", cat:"desktop", color:"#EA1D2C", icon:"ubuntu",
    tag:"L'édition officielle d'Ubuntu pour le public chinois, bureau UKUI soigné.",
    site:"ubuntukylin.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"ubuntukylin.com → dernière LTS."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Live UKUI", d:"Tester le bureau UKUI proche de Windows."},
      {t:"Installer", d:"Assistant Ubuntu, langues CJK préconfigurées."}
    ],
    alt:["ubuntubudgie","ubuntumate","regolith"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"lmde", name:"LMDE 6", version:"Faye", cat:"desktop", color:"#87CF3E", icon:"linuxmint",
    tag:"Linux Mint Debian Edition : le confort de Mint, directement sur base Debian.",
    site:"linuxmint.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Debian",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"linuxmint.com/download_lmde.php → édition Cinnamon."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Session live", d:"Essayer Cinnamon sans base Ubuntu dessous."},
      {t:"Installer", d:"Installeur Mint classique, codecs proposés."}
    ],
    alt:["mint","endless","deepin"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"tumbleweed", name:"openSUSE Tumbleweed", version:"rolling", cat:"advanced", color:"#73BA25", icon:"opensuse",
    tag:"La rolling release d'openSUSE : toujours à jour, testée par openQA.",
    site:"opensuse.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"—",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"get.opensuse.org/tumbleweed → DVD complet."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Installeur", d:"Choisir langue, bureau (KDE/GNOME), partitionnement."},
      {t:"Mettre à jour", d:"zypper gère la rolling en douceur.", code:"sudo zypper dup"}
    ],
    alt:["microos","opensuse","vanillaos"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."}
    ]
  },
  {
    id:"fedorakde", name:"Fedora KDE", version:"40", cat:"desktop", color:"#294172", icon:"fedora",
    tag:"Le spin officiel de Fedora avec KDE Plasma à la place de GNOME.",
    site:"fedoraproject.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"—",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'ISO", d:"spins.fedoraproject.org/kde → image live KDE."},
      {t:"Graver la clé", d:"Fedora Media Writer ou balenaEtcher."},
      {t:"Live Plasma", d:"Tester le bureau KDE avant installation."},
      {t:"Anaconda", d:"Installeur classique, RPM Fusion en post-install."}
    ],
    alt:["kdeneon","kubuntu","asahi"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"endless", name:"Endless OS", version:"6", cat:"desktop", color:"#FF9F00", icon:null,
    tag:"OS immuable pensé pour l'éducation, riche en contenu hors-ligne. GNOME simplifié.",
    site:"endlessos.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Debian",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits récent (dernières générations conseillées)"},
    steps:[
      {t:"Télécharger l'image", d:"endlessos.com → image de base ou complète (apps préinstallées)."},
      {t:"Graver la clé", d:"Endless USB Tool ou balenaEtcher."},
      {t:"Installer", d:"Assistant graphique : « Réinstaller » efface le disque."},
      {t:"App Center", d:"Installer des apps Flatpak depuis le store intégré."}
    ],
    alt:["lmde","nitrux","deepin"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"vanillaos", name:"Vanilla OS", version:"2 Orchid", cat:"advanced", color:"#C99DFF", icon:null,
    tag:"OS immuable sur base Debian sid, transactions atomiques (ABRoot) et conteneurs.",
    site:"vanillaos.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Debian",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"vanillaos.org → dernière image stable."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Installeur", d:"Assistant graphique, système en lecture seule ensuite."},
      {t:"apx", d:"Installer les logiciels dans des sous-systèmes conteneurisés.", code:"apx install <paquet>"}
    ],
    alt:["devuan","blendos","clearlinux"],
    errors:[
      {q:"« Aucun paquet à installer » / le gestionnaire de paquets classique échoue",a:"Le système de fichiers racine est en lecture seule par design. Utilise l'outil dédié à la surcouche (rpm-ostree, transactional-update, ABRoot selon le système), puis redémarre pour appliquer le changement."},
      {q:"Le changement ne prend pas effet immédiatement",a:"Les mises à jour et installations système préparent une nouvelle image, activée seulement au redémarrage suivant. C'est normal, contrairement à un système classique."},
      {q:"Une application graphique manque au premier lancement",a:"Installe-la via Flatpak (déjà préconfiguré sur la plupart de ces systèmes) ou dans un conteneur toolbox/distrobox plutôt que sur le système hôte, qui reste volontairement minimal."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."},
      {q:"Puis-je utiliser apt install normalement sur Vanilla OS ?", a:"Le système de base est immuable (géré par ABRoot avec double partition A/B) : pour les applications, mieux vaut utiliser apx (qui isole dans des conteneurs) plutôt que d'installer directement sur le système hôte."}
    ]
  },
  {
    id:"blendos", name:"blendOS", version:"rolling", cat:"advanced", color:"#4285F4", icon:null,
    tag:"Arch immuable qui fait tourner apps Arch, Fedora, Ubuntu et Android côte à côte.",
    site:"blendos.co", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Arch",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"blendos.co → dernière image."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Installeur", d:"Assistant graphique, système déclaratif immuable."},
      {t:"Conteneurs", d:"Créer des conteneurs multi-distros via l'outil blend.", code:"blend create-container"}
    ],
    alt:["parabola","artix","endeavouros"],
    errors:[
      {q:"Pas de réseau dans le shell live",a:"Le Wi-Fi se configure manuellement via iwctl ou wpa_supplicant selon le système. Sans connexion, impossible de récupérer les paquets pendant l'installation — vérifie-la avant de lancer la phase de bootstrap."},
      {q:"Le système ne boote plus après l'installation",a:"Cause la plus fréquente : partition EFI non montée sur /boot ou /boot/efi avant d'installer le bootloader, ou fstab généré trop tôt/oublié. Revérifie le montage des partitions avant de chrooter."},
      {q:"L'installation ou la synchronisation des paquets échoue",a:"Vérifie l'horloge système avant toute opération réseau — un décalage d'horloge fait souvent échouer la vérification des clés de signature des dépôts."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."},
      {q:"blendOS fonctionne-t-il comme une distribution Arch classique ?", a:"Non : c'est un système atomique et immuable qui peut piocher des paquets Arch, Fedora ou Ubuntu via des conteneurs et Nix, mais la base ne s'administre pas avec pacman/dnf/apt directement."}
    ]
  },
  {
    id:"clearlinux", name:"Clear Linux OS", version:"rolling", cat:"advanced", color:"#0071C5", icon:null,
    tag:"Distribution Intel optimisée pour la performance x86. Bundles au lieu de paquets.",
    site:"clearlinux.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"—",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'image", d:"clearlinux.org/downloads → image live server ou desktop."},
      {t:"Graver la clé", d:"dd ou balenaEtcher."},
      {t:"Installeur", d:"clr-installer en TUI ou GUI : disque, télémétrie (optionnelle)."},
      {t:"swupd", d:"Gérer les bundles logiciels.", code:"sudo swupd bundle-add <bundle>"}
    ],
    alt:["blendos","vanillaos","tumbleweed"],
    errors:[
      {q:"Pas de réseau dans le shell live",a:"Le Wi-Fi se configure manuellement via iwctl ou wpa_supplicant selon le système. Sans connexion, impossible de récupérer les paquets pendant l'installation — vérifie-la avant de lancer la phase de bootstrap."},
      {q:"Le système ne boote plus après l'installation",a:"Cause la plus fréquente : partition EFI non montée sur /boot ou /boot/efi avant d'installer le bootloader, ou fstab généré trop tôt/oublié. Revérifie le montage des partitions avant de chrooter."},
      {q:"L'installation ou la synchronisation des paquets échoue",a:"Vérifie l'horloge système avant toute opération réseau — un décalage d'horloge fait souvent échouer la vérification des clés de signature des dépôts."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."},
      {q:"Pourquoi les commandes apt ou dnf ne fonctionnent-elles pas sur Clear Linux ?", a:"Clear Linux utilise son propre gestionnaire, swupd, basé sur des « bundles » de logiciels plutôt que des paquets individuels classiques."}
    ]
  },
  {
    id:"crunchbang", name:"CrunchBang++", version:"12", cat:"lightweight", color:"#2E2E2E", icon:null,
    tag:"Debian minimaliste + Openbox. L'esprit #! ressuscité, ultra-léger et sobre.",
    site:"crunchbangplusplus.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"crunchbangplusplus.org → dernière ISO."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Installeur Debian", d:"Installeur netinst classique, minimal."},
      {t:"Openbox", d:"Bureau Openbox préconfiguré, menu clic-droit et tint2."}
    ],
    alt:["slax","emmabuntus","raspios"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"slax", name:"Slax", version:"15", cat:"lightweight", color:"#0F9BD7", icon:null,
    tag:"Live portable qui tient sur une clé et sauvegarde les changements. Debian dessous.",
    site:"slax.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~6 min", diff:"Facile", base:"Debian",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"slax.org → édition Debian."},
      {t:"Copier sur clé", d:"Extraire le dossier /slax sur une clé FAT32 puis lancer bootinst."},
      {t:"Booter", d:"Système persistant : les modifs sont conservées."},
      {t:"Modules", d:"Ajouter des logiciels sous forme de modules .sb activables."}
    ],
    alt:["crunchbang","emmabuntus","raspios"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"porteus", name:"Porteus", version:"5.01", cat:"lightweight", color:"#5C946E", icon:null,
    tag:"Distro modulaire ultra-rapide qui vit en RAM. Bureaux au choix, taille minuscule.",
    site:"porteus.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Intermédiaire", base:"Slackware",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"porteus.org → choisir le bureau (KDE, XFCE, MATE, LXQt…)."},
      {t:"Graver la clé", d:"Script Porteus USB installer ou dd."},
      {t:"Boot en RAM", d:"Charge tout en mémoire : démarrage éclair."},
      {t:"Modules", d:"Gérer les logiciels via le Porteus Package Manager."}
    ],
    alt:["absolutelinux","slax","emmabuntus"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"emmabuntus", name:"Emmabuntüs", version:"DE5", cat:"lightweight", color:"#E9573F", icon:null,
    tag:"Dérivée d'Ubuntu/Debian pour reconditionner les vieux PC. Solidaire et clé en main.",
    site:"emmabuntus.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Debian",
    req:{ram:"512 Mo à 1 Go", disk:"5-8 Go d'espace disque", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"emmabuntus.org → édition Debian (Xfce/LXQt)."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Live", d:"Tester le bureau organisé en dock thématique."},
      {t:"Installer", d:"Assistant Calamares puis script post-install groupé."}
    ],
    alt:["slax","crunchbang","raspios"],
    errors:[
      {q:"La clé USB ne boote pas sur une machine ancienne",a:"Les PC pré-2012 démarrent souvent en BIOS Legacy (MBR) et non UEFI. Recrée la clé avec un partitionnement MBR si le GPT/UEFI échoue — c'est la cause la plus fréquente d'échec sur du matériel ancien."},
      {q:"Mauvaise version téléchargée (32 vs 64 bits)",a:"Ces systèmes ciblant du matériel ancien proposent souvent encore une image 32 bits en plus de la 64 bits — vérifie l'architecture du processeur avant de télécharger, une image 64 bits ne démarrera pas sur un CPU 32 bits."},
      {q:"La carte SD se corrompt ou l'installation échoue au boot",a:"Sur carte SD, utilise une carte de qualité (classe A1/A2) et vérifie l'intégrité de l'image après écriture — une carte bas de gamme est la cause n°1 de corruption silencieuse sur ce type d'installation."}
    ],
    faq:[
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, souvent avec 512 Mo à 1 Go de RAM, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"trisquel", name:"Trisquel GNU/Linux", version:"11 Aramo", cat:"advanced", color:"#0060A9", icon:null,
    tag:"Distribution 100% libre approuvée par la FSF. Aucun blob propriétaire.",
    site:"trisquel.info", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Ubuntu",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"trisquel.info/download → édition standard (MATE) ou Sugar/Mini."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Live", d:"Bureau MATE, noyau Linux-libre sans micrologiciels fermés."},
      {t:"Installer", d:"Installeur Ubiquity classique, dépôts entièrement libres."}
    ],
    alt:["parabola","hyperbola","guix"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Pas de Wi-Fi pendant l'installation",a:"Certains pilotes Wi-Fi propriétaires (Broadcom, Realtek récents) ne sont pas inclus par défaut. Branche un câble Ethernet pour l'installation, ou utilise une ISO alternative incluant les pilotes non-libres si disponible."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."}
    ]
  },
  {
    id:"parabola", name:"Parabola", version:"rolling", cat:"advanced", color:"#797DF4", icon:null,
    tag:"Arch entièrement libre (FSF). Rolling, noyau Linux-libre, dépôts nettoyés.",
    site:"parabola.nu", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~40 min", diff:"Expert", base:"Arch",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"parabola.nu → image de base ou LXDE live."},
      {t:"Graver la clé", d:"dd de l'image hybride."},
      {t:"Installer comme Arch", d:"Partition, pacstrap, chroot — procédure Arch."},
      {t:"pacman", d:"Dépôts libres uniquement, mise à jour rolling.", code:"sudo pacman -Syu"}
    ],
    alt:["blendos","artix","endeavouros"],
    errors:[
      {q:"Pas de réseau dans le shell live",a:"Le Wi-Fi se configure manuellement via iwctl ou wpa_supplicant selon le système. Sans connexion, impossible de récupérer les paquets pendant l'installation — vérifie-la avant de lancer la phase de bootstrap."},
      {q:"Le système ne boote plus après l'installation",a:"Cause la plus fréquente : partition EFI non montée sur /boot ou /boot/efi avant d'installer le bootloader, ou fstab généré trop tôt/oublié. Revérifie le montage des partitions avant de chrooter."},
      {q:"L'installation ou la synchronisation des paquets échoue",a:"Vérifie l'horloge système avant toute opération réseau — un décalage d'horloge fait souvent échouer la vérification des clés de signature des dépôts."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."}
    ]
  },
  {
    id:"hyperbola", name:"Hyperbola", version:"0.4", cat:"advanced", color:"#12A5DF", icon:null,
    tag:"Distro libre stable (ex-Arch, en migration vers un noyau BSD). Puriste et minimaliste.",
    site:"hyperbola.info", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~30 min", diff:"Expert", base:"Arch / BSD",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 (temps de compilation important selon le projet)"},
    steps:[
      {t:"Télécharger l'ISO", d:"hyperbola.info → dernière image."},
      {t:"Graver la clé", d:"dd de l'ISO."},
      {t:"Installer", d:"Procédure manuelle façon Arch, noyau Linux-libre LTS."},
      {t:"pacman", d:"Dépôts libres, philosophie stable plutôt que rolling."}
    ],
    alt:["parabola","trisquel","clearlinux"],
    errors:[
      {q:"Pas de réseau dans le shell live",a:"Le Wi-Fi se configure manuellement via iwctl ou wpa_supplicant selon le système. Sans connexion, impossible de récupérer les paquets pendant l'installation — vérifie-la avant de lancer la phase de bootstrap."},
      {q:"Le système ne boote plus après l'installation",a:"Cause la plus fréquente : partition EFI non montée sur /boot ou /boot/efi avant d'installer le bootloader, ou fstab généré trop tôt/oublié. Revérifie le montage des partitions avant de chrooter."},
      {q:"L'installation ou la synchronisation des paquets échoue",a:"Vérifie l'horloge système avant toute opération réseau — un décalage d'horloge fait souvent échouer la vérification des clés de signature des dépôts."}
    ],
    faq:[
      {q:"Est-ce adapté à un débutant ?", a:"Non, ce système suppose une bonne compréhension de Linux (ligne de commande, partitionnement, configuration manuelle) avant de se lancer."},
      {q:"Que faire en cas de blocage pendant l'installation ?", a:"La documentation officielle et le wiki du projet sont généralement très détaillés ; c'est la meilleure première ressource en cas de blocage."}
    ]
  },
  {
    id:"photon", name:"Photon OS", version:"5.0", cat:"container", color:"#7CB342", icon:null,
    tag:"OS minimal de VMware, optimisé pour les conteneurs et les hyperviseurs.",
    site:"github.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Avancé", base:"—",
    req:{ram:"2-4 Go min.", disk:"10-20 Go d'espace disque", cpu:"x86_64, virtualisation matérielle recommandée (VT-x/AMD-V)"},
    steps:[
      {t:"Télécharger l'ISO", d:"github.com/vmware/photon → ISO minimal ou full."},
      {t:"Graver / VM", d:"dd, ou monter l'ISO directement dans une VM."},
      {t:"Installeur", d:"TUI : choisir Minimal, disque, mot de passe root."},
      {t:"tdnf", d:"Gérer les paquets avec tdnf, lancer Docker.", code:"tdnf install docker && systemctl enable docker"}
    ],
    alt:["rancheros","bottlerocket","talos"],
    errors:[
      {q:"Impossible de se connecter en SSH classique",a:"Ces systèmes n'ont généralement pas de shell interactif complet par défaut. L'administration passe par une API ou un outil dédié, pas par un login shell traditionnel."},
      {q:"Aucun gestionnaire de paquets disponible",a:"Ces OS sont volontairement minimalistes : tout logiciel supplémentaire tourne en conteneur, jamais installé sur l'hôte. Cherche une image de conteneur plutôt qu'un paquet système."},
      {q:"La configuration ne survit pas à un redémarrage",a:"La configuration doit être fournie via un fichier cloud-init / user-data au provisionnement, pas modifiée à la main après coup — ces systèmes réinitialisent l'état non déclaré au redémarrage."}
    ],
    faq:[
      {q:"Quelle différence avec Docker Desktop ?", a:"Il s'agit ici d'un système d'exploitation complet dédié aux conteneurs/à l'orchestration, alors que Docker Desktop est une application installée sur un OS classique."},
      {q:"Faut-il des connaissances en Kubernetes/conteneurs pour s'en servir ?", a:"Oui, ce type de système cible des usages d'infrastructure ; des bases solides en conteneurisation sont recommandées avant de se lancer."},
      {q:"Photon OS convient-il pour un usage bureautique ?", a:"Non : c'est un système minimaliste optimisé pour l'hébergement de conteneurs dans des environnements VMware/cloud, sans environnement de bureau ni logiciels grand public."}
    ]
  },
  {
    id:"rancheros", name:"RancherOS / k3OS", version:"legacy", cat:"container", color:"#0075A8", icon:null,
    tag:"OS minimal où tout est un conteneur Docker. Idéal edge/Kubernetes (héritage SUSE).",
    site:"github.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Avancé", base:"—",
    req:{ram:"2-4 Go min.", disk:"10-20 Go d'espace disque", cpu:"x86_64, virtualisation matérielle recommandée (VT-x/AMD-V)"},
    steps:[
      {t:"Récupérer l'image", d:"github.com/rancher/os → ISO (ou k3OS pour du k3s intégré)."},
      {t:"Graver / booter", d:"dd sur clé, ou déployer l'image en VM/cloud."},
      {t:"Installer", d:"Installation guidée par un fichier cloud-config YAML.", code:"sudo ros install -c cloud-config.yml -d /dev/sda"},
      {t:"System Docker", d:"Les services système eux-mêmes tournent en conteneurs."}
    ],
    alt:["photon","bottlerocket","talos"],
    errors:[
      {q:"Impossible de se connecter en SSH classique",a:"Ces systèmes n'ont généralement pas de shell interactif complet par défaut. L'administration passe par une API ou un outil dédié, pas par un login shell traditionnel."},
      {q:"Aucun gestionnaire de paquets disponible",a:"Ces OS sont volontairement minimalistes : tout logiciel supplémentaire tourne en conteneur, jamais installé sur l'hôte. Cherche une image de conteneur plutôt qu'un paquet système."},
      {q:"La configuration ne survit pas à un redémarrage",a:"La configuration doit être fournie via un fichier cloud-init / user-data au provisionnement, pas modifiée à la main après coup — ces systèmes réinitialisent l'état non déclaré au redémarrage."}
    ],
    faq:[
      {q:"Quelle différence avec Docker Desktop ?", a:"Il s'agit ici d'un système d'exploitation complet dédié aux conteneurs/à l'orchestration, alors que Docker Desktop est une application installée sur un OS classique."},
      {q:"Faut-il des connaissances en Kubernetes/conteneurs pour s'en servir ?", a:"Oui, ce type de système cible des usages d'infrastructure ; des bases solides en conteneurisation sont recommandées avant de se lancer."},
      {q:"RancherOS / k3OS est-il toujours recommandé pour un nouveau projet ?", a:"Non : le projet est en fin de vie (legacy), Rancher recommande désormais k3s sur une distribution standard, ou Harvester pour une infrastructure HCI complète."}
    ]
  },
  {
    id:"postmarketos", name:"postmarketOS", version:"rolling", cat:"mobile", color:"#009900", icon:"postmarketos",
    tag:"Linux (Alpine) pour smartphones : vise 10 ans de support par appareil.",
    site:"postmarketos.org", license:"Libre / Open-source", popular:false, isNew:true,
    time:"~20 min", diff:"Avancé", base:"Alpine",
    req:{ram:"2-4 Go selon l'appareil", disk:"8-16 Go de stockage libre", cpu:"Smartphone/tablette compatible (voir liste officielle des appareils pris en charge)"},
    steps:[
      {t:"Vérifier l'appareil", d:"wiki.postmarketos.org → confirmer le support de ton téléphone."},
      {t:"Installer pmbootstrap", d:"Outil de build officiel via Python/pip.", code:"pip install pmbootstrap && pmbootstrap init"},
      {t:"Flasher", d:"Générer l'image et la flasher via fastboot/heimdall.", code:"pmbootstrap flasher flash_rootfs"},
      {t:"Interface", d:"Choisir Phosh, Plasma Mobile ou Sxmo au premier boot."}
    ],
    alt:["androidx86","lineageos","mobian"],
    errors:[
      {q:"Le déverrouillage du bootloader efface toutes les données",a:"C'est systématique et volontaire (mesure anti-vol) : sauvegarde impérativement tes données avant de lancer le déverrouillage, il n'existe aucun moyen de l'éviter."},
      {q:"Mauvaise image flashée pour l'appareil",a:"Chaque modèle a son propre nom de code et sa propre image. Flasher l'image d'un autre appareil, même très proche, peut rendre le téléphone temporairement inutilisable — vérifie trois fois le nom de code exact avant de flasher."},
      {q:"Les paiements sans contact / apps bancaires refusent de fonctionner",a:"Beaucoup d'apps bancaires exigent une attestation d'intégrité que ces systèmes ne passent pas nativement. C'est une limitation connue de l'écosystème, pas un bug d'installation."}
    ],
    faq:[
      {q:"Toutes les applications Android fonctionnent-elles après l'installation ?", a:"Cela dépend du projet : certains embarquent une compatibilité Android complète, d'autres nécessitent une couche additionnelle (microG, sandbox Play Store…)."},
      {q:"L'installation efface-t-elle les données du téléphone ?", a:"Oui dans l'immense majorité des cas : toujours sauvegarder photos, contacts et fichiers avant de démarrer."},
      {q:"Toutes les fonctions du téléphone (appareil photo, modem 4G) fonctionnent-elles ?", a:"Cela dépend énormément du modèle : consulter le wiki postmarketOS pour connaître le niveau de support (souvent partiel) du matériel spécifique avant d'installer."}
    ]
  },
  {
    id:"androidx86", name:"Android-x86", version:"9.0", cat:"mobile", color:"#3DDC84", icon:"android",
    tag:"Android porté sur PC/x86. Faire tourner des apps Android sur un vrai ordinateur.",
    site:"android-x86.org", license:"Libre / Open-source", popular:true, isNew:true,
    time:"~12 min", diff:"Intermédiaire", base:"Android",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"8-16 Go de stockage libre", cpu:"PC/laptop x86 ou x86_64 classique (pas un smartphone)"},
    steps:[
      {t:"Télécharger l'ISO", d:"android-x86.org → dernière release stable."},
      {t:"Graver la clé", d:"Rufus (mode DD) ou balenaEtcher."},
      {t:"Live ou install", d:"Tester en live, ou installer sur une partition dédiée."},
      {t:"GRUB", d:"Installer le bootloader, choisir ext4, puis configurer Android."}
    ],
    alt:["postmarketos","lineageos","grapheneos"],
    errors:[
      {q:"Le déverrouillage du bootloader efface toutes les données",a:"C'est systématique et volontaire (mesure anti-vol) : sauvegarde impérativement tes données avant de lancer le déverrouillage, il n'existe aucun moyen de l'éviter."},
      {q:"Mauvaise image flashée pour l'appareil",a:"Chaque modèle a son propre nom de code et sa propre image. Flasher l'image d'un autre appareil, même très proche, peut rendre le téléphone temporairement inutilisable — vérifie trois fois le nom de code exact avant de flasher."},
      {q:"Les paiements sans contact / apps bancaires refusent de fonctionner",a:"Beaucoup d'apps bancaires exigent une attestation d'intégrité que ces systèmes ne passent pas nativement. C'est une limitation connue de l'écosystème, pas un bug d'installation."}
    ],
    faq:[
      {q:"Toutes les applications Android fonctionnent-elles après l'installation ?", a:"Cela dépend du matériel : le tactile, la caméra ou le GPS sont absents sur un PC classique, et certaines apps pensées pour un écran de smartphone s'affichent mal sur un grand écran."},
      {q:"L'installation efface-t-elle les données du PC ?", a:"Seulement la partition choisie durant l'installation ; en mode Live (sans installation), rien n'est écrit sur le disque et le PC repart intact au redémarrage."}
    ]
  },
  {
    id:"libreelec", name:"LibreELEC", version:"12", cat:"media", color:"#00A9E0", icon:null,
    tag:"« Just enough OS for Kodi » : media center minimal qui démarre direct sur Kodi.",
    site:"libreelec.tv", license:"Libre / Open-source", popular:false, isNew:true,
    time:"~8 min", diff:"Facile", base:"Linux",
    req:{ram:"1-2 Go suffisent généralement", disk:"carte SD/clé USB 8 Go min. (stockage séparé pour les médias)", cpu:"Mini-PC ou boîtier TV compatible (x86 ou ARM selon le projet)"},
    steps:[
      {t:"Télécharger l'outil", d:"libreelec.tv → LibreELEC USB-SD Creator."},
      {t:"Graver le média", d:"Choisir la plateforme (PC, Raspberry Pi…) et écrire l'image."},
      {t:"Premier boot", d:"Kodi se lance automatiquement, assistant réseau."},
      {t:"Add-ons", d:"Installer des extensions et sources multimédia depuis Kodi."}
    ],
    alt:["osmc","coreelec","recalbox"],
    errors:[
      {q:"Mauvaise image pour le boîtier/SoC",a:"Chaque famille de boîtier (Amlogic, Raspberry Pi, Intel NUC…) a sa propre image. Vérifie précisément le modèle avant de flasher — c'est la cause n°1 d'échec de boot sur ce type de système."},
      {q:"La télécommande / HDMI-CEC ne fonctionne pas",a:"Le support CEC dépend du récepteur/TV et doit parfois être activé manuellement dans les paramètres système après la première installation — ce n'est pas toujours automatique selon le matériel."},
      {q:"Un addon ne s'installe pas",a:"Les dépôts tiers changent souvent d'adresse ou ferment. Vérifie que le dépôt source de l'addon est toujours en ligne avant de suspecter un problème d'installation du système lui-même."}
    ],
    faq:[
      {q:"Peut-on l'utiliser avec une télécommande classique ?", a:"Oui, la plupart des centres multimédia de ce type prennent en charge les télécommandes IR/CEC ou une application mobile dédiée."},
      {q:"Où stocker les fichiers vidéo/musique ?", a:"Sur un disque externe, un NAS en réseau, ou une carte de stockage séparée du support de démarrage."}
    ]
  },
  {
    id:"osmc", name:"OSMC", version:"2024", cat:"media", color:"#17394E", icon:null,
    tag:"Media center Debian + Kodi, soigné et convivial. Star du Raspberry Pi.",
    site:"osmc.tv", license:"Libre / Open-source", popular:false, isNew:true,
    time:"~8 min", diff:"Facile", base:"Debian",
    req:{ram:"1-2 Go suffisent généralement", disk:"carte SD/clé USB 8 Go min. (stockage séparé pour les médias)", cpu:"Mini-PC ou boîtier TV compatible (x86 ou ARM selon le projet)"},
    steps:[
      {t:"Télécharger l'installeur", d:"osmc.tv/download → installeur pour ta plateforme."},
      {t:"Graver le média", d:"L'installeur écrit l'image sur carte SD / clé."},
      {t:"Premier boot", d:"Assistant OSMC : langue, réseau, apparence."},
      {t:"Kodi", d:"Ajouter des sources et le My OSMC pour les réglages système."}
    ],
    alt:["libreelec","coreelec","recalbox"],
    errors:[
      {q:"Mauvaise image pour le boîtier/SoC",a:"Chaque famille de boîtier (Amlogic, Raspberry Pi, Intel NUC…) a sa propre image. Vérifie précisément le modèle avant de flasher — c'est la cause n°1 d'échec de boot sur ce type de système."},
      {q:"La télécommande / HDMI-CEC ne fonctionne pas",a:"Le support CEC dépend du récepteur/TV et doit parfois être activé manuellement dans les paramètres système après la première installation — ce n'est pas toujours automatique selon le matériel."},
      {q:"Un addon ne s'installe pas",a:"Les dépôts tiers changent souvent d'adresse ou ferment. Vérifie que le dépôt source de l'addon est toujours en ligne avant de suspecter un problème d'installation du système lui-même."}
    ],
    faq:[
      {q:"Peut-on l'utiliser avec une télécommande classique ?", a:"Oui, la plupart des centres multimédia de ce type prennent en charge les télécommandes IR/CEC ou une application mobile dédiée."},
      {q:"Où stocker les fichiers vidéo/musique ?", a:"Sur un disque externe, un NAS en réseau, ou une carte de stockage séparée du support de démarrage."}
    ]
  },
  {
    id:"recalbox", name:"Recalbox", version:"9", cat:"gaming", color:"#F67E1B", icon:null,
    tag:"Rétro-gaming clé en main, ultra-accessible. EmulationStation + Kodi intégré.",
    site:"recalbox.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Linux",
    req:{ram:"8 Go min. (16 Go conseillés)", disk:"64 Go min., bien plus selon la bibliothèque de jeux", cpu:"CPU récent + GPU dédié compatible"},
    steps:[
      {t:"Télécharger l'image", d:"recalbox.com → image pour PC x86_64, Pi, Odroid…"},
      {t:"Graver la carte/clé", d:"Raspberry Pi Imager ou balenaEtcher."},
      {t:"Premier boot", d:"EmulationStation démarre directement."},
      {t:"ROMs & manettes", d:"Copier les ROMs via le réseau, associer les manettes."}
    ],
    alt:["lakka","batocera","chimeraos"],
    errors:[
      {q:"La manette n'est pas reconnue",a:"Certaines manettes (notamment Xbox récentes en Bluetooth) demandent un pilote ou un appairage manuel au premier lancement. Branche-la en filaire pour la configuration initiale, plus fiable."},
      {q:"Les jeux/ROMs n'apparaissent pas",a:"Les BIOS des consoles émulées ne sont jamais fournis (question de droits) et doivent être ajoutés manuellement dans le bon dossier ; sans eux, plusieurs émulateurs refusent de lancer un jeu même valide."},
      {q:"Écran noir après une mise à jour des pilotes GPU",a:"Sur les systèmes basés Arch avec pilotes propriétaires NVIDIA, une mise à jour de kernel sans régénération de l'initramfs peut casser le démarrage graphique. Un rollback (si le système le permet) ou un chroot depuis une clé live permet de revenir en arrière."}
    ],
    faq:[
      {q:"Tous les jeux Windows fonctionnent-ils ?", a:"La compatibilité dépend de la couche de traduction utilisée (Proton, Wine) : la plupart des jeux populaires fonctionnent, mais certains titres avec anti-triche noyau restent incompatibles."},
      {q:"Faut-il une carte graphique dédiée ?", a:"Non obligatoire, mais fortement recommandée pour de bonnes performances en jeu."}
    ]
  },
  {
    id:"rescuezilla", name:"Rescuezilla", version:"2.5", cat:"recovery", color:"#2C82C9", icon:null,
    tag:"Le « Clonezilla graphique » : sauvegarde, restauration et clonage de disques en clics.",
    site:"rescuezilla.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"512 Mo à 1 Go", disk:"2-4 Go (clé USB bootable)", cpu:"x86_64, fonctionne sur la plupart des PC"},
    steps:[
      {t:"Télécharger l'ISO", d:"rescuezilla.com → dernière image."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Booter", d:"Interface graphique claire au démarrage."},
      {t:"Backup / Restore", d:"Cloner un disque ou créer une image, compatible Clonezilla."}
    ],
    alt:["redorescue","kasperskyrescue","finnix"],
    errors:[
      {q:"Mauvais disque sélectionné pendant un clonage",a:"C'est l'erreur la plus dangereuse possible avec ce type d'outil : une cible mal choisie efface définitivement le disque de destination. Vérifie toujours deux fois la taille et le nom exact du disque affiché avant de valider."},
      {q:"Les modifications ne sont pas conservées",a:"Ces systèmes tournent en RAM depuis la clé USB et ne conservent rien au redémarrage par conception — toute donnée à garder doit être copiée sur un support externe avant d'éteindre."},
      {q:"Un contrôleur RAID/NVMe exotique n'est pas reconnu",a:"Le noyau embarqué sur ces outils est parfois plus ancien que celui du système d'origine et peut manquer un pilote récent. Une version plus à jour de l'outil règle souvent le problème."}
    ],
    faq:[
      {q:"L'outil modifie-t-il le disque automatiquement ?", a:"Non, il s'utilise en mode Live et ne touche au disque que sur action explicite (formatage, restauration, écriture d'image)."},
      {q:"Peut-on l'utiliser sur n'importe quel PC en panne ?", a:"Dans la majorité des cas oui, tant que le PC peut démarrer sur une clé USB ; en cas de panne matérielle plus grave, un diagnostic matériel reste nécessaire."}
    ]
  },
  {
    id:"redorescue", name:"Redo Rescue", version:"4", cat:"recovery", color:"#1ABC9C", icon:null,
    tag:"Sauvegarde et restauration bare-metal en un clic. Live minimal et rapide.",
    site:"redorescue.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~6 min", diff:"Facile", base:"Debian",
    req:{ram:"512 Mo à 1 Go", disk:"2-4 Go (clé USB bootable)", cpu:"x86_64, fonctionne sur la plupart des PC"},
    steps:[
      {t:"Télécharger l'ISO", d:"redorescue.com → dernière image."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Booter", d:"Environnement graphique léger au démarrage."},
      {t:"Backup réseau", d:"Sauvegarder vers un partage réseau (SMB/NFS/SSH)."}
    ],
    alt:["finnix","gpartedlive","rescatux"],
    errors:[
      {q:"Mauvais disque sélectionné pendant un clonage",a:"C'est l'erreur la plus dangereuse possible avec ce type d'outil : une cible mal choisie efface définitivement le disque de destination. Vérifie toujours deux fois la taille et le nom exact du disque affiché avant de valider."},
      {q:"Les modifications ne sont pas conservées",a:"Ces systèmes tournent en RAM depuis la clé USB et ne conservent rien au redémarrage par conception — toute donnée à garder doit être copiée sur un support externe avant d'éteindre."},
      {q:"Un contrôleur RAID/NVMe exotique n'est pas reconnu",a:"Le noyau embarqué sur ces outils est parfois plus ancien que celui du système d'origine et peut manquer un pilote récent. Une version plus à jour de l'outil règle souvent le problème."}
    ],
    faq:[
      {q:"L'outil modifie-t-il le disque automatiquement ?", a:"Non, il s'utilise en mode Live et ne touche au disque que sur action explicite (formatage, restauration, écriture d'image)."},
      {q:"Peut-on l'utiliser sur n'importe quel PC en panne ?", a:"Dans la majorité des cas oui, tant que le PC peut démarrer sur une clé USB ; en cas de panne matérielle plus grave, un diagnostic matériel reste nécessaire."}
    ]
  },
  {
    id:"kasperskyrescue", name:"Kaspersky Rescue Disk", version:"18", cat:"recovery", color:"#006D5C", icon:null,
    tag:"Live antivirus hors-ligne pour désinfecter un système Windows infecté sans le démarrer.",
    site:"kaspersky.fr", license:"Propriétaire", popular:false, isNew:false,
    time:"~8 min", diff:"Facile", base:"Linux",
    req:{ram:"512 Mo à 1 Go", disk:"2-4 Go (clé USB bootable)", cpu:"x86_64, fonctionne sur la plupart des PC"},
    steps:[
      {t:"Télécharger l'ISO", d:"kaspersky.fr → Kaspersky Rescue Disk (gratuit)."},
      {t:"Graver la clé", d:"Rufus ou balenaEtcher."},
      {t:"Booter", d:"Démarrer sur la clé, accepter le mode graphique."},
      {t:"Analyser", d:"Mettre à jour les bases puis scanner les disques infectés."}
    ],
    alt:["trinityrescuekit","redorescue","finnix"],
    errors:[
      {q:"Mauvais disque sélectionné pendant un clonage",a:"C'est l'erreur la plus dangereuse possible avec ce type d'outil : une cible mal choisie efface définitivement le disque de destination. Vérifie toujours deux fois la taille et le nom exact du disque affiché avant de valider."},
      {q:"Les modifications ne sont pas conservées",a:"Ces systèmes tournent en RAM depuis la clé USB et ne conservent rien au redémarrage par conception — toute donnée à garder doit être copiée sur un support externe avant d'éteindre."},
      {q:"Un contrôleur RAID/NVMe exotique n'est pas reconnu",a:"Le noyau embarqué sur ces outils est parfois plus ancien que celui du système d'origine et peut manquer un pilote récent. Une version plus à jour de l'outil règle souvent le problème."}
    ],
    faq:[
      {q:"L'outil modifie-t-il le disque automatiquement ?", a:"Non, il s'utilise en mode Live et ne touche au disque que sur action explicite (formatage, restauration, écriture d'image)."},
      {q:"Peut-on l'utiliser sur n'importe quel PC en panne ?", a:"Dans la majorité des cas oui, tant que le PC peut démarrer sur une clé USB ; en cas de panne matérielle plus grave, un diagnostic matériel reste nécessaire."}
    ]
  },
  {
    id:"finnix", name:"Finnix", version:"126", cat:"recovery", color:"#B01E28", icon:null,
    tag:"Live CD d'administration système, minuscule et sans interface. L'outil du sysadmin.",
    site:"finnix.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~5 min", diff:"Avancé", base:"Debian",
    req:{ram:"512 Mo à 1 Go", disk:"2-4 Go (clé USB bootable)", cpu:"x86_64, fonctionne sur la plupart des PC"},
    steps:[
      {t:"Télécharger l'ISO", d:"finnix.org → dernière image (~450 Mo)."},
      {t:"Graver la clé", d:"dd ou balenaEtcher."},
      {t:"Booter en console", d:"Environnement root en ligne de commande, très rapide."},
      {t:"Maintenance", d:"Réparer partitions, LVM, RAID, chroot, réseau depuis les outils inclus."}
    ],
    alt:["redorescue","gpartedlive","rescatux"],
    errors:[
      {q:"Mauvais disque sélectionné pendant un clonage",a:"C'est l'erreur la plus dangereuse possible avec ce type d'outil : une cible mal choisie efface définitivement le disque de destination. Vérifie toujours deux fois la taille et le nom exact du disque affiché avant de valider."},
      {q:"Les modifications ne sont pas conservées",a:"Ces systèmes tournent en RAM depuis la clé USB et ne conservent rien au redémarrage par conception — toute donnée à garder doit être copiée sur un support externe avant d'éteindre."},
      {q:"Un contrôleur RAID/NVMe exotique n'est pas reconnu",a:"Le noyau embarqué sur ces outils est parfois plus ancien que celui du système d'origine et peut manquer un pilote récent. Une version plus à jour de l'outil règle souvent le problème."}
    ],
    faq:[
      {q:"L'outil modifie-t-il le disque automatiquement ?", a:"Non, il s'utilise en mode Live et ne touche au disque que sur action explicite (formatage, restauration, écriture d'image)."},
      {q:"Peut-on l'utiliser sur n'importe quel PC en panne ?", a:"Dans la majorité des cas oui, tant que le PC peut démarrer sur une clé USB ; en cas de panne matérielle plus grave, un diagnostic matériel reste nécessaire."},
      {q:"Peut-on installer Finnix durablement sur un disque ?", a:"Ce n'est pas l'usage prévu : Finnix est une distribution live conçue pour la maintenance et le dépannage ponctuel, pas pour une installation permanente en tant que système principal."}
    ]
  },
  /* ===================== MOBILE (extension) ===================== */
  {
    id:"lineageos", name:"LineageOS", version:"23.2", cat:"mobile", color:"#167C80", icon:"lineageos",
    tag:"Le grand classique des ROM Android alternatives. Continue de faire vivre les smartphones abandonnés par leur marque.",
    site:"lineageos.org", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~40 min", diff:"Avancé", base:"Android (AOSP)",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"8 Go de stockage libre", cpu:"Smartphone compatible (voir wiki officiel)"},
    steps:[
      {t:"Vérifier la compatibilité", d:"Consulter wiki.lineageos.org et chercher le nom exact du modèle du téléphone."},
      {t:"Débloquer le bootloader", d:"Activer le mode développeur puis le débogage USB, débloquer via fastboot.", code:"fastboot flashing unlock"},
      {t:"Installer un recovery personnalisé", d:"Flasher TWRP ou le recovery LineageOS via fastboot."},
      {t:"Télécharger l'image", d:"Récupérer le zip LineageOS correspondant exactement au modèle sur le site officiel."},
      {t:"Flasher et effacer", d:"Depuis le recovery, effacer /system, /data, /cache puis installer le zip LineageOS."},
      {t:"Ajouter les Google Apps (optionnel)", d:"Installer un pack GApps ou microG si les services Google sont nécessaires."}
    ],
    alt:["grapheneos","eos","calyxos","androidx86"],
    errors:[
      {q:"Le déverrouillage du bootloader efface toutes les données",a:"C'est systématique et volontaire (mesure anti-vol) : sauvegarde impérativement tes données avant de lancer le déverrouillage, il n'existe aucun moyen de l'éviter."},
      {q:"Mauvaise image flashée pour l'appareil",a:"Chaque modèle a son propre nom de code et sa propre image. Flasher l'image d'un autre appareil, même très proche, peut rendre le téléphone temporairement inutilisable — vérifie trois fois le nom de code exact avant de flasher."},
      {q:"Les paiements sans contact / apps bancaires refusent de fonctionner",a:"Beaucoup d'apps bancaires exigent une attestation d'intégrité que ces systèmes ne passent pas nativement. C'est une limitation connue de l'écosystème, pas un bug d'installation."}
    ],
    faq:[
      {q:"Est-ce que ça efface toutes mes données ?", a:"Oui, l'installation efface complètement le téléphone. Toujours sauvegarder photos, contacts et fichiers avant de commencer."},
      {q:"Le déblocage du bootloader annule-t-il la garantie ?", a:"Sur la plupart des marques, oui. Vérifier les conditions du fabricant avant de se lancer."},
      {q:"Pourquoi mon téléphone perd-il toutes ses données lors de l'installation ?", a:"Déverrouiller le bootloader (étape obligatoire) efface automatiquement toutes les données du téléphone : il faut impérativement sauvegarder au préalable, et télécharger l'image correspondant exactement au modèle précis de l'appareil."}
    ]
  },
  {
    id:"grapheneos", name:"GrapheneOS", version:"2024", cat:"mobile", color:"#0F5132", icon:null,
    tag:"ROM Android durcie, focalisée vie privée et sécurité. Compatible uniquement avec les Google Pixel.",
    site:"grapheneos.org", license:"Libre / Open-source", popular:false, isNew:true,
    time:"~25 min", diff:"Intermédiaire", base:"Android (AOSP)",
    req:{ram:"4 Go min.", disk:"128 Go conseillés", cpu:"Google Pixel (série 4a et plus récente)"},
    steps:[
      {t:"Vérifier le modèle", d:"GrapheneOS ne fonctionne que sur les smartphones Google Pixel pris en charge."},
      {t:"Utiliser l'installeur web", d:"Ouvrir grapheneos.org/install sous Chrome ou Chromium, brancher le téléphone en USB."},
      {t:"Débloquer le bootloader", d:"Suivre l'assistant qui active le mode OEM unlock et débloque via WebUSB."},
      {t:"Flasher automatiquement", d:"L'installeur web télécharge et flashe l'image officielle sans ligne de commande manuelle."},
      {t:"Reverrouiller le bootloader", d:"Étape recommandée après installation pour restaurer la chaîne de vérification du démarrage."}
    ],
    alt:["lineageos","eos","calyxos","androidx86"],
    errors:[
      {q:"Le déverrouillage du bootloader efface toutes les données",a:"C'est systématique et volontaire (mesure anti-vol) : sauvegarde impérativement tes données avant de lancer le déverrouillage, il n'existe aucun moyen de l'éviter."},
      {q:"Mauvaise image flashée pour l'appareil",a:"Chaque modèle a son propre nom de code et sa propre image. Flasher l'image d'un autre appareil, même très proche, peut rendre le téléphone temporairement inutilisable — vérifie trois fois le nom de code exact avant de flasher."},
      {q:"Les paiements sans contact / apps bancaires refusent de fonctionner",a:"Beaucoup d'apps bancaires exigent une attestation d'intégrité que ces systèmes ne passent pas nativement. C'est une limitation connue de l'écosystème, pas un bug d'installation."}
    ],
    faq:[
      {q:"Pourquoi seulement les Pixel ?", a:"GrapheneOS s'appuie sur le firmware sécurisé et le support de démarrage vérifié propres aux Pixel, absents des autres marques."},
      {q:"Peut-on quand même installer des apps Android classiques ?", a:"Oui, via un espace utilisateur dédié au Play Store en mode sandboxé, sans services Google privilégiés."}
    ]
  },
  {
    id:"ubuntutouch", name:"Ubuntu Touch", version:"24.04-1.3", cat:"mobile", color:"#772953", icon:"ubuntu",
    tag:"Portage mobile d'Ubuntu par la communauté UBports. Une alternative complète à Android/iOS, convergente avec le bureau.",
    site:"ubuntu-touch.io", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~30 min", diff:"Avancé", base:"Ubuntu / Halium",
    req:{ram:"2 Go min.", disk:"16 Go de stockage", cpu:"Smartphone de la liste officielle des appareils pris en charge"},
    steps:[
      {t:"Vérifier la liste des appareils", d:"ubuntu-touch.io/get-ubuntu-touch → liste des modèles officiellement portés."},
      {t:"Installer l'UBports Installer", d:"Télécharger l'outil desktop (Windows/macOS/Linux) qui automatise tout le processus."},
      {t:"Débloquer le bootloader", d:"Suivre les instructions spécifiques au modèle affichées dans l'outil."},
      {t:"Lancer l'installation", d:"Brancher le téléphone, laisser l'UBports Installer flasher l'image complète automatiquement."},
      {t:"Premier démarrage", d:"Configurer la langue, le Wi-Fi et le compte Ubuntu One (optionnel)."}
    ],
    alt:["grapheneos","lineageos","androidx86"],
    errors:[
      {q:"Le déverrouillage du bootloader efface toutes les données",a:"C'est systématique et volontaire (mesure anti-vol) : sauvegarde impérativement tes données avant de lancer le déverrouillage, il n'existe aucun moyen de l'éviter."},
      {q:"Mauvaise image flashée pour l'appareil",a:"Chaque modèle a son propre nom de code et sa propre image. Flasher l'image d'un autre appareil, même très proche, peut rendre le téléphone temporairement inutilisable — vérifie trois fois le nom de code exact avant de flasher."},
      {q:"Les paiements sans contact / apps bancaires refusent de fonctionner",a:"Beaucoup d'apps bancaires exigent une attestation d'intégrité que ces systèmes ne passent pas nativement. C'est une limitation connue de l'écosystème, pas un bug d'installation."}
    ],
    faq:[
      {q:"Peut-on utiliser les applications Android dessus ?", a:"Un environnement de compatibilité limité existe, mais l'écosystème d'apps reste bien plus restreint qu'Android."},
      {q:"Les applications Android fonctionnent-elles nativement sur Ubuntu Touch ?", a:"Pas nativement : une couche de compatibilité (comme Waydroid) permet d'exécuter certaines applications Android, mais la compatibilité reste partielle, pas universelle."}
    ]
  },
  /* ===================== MÉDIA (extension) ===================== */
  {
    id:"coreelec", name:"CoreELEC", version:"21 Kodi", cat:"media", color:"#5AC8FA", icon:null,
    tag:"Fork de LibreELEC optimisé pour les mini-PC ARM (Amlogic, Rockchip). Centre multimédia Kodi ultra-léger.",
    site:"coreelec.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Linux embarqué",
    req:{ram:"1 Go suffisant", disk:"carte micro-SD 8 Go min.", cpu:"Boîtier TV ARM (Amlogic S905/S922 etc.)"},
    steps:[
      {t:"Identifier le SoC du boîtier", d:"CoreELEC cible des puces ARM précises (S905X, S922X…) — vérifier le modèle exact."},
      {t:"Télécharger l'image", d:"coreelec.org/#downloads → choisir la version correspondant au SoC."},
      {t:"Graver sur carte SD/USB", d:"balenaEtcher, image brute à écrire directement."},
      {t:"Premier démarrage", d:"Insérer la carte, démarrer le boîtier, suivre l'assistant de configuration Kodi."}
    ],
    alt:["osmc","libreelec","recalbox"],
    errors:[
      {q:"Mauvaise image pour le boîtier/SoC",a:"Chaque famille de boîtier (Amlogic, Raspberry Pi, Intel NUC…) a sa propre image. Vérifie précisément le modèle avant de flasher — c'est la cause n°1 d'échec de boot sur ce type de système."},
      {q:"La télécommande / HDMI-CEC ne fonctionne pas",a:"Le support CEC dépend du récepteur/TV et doit parfois être activé manuellement dans les paramètres système après la première installation — ce n'est pas toujours automatique selon le matériel."},
      {q:"Un addon ne s'installe pas",a:"Les dépôts tiers changent souvent d'adresse ou ferment. Vérifie que le dépôt source de l'addon est toujours en ligne avant de suspecter un problème d'installation du système lui-même."}
    ],
    faq:[
      {q:"Différence avec LibreELEC ?", a:"CoreELEC se concentre sur le matériel Amlogic/ARM des boîtiers TV bas coût, avec un support matériel plus poussé que LibreELEC sur ces puces."}
    ]
  },
  /* ===================== NOUVEAUX SYSTÈMES (2026-07-25) ===================== */
  {
    id:"win10", name:"Windows 10", version:"22H2", cat:"desktop", color:"#0078D6", icon:null,
    svg:"<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"#0078D6\"><path d=\"M2.5 2.5h8.5v8.5H2.5zM13 2.5h8.5v8.5H13zM2.5 13h8.5v8.5H2.5zM13 13h8.5v8.5H13z\"/></svg>",
    tag:"Le prédécesseur de Windows 11. Fin de support standard en octobre 2025, mais prolongeable via le programme ESU jusqu'en octobre 2027.",
    site:"microsoft.com", license:"Propriétaire", popular:false, isNew:true,
    time:"~15 min", diff:"Facile", base:"Windows NT",
    req:{ram:"2 Go min. (64 bits, officiel) ; 4 Go+ conseillés en pratique", disk:"32 Go min. (exigence officielle Microsoft récente)", cpu:"64 bits, 1 GHz, 1 cœur min."},
    steps:[
      {t:"Télécharger l'ISO officiel", d:"Depuis microsoft.com/software-download/windows10, section « Télécharger l'image disque (ISO) ». Le site peut proposer l'outil de création de support à la place d'un lien direct selon le navigateur détecté."},
      {t:"Créer la clé bootable", d:"Ouvrir Rufus, sélectionner l'ISO et la clé USB. GPT/UEFI pour un PC récent, MBR/Legacy si le PC est plus ancien (BIOS non-UEFI).", code:"Rufus → GPT ou MBR selon le PC cible"},
      {t:"Démarrer sur la clé", d:"Redémarrer, ouvrir le menu de boot (F12 / F8 / Échap selon la carte mère) et choisir la clé USB."},
      {t:"Installer", d:"Suivre l'assistant : langue, partition, compte local ou Microsoft. Contrairement à Windows 11, aucune vérification TPM 2.0/Secure Boot n'est exigée."},
      {t:"Envisager le programme ESU", d:"Windows 10 a atteint sa fin de support standard en octobre 2025. Le programme ESU (gratuit via compte Microsoft ou payant) prolonge les correctifs de sécurité jusqu'en octobre 2027."}
    ],
    alt:["win11","ubuntu","mxlinux"],
    errors:[
      {q:"Le programme d'installation signale un manque d'espace disque",a:"Vérifie que le disque cible a au moins 32 Go libres ; sur un PC ancien avec un petit SSD/disque, c'est la cause la plus fréquente de blocage en cours d'installation."},
      {q:"L'activation demande une clé de licence introuvable",a:"L'installation peut se terminer sans clé : Windows reste utilisable avec un filigrane et des limitations de personnalisation jusqu'à activation ultérieure."},
      {q:"Windows Update n'affiche plus de mises à jour de sécurité",a:"Sans inscription au programme ESU, les mises à jour de sécurité se sont arrêtées en octobre 2025. Vérifie l'inscription ESU dans Windows Update si le PC doit rester en ligne."}
    ],
    faq:[
      {q:"Windows 10 est-il encore sûr à utiliser en 2026 ?", a:"Le support standard s'est arrêté en octobre 2025. Le programme ESU (gratuit via compte Microsoft ou payant) prolonge les correctifs de sécurité critiques jusqu'en octobre 2027 ; au-delà, mieux vaut migrer vers Windows 11 ou un Linux léger."},
      {q:"Mon PC ne supporte pas Windows 11, pourquoi installer Windows 10 alors ?", a:"Pour profiter d'un support de sécurité prolongé (ESU) le temps de préparer une migration, ou pour continuer d'utiliser un PC ancien sans les exigences matérielles (TPM 2.0, Secure Boot) de Windows 11."}
    ]
  },
  {
    id:"unraid", name:"Unraid", version:"7.3.2", cat:"server", color:"#F15A24", icon:null,
    tag:"OS de stockage et virtualisation pour serveur maison : RAID flexible par parité, Docker et VM intégrés, démarre depuis une simple clé USB.",
    site:"unraid.net", license:"Propriétaire", popular:false, isNew:true,
    time:"~20 min", diff:"Intermédiaire", base:"Slackware",
    req:{ram:"2 Go min. (4-8 Go conseillés selon les apps Docker/VM)", disk:"Clé USB dédiée 4-32 Go (GUID unique) comme média de démarrage permanent, + disques de stockage séparés", cpu:"64 bits (x86_64), 1 GHz+"},
    steps:[
      {t:"Préparer une clé USB dédiée", d:"Contrairement aux autres OS de cette liste, la clé USB n'est pas qu'un support d'installation : c'est le média de démarrage permanent d'Unraid. Prévoir une clé de qualité, 4 à 32 Go, rien que pour ça."},
      {t:"Écrire Unraid avec l'outil officiel", d:"Le « USB Creator » officiel (Windows/macOS) écrit directement l'image sur la clé et configure son démarrage — plus simple qu'un graveur ISO classique.", code:"Unraid USB Creator → sélectionner la clé → Write"},
      {t:"Démarrer le serveur sur la clé", d:"Brancher la clé sur la machine cible, démarrer dessus via le menu de boot. Unraid se charge entièrement en RAM à chaque démarrage."},
      {t:"Configurer via l'interface web", d:"Une fois démarré, l'interface d'administration est accessible depuis un navigateur sur le réseau local (ex. http://tower.local) pour créer le tableau de stockage et attribuer une licence."}
    ],
    alt:["truenas","proxmox","openmediavault"],
    errors:[
      {q:"Le serveur ne démarre plus après un souci avec la clé USB",a:"Unraid tourne entièrement en RAM après le boot, mais dépend de la clé au démarrage : une clé USB de mauvaise qualité ou mal insérée est la cause la plus fréquente de plantage au boot. La remplacer par une clé de marque reconnue résout la majorité des cas."},
      {q:"Le tableau de stockage refuse de démarrer (« array won't start »)",a:"Vérifie qu'un disque de parité au moins aussi grand que le plus gros disque de données est assigné, et que tous les disques sont bien détectés dans l'onglet Main avant de cliquer sur Start."},
      {q:"La licence n'est plus reconnue après un changement de clé USB",a:"La licence Unraid est liée au GUID unique de la clé USB : en changer nécessite une procédure de transfert de licence depuis le compte Unraid, pas une simple réinstallation."}
    ],
    faq:[
      {q:"Pourquoi la clé USB reste branchée en permanence, ce n'est pas juste pour l'installation ?", a:"C'est une particularité d'Unraid : le système démarre et tourne depuis la RAM, mais la clé USB reste le support d'identité et de licence de l'installation. La retirer empêche le serveur de redémarrer normalement."},
      {q:"Faut-il payer pour utiliser Unraid ?", a:"Un essai gratuit de 30 jours donne accès à toutes les fonctionnalités sans limite de disques. Au-delà, une licence payante (Starter, Unleashed ou Lifetime selon le nombre de disques) est nécessaire."}
    ]
  },
  {
    id:"eos", name:"/e/OS", version:"4.1.1", cat:"mobile", color:"#0B7261", icon:null,
    tag:"ROM Android « dégooglisée » : vie privée par défaut, micro-G en remplacement des services Google, sans sacrifier la compatibilité applicative.",
    site:"e.foundation", license:"Libre / Open-source", popular:false, isNew:true,
    time:"~35 min", diff:"Avancé", base:"LineageOS",
    req:{ram:"3 Go min. (selon l'appareil)", disk:"16 Go de stockage libre min.", cpu:"Smartphone compatible parmi les 200+ appareils supportés (voir doc.e.foundation)"},
    steps:[
      {t:"Vérifier la compatibilité de l'appareil", d:"Consulter le sélecteur d'appareils officiel (doc.e.foundation/devices) : le bootloader doit pouvoir être déverrouillé."},
      {t:"Sauvegarder puis déverrouiller le bootloader", d:"Le déverrouillage efface toutes les données de l'appareil. Procédure spécifique à chaque marque, via les options développeur puis fastboot."},
      {t:"Flasher via l'installeur web ou la méthode CLI", d:"Les appareils récents disposent d'un installeur web (Chrome, WebUSB) ; plus de 200 autres appareils s'installent via le script d'installation en ligne de commande.", code:"Installeur web : install.e.foundation (Chrome/Chromium requis)"},
      {t:"Premier démarrage et micro-G", d:"Au premier lancement, activer les services micro-G (remplacement libre des Google Play Services) si besoin de compatibilité applicative étendue."}
    ],
    alt:["lineageos","grapheneos","calyxos"],
    errors:[
      {q:"L'installeur web ne détecte pas le téléphone",a:"L'installeur web nécessite WebUSB : utiliser Chrome ou un navigateur basé Chromium à jour, activer le débogage USB dans les options développeur, et essayer un autre câble/port USB."},
      {q:"Les applications bancaires ou de paiement refusent de fonctionner",a:"Certaines apps détectent le bootloader déverrouillé ou l'absence des services Google natifs (Play Integrity) et refusent de se lancer ; c'est une limitation connue de la plupart des ROM dégooglisées, pas un bug d'installation."},
      {q:"Aucune notification ne remonte pour certaines apps",a:"Sans les Google Play Services, le push notifications dépend de micro-G : vérifie qu'il est bien activé et que l'app est autorisée à tourner en arrière-plan dans les réglages batterie."}
    ],
    faq:[
      {q:"Quelle différence avec LineageOS pur ?", a:"/e/OS est un fork de LineageOS : mêmes bases techniques, mais avec micro-G préinstallé, un WebView basé sur un fork de Chromium nettoyé des connexions Google, et une boutique d'applications (App Lounge) sans compte Google requis."},
      {q:"Faut-il un compte /e/ pour utiliser le téléphone ?", a:"Non, un compte /e/ (optionnel, gratuit) n'est nécessaire que pour la synchronisation cloud (contacts, mails, photos) ; le téléphone fonctionne pleinement sans."}
    ]
  },
  {
    id:"sailfishos", name:"Sailfish OS", version:"5.0 Tampella", cat:"mobile", color:"#1B4F72", icon:null,
    tag:"OS mobile indépendant, non basé sur Android — interface gestuelle unique, développé par Jolla (Finlande). Compatibilité apps Android via une couche optionnelle.",
    site:"sailfishos.org", license:"Libre / Open-source", popular:false, isNew:true,
    time:"~45 min", diff:"Avancé", base:"—",
    req:{ram:"2 Go min. (selon l'appareil)", disk:"16 Go de stockage libre min.", cpu:"Appareil Sony Xperia officiellement supporté, ou port communautaire non officiel sur d'autres appareils"},
    steps:[
      {t:"Choisir la voie officielle ou communautaire", d:"Voie officielle : licence Sailfish X (payante) sur Sony Xperia récent via la boutique Jolla. Voie communautaire : ports non officiels et gratuits sur d'autres appareils, sans support Jolla."},
      {t:"Déverrouiller le bootloader de l'appareil", d:"Procédure fastboot spécifique au modèle, efface toutes les données existantes."},
      {t:"Flasher l'image Sailfish", d:"Télécharger l'image achetée (ou le port communautaire), la flasher via fastboot en suivant le guide correspondant à l'appareil exact."},
      {t:"Premier démarrage et activation", d:"Sur la voie officielle, entrer la licence Sailfish X liée au compte Jolla pour débloquer les fonctionnalités complètes (prédiction de texte, synchronisation Exchange, support des apps Android)."}
    ],
    alt:["postmarketos","lineageos","grapheneos"],
    errors:[
      {q:"Le flash échoue avec une erreur de partition",a:"Vérifie que l'image téléchargée correspond exactement au modèle ET à la région de l'appareil (les Xperia ont plusieurs variantes) ; une image pour le mauvais modèle échoue systématiquement au flash."},
      {q:"Le support des applications Android ne fonctionne pas",a:"La couche de compatibilité Android est un composant propriétaire réservé à la licence Sailfish X officielle sur appareil supporté ; elle est absente des ports communautaires par défaut."},
      {q:"Plus aucune mise à jour ne semble disponible",a:"Les ports communautaires n'ont pas toujours de suivi des dernières versions ; vérifie le statut de maintenance du port utilisé sur le forum Sailfish OS avant de s'inquiéter d'un problème d'installation."}
    ],
    faq:[
      {q:"Faut-il payer pour utiliser Sailfish OS ?", a:"Le cœur du système (Mer/Sailfish) est open-source et gratuit sur les ports communautaires. La version officielle Jolla sur Xperia supporté (Sailfish X) est payante et ajoute des composants propriétaires (clavier prédictif, Exchange, support Android)."},
      {q:"Peut-on installer des applications Android dessus ?", a:"Oui, via une couche de compatibilité optionnelle — mais réservée aux appareils sous licence Sailfish X officielle, pas aux ports communautaires gratuits."}
    ]
  },
  {
    id:"calyxos", name:"CalyxOS", version:"7.2.2.0", cat:"mobile", color:"#5B3A9E", icon:null,
    tag:"ROM Android axée vie privée, développée par l'association à but non lucratif Calyx Institute. Micro-G optionnel, VPN Tor intégré (Orbot).",
    site:"calyxos.org", license:"Libre / Open-source", popular:false, isNew:true,
    time:"~30 min", diff:"Avancé", base:"Android (AOSP)",
    req:{ram:"4 Go min. (selon l'appareil)", disk:"16 Go de stockage libre min.", cpu:"Google Pixel, Fairphone ou modèles Motorola/SHIFTphone supportés"},
    steps:[
      {t:"Vérifier la compatibilité de l'appareil", d:"CalyxOS supporte une liste restreinte mais activement maintenue : Pixel, Fairphone, certains Motorola et SHIFTphone — consulter calyxos.org avant de commencer."},
      {t:"Sauvegarder puis déverrouiller le bootloader", d:"Efface toutes les données. Procédure via les options développeur puis fastboot, spécifique au modèle."},
      {t:"Installer via le script d'installation web", d:"CalyxOS fournit un installateur assisté par navigateur (WebUSB) qui flashe automatiquement les bonnes partitions pour l'appareil détecté."},
      {t:"Reverrouiller le bootloader", d:"Étape recommandée après installation : reverrouiller restaure le Verified Boot et l'intégrité du système, contrairement à beaucoup d'autres ROM qui restent déverrouillées."}
    ],
    alt:["grapheneos","lineageos","eos"],
    errors:[
      {q:"Le bootloader refuse de se reverrouiller après l'installation",a:"Reverrouiller trop tôt (avant la fin complète du premier démarrage et de la configuration) peut bloquer l'appareil ; toujours terminer l'assistant de configuration initial avant de reverrouiller."},
      {q:"Certaines apps Google essentielles (Maps, Wallet) ne s'installent pas",a:"CalyxOS ne fournit pas les services Google par défaut ; micro-G (à activer dans les réglages) restaure une compatibilité partielle, mais certaines apps très dépendantes des services propriétaires Google restent limitées."},
      {q:"L'appareil semble bloqué en boucle de démarrage (bootloop)",a:"Signe fréquent d'un flash incomplet ou d'une image ne correspondant pas exactement au modèle ; reflasher intégralement via l'installateur officiel plutôt que de chercher un correctif partiel."}
    ],
    faq:[
      {q:"Différence principale avec GrapheneOS ?", a:"GrapheneOS ne supporte que les Google Pixel avec un focus sécurité maximal ; CalyxOS supporte plus d'appareils (Fairphone, Motorola, SHIFTphone) et intègre Tor (Orbot) et micro-G plus directement, avec une approche légèrement plus permissive."},
      {q:"Le projet est-il fiable sur la durée ?", a:"CalyxOS est maintenu par l'association à but non lucratif Calyx Institute ; le projet a connu une pause de maintenance courant 2025-2026 avant de reprendre un support complet à l'été 2026 — vérifier le statut des mises à jour avant de s'engager sur un appareil critique."}
    ]
  },
  {
    id:"asahi", name:"Asahi Linux (Fedora Remix)", version:"Fedora Asahi Remix 44", cat:"desktop", color:"#8B5CF6", icon:null,
    tag:"Portage Linux pour Mac Apple Silicon, distribué officiellement comme Fedora Asahi Remix depuis l'adoption du projet par Fedora.",
    site:"asahilinux.org", license:"Libre / Open-source", popular:false, isNew:true,
    time:"~45 min", diff:"Avancé", base:"Fedora",
    req:{ram:"8 Go min. (16 Go conseillés)", disk:"50 Go d'espace libre min. sur le SSD interne (l'installeur réserve aussi une marge pour macOS)", cpu:"Mac Apple Silicon M1 ou M2 uniquement (M3/M4/M5 pas encore pleinement supportés)"},
    steps:[
      {t:"Vérifier la compatibilité de la puce", d:"Liste à jour sur asahilinux.org : M1/M2 pleinement supportés (MacBook, Mac mini, Mac Studio, iMac, et Mac Pro depuis peu), M3 et plus récents pas encore."},
      {t:"Libérer de l'espace sous macOS", d:"Au moins 50 Go, en purgeant si besoin les snapshots Time Machine locaux qui grignotent l'espace « libre » apparent."},
      {t:"Lancer l'installateur depuis le Terminal macOS", d:"Une seule commande (fournie sur asahilinux.org/install) télécharge et exécute l'installateur, sans clé USB externe."},
      {t:"Choisir la variante (Plasma ou GNOME) et valider le partitionnement", d:"L'installateur redimensionne le volume macOS à chaud et crée un nouveau volume pour Linux, sans supprimer macOS."},
      {t:"Premier démarrage", d:"Maintenir le bouton d'alimentation au démarrage pour choisir entre macOS et Fedora Asahi Remix."}
    ],
    alt:["fedora","fedorakde","arch"],
    errors:[
      {q:"Le redimensionnement du disque échoue pendant l'installation",a:"Causé le plus souvent par des snapshots APFS locaux (Time Machine) ou une mise à jour macOS en attente ; purger les snapshots et terminer les mises à jour macOS en attente avant de relancer."},
      {q:"Wi-Fi ou Bluetooth absents après l'installation",a:"Ces pilotes dépendent d'un firmware propriétaire Apple extrait automatiquement depuis macOS pendant l'installation ; un volume macOS déjà supprimé ou trop ancien empêche cette extraction."},
      {q:"Écran figé ou glitchs graphiques après une mise à jour système",a:"Le pilote graphique est développé spécifiquement par le projet Asahi (rétro-ingénierie du GPU Apple) et évolue vite ; toujours mettre à jour via les dépôts officiels `asahi`, jamais en mélangeant avec un noyau Fedora généraliste."}
    ],
    faq:[
      {q:"macOS est-il supprimé ?", a:"Non par défaut : l'installation redimensionne macOS mais le conserve, avec un sélecteur au démarrage entre les deux systèmes."},
      {q:"Tous les Mac Apple Silicon sont-ils supportés ?", a:"Non, seulement M1 et M2 sont pleinement pris en charge à ce jour ; le support M3/M4/M5 progresse mais reste partiel, à vérifier avant d'investir du temps sur un Mac récent."}
    ]
  },
  {
    id:"mobian", name:"Mobian", version:"13 « Trixie » (stable)", cat:"mobile", color:"#2CA58D", icon:null,
    tag:"Debian porté sur smartphones et tablettes (PinePhone, Librem 5), avec l'interface tactile Phosh (GNOME) ou Plasma Mobile.",
    site:"mobian.org", license:"Libre / Open-source", popular:false, isNew:true,
    time:"~20 min", diff:"Avancé", base:"Debian",
    req:{ram:"2 Go min. (selon l'appareil)", disk:"16 Go de stockage/microSD min.", cpu:"PinePhone / PinePhone Pro / PineTab / PineTab 2, Librem 5, ou portages communautaires (OnePlus 6/6T...)"},
    steps:[
      {t:"Choisir l'image adaptée à l'appareil", d:"images.mobian.org propose une image par modèle précis, avec le choix Phosh (par défaut) ou Plasma Mobile."},
      {t:"Installer Tow-Boot au préalable (PinePhone/PineTab)", d:"Bootloader de remplacement à flasher une seule fois avant tout système Linux mobile alternatif."},
      {t:"Flasher la carte microSD ou la mémoire interne", d:"balenaEtcher (ou dd) pour la microSD ; JumpDrive permet ensuite de flasher directement la mémoire eMMC interne depuis cette carte."},
      {t:"Premier démarrage et configuration", d:"Assistant Phosh, connexion Wi-Fi, création du code de verrouillage."}
    ],
    alt:["postmarketos","debian","ubuntutouch"],
    errors:[
      {q:"L'appareil ne démarre sur aucun système Linux après le flash",a:"Sur PinePhone/PineTab, Tow-Boot doit être installé une seule fois avant tout OS Linux mobile ; sans lui, la carte microSD ou l'eMMC n'est simplement pas détectée au démarrage."},
      {q:"L'autonomie de la batterie est très faible comparée à l'OS d'origine",a:"Limitation connue du matériel Linux mobile communautaire actuel (gestion de la mise en veille profonde encore imparfaite) ; désactiver modem/GPS quand inutilisés améliore nettement l'autonomie en attendant."},
      {q:"Les appels ou la donnée mobile ne fonctionnent pas",a:"Le modem cellulaire (souvent un Quectel EG25-G) tourne sur un firmware séparé piloté par ModemManager ; un service modem non démarré ou un firmware non à jour est la cause la plus fréquente."}
    ],
    faq:[
      {q:"Quelle différence avec postmarketOS ?", a:"Mobian est basé sur Debian (paquets .deb, dépôts Debian classiques) alors que postmarketOS est basé sur Alpine (musl, apk) ; Mobian vise avant tout la continuité avec l'écosystème Debian existant."},
      {q:"Peut-on l'utiliser comme téléphone principal au quotidien ?", a:"Possible mais avec des compromis assumés par le projet (autonomie, appareil photo, modem) ; c'est avant tout un projet pour utilisateurs libristes et bidouilleurs, pas un remplacement direct grand public."}
    ]
  },
  {
    id:"kolibrios", name:"KolibriOS", version:"0.7.7.0+ (nightly)", cat:"retro", color:"#2E86C1", icon:null,
    tag:"Système d'exploitation graphique complet écrit intégralement en assembleur FASM, tient sur quelques Mo et démarre en quelques secondes.",
    site:"kolibrios.org", license:"Libre / Open-source (GPLv2)", popular:false, isNew:true,
    time:"~5 min", diff:"Facile", base:"—",
    req:{ram:"8 Mo min. (12 Mo conseillés)", disk:"quelques Mo seulement (tient sur une disquette 1,44 Mo dans sa version minimale)", cpu:"x86 32 bits, y compris un i586 très ancien"},
    steps:[
      {t:"Télécharger l'image", d:"kolibrios.org/en/download, version stable 0.7.7 ou une build nightly plus récente."},
      {t:"Graver sur clé USB ou disquette", d:"Rufus (mode DD) ou balenaEtcher ; l'image tient aussi sur une disquette 3,5\" pour un usage rétro complet."},
      {t:"Démarrer directement, sans installation", d:"KolibriOS peut s'utiliser en live entièrement en RAM, aucune installation sur disque n'est nécessaire pour l'essayer."},
      {t:"Installer sur disque (optionnel)", d:"Un outil dédié dans le menu permet de copier le système sur une partition FAT32 pour un démarrage permanent."}
    ],
    alt:["freedos","reactos","aros"],
    errors:[
      {q:"Aucun réseau ou Wi-Fi détecté",a:"Le support matériel est volontairement restreint à une liste de puces reconnues (cartes réseau filaires anciennes surtout) ; le Wi-Fi moderne et la majorité du matériel récent ne sont pas pris en charge par design."},
      {q:"L'écran reste en résolution très basse ou noir",a:"Le pilote graphique VESA générique est utilisé par défaut ; sur du matériel très récent ou une VM mal configurée, forcer un mode VESA standard (800x600 ou 1024x768) au démarrage résout la plupart des cas."},
      {q:"Un programme téléchargé sur le forum ne se lance pas",a:"KolibriOS a son propre format d'exécutable et ses propres bibliothèques (aucune compatibilité Windows/Linux native) ; vérifier que le programme cible bien KolibriOS et pas un simple exécutable DOS/Windows."}
    ],
    faq:[
      {q:"C'est un dérivé de MenuetOS ?", a:"Oui à l'origine : KolibriOS est un fork de MenuetOS (2004) qui a ensuite pris une direction indépendante, avec sa propre communauté et son propre code."},
      {q:"À quoi ça sert concrètement aujourd'hui ?", a:"Démonstration de programmation bas niveau, curiosité technique (un OS graphique complet tenant sur quelques Mo), ou utilisation sur du matériel x86 très ancien/limité."}
    ]
  },
  {
    id:"zentyal", name:"Zentyal Server", version:"8.1 (Ubuntu 24.04 LTS)", cat:"server", color:"#1F6FB2", icon:null,
    tag:"Serveur Linux tout-en-un pensé comme remplaçant direct d'un contrôleur de domaine Active Directory, basé sur Ubuntu Server.",
    site:"zentyal.com", license:"Libre / Open-source (édition Development gratuite, édition Commercial payante avec support)", popular:false, isNew:true,
    time:"~30 min", diff:"Avancé", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go+ conseillés en production)", disk:"20 Go min. selon les services activés", cpu:"x86_64, Intel Core i5 ou équivalent recommandé en production"},
    steps:[
      {t:"Télécharger l'ISO", d:"zentyal.com/community (édition Development, gratuite) — l'installateur est un Ubuntu Server standard."},
      {t:"Installer comme un Ubuntu Server classique", d:"Partitionnement, réseau et compte admin se configurent exactement comme sur une installation Ubuntu Server."},
      {t:"Premier lancement de l'assistant Zentyal", d:"Au premier démarrage, un assistant web guide le choix des rôles à activer (Contrôleur de domaine, Passerelle, Messagerie...)."},
      {t:"Rejoindre le domaine depuis les postes Windows", d:"Une fois le rôle Active Directory activé, les postes Windows rejoignent le domaine comme avec un vrai contrôleur Microsoft."}
    ],
    alt:["ucs","openmediavault","clearos"],
    errors:[
      {q:"Le service Samba/Active Directory refuse de démarrer après une mise à jour",a:"Vérifier que l'horloge système (NTP) est synchronisée : Kerberos, au cœur de l'authentification AD, rejette les requêtes en cas de décalage horaire important entre serveur et clients."},
      {q:"Un poste Windows ne parvient pas à rejoindre le domaine",a:"Vérifier que ce poste utilise bien le serveur Zentyal comme DNS primaire (pas seulement comme passerelle) ; l'intégration AD dépend entièrement de la résolution DNS interne."},
      {q:"L'interface web de Zentyal ne répond plus après l'ajout d'un module",a:"L'ajout d'un module lourd (mail, proxy) peut saturer la RAM sur une petite VM ; vérifier la consommation mémoire avant d'activer plusieurs services sur une machine sous-dimensionnée."}
    ],
    faq:[
      {q:"Zentyal remplace-t-il vraiment un Windows Server AD ?", a:"Oui pour l'essentiel (annuaire, GPO de base, partage de fichiers, DNS) grâce à Samba 4 ; certaines fonctionnalités très spécifiques à l'écosystème Microsoft (Exchange natif...) restent hors périmètre."},
      {q:"Faut-il payer pour l'utiliser en production ?", a:"Non, l'édition Development gratuite est fonctionnelle en production, mais sans mises à jour automatiques ni support ; l'édition Commercial ajoute support, sauvegarde/restauration et mises à jour continues."}
    ]
  },
  {
    id:"openmandriva", name:"OpenMandriva Lx", version:"6.0 (Rock stable / ROME rolling)", cat:"desktop", color:"#3DA5D9", icon:null,
    tag:"Distribution RPM indépendante héritière de Mandriva, l'une des rares à compiler l'essentiel du système avec Clang/LLVM plutôt que GCC.",
    site:"openmandriva.org", license:"Libre / Open-source", popular:false, isNew:true,
    time:"~20 min", diff:"Intermédiaire", base:"—",
    req:{ram:"2 Go min. (4 Go+ conseillés pour Plasma)", disk:"10 Go min.", cpu:"x86_64 uniquement (32 bits non supporté), carte graphique compatible OpenGL 2.0+"},
    steps:[
      {t:"Télécharger l'ISO", d:"openmandriva.org/downloads, choisir Rock (stable, releases fixes) ou ROME (rolling, paquets récents en continu)."},
      {t:"Graver la clé USB", d:"Rufus, balenaEtcher ou dd."},
      {t:"Tester en live puis lancer l'installation", d:"Le bureau Plasma tourne directement depuis la clé ; l'installateur graphique Calamares se lance depuis le bureau live."},
      {t:"Partitionnement et compte utilisateur", d:"Assistant Calamares classique, avec chiffrement de disque en option."}
    ],
    alt:["mageia","pclinuxos","fedora"],
    errors:[
      {q:"Le système semble instable après une grosse mise à jour",a:"La branche ROME est une rolling release qui embarque des composants récents (dont la stack Clang/LLVM en évolution active) ; privilégier Rock (stable, à releases fixes) pour un usage quotidien sans surveillance technique."},
      {q:"Une application tierce compilée pour d'autres distributions plante ou ne se lance pas",a:"OpenMandriva compile l'essentiel de son système avec Clang/LLVM au lieu de GCC, ce qui peut exposer des incompatibilités avec des paquets tiers (.rpm non officiels) prévus pour une chaîne de compilation GCC standard."},
      {q:"Aucun paquet équivalent trouvé pour une commande dnf habituelle",a:"Le gestionnaire de paquets est dnf (compatible RPM) mais les noms de paquets suivent la nomenclature propre à OpenMandriva, différente de celle de Fedora ou Mageia malgré la parenté RPM."}
    ],
    faq:[
      {q:"Quel est le lien avec Mandriva/Mageia ?", a:"OpenMandriva est un fork direct de Mandriva (2012, après l'arrêt de l'entreprise), tout comme Mageia ; les deux projets ont ensuite évolué séparément, OpenMandriva misant sur Clang/LLVM et KDE Plasma en priorité."},
      {q:"Rock ou ROME, laquelle choisir ?", a:"Rock pour un usage stable classique avec des mises à jour par version ; ROME pour suivre les paquets les plus récents en continu, au prix d'une stabilité moindre."}
    ]
  },
];

window.OS_CATS = {
  all:{label:"Tous", desc:"L'intégralité du catalogue"},
  desktop:{label:"Bureau", desc:"Usage quotidien, grand public"},
  gaming:{label:"Gaming", desc:"Optimisés pour le jeu"},
  server:{label:"Serveur", desc:"Production & hébergement"},
  security:{label:"Sécurité", desc:"Anonymat & pentest"},
  lightweight:{label:"Léger", desc:"Vieux PC & frugalité"},
  advanced:{label:"Avancé", desc:"Contrôle total, DIY"},
  bsd:{label:"BSD", desc:"Unix hors-Linux"},
  network:{label:"Réseau", desc:"Pare-feu & routeurs"},
  alt:{label:"Alternatif", desc:"Hors des sentiers battus"},
  recovery:{label:"Outils", desc:"Secours, clonage & récupération"},
  container:{label:"Cloud-native", desc:"Conteneurs & Kubernetes"},
  media:{label:"Média", desc:"Home cinéma & centres multimédia"},
  mobile:{label:"Mobile", desc:"Smartphones & tablettes"},
  retro:{label:"Rétro", desc:"Systèmes historiques & réimplémentations"}
};
