/* ============ VUS RÉCEMMENT (partagé entre index.html et os.html) ============ */
window.Recent = (function () {
  const KEY = 'osarium_recent';
  const MAX = 10;
  function get() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; }
  }
  function set(arr) { try { localStorage.setItem(KEY, JSON.stringify(arr)); } catch (e) {} }
  function record(id) {
    if (!id) return;
    let arr = get().filter((x) => x !== id);
    arr.unshift(id);
    if (arr.length > MAX) arr = arr.slice(0, MAX);
    set(arr);
    return arr;
  }
  function clear() { set([]); }
  return { get, record, clear };
})();
