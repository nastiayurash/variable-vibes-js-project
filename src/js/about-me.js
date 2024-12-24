import Accordion from 'accordion-js';
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.about-me-list-item');
  if (accordionItems.length > 0) {
    accordionItems[0].querySelector('.about-me-description').style.display =
      'block';
  }
  accordionItems.forEach((item, index) => {
    const button = item.querySelector('.about-me-button');
    const content = item.querySelector(
      '.about-me-description, .item-description'
    );
    if (index > 0) {
      content.style.display = 'none';
    }
    button.addEventListener('click', function () {
      const isOpen = content.style.display === 'block';
      if (isOpen) {
        content.style.display = 'none';
        button.querySelector('.about-me-icon').classList.remove('open');
      } else {
        content.style.display = 'block';
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

