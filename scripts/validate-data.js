#!/usr/bin/env node
/* OSARIUM — validation de data.js et tools-data.js.
 *
 * Chaque session d'ajout de fiches se validait jusqu'ici avec un script
 * jetable réécrit à chaque fois. Ce fichier fige ces contrôles pour qu'ils
 * tournent à chaque push (voir .github/workflows/validate.yml).
 *
 * Le parseur de RAM n'est pas réimplémenté ici : on charge le vrai
 * js/hardware-check.js, sinon la validation dériverait du code de production.
 *
 *     node scripts/validate-data.js
 *
 * Sort en code 1 si une erreur est trouvée. Les avertissements n'échouent pas
 * la CI (ils signalent une incohérence tolérable, pas une régression).
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

/* Les fichiers du site sont des scripts navigateur qui écrivent sur `window`.
   On les évalue dans un contexte minimal fournissant window + navigator. */
function loadBrowserScripts(files) {
  const sandbox = { navigator: {}, Promise };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  files.forEach((f) => {
    vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), sandbox, { filename: f });
  });
  return sandbox;
}

const win = loadBrowserScripts(['data.js', 'tools-data.js', 'js/hardware-check.js']);
const DATA = win.OS_DATA;
const CATS = win.OS_CATS;
const TOOLS = win.TOOLS_DATA;
const HwCheck = win.HwCheck;

const errors = [];
const warnings = [];
const fail = (id, msg) => errors.push(`${id} — ${msg}`);
const warn = (id, msg) => warnings.push(`${id} — ${msg}`);

/* Valeurs autorisées. `diff` est listé ici parce que "Expert" avait été
   introduit dans data.js sans être ajouté au filtre ni au barème de tri du
   catalogue : les 7 fiches concernées étaient introuvables et cassaient le
   tri. Ce contrôle croise donc data.js avec l'UI qui le consomme. */
const DIFFS = ['Facile', 'Intermédiaire', 'Avancé', 'Expert'];
const LICENSES = ['Libre / Open-source', 'Propriétaire'];
const REQUIRED = ['id', 'name', 'version', 'cat', 'color', 'tag', 'site', 'license',
  'popular', 'isNew', 'time', 'diff', 'base', 'req', 'steps', 'alt', 'errors', 'faq'];

/* Le catalogue lit ces valeurs dans des <option> / <select> figés en HTML :
   si data.js s'en écarte, le filtre devient silencieusement incomplet. */
function readSelectValues(file, selectId) {
  const html = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const block = html.match(new RegExp(`id="${selectId}"[\\s\\S]*?</select>`));
  if (!block) return null;
  return [...block[0].matchAll(/value="([^"]*)"/g)].map((m) => m[1]).filter((v) => v !== 'all');
}

/* ---------------- fiches OS ---------------- */
const seen = new Set();

