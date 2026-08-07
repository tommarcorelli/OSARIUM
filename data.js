/* BOOT//GUIDE — base de données des systèmes (v3).
   Chaque OS : logo de marque (Simple Icons CDN, colorisé) + couleur officielle. */
window.OS_DATA = [
  /* ===================== BUREAU ===================== */
  {
    id:"win11", name:"Windows 11", version:"25H2", cat:"desktop", color:"#2F9BE6", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#2F9BE6"><path d="M2.5 2.5h8.5v8.5H2.5zM13 2.5h8.5v8.5H13zM2.5 13h8.5v8.5H2.5zM13 13h8.5v8.5H13z"/></svg>',
    tag:"Le système grand public de Microsoft, moderne et hardware-exigeant.",
    site:"microsoft.com", dl:"microsoft.com/software-download/windows11", license:"Propriétaire", popular:true, isNew:false,
    time:"~15 min", diff:"Facile", base:"Windows NT",
    req:{ram:"4 Go min. (officiellement ; 8 Go+ conseillés en pratique)", disk:"64 Go min. (exigence officielle Microsoft)", cpu:"64 bits, 1 GHz, 2 cœurs min. + TPM 2.0 et UEFI Secure Boot obligatoires", gpu:{open:"Bon — pilotes AMD/Intel via Windows Update ou le site du fabricant", nvidia:"Bon — pilote GeForce officiel installable via Windows Update ou le site Nvidia"}},
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
    id:"ubuntu", name:"Ubuntu", version:"26.04 LTS Resolute Raccoon", cat:"desktop", color:"#E95420", icon:"ubuntu",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#E95420"><path d="M17.61.455a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zM12.92.8C8.923.777 5.137 2.941 3.148 6.451a4.5 4.5 0 0 1 .26-.007 4.92 4.92 0 0 1 2.585.737A8.316 8.316 0 0 1 12.688 3.6 4.944 4.944 0 0 1 13.723.834 11.008 11.008 0 0 0 12.92.8zm9.226 4.994a4.915 4.915 0 0 1-1.918 2.246 8.36 8.36 0 0 1-.273 8.303 4.89 4.89 0 0 1 1.632 2.54 11.156 11.156 0 0 0 .559-13.089zM3.41 7.932A3.41 3.41 0 0 0 0 11.342a3.41 3.41 0 0 0 3.41 3.409 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zm2.027 7.866a4.908 4.908 0 0 1-2.915.358 11.1 11.1 0 0 0 7.991 6.698 11.234 11.234 0 0 0 2.422.249 4.879 4.879 0 0 1-.999-2.85 8.484 8.484 0 0 1-.836-.136 8.304 8.304 0 0 1-5.663-4.32zm11.405.928a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41z"/></svg>',
    tag:"La distribution Linux la plus populaire. Idéale pour débuter.",
    site:"ubuntu.com", dl:"ubuntu.com/download/desktop", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~12 min", diff:"Facile", base:"Debian",
    req:{ram:"6 Go min. (8 Go+ conseillés)", disk:"25 Go min. (officiel Ubuntu)", cpu:"2 GHz dual-core, 64 bits", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (pilotes libres inclus)", nvidia:"Bon — pilote propriétaire proposé automatiquement via « Pilotes additionnels » dès l'installation"}},
    steps:[
      {t:"Télécharger l'ISO", d:"Sur ubuntu.com/download/desktop, choisir la version Desktop LTS (support 5 ans)."},
      {t:"Vérifier le SHA-256", d:"Comparer l'empreinte avec le fichier SHA256SUMS publié.", code:"sha256sum ubuntu-26.04-desktop-amd64.iso"},
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
      {q:"Quelle est la différence entre la version LTS et les versions intermédiaires ?", a:"La LTS (comme 26.04) est supportée 5 ans et pensée pour la stabilité ; les versions intermédiaires sortent tous les 6 mois avec des logiciels plus récents mais seulement 9 mois de support."},
      {q:"Pourquoi la RAM minimale est-elle passée à 6 Go ?", a:"Canonical a relevé ce seuil avec la 26.04, une première depuis 2019 (le minimum était alors passé de 2 à 4 Go) — le système s'installe toujours avec moins, mais l'expérience se dégrade nettement en dessous. Xubuntu ou Lubuntu restent recommandés sur du matériel plus limité."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"debian", name:"Debian", version:"13 Trixie", cat:"desktop", color:"#D2094A", icon:"debian",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#D2094A"><path d="M13.88 12.685c-.4 0 .08.2.601.28.14-.1.27-.22.39-.33a3.001 3.001 0 01-.99.05m2.14-.53c.23-.33.4-.69.47-1.06-.06.27-.2.5-.33.73-.75.47-.07-.27 0-.56-.8 1.01-.11.6-.14.89m.781-2.05c.05-.721-.14-.501-.2-.221.07.04.13.5.2.22M12.38.31c.2.04.45.07.42.12.23-.05.28-.1-.43-.12m.43.12l-.15.03.14-.01V.43m6.633 9.944c.02.64-.2.95-.38 1.5l-.35.181c-.28.54.03.35-.17.78-.44.39-1.34 1.22-1.62 1.301-.201 0 .14-.25.19-.34-.591.4-.481.6-1.371.85l-.03-.06c-2.221 1.04-5.303-1.02-5.253-3.842-.03.17-.07.13-.12.2a3.551 3.552 0 012.001-3.501 3.361 3.362 0 013.732.48 3.341 3.342 0 00-2.721-1.3c-1.18.01-2.281.76-2.651 1.57-.6.38-.67 1.47-.93 1.661-.361 2.601.66 3.722 2.38 5.042.27.19.08.21.12.35a4.702 4.702 0 01-1.53-1.16c.23.33.47.66.8.91-.55-.18-1.27-1.3-1.48-1.35.93 1.66 3.78 2.921 5.261 2.3a6.203 6.203 0 01-2.33-.28c-.33-.16-.77-.51-.7-.57a5.802 5.803 0 005.902-.84c.44-.35.93-.94 1.07-.95-.2.32.04.16-.12.44.44-.72-.2-.3.46-1.24l.24.33c-.09-.6.74-1.321.66-2.262.19-.3.2.3 0 .97.29-.74.08-.85.15-1.46.08.2.18.42.23.63-.18-.7.2-1.2.28-1.6-.09-.05-.28.3-.32-.53 0-.37.1-.2.14-.28-.08-.05-.26-.32-.38-.861.08-.13.22.33.34.34-.08-.42-.2-.75-.2-1.08-.34-.68-.12.1-.4-.3-.34-1.091.3-.25.34-.74.54.77.84 1.96.981 2.46-.1-.6-.28-1.2-.49-1.76.16.07-.26-1.241.21-.37A7.823 7.824 0 0017.702 1.6c.18.17.42.39.33.42-.75-.45-.62-.48-.73-.67-.61-.25-.65.02-1.06 0C15.082.73 14.862.8 13.8.4l.05.23c-.77-.25-.9.1-1.73 0-.05-.04.27-.14.53-.18-.741.1-.701-.14-1.431.03.17-.13.36-.21.55-.32-.6.04-1.44.35-1.18.07C9.6.68 7.847 1.3 6.867 2.22L6.838 2c-.45.54-1.96 1.611-2.08 2.311l-.131.03c-.23.4-.38.85-.57 1.261-.3.52-.45.2-.4.28-.6 1.22-.9 2.251-1.16 3.102.18.27 0 1.65.07 2.76-.3 5.463 3.84 10.776 8.363 12.006.67.23 1.65.23 2.49.25-.99-.28-1.12-.15-2.08-.49-.7-.32-.85-.7-1.34-1.13l.2.35c-.971-.34-.57-.42-1.361-.67l.21-.27c-.31-.03-.83-.53-.97-.81l-.34.01c-.41-.501-.63-.871-.61-1.161l-.111.2c-.13-.21-1.52-1.901-.8-1.511-.13-.12-.31-.2-.5-.55l.14-.17c-.35-.44-.64-1.02-.62-1.2.2.24.32.3.45.33-.88-2.172-.93-.12-1.601-2.202l.15-.02c-.1-.16-.18-.34-.26-.51l.06-.6c-.63-.74-.18-3.102-.09-4.402.07-.54.53-1.1.88-1.981l-.21-.04c.4-.71 2.341-2.872 3.241-2.761.43-.55-.09 0-.18-.14.96-.991 1.26-.7 1.901-.88.7-.401-.6.16-.27-.151 1.2-.3.85-.7 2.421-.85.16.1-.39.14-.52.26 1-.49 3.151-.37 4.562.27 1.63.77 3.461 3.011 3.531 5.132l.08.02c-.04.85.13 1.821-.17 2.711l.2-.42M9.54 13.236l-.05.28c.26.35.47.73.8 1.01-.24-.47-.42-.66-.75-1.3m.62-.02c-.14-.15-.22-.34-.31-.52.08.32.26.6.43.88l-.12-.36m10.945-2.382l-.07.15c-.1.76-.34 1.511-.69 2.212.4-.73.65-1.541.75-2.362M12.45.12c.27-.1.66-.05.95-.12-.37.03-.74.05-1.1.1l.15.02M3.006 5.142c.07.57-.43.8.11.42.3-.66-.11-.18-.1-.42m-.64 2.661c.12-.39.15-.62.2-.84-.35.44-.17.53-.2.83"/></svg>',
    tag:"La distribution universelle, socle de milliers d'autres. Stable comme un roc.",
    site:"debian.org", dl:"debian.org/distrib", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"—",
    req:{ram:"1 Go min. (2 Go conseillés, 4 Go pour un bureau GNOME/KDE confortable)", disk:"10 Go min. (20-25 Go conseillés avec environnement de bureau)", cpu:"1 GHz, 64 bits (i686 minimum sur les architectures 32 bits)", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (micrologiciels non-free inclus par défaut depuis Debian 12)", nvidia:"Correct — pilote propriétaire disponible mais dépôt non-free à activer manuellement (non inclus par défaut)"}},
    steps:[
      {t:"Télécharger l'ISO", d:"Sur debian.org, prendre l'image netinst (petite) ou l'image DVD complète."},
      {t:"Graver la clé", d:"cp/dd sous Linux, Rufus (mode DD) sous Windows.", code:"sudo dd if=debian-13.iso of=/dev/sdX bs=4M status=progress"},
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
    id:"fedora", name:"Fedora", version:"44 Workstation", cat:"desktop", color:"#51A2DA", icon:"fedora",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#51A2DA"><path d="M12.001 0C5.376 0 .008 5.369.004 11.992H.002v9.287h.002A2.726 2.726 0 0 0 2.73 24h9.275c6.626-.004 11.993-5.372 11.993-11.997C23.998 5.375 18.628 0 12 0zm2.431 4.94c2.015 0 3.917 1.543 3.917 3.671 0 .197.001.395-.03.619a1.002 1.002 0 0 1-1.137.893 1.002 1.002 0 0 1-.842-1.175 2.61 2.61 0 0 0 .013-.337c0-1.207-.987-1.672-1.92-1.672-.934 0-1.775.784-1.777 1.672.016 1.027 0 2.046 0 3.07l1.732-.012c1.352-.028 1.368 2.009.016 1.998l-1.748.013c-.004.826.006.677.002 1.093 0 0 .015 1.01-.016 1.776-.209 2.25-2.124 4.046-4.424 4.046-2.438 0-4.448-1.993-4.448-4.437.073-2.515 2.078-4.492 4.603-4.469l1.409-.01v1.996l-1.409.013h-.007c-1.388.04-2.577.984-2.6 2.47a2.438 2.438 0 0 0 2.452 2.439c1.356 0 2.441-.987 2.441-2.437l-.001-7.557c0-.14.005-.252.02-.407.23-1.848 1.883-3.256 3.754-3.256z"/></svg>',
    tag:"À la pointe de la technologie, sponsorisée par Red Hat. GNOME pur.",
    site:"getfedora.org", dl:"getfedora.org/en/workstation/download", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~12 min", diff:"Facile", base:"—",
    req:{ram:"2 Go min. (4 Go conseillés, 8 Go pour un usage confortable)", disk:"15 Go min. (40 Go conseillés officiellement)", cpu:"2 GHz dual-core (x86_64 ou ARM)", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (pilotes libres inclus)", nvidia:"Correct — pilote propriétaire non fourni par Fedora (politique du projet), à installer via le dépôt tiers RPM Fusion"}},
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
    id:"mint", name:"Linux Mint", version:"22.3 Zena", cat:"desktop", color:"#87CF3E", icon:"linuxmint",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#87CF3E"><path d="M5.438 5.906v8.438c0 2.06 1.69 3.75 3.75 3.75h5.625c2.06 0 3.75-1.69 3.75-3.75V9.656a2.827 2.827 0 0 0-2.813-2.812 2.8 2.8 0 0 0-1.875.737A2.8 2.8 0 0 0 12 6.844a2.827 2.827 0 0 0-2.812 2.812v4.688h1.875V9.656c0-.529.408-.937.937-.937s.938.408.938.937v4.688h1.875V9.656c0-.529.408-.937.937-.937s.938.408.938.937v4.688a1.86 1.86 0 0 1-1.875 1.875H9.188a1.86 1.86 0 0 1-1.875-1.875V5.906ZM12 0C5.384 0 0 5.384 0 12s5.384 12 12 12 12-5.384 12-12S18.616 0 12 0m0 1.875A10.11 10.11 0 0 1 22.125 12 10.11 10.11 0 0 1 12 22.125 10.11 10.11 0 0 1 1.875 12 10.11 10.11 0 0 1 12 1.875"/></svg>',
    tag:"L'alternative Windows la plus douce. Cinnamon, élégant et familier.",
    site:"linuxmint.com", dl:"linuxmint.com/download.php", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"2 Go min. (4 Go conseillés), chiffres confirmés par la FAQ officielle Linux Mint", disk:"20 Go min. (100 Go conseillés officiellement)", cpu:"64 bits (32 bits non supporté depuis Mint 20)", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (pilotes libres inclus)", nvidia:"Bon — le Gestionnaire de pilotes propose le pilote propriétaire dès le premier démarrage"}},
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
    id:"opensuse", name:"openSUSE", version:"Leap 16.0", cat:"desktop", color:"#73BA25", icon:"opensuse",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#73BA25"><path d="M10.724 0a12 12 0 0 0-9.448 4.623c1.464.391 2.5.727 2.81.832.005-.19.037-1.893.037-1.893s.004-.04.025-.06c.026-.026.065-.018.065-.018.385.056 8.602 1.274 12.066 3.292.427.25.638.517.902.786.958.99 2.223 5.108 2.359 5.957.005.033-.036.07-.054.083a5.177 5.177 0 0 1-.313.228c-.82.55-2.708 1.872-5.13 1.656-2.176-.193-5.018-1.44-8.445-3.699.336.79.668 1.58 1 2.371.497.258 5.287 2.7 7.651 2.651 1.904-.04 3.941-.968 4.756-1.458 0 0 .179-.108.257-.048.085.066.061.167.041.27-.05.234-.164.66-.242.863l-.065.165c-.093.25-.183.482-.356.625-.48.436-1.246.784-2.446 1.305-1.855.812-4.865 1.328-7.66 1.31-1.001-.022-1.968-.133-2.817-.232-1.743-.197-3.161-.357-4.026.269A12 12 0 0 0 10.724 24a12 12 0 0 0 12-12 12 12 0 0 0-12-12zM13.4 6.963a3.503 3.503 0 0 0-2.521.942 3.498 3.498 0 0 0-1.114 2.449 3.528 3.528 0 0 0 3.39 3.64 3.48 3.48 0 0 0 2.524-.946 3.504 3.504 0 0 0 1.114-2.446 3.527 3.527 0 0 0-3.393-3.64zm-.03 1.035a2.458 2.458 0 0 1 2.368 2.539 2.43 2.43 0 0 1-.774 1.706 2.456 2.456 0 0 1-1.762.659 2.461 2.461 0 0 1-2.364-2.542c.02-.655.3-1.26.777-1.707a2.419 2.419 0 0 1 1.756-.655zm.402 1.23c-.602 0-1.087.325-1.087.727 0 .4.485.725 1.087.725.6 0 1.088-.326 1.088-.725 0-.402-.487-.726-1.088-.726Z"/></svg>',
    tag:"Robuste et pro. YaST, l'outil de config le plus puissant du monde Linux.",
    site:"opensuse.org", dl:"get.opensuse.org/leap", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"—",
    req:{ram:"1 Go min. (1,5 Go avec dépôts en ligne, 4 Go+ conseillés)", disk:"8 Go min. pour une installation minimale (40 Go si snapshots Btrfs activés)", cpu:"x86-64-v2 obligatoire depuis Leap 16 (CPU 2008+ ; le support 32 bits a été totalement retiré, ce n'était qu'une recommandation auparavant)", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (pilotes libres inclus)", nvidia:"Bon — dépôt communautaire officiel (NVIDIA) facile à ajouter via YaST"}},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#35BF5C"><path d="M2.182 0A2.177 2.177 0 0 0 0 2.182v19.636C0 23.027.973 24 2.182 24h4.363V6.545h8.728V0Zm15.273 0v24h4.363A2.177 2.177 0 0 0 24 21.818V2.182A2.177 2.177 0 0 0 21.818 0ZM8.727 8.727V24h6.546V8.727Z"/></svg>',
    tag:"La puissance d'Arch, sans la douleur de l'installation. Rolling accessible.",
    site:"manjaro.org", dl:"manjaro.org/products/download/x86", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~15 min", diff:"Facile", base:"Arch",
    req:{ram:"1 Go (recommandation officielle du wiki Manjaro — pas de minimum strict publié) ; 4 Go+ conseillés en pratique pour un usage quotidien confortable", disk:"30 Go conseillés (rolling release, les mises à jour s'accumulent)", cpu:"x86_64, 1 GHz dual-core", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (pilotes libres inclus)", nvidia:"Bon — détection et installation assistées via l'outil mhwd (Manjaro Hardware Detection)"}},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#48B9C7"><path d="M12 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 12 12 6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12ZM9.64 2.918c1.091-.026 1.548.229 2.182.635a4.459 4.459 0 0 1 1.902 2.764c.254 1.141.178 2.029-.127 2.664v.05c-.609 1.294-1.622 2.335-3.043 2.842l1.217 3.172c.228.583.432 1.192.254 1.75-.177.558-.989.736-1.572.127-1.116-1.192-4.871-8.702-5.15-9.26-.279-.558-.584-1.016-.584-1.574.026-.837 1.318-1.7 1.953-2.131.634-.431 1.877-1.014 2.968-1.039Zm-.996 2.311c-.789.022-.358 1.669-.197 2.129.178.507.661 1.572 1.193 2.105.127.127.254.229.407.254.152.027.457-.127.584-.33a.932.932 0 0 0 .15-.559 3.232 3.232 0 0 0-.049-1.216c-.228-.787-.711-1.548-1.346-2.055-.127-.102-.279-.229-.457-.279a.901.901 0 0 0-.285-.049Zm8.414 2.027a2.283 2.283 0 0 1 1.588.636c.305.279.33.582.229.963-.102.38-.457 1.194-.736 1.777l-.709 1.344c-1.37 2.435-1.649 2.689-2.03 2.537-.456-.178-.304-2.614.127-5.582.127-.812.329-1.217.557-1.42.171-.152.6-.248.975-.254l-.001-.001Zm-1.859 8.332c.554.011.789.7.656 1.232a.861.861 0 0 1-.379.559c-.203.127-.685.127-.965-.102-.278-.228-.33-.609-.254-.914.076-.304.331-.635.686-.736a.757.757 0 0 1 .256-.039Zm-8.604 2.805h10.809c.52 0 .938.419.938.939v.074c0 .52-.418.94-.938.94H6.595a.936.936 0 0 1-.937-.94v-.074c0-.52.417-.939.937-.939Z"/></svg>',
    tag:"Par System76. Depuis la 24.04, le bureau maison COSMIC (Rust, Wayland) remplace GNOME + Pop Shell. Top pour dev et gaming.",
    site:"system76.com", dl:"system76.com/pop/download", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"2 Go min. (4 Go conseillés, chiffres officiels System76)", disk:"20 Go min.", cpu:"64 bits ; GPU compatible Wayland pour de bonnes performances avec COSMIC", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (pilotes libres inclus)", nvidia:"Excellent — édition ISO dédiée avec pilote propriétaire déjà installé, à choisir au téléchargement"}},
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
    id:"zorin", name:"Zorin OS", version:"18.1", cat:"desktop", color:"#0CC1F3", icon:"zorin",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#0CC1F3"><path d="M4 18.944L5.995 22.4h12.01L20 18.944H4zM24 12l-2.013 3.488H9.216l12.771-6.976L24 12zM0 12l2.013-3.488h12.771L2.013 15.488 0 12zm4-6.944L5.995 1.6h12.01L20 5.056H4z"/></svg>',
    tag:"Conçu pour les migrants de Windows/macOS. Look configurable en un clic.",
    site:"zorin.com", dl:"zorin.com/os/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"1,5 Go min. (2 Go conseillés, officiel Zorin — fonctionne sur du matériel jusqu'à 15 ans)", disk:"15 Go min. (édition Core)", cpu:"1 GHz dual-core, 64 bits", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (base Ubuntu)", nvidia:"Bon — pilote propriétaire proposé via « Pilotes additionnels », comme sur Ubuntu"}},
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
    id:"elementary", name:"elementary OS", version:"8.1.1", cat:"desktop", color:"#64BAFF", icon:"elementary",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#64BAFF"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 1a11 11 0 0 1 10.59 8.01 19.09 19.09 0 0 1-4.66 6.08c-.94.81-1.96 1.53-3.08 2.04-1.13.5-2.37.8-3.6.72a6.23 6.23 0 0 1-2.66-.76 20.02 20.02 0 0 0 5.68-4.58 9.97 9.97 0 0 0 2.31-4.17c.18-.79.2-1.6.04-2.4a4.42 4.42 0 0 0-1.08-2.11 4.33 4.33 0 0 0-2-1.19 5.25 5.25 0 0 0-2.33-.08A7.8 7.8 0 0 0 7.2 4.85a9.77 9.77 0 0 0-2.94 7.49 7.88 7.88 0 0 0 1.95 4.59 18 18 0 0 1-3.56.85A11 11 0 0 1 12 1zm.07 2.22c.77 0 1.55.24 2.17.7.55.42.97 1.02 1.2 1.68.23.65.3 1.37.21 2.06a7.85 7.85 0 0 1-1.7 3.76 16.22 16.22 0 0 1-6.37 4.96c-.48-.42-.9-.92-1.2-1.48a6.61 6.61 0 0 1-.75-3.87c.12-1.32.58-2.6 1.2-3.79a7.92 7.92 0 0 1 3.02-3.42c.68-.37 1.45-.6 2.22-.6zm10.83 7.3A11 11 0 0 1 3.52 19a19.8 19.8 0 0 0 3.63-1.2c.51.4 1.08.71 1.67.94a8 8 0 0 0 5.44-.04 13.3 13.3 0 0 0 4.64-2.95 20 20 0 0 0 4-5.22z"/></svg>',
    tag:"Le plus beau Linux. Design soigné à la macOS, philosophie « pay what you want ».",
    site:"elementary.io", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits, aucune exigence de génération particulière documentée par le projet", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (base Ubuntu)", nvidia:"Bon — pilote propriétaire disponible via « Pilotes additionnels » (AppCenter ne le gère pas directement)"}},
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
    id:"linuxlite", name:"Linux Lite", version:"8.0", cat:"desktop", color:"#66B32E", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" fill="#66B32E"><path d="M12 2C8 2 5 5.5 5 10c0 6.5 5.5 10.5 7 11.7 1.5-1.2 7-5.2 7-11.7 0-4.5-3-8-7-8zm0 4.2c1.9 0 3.4 1.6 3.4 3.6S13.9 13.4 12 13.4 8.6 11.8 8.6 9.8 10.1 6.2 12 6.2z"/></svg>',
    tag:"Pensé pour les migrants de Windows sur du matériel modeste. Xfce simplifié.",
    site:"linuxliteos.com", dl:"linuxliteos.com/download.php", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"4 Go min. (officiel — le projet a relevé ce seuil depuis la version 7.6, historiquement 768 Mo)", disk:"40 Go min. (officiel)", cpu:"1,5 GHz dual-core ou mieux, 64 bits", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (base Ubuntu)", nvidia:"Bon — pilote propriétaire proposé via « Pilotes additionnels », comme sur Ubuntu"}},
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
    id:"deepin", name:"Deepin", version:"25.2", cat:"desktop", color:"#0080FF", icon:"deepin",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#0080FF"><path d="M16.104.696c-1.724-.63-3.49-.8-5.205-.64-1.988.157-2.958.772-2.9.661-3.251 1.16-6 3.657-7.272 7.157-2.266 6.234.944 13.128 7.168 15.398 6.228 2.27 13.111-.945 15.378-7.179C25.54 9.86 22.33 2.966 16.104.696zM8.305 22.145a10.767 10.767 0 0 1-1.867-.904c2.9.223 6.686-.445 9.239-2.834 0 0 4.866-3.888 1.345-10.269 0 0 .568 2.572-.156 4.687 0 0-.69 2.877-3.757 3.712-4.517 1.231-9.664-1.93-11.816-3.463-.162-1.574-.018-3.2.56-4.788.855-2.352 2.463-4.188 4.427-5.42-.49 3.436-.102 6.6.456 7.925.749 1.777 2.05 3.85 4.59 4.115 2.54.267 3.94-2.11 3.94-2.11 1.304-1.98 1.508-4.823 1.488-4.892-.02-.07-.347-.257-.347-.257-.877 3.549-2.323 4.734-2.323 4.734-2.28 2.201-3.895.675-3.895.675-1.736-1.865-.52-4.895-.52-4.895.68-2.064 2.66-5.084 4.905-6.62.374.092.75.15 1.12.284a10.712 10.712 0 0 1 3.554 2.16c-1.641.599-4.291 1.865-4.291 1.865-4.201 1.77-4.485 4.446-4.485 4.446-.435 2.758 1.754 1.59 1.754 1.59 2.252-1.097 3.359-4.516 3.359-4.516-.703-.134-1.257.08-1.257.08-.899 2.22-2.733 3.132-2.733 3.132-.722.382-.89-.293-.89-.293-.122-.506.522-.592.522-.592 1-.389 1.639-1.439 1.784-1.868.144-.43.412-.464.412-.464a12.998 12.998 0 0 1 2.619-.535c1.7-.209 4.303.602 4.303.602.584.235 1.144.41 1.641.551.954 2.384 1.105 5.098.16 7.7-2.039 5.61-8.236 8.504-13.841 6.462z"/></svg>',
    tag:"Le Linux chinois le plus élégant. DDE : environnement de bureau signature.",
    site:"deepin.org", dl:"www.deepin.org/en/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Facile", base:"Debian",
    req:{ram:"8 Go min. (officiel deepin.org — en dessous, installation risquée/système au ralenti)", disk:"64 Go min. (officiel)", cpu:"2 GHz multi-cœurs ou mieux", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (base Debian, micrologiciels non-free inclus)", nvidia:"Correct — pilote propriétaire disponible mais dépôt non-free à activer manuellement, comme sur Debian"}},
    steps:[
      {t:"Télécharger l'ISO", d:"deepin.org → version 25 stable, ISO complète."},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#1D99F3"><path d="M13.881 0L9.89.382v16.435l3.949-.594V9.216l5.308 7.772 4.162-1.317-5.436-7.475 5.479-7.05L19.105.17 13.84 7.22zM4.834 4.005a.203.203 0 0 0-.123.059L3.145 5.63a.203.203 0 0 0-.03.248L4.949 8.9a7.84 7.84 0 0 0-.772 1.759l-3.367.7a.203.203 0 0 0-.162.199v2.215c0 .093.064.174.155.196l3.268.8a7.83 7.83 0 0 0 .801 2.03L2.98 19.683a.203.203 0 0 0 .027.254l1.566 1.567a.204.204 0 0 0 .249.03l2.964-1.8c.582.336 1.21.6 1.874.78l.692 3.325c.02.094.102.161.198.161h2.215a.202.202 0 0 0 .197-.155l.815-3.332a7.807 7.807 0 0 0 1.927-.811l2.922 1.915c.08.053.186.042.254-.026l1.567-1.566a.202.202 0 0 0 .03-.248l-1.067-1.758-.345.11a.12.12 0 0 1-.135-.047L17.371 15.8a6.347 6.347 0 1 1-8.255-8.674V5.488c-.401.14-.79.31-1.159.511l-.001-.002-2.99-1.96a.203.203 0 0 0-.132-.033Z"/></svg>',
    tag:"La dernière version de KDE Plasma, sur base Ubuntu LTS. Vitrine officielle.",
    site:"kde.org", dl:"neon.kde.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits, aucune exigence de génération particulière documentée par le projet", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (base Ubuntu)", nvidia:"Bon — pilote propriétaire proposé via « Pilotes additionnels », comme sur Ubuntu"}},
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
    id:"solus", name:"Solus", version:"4.9", cat:"desktop", color:"#5294E2", icon:"solus",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#5294E2"><path d="M7.453 0c-.18.587-.369 1.167-.565 1.75A11.638 11.638 0 0 0 0 12.364a11.638 11.638 0 0 0 .516 3.403l-.339.598L0 16.73l.279.143a3.448 3.448 0 0 0 .741.222A11.638 11.638 0 0 0 2 18.868c4.034.343 8.55.512 12.446-.056 3.192-.463 5.94-1.423 7.735-3.117.252-.233.474-.474.674-.722.019-.038.037-.053.06-.076.011 0 .026-.037.038-.052.015 0 .03-.038.041-.057.008 0 .015-.038.023-.038.33-.444.587-.892.801-1.31l.181-.365-.365-.365a5.936 5.936 0 0 0-.361-.35A11.638 11.638 0 0 0 11.635.722a11.638 11.638 0 0 0-3.211.463C7.96.508 7.596.041 7.453 0zm.365 1.637C9.06 3.82 10.13 5.06 11.454 7.457c.132 1.524.67 9.45.727 10.181-.392-.037-2.485-.24-5.104-.515-1.43-.147-2.899-.316-4.092-.49l-1.9-.447c2.149-3.787 5.551-9.727 6.737-14.548zm4.543 6.18s4.991 3.927 7.092 8.73c-2.56 1.26-4.916 1.098-6.361 1.09 1.023-2.634 1.023-6.21-.73-9.82zm3.456 2.184a45.14 45.14 0 0 1 2.91.907c1.768.629 3.417 1.49 4.365 2.364a6.956 6.956 0 0 1-2.91 2.91c.151-1.495-.39-2.933-1.456-4.002-.787-.787-1.822-1.453-2.91-2.183zm6.707 6.478c-2.352 1.667-5.126 2.68-7.965 3.112a41.026 41.026 0 0 1-3.715.34h-.323a53.48 53.48 0 0 1-3.727 0 85.763 85.763 0 0 1-4.178-.23h-.003c2.555 3.255 6.993 4.893 11.092 4.102a11.367 11.367 0 0 0 4.498-1.852 11.638 11.638 0 0 0 .007 0c.312-.214.614-.444.903-.685a11.638 11.638 0 0 0 .038-.037 11.555 11.555 0 0 0 3.376-4.762zM2.511 19.584a11.638 11.638 0 0 0 .023.038c-.008 0-.015-.038-.023-.038z"/></svg>',
    tag:"Rolling curated, indépendante. Budgie, GNOME, KDE ou Xfce. Pas basée sur autre chose.",
    site:"getsol.us", dl:"getsol.us/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"—",
    req:{ram:"4 Go min. (8 Go conseillés, officiel)", disk:"10 Go min. (25 Go conseillés, officiel)", cpu:"x86_64 (x86-64-v2 quad-core 2 GHz conseillé, officiel)", gpu:{open:"Excellent — AMD/Intel pris en charge nativement", nvidia:"Bon — pilote propriétaire disponible directement via le centre logiciels (Linux Driver Management), y compris la variante open-source du noyau"}},
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
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#1A73E8"><path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z"/></svg>',
    tag:"Google Chrome OS pour vieux PC/Mac. Cloud-first, ultra-léger, gestion entreprise.",
    site:"chromeenterprise.google", dl:"chromeenterprise.google/os/chromeosflex", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"ChromeOS",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"16 Go min. (officiel Google)", cpu:"x86_64, conçu pour redonner vie à du matériel ancien (composants d'avant 2010 déconseillés, pas l'inverse)"},
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
    id:"steamos", name:"SteamOS", version:"3.8 (Holo)", cat:"gaming", color:"#66C0F4", icon:"steam",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#66C0F4"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/></svg>',
    tag:"L'OS du Steam Deck. Arch + KDE + Gamescope, pensé pour le jeu.",
    site:"steampowered.com", dl:"store.steampowered.com/steamos/download", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~20 min", diff:"Intermédiaire", base:"Arch",
    req:{ram:"4 Go min. (8-16 Go conseillés)", disk:"64 Go min. sur SSD NVMe (SATA non supporté officiellement), 200 Go+ conseillés selon la ludothèque", cpu:"CPU 64 bits récent, GPU AMD recommandé (meilleur support pilotes que Nvidia)", gpu:{open:"Excellent sur AMD (matériel de référence du Steam Deck) ; Intel Arc pris en charge depuis SteamOS 3.8 (juin 2026)", nvidia:"Non pris en charge officiellement à ce jour — Valve développe le support avec Nvidia, arrivée espérée fin 2026/2027 ; Bazzite reste l'alternative recommandée sur du matériel Nvidia"}},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#FF4C60"><path d="M10.24 3.179C6.82 6.579 3.366 10.064 0 13.465c2.4 2.406 4.889 4.898 7.319 7.332l7.504.024 6.334-6.316-13.754-.012-1.525 1.54 11.512.024-3.198 3.197H7.956L2.172 13.47l8.74-8.74h6.284l4.815 4.815-7.501-.01v-2.12l-3.68 3.68c3.873.004 7.746.003 11.62 0v2.102l1.55-1.55-.003-2.306-6.16-6.159z"/></svg>',
    tag:"Arch dopé pour le gaming. BTRFS + snapshots, look néon spectaculaire.",
    site:"garudalinux.org", dl:"garudalinux.org/downloads", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Arch",
    req:{ram:"8 Go min. (16 Go conseillés)", disk:"64 Go min., bien plus selon la bibliothèque de jeux", cpu:"CPU récent + GPU dédié compatible", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (pilotes libres inclus)", nvidia:"Bon — l'assistant d'installation propose le pilote propriétaire au choix (quelques retours de friction rapportés sur certaines configs hybrides Optimus)"}},
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
    id:"nobara", name:"Nobara", version:"43", cat:"gaming", color:"#8657D8", icon:"nobaralinux",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#8657D8"><path d="M23.808 11.808v8.281a3.542 3.542 0 0 1-3.542 3.527h-.46a3.543 3.543 0 0 1-3.083-3.513v-7.282l3.543-1.013-3.66-1.045a4.724 4.724 0 0 0-9.33 1.045v2.362a2.362 2.362 0 0 0 2.362 2.362 3.543 3.543 0 0 1 3.543 3.542V24a3.539 3.539 0 0 0-3.542-3.542 3.537 3.537 0 0 0-3.063 1.76 3.54 3.54 0 0 1-2.382 1.398h-.46A3.542 3.542 0 0 1 .192 20.09V3.543a3.542 3.542 0 0 1 6.323-2.194A11.756 11.756 0 0 1 12 0c6.521 0 11.808 5.287 11.808 11.808zm-9.446 0A2.359 2.359 0 0 1 12 14.17a2.362 2.362 0 1 1 2.362-2.362z"/></svg>',
    tag:"Fedora modifiée par GloriousEggroll (proton-ge). Patches gaming et codecs prêts à l'emploi.",
    site:"nobaraproject.org", dl:"nobaraproject.org/download.html", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Facile", base:"Fedora",
    req:{ram:"8 Go min. (16 Go conseillés)", disk:"64 Go min., bien plus selon la bibliothèque de jeux", cpu:"CPU récent + GPU dédié compatible", gpu:{open:"Excellent — AMD/Intel pris en charge nativement, ISO standard", nvidia:"Excellent — ISO dédiées avec pilote propriétaire préinstallé, portées par le créateur de Proton-GE"}},
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
    id:"bazzite", name:"Bazzite", version:"44", cat:"gaming", color:"#5A4FCF", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" fill="#5A4FCF"><path d="M12 2 4 9l8 13 8-13-8-7zm0 2.7L17.8 9H6.2L12 4.7zM6 11h5.1l-1.4 8.4L6 11zm7 8.4L11.6 11H16L13 19.4z"/></svg>',
    tag:"Fedora Atomic (immuable) façon SteamOS. Idéal pour Steam Deck, handhelds et salon.",
    site:"bazzite.gg", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Fedora",
    req:{ram:"8 Go min. (16 Go conseillés)", disk:"64 Go min., bien plus selon la bibliothèque de jeux", cpu:"CPU récent + GPU dédié compatible", gpu:{open:"Excellent — AMD/Intel pris en charge nativement, image standard", nvidia:"Excellent — image dédiée (bazzite-nvidia) avec pilote propriétaire préinstallé, cartes GTX 900 et plus récentes"}},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#00E5B0"><path d="M5.301 2.646 0 11.771l5.541 9.583h11.486l2.904-5.017H8.102l-2.56-4.429L8.067 7.54h6.063l2.83-4.893ZM20.058 4.12a.748.748 0 0 0 0 1.496.748.748 0 0 0 0-1.496m-1.983 4.303a1.45 1.45 0 0 0 0 2.9 1.45 1.45 0 0 0 0-2.9m4.02 3.98a1.904 1.904 0 0 0 0 3.809 1.904 1.904 0 0 0 0-3.81"/></svg>',
    tag:"Arch optimisée à l'extrême : noyau BORE, paquets x86-64-v3/v4. Perf pure.",
    site:"cachyos.org", dl:"cachyos.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Arch",
    req:{ram:"8 Go min. (16 Go conseillés)", disk:"64 Go min., bien plus selon la bibliothèque de jeux", cpu:"CPU récent + GPU dédié compatible", gpu:{open:"Excellent — AMD/Intel pris en charge nativement", nvidia:"Excellent — pilote proposé dès le menu de démarrage de l'ISO (nvidia-open par défaut, cartes Turing et plus récentes), installé automatiquement par le Kernel Manager avec le noyau choisi"}},
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
    id:"rocky", name:"Rocky Linux", version:"10.x", cat:"server", color:"#10B981", icon:"rockylinux",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#10B981"><path d="M23.332 15.957c.433-1.239.668-2.57.668-3.957 0-6.627-5.373-12-12-12S0 5.373 0 12c0 3.28 1.315 6.251 3.447 8.417L15.62 8.245l3.005 3.005zm-2.192 3.819l-5.52-5.52L6.975 22.9c1.528.706 3.23 1.1 5.025 1.1 3.661 0 6.94-1.64 9.14-4.224z"/></svg>',
    tag:"Le successeur de CentOS. Binaire-compatible RHEL, gratuit et communautaire.",
    site:"rockylinux.org", dl:"rockylinux.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"RHEL",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64-v2 min. (Nehalem/Bulldozer et plus), ARM64, POWER9 ou IBM Z"},
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
    id:"almalinux", name:"AlmaLinux", version:"10.x", cat:"server", color:"#1C7ED6", icon:"almalinux",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#1C7ED6"><path d="M23.994 15.133c.079 1.061-.668 1.927-1.69 2.005a1.8 1.8 0 0 1-1.928-1.651c-.078-1.062.63-1.849 1.691-1.967 1.023-.078 1.849.59 1.927 1.613zm-12.623 4.955c-.944 0-1.73.786-1.73 1.809 0 1.14.747 1.848 1.887 1.848.904-.04 1.691-.865 1.691-1.809 0-.983-.904-1.848-1.848-1.848zm1.061-9.675c-.039-.865-.078-1.73.08-2.556.156-.944.314-1.887.904-2.674.707-.983 1.809-.944 2.399.118.314.511.432 1.062.471 1.652 0 .354.158.432.472.393.944-.157 1.888-.157 2.792.197.118.039.236.118.394 0 .314-.276.393-1.652.196-2.006-.354-.63-.904-.55-1.455-.55-.629.039-1.18-.158-1.612-.67-.393-.471-.511-1.06-.59-1.65-.04-.276-.079-.512-.315-.709-.55-.55-1.809-.432-2.477.118-2.556 2.045-2.989 5.467-1.534 8.18.04.118.118.236.275.157zm7.984 3.658c.354-.511.865-.747 1.415-.983a.973.973 0 0 0 .59-.472c.354-.669-.078-1.81-.747-2.36-2.595-2.006-5.938-1.612-8.18.433-.118.078-.157.196-.078.314.786-.236 1.612-.472 2.477-.51.905-.08 1.848-.158 2.753.235 1.14.472 1.337 1.534.472 2.36-.393.393-.905.668-1.455.825-.315.08-.354.236-.236.551.354.865.59 1.77.472 2.753-.04.157-.079.275.078.393.354.236 1.691 0 1.967-.275.511-.472.314-1.023.196-1.534-.157-.63-.078-1.219.276-1.73zm-7.197-2.045c-.118-.079-.197-.118-.315 0 .472.708.905 1.455 1.259 2.241.314.866.668 1.73.55 2.714-.118 1.18-1.1 1.69-2.123 1.101-.511-.275-.905-.669-1.22-1.14-.196-.276-.393-.276-.629-.08-.747.63-1.533 1.102-2.516 1.26-.158 0-.315 0-.394.157-.118.393.472 1.612.826 1.809.59.354 1.062 0 1.534-.276.55-.314 1.101-.432 1.73-.236.59.197.983.63 1.337 1.102.158.196.315.353.63.432.747.197 1.77-.59 2.084-1.376 1.18-3.028-.157-6.135-2.753-7.708zm-2.556 2.438c.472-.669.826-1.416.983-2.202-.157-.04-.197.04-.315.078-.904.944-1.848 1.849-3.067 2.478-.472.236-.983.433-1.534.433-.865 0-1.376-.551-1.298-1.416a2.92 2.92 0 0 1 .787-1.849c.236-.275.236-.432-.04-.668-.786-.55-1.494-1.22-1.848-2.124-.078-.275-.275-.275-.51-.157a4.293 4.293 0 0 0-.434.236c-1.022.63-1.14 1.416-.275 2.28.63.63.944 1.338.708 2.203-.118.433-.354.747-.63 1.101a.95.95 0 0 0-.235.787c.079.747.826 1.494 1.73 1.573 2.517.236 4.562-.63 5.978-2.753zm-4.68-5.152c1.376 1.18 3.067 1.455 4.837 1.377.157 0 .315 0 .354-.118.04-.197-.157-.197-.275-.236-.826-.354-1.691-.63-2.438-1.14S6.848 8.25 6.534 7.266c-.236-.747.078-1.415.825-1.651.669-.236 1.337-.236 1.967 0 .393.157.55.078.629-.354.118-.747.354-1.455.826-2.085.55-.786.55-.865-.354-1.376-.04 0-.04-.04-.079-.04-.865-.471-1.534-.196-1.848.709-.472 1.376-1.377 1.887-2.832 1.612-.196-.04-.393-.079-.472-.079-.747.118-1.18.55-1.297 1.14-.158 1.81.786 3.107 2.084 4.17zm-2.32 3.658c-.079-.944-1.023-1.652-2.045-1.534-.905.079-1.691 1.022-1.613 1.966.08.983 1.023 1.77 1.967 1.652 1.14-.079 1.73-1.18 1.69-2.084zm15.18-8.298c.943-.079 1.73-.983 1.651-1.927-.078-.983-1.022-1.77-2.005-1.691-1.023.079-1.73.983-1.652 1.966s.983 1.73 2.006 1.652zm-12.27-.826c1.062-.157 1.77-1.023 1.652-2.045C8.107.897 7.163.149 6.18.267c-1.062.118-1.691.944-1.573 2.085.118.865 1.061 1.612 1.966 1.494z"/></svg>',
    tag:"Clone RHEL 1:1 par CloudLinux. Stable, gratuit, orienté production.",
    site:"almalinux.org", dl:"almalinux.org/get-almalinux", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"RHEL",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64-v2 min. (Nehalem/Bulldozer et plus), ARM64, POWER9 ou IBM Z"},
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
    id:"centos", name:"CentOS Stream", version:"10", cat:"server", color:"#A55CC9", icon:"centos",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#A55CC9"><path d="M12.076.066L8.883 3.28H3.348v5.434L0 12.01l3.349 3.298v5.39h5.374l3.285 3.236 3.285-3.236h5.43v-5.374L24 12.026l-3.232-3.252V3.321H15.31zm0 .749l2.49 2.506h-1.69v6.441l-.8.805-.81-.815V3.28H9.627zm-8.2 2.991h4.483L6.485 5.692l4.253 4.279v.654H9.94L5.674 6.423l-1.798 1.77zm5.227 0h1.635v5.415l-3.509-3.53zm4.302.043h1.687l1.83 1.842-3.517 3.539zm2.431 0h4.404v4.394l-1.83-1.842-4.241 4.267h-.764v-.69l4.261-4.287zm2.574 3.3l1.83 1.843v1.676h-5.327zm-12.735.013l3.515 3.462H3.876v-1.69zM3.348 9.454v1.697h6.377l.871.858-.782.77H3.35v1.786L.753 12.01zm17.42.068l2.488 2.503-2.533 2.55v-1.796h-6.41l-.75-.754.825-.83h6.38zm-9.502.978l.81.815.186-.188.614-.618v.686h.768l-.825.83.75.754h-.719v.808l-.842-.83-.741.73v-.707h-.7l.781-.77-.188-.186-.682-.672h.788zm-7.39 2.807h5.402l-3.603 3.55-1.798-1.772zm6.154 0h.708v.7l-4.404 4.338 1.852 1.824h-4.31v-4.342l1.798 1.77zm3.348 0h.715l4.317 4.343.186-.187 1.599-1.61v4.316h-4.366l1.853-1.825-.188-.185-4.116-4.054zm1.46 0h5.357v1.798l-1.785 1.796zm-2.83.191l.842.829v6.37h1.691l-2.532 2.495-2.533-2.495h1.79V14.23zm-1.27 1.251v5.42H8.939l-1.852-1.823zm2.64.097l3.552 3.499-1.853 1.825h-1.7z"/></svg>',
    tag:"L'amont continu de RHEL. Pour tester ce qui arrive dans Red Hat Enterprise.",
    site:"centos.org", dl:"www.centos.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"RHEL",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64-v2 min. (Nehalem/Bulldozer et plus), ARM64, POWER9 ou IBM Z"},
    steps:[
      {t:"Télécharger l'ISO", d:"centos.org → CentOS Stream 10, DVD ou boot."},
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
    id:"ubuntuserver", name:"Ubuntu Server", version:"26.04 LTS", cat:"server", color:"#E95420", icon:"ubuntu",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#E95420"><path d="M17.61.455a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zM12.92.8C8.923.777 5.137 2.941 3.148 6.451a4.5 4.5 0 0 1 .26-.007 4.92 4.92 0 0 1 2.585.737A8.316 8.316 0 0 1 12.688 3.6 4.944 4.944 0 0 1 13.723.834 11.008 11.008 0 0 0 12.92.8zm9.226 4.994a4.915 4.915 0 0 1-1.918 2.246 8.36 8.36 0 0 1-.273 8.303 4.89 4.89 0 0 1 1.632 2.54 11.156 11.156 0 0 0 .559-13.089zM3.41 7.932A3.41 3.41 0 0 0 0 11.342a3.41 3.41 0 0 0 3.41 3.409 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zm2.027 7.866a4.908 4.908 0 0 1-2.915.358 11.1 11.1 0 0 0 7.991 6.698 11.234 11.234 0 0 0 2.422.249 4.879 4.879 0 0 1-.999-2.85 8.484 8.484 0 0 1-.836-.136 8.304 8.304 0 0 1-5.663-4.32zm11.405.928a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41z"/></svg>',
    tag:"Sans interface graphique, pour héberger sites, bases de données et conteneurs.",
    site:"ubuntu.com", dl:"ubuntu.com/download/server", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"1,5 Go min. pour l'installeur ISO (3 Go+ conseillés)", disk:"5 Go min., 25 Go+ conseillés", cpu:"amd64, arm64, ppc64el, s390x ou riscv64"},
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
    id:"oraclelinux", name:"Oracle Linux", version:"10", cat:"server", color:"#F80000", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#F80000" stroke-width="3"><ellipse cx="12" cy="12" rx="8" ry="5.5"/></svg>',
    tag:"Clone RHEL gratuit par Oracle. Kernel UEK optionnel, support entreprise disponible.",
    site:"oracle.com", dl:"oracle.com/linux/downloads", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"RHEL",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64-v2 min. (Nehalem/Bulldozer et plus), ARM64, POWER9 ou IBM Z"},
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
    site:"microsoft.com", dl:"microsoft.com/evalcenter", license:"Propriétaire", popular:false, isNew:false,
    time:"~20 min", diff:"Intermédiaire", base:"Windows NT",
    req:{ram:"1 Go min. en Server Core, 2 Go avec l'expérience de bureau", disk:"32 Go minimum absolu pour la partition système", cpu:"1,4 GHz 64 bits avec NX/DEP et SLAT (EPT ou NPT)"},
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
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#E57000"><path d="M4.928 1.825c-1.09.553-1.09.64-.07 1.78 5.655 6.295 7.004 7.782 7.107 7.782.139.017 7.971-8.542 8.058-8.801.034-.07-.208-.312-.519-.536-.415-.312-.864-.433-1.712-.467-1.59-.104-2.144.242-4.115 2.455-.899 1.003-1.66 1.833-1.66 1.833-.017 0-.76-.813-1.642-1.798S8.473 2.1 8.127 1.91c-.796-.45-2.421-.484-3.2-.086zM1.297 4.367C.45 4.695 0 5.007 0 5.248c0 .121 1.331 1.678 2.94 3.459 1.625 1.78 2.939 3.268 2.939 3.302 0 .035-1.331 1.522-2.94 3.303C1.314 17.11.017 18.683.035 18.822c.086.467 1.504 1.055 2.541 1.055 1.678-.018 2.058-.312 5.603-4.202 1.78-1.954 3.233-3.614 3.233-3.666 0-.069-1.435-1.694-3.199-3.63-2.3-2.508-3.423-3.632-3.96-3.874-.812-.398-2.126-.467-2.956-.138zm18.467.12c-.502.26-1.764 1.505-3.943 3.891-1.763 1.937-3.199 3.562-3.199 3.631 0 .07 1.453 1.712 3.234 3.666 3.544 3.89 3.925 4.184 5.602 4.202 1.038 0 2.455-.588 2.542-1.055.017-.156-1.28-1.712-2.905-3.493-1.608-1.78-2.94-3.285-2.94-3.32 0-.034 1.332-1.539 2.94-3.32C22.72 6.91 24.017 5.352 24 5.214c-.087-.45-1.366-.968-2.473-1.038-.795-.034-1.21.035-1.763.312zM7.954 16.973c-2.144 2.369-3.908 4.374-3.943 4.46-.034.07.208.312.52.537.414.311.864.432 1.711.467 1.574.103 2.161-.26 4.15-2.508.864-.968 1.608-1.78 1.625-1.78s.761.812 1.643 1.798c2.023 2.248 2.559 2.576 4.132 2.49.848-.035 1.297-.156 1.712-.467.311-.225.553-.467.519-.536-.087-.26-7.92-8.819-8.058-8.801-.069 0-1.867 1.954-4.011 4.34z"/></svg>',
    tag:"Plateforme de virtualisation. KVM + LXC gérés via une interface web.",
    site:"proxmox.com", dl:"proxmox.com/en/downloads", license:"Libre / Open-source", popular:true, isNew:false,
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
    id:"truenas", name:"TrueNAS Community Edition", version:"25.10 Goldeye", cat:"server", color:"#0095D5", icon:"truenas",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#0095D5"><path d="M24 10.049v5.114l-10.949 6.324v-5.114L24 10.049zm-24 0v5.114l10.956 6.324v-5.114L0 10.049zm12.004-.605l-4.433 2.559 4.433 2.559 4.429-2.559-4.429-2.559zm10.952-1.207l-9.905-5.723v5.118l5.473 3.164 4.432-2.559zm-12-.605V2.513L1.044 8.236l4.432 2.555 5.48-3.159z"/></svg>',
    tag:"NAS sous stéroïdes. ZFS, conteneurs, VMs, réplication. Debian sous le capot.",
    site:"truenas.com", dl:"truenas.com/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~20 min", diff:"Avancé", base:"Debian",
    req:{ram:"8 Go min. (prérequis officiel ZFS), +1 Go par disque au-delà de 8", disk:"20 Go de SSD dédié au démarrage, en plus des disques du pool", cpu:"x86_64 Intel ou AMD"},
    steps:[
      {t:"Télécharger l'ISO", d:"truenas.com/download → section Community Edition → dernière ISO."},
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
    id:"kali", name:"Kali Linux", version:"2026.x", cat:"security", color:"#5C8DBC", icon:"kalilinux",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#5C8DBC"><path d="M12.778 5.943s-1.97-.13-5.327.92c-3.42 1.07-5.36 2.587-5.36 2.587s5.098-2.847 10.852-3.008zm7.351 3.095l.257-.017s-1.468-1.78-4.278-2.648c1.58.642 2.954 1.493 4.021 2.665zm.42.74c.039-.068.166.217.263.337.004.024.01.039-.045.027-.005-.025-.013-.032-.013-.032s-.135-.08-.177-.137c-.041-.057-.049-.157-.028-.195zm3.448 8.479s.312-3.578-5.31-4.403a18.277 18.277 0 0 0-2.524-.187c-4.506.06-4.67-5.197-1.275-5.462 1.407-.116 3.087.643 4.73 1.408-.007.204.002.385.136.552.134.168.648.35.813.445.164.094.691.43 1.014.85.07-.131.654-.512.654-.512s-.14.003-.465-.119c-.326-.122-.713-.49-.722-.511-.01-.022-.015-.055.06-.07.059-.049-.072-.207-.13-.265-.058-.058-.445-.716-.454-.73-.009-.016-.012-.031-.04-.05-.085-.027-.46.04-.46.04s-.575-.283-.774-.893c.003.107-.099.224 0 .469-.3-.127-.558-.344-.762-.88-.12.305 0 .499 0 .499s-.707-.198-.82-.85c-.124.293 0 .469 0 .469s-1.153-.602-3.069-.61c-1.283-.118-1.55-2.374-1.43-2.754 0 0-1.85-.975-5.493-1.406-3.642-.43-6.628-.065-6.628-.065s6.45-.31 11.617 1.783c.176.785.704 2.094.989 2.723-.815.563-1.733 1.092-1.876 2.97-.143 1.878 1.472 3.53 3.474 3.58 1.9.102 3.214.116 4.806.942 1.52.84 2.766 3.4 2.89 5.703.132-1.709-.509-5.383-3.5-6.498 4.181.732 4.549 3.832 4.549 3.832zM12.68 5.663l-.15-.485s-2.484-.441-5.822-.204C3.37 5.211 0 6.38 0 6.38s6.896-1.735 12.68-.717Z"/></svg>',
    tag:"L'arsenal du pentester : plus de 600 outils de sécurité préinstallés.",
    site:"kali.org", dl:"kali.org/get-kali", license:"Libre / Open-source", popular:true, isNew:false,
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
    id:"tails", name:"Tails", version:"7.x", cat:"security", color:"#8E64C8", icon:"tails",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#8E64C8"><path d="M21.356 11.162v3.98c0 .122-.081.154-.181.071l-2.032-1.682a.55.55 0 0 1-.181-.37v-.501l-.635-.516c-.68-.554-1.226-1.677-1.226-2.5 0-.822.549-1.036 1.226-.478l.635.516V9.18c0-.122.081-.154.181-.071l2.032 1.682c.1.082.181.248.181.37zm-2.993-1.265c-.358-.296-.648-.182-.648.253s.29 1.027.648 1.323l.599.486v-1.576l-.599-.486zM21.202 19.934l.013-.01a.334.334 0 0 0 .037-.036l.004-.004a.36.36 0 0 0 .032-.046l.007-.013a.299.299 0 0 0 .019-.042l.004-.01a.329.329 0 0 0 .013-.055v-.014l.003-.027.003-.152-5.223-4.28.022-12.91-.147-.111-.004-.003-.034-.02c-.007-.004-.014-.01-.022-.013l-.03-.01c-.01-.004-.02-.009-.03-.011l-.026-.004c-.013-.002-.026-.005-.039-.005H15.8l-.023.001c-.013 0-.025.001-.037.003l-.03.007c-.01.003-.021.005-.031.01-.01.003-.02.008-.029.012l-.029.015a.202.202 0 0 0-.014.01c-.012.004-.024.007-.035.013l-3.444 1.726.72.57.027 10.067-5.246-4.32-.003-5.241L7.623.328l-.001-.01a.283.283 0 0 0-.004-.035c-.001-.01-.002-.02-.005-.03L7.605.223C7.6.213 7.597.201 7.59.19L7.588.181l-.01-.015c-.006-.01-.012-.021-.02-.031L7.54.112A.354.354 0 0 0 7.466.05.294.294 0 0 0 7.44.035c-.01-.004-.02-.01-.03-.013a.365.365 0 0 0-.061-.016L7.314.002 7.294 0l-.009.001a.3.3 0 0 0-.036.004c-.01.001-.02.002-.03.005-.01.002-.019.006-.029.009a.286.286 0 0 0-.033.012l-.009.004L2.825 2.2l-.016.01a.336.336 0 0 0-.077.061.303.303 0 0 0-.053.078.402.402 0 0 0-.023.06.284.284 0 0 0-.01.065c-.001.006-.003.013-.002.02l.006 10.108v.02l.002.008c0 .015.003.03.006.044l.002.009.004.011a.32.32 0 0 0 .02.054v.001h.001c.009.018.02.034.031.05l.007.01.006.006a.31.31 0 0 0 .031.032l.006.006c.004.003.008.005.01.008.002 0 .003.003.005.004l4.7 3.909-.107 2.673v.038l.004.025.002.015c0 .005.002.01.004.015 0 .004.002.007.003.011l.001.005.003.01c.005.014.01.028.017.04v.002a.32.32 0 0 0 .031.049l.006.008.005.005a.342.342 0 0 0 .037.039l.005.003.003.002.003.004 5.317 4.212c.1.078.236.092.35.035l7.988-4 .004-.002a.321.321 0 0 0 .045-.029zM5.475 10.985L3.819 9.706v1.1l.844.585-1.392.698-.006-9.376 2.176-1.09.023 2.392-1.546-1.236v1.1l1.554 1.235.024 1.182L3.901 5.02v1.1l1.603 1.275-.006 1.283-1.573-1.257v1.1l1.58 1.256.01 1.187zm3.433 6.038l-5.309-4.365 3.668-1.837 5.309 4.365zM6.123 1.282l.733-.367.079 9.34-.733.366zM8.617 8.396l-.001-1.59L9.925 7.83l.001 1.591zM9.926 6.568l-1.31-1.025V3.952l1.309 1.025zM11.018 5.816c.507.646 1.026 1.907 1.026 3.073 0 1.165-.519 1.562-1.026 1.362V5.816z"/></svg>',
    tag:"L'OS de l'anonymat. Amnésique, tout passe par Tor. Utilisé par les journalistes.",
    site:"tails.net", dl:"tails.net/install", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"3 Go conseillés (fonctionne avec moins, instabilité possible)", disk:"8-32 Go pour une clé USB persistante", cpu:"x86_64 — l'usage en VM n'est volontairement PAS la méthode recommandée par le projet : la documentation officielle Tails prévient que la virtualisation n'anonymise pas le trafic de la machine hôte, et que l'hôte/l'hyperviseur peuvent surveiller ce qui se passe à l'intérieur ; démarrer depuis une vraie clé USB reste la méthode principale"},
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
    id:"parrot", name:"Parrot OS", version:"7.x", cat:"security", color:"#00E5CE", icon:"parrotsecurity",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#00E5CE"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0Zm6.267 2.784L13.03 5.54l8.05-.179-8.05 3.333-2.154 2.688 5.007 9.038-1.536-1.605 1.645 3.456-4.937-5.527-6.268-6.28L2.77 12.11l.7-3.442 4.018-.261.823-4.06Z"/></svg>',
    tag:"L'alternative à Kali. Pentest + confidentialité + dev, sur base Debian testing.",
    site:"parrotsec.org", dl:"parrotsec.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"20 Go min. (édition Home), 40 Go conseillés (édition Security)", cpu:"x86-64 et ARM (armhf/arm64) — images dédiées Raspberry Pi 3/4/400/5 disponibles (officiel parrotsec.org), contrairement à la plupart des distributions de cette catégorie limitées à x86_64"},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#1793D1"><path d="M11.39.605C10.376 3.092 9.764 4.72 8.635 7.132c.693.734 1.543 1.589 2.923 2.554-1.484-.61-2.496-1.224-3.252-1.86C6.86 10.842 4.596 15.138 0 23.395c3.612-2.085 6.412-3.37 9.021-3.862a6.61 6.61 0 01-.171-1.547l.003-.115c.058-2.315 1.261-4.095 2.687-3.973 1.426.12 2.534 2.096 2.478 4.409a6.52 6.52 0 01-.146 1.243c2.58.505 5.352 1.787 8.914 3.844-.702-1.293-1.33-2.459-1.929-3.57-.943-.73-1.926-1.682-3.933-2.713 1.38.359 2.367.772 3.137 1.234-6.09-11.334-6.582-12.84-8.67-17.74zM22.898 21.36v-.623h-.234v-.084h.562v.084h-.234v.623h.331v-.707h.142l.167.5.034.107a2.26 2.26 0 01.038-.114l.17-.493H24v.707h-.091v-.593l-.206.593h-.084l-.205-.602v.602h-.091"/></svg>',
    tag:"2800+ outils de pentest sur base Arch. Le rasoir des professionnels.",
    site:"blackarch.org", dl:"blackarch.org/downloads.html", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~40 min", diff:"Expert", base:"Arch",
    req:{ram:"1 Go min. (2 Go conseillés, plus selon les outils utilisés)", disk:"8-32 Go pour une clé USB persistante (jusqu'à ~100 Go si tous les outils sont installés)", cpu:"x86_64 (VM pratique pour un labo isolé ; le bare-metal reste préférable pour l'injection Wi-Fi et le cracking GPU, mal supportés en VM)"},
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
    id:"qubes", name:"Qubes OS", version:"4.3", cat:"security", color:"#3874D8", icon:"qubesos",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#3874D8"><path d="M21.893 20.79l-2.289-1.332 1.547-.895a2.402 2.402 0 0 0 1.2-2.08V7.098l-.003-.059a2.402 2.402 0 0 0-1.198-2.027l-3.899-2.255-4.21-2.436a2.473 2.473 0 0 0-.237-.118L12.77.187l-.093-.036-.052-.019c-.028-.01-.057-.018-.085-.027l-.062-.019-.079-.02-.072-.017-.073-.013-.079-.013-.068-.008-.087-.008-.063-.004A10.324 10.324 0 0 0 11.9 0h-.03l-.082.001-.076.002-.093.007-.064.006c-.037.004-.073.01-.11.016-.014.004-.029.006-.044.009a3.266 3.266 0 0 0-.154.034 2.39 2.39 0 0 0-.602.245L5.536 3.277l-3 1.736a2.407 2.407 0 0 0-1.201 2.083v9.385a2.405 2.405 0 0 0 1.2 2.08l8.108 4.693a2.395 2.395 0 0 0 2.4.002l1.804-1.044 2.302 1.339c1.03.599 2.687.599 3.716 0l1.03-.6c1.027-.597 1.027-1.562-.002-2.161zm-10.71-2.695l-4.46-2.583a1.324 1.324 0 0 1-.66-1.143V9.206c0-.236.063-.464.177-.662l.002.001c.116-.2.282-.368.482-.485l4.459-2.58c.092-.053.189-.093.289-.122l.034-.01c.035-.01.07-.015.105-.022.023-.004.045-.01.068-.013.031-.004.062-.004.093-.006.028 0 .055-.004.083-.004.036 0 .073.004.11.007.02.002.038.002.058.005.037.005.074.014.11.022.018.004.037.007.055.012.04.011.077.025.115.04l.045.015c.052.022.104.047.154.076l4.46 2.58c.198.116.364.283.48.483l.002.003-.003.002c.116.201.177.43.177.661v5.161c0 .15-.028.295-.076.433a1.32 1.32 0 0 1-.583.71l-4.46 2.582a1.312 1.312 0 0 1-1.316 0z"/></svg>',
    tag:"Sécurité par compartimentation. Chaque tâche dans une VM Xen isolée. Snowden approuve.",
    site:"qubes-os.org", dl:"www.qubes-os.org/downloads", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~35 min", diff:"Expert", base:"Fedora",
    req:{ram:"6 Go min., 16 Go conseillés (chiffres officiels Qubes)", disk:"32 Go min., 128 Go conseillés — installation sur disque : Qubes ne s'utilise pas depuis une clé USB persistante", cpu:"64 bits Intel ou AMD avec VT-x + EPT (ou AMD-V + RVI) ET VT-d (ou AMD-Vi) : ces extensions de virtualisation sont obligatoires, pas optionnelles"},
    steps:[
      {t:"Télécharger l'ISO", d:"qubes-os.org → dernière version stable. Vérifier la signature PGP."},
      {t:"Vérifier le matériel", d:"Consulter la HCL : VT-x/AMD-V + VT-d/AMD-Vi obligatoires."},
      {t:"Graver la clé", d:"dd uniquement, pas Rufus (image hybride).", code:"sudo dd if=Qubes-R4.3.iso of=/dev/sdX bs=1M"},
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
    id:"whonix", name:"Whonix", version:"18", cat:"security", color:"#5B9BD5", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="#5B9BD5"><path d="M4 9c0-2.2 2-4 5-4s5 1.8 5 4-2 5-5 5-5-2.8-5-5zm2.4 0a2.6 1.8 0 1 0 5.2 0 2.6 1.8 0 1 0-5.2 0z"/><path d="M10 9c0-2.2 2-4 5-4s5 1.8 5 4-2 5-5 5-5-2.8-5-5zm2.4 0a2.6 1.8 0 1 0 5.2 0 2.6 1.8 0 1 0-5.2 0z" opacity=".6"/></svg>',
    tag:"Deux VM : une passerelle Tor + un poste isolé. Impossible à désanonymiser.",
    site:"whonix.org", dl:"www.whonix.org/wiki/Download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~20 min", diff:"Avancé", base:"Debian",
    req:{ram:"1 Go min. (8 Go conseillés pour de bonnes performances)", disk:"10 Go min. (prévoir plus pour les mises à jour)", cpu:"x86_64, virtualisation matérielle (VT-x/AMD-V) obligatoire — architecture à deux VM"},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" fill="#000000" stroke="#666" stroke-width="0.5"><path d="M12 2 20 6v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg>',
    tag:"Distribution d'audit basée sur Ubuntu. Interface légère XFCE, orientée pentest et forensic.",
    site:"backbox.org", dl:"linux.backbox.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Ubuntu",
    req:{ram:"1 Go min. (2-4 Go conseillés)", disk:"30 Go d'espace disque (officiel BackBox 9)", cpu:"x86_64 (VM pratique pour un labo isolé ; le bare-metal reste préférable pour l'injection Wi-Fi et le cracking GPU, mal supportés en VM)"},
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
    id:"mxlinux", name:"MX Linux", version:"25 Infinity", cat:"lightweight", color:"#8AA5C4", icon:"mxlinux",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#8AA5C4"><path d="M12.001 13.301l3.277 3.819-.75.9-2.133-2.521-1.131-1.338.737-.86zM24 2.41v19.182c0 .655-.531 1.186-1.186 1.186H1.186A1.186 1.186 0 0 1 0 21.591V2.409c0-.655.531-1.186 1.186-1.186h21.628c.655 0 1.186.53 1.186 1.186zm-2.241 17.09l-2.116-2.542-2.115-2.541-.586.704-3.25-3.788 4.913-5.73-1.175-1.008-4.76 5.549-4.743-5.527-1.947 1.67 5 5.827-.73.851-1.24-1.465-3.384 4-3.385 4h19.518z"/></svg>',
    tag:"Léger, rapide, ultra-stable. Debian + Xfce, plébiscité sur DistroWatch.",
    site:"mxlinux.org", dl:"mxlinux.org/download-links", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Debian",
    req:{ram:"1 Go min. (2 Go conseillés, manuel officiel MX)", disk:"6-8 Go min. (20 Go conseillés)", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
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
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#0D9BD7"><path d="M5.998 1.607L0 12l5.998 10.393h12.004L24 12 18.002 1.607H5.998zM9.965 7.12L12.66 9.9l1.598 1.595.002-.002 2.41 2.363c-.2.14-.386.252-.563.344a3.756 3.756 0 01-.496.217 2.702 2.702 0 01-.425.111c-.131.023-.25.034-.358.034-.13 0-.242-.014-.338-.034a1.317 1.317 0 01-.24-.072.95.95 0 01-.2-.113l-1.062-1.092-3.039-3.041-1.1 1.053-3.07 3.072a.974.974 0 01-.2.111 1.274 1.274 0 01-.237.073c-.096.02-.209.033-.338.033-.108 0-.227-.009-.358-.031a2.7 2.7 0 01-.425-.114 3.748 3.748 0 01-.496-.217 5.228 5.228 0 01-.563-.343l6.803-6.727zm4.72.785l4.579 4.598 1.382 1.353a5.24 5.24 0 01-.564.344 3.73 3.73 0 01-.494.217 2.697 2.697 0 01-.426.111c-.13.023-.251.034-.36.034-.129 0-.241-.014-.337-.034a1.285 1.285 0 01-.385-.146c-.033-.02-.05-.036-.053-.04l-1.232-1.218-2.111-2.111-.334.334L12.79 9.8l1.896-1.897zm-5.966 4.12v2.529a2.128 2.128 0 01-.356-.035 2.765 2.765 0 01-.422-.116 3.708 3.708 0 01-.488-.214 5.217 5.217 0 01-.555-.34l1.82-1.825Z"/></svg>',
    tag:"Minuscule (~130 Mo), sécurisée, la star des conteneurs Docker.",
    site:"alpinelinux.org", dl:"alpinelinux.org/downloads", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Avancé", base:"—",
    req:{ram:"128 Mo min. pour une installation sur disque", disk:"130 Mo pour une installation minimale sur disque (chiffre officiel Alpine) ; environ 8 Mo en conteneur", cpu:"x86_64, ARM et plusieurs autres architectures ; fonctionne sur du matériel très modeste"},
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
    id:"lubuntu", name:"Lubuntu", version:"26.04 LTS", cat:"lightweight", color:"#2E7CD6", icon:"lubuntu",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#2E7CD6"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m1.287 4.723q.316-.031.63.004a3.17 3.17 0 0 1 2.41 1.642l5.665.781h-6.458a2.58 2.58 0 0 0-1.66-.955 2.57 2.57 0 0 0-1.371.192c-.43.19-.8.495-1.068.88-.268.387-.424.84-.451 1.31-.026.468.078.935.3 1.349a3.13 3.13 0 0 1-.795-1.68 3.13 3.13 0 0 1 .305-1.832 3.14 3.14 0 0 1 1.299-1.332 3.1 3.1 0 0 1 1.195-.36m-9.88 1.09 8.673 6.232-7.154-4.012a3.6 3.6 0 0 0-.072 2.022 3.57 3.57 0 0 0 1.998 2.34l4.748 1.334-6.002-.983c.061.58.275 1.133.619 1.604a3.33 3.33 0 0 0 2.652 1.33 3.95 3.95 0 0 1-3.062-.451 3.9 3.9 0 0 1-1.432-1.563 3.9 3.9 0 0 1-.398-2.08l1.32.371a4.7 4.7 0 0 1-1.246-.986 4.7 4.7 0 0 1-1.111-2.48 4.67 4.67 0 0 1 .466-2.678m11.667 3.132q-.01.138-.008.278c.007 1.143.535 2.21 1.057 3.226.523 1.017 1.064 2.076 1.094 3.22.024.95-.32 1.895-.899 2.651-.578.756-1.377 1.328-2.255 1.696a6.5 6.5 0 0 1-3.91.338l-1 2.373v-3.327a6.23 6.23 0 0 0 3.665-.31c.7-.285 1.352-.707 1.862-1.264s.875-1.255.986-2.002c.15-1-.151-2.007-.447-2.974s-.595-1.977-.436-2.975a3.3 3.3 0 0 1 .291-.93"/></svg>',
    tag:"Ubuntu ultra-léger avec LXQt. Ressuscite les PC anciens.",
    site:"lubuntu.me", dl:"lubuntu.me/downloads", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"1 Go min. (2 Go conseillés) — le projet a cessé de publier un minimum strict après la 18.04, ce chiffre reprend la doc communautaire actuelle", disk:"8 Go min. (20 Go conseillés)", cpu:"1 GHz min. (Pentium 4, Pentium M, AMD K8 ou plus récent)"},
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
    id:"xubuntu", name:"Xubuntu", version:"26.04 LTS", cat:"lightweight", color:"#0664B5", icon:"xfce",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#0664B5"><path d="M.121 5.7271a.104.104 0 0 0-.0344.0017v-.0003l-.0154.0024-.0138.0076a.1156.1156 0 0 0-.0486.053.1147.1147 0 0 0-.0065.067c.0073.0362.0229.0552.0392.0754.0326.0403.0783.0798.1424.1286.1282.0976.3274.2256.5973.379.5396.3065 1.3597.7126 2.4276 1.1523 1.0533.4336 2.3185 1.2056 3.2863 1.9117.4838.353.8938.6902 1.165.9572.1356.1336.2365.2504.2924.337.028.0433.0443.0791.0498.1003.0027.0106.0029.0158.003.0176-.6994.9875-1.1131 2.187-.8297 4.1959l.0003.0003v.0002c.0055.0378-.0317.1266-.1203.2349-.0886.1082-.2168.2333-.3462.3656-.1294.1324-.2604.2723-.3573.4192-.0968.1469-.1629.3058-.138.4716v.0005l.0002.0005c.0122.074.062.1403.1251.1684.0632.0281.1297.0276.1987.0184.1379-.0185.295-.0788.4534-.1449.1584-.066.3168-.1387.4379-.1832a.7913.7913 0 0 1 .1308-.0376c-.0002.021.0023.0308-.0032.0646-.0102.0611-.0291.1386-.0536.2251-.0488.173-.1194.3824-.1843.5878-.0648.2054-.1239.4059-.15.57-.013.082-.0188.155-.008.2219.0107.0669.0489.1414.1224.1683l.0027.0011.0027.0009c.0509.015.0835.0012.1164-.0117a.6625.6625 0 0 0 .1038-.054c.0748-.046.1643-.1118.2657-.1916.2027-.1596.4515-.3752.697-.5916.2455-.2164.4874-.4336.6734-.5937.093-.08.1723-.146.2292-.1892a.8072.8072 0 0 1 .0624-.044c1.4976.4462 3.2026.5014 4.5489.4407a20.9787 20.9787 0 0 0 1.6869-.144c.2111-.027.3812-.0525.5013-.0722.06-.0099.1076-.0183.1419-.0249a1.1699 1.1699 0 0 0 .033-.0068l.0002.0003c.0194.0085.049.022.087.0392l.3181.1443c.265.12.6217.28.9867.4357.365.1556.7378.3069 1.0378.4102.15.0517.2812.0913.3875.1138.0531.0112.1.0184.1427.0197.0426.0012.0828.001.1273-.0281l.0095-.0062.0078-.0084c.1755-.19.183-.4255.0992-.6327-.0839-.2072-.2455-.4023-.4127-.5864-.1672-.1841-.3415-.3571-.45-.4989-.0542-.0709-.0909-.1342-.1043-.1783-.0118-.039-.0065-.053.0057-.0711a.2403.2403 0 0 1 .0505 0c.0583.0053.1458.0236.2484.0508.2052.0544.4736.1441.7421.2324.2685.0883.5367.1751.7497.2251.1065.025.1982.0413.2764.0422.0392.0004.0754-.0023.112-.0152.0365-.0128.0778-.0424.0956-.0875l.0008-.0022.0008-.0024c.0502-.1516-.0056-.3138-.0951-.4762-.0895-.1624-.2203-.3305-.3594-.4927-.1393-.1621-.287-.3178-.4093-.449-.1217-.1307-.2194-.2425-.2494-.2922-.062-.1099-.1004-.2568-.083-.3986.0174-.142.0849-.2801.2475-.3935.032-.0223.1324-.0749.2681-.14.1358-.0651.311-.1464.5108-.24.3995-.1873.8972-.425 1.3802-.6902.4829-.2653.9507-.5574 1.2937-.8589.3427-.3013.5755-.6187.5291-.948-.0722-.5354-.425-.9433-.8964-1.2494-.4714-.3061-1.0654-.5177-1.6504-.6716-.585-.1538-1.1615-.2492-1.5953-.3167-.217-.0337-.3984-.0603-.5251-.0835a1.5818 1.5818 0 0 1-.144-.0316h-.0003a4.2196 4.2196 0 0 1-.0003-.0878c.0006-.0827.0018-.1971 0-.3308-.0035-.2674-.0186-.612-.0746-.9416-.056-.3297-.1499-.6458-.3319-.8597-.1817-.2136-.4698-.3041-.8207-.1656-.2319.0867-.3625.2882-.4175.5189-.0551.231-.0452.4976-.0095.7594.0357.2618.0984.5187.155.7248.0568.206.1093.3695.1187.4113v.0003c.006.026.0051.0173-.0049.0254-.01.008-.0423.021-.0832.0246a.4074.4074 0 0 1-.126-.0098c-.0373-.0092-.0626-.0292-.0575-.023-.0078-.0095-.0375-.0606-.0695-.1286-.0319-.068-.0701-.1557-.1137-.2548-.087-.1982-.195-.4413-.3197-.67-.1247-.2286-.2647-.4431-.4283-.587-.0818-.0719-.171-.1269-.2695-.151a.4444.4444 0 0 0-.3064.0362l-.0016.0008-.0016.0014c-.2555.1408-.3929.3651-.449.607-.056.2417-.0374.502.0033.7437.0407.2416.1046.4659.1454.6286.0204.0813.0347.1484.0381.1867.0011.0127.0005.0142.0003.0181-.1823.114-.275.2937-.346.4789-.0744.194-.1365.397-.2634.5732l-.0006.0005-.0003.0006c-.0384.055-.1194.1045-.2464.1375-.127.033-.2952.049-.4908.0495-.3912.0008-.891-.059-1.412-.1419-1.042-.1656-2.1617-.4221-2.7331-.4567-.4299-.0254-.8375.1359-1.1459.2875-.1542.0759-.2843.15-.3764.1979a.8919.8919 0 0 1-.0957.0443c-.9968-.9934-3.013-2.6882-5.2499-3.2603-.6133-.1664-1.3873-.4945-2.015-.7794-.3138-.1425-.5914-.2741-.7958-.3697a11.373 11.373 0 0 0-.2481-.1138 1.4159 1.4159 0 0 0-.0776-.0316.3291.3291 0 0 0-.0305-.01C.132 5.7309.128 5.7286.121 5.7274zm22.6994 1.8353a.0621.0621 0 0 0-.0182.0046c-.0199.0086-.0256.0186-.0313.0268a.2303.2303 0 0 0-.026.0537c-.0158.0423-.033.1017-.0516.1754-.0371.1474-.0786.3496-.1137.5565-.0352.2068-.0639.4179-.0744.5845-.0052.0834-.0062.1552-.0002.2125a.3184.3184 0 0 0 .016.0764.106.106 0 0 0 .0475.0587.0745.0745 0 0 0 .0435.013.0789.0789 0 0 0 .043-.0176c.0206-.0163.031-.0348.0418-.0565.0218-.0434.0407-.1023.0598-.1757.0382-.1468.0746-.3488.1035-.5567.0289-.2078.0501-.421.0567-.5897.0033-.0843.0031-.157-.0022-.2145a.4137.4137 0 0 0-.0127-.0757.1082.1082 0 0 0-.036-.0587c-.0063-.006-.013-.0127-.0242-.0156a.061.061 0 0 0-.0214-.0014zm1.111.2114a.104.104 0 0 0-.0428.0075c-.0233.0095-.0431.024-.0645.0422-.0429.0365-.0908.0899-.1444.157-.107.1342-.2336.3218-.35.5178-.1162.196-.222.3999-.2864.5686-.0322.0844-.0545.1597-.0616.2246-.0071.0647-.0006.1294.051.1678.0286.0211.0674.015.0898.0035.0225-.0115.0403-.0275.0597-.0475.0388-.04.0812-.0975.1284-.1687.0944-.1424.2056-.3388.311-.5402a9.6877 9.6877 0 0 0 .2754-.5673 2.732 2.732 0 0 0 .0806-.2002.522.522 0 0 0 .0191-.0673A.1276.1276 0 0 0 24 7.8419c-.0002-.0112.0007-.0282-.0191-.0479l-.002-.0019-.0015-.0016a.0757.0757 0 0 0-.046-.0167zM19.5691 9.629c.1818 0 .3346.1698.3346.3876 0 .2177-.1528.3872-.3346.3872-.1817 0-.3345-.1695-.3345-.3872 0-.2178.1528-.3876.3345-.3876zm-.8823.3395c.0791.2909.1785.5128.35.6475.1629.128.3965.1727.6894.1813-.1803.129-.3447.1912-.4803.1751-.168-.0198-.3091-.1247-.414-.2686s-.1708-.3257-.1867-.483c-.011-.1075.0095-.1888.0416-.2523zm2.0906 1.7806c.0534-.0043.083.0061.0911.0138l.0084.0081.011.0041c.0068.0024.0032.0004.0055.002-.0108.016-.0496.0531-.1124.0929-.1312.083-.3492.1845-.5792.2778-.23.0933-.473.1791-.6578.2349-.059.0178-.098.0261-.1424.037.029-.0212.0513-.0392.0894-.0646a6.3595 6.3595 0 0 1 .5192-.306c.1948-.103.3971-.1968.5602-.2513.0816-.0272.1536-.0443.207-.0486zm.2406.4714a.0686.0686 0 0 1 .0248.0022c.0265.0305.0393.0587.0349.0964-.005.0422-.0289.0957-.0708.1538-.084.1161-.2354.2477-.3984.3667-.163.1191-.3378.2268-.4702.3027-.0483.0277-.0822.0454-.1165.0635.0153-.0296.029-.0579.0562-.0983.0782-.1163.1994-.266.3319-.409.1325-.1428.2771-.2796.4005-.3702.0617-.0453.1184-.0788.1624-.0962a.1569.1569 0 0 1 .0451-.0116z"/></svg>',
    tag:"Ubuntu + Xfce : léger, stable et hautement personnalisable.",
    site:"xubuntu.org", dl:"xubuntu.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"1 Go min., 2 Go conseillés (chiffres officiels Xubuntu)", disk:"8,6 Go min., 20 Go conseillés", cpu:"Processeur 64 bits Intel ou AMD ; un double cœur à 1,5 GHz conseillé pour un usage fluide"},
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
    id:"antix", name:"antiX", version:"26 Stephen Kapos", cat:"lightweight", color:"#7FBF3F", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#7FBF3F" stroke-width="3" stroke-linecap="round"><path d="M5 5l14 14M19 5L5 19"/></svg>',
    tag:"Sans systemd, ultra-frugal (~256 Mo RAM). Pour les machines vraiment vieilles.",
    site:"antixlinux.com", dl:"antixlinux.com/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"256 Mo min. pour l'édition complète, moins encore pour antiX-core", disk:"5 Go d'espace disque", cpu:"x86 ou x86_64 anciens — le projet cible explicitement les machines vraiment vieilles"},
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
    site:"puppylinux.com", dl:"puppylinux-woof-ce.github.io/download.html", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Debian/Ubuntu",
    req:{ram:"512 Mo conseillés — le système entier se charge en RAM, c'est elle qui compte, bien plus que le processeur", disk:"Aucun disque nécessaire : Puppy démarre depuis une clé ou un CD. Prévoir ~1,5 Go pour les variantes les plus complètes", cpu:"x86 ou x86_64, machines très anciennes comprises"},
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
    id:"tinycore", name:"Tiny Core Linux", version:"17.0", cat:"lightweight", color:"#4E4E4E", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#4E4E4E" stroke-width="1.6"><circle cx="12" cy="12" r="2.6" fill="#4E4E4E" stroke="none"/><ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/></svg>',
    tag:"Un bureau complet en ~20 Mo. Modulaire à l'extrême, tout se charge en RAM.",
    site:"tinycorelinux.net", dl:"tinycorelinux.net/downloads.html", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Avancé", base:"—",
    req:{ram:"46 Mo min. — le système refuse de démarrer en dessous ; 128 Mo et un peu de swap pour un usage bureau", disk:"Quelques dizaines de Mo : l'image Core fait 11 Mo, TinyCore 16 Mo, et le système réside en RAM", cpu:"i486DX minimum (chiffre officiel du projet) ; un Pentium 2 ou mieux pour un bureau confortable"},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" fill="#8DC63F"><path d="M12 21c-5-2-8-6-8-11 0-3 2-6 5-7 0 4 1 7 3 9 2-2 3-5 3-9 3 1 5 4 5 7 0 5-3 9-8 11z"/></svg>',
    tag:"Ubuntu minimaliste avec Moksha (fork d'Enlightenment). Léger mais très personnalisable.",
    site:"bodhilinux.com", dl:"www.bodhilinux.com/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"512 Mo min. (768 Mo en 64 bits, 1 Go conseillé) — l'installeur officiel tourne mais lentement à 512 Mo, le système une fois installé se comporte bien à ce niveau", disk:"5 Go min. (10 Go conseillés)", cpu:"500 MHz min. (1 GHz conseillé)"},
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
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#1793D1"><path d="M11.39.605C10.376 3.092 9.764 4.72 8.635 7.132c.693.734 1.543 1.589 2.923 2.554-1.484-.61-2.496-1.224-3.252-1.86C6.86 10.842 4.596 15.138 0 23.395c3.612-2.085 6.412-3.37 9.021-3.862a6.61 6.61 0 01-.171-1.547l.003-.115c.058-2.315 1.261-4.095 2.687-3.973 1.426.12 2.534 2.096 2.478 4.409a6.52 6.52 0 01-.146 1.243c2.58.505 5.352 1.787 8.914 3.844-.702-1.293-1.33-2.459-1.929-3.57-.943-.73-1.926-1.682-3.933-2.713 1.38.359 2.367.772 3.137 1.234-6.09-11.334-6.582-12.84-8.67-17.74zM22.898 21.36v-.623h-.234v-.084h.562v.084h-.234v.623h.331v-.707h.142l.167.5.034.107a2.26 2.26 0 01.038-.114l.17-.493H24v.707h-.091v-.593l-.206.593h-.084l-.205-.602v.602h-.091"/></svg>',
    tag:"Construis ton système from scratch. Contrôle total, rolling release. BTW.",
    site:"archlinux.org", dl:"archlinux.org/download", license:"Libre / Open-source", popular:true, isNew:false,
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
    id:"nixos", name:"NixOS", version:"26.05", cat:"advanced", color:"#5277C3", icon:"nixos",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#5277C3"><path d="M7.352 1.592l-1.364.002L5.32 2.75l1.557 2.713-3.137-.008-1.32 2.34H14.11l-1.353-2.332-3.192-.006-2.214-3.865zm6.175 0l-2.687.025 5.846 10.127 1.341-2.34-1.59-2.765 2.24-3.85-.683-1.182h-1.336l-1.57 2.705-1.56-2.72zm6.887 4.195l-5.846 10.125 2.696-.008 1.601-2.76 4.453.016.682-1.183-.666-1.157-3.13-.008L21.778 8.1l-1.365-2.313zM9.432 8.086l-2.696.008-1.601 2.76-4.453-.016L0 12.02l.666 1.157 3.13.008-1.575 2.71 1.365 2.315L9.432 8.086zM7.33 12.25l-.006.01-.002-.004-1.342 2.34 1.59 2.765-2.24 3.85.684 1.182H7.35l.004-.006h.001l1.567-2.698 1.558 2.72 2.688-.026-.004-.006h.01L7.33 12.25zm2.55 3.93l1.354 2.332 3.192.006 2.215 3.865 1.363-.002.668-1.156-1.557-2.713 3.137.008 1.32-2.34H9.881Z"/></svg>',
    tag:"Config déclarative & reproductible. Ton système entier dans un seul fichier.",
    site:"nixos.org", dl:"nixos.org/download", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~25 min", diff:"Expert", base:"—",
    req:{ram:"2 Go pour le mode minimal en ligne de commande (fonctionne de façon fiable) ; l'installateur graphique Calamares exige au moins 3 Go (officiel) ; 4 Go conseillés pour un bureau complet GNOME/KDE", disk:"20 Go min., mais /nix/store conserve les anciennes générations : prévoir plus large avec le temps (30-60 Go pour un usage desktop selon les retours communautaires)", cpu:"x86_64 — paquets binaires récupérés depuis le cache officiel ; la compilation locale n'intervient que pour un paquet absent du cache"},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#7F3FBF"><path d="M14.03 2.036v.002C13.303 2.138 0 18.46 0 18.46s.957.272 3.135.588c0 0 10.435-17.061 10.904-17.008-.001 0-.01-.006-.01-.004zM3.135 19.048c-.95 1.562-1.71 2.818-1.71 2.818s10.218.46 18.165-.606c11.308-1.516-2.324-15.96-5.537-19.214 2.542 3.36 13.473 17.751 2.459 17.937-3.89.066-13.377-.935-13.377-.935zm10.906-17.01v.002c.022.01 0 .002 0-.002zm-.037.797c-.055.073-.09.112-.156.205a61.39 61.39 0 0 0-1.285 1.9 356.805 356.805 0 0 0-3.723 5.842c-2.448 3.908-4.467 7.208-4.846 7.826 1.034.107 8.948.935 12.508.875 1.322-.022 2.274-.26 2.926-.623.652-.363 1.022-.839 1.228-1.447.413-1.217.063-3.047-.753-5.018-1.537-3.711-4.485-7.686-5.899-9.56z"/></svg>',
    tag:"Arch presque pur, avec un installeur. Le pont idéal vers le vanilla Arch.",
    site:"endeavouros.com", dl:"endeavouros.com/latest-release", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Arch",
    req:{ram:"4 Go (officiel endeavouros.com) ; les environnements légers (Xfce, LXQt, i3) fonctionnent avec 2 Go", disk:"15 Go min. (officiel endeavouros.com)", cpu:"x86_64, paquets binaires préconstruits (aucune compilation)"},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#478061"><path d="M15.818 12a3.82 3.82 0 0 1-3.82 3.82A3.82 3.82 0 0 1 8.178 12a3.82 3.82 0 0 1 3.82-3.82 3.82 3.82 0 0 1 3.82 3.82Zm3.179 9.73-2.726-2.725A8.212 8.212 0 0 1 12 20.212 8.212 8.212 0 0 1 3.788 12a8.212 8.212 0 0 1 1.209-4.269l-2.73-2.73A12 12 0 0 0 0 12c0 6.627 5.373 12 12 12a12 12 0 0 0 6.997-2.27zM12 0a12 12 0 0 0-6.997 2.27L7.73 4.994A8.212 8.212 0 0 1 12 3.788 8.212 8.212 0 0 1 20.212 12a8.212 8.212 0 0 1-1.209 4.269l2.73 2.73A12 12 0 0 0 24 12c0-6.627-5.373-12-12-12Z"/></svg>',
    tag:"Indépendante, sans systemd. Runit + XBPS, rolling maîtrisée.",
    site:"voidlinux.org", dl:"voidlinux.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~30 min", diff:"Avancé", base:"—",
    req:{ram:"96 Mo min. pour le système de base (officiel Void Handbook) ; les images graphiques (Xfce, etc.) demandent nettement plus, sans chiffre officiel précis", disk:"700 Mo min. pour le système de base (officiel) ; largement plus pour une image graphique complète", cpu:"x86_64, paquets binaires via xbps (la compilation par xbps-src reste optionnelle)"},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#54487A"><path d="M9.94 0a7.31 7.31 0 00-1.26.116c-4.344.795-7.4 4.555-7.661 7.031-.126 1.215.53 2.125.89 2.526.977 1.085 2.924 1.914 4.175 2.601-1.81 1.543-2.64 2.296-3.457 3.154C1.403 16.712.543 18.125.54 19.138c0 .325-.053 1.365.371 2.187.16.309.613 1.338 1.98 2.109.874.494 2.119.675 3.337.501 3.772-.538 8.823-3.737 12.427-6.716 2.297-1.9 3.977-3.739 4.462-4.644.39-.731.434-2.043.207-2.866-.645-2.337-5.887-7.125-10.172-9.051A7.824 7.824 0 009.94 0zm-.008.068a7.4 7.4 0 013.344.755c3.46 1.7 9.308 6.482 9.739 8.886.534 2.972-9.931 11.017-16.297 12.272-2.47.485-4.576.618-5.537-1.99-.832-2.262.783-3.916 3.16-6.09a92.546 92.546 0 012.96-2.576c.065-.069-5.706-2.059-5.89-4.343C1.221 4.634 4.938.3 9.697.076c.08-.004.157-.007.235-.008zm-.112.52a5.647 5.647 0 00-.506.032c-2.337.245-2.785.547-4.903 2.149-.71.537-2.016 1.844-2.35 3.393-.128.59.024 1.1.448 1.458 1.36 1.144 3.639 2.072 5.509 2.97.547.263.185.74-.698 1.505-2.227 1.928-5.24 4.276-5.45 6.066-.099.842.19 1.988 1.213 2.574 1.195.685 3.676.238 5.333-.379 2.422-.902 5.602-2.892 8.127-4.848 2.625-2.034 5.067-4.617 5.188-5.038.148-.517.133-.996-.154-1.546-.448-.862-1.049-1.503-1.694-2.22-1.732-1.825-3.563-3.43-5.754-4.658C12.694 1.242 11.417.564 9.82.588zm1.075 3.623c.546 0 1.176.173 1.853.5 1.688.817 3.422 2.961-.015 4.195-.935.336-3.9-.824-3.81-2.407.09-1.57.854-2.289 1.972-2.288zm.285 1.367c-.317-.002-.575.079-.694.263-.557.861-.303 1.472.212 1.862.192-.457 2.156.043 2.148.472a.32.32 0 00.055-.032c1.704-1.282-.472-2.557-1.72-2.565z"/></svg>',
    tag:"Tout compiler depuis les sources. Optimisations chirurgicales, apprentissage total.",
    site:"gentoo.org", dl:"gentoo.org/downloads", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~2-6 h", diff:"Expert", base:"—",
    req:{ram:"140 Mo min. pour amorcer l'ISO minimale (officiel Gentoo Handbook) ; au moins 2 Go pour le LiveGUI KDE — en pratique, prévoir bien plus pour compiler dans des délais raisonnables", disk:"40 Go conseillés pour la partition racine (officiel Gentoo Handbook) — le stockage des sources et du cache de compilation s'ajoute", cpu:"x86_64 — système construit depuis les sources : prévoir un CPU rapide et plusieurs heures pour la compilation initiale"},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#333333"><path d="M12.924 1.228c-.584-.01-1.251 0-1.485.027-2.46.282-4.138 1.3-4.753 2.891-.218.552-.274 1.002-.243 1.772.048 1.21.419 2.004 1.262 2.742 1.225 1.06 2.98 1.508 5.998 1.508 2.737 0 3.71.413 3.916 1.675.313 1.867-1.57 3.07-4.414 2.827-1.878-.16-3.496-.912-4.223-1.967a7.772 7.772 0 01-.355-.62c-.382-.76-.64-.978-1.176-.978-.43.005-.732.165-.918.494l-.133.24v4.03l.137.296c.165.344.4.546.744.63.35.09.794-.036 1.42-.402l.5-.29.826.185c1.82.403 2.75.523 4.065.523 1.103.005 1.548-.046 2.455-.285 1.124-.297 1.974-.785 2.717-1.57.8-.844 1.15-1.853 1.097-3.147-.069-1.628-.695-2.698-2-3.414-.96-.525-2.292-.79-4.377-.88-2.042-.086-2.794-.155-3.515-.32-.51-.12-.785-.25-1.076-.515-.653-.589-.59-1.755.136-2.482.642-.637 1.511-.928 2.774-.928 1.432.005 2.393.27 3.412.955.185.127.721.62 1.193 1.092.886.902 1.135 1.082 1.506 1.082.244 0 .59-.163.732-.344.26-.329.303-.63.303-2.2 0-1.66-.043-1.91-.377-2.282-.387-.425-.848-.42-1.75.031l-.59.297-.63-.17c-1.496-.392-2.038-.477-3.178-.504zM0 13.775v9h24v-1H1v-8z"/></svg>',
    tag:"La plus ancienne distribution encore active (1993). Unix-like, pas de dépendances auto.",
    site:"slackware.com", dl:"slackware.com/getslack", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~30 min", diff:"Avancé", base:"—",
    req:{ram:"64 Mo min. (officiel slackware.com), 1 Go+ conseillé en pratique", disk:"5 Go+ conseillés pour une installation complète (officiel slackware.com)", cpu:"x86_64, paquets binaires (les SlackBuilds, qui compilent, restent optionnels)"},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#20B1F2"><path d="M12 0L7.873 8.462l11.358 6.363zM6.626 11.018L.295 24l18.788-7.762zm13.846 6.352l-5.926 3.402L23.706 24Z"/></svg>',
    tag:"Arch Linux sans systemd. Choix entre OpenRC, runit ou s6 comme init.",
    site:"artixlinux.org", dl:"artixlinux.org/download.php", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~30 min", diff:"Avancé", base:"Arch",
    req:{ram:"300 Mo pour l'édition « low memory » en CLI (base sans systemd) — nettement plus avec un environnement de bureau complet", disk:"20 Go conseillés pour une installation desktop complète (pas de minimum strict publié par le projet)", cpu:"x86_64, paquets binaires préconstruits (aucune compilation)"},
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
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#C0392B"><path d="M23.682 2.406c-.001-.149-.097-.187-.24-.189h-.25v.659h.108v-.282h.102l.17.282h.122l-.184-.29c.102-.012.175-.065.172-.18zm-.382.096v-.193h.13c.06-.002.145.011.143.089.005.09-.08.107-.153.103h-.12zM21.851 1.49c1.172 1.171-2.077 6.319-2.626 6.869-.549.548-1.944.044-3.115-1.128-1.172-1.171-1.676-2.566-1.127-3.115.549-.55 5.697-3.798 6.868-2.626zM1.652 6.61C.626 4.818-.544 2.215.276 1.395c.81-.81 3.355.319 5.144 1.334A11.003 11.003 0 0 0 1.652 6.61zm18.95.418a10.584 10.584 0 0 1 1.368 5.218c0 5.874-4.762 10.636-10.637 10.636C5.459 22.882.697 18.12.697 12.246.697 6.371 5.459 1.61 11.333 1.61c1.771 0 3.441.433 4.909 1.199-.361.201-.69.398-.969.574-.428-.077-.778-.017-.998.202-.402.402-.269 1.245.263 2.2.273.539.701 1.124 1.25 1.674.103.104.208.202.315.297 1.519 1.446 3.205 2.111 3.829 1.486.267-.267.297-.728.132-1.287.167-.27.35-.584.538-.927zm2.814-5.088c-.322 0-.584.266-.584.595s.261.595.584.595c.323 0 .584-.266.584-.595s-.261-.595-.584-.595zm0 1.087c-.252 0-.457-.22-.457-.492s.204-.492.457-.492c.252 0 .457.22.457.492s-.204.492-.457.492z"/></svg>',
    tag:"Pas Linux, mais Unix pur. Réputé serveur, réseau et stabilité extrême.",
    site:"freebsd.org", dl:"www.freebsd.org/where", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~25 min", diff:"Avancé", base:"BSD",
    req:{ram:"96 Mo min. pour un usage minimal/embarqué (4 Go+ conseillés pour un usage bureau graphique)", disk:"1,5 Go techniquement suffisant, mais 4 Go réalistes sans interface graphique, 8 Go+ avec", cpu:"amd64, ARM ou autres architectures selon le port"},
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
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#F5CA13"><path d="M13.695 1.653c-.202.47-.146 1.02-.293 1.509-.034.112-.146.452-.308.429-.333-.048-.16-.688-.545-.7l.12.934c-.577.073-.498-.829-.733-1.195-.27-.423-.335.192-.317.38.011.122.036.242.05.363.026.21.032.393.005.603-.552-.007-.35-.733-.754-.844l.03.874c-.612-.005-.89-.557-1.159-1.025-.112-.196-.261-.574-.53-.453.126.544.423 1.064.454 1.63.007.145-.13.516-.333.448-.469-.158-.406-1.008-.796-1.231-.08-.045-.204-.006-.29-.002 0 .45.198.996.356 1.418.034.09.129.41-.069.403-.353-.01-.441-.695-.8-.615.044.185.153.335.215.513.037.109.106.219.126.332.044.247-.269.267-.432.22-.384-.114-.66-.428-.935-.703-.076-.076-.277-.344-.404-.222-.141.135.136.373.215.464.234.271.488.589.6.935.049.148.058.36-.09.462-.146.1-.384-.083-.502-.16-.362-.239-.721-.654-1.176-.664l-.107.271.29.392.752.845-.875-.362c.035.229.583.506.475.742-.064.14-.38.142-.505.124-.446-.064-.762-.396-1.177-.515-.366-.105-.298.18-.09.343.072.057.141.117.211.177.125.108.245.219.362.336.183.183.343.378.513.573l-.875-.03v.06l.845.392-.151.603c-.244 0-.442-.067-.664-.163-.151-.066-.31-.175-.482-.163-.206.014-.328.202-.19.377.206.263.62.412.883.617.1.078.247.212.133.345-.225.264-.832-.074-1.128.013v.06c.275.161.839.253 1 .549.128.231-.232.756-.487.736-.227-.019-.436-.275-.603-.41-.401-.322-.83-.7-1.298-.923-.801-.38-1.597.226-2.232.622.081.256.402-.017.603.029.271.061.477.313.651.513.84.968 1.543 2.064 1.857 3.319.083.33.224.725-.023 1.021-.066.08-.165.09-.238.155-.055.05-.052.118.023.141.138.043.34-.021.475-.054.443-.107.949-.346 1.15-.78.125-.271.169-.797.48-.905.068.29.394.673.363.965-.029.259-.302.56-.461.751-.057.068-.193.217-.112.315.082.097.25-.112.3-.16.229-.216.73-.558.865-.062.118.432-.261 1.13-.45 1.509-.054.105-.297.435-.202.553.11.135.338-.218.387-.282.19-.249.856-.987 1.21-.722.431.324.282.555.119.994-.046.123-.216.433-.1.55.111.114.258.01.315-.098.104-.197.383-.78.661-.631.175.093.441.251.543.425.158.272.02.815-.022 1.111-.024.17-.207.702-.055.825.14.113.254-.228.296-.312.149-.295.32-.597.54-.845.08-.089.192-.237.327-.212.7.131-.015.829.273 1.185.058.072.215.067.3.083l.362-.935c.184.07.455.095.591.248.114.128.137.344.17.506.092.454.142.896.084 1.357.057.042.148.138.225.088.097-.062.11-.315.143-.42.106-.332.269-.65.42-.965.099-.207.37-.427.565-.142.2.292.12.804.246 1.138.32-.158.355-.825.362-1.147l.415.061.25.513.45 1.297c.234-.09.16-.538.187-.754.035-.293.103-.882.318-1.1.086-.087.258-.095.37-.137.129.312.199.666.354.965.06.116.198.242.337.17.133-.068.128-.224.111-.35-.042-.313-.113-.62-.138-.936.598-.042.95.441 1.325.845.145.155.271.362.485.422l-.31-.905-.172-.845c.217-.09.676-.534.905-.47.34.097.6 1.046 1.023.823.18-.095.088-.257.003-.383-.126-.188-.506-.639-.465-.874.03-.175.324-.379.494-.377.391.006 1.071.304 1.297.618l.272-.03c-.04-.54-.85-.787-.966-1.328a.404.404 0 01.004-.172c.086-.347.294-.195.51-.102.067.029.213.103.269.02.06-.091-.048-.212-.087-.289-.082-.156-.156-.337-.122-.513.282.074.455.242.694.4.056.038.18.131.251.08.075-.056-.036-.167-.071-.208-.106-.123-.432-.42-.4-.6.022-.122.227-.252.31-.335.276-.276.59-.556.815-.875h.03c.532.621 2.203.186 1.99-.754-.132.019-.256.123-.392.077-.594-.205-.45-1.157-1.116-1.163-.049-.62-.298-1.24-.599-1.78-.138-.247-.424-.473-.525-.725-.055-.14-.046-.36-.052-.512.349-.054.177-.407.05-.603-.142-.218-.292-.477-.475-.66-.226-.227-.562-.374-.533-.758.027-.357.642-.311.747-.633-.183.008-.363.053-.543.083-.449.075-.527-.076-.317-.475.183-.349.474-.613.73-.905.083-.093.336-.306.205-.441-.107-.112-.286.058-.377.119-.333.22-.705.384-1.086.502-.113.035-.448.166-.486-.035-.051-.272.463-.322.395-.628-.205.049-.61.374-.807.223-.238-.18.111-.643.149-.856.038-.216-.136-.224-.258-.09-.043.048-.081.1-.12.15-.07.087-.126.17-.17.271-.494-.288.44-.623.265-.89-.063-.095-.179 0-.235.05-.117.102-.558.61-.654.237-.106-.412.108-.908.22-1.297.028-.102.159-.376.032-.449-.185-.106-.266.253-.31.359a2.333 2.333 0 01-.615.839c-.086.077-.232.225-.36.19-.187-.051-.188-.57-.182-.728.003-.075.045-.205-.028-.26-.096-.071-.147.072-.16.14-.048.222-.186.856-.515.44-.298-.376.163-1.157-.444-1.315l-.332 1.056c-.398-.087-.31-.656-.211-.966l-.181-.06a3.303 3.303 0 01-.112.362c-.16.451-.375.539-.541.03-.127-.388-.082-.807-.145-1.207-.025-.159-.04-.32-.198-.392zm.03.905c.153.364-.008.82.237 1.176.25.364.716.168 1.02.397.108.081.022.256-.007.358-.1.347-.278.604-.465.905.655-.335.875-1.29.965-1.96h.03c-.026.596-.007 1.182 0 1.779.003.27-.037.582.272.633V4.46c.323.093.808.502 1.159.381.179-.061.342-.277.467-.411.094-.102.175-.212.244-.332h.03l-.12.965-.302-.06.663.473.261.226-.2.294-.875.636c.637-.094.958-.564 1.418-.935-.15.63-.491 1.262-.332 1.93h.03l.362-1.448c.274.13.37.476.633.633.383.228.919-.204 1.267-.331-.227.322-.57.548-.633.965l-.272-.12c.236.606.519 1.19.62 1.84.093.594-.024 1.183.016 1.78.02.275.133.517.179.784-.563.191-.666.98-1.207 1.236.043-.188.11-.377.11-.573 0-.14-.066-.282-.03-.422.073-.277.314-.508.412-.784.152-.43.05-.835-.009-1.267l.301.03-.758-1.177-.376-.573.139-.392c-.762.586-1.867 1.188-1.87 2.293l.271-.091.09.664-.422.06v.06c.353.1.722.149 1.056.306.244.114.514.265.682.479.56.71.112 1.818-.31 2.473-.213.33-.594.634-.734.996.382-.092.577-.457.792-.754.091-.127.17-.303.325-.362.24-.09.32.354.371.512.065.2.218.546.18.755-.071.401-.415.662-.34 1.116.166-.202.217-.604.482-.702.17-.062.347.095.513.12.36.053.73-.082.996-.326.285-.263.48-.686.408-1.083-.043-.24-.177-.476-.16-.724.012-.2.148-.362.22-.543.173-.427.152-.912-.257-1.189a.86.86 0 00-.362-.138c.033-.222.264-.706.53-.418.188.202.29.558.396.81.389.918.392 2.006-.163 2.865-.394.61-1.02 1.11-1.548 1.6l-.21-.604h-.061c-.07.36.185.772.332 1.086-.33-.075-.645-.415-.996-.362.099.17.748.572.242.754.003.148-.11.25-.2.362-.201.248-.454.618-.766.724l-.573-1.508h-.03c.084.661.314 1.305.61 1.9.154.307.403.611.506.935-.187-.159-.306-.413-.466-.603a6.313 6.313 0 00-.952-.892c-.227-.177-.45-.376-.754-.345.345.31.868.475.835 1.056-.01.165-.193.237-.322.296-.339.155-.67.322-1.026.438-.098.032-.279.12-.382.087-.11-.037-.097-.277-.109-.369-.037-.285.121-1.028-.172-1.146-.128 1.01.132 1.929.21 2.926h-.03c-.17-.737-.439-1.558-.838-2.202-.11-.177-.343-.597-.579-.543l.62 1.086.013.46-.452.08-1.297.033c.047-.373.13-.746.2-1.116.014-.081.074-.326-.078-.326-.14 0-.169.408-.189.507-.108.542-.204 1.106-.205 1.66h-.03c0-.913-.41-1.73-.784-2.535-.104.155.041.377.086.543.099.371.113.737.065 1.116-.612-.118-1.275-.278-1.84-.543.149-.357.576-.889.573-1.267-.554.556-.804 1.335-1.086 2.052h-.03l.12-1.448-.21-1.237c-.132.133-.06.399-.04.573.033.275.015.688-.188.9-.112.117-.226.014-.346-.034-.335-.136-.582-.36-.875-.564-.104-.072-.293-.15-.28-.302.032-.433.656-.638.672-1.026-.72.31-1.062 1.088-1.629 1.57.186-.785.782-1.703.634-2.535-.152.084-.145.295-.185.453a4.324 4.324 0 01-.388.965c-.4-.231-.72-.623-.983-.996-.073-.102-.233-.26-.235-.392-.002-.128.145-.274.225-.362.244-.265.54-.465.872-.603-.237-.147-.706.2-.965.272.175-.37.65-.732.513-1.177-.393.307-.66.97-.935 1.388h-.03l-.574-1.267.754.271c.023-.27-.36-.373-.573-.422.126-.328.476-.578.392-.965h-.06c-.087.28-.269.759-.573.844l-.09-.482h-.03c-.119.253.029.447-.04.687-.037.125-.217.106-.28.222-.085.158-.092.37-.164.539-.172.407-.5.706-.904.874l-.037-.54.459-.515-.483.361c-.062-.161-.203-.465-.12-.633.073-.145.254-.24.362-.362l-.483.241c-.163-.422.135-.3.302-.603-.122.07-.325.2-.471.133-.187-.085-.384-.64-.464-.827l.512-.09v-.03c-.242.03-.626.12-.663-.211h.633v-.03l-.712-.08-.194-.252-.421-.543c.251-.075.683-.075.935 0-.368-.387-1.024.182-1.327-.453l.754-.15v-.03c-.234 0-.67.135-.874.028-.054-.028-.094-.075-.134-.12-.388-.438.48-.478.766-.44.55.076.975.452 1.358.833.194.193.473.538.754.595.278.055.51-.122.724-.263 0 .212-.022.422.15.573 0-.416.005-.857.07-1.267.023-.152.083-.352.263-.38.225-.034.531.309.693.44.002-.234-.175-.432-.319-.603-.396-.47-1.025-.914-1.58-1.177v-.03c.823.142 1.442.625 2.322.392v-.06l-1.026-.15c.043-.321.276-.734.203-1.057-.1-.44-.568-.644-.746-1.025.306.118.63.29.966.297.188.005.336-.098.512-.14.485-.113.766.123 1.086.446.088-.305-.15-.559-.334-.784-.186-.229-.35-.46-.57-.659-.267-.24-.662-.52-.815-.85.25.049.49.256.694.402.359.255.715.503 1.116.691.211.1.578.265.754.054l-.965-.362c.07-.101.17-.188.221-.302.138-.307-.104-.568-.191-.844.185.068.345.227.543.26.464.078.734-.47 1.086-.653L9.11 6.45c.201-.168.112-.494.078-.724-.099-.664-.493-1.251-.59-1.9h.03c.381.816.835 1.696 1.598 2.201l-.277-.363-.477-.723c.095-.037.188-.077.269-.142.528-.423.078-1.012.002-1.517h.03c.065.155.14.314.235.453.441.638 1.023.536 1.696.482l-.18 1.328h.03c.089-.283.258-.516.318-.815.11-.544-.006-1.084-.017-1.629h.03c.048.322.179.63.282.936.162.482.293 1.01.653 1.387l-.331-1.357c.958-.001 1.219-.647 1.236-1.509zm-.271 2.082l-.483 2.172c.372-.227.45-1.053.483-1.448h.03c.065.348.096.696.238 1.025.056.13.117.305.275.302l-.386-1.357zm-2.956.392c.006.771.387 1.473.24 2.262.146-.088.15-.295.152-.452.004-.365-.06-.723-.06-1.086h.03c.105.364.39 1.09.814 1.146-.05-.196-.211-.344-.319-.513-.238-.374-.472-1.13-.857-1.357zm6.184.332c-.336.526-.736 1.245-1.237 1.629v.03c.38-.068.791-.549.905-.905h.03c-.005.536-.251 1.105-.03 1.629h.03c.16-.543.077-1.184.215-1.75.043-.177.203-.473.087-.633zM14.69 6.57c-.178.402-.265.775-.634 1.056v.06c.265.07.45-.262.513-.482h.03c.026.203.05.624.272.694l-.149-.694zm-6.456.03c.065.743 1.063 1.244.935 2.052.16-.094.119-.269.065-.423-.112-.317-.298-.596-.427-.905.289.264.716.562 1.117.393l-.633-.263zm4.163.242c-.091.3-.347.886-.241 1.176h.06l.211-.724h.03c.075.273.153.687.483.724l-.483-1.176zm-2.021.754l.15 1.267h.061l-.03-.905c.197.137.463.474.724.362-.1-.11-.247-.129-.362-.222-.187-.151-.286-.482-.543-.502zm6.636.18c-.318.32-.584.539-1.025.664v.061c.261.075.514-.07.724-.211-.035.177-.26.64-.09.754l.289-.875zm1.539.624c.138.01.242.186.323.282.239.279.508.575.612.935-.697-.144-1.452-.045-2.142.12.154-.405.446-.834.785-1.1.115-.092.258-.25.422-.237zm-6.697.07l-.181.936c.151-.115.187-.481.211-.664l.272.302a1.058 1.058 0 00-.302-.573zm2.956.091l-.573.573.543-.392.09.543c.106-.154.05-.578-.06-.724zm-6.334.078a.252.252 0 00-.06.013v.03c.253.256.463.61.621.935.088.179.063.376.253.483-.015-.353-.166-.62-.302-.935.214.124.5.31.754.24v-.06c-.342-.152-.607-.281-.905-.518-.11-.088-.224-.2-.361-.188zm-2.082.284c.029.255.237.35.422.49a3.5 3.5 0 01.687.657c.127.166.205.452.37.573-.036-.444-.298-.966-.725-1.147v-.03c.434.084.867.246 1.297.06v-.06l-.513-.02zm14.027.09c.296.115.613.522.724.815l-.664-.09zm-7.3.03l-.271.514.301-.332.181.302zm5.95.712a.536.536 0 01.172.031c.365.143.267.9.19 1.188-.061.234-.17.495-.4.604-.167-.3-.415-.496-.724-.64-.154-.073-.41-.101-.517-.243-.103-.137-.208-.646-.068-.78.152-.147.57-.117.766-.117.163 0 .392-.051.581-.043zm-3.054.013l-.513.392.453-.241-.06.362c.128-.09.175-.371.12-.513zm4.404.18c.136.011.37-.002.47.1.331.34.145 1.25-.259 1.44l-.12-.695c.032.002.062 0 .09-.003v.003h.09l-.04-.013c.356-.085.295-.577-.051-.59l-.09-.03.049.032-.018.001v-.003h-.06l.01.011c-.023.005-.046.01-.071.02zm-1.538.122c-.062.063-.152.11-.198.187-.318.545.886.559.546-.03-.039-.068-.108-.111-.167-.157l-.121.06h-.06zm-6.335.12c0 .154-.03.31.12.392v-.301l.363.12zm-1.676.086c-.046.002-.092.005-.134.005.053.194.137.36.302.482l-.181-.392.362.03c-.07-.127-.211-.131-.349-.125zm3.685.011c-.09.01-.168.168-.169.325l.15-.271.182.12c-.05-.132-.109-.18-.163-.174zm-4.845.084l-.513.09.423.513-.241-.422.361-.06zm-2.655.42c-.307.013-.66.365-.904.515v.06l.875.302c-.018-.229-.315-.297-.513-.331l.603-.544a.386.386 0 00-.06-.002zm1.6.063l-1.237.332v.06l.663.238.393.275c-.043-.32-.383-.375-.604-.543.28-.053.66-.058.785-.362zm3.107.332c-.129.02-.23.12-.091.21zm.995.18l-.03.212c.094-.056.11-.105.09-.211zm1.357 0c-.117.035-.214.118-.09.212zm1.117.302l-.302.09v.121zm1.146.03v.362c.113-.11.113-.25 0-.362zm4.272.179c.425.004.846.395.75.847-.062.29-.242.605-.528.718-.149.06-.486.04-.498-.175-.01-.2.388-.478.468-.694-.558.427-.9.79-1.659.694v-.03c.447-.331.634-.895 1.059-1.224a.645.645 0 01.408-.136zm-9.943.032c-.146.076-.235.236-.272.393l.362.09-.2-.193zm-4.585.061l-1.147.603c.04.225.262.104.423.093.23-.015.657.06.784.27l.211-.03c-.054-.342-.546-.342-.814-.363.197-.2.48-.259.543-.573zm5.822.241l-.332.423.422.15-.302-.18c.063-.132.31-.247.212-.393zm-2.625.09l-.362.333c.142.047.468.233.573.09l-.392-.15zm7.813 0l.422.333v.06l-.392.211a.938.938 0 00.543-.211.883.883 0 00-.573-.392zm-9.683.121c-.183.41-.464.743-.784 1.056-.184.179-.471.346-.543.603L7.45 13.8l.694-.14c-.414-.296-1.14.033-1.539.21.275-.55.813-.769.935-1.418l-.03-.03zm5.701.03c-.13.043-.146.149-.18.272l.18.03zm1.237.212l.03.332a.503.503 0 00.272-.332l-.212.15zm-4.193.422c-.13.038-.2.131-.06.211zm5.34.181l-.031.422-.271-.18c.028.182.156.27.332.3l.03-.542zm-6.758.03c-.22.069-.596.692-.694.905.2-.008.895.018.996-.12l-.664-.091zm3.7.059c-.166.01-.327.105-.502.105-.507 0-1.34-.252-1.775.092-.396.314-.42.734-.669 1.132-.121.194-.336.325-.512.465-.065.052-.184.127-.159.227.03.122.238.187.34.233.228.105.477.187.724.238.131.027.328.022.44.103.204.148.135.653.163.876.227-.13.524-.52.633-.755-.241.073-.347.31-.513.483l-.09-.633c.705-.062 1.015-.833 1.43-1.296.253-.282.57-.405.893-.575-.19-.227-.455.013-.634.15-.479.37-.755.816-1.176 1.238l.241-.633h-.03c-.131.314-.288.65-.603.814l.12-.422h-.03c-.127.303-.27.452-.603.452l.301-.694h-.03l-.392.664-.12-.03.301-.573h-.03c-.152.244-.313.59-.633.512l.27-.512c-.15.118-.216.4-.394.471-.081.032-.235-.027-.202-.135.042-.14.272-.278.363-.397.31-.405.56-1.067 1.018-1.316.376-.205.947.054 1.358.05.235-.004.503-.084.573-.333a.427.427 0 00-.072-.001zm-7.591.092l-.03.181.12-.181zm14.875.029c.228.004.48.037.61.214.133.18.101.427.17.632.052-.216.046-1.024.477-.57.349.367.256 1.162-.087 1.502-.216.213-.735.343-.992.144-.393-.303-.494-.926-.608-1.378-.027-.109-.154-.36-.084-.461.058-.086.209-.08.3-.082.065 0 .138-.002.214-.001zm2.65.182c.569.103.615.907 1.117 1.147v.06c-.285.143-.38-.002-.573-.211l.211.392c-.233-.036-.283-.262-.422-.423l.21.453c-.346 0-.493-.057-.633-.392h-.03l.06.271-.214-.152.114-.39zm-4.735.03c-.123.036-.188.105-.09.212zm-4.163.242l.332.362.15-.362-.15.241zm3.047 0l-.03.452-.302-.18c-.017.198.288.424.453.512l-.06-.784zm-8.175.512c-.094.452-.417.859-.707 1.207-.138.166-.35.333-.41.543.5-.144 1.063-.652 1.6-.603-.138-.268-.783.103-1.026.15.196-.29.463-.542.59-.874.052-.14.086-.327-.047-.423zm6.998.272c-.23.036-.218.264-.271.452-.128-.127-.258-.303-.452-.271l.573.694zm-2.805.03l-.302.272-.03-.151h-.09l.03.392c.176-.03.358-.347.392-.513zm.815.483l-.151.392h-.03l-.242-.332.211.694h.03c.08-.202.365-.572.182-.754zm3.348.18l-.09.031.18.995c-.192-.168-.785-.942-1.025-.663.555.177.786.825 1.267 1.116l-.15-.573zm1.508.242c-.153.374.22.775.362 1.116-.392-.202-.74-.539-1.207-.543v.12c.672.06 1.03.747 1.569 1.057-.005-.563-.488-1.21-.664-1.75zm-6.123.453l-.212.03c.072.169.197.306.256.482.065.196.023.466.227.573.095-.212.327-.557.271-.784-.17.085-.252.268-.27.453h-.031zm-2.806.03c0 .592-.08 1.148-.241 1.72.21.007.32-.211.433-.363.225-.299.45-.628.804-.784v-.03c-.359-.047-.807.49-.935.784h-.03c.106-.41.2-.924.03-1.327zm5.31.03c-.244.093-.182.42-.182.633l-.693-.482c.038.123.136.16.228.245.18.167.337.557.586.6zm1.538.573c-.213.377.097 1.154.15 1.569h-.03c-.168-.355-.492-.649-.754-.935-.037-.04-.228-.301-.296-.192-.071.114.278.385.343.463.241.286.459.609.642.935.105.189.197.44.397.543-.15-.778-.39-1.586-.392-2.383zm-10.045.302c.223.066.35.219.362.452l-.694.483zm5.007.24l-.03.031c.147.405.293.742.364 1.177.034.202.013.465.179.603.17-.322.23-.695.385-1.026.09-.19.234-.356.188-.573-.29.143-.461.787-.543 1.086-.15-.399-.104-1.092-.543-1.297zm2.051.303c.341.677.594 1.314.785 2.05.212-.118.183-.329.18-.542-.005-.497.186-.99.152-1.478-.143.048-.168.194-.193.332-.06.329-.06.669-.14.995-.163-.38-.293-1.279-.784-1.357zm6.365.24l.453.665-.664-.302zM8.657 19.18c.647.057.205.652-.06.935zm8.296.724l.272.845c-.224-.157-.488-.414-.604-.664zm-5.502.455l.344.058-.272.965h-.03l-.06-.754zm2.85.174c.062 0 .121.013.169.053.163.138-.067.805-.141.977l-.332-.965c.086-.022.2-.063.304-.065Z"/></svg>',
    tag:"Sécurité paranoïaque par défaut. Auteurs d'OpenSSH, LibreSSL, pf. Code audité ligne à ligne.",
    site:"openbsd.org", dl:"www.openbsd.org/faq/faq4.html#Download", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~15 min", diff:"Avancé", base:"BSD",
    req:{ram:"1 Go+ conseillé pour un usage avec X11 (aucun minimum officiel strict, fonctionne avec très peu selon l'usage)", disk:"~1 Go pour une base minimale ; 8-10 Go conseillés avec X11 et applications", cpu:"amd64, i386 ou autres architectures selon le port"},
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
    id:"netbsd", name:"NetBSD", version:"11.0", cat:"bsd", color:"#F7961D", icon:"netbsd",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#F7961D"><path d="M22.686 10.681c0-.181.064-.336.193-.464a.634.634 0 0 1 .464-.193c.182 0 .336.065.465.193a.633.633 0 0 1 .192.464.635.635 0 0 1-.192.465.632.632 0 0 1-.465.193.634.634 0 0 1-.464-.193.634.634 0 0 1-.193-.465zm1.206 0a.53.53 0 0 0-.16-.388.53.53 0 0 0-.389-.16.53.53 0 0 0-.388.16.528.528 0 0 0-.161.388.53.53 0 0 0 .16.389.53.53 0 0 0 .39.161.529.529 0 0 0 .388-.161.53.53 0 0 0 .16-.389zm-.344.396-.207-.349h-.117v.349h-.114v-.808h.207c.194 0 .292.074.292.223 0 .104-.053.177-.157.22l.221.365zm-.324-.71v.27l.076.001c.075 0 .126-.01.151-.028.026-.02.04-.056.04-.11 0-.09-.059-.134-.175-.134h-.092m-3.892 3.28c0 .403.014.667.146.82.132.147.344.213.607.213 1.266 0 1.698-1.127 1.698-2.122 0-1.318-.695-2.1-2.02-2.1-.197 0-.336.036-.38.095-.044.058-.051.197-.051.424v2.67zm-1.046-2.319c0-.695-.015-.834-.352-.87l-.139-.015c-.073-.037-.073-.25.015-.257a30.521 30.521 0 0 1 1.96-.065c.6 0 1.2.059 1.706.241.958.344 1.485 1.208 1.485 2.122 0 .981-.468 1.771-1.31 2.188-.497.25-1.097.344-1.85.344-.345 0-.71-.044-.974-.044-.351 0-.724.008-1.141.022-.059-.044-.059-.22 0-.256l.226-.036c.33-.059.374-.11.374-.783v-2.59m-2.405 3.76c-.673 0-1.09-.19-1.244-.277-.139-.161-.234-.688-.234-1.186.051-.095.22-.102.278-.022.146.476.636 1.149 1.258 1.149.542 0 .79-.373.79-.74 0-.592-.555-.943-.994-1.163-.527-.263-1.098-.702-1.105-1.427 0-.827.636-1.398 1.697-1.398.242 0 .542.03.834.118.095.029.161.043.25.058.057.161.13.556.13 1.047-.036.087-.219.095-.285.022-.124-.374-.439-.908-.965-.908-.483 0-.747.315-.747.68 0 .337.3.645.666.835l.483.256c.454.242 1.032.666 1.032 1.471 0 .9-.74 1.486-1.844 1.486m-4.2-1.354c0 .57.072.93.643.93.542 0 .827-.418.827-1.01 0-.637-.366-1.084-1.068-1.084-.403 0-.403.007-.403.3v.864zm0-1.69c0 .19.007.204.387.204.63 0 .863-.402.863-.841 0-.637-.395-.952-.9-.952-.343 0-.35.06-.35.381zm-1.01-.71c0-.74-.015-.82-.322-.857l-.198-.03c-.066-.036-.08-.255.03-.263.555-.036 1.09-.065 1.821-.065.703 0 1.171.08 1.493.27.314.19.505.498.505.93 0 .615-.52.856-.747.915-.073.014-.146.044-.146.08 0 .022.037.044.103.059.578.124 1.068.504 1.075 1.214.007.673-.395 1.069-.856 1.23-.461.16-1.01.183-1.456.183-.263 0-.541-.03-.754-.03-.358 0-.717.008-1.134.022-.058-.044-.058-.234 0-.256l.213-.044c.329-.065.373-.117.373-.775v-2.584M9.038 12.44c-.095 0-.102.007-.102.168v1.097c0 .41 0 .864.512.864.102 0 .22-.051.307-.11.073.022.117.103.102.19-.204.22-.6.425-1.053.425-.607 0-.82-.351-.82-.834v-1.632c0-.154-.007-.168-.139-.168H7.62c-.08-.03-.103-.176-.044-.227.226-.08.431-.213.607-.33.132-.095.315-.248.541-.57.051-.03.183-.022.22.036v.549c0 .139.007.146.139.146h.651c.037.03.059.074.059.14 0 .08-.022.211-.095.256h-.66m-2.627.475c.103 0 .22-.015.3-.066.037-.022.051-.095.051-.168 0-.241-.139-.402-.388-.402-.307 0-.57.292-.57.526 0 .103.102.11.336.11zm-.483.322c-.168 0-.183.015-.183.132 0 .549.351 1.083 1.032 1.083.205 0 .483-.044.68-.38.08-.015.19.043.19.168-.3.622-.84.834-1.28.834-.988 0-1.522-.695-1.522-1.493 0-.922.666-1.64 1.58-1.64.762 0 1.171.491 1.171 1.055 0 .139-.036.241-.263.241H5.927m-1.255.49c0 .476 0 .937.014 1.179-.05.087-.256.168-.431.168-.008 0-.25-.373-.593-.798l-1.69-2.093c-.417-.527-.666-.826-.798-.936-.036.073-.036.197-.036.468v1.42c0 .593.029 1.141.11 1.339.065.154.234.198.424.234l.205.03c.058.058.044.212 0 .255a26.585 26.585 0 0 0-.98-.022c-.271 0-.542.008-.82.022-.044-.043-.059-.197 0-.256l.124-.022c.198-.044.337-.087.403-.241.073-.198.102-.746.102-1.34v-1.858c0-.402 0-.52-.051-.622-.051-.124-.161-.198-.417-.249l-.205-.029c-.051-.059-.044-.234.03-.256.343.014.709.022 1.009.022.249 0 .46-.008.615-.022.073.33.548.885 1.207 1.668l.614.725c.33.38.535.636.703.805.03-.073.03-.198.03-.33v-1.01c0-.592-.03-1.141-.11-1.339-.067-.153-.227-.197-.425-.234l-.198-.029c-.058-.059-.043-.212 0-.256.396.014.68.022.98.022.272 0 .535-.008.82-.022.044.044.059.197 0 .256l-.131.022c-.19.044-.33.088-.396.242-.08.197-.11.746-.11 1.339v1.749M21.537 3.59c-2.848-1.367-5.425-.715-8.306.148-2.902.868-5.482 1.337-8.381.154l.79 1.41.87 1.557.79 1.41c2.309.652 4.22-.194 6.271-1.22 2.463-1.23 4.688-2.337 7.502-1.696-2.378-1.19-4.534-.895-7.02-.22 2.434-1.24 4.726-2.204 7.484-1.543M13.16 20.478l-2.272-4.385H9.91l2.283 4.826s.23.455.724.203c.493-.25.245-.644.245-.644M4.634 4.025s-.068-.159-.26-.053c-.16.089-.077.253-.077.253l3.004 6.351h.728L4.634 4.025"/></svg>',
    tag:"« Of course it runs NetBSD. » Portée sur 60+ architectures matérielles. Élégance BSD.",
    site:"netbsd.org", dl:"netbsd.org/releases/formal-11", license:"Libre / Open-source", popular:false, isNew:false,
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
    site:"dragonflybsd.org", dl:"www.dragonflybsd.org/images", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~20 min", diff:"Avancé", base:"BSD",
    req:{ram:"1 Go min., 2 Go conseillés", disk:"50 Go+ recommandés pour le système de fichiers HAMMER par défaut (UFS envisageable sur disque plus petit)", cpu:"x86_64 (autres architectures existent mais x86_64 est la plus courante)"},
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
    id:"ghostbsd", name:"GhostBSD", version:"25.02", cat:"bsd", color:"#37BC9B", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="#37BC9B"><path d="M12 2C7.6 2 4 5.6 4 10v11l2.5-2 2.5 2 3-2 3 2 2.5-2 2.5 2V10c0-4.4-3.6-8-8-8z"/><circle cx="9" cy="10" r="1.3" fill="#0b1512"/><circle cx="15" cy="10" r="1.3" fill="#0b1512"/></svg>',
    tag:"FreeBSD pensé pour le bureau. Installeur graphique simple, MATE ou Xfce par défaut.",
    site:"ghostbsd.org", dl:"ghostbsd.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"FreeBSD",
    req:{ram:"8 Go conseillés pour une installation fiable (4 Go ou moins peut poser problème selon la doc officielle)", disk:"20 Go min., 40 Go+ conseillés", cpu:"amd64 (processeur des 10 dernières années recommandé)"},
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
    id:"opnsense", name:"OPNsense", version:"26.x", cat:"network", color:"#D94F00", icon:"opnsense",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#D94F00"><path d="M5.25 0v5.25h13.5v13.5H24V7.5L16.5 0Zm13.5 18.75H5.25V5.25H0V16.5L7.5 24h11.25Z"/></svg>',
    tag:"Pare-feu open source. Fork de pfSense, UI moderne, community-friendly. FreeBSD dessous.",
    site:"opnsense.org", dl:"opnsense.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"FreeBSD",
    req:{ram:"3 Go min. — l'installeur lui-même ne démarre pas en dessous ; 4 Go conseillés, 8 Go pour un usage intensif", disk:"40 Go de SSD conseillés ; 4 Go de carte SD/CF suffisent avec les images « nano »", cpu:"Processeur double cœur à 1 GHz min. (1,5 GHz multi-cœurs pour un usage soutenu)"},
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
    id:"pfsense", name:"pfSense CE", version:"2.8", cat:"network", color:"#212121", icon:"pfsense",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#212121"><path d="M2.013 0C.898 0 0 .929 0 2.044v17.775L3.252 8.27h3.282L6.1 9.785h.063c.186-.217.433-.403.742-.62.31-.216.62-.402.96-.588.342-.186.713-.31 1.116-.433.402-.124.805-.155 1.208-.155.867 0 1.579.154 2.198.433.62.279 1.084.712 1.455 1.239.31.464.5 1.019.593 1.669.006.06.027.135.027.189.062.712-.031 1.518-.28 2.385a8.571 8.571 0 0 1-1.02 2.322 9.885 9.885 0 0 1-1.58 1.95 8.125 8.125 0 0 1-2.044 1.364 5.536 5.536 0 0 1-2.354.495 5.655 5.655 0 0 1-1.982-.34c-.588-.217-.99-.62-1.238-1.177h-.062L2.353 24h19.603A2.042 2.042 0 0 0 24 21.956V4.706c-.093-.03-.186-.06-.248-.092a2.771 2.771 0 0 0-.557-.062c-.557 0-1.022.124-1.394.372-.34.248-.65.743-.867 1.518l-.526 1.826h2.013l.495 1.58-1.3 1.27h-2.014l-2.446 8.67h-3.53l2.446-8.67h-1.455l.805-2.85h1.425l.557-2.044c.185-.619.403-1.238.681-1.795a4.996 4.996 0 0 1 1.053-1.487c.433-.434.99-.775 1.641-1.022.65-.248 1.487-.372 2.447-.372.248 0 .464 0 .712.031A2.082 2.082 0 0 0 21.988 0zm6.565 11.118c-.898 0-1.672.278-2.323.805-.65.526-1.083 1.239-1.331 2.106-.248.867-.217 1.579.155 2.105.31.557.929.805 1.858.805.898 0 1.672-.278 2.322-.805.65-.526 1.115-1.238 1.363-2.105.247-.867.185-1.58-.155-2.106-.34-.527-.991-.805-1.89-.805Z"/></svg>',
    tag:"Le standard du pare-feu open source. Netgate. Ultra-fiable en prod.",
    site:"pfsense.org", dl:"pfsense.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"FreeBSD",
    req:{ram:"1 Go min. (chiffre officiel Netgate) ; davantage dès que le proxy ou l'IDS sont activés", disk:"8 Go de disque min. (SSD ou disque dur)", cpu:"Processeur compatible amd64 (x86-64) 64 bits"},
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
    site:"ipfire.org", dl:"ipfire.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Linux From Scratch",
    req:{ram:"1 Go min. recommandé par le projet ; 8 Go si le proxy web, l'IDS/IPS et le pare-feu DNS sont tous activés (5 à 6 Go de consommation)", disk:"2 Go min., 4 Go conseillés pour les journaux et les extensions", cpu:"x86_64, y compris du matériel modeste tant que les modules gourmands restent désactivés"},
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
    id:"haiku", name:"Haiku OS", version:"R1/beta5", cat:"alt", color:"#3AB4F2", icon:null,
    svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#3AB4F2" stroke-width="1.7" stroke-linecap="round"><path d="M5 3h11l3 3v15H5z" fill="#3AB4F2" fill-opacity=".12"/><path d="M8 9h8M8 13h8M8 17h5"/></svg>',
    tag:"L'héritier open source de BeOS. Kernel maison, réactivité incroyable, look unique.",
    site:"haiku-os.org", dl:"haiku-os.org/get-haiku", license:"Libre / Open-source", popular:true, isNew:false,
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
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#183246"><path d="M20.21 24c-1.148-.007-2.477-.334-3.89-.915-2.823-1.163-6.04-3.372-9.036-6.367C4.289 13.723 2.075 10.505.913 7.68-.25 4.857-.383 2.36.988.989 2.358-.38 4.855-.248 7.679.915c.306.125.617.265.932.415-.331.113-.658.24-.974.383l-.141-.058C4.832.558 2.698.519 1.607 1.609.517 2.7.557 4.83 1.653 7.494c1.097 2.663 3.235 5.793 6.147 8.704 2.91 2.911 6.044 5.05 8.708 6.147 2.664 1.097 4.79 1.136 5.88.045 1.091-1.09 1.056-3.22-.041-5.884-.108-.263-.23-.531-.358-.803.134-.317.25-.642.354-.973.282.54.53 1.07.744 1.589 1.163 2.823 1.292 5.32-.079 6.691-.685.685-1.651.997-2.799.99zM3.79 24c-1.148.008-2.117-.305-2.802-.99-1.37-1.37-1.238-3.868-.075-6.691.235-.572.517-1.16.836-1.76.098.333.212.66.34.978a17.67 17.67 0 00-.436.969C.556 19.169.521 21.3 1.611 22.39c1.091 1.091 3.221 1.051 5.885-.045.922-.38 3.021-1.69 4.026-2.308.216.162.433.32.649.474-1.157.733-3.415 2.13-4.492 2.574-1.412.581-2.74.907-3.888.915zm9.753-4.458c-.214-.14-.429-.282-.645-.433a34.547 34.547 0 003.302-2.911c2.912-2.911 5.05-6.04 6.147-8.704 1.097-2.664 1.132-4.794.042-5.885-1.091-1.09-3.217-1.055-5.88.042l-.072.029a10.726 10.726 0 00-.99-.379c.295-.14.587-.272.874-.39 2.824-1.163 5.321-1.292 6.691.078s1.238 3.864.075 6.688c-1.162 2.823-3.376 6.046-6.37 9.04a35.747 35.747 0 01-3.174 2.825zm1.95 1.156c-.325-.17-1.798-1.073-2.135-1.273 1.002-.806 2.423-1.97 3.396-2.944 1.718-1.718 3.981-4.787 5.162-6.555-.008.111-.093 2.49-.105 2.6a9.802 9.802 0 01-6.318 8.172zm-6.928-.034c-3.407-1.308-6.043-4.71-6.287-8.198-.01-.151-.06-.399-.054-.984.007-.602.056-1.423.159-1.283 1.036 1.42 3.976 5.455 5.352 6.83.973.973 1.927 1.624 2.929 2.43a112.45 112.45 0 01-2.1 1.205zm3.43-2.208a33.27 33.27 0 01-3.443-3.01c-2.54-2.54-4.462-5.254-5.568-7.582 1.45-3.597 4.973-6.138 9.087-6.138 4.051 0 7.53 2.465 9.02 5.976-1.093 2.363-3.045 5.145-5.643 7.743a33.161 33.161 0 01-3.452 3.011z"/></svg>',
    tag:"OS libre binaire-compatible Windows. Objectif : exécuter des .exe Windows nativement.",
    site:"reactos.org", dl:"reactos.org/download", license:"Libre / Open-source", popular:false, isNew:false,
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
    site:"freedos.org", dl:"freedos.org/download", license:"Libre / Open-source", popular:false, isNew:false,
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
    id:"kubuntu", name:"Kubuntu", version:"26.04 LTS", cat:"desktop", color:"#0079C1", icon:"kubuntu",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#0079C1"><path d="M21.257 14.292a.2065.2065 0 01.1097.2374l-.5765 1.5293a.2063.2063 0 01-.2033.155l-2.3369-.2283c-.0628.001-.1623-.008-.2776.1255-.0178.0207-.7472.9328-.9783 1.1832-.079.0708-.1067.1652-.0878.281l.5521 2.1962a.2064.2064 0 01-.098.2314l-1.513.8906a.2063.2063 0 01-.2556-.0418l-1.5494-1.7055c-.0516-.0555-.1551-.0994-.2271-.0759l-1.645.2391c-.0804.011-.1267.0635-.1603.1164l-.9938 2.0793a.2063.2063 0 01-.2353.089l-1.6687-.3945a.2065.2065 0 01-.1462-.1824.209.209 0 01.0105-.0815l.8812-3.244a.222.222 0 01.2828-.1373l.0033-.001a5.8423 5.8423 0 002.7168.2176c2.3222-.3696 4.1964-2.0953 4.756-4.3791l.011-.0407c.0277-.1194.1768-.1827.2963-.155 0 0 2.8684.9737 3.2936 1.0816a.2089.2089 0 01.0394.0143zM5.539 4.9898l.0001.0001a.2051.2051 0 01.0659.0489l2.392 2.3567a.222.222 0 01-.0186.3138l-.0008.0034A5.8422 5.8422 0 006.4594 9.976c-.8132 2.2063-.2244 4.685 1.494 6.29l.0353.0396c.0906.0827.0678.2335-.0148.3241 0 0-2.2452 2.0243-2.5472 2.3425a.2064.2064 0 01-.2924.007l-1.0521-1.2507a.2063.2063 0 01-.0358-.253l1.335-1.9253c.0297-.0553.0863-.1376.0262-.3035-.0092-.0256-.4482-1.108-.5536-1.432-.0232-.1035-.092-.1738-.2022-.214l-2.1789-.594a.2064.2064 0 01-.154-.1986l-.0368-1.7552a.2065.2065 0 01.1615-.2026l2.2384-.516c.0737-.0177.1625-.0866.1772-.1609l.5958-1.5517c.0298-.0755.0068-.1417-.023-.1968L4.111 6.5396a.2064.2064 0 01.0374-.2488l1.1602-1.2626a.2066.2066 0 01.2305-.0385zm10.4906-1.747a.2139.2139 0 01.0313.0147l1.5385.8455a.2065.2065 0 01.0947.2412l-.6793 2.198c-.0214.0727-.0062.1841.0508.234l1.046 1.2918c.0505.0636.1193.0767.182.0785l2.3-.2029a.2064.2064 0 01.1968.1567l.5134 1.6361a.2064.2064 0 01-.082.2189h-.0001a.205.205 0 01-.0753.0326l-3.244.8946a.222.222 0 01-.2624-.1729.012.012 0 01-.0025-.0024 5.8422 5.8422 0 00-1.201-2.4466c-1.5041-1.8073-3.9452-2.5368-6.1943-1.851l-.0402.0123c-.1169.0371-.248-.0597-.285-.1766 0 0-.6236-2.958-.7481-3.3786a.2063.2063 0 01.14-.2568l1.6093-.2858a.2063.2063 0 01.237.0955l.9929 2.1203c.033.0534.076.1436.2498.1744.0268.0048 1.1835.1658 1.5169.2366.1012.0316.1966.0073.2864-.068l1.6107-1.5916a.2064.2064 0 01.2177-.0486zM16.021.6955A11.9968 11.9968 0 007.794.763C1.5889 3.086-1.5582 9.9993.7647 16.2044c2.323 6.205 9.2362 9.3522 15.4413 7.0293 6.2051-2.3229 9.3522-9.2362 7.0293-15.4413A11.997 11.997 0 0016.021.6955z"/></svg>',
    tag:"Ubuntu avec KDE Plasma. Un bureau élégant, fluide et hautement personnalisable.",
    site:"kubuntu.org", dl:"kubuntu.org/getkubuntu", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés, Plasma étant plus gourmand que GNOME)", disk:"25 Go min.", cpu:"2 GHz dual-core, 64 bits", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (pilotes libres inclus)", nvidia:"Bon — pilote propriétaire proposé automatiquement via « Pilotes additionnels » dès l'installation"}},
    steps:[
      {t:"Télécharger l'ISO", d:"Sur kubuntu.org/getkubuntu, choisir l'édition LTS."},
      {t:"Vérifier le SHA-256", d:"Comparer l'empreinte avec le fichier SHA256SUMS publié.", code:"sha256sum kubuntu-26.04-desktop-amd64.iso"},
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
    id:"peppermint", name:"Peppermint OS", version:"Debian Edition (base Trixie)", cat:"lightweight", color:"#D6234A", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#D6234A" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#D6234A">Pm</text></svg>',
    tag:"Xfce léger orienté cloud/apps web, taillé pour les machines modestes.",
    site:"peppermintos.com", dl:"peppermintos.com/trixie-base-downloads", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Debian",
    req:{ram:"1 Go min. (4 Go conseillés) — le projet refuse volontairement de publier un minimum plus bas, jugé peu honnête à l'usage", disk:"10 Go min. (32 Go conseillés)", cpu:"Processeur ancien (Pentium 4 / Core 2 Duo et plus)"},
    steps:[
      {t:"Télécharger l'ISO", d:"peppermintos.com/trixie-base-downloads → édition Debian (base Trixie). Une édition Devuan (Excalibur) est également publiée, pour un système sans systemd."},
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
    site:"q4os.org", dl:"q4os.org/downloads1.html", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Facile", base:"Debian",
    req:{ram:"512 Mo min. avec le bureau Trinity, 2 Go avec Plasma", disk:"6 Go avec Trinity, 8 Go avec Plasma", cpu:"500 MHz suffisent avec le bureau Trinity ; 1 GHz pour le bureau Plasma (chiffres officiels Q4OS)"},
    steps:[
      {t:"Télécharger l'ISO", d:"q4os.org/downloads1.html → édition Desktop ou Core (sans bureau)."},
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
    id:"pclinuxos", name:"PCLinuxOS", version:"2025.09", cat:"desktop", color:"#0C5A9D", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#0C5A9D" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#0C5A9D">Pc</text></svg>',
    tag:"Distro rolling indépendante historique. Stable, sans systemd, communauté fidèle.",
    site:"pclinuxos.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"—",
    req:{ram:"2 Go min. (4 Go conseillés, officiel)", disk:"15 Go min. (20 Go+ conseillés, officiel)", cpu:"N'importe quel Intel, AMD ou VIA x86_64 d'après le wiki officiel (dual-core conseillé) — pas d'exigence de génération récente", gpu:{open:"Excellent — AMD/Intel pris en charge nativement", nvidia:"Correct — pilotes propriétaires disponibles dans des sections dédiées du dépôt, à activer manuellement dans Synaptic selon le modèle de carte"}},
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
    site:"batocera.org", dl:"batocera.org/download", license:"Libre / Open-source", popular:false, isNew:false,
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
    site:"lakka.tv", dl:"www.lakka.tv/get", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Facile", base:"Linux",
    req:{ram:"1 Go suffit sur un Raspberry Pi ; davantage seulement pour les émulateurs les plus exigeants", disk:"4 Go min. pour le système, puis selon la taille de la logithèque", cpu:"Raspberry Pi ou PC x86_64 ; un GPU dédié ne devient utile que pour les émulateurs de consoles récentes"},
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
    site:"microsoft.com", dl:"microsoft.com/en-us/evalcenter/download-windows-server-2025", license:"Propriétaire", popular:false, isNew:false,
    time:"~20 min", diff:"Intermédiaire", base:"Windows NT",
    req:{ram:"2 Go min. (4 Go conseillés avec l'expérience de bureau)", disk:"32 Go minimum absolu pour la partition système", cpu:"1,4 GHz 64 bits avec SLAT, SSE4.2 et POPCNT"},
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
    id:"clearos", name:"ClearOS", version:"7.6 — arrêtée (2024)", cat:"server", color:"#4CAF50", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#4CAF50" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#4CAF50">Cl</text></svg>',
    tag:"Serveur/passerelle tout-en-un pour PME : pare-feu, VPN, messagerie, partage de fichiers — maintenance arrêtée en juin 2024.",
    site:"clearos.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"RHEL",
    req:{ram:"2 Go min. (4 Go+ conseillés en production)", disk:"20-40 Go selon les services hébergés", cpu:"x86_64 (physique ou VM)"},
    steps:[
      {t:"Télécharger l'ISO", d:"Projet arrêté : la dernière version publiée est la 7.6.0 de mai 2019 et ClearFoundation a mis fin à sa maintenance en juin 2024. Les images restent téléchargeables depuis clearos.com (bouton « Free Download » de la page d'accueil, le projet ne publie plus de page dédiée), mais elles reposent sur CentOS 7, lui-même sans mise à jour de sécurité depuis juin 2024 — fiche conservée à titre documentaire, à ne pas exposer sur un réseau."},
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
    site:"kicksecure.com", dl:"kicksecure.com/wiki/Download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"512 Mo min. en CLI (2 Go conseillés avec bureau graphique)", disk:"8-32 Go pour une clé USB persistante", cpu:"x86_64/ARM64 — utilisable en VM (usage le plus courant) ou installé directement sur machine physique"},
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
    site:"dietpi.com", dl:"dietpi.com/#download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Facile", base:"Debian",
    req:{ram:"256 Mo suffisent — l'image est optimisée pour une empreinte mémoire minimale, journalisation en RAM par défaut", disk:"Carte microSD de 4 Go min.", cpu:"Carte ARM avant tout (Raspberry Pi et une centaine d'autres SBC) ; des images x86_64 existent aussi pour PC et machines virtuelles"},
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
    id:"silverblue", name:"Fedora Silverblue", version:"43", cat:"advanced", color:"#3C6EB4", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#3C6EB4" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#3C6EB4">Sb</text></svg>',
    tag:"Fedora immuable façon image atomique (rpm-ostree). Rollbacks natifs, apps en Flatpak.",
    site:"fedoraproject.org", dl:"fedoraproject.org/atomic-desktops/silverblue", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Avancé", base:"Fedora",
    req:{ram:"4 Go conseillés (officiel fedoraproject.org, comme les autres variantes Fedora)", disk:"40 Go conseillés (officiel) — le double pour plus de confort ; OSTree conserve aussi les anciens déploiements, ce qui ajoute à l'usage réel au fil du temps", cpu:"x86_64 — images préconstruites, mises à jour par transaction (rien n'est compilé sur la machine)"},
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
    site:"chimera-linux.org", dl:"chimera-linux.org/downloads", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"—",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64, paquets binaires préconstruits (aucune compilation)"},
    steps:[
      {t:"Télécharger l'ISO", d:"chimera-linux.org/downloads → image bootstrap."},
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
    site:"openindiana.org", dl:"openindiana.org/downloads", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"illumos",
    req:{ram:"2 Go min. en serveur, 4 Go min. conseillés en bureau (RAM+swap ≥ 4 Go)", disk:"16 Go min. en serveur, 20 Go min. conseillés en bureau", cpu:"x86_64 uniquement (pas de portage 32 bits ni ARM actif)"},
    steps:[
      {t:"Télécharger l'ISO", d:"openindiana.org/downloads → édition Hipster (rolling)."},
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
    site:"midnightbsd.org", dl:"midnightbsd.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"FreeBSD",
    req:{ram:"96 Mo min. pour l'installation (1-2 Go conseillés pour un usage bureau)", disk:"quelques Go suffisent en théorie, 15 Go conseillés pour un usage avec mports (paquets)", cpu:"x86_64 (486 retiré de l'installation par défaut)"},
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
    site:"vyos.io", dl:"vyos.net/get/nightly-builds", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Avancé", base:"Debian",
    req:{ram:"1 Go min., 2 Go et plus conseillés en production", disk:"4 Go de stockage min.", cpu:"x86_64, machine physique ou virtuelle"},
    steps:[
      {t:"Télécharger l'image", d:"vyos.net/get/nightly-builds → build rolling, librement téléchargeable. Les images LTS ne sont plus distribuées gratuitement : elles passent par un abonnement (vyos.io/subscriptions/software). Le code source reste libre, une image LTS peut donc aussi être compilée soi-même."},
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
    id:"redox", name:"Redox OS", version:"0.9", cat:"alt", color:"#CC0000", icon:"redox",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#CC0000"><path d="M5.6935 6.0492a.2861.2861 0 0 0-.2578.242C3.5384 6.383 1.883 7.4011.912 8.9027H.9101a.2835.2835 0 0 0-.3866.2638c0 .0888.0423.1682.1073.2203A5.689 5.689 0 0 0 0 12.0001c0 .9415.2272 1.83.6312 2.6135a.2827.2827 0 0 0 .2808.4842c.9706 1.5016 2.6264 2.5198 4.5237 2.6116v.002a.2835.2835 0 0 0 .5605-.0023c1.8966-.0919 3.5509-1.1105 4.5215-2.6113h.0019a.285.285 0 0 0 .3885-.2638.2857.2857 0 0 0-.031-.1266l-.014-.0295-.029.0159a2.3482 2.3482 0 0 1-.459.1851l-.0313.0099.0098.0313a.3061.3061 0 0 0 .0216.0492 5.5177 5.5177 0 0 1-4.4202 2.5485v-.0019a.2827.2827 0 0 0-.4803.0038 5.5219 5.5219 0 0 1-4.4202-2.549l.0019-.0018a.2835.2835 0 0 0-.2419-.418A5.5003 5.5003 0 0 1 .1909 12c0-.9203.2252-1.7877.6232-2.5508a.2835.2835 0 0 0 .2404-.4195 5.5219 5.5219 0 0 1 4.4198-2.549.2827.2827 0 0 0 .4822 0 5.5219 5.5219 0 0 1 4.4183 2.5508.2816.2816 0 0 0-.0351.1346.285.285 0 0 0 .277.2835 5.4879 5.4879 0 0 1 .4649 1.232 2.369 2.369 0 0 1 .238.1894 5.6693 5.6693 0 0 0-.5192-1.4842.2827.2827 0 0 0 .1073-.2207.2854.2854 0 0 0-.3885-.2638A5.7112 5.7112 0 0 0 5.9958 6.293a.285.285 0 0 0-.2811-.2438c-.0076 0-.0144-.0007-.0216 0zm-.006 1.4177a.288.288 0 0 0-.248.2207c-2.245.1486-4.0233 2.0183-4.0233 4.3011 0 2.2802 1.7749 4.1492 4.0176 4.3004a.2835.2835 0 0 0 .2812.2441.2869.2869 0 0 0 .2812-.2418 4.3041 4.3041 0 0 0 2.945-1.4317 2.369 2.369 0 0 1-.1874-.0764 4.1083 4.1083 0 0 1-2.7969 1.3183.2854.2854 0 0 0-.2419-.1345.288.288 0 0 0-.2403.1326c-2.1582-.1304-3.8673-1.92-3.8673-4.111 0-2.1872 1.7027-3.9749 3.8552-4.1113v.0022a.283.283 0 0 0 .5064-.0022c1.5625.0907 2.8902 1.0492 3.5074 2.4026a2.369 2.369 0 0 1 .2034-.0159 4.3124 4.3124 0 0 0-3.6877-2.576v-.002a.285.285 0 0 0-.277-.2188c-.0099 0-.0182-.0008-.0277 0zM3.959 9.506v4.9849h.4958V9.9572h.703c.5099 0 .892.0605 1.1467.1815a.8504.8504 0 0 1 .389.3673c.0922.1648.1383.3614.1383.5896 0 .5496-.2415.8965-.7227 1.0394-.2282.0635-.6104.0956-1.1463.0956l1.6819 2.2602h.6187L5.8651 12.629c.4788-.0503.8455-.2056 1.096-.4649.2525-.2612.3787-.6145.3787-1.0605 0-.3031-.0623-.5685-.1851-.7967a1.3667 1.3667 0 0 0-.5318-.547c-.305-.1689-.7813-.254-1.4313-.254Zm11.6288 0v1.8811c-.3757-.4505-.8583-.6757-1.449-.6757-.3693 0-.703.0846-1.0043.2536a1.858 1.858 0 0 0-.7049.6992c-.1693.2967-.254.6259-.254.9902 0 .3606.0881.6883.2639.9827a1.8644 1.8644 0 0 0 .7207.6916c.3073.1663.6497.2495 1.0254.2495.3073 0 .5696-.059.7869-.1776.2196-.1183.424-.3118.6153-.5798v.6697h.502V9.506ZM9.697 10.7114a1.8905 1.8905 0 0 0-.9645.2536 1.8591 1.8591 0 0 0-.6916.6954 1.9106 1.9106 0 0 0-.254.9687c0 .2683.0514.5223.1523.7635a1.911 1.911 0 0 0 .4104.6236 1.9257 1.9257 0 0 0 .6229.412 1.9665 1.9665 0 0 0 .7657.1504 1.8172 1.8172 0 0 0 1.0957-.3576 1.948 1.948 0 0 0 .6992-.9471h-.5215a1.3172 1.3172 0 0 1-.5099.613 1.4003 1.4003 0 0 1-.777.2306 1.4237 1.4237 0 0 1-.9884-.3787c-.279-.2552-.4294-.5632-.4494-.928h3.338c0-.246-.0158-.4508-.049-.6133a1.8002 1.8002 0 0 0-.1716-.4804 1.7953 1.7953 0 0 0-.7012-.7363 1.9446 1.9446 0 0 0-1.006-.2694Zm9.0082 0c-.5432.0113-.9925.1954-1.3497.5506-.3693.3648-.5548.8266-.5548 1.3868 0 .3647.0846.6939.254.9883a1.833 1.833 0 0 0 .709.6916c.3008.1663.6365.2495 1.0076.2495.5427 0 .9918-.1822 1.3478-.5465.3556-.3647.5329-.8236.5329-1.3773 0-.3666-.0813-.6973-.2457-.994a1.7688 1.7688 0 0 0-.68-.6954c-.2875-.169-.6107-.2536-.9686-.2536h-.053zm2.1619.0895 1.285 1.809-1.285 1.8806h.5665l1.0016-1.4804.9902 1.4804H24l-1.291-1.8807L24 10.8008h-.5745l-.9902 1.4219-1.0016-1.4219zm-11.2343.3693c.0215-.0008.0427 0 .0642 0 .3583 0 .6652.1054.92.3182.257.2132.4263.5027.5102.8693H8.3006c.068-.3556.2313-.6417.4883-.8594a1.3444 1.3444 0 0 1 .844-.3281zm4.4005 0c.0242-.0011.0472 0 .0718 0 .4222 0 .7786.1421 1.0685.4278.2902.2835.4358.6286.4358 1.0371 0 .4082-.141.759-.4218 1.0489-.2812.2899-.6206.4335-1.016.4335-.4195 0-.7725-.1406-1.0605-.4237-.2854-.2857-.4275-.6357-.4275-1.0507 0-.4086.1372-.756.4139-1.0413.2596-.2698.5718-.4146.9358-.4316zm4.611 0c.025-.0011.0491 0 .0745 0 .4172 0 .7593.1387 1.0272.42.268.2788.4022.6371.4022 1.0722 0 .424-.1312.7725-.3923 1.0469-.2593.2721-.5919.4082-.9982.4082-.4173 0-.7627-.1372-1.0371-.4139-.2744-.277-.412-.6274-.412-1.0492 0-.426.1342-.7793.4022-1.0605.2513-.2653.5627-.407.9335-.4233z"/></svg>',
    tag:"OS écrit en Rust, microkernel, orienté sécurité mémoire. Projet de recherche actif.",
    site:"redox-os.org", dl:"redox-os.org/quickstart", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Avancé", base:"—",
    req:{ram:"2-4 Go selon le projet", disk:"8-16 Go d'espace disque", cpu:"x86_64 standard"},
    steps:[
      {t:"Télécharger l'image", d:"redox-os.org/quickstart → image .img pré-compilée."},
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
    id:"clonezilla", name:"Clonezilla Live", version:"3.3.3-15", cat:"recovery", color:"#F7B500", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#F7B500" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#F7B500">Cz</text></svg>',
    tag:"Outil de clonage/sauvegarde d'images disque, l'équivalent libre de Norton Ghost.",
    site:"clonezilla.org", dl:"clonezilla.org/downloads.php", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"196 Mo min. d'après la doc officielle (bien en dessous du générique habituel)", disk:"2-4 Go (clé USB bootable)", cpu:"amd64 (x86-64) uniquement — le support i386 a été abandonné depuis la version 3.2.0-8"},
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
    id:"systemrescue", name:"SystemRescue", version:"13.00", cat:"recovery", color:"#2ECC71", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#2ECC71" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#2ECC71">Sr</text></svg>',
    tag:"Live Linux de dépannage (Arch-based) : partitionnement, récupération de données, réseau.",
    site:"system-rescue.org", dl:"www.system-rescue.org/Download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Intermédiaire", base:"Arch",
    req:{ram:"2 Go min. pour les options de démarrage par défaut, 4 Go conseillés en mode mise en cache RAM — chiffre officiel plus élevé que le générique habituel", disk:"environ 1,1 Go pour l'image ISO (version 12/13, officiel) ; une clé USB de 2 Go ou plus recommandée", cpu:"64 bits (x86-64) uniquement — le support 32 bits (i686) a été abandonné depuis la version 10.00 (déc. 2023)"},
    steps:[
      {t:"Télécharger l'ISO", d:"www.system-rescue.org/Download → image amd64."},
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
    id:"rescatux", name:"Rescatux", version:"0.74 (dernière stable, novembre 2021 — aucune version 0.75 stable n'a jamais été publiée malgré des tags bêta internes)", cat:"recovery", color:"#E74C3C", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#E74C3C" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#E74C3C">Rt</text></svg>',
    tag:"Live de secours guidé par menus (Rescapp) : réparer GRUB, mots de passe, permissions.",
    site:"rescatux.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Facile", base:"Debian",
    req:{ram:"1 Go conseillé — le projet ne publie pas de minimum officiel, mais recommande ce seuil pour que le système live tienne confortablement en RAM", disk:"1 Go (l'ISO tient sous 700 Mo, clé USB de 4 Go+ conseillée)", cpu:"x86_64 (686/32 bits aussi supporté si Secure Boot désactivé)"},
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
    id:"ultramarine", name:"Ultramarine Linux", version:"44", cat:"desktop", color:"#4169E1", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#4169E1" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#4169E1">Um</text></svg>',
    tag:"Fedora repensée grand public : préconfigurée, codecs inclus, plusieurs bureaux au choix.",
    site:"ultramarine-linux.org", dl:"ultramarine-linux.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Fedora",
    req:{ram:"4 Go min. (8 Go conseillés, hérité du standard Fedora officiel)", disk:"40 Go conseillés (standard Fedora officiel, pas 20-25 Go)", cpu:"x86-64-v2 obligatoire, hérité de la base Fedora (exclut les CPU antérieurs à ~2008-2011) — pas besoin d'un CPU de dernière génération pour autant", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (pilotes libres inclus)", nvidia:"Correct — pilote propriétaire non fourni par défaut (héritage de la politique Fedora), à installer via le dépôt tiers RPM Fusion"}},
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
    id:"mageia", name:"Mageia", version:"10", cat:"desktop", color:"#1E88E5", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#1E88E5" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#1E88E5">Mg</text></svg>',
    tag:"Fork communautaire de Mandriva. Installeur DrakX réputé, très complet.",
    site:"mageia.org", dl:"mageia.org/fr/downloads", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"—",
    req:{ram:"2 Go min. pour un bureau utilisable (Plasma/GNOME), 512 Mo l'absolu minimum officiel", disk:"20 Go d'espace disque", cpu:"N'importe quel processeur Intel, AMD ou VIA d'après le site officiel — Mageia maintient même une édition 32 bits (Xfce) en 2026, contrairement à la quasi-totalité des distributions de ce cluster", gpu:{open:"Excellent — AMD/Intel pris en charge nativement", nvidia:"Correct — sélectionnable via le Centre de contrôle Mageia (Configurer le serveur graphique), mais nécessite d'abord d'activer les dépôts Nonfree"}},
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
    site:"chimeraos.org", dl:"chimeraos.org/download", license:"Libre / Open-source", popular:false, isNew:false,
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
    id:"openmediavault", name:"OpenMediaVault", version:"7", cat:"server", color:"#009688", icon:"openmediavault",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#009688"><path d="M.945 1.045A.947.947 0 0 0 0 1.988v20.024c0 .534.436.943.945.943h22.11a.944.944 0 0 0 .945-.943V1.988a.941.941 0 0 0-.945-.943Zm.118 1.064h21.875v19.784H1.063ZM3.53 4.385c-.198 0-.361.149-.361.334v3.699c0 .185.162.334.361.334h16.94c.198 0 .36-.15.36-.334v-3.7c0-.184-.161-.333-.36-.333zm2.057.886a1.3 1.3 0 0 1 1.297 1.297 1.3 1.3 0 0 1-1.297 1.3 1.3 1.3 0 0 1-1.299-1.3 1.3 1.3 0 0 1 1.299-1.297m-.002.62a.68.68 0 0 0-.676.677.68.68 0 0 0 .678.678.68.68 0 0 0 .678-.678.68.68 0 0 0-.678-.677ZM3.53 9.816c-.198 0-.361.15-.361.334v3.702c0 .184.162.332.361.332h16.94c.198 0 .36-.15.36-.334v-3.7c0-.184-.161-.334-.36-.334zm2.057.887A1.3 1.3 0 0 1 6.885 12a1.3 1.3 0 0 1-1.297 1.299A1.3 1.3 0 0 1 4.289 12a1.3 1.3 0 0 1 1.299-1.297m-.002.62A.68.68 0 0 0 4.91 12a.68.68 0 0 0 .678.68.68.68 0 0 0 0-1.358ZM3.53 15.247c-.198 0-.361.15-.361.334v3.701c0 .185.162.332.361.332h16.94c.198 0 .36-.15.36-.334v-3.699c0-.184-.161-.334-.36-.334zm2.057.887a1.3 1.3 0 0 1 1.297 1.297 1.3 1.3 0 0 1-1.297 1.298 1.3 1.3 0 0 1-1.299-1.298 1.3 1.3 0 0 1 1.299-1.297m-.002.619a.68.68 0 0 0 .002 1.358.68.68 0 0 0 0-1.358Z"/></svg>',
    tag:"NAS libre basé sur Debian. Partage réseau, RAID logiciel, plugins pour Docker/Nextcloud.",
    site:"openmediavault.org", dl:"www.openmediavault.org/download.html", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"1 Go min. (4 Go conseillés par le projet)", disk:"4 Go min. pour le disque système, séparé des disques de données", cpu:"x86_64, i386 ou ARM (Raspberry Pi 2B et plus, cartes Armbian)"},
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
    site:"xcp-ng.org", dl:"xcp-ng.org/#easy-to-install", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Xen",
    req:{ram:"2 Go min. pour l'hyperviseur (8 Go+ conseillés), hors RAM des VM", disk:"46 Go min. (70 Go+ conseillés), ni clé USB ni carte SD", cpu:"x86_64 1,5 GHz min., VT-x/AMD-V et SLAT obligatoires"},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#C0392B" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#C0392B">At</text></svg>',
    tag:"Distro pentest basée sur Arch, orientée personnalisation (BlackArch/Kali repos en option).",
    site:"athenaos.org", dl:"github.com/Athena-OS/athena/releases", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Arch",
    req:{ram:"2 Go min. (4-8 Go conseillés)", disk:"20 Go min. (30 Go conseillés, SSD de préférence)", cpu:"x86_64 (VM pratique pour un labo isolé ; le bare-metal reste préférable pour l'injection Wi-Fi et le cracking GPU, mal supportés en VM)"},
    steps:[
      {t:"Télécharger l'ISO", d:"github.com/Athena-OS/athena/releases → image ISO officielle de la dernière version publiée."},
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
    id:"caine", name:"CAINE", version:"14 (Lightstream)", cat:"security", color:"#1F3A5F", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#1F3A5F" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#1F3A5F">Ca</text></svg>',
    tag:"Distro forensique (Computer Aided INvestigative Environment), basée sur Ubuntu. Écriture bloquée par défaut.",
    site:"caine-live.net", dl:"caine-live.net/page5/page5.html", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Intermédiaire", base:"Ubuntu",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"8-32 Go pour une clé USB persistante", cpu:"x86_64 — démarre en Live directement sur la machine à examiner, avec blocage en écriture des disques par défaut ; ce n'est pas un outil pensé pour tourner isolé en VM, contrairement aux autres distributions de ce cluster"},
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
    id:"sparkylinux", name:"SparkyLinux", version:"8.3 (Seven Sisters)", cat:"lightweight", color:"#E67E22", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#E67E22" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#E67E22">Sp</text></svg>',
    tag:"Basée sur Debian Testing, légère et rapide, avec des éditions spécialisées (multimédia, gaming).",
    site:"sparkylinux.org", dl:"sparkylinux.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Debian",
    req:{ram:"128 Mo (CLI) à 1 Go (KDE) selon le bureau choisi (256 Mo LXQt/Openbox, 512 Mo MATE/Xfce) — le wiki officiel précise que l'installeur Calamares exige au moins 1 Go, en dessous utiliser l'installeur avancé", disk:"2 Go (CLI) à 20 Go (GameOver/Multimédia) selon l'édition, 10 Go pour les éditions Home", cpu:"i686 / amd64 (ARM64 également supporté, ex. Raspberry Pi 3+)"},
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
    site:"4mlinux.com", dl:"4mlinux.com/index.php", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~6 min", diff:"Facile", base:"—",
    req:{ram:"256 Mo suffisent pour le système de base", disk:"Quelques centaines de Mo : l'image tient sur un CD", cpu:"x86 ou x86_64, machines anciennes comprises"},
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
    id:"bunsenlabs", name:"BunsenLabs", version:"Carbon", cat:"lightweight", color:"#2C9F9F", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#2C9F9F" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#2C9F9F">Bl</text></svg>',
    tag:"Successeur communautaire de CrunchBang. Openbox minimaliste sur base Debian, très clavier-friendly.",
    site:"www.bunsenlabs.org", dl:"www.bunsenlabs.org/installation.html", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"1 Go min. (2 Go conseillés)", disk:"20 Go d'espace disque", cpu:"Processeur 64 bits (le support 32 bits a été abandonné avec Carbon, suivant Debian 13)"},
    steps:[
      {t:"Télécharger l'ISO", d:"www.bunsenlabs.org/installation.html → dernière version stable."},
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
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, avec 1 Go de RAM minimum, redonnant une seconde vie à des PC de plus de 10-15 ans."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"kinoite", name:"Fedora Kinoite", version:"43", cat:"advanced", color:"#294172", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#294172" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#294172">Kn</text></svg>',
    tag:"Équivalent KDE Plasma de Silverblue : bureau immuable, mises à jour atomiques, Flatpak par défaut.",
    site:"fedoraproject.org", dl:"fedoraproject.org/atomic-desktops/kinoite", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Avancé", base:"Fedora",
    req:{ram:"4 Go conseillés (officiel fedoraproject.org, comme les autres variantes Fedora)", disk:"40 Go conseillés (officiel) — le double pour plus de confort ; OSTree conserve aussi les anciens déploiements, ce qui ajoute à l'usage réel au fil du temps", cpu:"x86_64 — images préconstruites, mises à jour par transaction (rien n'est compilé sur la machine)"},
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
    id:"devuan", name:"Devuan", version:"6.1 Excalibur", cat:"advanced", color:"#8E1B3C", icon:"devuan",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#8E1B3C"><path d="M0 .415C42.518 10.56 2.297 18.812 2.297 18.812c-.792.127-1.432.54-1.816 1.167-.433.704-.47 1.656-.066 2.326.492.814 1.114 1.096 1.65 1.217.845.191 1.527-.113 1.527-.113s20.562-6.11 20.407-12.214C23.922 8.131 17.694 2.948 0 .415"/></svg>',
    tag:"Fork de Debian sans systemd (init sysvinit/OpenRC/runit au choix). Pour les puristes Unix.",
    site:"devuan.org", dl:"devuan.org/os/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Debian",
    req:{ram:"1 Go min. (2 Go conseillés, 4 Go pour un usage confortable) — même base que Debian, dont Devuan reprend les paquets", disk:"10 Go min. (20-25 Go conseillés) — même ordre de grandeur que Debian", cpu:"x86_64, paquets binaires préconstruits (aucune compilation)"},
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
    id:"guix", name:"Guix System", version:"1.5.0", cat:"advanced", color:"#FFB400", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#FFB400" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#FFB400">Gx</text></svg>',
    tag:"Distro GNU 100% libre, configuration déclarative en Scheme, rollbacks transactionnels façon NixOS.",
    site:"gnu.org", dl:"guix.gnu.org/en/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"—",
    req:{ram:"2 Go min. (4 Go conseillés)", disk:"15-20 Go d'espace disque", cpu:"x86_64 — paquets binaires récupérés depuis le cache officiel ; la compilation locale n'intervient que pour un paquet absent du cache"},
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
    site:"hardenedbsd.org", dl:"installers.hardenedbsd.org/pub", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"FreeBSD",
    req:{ram:"1-2 Go min. (hérite globalement des besoins FreeBSD)", disk:"10 Go min. pour la racine, plus selon les données (ZFS gourmand en espace)", cpu:"amd64 ou ARM64"},
    steps:[
      {t:"Télécharger l'image", d:"installers.hardenedbsd.org/pub → builds officiels, branche 15-stable ou current."},
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
    id:"openwrt", name:"OpenWrt", version:"25.12", cat:"network", color:"#00B5E2", icon:"openwrt",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#00B5E2"><path d="m12 0c-3.906 0-7.4465 1.5949-10.006 4.1543l1.6953 1.6953c2.1278-2.1278 5.069-3.4395 8.3105-3.4395 3.2416 0 6.1833 1.3122 8.3105 3.4395l1.6953-1.6953c-2.56-2.5594-6.0999-4.1543-10.006-4.1543zm0 4.3203c-2.7091 0-5.1685 1.1138-6.9473 2.8926l1.6953 1.6953c1.346-1.346 3.2079-2.1777 5.252-2.1777 2.0435 0 3.9053 0.83172 5.252 2.1777l1.6953-1.6953c-1.7782-1.7782-4.2381-2.8926-6.9473-2.8926zm-7.7285 3.7559c-1.3295 1.6792-2.1113 3.7906-2.1113 6.084 0 5.4189 4.4216 9.8398 9.8398 9.8398 5.4183 0 9.8398-4.4209 9.8398-9.8398 0-2.2934-0.79833-4.4048-2.1113-6.084l-1.7129 1.7129c0.8974 1.2298 1.4297 2.7427 1.4297 4.3711 0 4.1053-3.34 7.4473-7.4453 7.4473-4.1052 0-7.4473-3.342-7.4473-7.4473 0-1.6284 0.53174-3.1413 1.4297-4.3711l-1.7109-1.7129zm7.7285 0.56641c-1.5128 0-2.8928 0.61633-3.9062 1.6133l1.6953 1.6953c1.2219-1.2195 3.2006-1.2195 4.4219 0l1.6953-1.6953c-1.0354-1.0361-2.4416-1.6176-3.9062-1.6133zm0 3.8887c-0.8997 0-1.6289 0.72911-1.6289 1.6289 0 0.8992 0.72921 1.6289 1.6289 1.6289 0.8998 0 1.6289-0.72971 1.6289-1.6289-0.0019-0.8992-0.72971-1.6277-1.6289-1.6289z"/></svg>',
    tag:"Firmware libre pour routeurs. Remplace le firmware d'usine par un vrai Linux configurable.",
    site:"openwrt.org", dl:"firmware-selector.openwrt.org/", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Linux",
    req:{ram:"128 Mo conseillés sur le matériel réseau récent ; les modèles limités à 32 Mo ne reçoivent plus toutes les versions", disk:"16 Mo de mémoire flash conseillés sur un routeur ; quelques centaines de Mo sur x86", cpu:"Routeur ou point d'accès supporté (MIPS, ARM…), ou machine x86_64 — vérifier le modèle dans la table de compatibilité du projet"},
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
    site:"aros.sourceforge.io", dl:"aros.sourceforge.io/download.html", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Intermédiaire", base:"AmigaOS",
    req:{ram:"512 Mo min.", disk:"1 Go", cpu:"x86 (build ABIv0) — matériel ancien ou récent en VM"},
    steps:[
      {t:"Télécharger l'image", d:"aros.sourceforge.io/download.html → édition x86 « Live/Install »."},
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
    site:"templeos.org", dl:"templeos.org/Downloads/", license:"Libre / Open-source", popular:false, isNew:false,
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
    site:"getfedora.org", dl:"getfedora.org/coreos/download", license:"Libre / Open-source", popular:false, isNew:false,
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
    site:"flatcar.org", dl:"flatcar.org/releases", license:"Libre / Open-source", popular:false, isNew:false,
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
    id:"talos", name:"Talos Linux", version:"1.13", cat:"container", color:"#4B32C3", icon:"talos",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#4B32C3"><path d="M9.678 11.98c0-2.664-1.13-6.896-2.867-10.804a12 12 0 0 0-1.585.917c1.608 3.668 2.647 7.553 2.647 9.886 0 2.254-1.08 6.145-2.735 9.865a12 12 0 0 0 1.576.93c1.79-3.976 2.964-8.229 2.964-10.795m6.442 0c0-2.336 1.042-6.22 2.646-9.89a12 12 0 0 0-1.608-.922c-1.756 3.957-2.843 8.166-2.843 10.816 0 2.564 1.177 6.819 2.965 10.797a12 12 0 0 0 1.575-.931c-1.655-3.723-2.735-7.616-2.735-9.87m5.45 6.525.31.307a12 12 0 0 0 .936-1.612c-1.866-1.893-3.457-3.938-3.47-5.233-.012-1.264 1.57-3.308 3.446-5.222a12 12 0 0 0-.945-1.603l-.259.258c-2.739 2.766-4.063 4.92-4.047 6.583.016 1.662 1.332 3.81 4.028 6.522M2.411 5.405l-.26-.259a12 12 0 0 0-.946 1.608c3.123 3.173 3.452 4.704 3.448 5.217-.012 1.3-1.603 3.34-3.47 5.229a12 12 0 0 0 .939 1.608c.106-.106.207-.204.31-.308 2.694-2.711 4.01-4.842 4.026-6.516s-1.308-3.809-4.047-6.58M12.002 24c.303 0 .602-.016.898-.037V.037A12 12 0 0 0 12 0c-.304 0-.605.015-.905.037v23.925q.448.035.903.038z"/></svg>',
    tag:"OS minimal sans SSH ni shell, piloté uniquement par API, conçu spécifiquement pour Kubernetes.",
    site:"talos.dev", dl:"factory.talos.dev/", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Linux",
    req:{ram:"1 Go (worker) / 2 Go (control-plane) min.", disk:"10-20 Go d'espace disque", cpu:"x86_64-v2 requis depuis la 1.0, virtualisation matérielle recommandée (VT-x/AMD-V)"},
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
    id:"gpartedlive", name:"GParted Live", version:"1.8.1-2", cat:"recovery", color:"#1ABC9C", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#1ABC9C" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#1ABC9C">Gp</text></svg>',
    tag:"Live minimaliste dédié au partitionnement graphique (redimensionner, déplacer, formater).",
    site:"gparted.org", dl:"gparted.org/download.php", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~5 min", diff:"Facile", base:"Debian",
    req:{ram:"1 Go min. (2 Go conseillés)", disk:"500 Mo pour l'image ISO (officiel) ; une clé USB de 1 Go suffit largement", cpu:"x86_64, fonctionne sur la plupart des PC"},
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
    id:"hirensbootcd", name:"Hiren's BootCD PE", version:"1.0.8", cat:"recovery", color:"#2980B9", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#2980B9" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#2980B9">Hb</text></svg>',
    tag:"Environnement de secours basé sur Windows PE : dépannage, récupération de données, antivirus hors ligne.",
    site:"hirensbootcd.org", dl:"www.hirensbootcd.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Intermédiaire", base:"Windows PE",
    req:{ram:"4 Go min.", disk:"8 Go+ (clé USB bootable, ISO ~3,1 Go)", cpu:"x86_64 (build 64 bits uniquement)"},
    steps:[
      {t:"Télécharger l'ISO", d:"hirensbootcd.org → dernière version PE (build Windows 11 PE x64, ~3,1 Go)."},
      {t:"Graver la clé", d:"Rufus en mode DD (respecter les instructions du site pour l'UEFI)."},
      {t:"Démarrer", d:"Booter sur la clé, un bureau Windows PE minimal se lance."},
      {t:"Outils", d:"Accéder aux utilitaires de partitionnement, récupération de mots de passe, antivirus."},
      {t:"Sauvegarde", d:"Copier les fichiers d'un disque endommagé vers un support externe avant réparation."}
    ],
    alt:["gpartedlive","rescatux","ubcd"],
    errors:[
      {q:"Mauvais disque sélectionné pendant un clonage",a:"C'est l'erreur la plus dangereuse possible avec ce type d'outil : une cible mal choisie efface définitivement le disque de destination. Vérifie toujours deux fois la taille et le nom exact du disque affiché avant de valider."},
      {q:"Erreur « 0xc0000017 » au démarrage",a:"Le projet documente lui-même cette erreur de RAM insuffisante pour créer le disque virtuel : en dessous de 4 Go, utiliser l'ancienne image plus légère (v1.0.1) ; entre 2 et 4 Go, réduire la taille du ramdisk X: dans la configuration."},
      {q:"Un contrôleur RAID/NVMe exotique n'est pas reconnu",a:"Le noyau embarqué sur ces outils est parfois plus ancien que celui du système d'origine et peut manquer un pilote récent. Une version plus à jour de l'outil règle souvent le problème."}
    ],
    faq:[
      {q:"L'outil modifie-t-il le disque automatiquement ?", a:"Non, il s'utilise en mode Live et ne touche au disque que sur action explicite (formatage, restauration, écriture d'image)."},
      {q:"Peut-on l'utiliser sur n'importe quel PC en panne ?", a:"Dans la majorité des cas oui, tant que le PC peut démarrer sur une clé USB ; en cas de panne matérielle plus grave, un diagnostic matériel reste nécessaire."}
    ]
  },
  /* ===================== AJOUTS v3.4 ===================== */
  {
    id:"nitrux", name:"Nitrux", version:"5.0", cat:"desktop", color:"#5E2CA5", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#5E2CA5" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#5E2CA5">Nx</text></svg>',
    tag:"Depuis la version 5.0, bureau Hyprland (Wayland) exclusivement — KDE Plasma et NX Desktop ont été abandonnés.",
    site:"nxos.org", dl:"nxos.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"4 Go min. (8 Go conseillés, officiel nxos.org)", disk:"20-25 Go d'espace disque", cpu:"x86_64 avec support AVX2 (x86-64-v3) exigé — exclut une partie du matériel pourtant 64 bits", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (base Debian, micrologiciels non-free inclus)", nvidia:"Correct — pilote propriétaire disponible mais dépôt non-free à activer manuellement, comme sur Debian"}},
    steps:[
      {t:"Télécharger l'ISO", d:"nxos.org/download → image Liquorix (AMD/Mesa) ou CachyOS (NVIDIA open)."},
      {t:"Graver la clé", d:"balenaEtcher (image spécifique, éviter Rufus en mode ISO)."},
      {t:"Live", d:"Booter et découvrir le bureau Hyprland (Wayland, tiling) préconfiguré."},
      {t:"Installer", d:"Lancer Calamares depuis le bureau live."},
      {t:"NX AppHub", d:"Installer des applis packagées en AppBox plutôt qu'en paquets système."}
    ],
    alt:["lmde","endless","deepin"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"Le CPU n'est pas reconnu comme compatible malgré un 64 bits",a:"Depuis la version 5.0, Nitrux exige un processeur avec le jeu d'instructions AVX2 (x86-64-v3) — une exigence plus stricte que le simple 64 bits, qui exclut une partie du matériel plus ancien pourtant fonctionnel sur d'autres distributions."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"kaos", name:"KaOS", version:"2026.06", cat:"desktop", color:"#21B6A8", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#21B6A8" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#21B6A8">Ka</text></svg>',
    tag:"Distro indépendante rolling. Depuis 2026, bureau Niri/Noctalia (Wayland) par défaut et Dinit remplace systemd — KDE Plasma reste disponible en dépôt.",
    site:"kaosx.us", dl:"kaosx.us/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"—",
    req:{ram:"2 Go min. (4 Go conseillés, officiel kaosx.us)", disk:"8 Go min. (25 Go conseillés, officiel)", cpu:"x86_64 uniquement (aucun paquet 32 bits)", gpu:{open:"Excellent — AMD/Intel pris en charge nativement", nvidia:"Limité — le pilote libre (nouveau) est utilisé par défaut ; le propriétaire existe en paquet communautaire mais reste peu mis en avant, configuration PRIME manuelle documentée pour les portables hybrides"}},
    steps:[
      {t:"Télécharger l'ISO", d:"kaosx.us/download → image live la plus récente."},
      {t:"Graver la clé", d:"balenaEtcher ou dd."},
      {t:"Live", d:"Session live Niri/Noctalia par défaut (Plasma 6 installable ensuite depuis les dépôts)."},
      {t:"Calamares", d:"Installer via l'assistant graphique."},
      {t:"Octopi", d:"Gérer les paquets avec Octopi (interface graphique de pacman)."}
    ],
    alt:["nitrux","ferenos","regolith"],
    errors:[
      {q:"Secure Boot empêche le démarrage sur la clé",a:"Désactive temporairement Secure Boot dans le BIOS/UEFI, ou laisse-le activé si la distribution utilise un shim signé (cas de la plupart des distributions grand public) — le souci vient alors plutôt d'un pilote tiers non signé."},
      {q:"La clé USB ne boote pas ou plante au démarrage",a:"Vérifie l'empreinte SHA-256 de l'ISO avant de graver, et utilise balenaEtcher ou Rufus en mode DD (pas ISO) si le choix est proposé. Une ISO corrompue est la cause la plus fréquente d'un échec silencieux."},
      {q:"KDE Plasma n'est plus sur l'ISO par défaut",a:"C'est un changement volontaire du projet depuis 2026.02 : Niri/Noctalia (Wayland) est devenu le bureau par défaut de l'ISO, mais Plasma 6 reste installable depuis les dépôts officiels pour qui préfère l'ancien environnement."}
    ],
    faq:[
      {q:"Peut-on l'installer en dual-boot avec Windows ?", a:"Oui, la plupart des installateurs proposent un partitionnement automatique aux côtés d'un Windows existant. Sauvegarder ses données avant reste indispensable."},
      {q:"Faut-il des connaissances techniques pour l'utiliser au quotidien ?", a:"Non, ce système est pensé pour un usage grand public, avec une interface graphique complète dès le premier démarrage."}
    ]
  },
  {
    id:"ferenos", name:"Feren OS", version:"2025.03", cat:"desktop", color:"#0F6FC5", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#0F6FC5" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#0F6FC5">Fr</text></svg>',
    tag:"Base Ubuntu/Mint, bureau Cinnamon personnalisé façon Windows pour une transition en douceur.",
    site:"weebly.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"1-2 Go min. (4 Go conseillés) — le projet cible explicitement du matériel ancien", disk:"20 Go min. (50 Go conseillés pour un usage étendu)", cpu:"Processeur 64 bits, aucune exigence de génération récente — contredirait le positionnement du projet sur du matériel ancien", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (base Ubuntu)", nvidia:"Bon — pilote propriétaire proposé via « Pilotes additionnels », comme sur Ubuntu"}},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#E64A19" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#E64A19">Rg</text></svg>',
    tag:"Ubuntu avec un gestionnaire de fenêtres en tuiles (i3/Sway) préconfiguré, pour les claviéristes.",
    site:"regolith-desktop.com", dl:"regolith-desktop.com/docs/using-regolith/install", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Intermédiaire", base:"Ubuntu",
    req:{ram:"2 Go min. (4 Go conseillés — i3/Sway consomment nettement moins que GNOME/KDE)", disk:"10 Go min.", cpu:"Processeur 64 bits, aucune exigence de génération récente — un tiling WM comme i3/Sway est justement peu gourmand en CPU", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (base Ubuntu)", nvidia:"Bon — pilote propriétaire proposé via « Pilotes additionnels », comme sur Ubuntu"}},
    steps:[
      {t:"Télécharger l'ISO", d:"regolith-desktop.com/docs/using-regolith/install → procédure officielle (dépôt à ajouter sur une Ubuntu/Debian existante, ou image ISO)."},
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
    site:"univention.com", dl:"www.univention.com/products/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~20 min", diff:"Avancé", base:"Debian",
    req:{ram:"1 Go min. publié, davantage selon le nombre d'utilisateurs", disk:"8 Go min. publié, davantage selon les données du domaine", cpu:"amd64 (64 bits) uniquement, UEFI et Secure Boot pris en charge"},
    steps:[
      {t:"Télécharger l'ISO", d:"univention.com/products/download → édition Core (gratuite)."},
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
    site:"smartos.org", dl:"smartos.org/get-smartos", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"illumos",
    req:{ram:"2 Go min., nettement plus en production : le système entier tourne en RAM", disk:"Aucun disque système : SmartOS démarre depuis une clé USB ou en PXE. Les disques ne servent qu'au pool ZFS de données", cpu:"x86_64 avec extensions de virtualisation (VT-x / AMD-V) pour les machines virtuelles KVM et bhyve"},
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
    site:"harvesterhci.io", dl:"github.com/harvester/harvester/releases", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~20 min", diff:"Avancé", base:"openSUSE",
    req:{ram:"32 Go min. par nœud pour un test, 64 Go+ en production", disk:"250 Go min. en test, 500 Go+ en production (SSD/NVMe, 5 000 IOPS)", cpu:"8 cœurs min. (16+ en production), virtualisation matérielle obligatoire"},
    steps:[
      {t:"Télécharger l'ISO", d:"github.com/harvester/harvester/releases → image ISO d'installation de la dernière version."},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#7A288A" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#7A288A">Kp</text></svg>',
    tag:"Version défensive (blue team) de Kali : SIEM, IDS et outils SOC préinstallés aux côtés des classiques.",
    site:"kali.org", dl:"kali.org/get-kali", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Debian",
    req:{ram:"2 Go min. pour l'OS seul (8 Go+ conseillés dès qu'Elastic SIEM est déployé)", disk:"8-32 Go pour une clé USB persistante", cpu:"x86_64 (VM pratique pour un labo isolé ; le bare-metal reste préférable pour l'injection Wi-Fi et le cracking GPU, mal supportés en VM)"},
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
    site:"tsurugi-linux.org", dl:"tsurugi-linux.org/downloads.php", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Avancé", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"110 Go d'espace disque (configuration officielle recommandée)", cpu:"x86_64, 4 GHz dual-core ou mieux recommandé par le projet"},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#54487A" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#54487A">Pt</text></svg>',
    tag:"Overlay pentest pour Gentoo. Compilation source, kernel durci (hardened), pour utilisateurs avancés.",
    site:"pentoo.ch", dl:"pentoo.ch/downloads", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~20 min", diff:"Avancé", base:"Gentoo",
    req:{ram:"512 Mo-2 Go suggérés (selon le wiki officiel du projet)", disk:"20 Go min. (30 Go+ conseillés)", cpu:"x86_64 — le bare-metal est conseillé ici plus que pour les autres distributions de sécurité : les pilotes Wi-Fi patchés pour l'injection de paquets et le cracking GPGPU (OpenCL/CUDA), cœur du projet, perdent l'accès matériel direct en VM"},
    steps:[
      {t:"Télécharger l'ISO", d:"pentoo.ch/downloads → image live amd64 (hardened)."},
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
    id:"absolutelinux", name:"Absolute Linux", version:"20240602 (dernière de Paul Sherman, avant la reprise eXybit)", cat:"lightweight", color:"#2F4F4F", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#2F4F4F" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#2F4F4F">Ab</text></svg>',
    tag:"Slackware simplifiée avec IceWM, pensée pour rester légère et rapide sans sacrifier la stabilité.",
    site:"absolutelinux.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Slackware",
    req:{ram:"512 Mo min. (1 Go conseillé avec IceWM) — dernier chiffre connu avant l'arrêt de distribution du site officiel, aucune page de specs active à vérifier aujourd'hui", disk:"8 Go min.", cpu:"1 GHz min., x86_64 depuis ~2005 (Pentium 4 ou équivalent)"},
    steps:[
      {t:"Télécharger l'ISO", d:"Attention : absolutelinux.org n'affiche plus qu'une page « Returning! » depuis sa reprise par eXybit Technologies, sans image téléchargeable. Aucune version n'est distribuée officiellement pour l'instant — vérifier l'état du projet avant de compter dessus."},
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
    id:"trisquelmini", name:"Trisquel Mini", version:"12.0 \"Ecne\"", cat:"lightweight", color:"#4A90D9", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#4A90D9" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#4A90D9">Tq</text></svg>',
    tag:"Édition légère (LXDE) de Trisquel, distro 100% logiciel libre approuvée par la FSF, basée sur Ubuntu.",
    site:"trisquel.info", dl:"trisquel.info/en/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"2 Go min. pour une install physique (1 Go en VM), d'après le wiki officiel — nettement plus que ce que le nom \"Mini\" suggère", disk:"7,4 Go d'espace disque (chiffre officiel, sans mises à jour téléchargées)", cpu:"64 bits (amd64, arm64, ppc64el, riscv64 ou armhf 32 bits)"},
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
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Le nom \"Mini\" fait référence au bureau LXDE léger plutôt qu'à des besoins matériels minuscules : la version 12 officielle demande 2 Go de RAM, plus que beaucoup d'autres distributions de ce cluster."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"crux", name:"CRUX", version:"3.8", cat:"advanced", color:"#C0392B", icon:null,
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#C0392B" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#C0392B">Cx</text></svg>',
    tag:"Distro source-based minimaliste, gestionnaire de ports façon BSD, pour puristes du « fait main ».",
    site:"crux.nu", dl:"crux.nu/Download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~30 min", diff:"Avancé", base:"—",
    req:{ram:"2 Go min. pour installer depuis le DVD/clé USB (officiel, Handbook 3.8 — ce seuil a augmenté avec les versions, 192 Mo suffisaient il y a quelques années) ; un chroot personnalisé peut se faire avec moins", disk:"1 Go conseillé pour la partition racine au minimum (CRUX lui-même n'occupe que 200-500 Mo, officiel) — prévoir plus selon les paquets choisis", cpu:"x86_64 — système construit depuis les sources : prévoir un CPU rapide et plusieurs heures pour la compilation initiale"},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#1565C0" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#1565C0">Bf</text></svg>',
    tag:"Bureau GNOME immuable du projet Universal Blue, basé sur Fedora Atomic, orienté dev/cloud-native.",
    site:"projectbluefin.io", dl:"docs.projectbluefin.io/downloads", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"Fedora",
    req:{ram:"16 Go — minimum officiellement documenté (ublue-os), volontairement élevé car Bluefin embarque une stack de développement cloud-native par conteneurs ; fonctionne dans les faits avec moins mais sans garantie ni support", disk:"11 Go pour une installation standard, 19 Go avec le mode développeur (bluefin-dx) activé — officiel", cpu:"x86_64 — images préconstruites, mises à jour par transaction (rien n'est compilé sur la machine)"},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#8E44AD" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#8E44AD">Au</text></svg>',
    tag:"Équivalent KDE Plasma de Bluefin (Universal Blue) : bureau immuable, mises à jour atomiques.",
    site:"getaurora.dev", dl:"getaurora.dev/en", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"Fedora",
    req:{ram:"4 Go conseillés en référence (socle Fedora Atomic) — non documenté officiellement par le projet Aurora lui-même", disk:"40 Go SSD conseillés (officiel docs.getaurora.dev) — un disque dur classique fonctionne mais dégrade fortement les mises à jour", cpu:"x86_64 — images préconstruites, mises à jour par transaction (rien n'est compilé sur la machine)"},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#4E9A06" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#4E9A06">Mo</text></svg>',
    tag:"openSUSE immuable en transactions atomiques (transactional-update), pensée conteneurs et edge.",
    site:"opensuse.org", dl:"get.opensuse.org/microos", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Avancé", base:"openSUSE",
    req:{ram:"1 Go min. (2 Go conseillés, officiel) — pensé pour des charges conteneurisées, pas pour un bureau classique", disk:"5 Go pour la racine + 5 Go pour /var (minimum officiel) ; 20 Go + 40 Go conseillés", cpu:"x86_64 — images préconstruites, mises à jour par transaction (rien n'est compilé sur la machine)"},
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
    site:"nomadbsd.org", dl:"nomadbsd.org/download.html", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Facile", base:"FreeBSD",
    req:{ram:"1 Go min. (2 Go conseillés avec ZFS)", disk:"clé USB de 5 Go min. (image de ~4,7 Go à écrire dessus)", cpu:"amd64/i386, 1,2 GHz min."},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#16A085" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#16A085">Ef</text></svg>',
    tag:"UTM (Unified Threat Management) libre basé sur Linux : pare-feu, VPN, antivirus, filtrage web.",
    site:"endian.com", dl:"endian.com/community", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"Linux",
    req:{ram:"256 Mo min. (512 Mo conseillé, 1 Go+ pour un réseau plus large)", disk:"4 Go min. (8 Go pour un petit réseau, 20 Go pour un plus grand)", cpu:"x86 500 MHz min. (1 GHz conseillé), deux cartes réseau requises"},
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
    site:"9front.org", dl:"9front.org/download", license:"Libre / Open-source", popular:false, isNew:false,
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
    site:"genode.org", dl:"genode.org/download", license:"Libre / Open-source", popular:false, isNew:false,
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
    site:"github.com/inferno-os/inferno-os", dl:"github.com/inferno-os/inferno-os/blob/master/INSTALL", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Avancé", base:"Plan 9",
    req:{ram:"2-4 Go selon le projet", disk:"8-16 Go d'espace disque", cpu:"x86_64 standard"},
    steps:[
      {t:"Télécharger l'archive", d:"github.com/inferno-os/inferno-os → sources de la distribution, hébergée (Linux/Windows/macOS) ou native. Le site historique vitanuova.com n'est plus en ligne."},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#34495E" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#34495E">Ub</text></svg>',
    tag:"Compilation historique d'utilitaires de diagnostic matériel, tests mémoire, disques et BIOS.",
    site:"ultimatebootcd.com", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Intermédiaire", base:"FreeDOS / Linux",
    req:{ram:"512 Mo à 1 Go suffisent en pratique (aucun minimum strict publié — ça dépend des outils lancés depuis le menu)", disk:"2-4 Go (clé USB bootable, 1 Go+ conseillé pour la capacité)", cpu:"x86_64, fonctionne sur la plupart des PC"},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#D68910" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#D68910">Tr</text></svg>',
    tag:"Live orienté maintenance de parc : scan antivirus hors ligne, réinitialisation de mots de passe Windows.",
    site:"trinityhome.org", dl:"trinityhome.org/trinity_rescue_kit_download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Intermédiaire", base:"Linux",
    req:{ram:"256 Mo min. (512 Mo conseillés)", disk:"environ 150-180 Mo pour l'image ISO (officiel trinityhome.org) — un des plus petits de cette catégorie ; projet resté sans mise à jour depuis le début des années 2010, à utiliser en connaissance de cause", cpu:"x86_64, fonctionne sur la plupart des PC"},
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
      {q:"Le projet est-il toujours maintenu ?", a:"Non : la dernière version (3.4 build 372) date d'avril 2011, et le site n'a plus été mis à jour depuis 2016. Les liens de téléchargement officiels sont cassés ; les images ne se trouvent plus que sur des miroirs tiers (MajorGeeks, Softpedia)."},
      {q:"Peut-on l'utiliser sur n'importe quel PC en panne ?", a:"Sur du matériel ancien oui ; sur du matériel récent, l'absence de mise à jour depuis 2011 peut poser des problèmes de pilotes réseau/stockage ou de démarrage UEFI Secure Boot."}
    ]
  },
  {
    id:"bottlerocket", name:"Bottlerocket", version:"1.x", cat:"container", color:"#FF9900", icon:null,
    svg:'<svg viewBox="0 0 24 24" width="30" height="30"><rect width="24" height="24" rx="4" fill="#FF9900" fill-opacity=".15"/><text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="9" font-weight="700" fill="#FF9900">Br</text></svg>',
    tag:"OS minimal orienté conteneurs porté par AWS, pensé pour EKS/ECS, sans shell ni gestionnaire de paquets classique.",
    site:"bottlerocket.dev", dl:"github.com/bottlerocket-os/bottlerocket/releases", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Avancé", base:"Linux",
    req:{ram:"512 Mo min. (1 vCPU)", disk:"2 Go (volume racine, fixe) + 20 Go (volume données, ajustable)", cpu:"x86_64, virtualisation matérielle recommandée (VT-x/AMD-V)"},
    steps:[
      {t:"Choisir la variante", d:"github.com/bottlerocket-os/bottlerocket → choisir la variante adaptée (EKS, ECS, VMware, bare metal). Images et notes de version dans les releases."},
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
    id:"raspios", name:"Raspberry Pi OS", version:"Trixie", cat:"lightweight", color:"#C51A4A", icon:"raspberrypi",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#C51A4A"><path d="m19.8955 10.8961-.1726-.3028c.0068-2.1746-1.0022-3.061-2.1788-3.7348.356-.0938.7237-.1711.8245-.6182.6118-.1566.7397-.4398.8011-.7398.16-.1066.6955-.4061.6394-.9211.2998-.2069.4669-.4725.3819-.8487.3222-.3515.407-.6419.2702-.9096.3868-.4805.2152-.7295.05-.9817.2897-.5254.0341-1.0887-.7758-.9944-.3221-.4733-1.0244-.3659-1.133-.3637-.1215-.1519-.2819-.2821-.7755-.219-.3197-.2851-.6771-.2364-1.0458-.0964-.4378-.3403-.7275-.0675-1.0584.0356-.53-.1706-.6513.0631-.9117.1583-.5781-.1203-.7538.1416-1.0309.4182l-.3224-.0063c-.8719.5061-1.305 1.5366-1.4585 2.0664-.1536-.5299-.5858-1.5604-1.4575-2.0664l-.3223.0063C9.942.5014 9.7663.2394 9.1883.3597 8.9279.2646 8.807.0309 8.2766.2015c-.2172-.0677-.417-.2084-.6522-.2012l.0004.0002C7.5017.0041 7.369.049 7.2185.166c-.3688-.1401-.7262-.1887-1.0459.0964-.4936-.0631-.654.0671-.7756.219C5.2887.4791 4.5862.3717 4.264.845c-.8096-.0943-1.0655.4691-.7756.9944-.1653.2521-.3366.5013.05.9819-.1367.2677-.0519.5581.2703.9096-.085.3763.0822.6418.3819.8487-.0561.515.4795.8144.6394.9211.0614.3001.1894.5832.8011.7398.1008.4472.4685.5244.8245.6183-1.1766.6737-2.1856 1.56-2.1788 3.7348l-.1724.3028c-1.3491.8082-2.5629 3.4056-.6648 5.5167.124.6609.3319 1.1355.5171 1.6609.2769 2.117 2.0841 3.1082 2.5608 3.2255.6984.524 1.4423 1.0212 2.449 1.3696.949.964 1.977 1.3314 3.0107 1.3308.0152 0 .0306.0002.0457 0 1.0337.0006 2.0618-.3668 3.0107-1.3308 1.0067-.3483 1.7506-.8456 2.4491-1.3696.4766-.1173 2.2838-1.1085 2.5607-3.2255.1851-.5253.3931-1 .517-1.6609 1.8981-2.1113.6843-4.7089-.6649-5.517zm-1.0386-.3715c-.0704.8759-4.6354-3.0504-3.8472-3.1808 2.1391-.3558 3.9191.896 3.8472 3.1808zm-2.0155 4.3649c-1.1481.7409-2.8025.2626-3.6953-1.0681-.8928-1.3306-.6858-3.0101.4623-3.7509 1.1481-.7409 2.8025-.2627 3.6953 1.068.8927 1.3307.6858 3.0101-.4623 3.751zM13.6591 1.3721c.0396.1967.0843.321.1354.3577.2537-.272.4611-.5506.7878-.8123.0011.1537-.0776.3205.1169.4425.1752-.2356.4119-.4459.7263-.6244-.1514.2611-.026.3404.0554.4486.24-.2059.4681-.4144.9109-.5759-.121.1474-.2902.2914-.1108.4607.2473-.1544.496-.3086 1.0833-.4183-.1323.1475-.4059.295-.2401.4426.3104-.1186.6539-.2047 1.034-.2546-.182.1496-.3337.2963-.1846.4122.3323-.1022.7899-.2398 1.2372-.1212l-.2832.2849c-.0314.0382.6623.0297 1.1202.0364-.167.2321-.3375.4562-.437.8548.0454.0459.2723.0204.4862 0-.2194.4618-.6004.5783-.6893.776.134.1015.32.075.5232.006-.158.3254-.4892.5484-.7509.8123.0662.047.1818.075.4555.0425-.2418.257-.5339.492-.8802.7032.0614.0708.2722.0681.4678.0727-.3136.3069-.7173.466-1.0955.6668.1885.1288.3234.0988.4678.097-.2676.2198-.7225.3342-1.1448.4668.0803.1249.1607.1589.3324.194-.447.2473-1.0873.1343-1.2679.2607.0435.1243.1665.2053.3139.2728-.7197.0418-2.6879-.0262-3.0652-1.5156.7367-.8094 2.0813-1.7593 4.394-2.934-1.7994.6022-3.4229 1.405-4.7817 2.5096-1.5978-.7436-.4965-2.6197.283-3.3645zm-1.6126 5.3718c1.1329-.0123 2.5356.8325 2.53 1.6286-.005.7027-.9851 1.2715-2.5213 1.2607-1.5043-.0177-2.5172-.7148-2.5137-1.3957.003-.5603 1.2282-1.5263 2.505-1.4936zm-5.7646-.6006c.1717-.0351.252-.0692.3323-.194-.4223-.1327-.8772-.247-1.1448-.4668.1444.0018.2792.0318.4678-.097-.3783-.2008-.782-.3599-1.0956-.6668.1955-.0048.4064-.002.4677-.0728-.3462-.2113-.6383-.4463-.8801-.7033.2738.0325.3893.0045.4555-.0425-.2617-.264-.593-.487-.7509-.8123.2032.069.3892.0954.5232-.006-.089-.1977-.47-.3142-.6894-.776.214.0204.4409.0459.4863 0-.0994-.3985-.2698-.6226-.4369-.8547.4579-.0067 1.1516.0018 1.1202-.0364l-.2831-.2849c.4472-.1186.9049.019 1.2371.1213.1492-.1159-.0026-.2626-.1847-.4123.3801.05.7236.1361 1.034.2547.1659-.1476-.1076-.2951-.24-.4426.5872.1097.8361.2639 1.0833.4183.1794-.1694.0103-.3133-.1108-.4607.4428.1615.6709.37.911.5759.0814-.1082.2068-.1875.0554-.4486.3143.1785.5511.3888.7263.6244.1945-.122.1159-.2888.1169-.4426.3267.2618.534.5404.7879.8124.0511-.0366.0959-.161.1354-.3577.7794.7448 1.8807 2.6208.2831 3.3646-1.3589-1.1039-2.9817-1.9064-4.78-2.5086 2.3115 1.174 3.6556 2.1239 4.392 2.9328-.3773 1.4895-2.3455 1.5575-3.0651 1.5157.1473-.0676.2703-.1485.3139-.2728-.1806-.1264-.8209-.0134-1.2679-.2607zm2.8175 1.1334c.7881.1304-3.7769 4.0567-3.8472 3.1809-.0719-2.2846 1.7079-3.5367 3.8472-3.1809zm-4.847 8.7567c-1.1094-.8789-1.4668-3.4529.5901-4.6097 1.2394-.3273.4184 5.051-.5901 4.6097zm4.2656 4.5989c-.6257.3719-2.1452.2187-3.2252-1.3095-.7283-1.2823-.6345-2.5872-.123-2.9705.7648-.4589 1.9464.1609 2.8559 1.2003.7923.9405 1.1536 2.5927.4923 3.0797zm-1.2415-5.6086c-1.1481-.7409-1.3551-2.4203-.4623-3.7511.8928-1.3307 2.5472-1.8089 3.6952-1.068 1.1481.7409 1.3551 2.4203.4623 3.7509-.8926 1.3308-2.5471 1.809-3.6952 1.0682zm4.7948 8.2279c-1.3763.0584-2.7258-1.1105-2.7081-1.5157-.0206-.594 1.6758-1.0578 2.782-1.0306 1.1131-.0479 2.6068.3531 2.6097.8851.0184.5166-1.3547 1.6838-2.6836 1.6612zm2.7584-5.8578c.0081 1.3899-1.226 2.5225-2.7562 2.5299-1.5302.0073-2.7773-1.1135-2.7854-2.5033v-.0265c-.008-1.3899 1.2259-2.5226 2.7562-2.5299 1.5302-.0073 2.7773 1.1134 2.7853 2.5033a.7794.7794 0 0 1 .0001.0265zm3.855 2.0029c-1.186 1.6208-2.7916 1.684-3.3896 1.2325-.6255-.5811-.148-2.3854.7094-3.3747v-.0003c.9812-1.0912 2.0302-1.8037 2.7609-1.2469.4919.4828.7805 2.3008-.0807 3.3894zm1.0724-3.4301c-1.0086.4413-1.8298-4.9372-.5901-4.61 2.0568 1.1569 1.6994 3.731.5901 4.61zm-.0256-8.3279h.2985v-.5304h.2986c.1502 0 .2053.0624.2262.2052.0152.1088.0113.2395.0477.3253h.2984c-.0533-.0763-.0515-.2358-.0571-.3213-.0097-.1373-.0513-.2796-.1977-.3176v-.0037c.1502-.061.2149-.1807.2149-.341 0-.2048-.1539-.3738-.3974-.3738h-.732v1.3573zm.2985-1.1255h.3269c.1333 0 .2054.0573.2054.188 0 .1369-.0721.1942-.2054.1942H20.03v-.3822zm-1.0337.4633c0 .7009.5682 1.2694 1.2695 1.2694s1.2695-.5684 1.2695-1.2694c0-.7013-.5683-1.2697-1.2695-1.2697-.7013 0-1.2695.5684-1.2695 1.2697zm2.3275 0c0 .5845-.4737 1.058-1.058 1.058s-1.058-.4735-1.058-1.058c0-.5849.4737-1.058 1.058-1.058s1.058.4731 1.058 1.058z"/></svg>',
    tag:"L'OS officiel du Raspberry Pi. Debian allégé, taillé pour les cartes ARM.",
    site:"raspberrypi.com", dl:"www.raspberrypi.com/software", license:"Libre / Open-source", popular:true, isNew:false,
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#84A454"><path d="M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.628-5.373-12-12-12zm2.005 3.245L18.667 6 14 8.755ZM12 4.66c.342 0 .676.028 1.005.073v1.021A6.327 6.327 0 0 0 6.12 9.63l-.865-.51C6.378 6.503 8.978 4.66 12 4.66Zm0 2.495c.342 0 .677.041 1 .11v1.036a3.866 3.866 0 0 0-1-.13 3.812 3.812 0 0 0-3.672 2.76l-.896-.531A4.855 4.855 0 0 1 12 7.156Zm5.885.464A7.305 7.305 0 0 1 19.34 12a7.308 7.308 0 0 1-1.5 4.437l-.87-.515A6.3 6.3 0 0 0 18.329 12a6.31 6.31 0 0 0-1.313-3.865zm-2.171 1.286a4.81 4.81 0 0 1-.047 6.25l-.891-.526A3.793 3.793 0 0 0 15.828 12c0-.996-.377-1.899-.995-2.578zm-12.209.339L8.167 12 3.5 14.755Zm4.823 3.823A3.809 3.809 0 0 0 12 15.823c.346 0 .681-.047 1-.13v1.041a4.81 4.81 0 0 1-1 .11c-2.106 0-3.906-1.362-4.568-3.25zM6.12 14.37A6.327 6.327 0 0 0 12 18.328c.34 0 .67-.027.995-.078v1.016a7.212 7.212 0 0 1-.995.073c-3.022 0-5.622-1.842-6.745-4.459zm7.88.963 4.661 2.75-4.666 2.756z"/></svg>',
    tag:"Ubuntu avec le bureau MATE traditionnel : familier, léger et configurable.",
    site:"ubuntu-mate.org", dl:"ubuntu-mate.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"1 Go min. (2 Go conseillés, officiel Ubuntu MATE)", disk:"16 Go min.", cpu:"Dual-core 1 GHz ou mieux, 64 bits", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (base Ubuntu)", nvidia:"Bon — pilote propriétaire proposé via « Pilotes additionnels », comme sur Ubuntu"}},
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
    id:"ubuntubudgie", name:"Ubuntu Budgie", version:"26.04 LTS", cat:"desktop", color:"#4B4C6E", icon:"ubuntu",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#4B4C6E"><path d="M17.61.455a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zM12.92.8C8.923.777 5.137 2.941 3.148 6.451a4.5 4.5 0 0 1 .26-.007 4.92 4.92 0 0 1 2.585.737A8.316 8.316 0 0 1 12.688 3.6 4.944 4.944 0 0 1 13.723.834 11.008 11.008 0 0 0 12.92.8zm9.226 4.994a4.915 4.915 0 0 1-1.918 2.246 8.36 8.36 0 0 1-.273 8.303 4.89 4.89 0 0 1 1.632 2.54 11.156 11.156 0 0 0 .559-13.089zM3.41 7.932A3.41 3.41 0 0 0 0 11.342a3.41 3.41 0 0 0 3.41 3.409 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zm2.027 7.866a4.908 4.908 0 0 1-2.915.358 11.1 11.1 0 0 0 7.991 6.698 11.234 11.234 0 0 0 2.422.249 4.879 4.879 0 0 1-.999-2.85 8.484 8.484 0 0 1-.836-.136 8.304 8.304 0 0 1-5.663-4.32zm11.405.928a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41z"/></svg>',
    tag:"Ubuntu avec le bureau Budgie : élégant, moderne et épuré.",
    site:"ubuntubudgie.org", dl:"ubuntubudgie.org/downloads", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits, aucune exigence de génération particulière documentée par le projet", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (base Ubuntu)", nvidia:"Bon — pilote propriétaire proposé via « Pilotes additionnels », comme sur Ubuntu"}},
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
    id:"ubuntukylin", name:"Ubuntu Kylin", version:"26.04 LTS", cat:"desktop", color:"#EA1D2C", icon:"ubuntu",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#EA1D2C"><path d="M17.61.455a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zM12.92.8C8.923.777 5.137 2.941 3.148 6.451a4.5 4.5 0 0 1 .26-.007 4.92 4.92 0 0 1 2.585.737A8.316 8.316 0 0 1 12.688 3.6 4.944 4.944 0 0 1 13.723.834 11.008 11.008 0 0 0 12.92.8zm9.226 4.994a4.915 4.915 0 0 1-1.918 2.246 8.36 8.36 0 0 1-.273 8.303 4.89 4.89 0 0 1 1.632 2.54 11.156 11.156 0 0 0 .559-13.089zM3.41 7.932A3.41 3.41 0 0 0 0 11.342a3.41 3.41 0 0 0 3.41 3.409 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zm2.027 7.866a4.908 4.908 0 0 1-2.915.358 11.1 11.1 0 0 0 7.991 6.698 11.234 11.234 0 0 0 2.422.249 4.879 4.879 0 0 1-.999-2.85 8.484 8.484 0 0 1-.836-.136 8.304 8.304 0 0 1-5.663-4.32zm11.405.928a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41z"/></svg>',
    tag:"L'édition officielle d'Ubuntu pour le public chinois, bureau UKUI soigné.",
    site:"ubuntukylin.com", dl:"ubuntukylin.com/downloads/download-en.html", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"4 Go min. (8 Go conseillés)", disk:"20-25 Go d'espace disque", cpu:"Processeur 64 bits, aucune exigence de génération particulière documentée par le projet", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (base Ubuntu)", nvidia:"Bon — pilote propriétaire proposé via « Pilotes additionnels », comme sur Ubuntu"}},
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
    id:"lmde", name:"LMDE 7", version:"Gigi", cat:"desktop", color:"#87CF3E", icon:"linuxmint",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#87CF3E"><path d="M5.438 5.906v8.438c0 2.06 1.69 3.75 3.75 3.75h5.625c2.06 0 3.75-1.69 3.75-3.75V9.656a2.827 2.827 0 0 0-2.813-2.812 2.8 2.8 0 0 0-1.875.737A2.8 2.8 0 0 0 12 6.844a2.827 2.827 0 0 0-2.812 2.812v4.688h1.875V9.656c0-.529.408-.937.937-.937s.938.408.938.937v4.688h1.875V9.656c0-.529.408-.937.937-.937s.938.408.938.937v4.688a1.86 1.86 0 0 1-1.875 1.875H9.188a1.86 1.86 0 0 1-1.875-1.875V5.906ZM12 0C5.384 0 0 5.384 0 12s5.384 12 12 12 12-5.384 12-12S18.616 0 12 0m0 1.875A10.11 10.11 0 0 1 22.125 12 10.11 10.11 0 0 1 12 22.125 10.11 10.11 0 0 1 1.875 12 10.11 10.11 0 0 1 12 1.875"/></svg>',
    tag:"Linux Mint Debian Edition : le confort de Mint, directement sur base Debian.",
    site:"linuxmint.com", dl:"linuxmint.com/download_lmde.php", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Debian",
    req:{ram:"2 Go min. (4 Go conseillés) — mêmes chiffres que Linux Mint main, la FAQ officielle les présente comme valables pour toutes les éditions", disk:"20-25 Go d'espace disque", cpu:"64 bits obligatoire (le 32 bits a été abandonné avec la LMDE 7, base Debian 13), sans exigence de génération particulière", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (base Debian, micrologiciels non-free inclus)", nvidia:"Correct — contrairement à l'édition Ubuntu de Mint, LMDE n'a pas de Gestionnaire de pilotes : dépôt non-free à activer manuellement, avec des retours documentés de frictions à la mise à niveau (session graphique en échec après installation du pilote)"}},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#73BA25"><path d="M10.724 0a12 12 0 0 0-9.448 4.623c1.464.391 2.5.727 2.81.832.005-.19.037-1.893.037-1.893s.004-.04.025-.06c.026-.026.065-.018.065-.018.385.056 8.602 1.274 12.066 3.292.427.25.638.517.902.786.958.99 2.223 5.108 2.359 5.957.005.033-.036.07-.054.083a5.177 5.177 0 0 1-.313.228c-.82.55-2.708 1.872-5.13 1.656-2.176-.193-5.018-1.44-8.445-3.699.336.79.668 1.58 1 2.371.497.258 5.287 2.7 7.651 2.651 1.904-.04 3.941-.968 4.756-1.458 0 0 .179-.108.257-.048.085.066.061.167.041.27-.05.234-.164.66-.242.863l-.065.165c-.093.25-.183.482-.356.625-.48.436-1.246.784-2.446 1.305-1.855.812-4.865 1.328-7.66 1.31-1.001-.022-1.968-.133-2.817-.232-1.743-.197-3.161-.357-4.026.269A12 12 0 0 0 10.724 24a12 12 0 0 0 12-12 12 12 0 0 0-12-12zM13.4 6.963a3.503 3.503 0 0 0-2.521.942 3.498 3.498 0 0 0-1.114 2.449 3.528 3.528 0 0 0 3.39 3.64 3.48 3.48 0 0 0 2.524-.946 3.504 3.504 0 0 0 1.114-2.446 3.527 3.527 0 0 0-3.393-3.64zm-.03 1.035a2.458 2.458 0 0 1 2.368 2.539 2.43 2.43 0 0 1-.774 1.706 2.456 2.456 0 0 1-1.762.659 2.461 2.461 0 0 1-2.364-2.542c.02-.655.3-1.26.777-1.707a2.419 2.419 0 0 1 1.756-.655zm.402 1.23c-.602 0-1.087.325-1.087.727 0 .4.485.725 1.087.725.6 0 1.088-.326 1.088-.725 0-.402-.487-.726-1.088-.726Z"/></svg>',
    tag:"La rolling release d'openSUSE : toujours à jour, testée par openQA.",
    site:"opensuse.org", dl:"get.opensuse.org/tumbleweed", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"—",
    req:{ram:"2 Go pour l'installation graphique (1 Go en mode texte), officiel openSUSE", disk:"8 Go min. (officiel) ; 40 Go conseillés avec Btrfs et snapshots activés — le réglage par défaut de Tumbleweed", cpu:"x86_64, paquets binaires préconstruits (aucune compilation)"},
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
    id:"fedorakde", name:"Fedora KDE", version:"43", cat:"desktop", color:"#294172", icon:"fedora",
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#294172"><path d="M12.001 0C5.376 0 .008 5.369.004 11.992H.002v9.287h.002A2.726 2.726 0 0 0 2.73 24h9.275c6.626-.004 11.993-5.372 11.993-11.997C23.998 5.375 18.628 0 12 0zm2.431 4.94c2.015 0 3.917 1.543 3.917 3.671 0 .197.001.395-.03.619a1.002 1.002 0 0 1-1.137.893 1.002 1.002 0 0 1-.842-1.175 2.61 2.61 0 0 0 .013-.337c0-1.207-.987-1.672-1.92-1.672-.934 0-1.775.784-1.777 1.672.016 1.027 0 2.046 0 3.07l1.732-.012c1.352-.028 1.368 2.009.016 1.998l-1.748.013c-.004.826.006.677.002 1.093 0 0 .015 1.01-.016 1.776-.209 2.25-2.124 4.046-4.424 4.046-2.438 0-4.448-1.993-4.448-4.437.073-2.515 2.078-4.492 4.603-4.469l1.409-.01v1.996l-1.409.013h-.007c-1.388.04-2.577.984-2.6 2.47a2.438 2.438 0 0 0 2.452 2.439c1.356 0 2.441-.987 2.441-2.437l-.001-7.557c0-.14.005-.252.02-.407.23-1.848 1.883-3.256 3.754-3.256z"/></svg>',
    tag:"Le spin officiel de Fedora avec KDE Plasma à la place de GNOME.",
    site:"fedoraproject.org", dl:"spins.fedoraproject.org/kde", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"—",
    req:{ram:"4 Go min. (8 Go conseillés, officiel fedoraproject.org)", disk:"40 Go conseillés (officiel — le double pour un meilleur confort)", cpu:"x86-64-v2 obligatoire depuis Fedora 33+ (exclut les CPU antérieurs à Nehalem/Bulldozer, ~2008-2011) — pas besoin d'un CPU de dernière génération pour autant", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (pilotes libres inclus)", nvidia:"Correct — pilote propriétaire non fourni par Fedora (politique du projet), à installer via le dépôt tiers RPM Fusion, comme sur Fedora Workstation"}},
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
    lastVerified:"2026-08",
    tag:"OS immuable pensé pour l'éducation, riche en contenu hors-ligne. GNOME simplifié.",
    site:"endlessos.com", dl:"endlessos.com/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Debian",
    req:{ram:"2 Go min. (4 Go usage léger, 8 Go multitâche)", disk:"16 Go min. (édition Basic), 32 Go+ (édition Full avec contenu préinstallé)", cpu:"x86_64 requis (32 bits non supporté), conçu pour redonner vie à du matériel ancien", gpu:{open:"Excellent — AMD/Intel pris en charge nativement (base Debian, micrologiciels non-free inclus)", nvidia:"Correct — pilote propriétaire disponible mais dépôt non-free à activer manuellement, comme sur Debian"}},
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
    lastVerified:"2026-08",
    tag:"OS immuable sur base Debian sid, transactions atomiques (ABRoot) et conteneurs.",
    site:"vanillaos.org", dl:"github.com/Vanilla-OS/live-iso/releases", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Debian",
    req:{ram:"4 Go min. (8 Go conseillés, officiel docs.vanillaos.org)", disk:"50 Go min. — exigé par le système de partitions A/B d'ABRoot (officiel), nettement plus que la moyenne des distributions", cpu:"x86_64 — images préconstruites, mises à jour par transaction (rien n'est compilé sur la machine)"},
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
    lastVerified:"2026-08",
    tag:"Arch immuable qui fait tourner apps Arch, Fedora, Ubuntu et Android côte à côte.",
    site:"blendos.co", dl:"blendos.co/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"Arch",
    req:{ram:"4 Go min. (officiel blendos.co)", disk:"25 Go min. (officiel blendos.co)", cpu:"x86_64 — images préconstruites, mises à jour par transaction (rien n'est compilé sur la machine)"},
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
    id:"clearlinux", name:"Clear Linux OS", version:"arrêtée (2025)", cat:"advanced", color:"#0071C5", icon:null,
    lastVerified:"2026-08",
    tag:"Distribution Intel optimisée pour la performance x86, bundles au lieu de paquets — arrêtée par Intel en 2025, plus aucune mise à jour.",
    site:"github.com/clearlinux", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Avancé", base:"—",
    req:{ram:"1 Go (officiel clearlinux.github.io — la distribution vise du matériel modeste)", disk:"4 Go min. pour l'image serveur live (officiel) ; une image desktop complète demande davantage", cpu:"x86_64 avec AVX2 recommandé — bundles binaires précompilés via swupd, optimisés pour les processeurs Intel récents"},
    steps:[
      {t:"Télécharger l'image", d:"Projet arrêté : Intel a annoncé la fin de Clear Linux OS en 2025, clearlinux.org ne répond plus et le dépôt est archivé depuis août 2025. Aucune image officielle n'est plus distribuée ni mise à jour — fiche conservée à titre documentaire, à ne pas installer sur une machine en usage réel."},
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
    id:"crunchbang", name:"CrunchBang++", version:"13.0 (base Debian 13 Trixie, août 2025)", cat:"lightweight", color:"#2E2E2E", icon:null,
    tag:"Debian minimaliste + Openbox. L'esprit #! ressuscité, ultra-léger et sobre.",
    site:"crunchbangplusplus.org", dl:"crunchbangplusplus.org/download.html", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Intermédiaire", base:"Debian",
    req:{ram:"512 Mo min. (1 Go conseillé) — ~350-600 Mo utilisés au repos d'après des tests indépendants", disk:"5 Go min. (10 Go conseillés), l'installation par défaut tenant sur ~4 Go", cpu:"64 bits — le support 32 bits a été abandonné avec le passage à la base Debian 13 Trixie"},
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
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour tourner sur du matériel ancien, avec 512 Mo de RAM minimum, redonnant une seconde vie à des PC de plus de 10-15 ans — à condition qu'ils soient 64 bits, le 32 bits n'étant plus proposé depuis la version 13."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"slax", name:"Slax", version:"15", cat:"lightweight", color:"#0F9BD7", icon:null,
    tag:"Live portable qui tient sur une clé et sauvegarde les changements. Debian dessous.",
    site:"slax.org", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~6 min", diff:"Facile", base:"Debian",
    req:{ram:"512 Mo conseillés — le système tourne depuis la clé", disk:"Une clé USB de 2 Go suffit, les modifications étant écrites dessus", cpu:"x86_64, machines anciennes comprises"},
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
    site:"porteus.org", dl:"porteus.org/downloads", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Intermédiaire", base:"Slackware",
    req:{ram:"512 Mo conseillés — le système se charge en RAM, d'où sa rapidité", disk:"Une clé USB de 1 Go suffit largement", cpu:"x86 ou x86_64, machines anciennes comprises"},
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
    id:"emmabuntus", name:"Emmabuntüs", version:"DE6 1.01 (Core/Full, base Debian 13.4 Trixie, mars 2026)", cat:"lightweight", color:"#E9573F", icon:null,
    tag:"Dérivée d'Ubuntu/Debian pour reconditionner les vieux PC. Solidaire et clé en main.",
    site:"emmabuntus.org", dl:"emmabuntus.org/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~12 min", diff:"Facile", base:"Debian",
    req:{ram:"2 Go min. en 64 bits (1 Go en 32 bits)", disk:"80 Go min. d'après la page officielle \"Configuration matérielle\" — bien au-delà de ce qu'un profil \"vieux PC\" laisse supposer, pour laisser de la place aux logiciels et données", cpu:"Dual-core à partir de 2,0 GHz (Intel ou AMD), chiffre officiel plus exigeant qu'un simple \"Pentium 4\""},
    steps:[
      {t:"Télécharger l'ISO", d:"emmabuntus.org → édition Debian (Xfce/LXQt), déclinée en Core (allégée) et Full (avec logiciels éducatifs et accessibilité) depuis la DE6."},
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
      {q:"Jusqu'à quel âge de machine ça fonctionne ?", a:"Conçu pour reconditionner du matériel ancien (dual-core 2 GHz et 2 Go de RAM d'après les prérequis officiels du Collectif), mais le disque demandé (80 Go) est nettement plus généreux que ce que le profil \"vieux PC\" suggère habituellement."},
      {q:"Perd-on beaucoup de fonctionnalités par rapport à un OS classique ?", a:"L'essentiel (navigateur, bureautique, multimédia) reste disponible ; c'est surtout l'environnement graphique qui est allégé pour préserver les ressources."}
    ]
  },
  {
    id:"trisquel", name:"Trisquel GNU/Linux", version:"12.0 \"Ecne\"", cat:"advanced", color:"#0060A9", icon:null,
    tag:"Distribution 100% libre approuvée par la FSF. Aucun blob propriétaire.",
    site:"trisquel.info", dl:"trisquel.info/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~15 min", diff:"Intermédiaire", base:"Ubuntu",
    req:{ram:"4 Go min. pour une install physique (2 Go en VM), chiffre officiel du wiki trisquel.info", disk:"16 Go min. sans mises à jour téléchargées (jusqu'à 27 Go avec), officiel — la fourchette précédente était sous-estimée", cpu:"64 bits (amd64, arm64, ppc64el, riscv64), paquets binaires préconstruits (aucune compilation)"},
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
    lastVerified:"2026-08",
    tag:"Arch entièrement libre (FSF). Rolling, noyau Linux-libre, dépôts nettoyés.",
    site:"parabola.nu", dl:"parabola.nu/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~40 min", diff:"Expert", base:"Arch",
    req:{ram:"256 Mo min. en CLI (officiel ParabolaWiki) — l'installateur graphique Calamares est le composant le plus gourmand, avec environ 1 Go", disk:"800 Mo pour une installation de base (groupe « base », officiel) — bien plus avec un environnement de bureau complet", cpu:"x86_64, paquets binaires préconstruits (aucune compilation)"},
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
    lastVerified:"2026-08",
    tag:"Distro libre stable (ex-Arch, en migration vers un noyau BSD). Puriste et minimaliste.",
    site:"hyperbola.info", dl:"www.hyperbola.info/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~30 min", diff:"Expert", base:"Arch / BSD",
    req:{ram:"302 Mo en live / 47 Mo une fois installé, en mode texte sans bureau (officiel, v0.3.1) — nettement plus avec un environnement graphique", disk:"1-2 Go pour une installation de base en ligne de commande — bien plus avec un bureau complet, sans chiffre officiel précis", cpu:"x86_64, paquets binaires préconstruits (aucune compilation)"},
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
    site:"github.com", dl:"github.com/vmware/photon", license:"Libre / Open-source", popular:false, isNew:false,
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
    id:"rancheros", name:"RancherOS / k3OS", version:"1.5.8 (RancherOS, 2021) / archivé (k3OS, 2023)", cat:"container", color:"#0075A8", icon:null,
    tag:"OS minimal où tout est un conteneur Docker. Idéal edge/Kubernetes (héritage SUSE).",
    site:"github.com", dl:"github.com/rancher/os", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Avancé", base:"—",
    req:{ram:"512 Mo min. (boot ISO), 1 Go pour une installation sur disque", disk:"10-20 Go d'espace disque", cpu:"x86_64, virtualisation matérielle recommandée (VT-x/AMD-V)"},
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
      {q:"RancherOS / k3OS est-il toujours recommandé pour un nouveau projet ?", a:"Non : RancherOS a atteint sa fin de vie officielle en juin 2021 et son dépôt GitHub est archivé depuis octobre 2023 ; k3OS a suivi le même sort, avec un dépôt archivé en décembre 2023 après le rachat de Rancher par SUSE. Rancher recommande désormais k3s sur une distribution standard, ou Harvester pour une infrastructure HCI complète."}
    ]
  },
  {
    id:"postmarketos", name:"postmarketOS", version:"rolling", cat:"mobile", color:"#009900", icon:null,
    tag:"Linux (Alpine) pour smartphones : vise 10 ans de support par appareil.",
    site:"postmarketos.org", dl:"postmarketos.org/install", license:"Libre / Open-source", popular:false, isNew:true,
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
    id:"androidx86", name:"Android-x86", version:"9.0-r2 (mars 2020)", cat:"mobile", color:"#3DDC84", icon:"android",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#3DDC84"><path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z"/></svg>',
    tag:"Android porté sur PC/x86. Faire tourner des apps Android sur un vrai ordinateur.",
    site:"android-x86.org", dl:"www.android-x86.org/download.html", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~12 min", diff:"Intermédiaire", base:"Android",
    req:{ram:"1 Go min. (2 Go conseillés)", disk:"8-16 Go de stockage libre", cpu:"PC/laptop x86 ou x86_64 classique (pas un smartphone)"},
    steps:[
      {t:"Télécharger l'ISO", d:"android-x86.org → dernière release stable (9.0-r2, basée sur Android Pie)."},
      {t:"Graver la clé", d:"Rufus (mode DD) ou balenaEtcher."},
      {t:"Live ou install", d:"Tester en live, ou installer sur une partition dédiée."},
      {t:"GRUB", d:"Installer le bootloader, choisir ext4, puis configurer Android."}
    ],
    alt:["postmarketos","lineageos","grapheneos"],
    errors:[
      {q:"Écran noir ou résolution figée après le boot",a:"Le rendu logiciel (SwiftShader) prend le relais quand le pilote GPU natif n'est pas reconnu : ajoute le paramètre de démarrage GRUB `nomodeset` ou force une résolution VESA si l'écran reste noir."},
      {q:"Le Wi-Fi ou le pavé tactile ne fonctionnent pas",a:"Le portage dépend des pilotes Linux disponibles pour la puce concernée, souvent absents ou incomplets sur du matériel récent — c'est la limitation la plus fréquente, pas une erreur d'installation."},
      {q:"Le Play Store / les apps bancaires refusent de s'installer",a:"Le projet ne fournit pas nativement les Google Apps (GApps) ni une attestation d'intégrité certifiée : il faut les ajouter séparément, et certaines apps bancaires resteront bloquées quoi qu'il arrive."}
    ],
    faq:[
      {q:"Toutes les applications Android fonctionnent-elles après l'installation ?", a:"Cela dépend du matériel : le tactile, la caméra ou le GPS sont absents sur un PC classique, et certaines apps pensées pour un écran de smartphone s'affichent mal sur un grand écran."},
      {q:"L'installation efface-t-elle les données du PC ?", a:"Seulement la partition choisie durant l'installation ; en mode Live (sans installation), rien n'est écrit sur le disque et le PC repart intact au redémarrage."},
      {q:"Le projet est-il toujours à jour ?", a:"Non : la dernière version stable (9.0-r2, basée sur Android 9 Pie) date de mars 2020, sans nouvelle version stable depuis. Pour une base Android plus récente sur PC, des forks comme Bliss OS sont plus actifs."}
    ]
  },
  {
    id:"libreelec", name:"LibreELEC", version:"12", cat:"media", color:"#00A9E0", icon:null,
    tag:"« Just enough OS for Kodi » : media center minimal qui démarre direct sur Kodi.",
    site:"libreelec.tv", dl:"libreelec.tv/downloads", license:"Libre / Open-source", popular:false, isNew:true,
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
    id:"osmc", name:"OSMC", version:"2024", cat:"media", color:"#17394E", icon:"osmc",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#17394E"><path d="M22.768 12.002c0 5.935-4.829 10.768-10.768 10.768-5.935-.005-10.763-4.833-10.763-10.768 0-5.94 4.828-10.767 10.768-10.767 5.934 0 10.763 4.828 10.763 10.767m.292-4.673a11.913 11.913 0 0 0-2.57-3.813 11.963 11.963 0 0 0-3.813-2.57A11.857 11.857 0 0 0 12.005 0a11.926 11.926 0 0 0-8.486 3.516A11.963 11.963 0 0 0 .948 7.33C.318 8.811.002 10.38.002 12.002s.316 3.192.942 4.673a11.913 11.913 0 0 0 2.57 3.813A11.963 11.963 0 0 0 12 24c1.619 0 3.191-.32 4.673-.942a11.913 11.913 0 0 0 3.813-2.57 11.963 11.963 0 0 0 3.512-8.486c0-1.623-.311-3.191-.938-4.673M8.566 14.631V9.263l2.574 2.684-2.574 2.684zM7.327 6.296v11.422l8.116-8.455v6.767c0 .343.279.618.617.618a.622.622 0 0 0 .622-.622v-9.74l-4.677 4.77-4.678-4.76z"/></svg>',
    tag:"Media center Debian + Kodi, soigné et convivial. Star du Raspberry Pi.",
    site:"osmc.tv", dl:"osmc.tv/download", license:"Libre / Open-source", popular:false, isNew:true,
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
    site:"recalbox.com", dl:"www.recalbox.com/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~10 min", diff:"Facile", base:"Linux",
    req:{ram:"1 Go suffit sur un Raspberry Pi ; davantage pour émuler des consoles récentes", disk:"8 Go min. sur carte microSD, puis selon la taille de la logithèque", cpu:"Raspberry Pi (générations récentes), Odroid ou PC x86_64"},
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
    id:"rescuezilla", name:"Rescuezilla", version:"2.6.2", cat:"recovery", color:"#2C82C9", icon:null,
    lastVerified:"2026-08",
    tag:"Le « Clonezilla graphique » : sauvegarde, restauration et clonage de disques en clics.",
    site:"rescuezilla.com", dl:"rescuezilla.com/download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~8 min", diff:"Facile", base:"Ubuntu",
    req:{ram:"1 Go min. (2 Go conseillés)", disk:"1 Go pour l'image ISO live (officiel rescuezilla.com) ; une clé USB de 2 Go ou plus recommandée pour la marge", cpu:"x86_64, fonctionne sur la plupart des PC"},
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
    id:"redorescue", name:"Redo Rescue", version:"4.0.0", cat:"recovery", color:"#1ABC9C", icon:null,
    lastVerified:"2026-08",
    tag:"Sauvegarde et restauration bare-metal en un clic. Live minimal et rapide.",
    site:"redorescue.com", dl:"sourceforge.net/projects/redobackup", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~6 min", diff:"Facile", base:"Debian",
    req:{ram:"1 Go suffit en pratique (aucun minimum officiel publié sur redorescue.com ; l'ISO elle-même ne pèse que ~500-600 Mo)", disk:"2-4 Go (clé USB bootable)", cpu:"x86_64 ou x86 32 bits (support hérité)"},
    steps:[
      {t:"Télécharger l'ISO", d:"redorescue.com → dernière image."},
      {t:"Graver la clé", d:"balenaEtcher ou Rufus."},
      {t:"Booter", d:"Environnement graphique léger au démarrage."},
      {t:"Backup réseau", d:"Sauvegarder vers un partage réseau (SMB/NFS/SSH)."}
    ],
    alt:["finnix","gpartedlive","rescatux"],
    errors:[
      {q:"Mauvais disque sélectionné pendant un clonage",a:"C'est l'erreur la plus dangereuse possible avec ce type d'outil : une cible mal choisie efface définitivement le disque de destination. Vérifie toujours deux fois la taille et le nom exact du disque affiché avant de valider."},
      {q:"La clé ne démarre pas sur un PC Windows en Secure Boot",a:"Bug connu depuis novembre 2024 : un certificat UEFI révoqué dans le système sous-jacent empêche la version 4.0.0 (la dernière, listée « finale » par le projet) de démarrer sur les machines avec Secure Boot activé. Désactiver temporairement Secure Boot dans le BIOS/UEFI reste le contournement le plus fiable."},
      {q:"Un contrôleur RAID/NVMe exotique n'est pas reconnu",a:"Le noyau embarqué sur ces outils est parfois plus ancien que celui du système d'origine et peut manquer un pilote récent. Une version plus à jour de l'outil règle souvent le problème."}
    ],
    faq:[
      {q:"L'outil modifie-t-il le disque automatiquement ?", a:"Non, il s'utilise en mode Live et ne touche au disque que sur action explicite (formatage, restauration, écriture d'image)."},
      {q:"Le projet est-il toujours actif ?", a:"Après une reprise en 2020, la version 4.0.0 (sept./oct. 2021) est actuellement listée comme « Final Release » par le projet — aucune mise à jour n'est prévue, y compris pour corriger le bug Secure Boot ci-dessus."}
    ]
  },
  {
    id:"kasperskyrescue", name:"Kaspersky Rescue Disk", version:"18", cat:"recovery", color:"#006D5C", icon:null,
    lastVerified:"2026-08",
    tag:"Live antivirus hors-ligne pour désinfecter un système Windows infecté sans le démarrer.",
    site:"kaspersky.fr", dl:"kaspersky.com/downloads/free-rescue-disk", license:"Propriétaire", popular:false, isNew:false,
    time:"~8 min", diff:"Facile", base:"Linux",
    req:{ram:"1 Go min. (2 Go conseillés)", disk:"1 Go min. pour la clé USB ou le DVD (officiel support.kaspersky.com)", cpu:"x86_64, fonctionne sur la plupart des PC"},
    steps:[
      {t:"Télécharger l'ISO", d:"kaspersky.fr → Kaspersky Rescue Disk (gratuit)."},
      {t:"Graver la clé", d:"Rufus ou balenaEtcher."},
      {t:"Booter", d:"Démarrer sur la clé, accepter le mode graphique."},
      {t:"Analyser", d:"Mettre à jour les bases puis scanner les disques infectés."}
    ],
    alt:["trinityrescuekit","redorescue","finnix"],
    errors:[
      {q:"Message « Not enough RAM » au démarrage",a:"Kaspersky documente lui-même ce message en dessous de 1 Go de RAM : l'outil peut se lancer quand même (bouton « Yes »), mais son fonctionnement n'est alors plus garanti — un scan peut échouer ou planter en cours de route."},
      {q:"Les modifications ne sont pas conservées",a:"Ces systèmes tournent en RAM depuis la clé USB et ne conservent rien au redémarrage par conception — toute donnée à garder doit être copiée sur un support externe avant d'éteindre."},
      {q:"Un contrôleur RAID/NVMe exotique n'est pas reconnu",a:"Le noyau embarqué sur ces outils est parfois plus ancien que celui du système d'origine et peut manquer un pilote récent. Une version plus à jour de l'outil règle souvent le problème."}
    ],
    faq:[
      {q:"L'outil modifie-t-il le disque automatiquement ?", a:"Non, il s'utilise en mode Live et ne touche au disque que sur action explicite (formatage, restauration, écriture d'image)."},
      {q:"Peut-on l'utiliser sur n'importe quel PC en panne ?", a:"Dans la majorité des cas oui, tant que le PC peut démarrer sur une clé USB ; en cas de panne matérielle plus grave, un diagnostic matériel reste nécessaire."}
    ]
  },
  {
    id:"finnix", name:"Finnix", version:"251", cat:"recovery", color:"#B01E28", icon:null,
    tag:"Live CD d'administration système, minuscule et sans interface. L'outil du sysadmin.",
    site:"finnix.org", dl:"finnix.org/Download", license:"Libre / Open-source", popular:false, isNew:false,
    time:"~5 min", diff:"Avancé", base:"Debian",
    req:{ram:"128 Mo min. (256 Mo pour tourner entièrement en RAM)", disk:"2-4 Go (clé USB bootable, ISO ~577 Mo)", cpu:"x86_64 uniquement (32 bits abandonné depuis la version 120)"},
    steps:[
      {t:"Télécharger l'ISO", d:"finnix.org → dernière image (~577 Mo, AMD64)."},
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
    lastVerified:"2026-08",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#167C80"><path d="M21.64526 12.05735a2.40391 2.40391 0 0 0-1.80293.7993l-.13823-.0541a17.80096 17.80096 0 0 0-2.86666-.8594 4.80782 4.80782 0 0 0-9.61565 0h-.13221a17.74687 17.74687 0 0 0-2.7645.83537l-.13822.05409a2.40391 2.40391 0 1 0 .5589 1.06974 16.599 16.599 0 0 1 2.5782-.77526 4.80782 4.80782 0 0 0 9.35722 0 16.55693 16.55693 0 0 1 2.5782.76925 2.40391 2.40391 0 1 0 2.38588-1.839zM2.41397 15.6632a1.20196 1.20196 0 1 1 1.20196-1.20195 1.20196 1.20196 0 0 1-1.20196 1.20195zm9.61565 0a3.60587 3.60587 0 1 1 3.60586-3.60586 3.60587 3.60587 0 0 1-3.60586 3.60586zm9.61564 0a1.20196 1.20196 0 1 1 1.20196-1.20195 1.20196 1.20196 0 0 1-1.20196 1.20195zm-7.81271-3.60586a1.80293 1.80293 0 1 1-1.80293-1.80294 1.80293 1.80293 0 0 1 1.80293 1.80294z"/></svg>',
    tag:"Le grand classique des ROM Android alternatives. Continue de faire vivre les smartphones abandonnés par leur marque.",
    site:"lineageos.org", dl:"wiki.lineageos.org/devices", license:"Libre / Open-source", popular:true, isNew:false,
    time:"~40 min", diff:"Avancé", base:"Android (AOSP)",
    req:{ram:"2 Go dans la pratique (les téléphones officiellement supportés en ont presque tous au moins autant), mais LineageOS n'impose pas de seuil : la compatibilité dépend uniquement du modèle de téléphone, à vérifier sur le wiki officiel des appareils supportés", disk:"8 Go de stockage libre", cpu:"Smartphone compatible (voir wiki officiel)"},
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
    id:"grapheneos", name:"GrapheneOS", version:"2024", cat:"mobile", color:"#0F5132", icon:"grapheneos",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#0F5132"><path d="m6.953 7.244 3.458-1.97a1.901 1.901 0 0 1-.108-.608c0-.835.608-1.525 1.407-1.67V0h.58v2.995a1.704 1.704 0 0 1 1.407 1.67c0 .219-.045.418-.118.609l3.468 1.97c.127-.146.281-.273.454-.382a1.705 1.705 0 0 1 2.151.382l2.596-1.498.29.508-2.595 1.498a1.69 1.69 0 0 1-1.244 2.242v4.012a1.69 1.69 0 0 1 1.244 2.242l2.596 1.498-.29.508-2.597-1.498a1.705 1.705 0 0 1-2.151.382 2.065 2.065 0 0 1-.454-.382c-1.153.654-2.306 1.317-3.468 1.97.073.19.118.39.118.608 0 .835-.608 1.525-1.407 1.67V24h-.58v-2.995a1.704 1.704 0 0 1-1.407-1.67c0-.219.045-.418.108-.609l-3.458-1.97a2.065 2.065 0 0 1-.454.382 1.705 1.705 0 0 1-2.151-.382l-2.596 1.498-.29-.508 2.595-1.498a1.69 1.69 0 0 1 1.244-2.242V9.994a1.69 1.69 0 0 1-1.244-2.242L1.461 6.254l.29-.508 2.597 1.498a1.705 1.705 0 0 1 2.151-.382c.173.11.327.236.454.382Zm9.803 9.004a1.682 1.682 0 0 1 .128-1.425 1.702 1.702 0 0 1 1.234-.835v-3.976a1.702 1.702 0 0 1-1.234-.835 1.682 1.682 0 0 1-.128-1.425L13.29 5.773c-.318.363-.772.59-1.289.59-.517 0-.971-.227-1.289-.59L7.244 7.752c.163.454.136.98-.128 1.425a1.702 1.702 0 0 1-1.234.835v3.976c.5.073.962.363 1.234.835.264.445.291.971.128 1.425l3.467 1.979c.318-.363.772-.59 1.289-.59.517 0 .971.227 1.289.59z"/></svg>',
    tag:"ROM Android durcie, focalisée vie privée et sécurité. Compatible uniquement avec les Google Pixel.",
    site:"grapheneos.org", dl:"grapheneos.org/install", license:"Libre / Open-source", popular:false, isNew:true,
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
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#772953"><path d="M17.61.455a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zM12.92.8C8.923.777 5.137 2.941 3.148 6.451a4.5 4.5 0 0 1 .26-.007 4.92 4.92 0 0 1 2.585.737A8.316 8.316 0 0 1 12.688 3.6 4.944 4.944 0 0 1 13.723.834 11.008 11.008 0 0 0 12.92.8zm9.226 4.994a4.915 4.915 0 0 1-1.918 2.246 8.36 8.36 0 0 1-.273 8.303 4.89 4.89 0 0 1 1.632 2.54 11.156 11.156 0 0 0 .559-13.089zM3.41 7.932A3.41 3.41 0 0 0 0 11.342a3.41 3.41 0 0 0 3.41 3.409 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zm2.027 7.866a4.908 4.908 0 0 1-2.915.358 11.1 11.1 0 0 0 7.991 6.698 11.234 11.234 0 0 0 2.422.249 4.879 4.879 0 0 1-.999-2.85 8.484 8.484 0 0 1-.836-.136 8.304 8.304 0 0 1-5.663-4.32zm11.405.928a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41z"/></svg>',
    tag:"Portage mobile d'Ubuntu par la communauté UBports. Une alternative complète à Android/iOS, convergente avec le bureau.",
    site:"ubuntu-touch.io", dl:"ubuntu-touch.io/get-ubuntu-touch", license:"Libre / Open-source", popular:false, isNew:false,
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
    site:"coreelec.org", dl:"coreelec.org/#downloads", license:"Libre / Open-source", popular:false, isNew:false,
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
    lastVerified:"2026-08",
    svg:"<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"#0078D6\"><path d=\"M2.5 2.5h8.5v8.5H2.5zM13 2.5h8.5v8.5H13zM2.5 13h8.5v8.5H2.5zM13 13h8.5v8.5H13z\"/></svg>",
    tag:"Le prédécesseur de Windows 11. Fin de support standard en octobre 2025, mais prolongeable via le programme ESU jusqu'en octobre 2027.",
    site:"microsoft.com", dl:"microsoft.com/software-download/windows10", license:"Propriétaire", popular:false, isNew:true,
    time:"~15 min", diff:"Facile", base:"Windows NT",
    req:{ram:"2 Go min. (64 bits, officiel) ; 4 Go+ conseillés en pratique", disk:"32 Go min. (exigence officielle Microsoft récente)", cpu:"64 bits, 1 GHz, 1 cœur min.", gpu:{open:"Bon — pilotes AMD/Intel via Windows Update ou le site du fabricant", nvidia:"Bon — pilote GeForce officiel installable via Windows Update ou le site Nvidia"}},
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
    id:"unraid", name:"Unraid", version:"7.3.2", cat:"server", color:"#F15A24", icon:"unraid",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#F15A24"><path d="M11.406 8.528h1.17v6.926h-1.17zM1.17 15.454H0V8.528h1.17zm4.534.828h1.17v2.645h-1.17zm-2.86-2.969h1.169v4.282h-1.17zm5.703 0h1.17v4.282h-1.17zM22.83 8.528H24v6.926h-1.17zm-4.534-.81h-1.17V5.073h1.17zm2.86 2.95h-1.169V6.406h1.17zm-5.72 0h-1.17V6.406h1.17z"/></svg>',
    tag:"OS de stockage et virtualisation pour serveur maison : RAID flexible par parité, Docker et VM intégrés, démarre depuis une simple clé USB.",
    site:"unraid.net", dl:"unraid.net/download", license:"Propriétaire", popular:false, isNew:true,
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
    site:"e.foundation", dl:"doc.e.foundation/devices", license:"Libre / Open-source", popular:false, isNew:true,
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
    id:"sailfishos", name:"Sailfish OS", version:"5.0 Tampella", cat:"mobile", color:"#1B4F72", icon:"sailfishos",
    svg:'<svg viewBox="0 0 24 24" width="30" height="30" fill="#1B4F72"><path d="M23.98132 5.10497a.31172.31172 0 0 0-.40763-.17385l-2.3379.81527a24.35014 24.35014 0 0 1-3.1292.82126c-2.16405.39565-3.71666-1.3368-3.71666-1.3368a.3237.3237 0 0 0-.35968-.1019 4.83167 4.83167 0 0 0-.45559.17384 13.1462 13.1462 0 0 1 1.70247-4.7957c.10211-.10285.10211-.26881 0-.37166a.36567.36567 0 0 0-.40763-.1139 27.1736 27.1736 0 0 0-4.19623 2.60166c-2.87742 2.236-4.47798 4.51395-4.6758 6.7979-.14987 1.85833 1.07303 3.07524 2.24198 4.19623l.20382.19783a4.50795 4.50795 0 0 1-.28774 3.59077c-1.04306 2.30193-3.35699 4.31013-6.25838 5.39516-.91118.34768-1.6785.59946-1.6785.59946-.15467.05152-.24352.21354-.20381.37166A.3237.3237 0 0 0 .32056 24H.3985a34.28921 34.28921 0 0 0 6.59408-2.35588l.59947-.29974c3.71666-1.93026 5.70088-4.19623 5.92867-6.68999.15586-1.58857-.7853-2.65561-1.79838-3.59677 1.29483-1.79838 5.49107-3.2251 5.52104-3.2251l4.14228-1.43871c1.32481-.41962 2.3439-.82126 2.39785-.84524a.29973.29973 0 0 0 .17984-.41963zM12.9692 5.6265a10.23281 10.23281 0 0 0-3.51285 2.72755 3.29105 3.29105 0 0 1-.2278-1.54062c.15587-1.70846 1.98422-3.69268 2.26597-3.99241a29.92513 29.92513 0 0 1 2.7935-1.75643 12.8045 12.8045 0 0 0-1.3488 4.5619ZM5.25413 21.74602a10.61047 10.61047 0 0 0 3.51285-4.09432 5.74284 5.74284 0 0 0 .5575-2.87742 3.03927 3.03927 0 0 1 .86922 2.25997c-.2278 2.18205-2.92537 3.74065-2.94935 3.76462-.64742.3417-1.31282.65342-1.99022.94715zm7.60717-7.14558c-.14986 1.71446-1.24688 3.17715-2.74553 4.38806a4.0104 4.0104 0 0 0 .6774-1.88231c.15585-1.63653-.98912-2.7755-2.11011-3.86653-1.121-1.09102-2.18804-2.15806-2.06215-3.72266.15586-1.83435 1.30083-3.47088 2.69758-4.85564a5.2393 5.2393 0 0 0-.76132 2.1281c-.20382 2.00819 1.14497 3.24908 2.31392 4.3401 1.16895 1.09102 2.1101 1.96024 1.98422 3.47088zm-1.65451-4.0164a9.38757 9.38757 0 0 1-1.4507-1.57058c1.09702-1.75643 3.59677-2.9014 4.32812-3.19513a5.14938 5.14938 0 0 0 2.84744 1.39674c-.61145.2218-4.3401 1.53462-5.72486 3.36898z"/></svg>',
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
    site:"calyxos.org", dl:"calyxos.org/install", license:"Libre / Open-source", popular:false, isNew:true,
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
    site:"asahilinux.org", dl:"asahilinux.org/fedora", license:"Libre / Open-source", popular:false, isNew:true,
    time:"~45 min", diff:"Avancé", base:"Fedora",
    req:{ram:"8 Go min. (16 Go conseillés)", disk:"50 Go d'espace libre min. sur le SSD interne (l'installeur réserve aussi une marge pour macOS)", cpu:"Mac Apple Silicon M1 ou M2 uniquement (M3/M4/M5 pas encore pleinement supportés)"},
    steps:[
      {t:"Vérifier la compatibilité de la puce", d:"Liste à jour sur asahilinux.org : M1/M2 pleinement supportés (MacBook, Mac mini, Mac Studio, iMac, et Mac Pro depuis peu), M3 et plus récents pas encore."},
      {t:"Libérer de l'espace sous macOS", d:"Au moins 50 Go, en purgeant si besoin les snapshots Time Machine locaux qui grignotent l'espace « libre » apparent."},
      {t:"Lancer l'installateur depuis le Terminal macOS", d:"Une seule commande (fournie sur asahilinux.org/fedora) télécharge et exécute l'installateur, sans clé USB externe."},
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
    site:"mobian.org", dl:"images.mobian.org/", license:"Libre / Open-source", popular:false, isNew:true,
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
    site:"kolibrios.org", dl:"kolibrios.org/en/download", license:"Libre / Open-source", popular:false, isNew:true,
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
    site:"zentyal.com", dl:"zentyal.com/community", license:"Libre / Open-source", popular:false, isNew:true,
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
    lastVerified:"2026-08",
    tag:"Distribution RPM indépendante héritière de Mandriva, l'une des rares à compiler l'essentiel du système avec Clang/LLVM plutôt que GCC.",
    site:"openmandriva.org", dl:"www.openmandriva.org/release-picking", license:"Libre / Open-source", popular:false, isNew:true,
    time:"~20 min", diff:"Intermédiaire", base:"—",
    req:{ram:"2 Go min. (4 Go+ conseillés pour Plasma)", disk:"10 Go min.", cpu:"x86_64 uniquement (32 bits non supporté), carte graphique compatible OpenGL 2.0+", gpu:{open:"Excellent — AMD/Intel pris en charge nativement", nvidia:"Correct — paquets propriétaires communautaires installables via dnf (dépôt non-free à activer) ou le module Welcome, avec parfois un décalage entre version du noyau et paquet nvidia disponible"}},
    steps:[
      {t:"Télécharger l'ISO", d:"openmandriva.org/release-picking, choisir Rock (stable, releases fixes) ou ROME (rolling, paquets récents en continu)."},
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
