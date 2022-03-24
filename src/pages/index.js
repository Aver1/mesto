import { FormValidator } from '../components/FormValidator.js';
import { config, popupEditButton, popupAddCardButton, popupEditAvatarButton, editForm, popupName, popupAbout, addForm, AvatarForm} from '../components/utils/constants.js';
import { Card } from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import { api } from '../components/Api.js';

let userId;

api.getProfile()
  .then((res) => {
    user.setUserInfo({name: res.name, about: res.about});
    user.setUserAvatar(res);
    userId = res._id;
  });

api.getInitialCards()
  .then(cardList => {
    cardList.forEach((data) => {
      const card = createCard({
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        userId: userId,
        ownerId: data.owner._id
      })

      cards.addItem(card);
    })
  })

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
  const card = new Card (item, '#card-template', handleCardClick, 
    (id) => {
      confirmPopupCardDel.open();
      confirmPopupCardDel.changeSubmitHander(() => {
        api.deleteCard(id)
          .then(res => {
            card.deleteCard();
            confirmPopupCardDel.close();
            console.log(res);
          })
      });
    },
    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id)
        .then((res) => {
          card.setCardLikes(res.likes);
        // console.log(res);
        });
      } 
      else {
        api.addLike(id)
        .then((res) => {
          card.setCardLikes(res.likes);
        // console.log(res);
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
  .then((res) => {user.setUserInfo(res)})
  .finally(() => {
    editPopup.close();
  })
  }
);
editPopup.setEventListeners();

// Popup Image
const popupImageOpen = new PopupWithImage('.popup_type_image',);

function handleCardClick(name, link) {
  popupImageOpen.open(name, link);
  popupImageOpen.setEventListeners();
}

//card delete
// function handleDelCardClick (id) {
//   confirmPopupCardDel.open();
//   confirmPopupCardDel.changeSubmitHander(() => {
//     api.deleteCard(id)
//       .then(res => {
//         card.deleteCard();
//         confirmPopupCardDel.close();
//         console.log(res);
//       })
//   });
// }

//PopUpAddCard
const addPopup = new PopupWithForm ('.popup_type_add', (items) => {
  api.addCard(items['popup-name'], items['popup-link'])
  .then((res) => {cards.addItem(createCard(res))})
  .finally(() => {
    addPopup.close();
  })
  // cards.addItem(createCard({name: items['popup-name'], link: items['popup-link']}));
  }
);
addPopup.setEventListeners();

// add cards onload
// const cards = new Section ({items: initialCards, renderer: (item) => {
//   cards.addItem(createCard(item));
//   }
//   }, '.cards');
const cards = new Section ({items: [], renderer: (item) => {
  cards.addItem(createCard(item));
  }
}, '.cards');
  cards.renderItems();

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
  })
  .finally(() => {
    editAvatarPopup.close();
  })
});
editAvatarPopup.setEventListeners();

// EvtListeners
popupEditButton.addEventListener('click', () => {editPopup.open(); editFormValidator.cleanErrorMessages(); getInfo(); editFormValidator.enableButton()});
popupAddCardButton.addEventListener('click', () => {addPopup.open(); addFormValidator.cleanErrorMessages(); addFormValidator.resetSubmitButton()});
popupEditAvatarButton.addEventListener('click', () => {editAvatarPopup.open(); editAvatarFormValidator.cleanErrorMessages(); editAvatarFormValidator.resetSubmitButton()})