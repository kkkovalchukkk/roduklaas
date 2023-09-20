window.addEventListener('DOMContentLoaded', () => {
  const ACTIVE_LOCATION_MENU_CLASSNAME = 'location-menu--active';

  const locationMenuEls = document.querySelectorAll('.location-menu');

  locationMenuEls.forEach((menu) => {
    menu.addEventListener('mouseenter', () => {
      const menuContentEl = menu.querySelector('.location-menu__content');
      menuContentEl.style.maxHeight = menuContentEl.scrollHeight + 'px';
    });
    menu.addEventListener('mouseleave', () => {
      const menuContentEl = menu.querySelector('.location-menu__content');
      menuContentEl.style.maxHeight = '0px';
    });
  });
});
