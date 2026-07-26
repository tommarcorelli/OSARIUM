/* ============ PROGRESSION D'INSTALLATION (os.html) ============
   Mémorise, par fiche, les étapes déjà réalisées. Pensé pour l'usage réel :
   on installe sur une machine en lisant le guide sur une autre (ou sur le
   téléphone), et on veut retrouver où on en était en revenant.
   Stockage local uniquement, même pattern que les favoris. */
window.StepProgress = (function () {
  const KEY = 'osarium_steps';

  function all() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; }
  }
  function save(obj) { try { localStorage.setItem(KEY, JSON.stringify(obj)); } catch (e) {} }

  function get(osId) {
    const v = all()[osId];
    return Array.isArray(v) ? v : [];
  }
  function has(osId, i) { return get(osId).includes(i); }

  function toggle(osId, i) {
    const obj = all();
    const arr = Array.isArray(obj[osId]) ? obj[osId] : [];
    const at = arr.indexOf(i);
    if (at > -1) arr.splice(at, 1); else arr.push(i);
    arr.sort((a, b) => a - b);
    if (arr.length) obj[osId] = arr; else delete obj[osId];
    save(obj);
    return arr;
  }

  function reset(osId) {
    const obj = all();
    delete obj[osId];
    save(obj);
  }

  return { get, has, toggle, reset };
})();
