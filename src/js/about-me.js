
import Accordion from 'accordion-js';
import Swiper from 'swiper';
import 'swiper/css/bundle';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function () {
 
  const accordionItems = document.querySelectorAll('.about-me-list-item');

  accordionItems.forEach((item, index) => {
    const button = item.querySelector('.about-me-button');
    const content = item.querySelector('.about-me-description, .item-description');
    const icon = button.querySelector('.about-me-icon'); 

    
    content.style.overflow = 'hidden';
    content.style.transition = 'max-height 0.3s ease-out';
    content.style.maxHeight = index === 0 ? '1000px' : '0';

   
    button.addEventListener('click', function () {
      const isOpen = content.style.maxHeight !== '0px';

      
      if (isOpen) {
        content.style.maxHeight = '0';
        icon.querySelector('use').setAttribute('href', './src/img/icons.svg#icon-arrow-bot');
      } else {
        content.style.maxHeight = '1000px';
        icon.querySelector('use').setAttribute('href', './src/img/icons.svg#icon-arrow-top');
      }
    });
  });

  function doSwipe() {
    const swiperLibrary = new Swiper('#swiperLibrary', {
      modules: [Navigation, Keyboard, Mousewheel],
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      mousewheel: {
        enabled: true,
        invert: false,
      },
      navigation: {
        nextEl: '.button-swipe',
        disabledClass: 'disabled-button',
      },
      loop: true,
      slidesPerView: 'auto',
      speed: 500,
      spaceBetween: 0,
      slideToClickedSlide: true,
      allowTouchMove: true,
      centeredSlides: false,
      breakpoints: {
        768: {
          slidesPerView: 3,
          width: 600,
        },
        1440: {
          slidesPerView: 6,
          width: 1200,
        },
      },
    });

    const swipeButton = document.querySelector('.button-swipe');

   
    if (swipeButton) {
      swipeButton.addEventListener('click', () => {
        swiperLibrary.slideNext();
      });
    }

    if (swiperLibrary?.el) {
      swiperLibrary.el.addEventListener(
        'touchstart',
        (e) => {
          e.preventDefault();
          swiperLibrary.slideNext();
        },
        { passive: false }
      );

      let wheelTimeout;
      swiperLibrary.el.addEventListener(
        'wheel',
        (e) => {
          e.preventDefault();
          clearTimeout(wheelTimeout);

          wheelTimeout = setTimeout(() => {
            if (e.deltaY > 0) {
              swiperLibrary.slideNext();
            } else {
              swiperLibrary.slidePrev();
            }
          }, 50);
        },
        { passive: false }
      );

      let isMouseDown = false;
      let startX, currentTranslate, prevTranslate;

      swiperLibrary.el.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX - swiperLibrary.el.offsetLeft;
        prevTranslate = swiperLibrary.translate;
        swiperLibrary.el.classList.add('grabbing');
        swiperLibrary.allowClick = false;
      });

      swiperLibrary.el.addEventListener('mouseup', () => {
        isMouseDown = false;
        swiperLibrary.el.classList.remove('grabbing');
        swiperLibrary.allowClick = true;
        setPositionByIndex();
      });

      swiperLibrary.el.addEventListener('mousemove', (e) => {
        if (isMouseDown) {
          const currentPosition = e.pageX - swiperLibrary.el.offsetLeft;
          currentTranslate = prevTranslate + (currentPosition - startX);
          setSliderPosition();
        }
      });

      function setSliderPosition() {
        swiperLibrary.setTranslate(currentTranslate);
      }

      function setPositionByIndex() {
        const moveBy = currentTranslate - prevTranslate;
        const threshold = swiperLibrary.width / 4;

        if (moveBy < -threshold) {
          swiperLibrary.slideNext();
        } else if (moveBy > threshold) {
          swiperLibrary.slidePrev();
        } else {
          swiperLibrary.slideTo(swiperLibrary.activeIndex);
        }
      }
    }
  }

 
  doSwipe();
});
