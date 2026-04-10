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

  // Scroll-triggered fade in
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach((el) => {
    fadeObserver.observe(el);
  });

  // Active nav tracking
  const navItems = document.querySelectorAll('.pill-nav__item');
  const sections = document.querySelectorAll('section[id]');

  if (navItems.length && sections.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navItems.forEach((item) => {
              const href = item.getAttribute('href');
              if (href === '#' + id || (id === 'bento' && href === '#home')) {
                item.classList.add('pill-nav__item--active');
              } else {
                item.classList.remove('pill-nav__item--active');
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => navObserver.observe(section));
  }
})();
