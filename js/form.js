import {onFormInput, refreshPrinstine} from './validate-form.js';

const bodyElement = document.querySelector('body');
const formUpload = document.querySelector('.img-upload__form');
const fileUpload = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const cancelButtonElement = document.querySelector('.img-upload__cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const isFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && !isFieldFocused()) {
    evt.preventDefault();
    closeEditPopup();
  }
};

function openEditPopup () {
  uploadOverlay.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  cancelButtonElement.addEventListener('click', onCancelButtonClick);
  formUpload.addEventListener('submit', onFormInput);
}

function closeEditPopup () {
  formUpload.reset();
  refreshPrinstine();
  uploadOverlay.classList.add('hidden');
  bodyElement.classList.add('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  formUpload.removeEventListener('submit', onFormInput);
  cancelButtonElement.removeEventListener('click', onCancelButtonClick);
}

function onCancelButtonClick () {
  closeEditPopup();
}

export const initEditPopup = () => {
  fileUpload.addEventListener('change', openEditPopup);
};

