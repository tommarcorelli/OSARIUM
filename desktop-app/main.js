const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

/* En dev, on charge directement le site depuis le dossier parent (aucune
   duplication de fichiers, source unique). Une fois empaqueté (.exe), les
   fichiers du site sont copiés dans resources/site par electron-builder
   (voir "extraResources" dans package.json). */
function siteRoot() {
  return app.isPackaged ? path.join(process.resourcesPath, 'site') : path.join(__dirname, '..');
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    icon: path.join(siteRoot(), 'icons', 'icon-512.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  win.loadFile(path.join(siteRoot(), 'index.html'));
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });

/* Détection matérielle réelle (CPU/GPU/RAM/disque), demandée par le
   renderer via preload.js -> window.desktopHW.getSpecs(). systeminformation
   est un paquet npm gratuit et 100% local (aucun appel réseau). */
ipcMain.handle('get-hw-specs', async () => {
  const si = require('systeminformation');
  const [cpu, mem, graphics, diskLayout, osInfo] = await Promise.all([
    si.cpu(), si.mem(), si.graphics(), si.diskLayout(), si.osInfo(),
  ]);
  return {
    cpu: `${cpu.manufacturer} ${cpu.brand}`.trim(),
    cores: cpu.cores,
    ramGB: Math.round((mem.total / 1024 / 1024 / 1024) * 10) / 10,
    gpu: graphics.controllers && graphics.controllers[0] ? graphics.controllers[0].model : null,
    disks: (diskLayout || []).map((d) => ({ name: d.name || d.type, sizeGB: Math.round(d.size / 1024 / 1024 / 1024) })),
    os: `${osInfo.distro} ${osInfo.release}`,
  };
});
