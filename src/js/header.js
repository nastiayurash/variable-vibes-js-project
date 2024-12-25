const mobileMenuBtn = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu-wrapper');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');
const mobileNavigation = document.querySelectorAll('.mobile-menu-link');
const mobileOrderBtn = document.querySelector('.mobile-order-button');
const tabletAndDesktopMenu = document.querySelector(
  '.tablet-and-desktop-menu-navigation-wrapper'
);
const tabletAndDesktopMenuLink = document.querySelector('.menu-link');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

mobileMenuCloseBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = 'auto';
});

mobileNavigation.forEach(item => {
  item.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = 'auto';
  });
});

mobileOrderBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = 'auto';
});

tabletAndDesktopMenuLink.addEventListener('click', event => {
  event.preventDefault();
  if (getComputedStyle(tabletAndDesktopMenu).display === 'none') {
    tabletAndDesktopMenu.style.display = 'block';
  } else {
    tabletAndDesktopMenu.style.display = 'none';
  }
});
