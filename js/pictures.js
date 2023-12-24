const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();
const pictureContainer = document.querySelector('.pictures');

const createPictures = (descriptionPhotos) => {
  pictureContainer.querySelectorAll('.picture').forEach((picture) => picture.remove());
  descriptionPhotos.forEach((item) => {
    const currentPicture = pictureTemplate.cloneNode(true);
    currentPicture.querySelector('.picture__img').src = item.url;
    currentPicture.querySelector('.picture__img').alt = item.description;
    currentPicture.querySelector('.picture__likes').textContent = item.likes;
    currentPicture.querySelector('.picture__comments').textContent = item.comments.length;
    currentPicture.dataset.thumbnailId = item.id;
    pictureFragment.appendChild(currentPicture);
  });

  pictureContainer.appendChild(pictureFragment);
};
export { createPictures };
