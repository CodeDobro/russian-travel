const popupElement = document.querySelector('.popup');

const closeButton = popupElement.querySelector('.popup__close-button');

const navButton = document.querySelector('.header__navigation');

navButton.addEventListener('click', () => {
  popupElement.classList.remove('hidden');
})

closeButton.addEventListener('click', () => {
  popupElement.classList.add('hidden');
})
