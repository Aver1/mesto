import { FormValidator } from '../components/FormValidator.js';
import { config, popupEditButton, popupAddCardButton, popupEditAvatarButton, editForm, popupName, popupAbout, addForm, AvatarForm} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import { api } from '../components/Api.js';

let userId;

Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([userData, cardList]) => {
      user.setUserInfo({name: userData.name, about: userData.about});
      user.setUserAvatar(userData);
      userId = userData._id;

      cards.renderItems(cardList.reverse());
  })
  .catch(err => {
    console.log(err);
  });

import './index.css';

//validation
const editFormValidator = new FormValidator(config, editForm);
const addFormValidator = new FormValidator(config, addForm);
const editAvatarFormValidator = new FormValidator(config, AvatarForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();

//User Info class

const user = new UserInfo ({nameSelector: '.profile__name', aboutSelector: '.profile__about', avatarSelector: '.profile__avatar'});

function createCard(item) {
  const card = new Card (item, userId, '#card-template', handleCardClick, 
    (id) => {
      confirmPopupCardDel.open();
      confirmPopupCardDel.changeSubmitHander(() => {
        api.deleteCard(id)
          .then(res => {
            card.deleteCard();
            confirmPopupCardDel.close();
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      });
    },
    (id) => {
      console.log(id);
      if (card.isLiked()) {
        api.deleteLike(id)
        .then((res) => {
          card.setCardLikes(res.likes);
        // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      } 
      if (!card.isLiked()) {
        api.addLike(id)
        .then((res) => {
          card.setCardLikes(res.likes);
        // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      }
    }
  );
  const cardElement = card.addCard();
  return cardElement
}

// PopupEditClass
const editPopup = new PopupWithForm ('.popup_type_edit', (items) => {
  api.editProfile(items['popup-name'], items['popup-about'])
  .then((res) => {
    user.setUserInfo(res);
    editPopup.close();
  })
  .catch(err => {
    console.log(err);
  })
});
editPopup.setEventListeners();

// Popup Image
const popupImageOpen = new PopupWithImage('.popup_type_image',);

function handleCardClick(name, link) {
  popupImageOpen.open(name, link);
}
popupImageOpen.setEventListeners();

//PopUpAddCard
const addPopup = new PopupWithForm ('.popup_type_add', (items) => {
  api.addCard(items['popup-name'], items['popup-link'])
  .then((res) => {
    cards.addItem(createCard(res));
    addPopup.close();
  })
  .catch(err => {
    console.log(err);
  })
});

addPopup.setEventListeners();

const cards = new Section ({renderer: (item) => {
  cards.addItem(createCard({
    name: item.name,
    link: item.link,
    likes: item.likes, 
    _id: item._id,
    userId: userId,
    ownerId: item.owner._id
  }));
}
}, '.cards');

function getInfo() {
  const curretData = user.getUserInfo();
  popupName.value = curretData.name;
  popupAbout.value = curretData.about;
}

const confirmPopupCardDel = new PopupWithForm('.popup_type_card-delete-confirm', () => {});
confirmPopupCardDel.setEventListeners();
const editAvatarPopup = new PopupWithForm('.popup_type_avatar', (item) => {
  api.updateAvatar(item['popup-link'])
  .then((res) => {
    user.setUserAvatar(res);
    editAvatarPopup.close();
  })
  .catch(err => {
    console.log(err);
  })
});
editAvatarPopup.setEventListeners();

// EvtListeners
popupEditButton.addEventListener('click', () => {
  editPopup.open(); 
  editFormValidator.cleanErrorMessages(); 
  getInfo(); 
  editFormValidator.enableButton()
});
popupAddCardButton.addEventListener('click', () => {
  addPopup.open(); 
  addFormValidator.cleanErrorMessages(); 
  addFormValidator.resetSubmitButton()
});
popupEditAvatarButton.addEventListener('click', () => {
  editAvatarPopup.open(); 
  editAvatarFormValidator.cleanErrorMessages(); 
  editAvatarFormValidator.resetSubmitButton()
});