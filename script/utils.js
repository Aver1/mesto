export function openPopup(elem) {
  elem.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

export function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    return closePopup(openedPopup);
  };
};

export function closePopup(elem) {
  elem.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}