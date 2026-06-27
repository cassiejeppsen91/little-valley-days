// Little Valley Days — smooth accordions and small polish for GitHub Pages.
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function closeDetails(details) {
    if (!details.open) return;
    const body = details.querySelector('.event-body');
    if (!body || reduceMotion) {
      details.removeAttribute('open');
      return;
    }

    body.style.height = body.offsetHeight + 'px';
    body.offsetHeight; // force reflow
    body.style.height = '0px';
    body.style.opacity = '0';

    window.setTimeout(() => {
      details.removeAttribute('open');
      body.style.height = '';
      body.style.opacity = '';
    }, 220);
  }

  function openDetails(details) {
    const body = details.querySelector('.event-body');
    if (!body || reduceMotion) {
      details.setAttribute('open', '');
      return;
    }

    details.setAttribute('open', '');
    body.style.height = '0px';
    body.style.opacity = '0';
    body.offsetHeight; // force reflow
    body.style.transition = 'height 220ms ease, opacity 180ms ease';
    body.style.height = body.scrollHeight + 'px';
    body.style.opacity = '1';

    window.setTimeout(() => {
      body.style.height = '';
      body.style.opacity = '';
      body.style.transition = '';
    }, 240);
  }

  document.querySelectorAll('.accordion').forEach((accordion) => {
    accordion.addEventListener('click', (event) => {
      const summary = event.target.closest('summary');
      if (!summary || !accordion.contains(summary)) return;
      event.preventDefault();

      const details = summary.parentElement;
      const isOpen = details.open;

      accordion.querySelectorAll('details[open]').forEach((openItem) => {
        if (openItem !== details) closeDetails(openItem);
      });

      if (isOpen) closeDetails(details);
      else openDetails(details);
    });
  });

  // Back-to-top button for long schedule pages.
  const button = document.createElement('button');
  button.className = 'to-top';
  button.type = 'button';
  button.setAttribute('aria-label', 'Back to top');
  button.textContent = '↑';
  document.body.appendChild(button);

  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));
  window.addEventListener('scroll', () => {
    button.classList.toggle('show', window.scrollY > 550);
  }, { passive: true });
})();
