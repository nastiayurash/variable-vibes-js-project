import Swiper from 'swiper';
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";
import 'swiper/css';
import { Navigation, Keyboard,Mousewheel } from 'swiper/modules';
import { apiGet } from './api';

const errorMessage = document.querySelector('.error-message');
const reviewsList = document.querySelector('.reviews-list');
const swiperContainer = document.querySelector('.swiper-container');

function displayToast(message) {
    iziToast.error({
      title: 'Error',
      message: message,
      position: 'topRight',
    });
  }

  function render(reviews) {
    if (reviews.length === 0) {
      reviewsIsNotFounded();
    }
    else {
      const markup = reviews.map(review => 
        `<li class="reviews-item swiper-slide">
          <img src="${review.avatar_url}" alt="" width="48" height="48"  class="reviews-avatar"/>
          <div class="reviews-info">
            <h3 class="reviews-name">${review.author}</h3>
            <p class="reviews-text">${review.review}</p>
           </div>
         </li>`)
        .join('');
        reviewsList.innerHTML = markup; 
        initializeSwiper();
    }
  }

  function reviewsIsNotFounded() {
    swiperContainer.style.display = 'none';
    errorMessage.style.display = 'block';
    displayToast(`Problem with the server connection, reviews can not be rendered`)
  }
  
  function renderReviews() {
    apiGet().then(data => {
      if (data && data.length > 0) {
        render(data);
        
      } else {
        reviewsIsNotFounded();
      }
    }).catch(error => {
       console.error(error);
      reviewsIsNotFounded();
    })
  }

  function initializeSwiper() {
    const prevButton = document.querySelector('.prev-reviews-btn');
    const nextButton = document.querySelector('.next-reviews-btn');
    const swiperReviews = new Swiper('.swiper-container', {
      modules: [Navigation, Keyboard, Mousewheel],
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 4,
        },
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: {
        enabled: true,
      },
      speed: 800,
      spaceBetween: 16,
      allowTouchMove: true,
      loop: false,
      watchOverflow: true,
      slideToClickedSlide: true,
      navigation: {
        nextEl: '.next-reviews-btn',
        prevEl: '.prev-reviews-btn',
      },
    });
}

  document.addEventListener('DOMContentLoaded', renderReviews);