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
  const cardElem = cardElement.querySelector('.card__image');
  cardElem.src = item.link;
  cardElem.alt = item.name;
  cardElement.querySelector('.card__title').textContent = item.name;
  // card Like Button
  cardElement.querySelector('.card__like').addEventListener('click', (event) => {
    event.target.classList.toggle('card__like_active');
  });
  // Card Delete button
  cardElement.querySelector('.card__delete').addEventListener('click', (event) => {
    const card = event.target;
    card.closest('.card').remove();
  });
  // card Image inspector 
  cardElem.addEventListener('click', () => {
    popupImage.src = item.link;
    popupImage.alt = item.name;
    popupImageCaption.textContent = item.name;
    openPopup(popupCardImage);
  });
  return cardElement;
}

function renderCard(data) {
  const card = addCard(data);
  cards.prepend(card);
}

function openPopup(elem) {
  elem.classList.add('popup_opened');
}

function closePopup(elem) {
  elem.classList.remove('popup_opened');
}

function getInfo() {
  popupName.value = profileName.textContent;
  popupAbout.value = profileAbout.textContent;
}

function editFormSubmitHandler () {
    profileName.textContent = popupName.value;
    profileAbout.textContent = popupAbout.value;
    closePopup(popupEditProfile);
}

function addFormSubmitHandler () {
  renderCard({name: inputName.value, link: inputLink.value});
  closePopup(popupAddCard);
  addForm.reset();
  enableValidation();
}

// Add close on overlay click 
const popup = document.querySelectorAll('.popup');
popup.forEach((elem) => {
  elem.addEventListener('click', (evt) => {closePopup(evt.target)});
});


//close popup using escape 
document.addEventListener('keydown', (evt) => {
  if (popupEditProfile.classList.contains('popup_opened') && evt.key === "Escape") {
    closePopup(popupEditProfile);
  };
  if (popupAddCard.classList.contains('popup_opened') && evt.key === "Escape") {
    closePopup(popupAddCard);
  };
  if (popupCardImage.classList.contains('popup_opened') && evt.key === "Escape") {
    closePopup(popupCardImage);
  };
});

popupEditButton.addEventListener('click', () => {openPopup(popupEditProfile); getInfo()});
popupCloseEditButton.addEventListener('click', () => closePopup(popupEditProfile));
popupAddCardButton.addEventListener('click', () => openPopup(popupAddCard));
popupCloseCardButton.addEventListener('click', () => closePopup(popupAddCard));
popupCloseImageButton.addEventListener('click', () => closePopup(popupCardImage));
editForm.addEventListener('submit', editFormSubmitHandler);
addForm.addEventListener('submit', addFormSubmitHandler);

// getinfo need onload page for toggleButtonState func
getInfo();