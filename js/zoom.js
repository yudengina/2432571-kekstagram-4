const DEFAULT_ZOOM = 100;
const MAX_ZOOM = 100;
const MIN_ZOOM = 25;
const STEP_OF_ZOOM = 25;

const modalElement = document.querySelector('.img-upload');
const imageElement = modalElement.querySelector('.img-upload__preview img');
const valueScale = modalElement.querySelector('.scale__control--value');
const smallerButton = modalElement.querySelector('.scale__control--smaller');
const biggerButton = modalElement.querySelector('.scale__control--bigger');

const imageScale = (value) => {
  imageElement.style.transform = `scale(${value/100})`;
  valueScale.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  imageScale(Math.max(parseInt(valueScale.value, 10) - STEP_OF_ZOOM, MIN_ZOOM));
};

const onBiggerButtonClick = () => {
  imageScale(Math.min(parseInt(valueScale.value, 10) + STEP_OF_ZOOM, MAX_ZOOM));
};

const deleteScale = () => {
  imageScale(DEFAULT_ZOOM);
  smallerButton.removeEventListener('click', onSmallerButtonClick);
  biggerButton.removeEventListener('click', onBiggerButtonClick);
};

const initScale = () => {
  smallerButton.addEventListener('click', onSmallerButtonClick);
  biggerButton.addEventListener('click', onBiggerButtonClick);
};

export { initScale, deleteScale };
