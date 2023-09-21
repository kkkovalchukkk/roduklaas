window.addEventListener('DOMContentLoaded', () => {
  const gallerySwiper = new Swiper('.gallery-section__swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.gallery-section__swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.gallery-section__sw-navigation-right',
      prevEl: '.gallery-section__sw-navigation-left',
    },
  });
  const slideshowSwiper = new Swiper('.slideshow__swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.slideshow__pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.slideshow__swiper-right',
      prevEl: '.slideshow__swiper-left',
    },
  });

  const slideShowEl = document.querySelector('.slideshow');
  const closeSlideshowBtnEl = document.querySelector('.slideshow__close-btn');

  const closeSlideshowByClickOnOverlay = (e) => {
    if (e.target === slideShowEl) {
      slideShowEl.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  };

  closeSlideshowBtnEl.addEventListener('click', () => {
    window.removeEventListener('click', closeSlideshowByClickOnOverlay);
    slideShowEl.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });

  gallerySwiper.on('click', (e) => {
    if (window.innerWidth <= 425) {
      window.addEventListener('click', closeSlideshowByClickOnOverlay);
      slideShowEl.classList.add('active');
      document.body.classList.add('no-scroll');
      slideshowSwiper.slideTo(e.clickedIndex);
    }
  });
});
