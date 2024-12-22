const isGreater = function (num1, num2) {
  return num1 > num2;
};

const isLess = function (num1, num2) {
  return num1 < num2;
};

const isEqual = function (num1, num2) {
  return num1 === num2;
};

const substract = function (num1, num2) {
  return num1 - num2;
};

const add = function (num1, num2) {
  return num1 + num2;
};

const filterTarget = function (target) {
  return function (object) {
    return object[target];
  };
};

const compateWithThreshold = function (threshold, predicate) {
  return function (element) {
    return predicate(element, threshold);
  };
};

const compareTargetAndThreshold = function (target, threshold, predicate) {
  return function (object) {
    return predicate(object[target], threshold);
  };
};

const filterTargetWithPredicate = function (data, target, threshold, predicate) {
  return data.filter(compareTargetAndThreshold(target, threshold, predicate));
};

const averageOf = function (target, data) {
  const sum = data.map(filterTarget(target)).reduce(add, 0);

  return sum / data.length;
};


const median = function (target, data) {
  const targetArray = data.map(filterTarget(target)).sort(substract);
  const length = targetArray.length;

  if (!isEven(length)) {
    return targetArray[((length + 1) / 2) - 1];
  }

  const firstMiddle = targetArray[(length / 2) - 1];
  const secondMiddle = targetArray[((length / 2) + 1) - 1];

  return (firstMiddle + secondMiddle) / 2;
};

// even numbers [1, 2, 3, 4, 5] => [2, 4]
const isEven = function (number) {
  return (number & 1) === 0;
};

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

// console.log(filterEvenNumbers([1, 2, 3, 4, 5]));

// // words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]
const isLengthAbove = function (value) {
  return function (word) {
    return word.length > value;
  };
};

const filterLongWords = function (words) {
  return words.filter(isLengthAbove(5));
};

// console.log(filterLongWords(["apple", "banana", "kiwi", "grape"]));

// // people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const filterAdults = function (people) {
  return people.filter(compareTargetAndThreshold('age', 30, isGreater));
};

// console.log(filterAdults([{ name: "Alice", age: 25 }, { name: "Bob", age: 35 }]));


// // active users [{username: "alice", active: true}, {username: "bob", active: false}] => [{username: "alice", active: true}]


const filterActiveUsers = function (users) {
  return users.filter(compareTargetAndThreshold('active', true, isEqual));
};

// console.log(filterActiveUsers([{ username: "alice", active: true }, { username: "bob", active: false }]));


// // numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18]

const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter(compateWithThreshold(10, isGreater));
};

// console.log(filterNumbersGreaterThanTen([5, 12, 7, 18, 3]));


// // books with more than 200 pages [{title: "Book 1", pages: 150}, {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}]
const filterLongBooks = function (books) {
  return books.filter(compareTargetAndThreshold('pages', 200, isGreater));
};

// console.log(filterLongBooks([{ title: "Book 1", pages: 150 }, { title: "Book 2", pages: 250 }]));


// // users with incomplete profiles [{username: "alice", profileComplete: true}, {username: "bob", profileComplete: false}] => [{username: "bob", profileComplete: false}]
const filterIncompleteProfiles = function (users) {
  return users.filter(compareTargetAndThreshold('profileComplete', false, isEqual));
};

// console.log(filterIncompleteProfiles([{ username: "alice", profileComplete: true }, { username: "bob", profileComplete: false }]));


// // students with grades above 80 [{name: "John", grade: 75}, {name: "Jane", grade: 85}] => [{name: "Jane", grade: 85}]
const filterHighGrades = function (students) {
  return students.filter(compareTargetAndThreshold('grade', 80, isGreater));
};

// console.log(filterHighGrades([{ name: "John", grade: 75 }, { name: "Jane", grade: 85 }]));


// // products that are in stock [{product: "apple", inStock: true}, {product: "banana", inStock: false}] => [{product: "apple", inStock: true}]
const filterInStockProducts = function (products) {
  return products.filter(compareTargetAndThreshold('inStock', true, isEqual));
};

// console.log(filterInStockProducts([{ product: "apple", inStock: true }, { product: "banana", inStock: false }]));

// // products with a price lower than the average [{name: "item1", price: 10}, {name: "item2", price: 20}, {name: "item3", price: 5}] => [{name: "item1", price: 10}, {name: "item3", price: 5}]


const filterBelowAveragePrice = function (products) {
  const average = averageOf('price', products);

  return products.filter(compareTargetAndThreshold('price', average, isLess));
};

// console.log(filterBelowAveragePrice([{ name: "item1", price: 10 }, { name: "item2", price: 20 }, { name: "item3", price: 5 }]));

// // orders that exceed the average order value [{orderId: 1, amount: 20}, {orderId: 2, amount: 50}, {orderId: 3, amount: 10}] => [{orderId: 2, amount: 50}]
const filterHighValueOrders = function (orders) {
  const avg = averageOf('amount', orders);

  return orders.filter(compareTargetAndThreshold('amount', avg, isGreater));
};

