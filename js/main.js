(() => {
  // Theme toggle
  const toggle = document.querySelector('[data-theme-toggle]');

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // Nav scroll state
  const nav = document.querySelector('.nav');
  const intro = document.querySelector('.intro');

  if (nav && intro) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        nav.classList.toggle('nav--scrolled', !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(intro);
  }
})();
