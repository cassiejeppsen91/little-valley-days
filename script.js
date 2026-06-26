// Keeps only one event open at a time within each day.
document.querySelectorAll('.accordion').forEach((accordion) => {
  accordion.addEventListener('toggle', (event) => {
    if (event.target.tagName !== 'DETAILS' || !event.target.open) return;
    accordion.querySelectorAll('details[open]').forEach((details) => {
      if (details !== event.target) details.removeAttribute('open');
    });
  }, true);
});
