let popup = document.querySelector('.popup');
editButton = document.querySelector('.profile__edit-btn'),
popupCloseButton = document.querySelector('.popup__close-btn'),
popupSaveButton = document.querySelector('.popup__save-btn'),
profileName = document.querySelector('.profile__name'),
profileAbout = document.querySelector('.profile__about'),
popupName = document.querySelector('.popup__name'),
popupAbout = document.querySelector('.popup__about');


function popupToggle() {
  popup.classList.toggle('popup_opened');
  getInfo();
}

function getInfo() {
  popupName.value = profileName.textContent;
  popupAbout.value = profileAbout.textContent;
}

function editAbout() {
  if (popupName.value !== '' && popupAbout.value !== '') {
    profileName.textContent = popupName.value;
    profileAbout.textContent = popupAbout.value;
    popup.classList.toggle('popup_opened');
  }
  else {
    alert('Ошибка! Заполните поля ввода!')
  }
}

editButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popupSaveButton.addEventListener('click', editAbout);