// console.log(filterHighValueOrders([{ orderId: 1, amount: 20 }, { orderId: 2, amount: 50 }, { orderId: 3, amount: 10 }]));


// // books with reviews higher than the average rating [{title: "Book 1", rating: 4}, {title: "Book 2", rating: 5}, {title: "Book 3", rating: 3}] => [{title: "Book 2", rating: 5}]
const filterTopRatedBooks = function (books) {
  const avg = averageOf('rating', books);

  return books.filter(compareTargetAndThreshold('rating', avg, isGreater));
};

// console.log(filterTopRatedBooks([{ title: "Book 1", rating: 4 }, { title: "Book 2", rating: 5 }, { title: "Book 3", rating: 3 }]));


// // employees whose salary is higher than the department average [{name: "Alice", salary: 5000, department: "HR"}, {name: "Bob", salary: 7000, department: "HR"}, {name: "Charlie", salary: 4000, department: "HR"}] => [{name: "Bob", salary: 7000, department: "HR"}]
const filterHighSalaryEmployees = function (employees) {
  const avg = averageOf('salary', employees);

  return employees.filter(compareTargetAndThreshold('salary', avg, isGreater));
};

// console.log(filterHighSalaryEmployees([{ name: "Alice", salary: 5000, department: "HR" }, { name: "Bob", salary: 7000, department: "HR" }, { name: "Charlie", salary: 4000, department: "HR" }]));


// // cities with a population higher than the median [{name: "City A", population: 2000}, {name: "City B", population: 5000}, {name: "City C", population: 3000}] => [{name: "City B", population: 5000}]


const filterCitiesAboveMedianPopulation = function (cities) {
  const medianValue = median('population', cities);

  return cities.filter(compareTargetAndThreshold('population', medianValue, isGreater));
};

// console.log(filterCitiesAboveMedianPopulation([{ name: "City A", population: 2000 }, { name: "City B", population: 5000 }, { name: "City C", population: 3000 }]));


// // posts with more than the average number of likes [{postId: 1, likes: 100}, {postId: 2, likes: 200}, {postId: 3, likes: 150}] => [{postId: 2, likes: 200}]
const filterPopularPosts = function (posts) {
  const avgLikes = averageOf('likes', posts);

  return posts.filter(compareTargetAndThreshold('likes', avgLikes, isGreater));
};

// console.log(filterPopularPosts([{ postId: 1, likes: 100 }, { postId: 2, likes: 200 }, { postId: 3, likes: 150 }]));


// // users who have posted more than the average number of posts [{username: "Alice", postCount: 5}, {username: "Bob", postCount: 8}, {username: "Charlie", postCount: 3}] => [{username: "Bob", postCount: 8}]
const filterActiveUsersByPostCount = function (users) {
  const avgPostCount = averageOf('postCount', users);

  return users.filter(compareTargetAndThreshold('postCount', avgPostCount, isGreater));
};

// console.log(filterActiveUsersByPostCount([{ username: "Alice", postCount: 5 }, { username: "Bob", postCount: 8 }, { username: "Charlie", postCount: 3 }]));


// // filter people older than a certain age [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 22}] => [{name: "Bob", age: 30}]
const filterByAge = function (people, age) {
  return people.filter(compareTargetAndThreshold('age', age, isGreater));
};

// console.log(filterByAge([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 22 }], 28));


// // filter products that are cheaper than a given price [{name: "item1", price: 20}, {name: "item2", price: 50}, {name: "item3", price: 10}] => [{name: "item1", price: 20}, {name: "item3", price: 10}]
const filterByPrice = function (products, price) {
  return products.filter(compareTargetAndThreshold('price', price, isLess));
};

// console.log(filterByPrice([{ name: "item1", price: 20 }, { name: "item2", price: 50 }, { name: "item3", price: 10 }], 20));

// // filter employees who earn more than a certain salary [{name: "Alice", salary: 5000}, {name: "Bob", salary: 7000}] => [{name: "Bob", salary: 7000}]

const filterBySalary = function (employees, salary) {
  return filterTargetWithPredicate(employees, 'salary', salary, isGreater);
};

// console.log(filterBySalary([{ name: "Alice", salary: 5000 }, { name: "Bob", salary: 7000 }], 6000));


// // filter orders with a quantity greater than a given number [{orderId: 1, quantity: 10}, {orderId: 2, quantity: 5}] => [{orderId: 1, quantity: 10}]
const filterByQuantity = function (orders, quantity) {
  return filterTargetWithPredicate(orders, 'quantity', quantity, isGreater);
};

// console.log(filterByQuantity([{ orderId: 1, quantity: 10 }, { orderId: 2, quantity: 5 }], 6));


// // filter books published after a certain year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterByYear = function (books, year) {
  return filterTargetWithPredicate(books, 'year', year, isGreater);
};

// console.log(filterByYear([{ title: "Book1", year: 2020 }, { title: "Book2", year: 2022 }], 2020));