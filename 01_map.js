const invert = function (f) {
  return function (...args) {
    return !f(...args);
  };
};

// squares of [1, 2, 3] => [1, 4, 9]
const square = function (number) {
  return number * number;
};

const squaresOf = function (numbers) {
  return numbers.map(square);
};

// console.log((squaresOf([1, 2, 3, 4, 5])));


// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const stringLength = function (string) {
  return string.length;
};

const lengthsOf = function (strings) {
  return strings.map(stringLength);
};

// console.log(lengthsOf(["apple", "banana", "kiwi"]));

// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const UpperCase = function (string) {
  return string.toUpperCase();
};

const uppercaseOf = function (strings) {
  return strings.map(UpperCase);
};

// console.log(uppercaseOf(["hello", "world"]));


// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const firstChar = function (string) {
  return string.at(0);
};

const firstCharactersOf = function (strings) {
  return strings.map(firstChar);
};

// console.log(firstCharactersOf(["apple", "banana", "kiwi"]));

// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]
const reverse = function (string) {
  if (string === "") {
    return "";
  }

  return reverse(string.slice(1)) + string[0];
};

const reversedStringsOf = function (strings) {
  return strings.map(reverse);
};

// console.log(reversedStringsOf(["hello", "world"]));

// double letters of ["cat", "dog", "bat"] => ["ccaat", "ddoog", "bbaatt"]
const multiplyLetter = function (string, times) {
  if (string === "") {
    return "";
  }

  return string[0].repeat(times) + multiplyLetter(string.slice(1), times);
};

const doubleLetter = function (string) {
  return multiplyLetter(string, 2);
};

const doubleLettersOf = function (strings) {
  return strings.map(doubleLetter);
};

// console.log(doubleLettersOf(["cat", "dog", "bat"]));


// boolean negation of [true, false, true] => [false, true, false]
const invertBoolean = function (boolean) {
  return !boolean;
};

const negatedBooleansOf = function (booleans) {
  return booleans.map(invertBoolean);
};

// console.log(negatedBooleansOf([true, false, true]));

// extract domain names from ["user1@gmail.com", "admin@yahoo.com"] => ["gmail.com", "yahoo.com"]
const domain = function (string) {
  return string.split('@').at(-1);
};

const domainNamesOf = function (emails) {
  return emails.map(domain);
};

// console.log(domainNamesOf(["user1@gmail.com", "admin@yahoo.com"]));


// split words in ["hello world", "goodbye moon"] => [["hello", "world"], ["goodbye", "moon"]]
const split = function (string) {
  return string.split(' ');
};

const splitWordsOf = function (strings) {
  return strings.map(split);
};

// console.log(splitWordsOf(["hello world", "goodbye moon"]));


// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]
const join = function (array) {
  return array.join('');
};

const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(join);
};

// console.log(joinedArraysOf([["a", "b"], ["c", "d"]]));


// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]
const repeat = function (times) {
  return function (string) {
    return string.repeat(times);
  };
};

const repeatedStringsOf = function (strings) {
  return strings.map(repeat(2));
};

// console.log(repeatedStringsOf(["hi", "bye"]));

// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]

const isVowel = function (char) {
  const vowels = 'aeiouAEIOU';
  return vowels.includes(char);
};

const countVowels = function (string) {
  return string.split('').filter(isVowel).length;
};

const countVowelsOf = function (strings) {
  return strings.map(countVowels);
};

// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]
const unshift = function (reversedArray, element) {
  const array = reversedArray;
  array.unshift(element);

  return array;
};

const reverseArray = function (array) {
  return array.reduce(unshift, []);
};

const reversedArraysOf = function (arrays) {
  return arrays.map(reverseArray);
};

// console.log(reversedArraysOf([[1, 2, 3], [4, 5, 6]]));

// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]
const removeVowels = function (string) {
  return string.split('').filter(invert(isVowel)).join('');
};

const withoutVowelsOf = function (strings) {
  return strings.map(removeVowels);
};

// console.log(withoutVowelsOf(["apple", "banana", "grape"]));


// cumulative sums of [[1, 2, 3], [4, 5, 6]] => [[1, 3, 6], [4, 9, 15]]
// Example: cumulative sum of [1, 2, 3] is [1, 1+2, 1+2+3]
const cumulativeAdder = function (sumArray, element) {
  sumArray.push(sumArray.at(-1) + element);

  return sumArray;
};

const cumulativeSum = function ([firstElement, ...rest]) {
  return rest.reduce(cumulativeAdder, [firstElement]);
};

const cumulativeSumsOf = function (arrays) {
  return arrays.map(cumulativeSum);
};

// console.log(cumulativeSumsOf([[1, 2, 3], [4, 5, 6]]));

// reverse words in ["hello world", "goodbye moon"] => ["olleh dlrow", "eybdoog noom"]
const reverseWords = function (words) {
  return words.split(' ').map(reverse).join(' ');
};

const reversedWordsOf = function (strings) {
  return strings.map(reverseWords);
};

// console.log(reversedWordsOf(["hello world", "goodbye moon"]));


// extract unique characters from ["apple", "banana", "grape"] => ["aple", "ban", "grape"]
// Maintain the order of their first appearance in each string
const addIfNotPresent = function (uniqueElements, element) {
  if (!uniqueElements.includes(element)) {
    uniqueElements.push(element);
  }

  return uniqueElements;
};

const removeDuplicate = function (array) {
  return array.reduce(addIfNotPresent, []);
};

const extractUnigueChar = function (string) {
  const stringArray = string.split('');
  return removeDuplicate(stringArray).join('');
};

const uniqueCharactersOf = function (strings) {
  return strings.map(extractUnigueChar);
};

// console.log(uniqueCharactersOf(["apple", "banana", "grape"]));


// generate ranges from [3, 5, 2] => [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]
const range = function (from, to, step) {
  const array = [];

  for (let i = from; i < to; i += step) {
    array.push(i);
  }

  return array;
};

const rangeZeroTo = function (to) {
  return range(0, to, 1);
};

const rangesOf = function (numbers) {
  return numbers.map(rangeZeroTo);
};

// console.log(rangesOf([3, 5, 2]));