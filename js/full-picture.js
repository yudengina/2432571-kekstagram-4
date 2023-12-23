import {updateComments} from './comments.js';

const bigPictureElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const cancelButtonElement = document.querySelector('.big-picture__cancel');

const renderPictureDescriptions = (item) => {
  bigPictureElement.querySelector('.big-picture__img img').src = item.url;
  bigPictureElement.querySelector('.big-picture__img img').alt = item.description;
  bigPictureElement.querySelector('.likes-count').textContent = item.likes;
  bigPictureElement.querySelector('.social__caption').textContent = item.description;
};

const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  cancelButtonElement.removeEventListener('click', cancelButtonElement);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const showBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDescriptions(data);
  updateComments(data);
};

cancelButtonElement.addEventListener('click', () => {
  hideBigPicture();
});

export { showBigPicture };

