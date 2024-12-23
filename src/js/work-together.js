document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const emailInput = document.getElementById('email');
  const emailSuccessMessage = document.getElementById('emailSuccessMessage');
  const emailInputForm = emailInput.closest('.input-form');
  const commentsInput = document.getElementById('comments');
  const commentsInputForm = commentsInput.closest('.input-form');

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
      comments: comments,
    };

    try {
      const response = await fetch(
        'https://portfolio-js.b.goit.study/api-docs',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataPost),
        }
      );

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Invalid email, try again');
      }

      emailSuccessMessage.textContent = 'Success!';
      emailSuccessMessage.className = 'message';
      emailSuccessMessage.style.display = 'block';
      emailInputForm.classList.add('success');
      emailInputForm.classList.remove('error');

      form.reset();
    } catch (error) {
      emailSuccessMessage.textContent = error.message;
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
});
