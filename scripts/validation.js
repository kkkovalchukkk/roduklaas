window.addEventListener('DOMContentLoaded', () => {
  const formEls = document.querySelectorAll('.form');

  const submitForm = (e) => {
    e.preventDefault();

    const textInputsEl = e.target.querySelectorAll('input[type="text"]');
    const telInputs = e.target.querySelectorAll('input[type="tel"]');
    const emailInputs = e.target.querySelectorAll('input[type="email"]');

    textInputsEl.forEach((textInput) => {
      if (!textInput.value) {
        textInput.classList.add('error');
      } else {
        textInput.classList.remove('error');
      }
    });

    telInputs.forEach((telInput) => {
      if (!telInput.value) {
        telInput.classList.add('error');
      } else {
        telInput.classList.remove('error');
      }
    });

    emailInputs.forEach((emailInput) => {
      if (!emailInput.value) {
        emailInput.classList.add('error');
      } else {
        emailInput.classList.remove('error');
      }
    });

    if (
      Array.from(telInputs).some((input) => input.classList.contains('error'))
    ) {
      return;
    }
    if (
      Array.from(emailInputs).some((input) => input.classList.contains('error'))
    ) {
      return;
    }
    if (
      Array.from(textInputsEl).some((input) =>
        input.classList.contains('error')
      )
    ) {
      return;
    }

    e.target.reset();
    e.target.classList.add('form--finish');
  };

  formEls.forEach((formEl) => {
    const textInputs = formEl.querySelectorAll('input[type="text"]');
    const telInputs = formEl.querySelectorAll('input[type="tel"]');
    const emailInputs = formEl.querySelectorAll('input[type="email"]');
    const finishBtn = formEl.querySelector('.form__finish-btn');

    textInputs.forEach((input) => {
      input.addEventListener('input', () => {
        if (!input.value) {
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });
    });

    telInputs.forEach((input) => {
      IMask(input, {
        mask: '+{7}(000)000-00-00',
      });

      input.addEventListener('input', () => {
        if (!input.value) {
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });
    });

    emailInputs.forEach((input) => {
      input.addEventListener('input', () => {
        if (!input.value) {
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });
    });

    finishBtn.addEventListener('click', () => {
      formEl.classList.remove('form--finish');
      formEl.reset();
    });

    formEl.addEventListener('submit', submitForm);
  });
});
