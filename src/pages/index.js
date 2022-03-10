import { FormValidator } from '../components/FormValidator.js';
import { config, initialCards, popupEditButton, popupAddCardButton, editForm, popupName, popupAbout, addForm } from '../components/utils/constants.js';
import { Card } from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

import './index.css';

//validation
const editFormValidator = new FormValidator(config, editForm);
const addFormValidator = new FormValidator(config, addForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

//User Info class

const user = new UserInfo ({nameSelector: '.profile__name', aboutSelector: '.profile__about'});

function createCard(item) {
  const card = new Card (item, '#card-template', handleCardClick);
  const cardElement = card.addCard();
  return cardElement
}

// PopupEditClass
const editPopup = new PopupWithForm ('.popup_type_edit', {handleFormSubmit: (items) => {
  user.setUserInfo({name: items['popup-name'], about: items['popup-about']})
  }
});
editPopup.setEventListeners();

// Popup Image
const popupImageOpen = new PopupWithImage('.popup_type_image',);

function handleCardClick(name, link) {
  popupImageOpen.open(name, link);
  popupImageOpen.setEventListeners();
}

//PopUpAddCard
const addPopup = new PopupWithForm ('.popup_type_add', {handleFormSubmit: (items) => {
  cards.addItem(createCard({name: items['popup-name'], link: items['popup-link']}));
  }
});
addPopup.setEventListeners();

// add cards onload
const cards = new Section ({items: initialCards, renderer: (item) => {
  cards.addItem(createCard(item));
  }
  }, '.cards');
  cards.renderItems();

function getInfo() {
  const curretData = user.getUserInfo();
  popupName.value = curretData.name;
  popupAbout.value = curretData.about;
}

// EvtListeners
popupEditButton.addEventListener('click', () => {editPopup.open(); editFormValidator.cleanErrorMessages(); getInfo(); editFormValidator.enableButton()});
popupAddCardButton.addEventListener('click', () => {addPopup.open(); addFormValidator.cleanErrorMessages(); addFormValidator.resetSubmitButton()});
