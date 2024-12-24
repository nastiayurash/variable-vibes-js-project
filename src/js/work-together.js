document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const emailInput = document.getElementById('email');
  const emailSuccessMessage = document.getElementById('emailSuccessMessage');
  const emailInputForm = emailInput.closest('.input-form');
  const commentsInput = document.getElementById('comments');
  const commentsInputForm = commentsInput.closest('.input-form');
  const btnClose = document.querySelector('.window-btn');
  const windowBackdrop = document.querySelector('.backdrop');
  const OPEN_CLASS = 'is-open';
  const body = document.querySelector('body');

  emailInput.addEventListener('input', () => {
    if (emailInput.value !== '') {
      emailInput.style.color = '#fafafa';
      emailInput.style.borderBottomColor = '#fafafa';
    } else {
      emailInput.style.color = '';
      emailInput.style.borderBottomColor = '';
    }
  });

  commentsInput.addEventListener('input', () => {
    if (commentsInput.value !== '') {
      commentsInput.style.color = '#fafafa';
      commentsInput.style.borderBottomColor = '#fafafa';
    } else {
      commentsInput.style.color = '';
      commentsInput.style.borderBottomColor = '';
    }
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');

    let comments = formData.get('comments');

    if (comments.length > 50) {
      comments = comments.substring(0, 50) + '...';
    }

    const dataPost = {
      email: email,
      comment: comments,
    };

    try {
      const response = await fetch(
        'https://portfolio-js.b.goit.study/api/requests',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataPost),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData || 'Invalid email, try again');
      }

      emailSuccessMessage.textContent = 'Success!';
      emailSuccessMessage.className = 'message';
      emailSuccessMessage.style.display = 'block';
      emailInputForm.classList.add('success');
      emailInputForm.classList.remove('error');
      openModalWithData();
      form.reset();
    } catch (error) {
      console.error('Error:', error.message);
      emailSuccessMessage.textContent = 'Invalid email, try again';
      emailSuccessMessage.className = 'message error';
      emailSuccessMessage.style.display = 'block';
      emailInputForm.classList.add('error');
      emailInputForm.classList.remove('success');
    }
  });

  commentsInput.addEventListener('input', () => {
    const maxLength = 50;

    if (commentsInput.value.length > maxLength) {
      commentsInput.value = commentsInput.value.substring(0, maxLength) + '...';
    }
  });

  function openModalWithData() {
    windowBackdrop.classList.add(OPEN_CLASS);
    body.style.overflow = 'hidden';
  }

  btnClose.addEventListener('click', () => {
    closeWindow();
  });

  windowBackdrop.addEventListener('click', event => {
    if (event.target === windowBackdrop) {
      closeWindow();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeWindow();
    }
  });

  function closeWindow() {
    windowBackdrop.classList.remove(OPEN_CLASS);
    document.body.style.overflow = 'auto';
  }
});
