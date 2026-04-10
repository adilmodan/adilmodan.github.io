(() => {
  // Theme toggle
  const html = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  const stored = localStorage.getItem('theme');

  if (stored) {
    html.setAttribute('data-theme', stored);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.setAttribute('data-theme', 'dark');
  }

  toggle?.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // Scroll reveal
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
  });

  // Nav scroll state
  const nav = document.querySelector('.nav');
  const hero = document.querySelector('.hero');

  if (nav && hero) {
    const navObserver = new IntersectionObserver(
      ([entry]) => {
        nav.classList.toggle('nav--scrolled', !entry.isIntersecting);
      },
      { threshold: 0 }
    );

    navObserver.observe(hero);
  }
})();
