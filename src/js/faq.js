import Accordion from 'accordion-js';

new Accordion('.faq-list', {
  duration: 400,
  showOne: true,
  showMultiple: true,
  onToggle: function (element) {
    const parent = element.closest('.faq-item');
    if (parent) {
      parent.classList.toggle('is-active');
      const panel = parent.querySelector('.ac-panel');
      if (panel) {
        if (parent.classList.contains('is-active')) {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        } else {
          panel.style.maxHeight = null;
        }
      }
    }
  },
});
