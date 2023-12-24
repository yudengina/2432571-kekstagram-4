const MAX_SYMBOLS = 20;
const MAX_HASHTAGS_COUNT = 5;
const MAX_COMMENT_LENGTH = 140;
const VALID_HASHTAG_SYMBOLS = /^#[a-zA-Z0-9а-яА-Я]{1,19}$/;

const formUpload = document.querySelector('.img-upload__form');
const commentNode = document.querySelector('.text__description');
const hashtagsNode = document.querySelector('.text__hashtags');

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

const toHashtagsList = (hashtags) => hashtags
  .split(' ')
  .map((hashtag) => hashtag.trim().toLowerCase())
  .filter((hashtag) => hashtag.length);

const isRightHashtags = (hashtags) => toHashtagsList(hashtags).every((hashtag) => VALID_HASHTAG_SYMBOLS.test(hashtag));

const isUniqueHashtags = (hashtags) => {
  const hashtagsList = toHashtagsList(hashtags);
  return hashtagsList.length === (new Set(hashtagsList)).size;
};

const isRightHashtagsCount = (hashtags) => toHashtagsList(hashtags).length <= MAX_HASHTAGS_COUNT;

const isRightHashtagsLength = (hashtags) => hashtags.length < MAX_SYMBOLS;

const rules = [
  {
    check: (hashtags) => isRightHashtagsCount(hashtags),
    error: `Нельзя указывать больше ${MAX_HASHTAGS_COUNT} хэш-тегов`
  },

  {
    check: (hashtags) => isRightHashtagsLength(hashtags),
    error: `Максимальная длина одного хэш-тега ${MAX_SYMBOLS} символов, включая решётку`,
  },

  {
    check: (hashtags) => isRightHashtags(hashtags),
    error: 'Неправильный формат хэш-тега'
  },

  {
    check: (hashtags) => isUniqueHashtags(hashtags),
    error: 'Хэштеги не должны повторяться'
  },

];

rules.forEach((rule, index) => pristine.addValidator(hashtagsNode, rule.check, rule.error, index, true));

pristine.addValidator(commentNode, (comment) => comment.length < MAX_COMMENT_LENGTH, `Комментарий не может быть длиннее ${MAX_COMMENT_LENGTH} символов`, 1, false);

export { pristine };
