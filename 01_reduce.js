const invert = function (f) {
  return function (...args) {
    return !f(...args);
  };
};

const isEven = function (number) {
  return (number & 1) === 0;
};

const isOdd = function (number) {
  return (number & 1) === 1;
};

// sumOf([1, 2, 3, 4]) => 10
const add = function (value1, value2) {
  return value1 + value2;
};

const sumOf = function (numbers) {
  return numbers.reduce(add, 0);
};

// console.log(sumOf([1, 2, 3, 4]));

// productOf([1, 2, 3, 4]) => 24
const multiply = function (num1, num2) {
  return num1 * num2;
};

const productOf = function (numbers) {
  return numbers.reduce(multiply, 1);
};

// console.log(productOf([1, 2, 3, 4]));

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  return numbers.reduce(add, 0) / numbers.length;
};

// console.log(averageOf([1, 2, 3, 4, 5]));

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const min = function (num1, num2) {
  return num1 < num2 ? num1 : num2;
};

const minOf = function (numbers) {
  return numbers.reduce(min, Infinity);
};

// console.log(minOf([3, 1, 4, 1, 5, 9, 2]));

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const max = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};

const maxOf = function (numbers) {
  return numbers.reduce(max, -Infinity);
};

// console.log(maxOf([3, 1, 4, 1, 5, 9, 2]));

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const isPositive = function (number) {
  return number > 0;
};

const sumPositiveNumbers = function (numbers) {
  return numbers.filter(isPositive).reduce(add, 0);
};

// console.log(sumPositiveNumbers([1, -2, 3, -4]));

// sumOfSquares([1, 2, 3, 4]) => 30
const square = function (number) {
  return Math.pow(number, 2);
};

const sumOfSquares = function (numbers) {
  return numbers.map(square).reduce(add, 0);
};

// console.log(sumOfSquares([1, 2, 3, 4]));

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const sumOfOddNumbers = function (numbers) {
  return numbers.filter(isOdd).reduce(add, 0);
};

// console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));

// countNegativeNumbers([1, -2, 3, 5, -4, -5]) => 2

const countNegativeNumbers = function (numbers) {
  return numbers.filter(invert(isPositive)).length;
};

// console.log(countNegativeNumbers([1, -2, 3, 5, -5, -4]));

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {
  return numbers.filter(isEven).map(square).reduce(add, 0);
};

// console.log(findSumOfEvenSquares([1, 2, 3, 4]));

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce(add, '');
};

// console.log(concatenateWords(["hello", "world"]));

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const isGreater = function (num1, num2) {
  return num1 > num2;
};

const isLess = function (num1, num2) {
  return num1 < num2;
};

const compareWord = function (predicate) {
  return function (word1, word2) {
    return predicate(word2.length, word1.length) ? word2 : word1;
  };
};

const longestWord = function (words) {
  return words.reduce(compareWord(isGreater), '');
};

// console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {
  return words.reduce(compareWord(isLess, ''));
};

// console.log(shortestWord(["apple", "banana", "cherry", "kiwi"]));

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const seperateUsing = function (seperator) {
  return function (string, element) {
    return string + seperator + element;
  };
};

const joinWithComma = function ([first, ...rest]) {
  return rest.reduce(seperateUsing(','), [first]);
};

// console.log(joinWithComma(["apple", "banana", "cherry"]));

// reverseWords(["hello", "world"]) => "world hello"
const unshift = function (reverse, element) {
  reverse.unshift(element);

  return reverse;
};

const reverseWords = function (words) {
  return words.reduce(unshift, []);
};

// console.log(reverseWords(["hello", "world"]));

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function ([first, ...rest]) {
  return rest.reduce(seperateUsing(' '), [first]);
};

// console.log(joinWordsWithSpace(["apple", "banana", "cherry"]));

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function ([first, ...rest]) {
  return rest.reduce(seperateUsing(''), [first]);
};

// console.log(concatenateNames(["John", "Jane", "Doe"]));
const isVowel = function (char) {
  const vowels = 'aeiouAEIOU';

  return vowels.includes(char);
};

// countVowelsInWords(["hello", "world"]) => "eoo"
const filterVowels = function (word) {
  let vowels = '';

  for (let index = 0; index < word.length; index++) {
    const char = word[index];

    if (isVowel(char)) {
      vowels += char;
    }
  }

  return vowels;
};

const addVowels = function (vowels, element) {
  return vowels + filterVowels(element);
};

const countVowelsInWords = function (words) {
  return words.reduce(addVowels, '');
};

// console.log(countVowelsInWords(["hello", "world"]));

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const firstCapital = function (word) {
  return word[0].toUpperCase() + word.slice(1);
};

const makeCamelCase = function ([first, ...rest]) {
  return rest.map(firstCapital).reduce(add, first);
};

// console.log(makeCamelCase(["hello", "world", "how", "are", "you"]));

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseWord = function (string) {
  if (string === '') {
    return '';
  }

  return reverseWord(string.slice(1)) + string[0];
};

const reverseString = function (words) {
  return words.map(reverseWord).reduce(add, '');
};

// console.log(reverseString(["apple", "banana", "cherry"]));

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicate = function (result, element) {
  return [...result, element, element];
};

const duplicateNumbers = function (numbers) {
  return numbers.reduce(duplicate, []);
};

// console.log(duplicateNumbers([1, 2, 3]));

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concat = function (array, [...elements]) {
  return [...array, ...elements];
};

const concatenateArrays = function (arrays) {
  return arrays.reduce(concat, []);
};

// console.log(concatenateArrays([[1, 2], [3, 4], [5, 6]]));

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) {
  let flatArray = [];

  if (!Array.isArray(arrays)) {
    return [arrays];
  }

  for (const element of arrays) {
    flatArray.push(...flattenArray(element));
  }

  return flatArray;
};

// console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));


// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const filterUnique = function (uniqueArray, element) {
  if (!uniqueArray.includes(element)) {
    uniqueArray.push(element);
  }

  return uniqueArray;
};

const uniqueNumbers = function (numbers) {
  return numbers.reduce(filterUnique, []);
};

// console.log(uniqueNumbers([1, 2, 2, 3, 4, 4, 5]));