/* ============ VÉRIFIER MON PC — détecteur matériel léger ============
   Compare la RAM déclarée dans req.ram (texte libre en Go/Mo) à la RAM
   de l'appareil du visiteur (navigator.deviceMemory quand disponible,
   sinon valeur choisie manuellement). Le CPU (navigator.hardwareConcurrency)
   est affiché à titre indicatif : les fiches ne décrivent pas un nombre de
   cœurs minimal exploitable de façon fiable, donc il n'entre pas dans le
   calcul de compatibilité — seule la RAM (donnée la plus fiable et la plus
   souvent bloquante en pratique) sert de critère de filtre. */
window.HwCheck = (function () {
  /* Extrait la RAM minimale d'un champ req.ram en Mo.
     Gère "4 Go min. (...)", "512 Mo à 1 Go", "1-2 Go min.", "96 Mo min. (...)"…
     Sur une plage ("1-2 Go"), on retient la borne basse (la plus permissive,
     cohérent avec le sens de "min."). */
  function parseMinRamMB(str) {
    if (!str) return null;
    let m = str.match(/^(\d+(?:[.,]\d+)?)\s*(Go|Mo)/i);
    if (!m) m = str.match(/^(\d+(?:[.,]\d+)?)\s*[-–à]\s*\d+(?:[.,]\d+)?\s*(Go|Mo)/i);
    if (!m) return null;
    const n = parseFloat(m[1].replace(',', '.'));
    const unit = m[2].toLowerCase();
    return unit === 'go' ? n * 1024 : n;
  }

  /* navigator.deviceMemory : Chrome/Edge/Android uniquement, valeur plafonnée
     à 8 Go et arrondie à une puissance de 2 — approximative par nature.
     navigator.hardwareConcurrency : cœurs logiques, supporté plus largement
     mais parfois plafonné (ex. Safari) pour limiter le fingerprinting. */
  function detect() {
    const ramGB = (typeof navigator !== 'undefined' && navigator.deviceMemory) ? navigator.deviceMemory : null;
    const cores = (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) ? navigator.hardwareConcurrency : null;
    return { ramGB, cores, ramSupported: ramGB !== null, coresSupported: cores !== null };
  }

  /* Détection réelle (CPU/GPU/RAM exacte/disque), disponible uniquement dans
     l'appli desktop Electron (window.desktopHW injecté par preload.js).
     Absent dans un navigateur classique : le mode web garde son estimation
     via navigator.deviceMemory, inchangé. */
  function detectDesktop() {
    if (typeof window === 'undefined' || !window.desktopHW) return Promise.resolve(null);
    return window.desktopHW.getSpecs().catch(() => null);
  }

  /* 'ok' : RAM de l'appareil >= mini requis
     'tight' : entre 50% et 100% du mini requis (jouable en mode allégé, léger swap)
     'no' : moins de 50% du mini requis
     'unknown' : champ req.ram non parseable (ne devrait pas arriver, 160/160 ok) */
  function status(os, ramMB) {
    const req = parseMinRamMB(os.req && os.req.ram);
    if (req === null || ramMB === null) return 'unknown';
    if (ramMB >= req) return 'ok';
    if (ramMB >= req * 0.5) return 'tight';
    return 'no';
  }

  return { parseMinRamMB, detect, detectDesktop, status };
})();
