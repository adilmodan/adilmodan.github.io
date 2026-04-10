/* Tab switching */
function switchTab(name) {
  document.querySelectorAll('.pill-nav__item').forEach(function(i) {
    i.classList.toggle('pill-nav__item--active', i.getAttribute('data-tab') === name);
  });
  document.querySelectorAll('.tab-panel').forEach(function(p) {
    p.classList.toggle('tab-panel--active', p.id === 'tab-' + name);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
