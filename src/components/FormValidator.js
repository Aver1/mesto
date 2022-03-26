
export class FormValidator {
  constructor (settings, form) {
    this._form = form
    this._settings = settings;
    this._inputs = this._form.querySelectorAll(this._settings.inputSelector);
    this._spans = this._form.querySelectorAll(this._settings.spanSelector);
  }

  _showError(input) {
    input.classList.add(this._settings.inputErrorClass);
    this._errorTarget.textContent =  this._errorText;
  };
  
  _hideError(input) {
    input.classList.remove(this._settings.inputErrorClass);
    this._errorTarget.textContent = '';
  };

  resetSubmitButton () { 
    this._button.setAttribute('disabled', true);
    this._button.classList.add(this._settings.inactiveButtonClass);
  };

  enableButton () {
    this._button.removeAttribute('disabled');
    this._button.classList.remove(this._settings.inactiveButtonClass);
  };

  _toggleButton() {
    const _isFormValid = this._form.checkValidity();
    if (_isFormValid) {
      this.enableButton();
    } 
    else {
      this.resetSubmitButton();
    };
  };

  _validateInput (input) {
    this._errorTarget = this._form.querySelector(`.${input.id}-error`);
  
    const _isValid = input.validity.valid;
    this._errorText = input.validationMessage;
  
    if (_isValid) {
      this._hideError(input);
    }
    else {
      this._showError(input);
    };
  };

  cleanErrorMessages () {
    this._spans.forEach((elem) => {elem.textContent = ''});
    this._inputs.forEach((elem) => {
        if (elem.classList.contains(this._settings.inputErrorClass)) {
          this._hideError(elem);
        };
    });
  }

  enableValidation() {
    this._button = this._form.querySelector(this._settings.submitButtonSelector);
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._toggleButton();
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
      this._validateInput(input);
      this._toggleButton();
      });
    });
  }
};