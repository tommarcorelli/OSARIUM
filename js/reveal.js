/* ============ SHARED: scroll-in reveal (.rv -> .rv.in) ============
 * One IntersectionObserver instance, reused for every element with the
 * .rv class, on either page. Respects prefers-reduced-motion.
 */
const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealObserver = prefersReducedMotion ? null : new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      revealObserver.unobserve(en.target);
    }
  });
}, { rootMargin: '0px 0px -6% 0px' });

function observeReveals() {
  if (prefersReducedMotion) {
    document.querySelectorAll('.rv').forEach((el) => el.classList.add('in'));
    return;
  }
  document.querySelectorAll('.rv:not(.in)').forEach((el) => revealObserver.observe(el));
}

/* safety net: if for any reason a reveal never fired, force it visible */
function armRevealSafetyNet(delay = 800) {
  setTimeout(() => {
    document.querySelectorAll('.rv:not(.in)').forEach((el) => el.classList.add('in'));
  }, delay);
}
