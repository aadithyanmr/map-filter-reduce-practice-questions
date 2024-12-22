// capitalize first letters of ["hello world", "goodbye moon"] => ["Hello World", "Goodbye Moon"]
const capitalFirstLetter = function (word) {
  return word[0].toUpperCase() + word.slice(1);
};

const capitalizeFirstLetter = function (string) {
  return string.split(' ').map(capitalFirstLetter).join(' ');
};

const capitalizedFirstLettersOf = function (strings) {
  return strings.map(capitalizeFirstLetter);
};

// console.log(capitalizedFirstLettersOf(["hello world", "goodbye moon"]));

// find word lengths in ["apple pie", "banana split"] => [[5, 3], [6, 5]]
const wordLength = function (word) {
  return word.length;
};

const wordsLength = function (string) {
  return string.split(' ').map(wordLength);
};

const wordLengthsOf = function (strings) {
  return strings.map(wordsLength);
};

// console.log(wordLengthsOf(["apple pie", "banana split"]));

// flatten nested arrays of [[1, [2, 3]], [4, [5, 6]]] => [[1, 2, 3], [4, 5, 6]]
const flatMap = function (array) {
  let flatArray = [];

  if (!Array.isArray(array)) {
    return [array];
  }

  for (const element of array) {
    flatArray.push(...flatMap(element));
  }

  return flatArray;
};

const flattenedArraysOf = function (arrays) {
  return arrays.map(flatMap);
};

// console.log(flattenedArraysOf([[1, [2, 3]], [4, [5, 6]]]));

// sort letters in ["cat", "bat", "rat"] alphabetically => ["act", "abt", "art"]
const sortString = function (string) {
  return [...string].sort().join('');
};

const sortedLettersOf = function (strings) {
  return strings.map(sortString);
};

// console.log(sortedLettersOf(["cat", "bat", "rat"]));

// wrap strings in brackets ["apple", "banana"] => ["[apple]", "[banana]"]
const wrap = function (string) {
  return "[" + string + "]";
};

const wrappedStringsOf = function (strings) {
  return strings.map(wrap);
};

// console.log(wrappedStringsOf(["apple", "banana"]));

// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]
const extractTarget = function (target) {
  return function (object) {
    return object[target];
  };
};

const extractNames = function (objects) {
  return objects.map(extractTarget('name'));
};

// console.log(extractNames([{ name: "Alice" }, { name: "Bob" }]));

// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30]
const extractAges = function (objects) {
  return objects.map(extractTarget('age'));
};

// console.log(extractAges([{ age: 25 }, { age: 30 }]));

// extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }] => ["A", "B"]
const firstLetter = function (word) {
  return word[0];
};

const firstLettersOfNames = function (objects) {
  return objects.map(extractTarget('name')).map(firstLetter);
};

// console.log(firstLettersOfNames([{ name: "Alice" }, { name: "Bob" }]));

// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }] => [6, 20]

const calculateAreas = function (rectangles) {
  return rectangles.map(function (object) {
    return object.width * object.height;
  });
};

// console.log(calculateAreas([{ width: 2, height: 3 }, { width: 4, height: 5 }]));

// extract boolean flags from [{ active: true }, { active: false }] => [true, false]
const extractFlags = function (objects) {
  return objects.map(extractTarget('active'));
};

// console.log(extractFlags([{ active: true }, { active: false }]));

// concatenate first and last names from [{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]
const fullNames = function (objects) {
  return objects.map(function (object) {
    return object.firstName + ' ' + object.lastName;
  });
};

// console.log(fullNames([{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }]));

// calculate total prices from [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }] => [20, 20]
// (price * quantity)
const addValues = function (value1, value2) {
  return value1 + value2;
};

const totalPrices = function (objects) {
  return objects.map(function (object) {
    return object.price * object.quantity;
  });
};

// console.log(totalPrices([{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }]));

