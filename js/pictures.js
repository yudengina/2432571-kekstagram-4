const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPhoto = (photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('img').src = photo.url;
  pictureElement.querySelector('img').alt = photo.description;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  return pictureElement;
};

const drawPhotos = (photos) => {
  const element = document.createDocumentFragment();
  photos.forEach((photo) => {
    element.appendChild(createPhoto(photo));
  });
  pictures.appendChild(element);
};

export {drawPhotos};
