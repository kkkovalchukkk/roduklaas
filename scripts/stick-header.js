window.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.querySelector('header');
  window.addEventListener('scroll', (e) => {
    if (window.pageYOffset >= 152) {
      headerEl.classList.add('scroll-header');
    } else {
      headerEl.classList.remove('scroll-header');
    }
  });
});
