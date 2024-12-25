import Accordion from 'accordion-js';
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.about-me-list-item');
  accordionItems.forEach((item, index) => {
    const button = item.querySelector('.about-me-button');
    const content = item.querySelector(
      '.about-me-description, .item-description'
    );
    content.style.overflow = 'hidden';
    content.style.transition = 'max-height 0.3s ease-out'; 
    if (index === 0) {
      content.style.maxHeight = '1000px'; 
    } else {
      content.style.maxHeight = '0';
    }
    button.addEventListener('click', function () {
      const isOpen = content.style.maxHeight !== '0px';
      if (isOpen) {
        content.style.maxHeight = '0';
        button.querySelector('.about-me-icon').classList.remove('open');
      } else {
        content.style.maxHeight = '1000px'; 
        button.querySelector('.about-me-icon').classList.add('open');
      }
    });
  });
});


import Swiper from 'swiper';
import 'swiper/css/bundle';

const swiper = new Swiper('#swiperLibrary', {
  slidesPerView: 'auto',
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: '.button-swipe',
  },
  on: {
    init: function () {
      this.el.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight' || e.key === 'Tab') {
          swiper.slideNext();
        }
      });
    },
  },
});
const swipeButton = document.querySelector('.button-swipe');
swipeButton.addEventListener('click', () => {
  swiper.slideNext();
});
swiper.el.addEventListener(
  'touchstart',
  e => {
    e.preventDefault();
    swiper.slideNext();
  },
  { passive: true }
);
swiper.el.addEventListener(
  'wheel',
  function (e) {
    e.preventDefault();
    if (e.deltaY > 0) {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  },
  { passive: false }
);
