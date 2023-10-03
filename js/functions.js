const checkLength = function(string, maxLength){
  return string.length <= maxLength;
};
checkLength('javascript',7);

const isPalindrome = function(string){
  const normalString = string.replaceAll(' ','').toLoverCase();
  let reversedString = '';
  for (let i = normalString.length - 1; i >= 0; i--){
    reversedString += normalString[i];
  }
  return normalString === reversedString;
};
isPalindrome('Леша на полке клопа нашел');

const isNumber = function(string){
  let result = '';
  string = string.toString();
  for (let i = 0; i < string.length; i++){
    string = string.replaceAll(' ', '');
    if (!isNaN(string[i])){
      const number = parseInt(string[i], 10);
      result += number;
    }
  }
  return result === '' ? NaN : result;
};
isNumber('2023 год');
