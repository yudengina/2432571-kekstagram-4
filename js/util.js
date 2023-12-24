const ALERT_TIME = 5000;

const showAlert = (message) => {
  const errorMessage = document.createElement('div');
  errorMessage.style.zIndex = '100';
  errorMessage.style.position = 'absolute';
  errorMessage.style.left = '0';
  errorMessage.style.top = '0';
  errorMessage.style.right = '0';
  errorMessage.style.padding = '15px';
  errorMessage.style.fontSize = '20px';
  errorMessage.style.textAlign = 'center';
  errorMessage.style.backgroundColor = 'red';

  errorMessage.textContent = message;

  document.body.append(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, ALERT_TIME);
};

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function throttle (callback, delayBetweenFrames) {
  let lastTime = 0;

  return (...rest) => {

    const now = new Date();

    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

const getRandomElements = (elements, randomElementsCount) => {
  const elementNumbers = [];
  const randomElements = [];
  for (let i = 0; i < elements.length; i++) {
    const number = getRandomInteger(0, elements.length - 1);
    if (elementNumbers.indexOf(number) === -1) {
      randomElements.push(elements[number]);
      elementNumbers.push(number);
    }
    if (randomElements.length === randomElementsCount) {
      break;
    }
  }
  return randomElements;
};

export { showAlert, debounce, throttle, getRandomElements };


