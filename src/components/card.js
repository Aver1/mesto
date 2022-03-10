export class Card {
  constructor (data, TemplateSelector, handlePreviewInspector) {
  
    this._TemplateSelector = document.querySelector(TemplateSelector).content; 
    this._name = data.name;
    this._link = data.link
    this._handlePreviewInspector = handlePreviewInspector;
  }

    _handleLikeIcon = () => {
      this._likeButton.classList.toggle('card__like_active');
    }

    _handleDeleteCard = () => {
      this._cardElement.remove();
    }

    _setEventListeners () {
      // card Like Button
      this._likeButton = this._cardElement.querySelector('.card__like');
      this._likeButton.addEventListener('click', this._handleLikeIcon);
      // Card Delete button
      this._deleteButton = this._cardElement.querySelector('.card__delete');
      this._deleteButton.addEventListener('click', this._handleDeleteCard);
      // card Image inspector 
      this._cardImage = this._cardElement.querySelector('.card__image');
      this._cardImage.addEventListener('click', () => {
        this._handlePreviewInspector(this._name, this._link);
      });
    };
    
    addCard = () => {
  
    this._cardElement = this._TemplateSelector.querySelector('.card').cloneNode(true);
    
    this._setEventListeners();

    //fill
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardElement.querySelector('.card__title').textContent = this._name;

    this._setEventListeners();
    
    return this._cardElement;
  }
}