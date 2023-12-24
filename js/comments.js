const COUNT_OF_COMMNENTS = 5;

let showComments = 0;
let comments = [];

const commentContainer = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsLoaderElement = document.querySelector('.comments-loader');
const commentsShowElement = document.querySelector('.show-comment-count');
const totalCommentsElement = document.querySelector('.comments-count');

const createComment = (item) => {
  const comment = commentTemplate.cloneNode(true);

  comment.querySelector('.social__picture').src = item.avatar;
  comment.querySelector('.social__picture').alt = item.name;
  comment.querySelector('.social__text').textContent = item.message;

  return comment;
};

const renderComments = () => {
  showComments += COUNT_OF_COMMNENTS;
  if (showComments >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
    showComments = comments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < showComments; i++) {
    const comment = createComment(comments[i]);
    fragment.appendChild(comment);
  }

  commentContainer.innerHTML='';
  commentContainer.appendChild(fragment);
  commentsShowElement.textContent = showComments;
  totalCommentsElement.textContent = comments.length;
};

function onCommentsLoaderClick () {
  renderComments();
}

const updateComments = (data) => {
  comments = data.comments;
  showComments = 0;
  renderComments();
  commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);
};

export {updateComments};
