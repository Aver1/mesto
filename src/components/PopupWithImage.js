import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__card-image');
    this._text = this._popup.querySelector('.popup__image-caption');
  };
  open(caption, link) {
    super.open();
    this._image.src = link;
    this._image.alt = caption;
    this._text.textContent = caption;
  };
}