DATA.forEach((os, i) => {
  const id = os.id || `#${i}`;

  REQUIRED.forEach((k) => {
    if (os[k] === undefined || os[k] === null || os[k] === '') fail(id, `champ « ${k} » manquant`);
  });

  if (seen.has(os.id)) fail(id, 'id en double');
  seen.add(os.id);

  if (os.cat && !CATS[os.cat]) fail(id, `catégorie inconnue « ${os.cat} » (absente de OS_CATS)`);
  if (os.diff && !DIFFS.includes(os.diff)) fail(id, `difficulté inconnue « ${os.diff} » (attendu : ${DIFFS.join(', ')})`);
  if (os.license && !LICENSES.includes(os.license)) warn(id, `licence non standard « ${os.license} »`);
  if (os.color && !/^#[0-9a-f]{6}$/i.test(os.color)) fail(id, `couleur mal formée « ${os.color} »`);
  if (os.site && /^https?:\/\//.test(os.site)) fail(id, `« site » doit être un domaine nu, pas une URL (« ${os.site} »)`);

  /* Fraîcheur (optionnelle) : format "AAAA-MM", jamais dans le futur. Pas de
     champ requis — il ne serait pas honnête de dater rétroactivement les 170
     fiches d'un coup ; le suivi démarre à partir des fiches effectivement
     revérifiées depuis l'introduction du champ. */
  if (os.lastVerified !== undefined) {
    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(os.lastVerified)) {
      fail(id, `lastVerified mal formé, attendu « AAAA-MM » (« ${os.lastVerified} »)`);
    } else {
      const [y, m] = os.lastVerified.split('-').map(Number);
      const now = new Date();
      if (y > now.getFullYear() || (y === now.getFullYear() && m > now.getMonth() + 1)) {
        fail(id, `lastVerified est dans le futur (« ${os.lastVerified} »)`);
      }
    }
  }

  /* Lien de téléchargement : même convention que `site` (sans schéma, il est
     ajouté à l'affichage). Deux garde-fous appris en le constituant : une URL
     de fichier est figée sur une version et périme au tirage suivant, et un
     lien vers un domaine sans rapport avec le projet est un faux positif
     (un site avait renvoyé vers un miroir tiers arbitraire). */
  if (os.dl) {
    if (/^https?:\/\//.test(os.dl)) fail(id, `« dl » doit être sans schéma http(s) (« ${os.dl} »)`);
    if (!os.dl.includes('/')) fail(id, `« dl » pointe sur une racine de domaine, sans plus-value sur « site » (« ${os.dl} »)`);
    if (/\.(iso|img|exe|zip|gz|xz|bz2|torrent|dmg|raw)$/i.test(os.dl)) {
      fail(id, `« dl » pointe un fichier plutôt qu'une page — figé sur une version (« ${os.dl} »)`);
    }
    const host = os.dl.split('/')[0].replace(/^www\./, '');
    const base = (os.site || '').split('/')[0].replace(/^www\./, '');
    const tok = base.split('.')[0];
    /* Plusieurs projets distribuent officiellement depuis une forge (Athena OS,
       Harvester, Bottlerocket, Inferno). On l'accepte, à condition que le
       chemin nomme bien le projet — sinon n'importe quel dépôt passerait. */
    const FORGES = ['github.com', 'gitlab.com', 'codeberg.org', 'sourceforge.net'];
    const pathTok = os.dl.toLowerCase().replace(/[^a-z0-9]/g, '');
    const nameTok = (os.name || '').toLowerCase().split(/\s+/)[0].replace(/[^a-z0-9]/g, '');
    const forgeOk = FORGES.includes(host) && (pathTok.includes(nameTok) || pathTok.includes(os.id));
    if (base && !(host.endsWith(base) || host.includes(tok) || forgeOk)) {
      fail(id, `« dl » est sur un domaine étranger au projet (site : ${os.site}, dl : ${host})`);
    }
  }

  /* config minimale : c'est ce qui alimente « Vérifier mon PC » */
  if (os.req) {
    ['cpu', 'ram', 'disk'].forEach((k) => {
      if (!os.req[k]) fail(id, `req.${k} manquant`);
    });
    if (os.req.ram && HwCheck.parseMinRamMB(os.req.ram) === null) {
      fail(id, `req.ram illisible par HwCheck : « ${os.req.ram} »`);
    }
    /* req.gpu est optionnel (renseigné seulement là où le choix AMD/Intel/Nvidia
       compte vraiment : desktop populaire, gaming) — mais s'il est présent, sa
       forme doit rester cohérente pour que le comparateur et la fiche puissent
       s'y fier sans vérif défensive à chaque affichage. */
    if (os.req.gpu !== undefined) {
      if (typeof os.req.gpu !== 'object' || os.req.gpu === null) {
        fail(id, 'req.gpu doit être un objet ({open, nvidia})');
      } else if (!os.req.gpu.open && !os.req.gpu.nvidia) {
        fail(id, 'req.gpu présent mais vide (ni open ni nvidia renseigné)');
      }
    }
  }

  /* étapes d'installation */
  if (Array.isArray(os.steps)) {
    if (!os.steps.length) fail(id, 'aucune étape d\'installation');
    os.steps.forEach((s, n) => {
      if (!s.t || !s.d) fail(id, `étape ${n + 1} incomplète (t/d)`);
    });
  } else fail(id, '« steps » n\'est pas un tableau');

  /* erreurs fréquentes : 3 par fiche, convention posée en Phase 3 */
  if (Array.isArray(os.errors)) {
    if (os.errors.length !== 3) fail(id, `${os.errors.length} entrée(s) « errors » au lieu de 3`);
    os.errors.forEach((e, n) => {
      if (!e.q || !e.a) fail(id, `errors[${n}] incomplet (q/a)`);
    });
  } else fail(id, '« errors » n\'est pas un tableau');

  /* FAQ */
  if (Array.isArray(os.faq)) {
    if (!os.faq.length) fail(id, 'FAQ vide');
    os.faq.forEach((f, n) => {
      if (!f.q || !f.a) fail(id, `faq[${n}] incomplet (q/a)`);
    });
  } else fail(id, '« faq » n\'est pas un tableau');
});

/* « Systèmes similaires » : liens internes, vérifiés après le peuplement de
   `seen` pour pouvoir pointer vers une fiche située plus loin dans le fichier. */
DATA.forEach((os) => {
  const id = os.id;
  if (!Array.isArray(os.alt)) { fail(id, '« alt » n\'est pas un tableau'); return; }
  if (!os.alt.length) warn(id, 'aucun système similaire');
  os.alt.forEach((aid) => {
    if (aid === id) fail(id, `alt s'auto-référence (« ${aid} »)`);
    else if (!seen.has(aid)) fail(id, `alt pointe vers une fiche inexistante (« ${aid} »)`);
  });
  if (new Set(os.alt).size !== os.alt.length) fail(id, 'alt contient un doublon');
});

/* `base` alimente l'arbre de filiation. Il est valide s'il désigne une fiche
   du catalogue, une famille synthétique déclarée dans js/arbre.js, ou « — ».
   Les deux tables sont relues depuis arbre.js plutôt que recopiées ici, pour
   que le contrôle suive automatiquement toute famille ajoutée là-bas. */
function readArbreFamilies() {
  const src = fs.readFileSync(path.join(ROOT, 'js/arbre.js'), 'utf8');
  const synthBlock = src.match(/const SYNTHETIC = \{([\s\S]*?)\n\s*\};/);
  const genericBlock = src.match(/const GENERIC_INDEPENDENT = new Set\(\[([\s\S]*?)\]\)/);
  if (!synthBlock || !genericBlock) return null;
  return {
    synthetic: new Set([...synthBlock[1].matchAll(/'([^']+)'\s*:/g)].map((m) => m[1])),
    generic: new Set([...genericBlock[1].matchAll(/'([^']+)'/g)].map((m) => m[1])),
  };
}

const fam = readArbreFamilies();
if (!fam) {
  warn('js/arbre.js', 'tables SYNTHETIC / GENERIC_INDEPENDENT introuvables — contrôle des « base » ignoré');
} else {
  const norm = (s) => (s || '').trim().toLowerCase();
  const names = new Set();
  DATA.forEach((o) => { names.add(norm(o.name)); names.add(norm(o.name.replace(/\s+linux$/i, ''))); });

  DATA.forEach((os) => {
    const base = os.base;
    if (!base || base === '—') return;
    const primary = norm(base.split('/')[0]);
    const resolved = fam.generic.has(norm(base)) || names.has(primary)
      || fam.synthetic.has(primary) || fam.synthetic.has(norm(base));
    if (!resolved) {
      /* l'arbre créera quand même un nœud à la volée, mais isolé et sans
         description : c'est le signe d'une famille à déclarer dans arbre.js */
      warn(os.id, `base « ${base} » n'est ni une fiche ni une famille déclarée dans js/arbre.js — nœud orphelin dans l'arbre`);
    }
  });
}

/* ---------------- cohérence data.js ↔ UI ---------------- */
const uiDiffs = readSelectValues('index.html', 'diffSelect');
if (uiDiffs) {
  const used = [...new Set(DATA.map((o) => o.diff))];
  used.forEach((d) => {
    if (!uiDiffs.includes(d)) fail('index.html', `difficulté « ${d} » utilisée dans data.js mais absente du filtre #diffSelect`);
  });
}
const uiLicenses = readSelectValues('index.html', 'licenseSelect');
if (uiLicenses) {
  [...new Set(DATA.map((o) => o.license))].forEach((l) => {
    if (!uiLicenses.includes(l)) fail('index.html', `licence « ${l} » utilisée dans data.js mais absente du filtre #licenseSelect`);
  });
}

/* Les compteurs affichés dans les pages doivent suivre le nombre de fiches. */
const idxHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
[['kickCount', /id="kickCount">(\d+)</], ['count', /id="count">(\d+)</]].forEach(([name, re]) => {
  const m = idxHtml.match(re);
  if (m && Number(m[1]) !== DATA.length) {
    fail('index.html', `compteur #${name} affiche ${m[1]} au lieu de ${DATA.length}`);
  }
});
const osHtml = fs.readFileSync(path.join(ROOT, 'os.html'), 'utf8');
const crumb = osHtml.match(/id="crumb">—\s*\/\s*(\d+)</);
if (crumb && Number(crumb[1]) !== DATA.length) {
  fail('os.html', `fil d'Ariane affiche ${crumb[1]} au lieu de ${DATA.length}`);
}

/* ---------------- outils ---------------- */
const toolIds = new Set();
TOOLS.forEach((t, i) => {
  const id = t.id || `#${i}`;
  ['id', 'name', 'tag', 'steps'].forEach((k) => {
    if (!t[k]) fail(`tool:${id}`, `champ « ${k} » manquant`);
  });
  if (toolIds.has(t.id)) fail(`tool:${id}`, 'id en double');
  toolIds.add(t.id);
});

/* ---------------- textes dupliqués (dérive de template) ---------------- */
/* Les fiches historiques ont reçu une config et une FAQ générées par
   catégorie. Il en restait des traces fausses : 22 fiches annonçaient
   « temps de compilation important » alors qu'elles distribuent des binaires,
   phrase copiée depuis Gentoo. Ce contrôle signale toute formulation partagée
   par un nombre anormal de fiches, pour repérer la prochaine dérive. */
const SEUIL_DUPLICATION = 8;
const duplications = [];
[['req.cpu', (o) => o.req && o.req.cpu],
  ['req.ram', (o) => o.req && o.req.ram],
  ['req.disk', (o) => o.req && o.req.disk],
  ['tag', (o) => o.tag]].forEach(([champ, get]) => {
  const counts = new Map();
  DATA.forEach((o) => {
    const v = get(o);
    if (!v) return;
    if (!counts.has(v)) counts.set(v, []);
    counts.get(v).push(o.id);
  });
  [...counts.entries()]
    .filter(([, ids]) => ids.length >= SEUIL_DUPLICATION)
    .forEach(([v, ids]) => duplications.push({ champ, texte: v, ids }));
});
duplications.sort((a, b) => b.ids.length - a.ids.length);

/* ---------------- sitemap ---------------- */
/* On compare l'ensemble des URLs, pas le fichier entier : les <lastmod> sont
   dérivés de la date de modification des fichiers, que `git checkout` réécrit
   en CI — un diff strict échouerait à chaque exécution sans rien signaler. */
const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
const inSitemap = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].split('/').pop()));
const expected = new Set([
  'index.html', 'arbre.html',
  ...DATA.map((o) => `os.html?id=${o.id}`),
  ...TOOLS.map((t) => `tool.html?id=${t.id}`),
]);
[...expected].filter((u) => !inSitemap.has(u)).forEach((u) => fail('sitemap.xml', `URL absente : ${u} (lance node scripts/generate-sitemap.js)`));
[...inSitemap].filter((u) => !expected.has(u)).forEach((u) => fail('sitemap.xml', `URL obsolète : ${u} (lance node scripts/generate-sitemap.js)`));

/* ---------------- cache offline ---------------- */
/* `addAll` échoue en bloc si une entrée est introuvable, et tout css/js absent
   de la liste n'est pas disponible hors-ligne. La liste avait dérivé de 8
   fichiers sans que rien ne le signale. */
const swSrc = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');
const swBlock = swSrc.match(/const ASSETS = \[([\s\S]*?)\];/);
if (!swBlock) {
  fail('sw.js', 'liste ASSETS introuvable');
} else {
  const assets = [...swBlock[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
  assets.forEach((a) => {
    if (a === './') return;
    if (!fs.existsSync(path.join(ROOT, a.replace(/^\.\//, '')))) {
      fail('sw.js', `asset listé mais absent du disque : ${a} (addAll échouera en bloc)`);
    }
  });
  const referenced = new Set();
  ['index.html', 'os.html', 'tool.html', 'arbre.html'].forEach((page) => {
    const html = fs.readFileSync(path.join(ROOT, page), 'utf8');
    [...html.matchAll(/(?:src|href)="((?:css|js)\/[^"]+)"/g)].forEach((m) => referenced.add('./' + m[1]));
  });
  [...referenced].filter((r) => !assets.includes(r)).forEach((r) => {
    fail('sw.js', `${r} est chargé par une page mais absent de ASSETS — indisponible hors-ligne`);
  });
}

/* ---------------- rapport ---------------- */
const catCounts = Object.entries(
  DATA.reduce((a, o) => { a[o.cat] = (a[o.cat] || 0) + 1; return a; }, {})
).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join(' ');

console.log(`OSARIUM — validation`);
console.log(`  ${DATA.length} fiches, ${TOOLS.length} outils, ${Object.keys(CATS).length - 1} catégories`);
console.log(`  ${catCounts}`);

if (warnings.length) {
  console.log(`\n${warnings.length} avertissement(s) :`);
  warnings.forEach((w) => console.log(`  ~ ${w}`));
}

/* Inventaire séparé des avertissements : ces formulations partagées sont
   approximatives, pas fausses — c'est la config générée par catégorie assumée
   dans la roadmap. Les lister ici plutôt qu'en avertissements évite d'habituer
   à ignorer une sortie bruyante, tout en gardant la dette visible.
   Passer --dupes pour le détail. */
if (duplications.length) {
  const fiches = new Set(duplications.flatMap((d) => d.ids)).size;
  console.log(`\nDette de template : ${duplications.length} formulations partagées par ${SEUIL_DUPLICATION} fiches ou plus (${fiches} fiches concernées).`);
  console.log(`  Approximatif mais pas faux — config générée par catégorie, cf. roadmap. Détail : node scripts/validate-data.js --dupes`);
  if (process.argv.includes('--dupes')) {
    duplications.forEach((d) => {
      console.log(`\n  ${d.ids.length}× ${d.champ} : « ${d.texte} »`);
      console.log(`     ${d.ids.join(' ')}`);
    });
  }
}

if (errors.length) {
  console.error(`\n${errors.length} erreur(s) :`);
  errors.forEach((e) => console.error(`  ✕ ${e}`));
  process.exit(1);
}

console.log(`\n✓ Aucune erreur.`);
