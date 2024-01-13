// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
export const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

