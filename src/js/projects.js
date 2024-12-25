import Swiper from 'swiper';
import 'swiper/css/bundle';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

function doSwipe() {
  const swiperProjects = new Swiper('.swiper', {
    modules: [Navigation, Keyboard, Mousewheel],
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      enabled: true,
    },
    loop: false,
    slidesPerView: 1,
    speed: 1000,
    navigation: {
      prevEl: '.swiper-prev',
      nextEl: '.swiper-next',
      disabledClass: 'disabled-button',
    },
  });
}
document.addEventListener('DOMContentLoaded', doSwipe);
