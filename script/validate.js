
export class FormValidator {
  constructor (settings, form) {
    this._form = form
    this._settings = settings;
  }

  _showError(input) {
    input.classList.add(this._settings.inputErrorClass);
    this._errorTarget.textContent =  this._errorText;
  };
  
  _hideError(input) {
    input.classList.remove(this._settings.inputErrorClass);
    this._errorTarget.textContent = '';
  };

  _toggleButton() {
    const button = this._form.querySelector(this._settings.submitButtonSelector);
    const _isFormValid = this._form.checkValidity();
    if (_isFormValid) {
      button.classList.remove(this._settings.inactiveButtonClass);
      button.removeAttribute('disabled');
    } 
    else {
      button.classList.add(this._settings.inactiveButtonClass);
      button.setAttribute('disabled', true);
    };
  };

  _validateInput (input) {
    this._errorTarget = this._form.querySelector(`.${input.id}-error`);
  
    let _isValid = input.validity.valid;
    this._errorText = input.validationMessage;
  
    if (_isValid) {
      this._hideError(input);
    }
    else {
      this._showError(input);
    };
    this._toggleButton();
  };

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const inputs = this._form.querySelectorAll(this._settings.inputSelector);
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
      this._validateInput(input);
      });
      this._toggleButton();
    });
  }
};