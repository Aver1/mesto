// Popups
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add');
const popupCardImage = document.querySelector('.popup_type_image');

// Buttons
const popupEditButton = document.querySelector('.profile__edit-btn');
const popupCloseEditButton = popupEditProfile.querySelector('.popup__close-btn');

const popupAddCardButton = document.querySelector('.profile__add-btn');
const popupCloseCardButton = popupAddCard.querySelector('.popup__close-btn');

const popupCloseImageButton = popupCardImage.querySelector('.popup__close-btn');

// Forms
const editForm = popupEditProfile.querySelector('.popup__form');
let popupName = document.querySelector('.popup__input_type_name');
let popupAbout = document.querySelector('.popup__input_type_about');
const addForm = popupAddCard.querySelector('.popup__form');
let inputName = document.querySelector('.popup__input_type_card-name');
let inputLink = document.querySelector('.popup__input_type_card-link');
// Info
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let popupImage = document.querySelector('.popup__card-image');
let popupImageCaption = document.querySelector('.popup__image-caption');


// Add 6 cards on page load
const cards = document.querySelector('.cards');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

initialCards.forEach(function (item) {
  renderCard(item);
});

function addCard(item) {
  const cardTemplate = document.querySelector('#card-template').content; 
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__image').alt = item.name;
  cardElement.querySelector('.card__title').textContent = item.name;
  // card Like Button
  cardElement.querySelector('.card__like').addEventListener('click', (event) => {
    event.target.classList.toggle('card__like_active');
  });
  // Card Delete button
  cardElement.querySelector('.card__delete').addEventListener('click', (event) => {
    const card = event.target;
    card.parentElement.remove();
  });
  // card Image inspector
  cardElement.querySelector('.card__image').addEventListener('click', (event) => {
    const card = event.target;
    popupImage.src = card.src;
    popupImage.alt = card.alt;
    popupImageCaption.textContent = card.alt;
    popupCardImage.classList.add('popup_opened');
  });
  return cardElement;
}

function renderCard(data) {
  const card = addCard(data);
  cards.prepend(card);
}

function popupToggle(elem) {
  elem.classList.add('popup_opened');
  getInfo();
}

function popupClose(elem) {
  elem.classList.remove('popup_opened');
}

function getInfo() {
  popupName.value = profileName.textContent;
  popupAbout.value = profileAbout.textContent;
}

function editFormSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileAbout.textContent = popupAbout.value;
  popupClose(popupEditProfile);
}

function addFormSubmitHandler (evt) {
  evt.preventDefault();
  renderCard({name: inputName.value, link: inputLink.value});

  popupClose(popupAddCard);
  addForm.reset(); 
}


popupEditButton.addEventListener('click', () => popupToggle(popupEditProfile));
popupCloseEditButton.addEventListener('click', () => popupClose(popupEditProfile));
popupAddCardButton.addEventListener('click', () => popupToggle(popupAddCard));
popupCloseCardButton.addEventListener('click', () => popupClose(popupAddCard));
popupCloseImageButton.addEventListener('click', () => popupClose(popupCardImage))
editForm.addEventListener('submit', editFormSubmitHandler);
addForm.addEventListener('submit', addFormSubmitHandler);