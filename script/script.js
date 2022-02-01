// Popups
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add');
const popupCardImage = document.querySelector('.popup_type_image');

// Buttons
const popupEditButton = document.querySelector('.profile__edit-btn');
const popupAddCardButton = document.querySelector('.profile__add-btn');
// Forms
const editForm = popupEditProfile.querySelector('.popup__form');
const popupName = document.querySelector('.popup__input_type_name');
const popupAbout = document.querySelector('.popup__input_type_about');
const addForm = popupAddCard.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_type_card-name');
const inputLink = document.querySelector('.popup__input_type_card-link');
// Info
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const popupImage = document.querySelector('.popup__card-image');
const popupImageCaption = document.querySelector('.popup__image-caption');
//cardTemplate
const cardTemplate = document.querySelector('#card-template').content; 

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

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    return closePopup(openedPopup);
  };
};

function openPopup(elem) {
  elem.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(elem) {
  elem.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
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
  resetSubmitButton(addForm);
}

// clean input
function cleanErrorMessages () {
  const curretForm = document.querySelector('.popup_opened');
  const spans = curretForm.querySelectorAll('.popup__input-error');
    spans.forEach((elem) => {elem.textContent = ''});
  const inputs = curretForm.querySelectorAll('.popup__input');
    inputs.forEach((elem) => {
      elem.value = ''; 
      if (elem.classList.contains('popup__input_type_error')) {
        elem.classList.remove('popup__input_type_error');
      };
    });
}

//disable button
function resetSubmitButton (item) {
  const button = item.querySelector('.popup__save-btn');
  button.setAttribute('disabled', true);
  button.classList.add('popup__save-btn_type_disabled');
}
//toggle button
function enableButton (item) {
  const button = item.querySelector('.popup__save-btn');
  button.removeAttribute('disabled');
  button.classList.remove('popup__save-btn_type_disabled');
}

// Add close on overlay click 
const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    };
    if (evt.target.classList.contains('popup__close-btn')) {
      closePopup(popup);
    };
  });
});

// EvtListeners
popupEditButton.addEventListener('click', () => {openPopup(popupEditProfile); cleanErrorMessages(); getInfo(); enableButton(editForm);});
popupAddCardButton.addEventListener('click', () => {openPopup(popupAddCard); cleanErrorMessages(); resetSubmitButton(addForm)});
editForm.addEventListener('submit', editFormSubmitHandler);
addForm.addEventListener('submit', addFormSubmitHandler);

// getinfo need onload page for toggleButtonState func
getInfo();