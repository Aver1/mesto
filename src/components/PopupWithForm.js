import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._button = this._popup.querySelector('.popup__save-btn');
    this._initialButtonText = this._button.textContent;
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__input');
  }
  _getInputValues () {
    this._inputValues = {};
    this._inputs.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  changeSubmitHander(NewSubmitHander) {
    this._handleFormSubmit = NewSubmitHander;
  }

  setEventListeners () {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._button.textContent = 'Сохранение...';
      this._handleFormSubmit(this._getInputValues());
      // this.close();
    });
  }
  close () {
    this._button.textContent = this._initialButtonText;
    super.close();
    this._form.reset();
  }
}