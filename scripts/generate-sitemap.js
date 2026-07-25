#!/usr/bin/env node
/* Régénère sitemap.xml à partir de data.js (OS) et tools-data.js (outils),
   au lieu de l'éditer à la main à chaque ajout de fiche.
   Usage : node scripts/generate-sitemap.js */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DOMAIN = 'https://osarium.example'; // à remplacer par le domaine réel une fois le site déployé

function loadGlobal(file) {
  const code = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const sandbox = { window: {} };
  new Function('window', code)(sandbox.window);
  return sandbox.window;
}

function isoDate(file) {
  return fs.statSync(path.join(ROOT, file)).mtime.toISOString().slice(0, 10);
}

const { OS_DATA } = loadGlobal('data.js');
const { TOOLS_DATA } = loadGlobal('tools-data.js');

const dataLastmod = isoDate('data.js');
const toolsLastmod = isoDate('tools-data.js');

const urls = [
  { loc: 'index.html', lastmod: isoDate('index.html') },
  { loc: 'arbre.html', lastmod: isoDate('arbre.html') },
  ...OS_DATA.map((os) => ({ loc: `os.html?id=${os.id}`, lastmod: dataLastmod })),
  ...TOOLS_DATA.map((tool) => ({ loc: `tool.html?id=${tool.id}`, lastmod: toolsLastmod })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${
  urls.map((u) => `  <url><loc>${DOMAIN}/${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n')
}\n</urlset>\n`;

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
console.log(`sitemap.xml régénéré : ${urls.length} URLs (${OS_DATA.length} OS + ${TOOLS_DATA.length} outils + 2 pages statiques).`);
