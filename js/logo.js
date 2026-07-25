/* ============ SHARED: OS logo markup ============
 * Used by both the catalog grid (small, lazy) and the detail page (large, eager).
 * Single source of truth so a fix here can't drift between pages like it did before.
 */
function logoInner(os, { size = 30, lazy = true } = {}) {
  if (os.svg) return os.svg;
  const letter = os.name.replace(/^[^A-Za-z]+/, '').charAt(0).toUpperCase() || os.name.charAt(0);
  if (os.icon) {
    const hex = os.color.replace('#', '');
    const loadingAttr = lazy ? 'loading="lazy" fetchpriority="low"' : '';
    // La lettre reste dans le DOM (fallback) mais cachée tant que le logo est affiché ;
    // si l'image échoue à charger, onerror la réaffiche au lieu de laisser les deux superposées.
    return `<span class="mg" style="display:none">${letter}</span>` +
      `<img src="https://cdn.simpleicons.org/${os.icon}/${hex}" alt="${os.name}" width="${size}" height="${size}" decoding="async" ${loadingAttr} style="position:absolute" onerror="this.style.display='none'; if(this.previousElementSibling) this.previousElementSibling.style.display='';">`;
  }
  return `<span class="mg">${letter}</span>`;
}
