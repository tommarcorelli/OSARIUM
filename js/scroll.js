/* ============ SHARED: smooth scroll + progress bar ============
 * One rAF chain drives Lenis' physics AND our own per-frame reads
 * (progress width, nav state, parallax) in the same tick — never two
 * separate rAF chains fighting over the same frame.
 *
 * `nav` and `orb` are optional: the detail page only has a progress bar,
 * the index page also has a nav bar that goes solid and a parallax orb.
 */
function initScroll({ nav, orb } = {}) {
  const prog = document.getElementById('progress');

  function onFrame(curScroll) {
    const limit = document.documentElement.scrollHeight - innerHeight || 1;
    prog.style.width = (curScroll / limit * 100) + '%';
    if (nav) nav.classList.toggle('solid', curScroll > 60);
    if (orb && curScroll < innerHeight) orb.style.transform = `translate3d(0,${curScroll * 0.2}px,0)`;
  }

  if (!prefersReducedMotion && window.Lenis) {
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true });
    window.__lenis = lenis;

    document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); lenis.scrollTo(t, { offset: -70 }); }
    }));

    (function raf(t) {
      lenis.raf(t);
      onFrame(lenis.scroll ?? scrollY);
      requestAnimationFrame(raf);
    })();
  } else {
    let ticking = false, curScroll = 0;
    function tick() { onFrame(curScroll); ticking = false; }
    addEventListener('scroll', () => {
      curScroll = scrollY;
      if (!ticking) { ticking = true; requestAnimationFrame(tick); }
    }, { passive: true });
  }
}
