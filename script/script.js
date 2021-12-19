let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-btn');
let popupCloseButton = document.querySelector('.popup__close-btn');
let form = document.querySelector('.popup__form');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let popupName = document.querySelector('.popup__input_type_name');
let popupAbout = document.querySelector('.popup__input_type_about');


function popupToggle() {
  popup.classList.add('popup_opened');
  getInfo();
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function getInfo() {
  popupName.value = profileName.textContent;
  popupAbout.value = profileAbout.textContent;
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileAbout.textContent = popupAbout.value;
  popupClose();
}

editButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupClose);
form.addEventListener('submit', formSubmitHandler);