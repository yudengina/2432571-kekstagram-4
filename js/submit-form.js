const bodyElement = document.querySelector('body');
const successMessageElement = document.querySelector('#success').content.querySelector('.success');
const errorMessageElement = document.querySelector('#error').content.querySelector('.error');
const successButtonElement = successMessageElement.querySelector('.success__button');
const errorButtonElement = errorMessageElement.querySelector('.error__button');
const overlayElement = document.querySelector('.img-upload__overlay');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeMessage();
  }
};

const onButtonClick = () => closeMessage();

const onBodyClick = (evt) => {
  const clickElement = evt.target;
  if (clickElement.classList.contains('success__inner') || clickElement.classList.contains('error__inner')) {
    return;
  }
  closeMessage();
};

function closeMessage () {
  const messageElement = bodyElement.querySelector('.success') || bodyElement.querySelector('.error');
  messageElement.remove();
  if (errorMessageElement.classList.contains('open-error')) {
    errorMessageElement.classList.remove('open-error');
  }
  document.removeEventListener('keydown', onDocumentKeydown);
  bodyElement.removeEventListener('click', onBodyClick);

  document.querySelector('.message__button').removeEventListener('click', onButtonClick);
}

const showMessage = (messageElement, buttonElement) => {
  if (buttonElement === successButtonElement) {
    bodyElement.append(messageElement);
  } else {
    overlayElement.append(messageElement);
    errorMessageElement.classList.add('open-error');
  }
  document.addEventListener('keydown', onDocumentKeydown);
  bodyElement.addEventListener('click', onBodyClick);
  buttonElement.addEventListener('click', onButtonClick);
};

const onSuccess = () => {
  showMessage(successMessageElement, successButtonElement);
};

const onFail = () => {
  showMessage(errorMessageElement, errorButtonElement);
};

export {onSuccess, onFail};
