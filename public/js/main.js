/* Minimal JS scaffold */
document.addEventListener('DOMContentLoaded', () => {
  const now = new Date();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = now.getFullYear();

  // Simple nav toggle
  const toggle = document.querySelector('.js-nav-toggle');
  const nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if (expanded) {
        nav.setAttribute('hidden', '');
      } else {
        nav.removeAttribute('hidden');
      }
    });
  }

  console.log('Boilerplate ready ✅');
});
