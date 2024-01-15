// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
export const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 50,

  // freeMode: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },
  keyboard: {
    enabled: true,
  },

  breakpoints: {
    // 600: {
    //   slidesPerView: 1,
    //   centeredSlides: true,
    //   spaceBetween: 50,
    // },
    841: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    // 1230: {
    //   slidesPerView: 2,
    //   centeredSlides: true,
    // },
  },
});

