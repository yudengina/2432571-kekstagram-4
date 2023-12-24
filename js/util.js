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

export { showAlert };