// determine if a person is an adult from [{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)
const isAdult = function (objects) {
  return objects.map(function (object) {
    return object.age > 18;
  });
};

// console.log(isAdult([{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }]));

// create abbreviations from [{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]
const extractFirstLetter = function (string) {
  return string.split(' ').map(firstLetter);
};

const abbreviation = function (object) {
  const cityAbbreviation = extractFirstLetter(object.city).join('');

  return cityAbbreviation + ',' + object.country + "";
};

const abbreviations = function (objects) {
  return objects.map(abbreviation);
};

// console.log(abbreviations([{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }]));

// extract scores for math tests from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [90, 80]
const mathScores = function (objects) {
  return objects.map(function (object) {
    return object.scores.math;
  });
};

// console.log(mathScores([{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }]));

// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]]
const extractCoordinates = function (objects) {
  return objects.map(function (object) {
    return [object.x, object.y];
  });
};

// console.log(extractCoordinates([{ x: 1, y: 2 }, { x: 3, y: 4 }]));

// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]
const fullNameAndAge = function (objects) {
  return objects.map(function (object) {
    return [object.firstName + ' ' + object.lastName, object.age];
  });
};

// console.log(fullNameAndAge([{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }]));

// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]]
const extractScores = function (objects) {
  return objects.map(function (object) {
    return [object.scores.math, object.scores.english];
  });
};

// console.log(extractScores([{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }]));


// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]]
const keyValuePairs = function (objects) {
  return objects.map(function (object) {
    return [object.key, object.value];
  });
};

// console.log(keyValuePairs([{ key: "a", value: 1 }, { key: "b", value: 2 }]));

// split full names into first and last names from [{ name: "Alice Smith" }, { name: "Bob Brown" }] => [["Alice", "Smith"], ["Bob", "Brown"]]
const splitWords = function (string) {
  return string.split(' ');
};

const splitFullNames = function (objects) {
  return objects.map(extractTarget('name')).map(splitWords);
};

// console.log(splitFullNames([{ name: "Alice Smith" }, { name: "Bob Brown" }]));

// normalize scores so they fall between 0 and 1 based on the max score from [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }] => [0.8, 1]
const normalizeScores = function (objects) {
  return objects.map(extractTarget('score')).map(function (element) {
    return element / 100;
  });
};

// console.log(normalizeScores([{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }]));


// calculate percentage contribution of each number in [10, 20, 30] (relative to the total sum) => [16.67, 33.33, 50]
const percentageContributions = function (numbers) {
  const total = numbers.reduce(addValues, 0);

  return numbers.map(function (element) {
    return (element / total) * 100;
  });
};

// console.log(percentageContributions([10, 20, 30]));

// subtract the smallest number from each number in [3, 8, 1] => [2, 7, 0]
const subtractMin = function (numbers) {
  const min = Math.min(...numbers);

  return numbers.map(function (element) {
    return element - min;
  });
};

// console.log(subtractMin([3, 8, 1]));

// calculate ranks (1-based, descending) for scores in [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }, { name: "Charlie", score: 90 }] => [2, 1, 3]
const calculateRanks = function (objects) { };

// normalize strings by the longest string length in ["cat", "elephant", "dog"] => ["cat    ", "elephant", "dog    "]
// (pad with spaces to match the longest length)
const longer = function (word1, word2) {
  return word2.length > word1.length ? word2 : word1;
};

const normalizeStringLengths = function (strings) {
  const maxLength = strings.reduce(longer, '').length;

  return strings.map(function (string) {
    return string.padEnd(maxLength);
  });
};

// console.log(normalizeStringLengths(["cat", "elephant", "dog"]));

// scale all numbers proportionally so the largest number becomes 100 in [20, 50, 80] => [25, 62.5, 100]
const scaleToMax100 = function (numbers) {
  const max = Math.max(...numbers);

  return numbers.map(function (element) {
    return (element / max) * 100;
  });
};

// console.log(scaleToMax100([20, 50, 80]));