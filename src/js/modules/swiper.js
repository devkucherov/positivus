import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

export const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },
  keyboard: {
    enabled: true,
  },

  breakpoints: {
    841: {
      slidesPerView: 2,
      centeredSlides: true,
    },
  },
});

