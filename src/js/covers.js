
const coverSection = document.querySelector(".covers-section");
// Об'єкт налаштувань для Observer'а.
const options = {
    root: null,
    rootMargin: "500px",
    threshold: 0.5,
}

// Колбек функція для Observer'а.
const observeFunc = (enteries) => {
    // Observer створює масив входженнь таргета в зону спостереждення
    enteries.forEach(entry => {
        // Коли таргет входить в зону спостереження запускаємо анімацію
      if (entry.isIntersecting) {
          startAnimation();
        //   Коли виходить анімацію зупиняємо
      } else {
            stopAnimation();
      }
    });
}

// Функція зупинки анімації
function stopAnimation() {
    const slideItem = document.querySelectorAll(".covers-slide");
    slideItem.forEach((slide) => slide.classList.remove("animation"))
}
// Функція запуску анімації
function startAnimation() {
    const slideItem = document.querySelectorAll(".covers-slide");
    slideItem.forEach((slide) => slide.classList.add("animation"));
    
}
// Створення екземпляру Interseption Observer 
const observer = new IntersectionObserver(observeFunc, options);
// Передаємо секцію в якості таргета для спостереження 
observer.observe(coverSection)