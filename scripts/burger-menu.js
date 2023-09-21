window.addEventListener('DOMContentLoaded', () => {
  const burgerMenuEl = document.querySelector('.burger-menu');
  const burgerMenuLinksEls = burgerMenuEl.querySelectorAll('a');
  const closeBurgerMenuEl = document.querySelector('.burger-menu__close-btn');
  const openBurgerMenuEl = document.querySelector('.header__burger-btn');

  openBurgerMenuEl.addEventListener('click', () => {
    burgerMenuEl.classList.add('active');
    document.body.classList.add('no-scroll');
  });

  closeBurgerMenuEl.addEventListener('click', () => {
    burgerMenuEl.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });

  burgerMenuLinksEls.forEach((link) =>
    link.addEventListener('click', (e) => {
      e.preventDefault();
      burgerMenuEl.classList.remove('active');
      document.body.classList.remove('no-scroll');
    })
  );
});
