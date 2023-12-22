const bigPictureElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const cancelButtonElement = document.querySelector('.big-picture__cancel');
const commentContainer = document.querySelector('.social__comments');
const commentCountElement = document.querySelector('.social__comment-count');
const commentsLoaderElement = document.querySelector('.comments-loader');

const createComment = (item) => {
  const comment = commentTemplate.cloneNode(true);

  comment.querySelector('.social__picture').src = item.avatar;
  comment.querySelector('.social__picture').alt = item.name;
  comment.querySelector('.social__text').textContent = item.message;

  return comment;
};

const renderComments = (comments) => {
  commentContainer.innerHTML='';

  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const comment = createComment(item);
    fragment.appendChild(comment);
  });
  commentContainer.appendChild(fragment);
};


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
  document.removeEventListener('click', cancelButtonElement);
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
  commentsLoaderElement.classList.add('hidden');
  commentCountElement.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDescriptions(data);
  renderComments(data.comments);
};

cancelButtonElement.addEventListener('click', () => {
  hideBigPicture();
});

export { showBigPicture };

