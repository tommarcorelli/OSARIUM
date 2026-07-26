/* ============ ACCESSIBILITÉ DES MODALES ============
 * Les 5 fenêtres du catalogue (comparateur, wizard, vérifier mon PC,
 * raccourcis) se contentaient d'une classe .show : le reste de la page
 * restait tabulable derrière la fenêtre ouverte, rien n'annonçait une
 * fenêtre modale à un lecteur d'écran, et fermer renvoyait le focus sur
 * <body> au lieu du bouton qui avait ouvert la fenêtre.
 *
 * Ce module observe l'apparition/disparition de .show et s'en occupe, sans
 * toucher au code qui ouvre et ferme les modales. Il n'a donc rien à
 * recâbler si une modale est ajoutée plus tard : il suffit qu'elle ait la
 * classe .modal et un .modal-inner.
 */
(function () {
  const modals = document.querySelectorAll('.modal');
  if (!modals.length) return;

  const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  /* Élément à re-focaliser à la fermeture, mémorisé par modale.
     On ne se fie pas au dernier bouton cliqué : l'observateur s'exécute en
     microtâche juste après le gestionnaire d'ouverture, avant que le focus
     n'ait bougé, donc document.activeElement à cet instant est exactement
     l'élément déclencheur — que l'ouverture vienne de la souris, du clavier
     ou d'un raccourci. */
  const triggers = new WeakMap();

  modals.forEach((modal) => {
    const inner = modal.querySelector('.modal-inner') || modal;
    /* Sémantique : sans role/aria-modal, la fenêtre n'est qu'une div de plus
       pour un lecteur d'écran. aria-labelledby reprend le titre déjà présent. */
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    const title = inner.querySelector('h3');
    if (title) {
      if (!title.id) title.id = (modal.id || 'modal') + 'Title';
      modal.setAttribute('aria-labelledby', title.id);
    }
    /* la fenêtre elle-même doit pouvoir recevoir le focus à l'ouverture,
       même quand son contenu est encore vide (le wizard le remplit après) */
    if (!inner.hasAttribute('tabindex')) inner.setAttribute('tabindex', '-1');

    /* Croix de fermeture : c'est un <span> cliquable, donc invisible au
       clavier. On ne le remplace pas par un <button> : catalog.js et
       shortcuts.js gardent une référence directe à cet élément, et le
       remplacer les laisserait pointer sur un nœud détaché. On le rend
       opérable sur place — même résultat pour l'utilisateur. */
    const close = modal.querySelector('.cmp-close');
    if (close && close.tagName !== 'BUTTON') {
      close.setAttribute('role', 'button');
      close.setAttribute('tabindex', '0');
      close.setAttribute('aria-label', 'Fermer');
      close.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); close.click(); }
      });
    }
  });

  function focusables(modal) {
    return [...modal.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null || el === document.activeElement);
  }

  /* Piège à focus : Tab et Maj+Tab bouclent à l'intérieur de la fenêtre
     ouverte au lieu d'aller visiter la page derrière. */
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const open = document.querySelector('.modal.show');
    if (!open) return;
    const items = focusables(open);
    if (!items.length) { e.preventDefault(); return; }
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && (document.activeElement === first || !open.contains(document.activeElement))) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  });

  /* Les modales sont ouvertes/fermées ailleurs par un simple toggle de classe :
     on observe l'attribut plutôt que d'aller modifier chaque appelant. */
  const observer = new MutationObserver((records) => {
    records.forEach((r) => {
      const modal = r.target;
      if (!modal.classList.contains('modal')) return;
      const isOpen = modal.classList.contains('show');
      const wasOpen = modal.dataset.wasOpen === '1';
      if (isOpen === wasOpen) return;
      modal.dataset.wasOpen = isOpen ? '1' : '0';

      if (isOpen) {
        const active = document.activeElement;
        triggers.set(modal, active && active !== document.body ? active : null);
        /* Le contenu de certaines modales (wizard, vérifier mon PC) est
           injecté juste après l'ouverture : on tente tout de suite, puis à
           nouveau au frame suivant et via un timer court. requestAnimationFrame
           seul ne suffit pas — il est throttlé quand la fenêtre n'est pas au
           premier plan, et le focus n'entrait alors jamais dans la modale. */
        const grabFocus = () => {
          if (!modal.classList.contains('show')) return;
          if (modal.contains(document.activeElement) && document.activeElement !== document.body) return;
          const items = focusables(modal);
          const target = items[0] || modal.querySelector('.modal-inner') || modal;
          target.focus();
        };
        grabFocus();
        requestAnimationFrame(grabFocus);
        setTimeout(grabFocus, 60);
      } else {
        const back = triggers.get(modal);
        triggers.delete(modal);
        if (back && back.isConnected && back.offsetParent !== null) {
          back.focus();
        } else if (modal.contains(document.activeElement)) {
          /* Sans repli, le focus resterait sur un élément désormais masqué
             (la croix de fermeture) : la navigation clavier repartirait de
             nulle part et un lecteur d'écran lirait du contenu invisible. */
          document.activeElement.blur();
        }
      }
    });
  });

  modals.forEach((m) => {
    m.dataset.wasOpen = m.classList.contains('show') ? '1' : '0';
    observer.observe(m, { attributes: true, attributeFilter: ['class'] });
  });
})();
