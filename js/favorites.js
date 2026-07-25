/* ============ FAVORIS (partagé entre index.html et os.html) ============ */
window.Favorites = (function () {
  const KEY = 'osarium_favs';
  function get() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; }
  }
  function set(arr) { try { localStorage.setItem(KEY, JSON.stringify(arr)); } catch (e) {} }
  function has(id) { return get().includes(id); }
  function toggle(id) {
    const arr = get();
    const i = arr.indexOf(id);
    if (i > -1) arr.splice(i, 1); else arr.push(id);
    set(arr);
    return arr;
  }
  return { get, has, toggle };
})();
