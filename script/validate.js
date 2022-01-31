function showError(input, errorTarget, errorText, {inputErrorClass}) {
  input.classList.add(inputErrorClass);
  errorTarget.textContent = errorText;
};

function hideError(input, errorTarget, {inputErrorClass}) {
  input.classList.remove(inputErrorClass);
  errorTarget.textContent = '';
};

function toggleButton(form, { submitButtonSelector, inactiveButtonClass }) {
  const button = form.querySelector(submitButtonSelector);
  const isFormValid = form.checkValidity();
  if (isFormValid) {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute('disabled');
  } 
  else {
      button.classList.add(inactiveButtonClass);
      button.setAttribute('disabled', true);
  };
};

function validateInput (form, input, classes) {
  const errorTarget = form.querySelector(`.${input.id}-error`);

  let isValid = input.validity.valid;
  let errorText = input.validationMessage;

  if (isValid) {
    hideError(input, errorTarget, classes);
  }
  else {
    showError(input, errorTarget, errorText, classes);
  };
  toggleButton(form, classes);
};

function submitForm (evt) {
  evt.preventDefault();
};

function enableValidation( {formSelector, inputSelector, ...rest} ) {
  const forms = document.querySelectorAll(formSelector);
    forms.forEach((form) => {
      form.addEventListener('submit', submitForm);
      const inputs = form.querySelectorAll(inputSelector);
        inputs.forEach((input) => {
          input.addEventListener('input', () => {
            validateInput(form, input, rest);
          });
        });
      toggleButton(form, rest);
    });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_type_disabled',
  inputErrorClass: 'popup__input_type_error',
}); 