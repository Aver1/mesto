export class Card {
  constructor (data, TemplateSelector, handlePreviewInspector, handleDeleteClick, handleLikeClick) {
    this._TemplateSelector = document.querySelector(TemplateSelector).content; 
    this._name = data.name;
    this._link = data.link
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;

    this._handlePreviewInspector = handlePreviewInspector;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

    isLiked() {
      const UserLikedCard = this._likes.find(user => user._id === this._userId);

      return UserLikedCard;
    }

    _fillLike = () => {
      this._likeButton.classList.add('card__like_active');
    }
    _deleteFillLike = () => {
      this._likeButton.classList.remove('card__like_active');
    }

    deleteCard = () => {
      this._cardElement.remove();
    }

    _setEventListeners () {
      // card Like Button
      this._likeButton = this._cardElement.querySelector('.card__like');
      this._likeButton.addEventListener('click', () => {this._handleLikeClick(this._id)});
      // Card Delete button
      this._deleteButton = this._cardElement.querySelector('.card__delete');
      this._deleteButton.addEventListener('click', () => {this._handleDeleteClick(this._id)});
      // card Image inspector 
      this._cardImage = this._cardElement.querySelector('.card__image');
      this._cardImage.addEventListener('click', () => {
        this._handlePreviewInspector(this._name, this._link);
      });
    };

    setCardLikes (newLikes) {
      this._likes = newLikes;
      const likeCountElem = this._cardElement.querySelector('.card__like-count');
      likeCountElem.textContent = this._likes.length;

      if (this.isLiked()) {
        this._fillLike();
      }
      else {
        this._deleteFillLike();
      }
    }
    
    addCard = () => {
  
    this._cardElement = this._TemplateSelector.querySelector('.card').cloneNode(true);

    this._setEventListeners();

    //fill
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardElement.querySelector('.card__title').textContent = this._name;

    this.setCardLikes(this._likes);

    if (this._userId !== this._ownerId) {
      this._deleteButton.style.display = 'none';
    }
    
    return this._cardElement;
  }
}