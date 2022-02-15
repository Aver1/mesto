import { openPopup } from './utils.js';
import {popupCardImage, popupImage, popupImageCaption} from './constants.js';

export class Card {
  constructor (data, TemplateSelector) {
    this._TemplateSelector = document.querySelector(TemplateSelector).content; 
    this._name = data.name;
    this._link = data.link
  }

    _handleLikeIcon = () => {
      this.likeButton.classList.toggle('card__like_active');
    }

    _handleDeleteCard = () => {
      this._cardElement.remove();
    }

    _handlePreviewInspector = () => {
      popupImage.src = this._link;
      popupImage.alt = this._name;
      popupImageCaption.textContent = this._name;
      openPopup(popupCardImage);
    }

    addCard = () => {
    this._cardElement = this._TemplateSelector.querySelector('.card').cloneNode(true);
    
    //fill
    const cardImage = this._cardElement.querySelector('.card__image');
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._cardElement.querySelector('.card__title').textContent = this._name;

    // card Like Button
    this.likeButton = this._cardElement.querySelector('.card__like');
    this.likeButton.addEventListener('click', this._handleLikeIcon);

    // Card Delete button
    const deleteButton = this._cardElement.querySelector('.card__delete');
    deleteButton.addEventListener('click', this._handleDeleteCard);

    // card Image inspector 
    cardImage.addEventListener('click', this._handlePreviewInspector);
    
    return this._cardElement;
  }
}