import { FormValidator } from './validate.js';
import { config, cards, initialCards} from './constants.js';
import { openPopup, closeByEscape, closePopup } from './utils.js';
import { Card } from './card.js';


// Popups
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add');

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
//cardTemplate

//validation
const editFormValidator = new FormValidator(config, editForm);
const addFormValidator = new FormValidator(config, addForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();


initialCards.forEach(function (item) {
  renderCard(item, '#card-template');
});


function renderCard(data, template) {
  const card = new Card (data, template);
  const cardElement = card.addCard();
  cards.prepend(cardElement);
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
  renderCard({name: inputName.value, link: inputLink.value}, '#card-template');
  closePopup(popupAddCard);
  addForm.reset();
  resetSubmitButton(addForm);
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
popupEditButton.addEventListener('click', () => {openPopup(popupEditProfile); editFormValidator.cleanErrorMessages(); getInfo(); editFormValidator.enableButton()});
popupAddCardButton.addEventListener('click', () => {openPopup(popupAddCard); addFormValidator.cleanErrorMessages(); addFormValidator.resetSubmitButton()});
editForm.addEventListener('submit', editFormSubmitHandler);
addForm.addEventListener('submit', addFormSubmitHandler);