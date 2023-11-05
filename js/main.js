/* eslint-disable no-template-curly-in-string */
const COUNT_PHOTO = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Елизавета',
  'Тимофей',
  'Максим',
  'Алина',
  'Маргарита',
  'Виктория',
  'Артём',
  'Мария',
  'Марк',
  'София',
];

function createDiscription(){
  let photoId = 0;
  return function(){
    photoId++;
    return {
      id: photoId,
      url: `photos/${photoId}.jpg`,
      description: 'Отличная фотография!',
      likes: getRandomInteger(15,200),
      comments: Array.from({length: getRandomInteger(0,30)}, createComments())
    };
  };
}

function createComments(){
  let commentId = 0;
  return function(){
    commentId++;
    return {
      id: commentId,
      avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
      message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
      name: NAMES[getRandomInteger(0, MESSAGES.length - 1)],
    };
  };
}

Array.from({length: COUNT_PHOTO}, createDiscription());
