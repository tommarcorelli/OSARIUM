const { contextBridge, ipcRenderer } = require('electron');

/* Exposé au site (window.desktopHW) uniquement quand il tourne dans
   l'appli desktop — inexistant dans un navigateur classique, donc le site
   web reste inchangé et fonctionne à l'identique hors Electron. */
contextBridge.exposeInMainWorld('desktopHW', {
  getSpecs: () => ipcRenderer.invoke('get-hw-specs'),
});
