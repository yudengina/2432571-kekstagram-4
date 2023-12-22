import { getRandomInteger } from './util.js';

const COUNT_PHOTO = 25;

const DESCRIPTIONS = [
  'Прекраный день!',
  'Отдыхаю',
  'Работаю',
  'Веселюсь',
  'Сегодня унылое настроение',
  'Хорошего дня!',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
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

const createComment = (commentId) => ({
  id: commentId,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const createDescription = (photoId) => ({
  id: photoId,
  url: `photos/${photoId}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
});

const descriptionPhotos = () => Array.from({length: COUNT_PHOTO}, (_, index) => createDescription(index + 1));

export { descriptionPhotos };
