# OSARIUM Desktop

Coquille Electron autour du site OSARIUM (`../index.html` et compagnie, chargés
tels quels — aucune duplication de fichiers). Ajoute une détection matérielle
réelle (CPU, GPU, RAM exacte, disques) via [systeminformation](https://www.npmjs.com/package/systeminformation)
(gratuit, open-source, 100% local, aucun appel réseau), utilisée par le mode
« Vérifier mon PC » du site quand il tourne dans cette appli.

Le site web reste inchangé et continue de fonctionner normalement dans un
navigateur classique (avec l'estimation `navigator.deviceMemory` existante) ;
cette appli est un canal supplémentaire, pas un remplacement.

## Lancer en dev

```
npm install
npm start
```

## Générer un installateur en local (test)

```
npm run dist        # ton système
npm run dist:win     # Windows uniquement
npm run dist:mac      # macOS uniquement
npm run dist:linux    # Linux uniquement
```

Sort dans `dist/` (ignoré par git). Les fichiers du site sont copiés dans les
ressources de l'appli au moment du build (voir `extraResources` dans
`package.json`) — pas besoin de les dupliquer à la main.

## Publier une vraie Release (même pattern qu'Amarre)

Les installateurs ne sont jamais commités. `.github/workflows/release.yml`
les construit pour les 3 systèmes et les attache à une Release GitHub à
chaque tag `v*` poussé :

```
git tag v1.0.0
git push origin v1.0.0
```

Onglet **Actions** du dépôt pour suivre le build, ou déclenchement manuel
via **Run workflow**.
