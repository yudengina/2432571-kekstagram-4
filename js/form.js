import {initScale, deleteScale} from './zoom.js';
import {initEffect, deleteEffect} from './effects.js';
import {pristine} from './validate-form.js';
import {sendData} from './api.js';
import {onSuccess, onFail} from './submit-form.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const bodyElement = document.querySelector('body');
const formUpload = document.querySelector('.img-upload__form');
const fileUpload = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const cancelButtonElement = document.querySelector('.img-upload__cancel');
const hashtagFieldElement = document.querySelector('.text__hashtags');
const commentFieldElement = document.querySelector('.text__description');
const submitButtonElement = document.querySelector('.img-upload__submit');
const errorMessageElement = document.querySelector('#error').content.querySelector('.error');
const fileChooserElement = document.querySelector('.img-upload__start input[type=file]');
const previewElement = document.querySelector('.img-upload__preview img');
const effectPreviewsElement = document.querySelectorAll('.effects__preview');

const onFileChooserChanged = () => {
  const file = fileChooserElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const newPictureUrl = URL.createObjectURL(file);
    previewElement.src = newPictureUrl;

    effectPreviewsElement.forEach((effect) => {
      effect.style.backgroundImage = `url(${newPictureUrl})`;
    });
  }
};

fileChooserElement.addEventListener('change', onFileChooserChanged);

const isFieldInFocus = () =>
  document.activeElement === hashtagFieldElement ||
  document.activeElement === commentFieldElement;

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && !isFieldInFocus() && !errorMessageElement.classList.contains('open-error')) {
    evt.preventDefault();
    closeEditPopup();
  }
};

const SubmitButton = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикация...'
};

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = SubmitButton.SENDING;
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = SubmitButton.IDLE;
};

const onFormInput = (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    sendData(new FormData(evt.target))
      .then(() => {
        closeEditPopup();
        onSuccess();
      })
      .catch(() => {
        onFail();
      })
      .finally(unblockSubmitButton);
  }
};

function openEditPopup () {
  uploadOverlay.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  cancelButtonElement.addEventListener('click', onCancelButtonClick);
  formUpload.addEventListener('submit', onFormInput);

  initScale();
}

function closeEditPopup () {
  formUpload.reset();
  pristine.reset();
  uploadOverlay.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  formUpload.removeEventListener('submit', onFormInput);
  cancelButtonElement.removeEventListener('click', onCancelButtonClick);

  deleteScale();
  deleteEffect();
}

function onCancelButtonClick () {
  closeEditPopup();
}

const initEditPopup = () => {
  initEffect();
  fileUpload.addEventListener('change', openEditPopup);
};

export { initEditPopup };

