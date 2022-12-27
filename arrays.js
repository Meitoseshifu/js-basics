// ARRAYS

console.log("1. Create array using 4 different approaches");

const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = Array(5, 2);
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

const arrayListItems = Array.from(['Cooking', 'Sports']);
console.log(arrayListItems);

console.log("----------- FINISH ----------");

console.log("2. Basic operations with array: ");
console.log("- add el to the end of array");
console.log("- add el to the beginning of array");
console.log("- extract last");
console.log("- extract first");

 const hobbies = ['Sports', 'Cooking']; // add el to the end of array
 console.log(hobbies);
 hobbies.push('Reading');
 console.log(hobbies);

 console.log('--------------');

 hobbies.unshift('Coding');  //add el to the begining of arr
 console.log(hobbies);

 console.log('---------------');

 const poppedValue = hobbies.pop(); //extract last
 console.log(poppedValue);
 console.log(hobbies);

 console.log('--------------');

 const shiftedValue = hobbies.shift(); //extract first
 console.log(shiftedValue);
 console.log(hobbies);

console.log("----------- FINISH ----------");

console.log("3. replacing \"Java\" & \"Lua\" with \"C\" & \"C++\" ");

let languages = ["JavaScript", "Python", "Java", "Lua"];
console.log(languages);

// replacing "Java" & "Lua" with "C" & "C++"
let removed = languages.splice(2, 2, "C", "C++");
console.log(removed); // [ 'Java', 'Lua' ]
console.log(languages); // [ 'JavaScript', 'Python', 'C', 'C++' ]

console.log("3. add \"Java\" & \"Lua\" without deleting existing elements");
let removed1 = languages.splice(1, 0, "Java", "Lua");
console.log(removed1); // []
console.log(languages); // [ 'JavaScript', 'Java', 'Lua', 'Python', 'C', 'C++' ]

console.log("3. remove 3 elements");
let removed2 = languages.splice(2, 3);
console.log(removed2); // [ 'Lua', 'Python', 'C' ]
console.log(languages); // [ 'JavaScript', 'Java', 'C++' ]

console.log("----------- FINISH ----------");

console.log("4. Create new array from numbers array. From numbers[3] to numbers[5]");

let numbers1 = [2, 3, 5, 7, 11, 13, 17];
console.log(numbers1);
// create another array by slicing numbers from index 3 to 5
let newArray = numbers1.slice(3, 6);
console.log(newArray);

console.log("----------- FINISH ----------");

console.log("5. Create new array by merging 2 arrays");

let numbers2 = [2, 3, 5, 7, 11, 13, 17];
console.log(numbers2);

const storedResults = numbers2.concat([3.99, 2]);
console.log(storedResults);

console.log("----------- FINISH ----------");

console.log("6. Sort array from smaller to bigger then reverse it");

const prices = [10.99, 5.99, 3.99, 6.59];

//const sortedPrices = prices.sort(); // by default sort as string
const sortedPrices = prices.sort((a, b) => {
    if (a > b) {
        return 0;
    } else if (a === b) {
        return 1;
    } else {
        return -1;
    }
});
console.log(sortedPrices);
console.log(sortedPrices.reverse());

console.log("----------- FINISH ----------");

console.log("7. Join each element of the string");

const message = ["JavaScript ", "is ", "fun."];

// function to join each string elements
function joinStrings(accumulator, currentValue) {
    return accumulator + currentValue;
}

// reduce join each element of the string
let joinedString = message.reduce(joinStrings);
console.log(joinedString);

console.log("-------------------")

console.log("7. sum each element of the array");
const numbers3 = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue) {
    return accumulator + currentValue;
}

let sum = numbers3.reduce(sum_reducer);
console.log(sum); // 21

// using arrow function
let summation = numbers3.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation); // 21

console.log("-------------------")

const numbers4 = [1800, 50, 300, 20, 100];

console.log("7. Subtract all numbers from first number");
// since 1st element is called as accumulator rather than currentValue
// 1800 - 50 - 300 - 20 - 100
let difference = numbers4.reduce(
    (accumulator, currentValue) => accumulator - currentValue
);
console.log(difference); // 1330

console.log("-------------------");

const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;

console.log("7. Function that subtracts all array elements from given number");
// 15000 - 1800 - 2000 - 3000 - 5000 - 500
let remaining = expenses.reduce(
    (accumulator, currentValue) => accumulator - currentValue,
    salary
);
console.log(remaining); // 2700

console.log("-------------------")

console.log("7. Get rid duplicates");
let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]

console.log("-------------------")

console.log("7. Group by age");
let people = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function (accumulator, currentObject) {
        let key = currentObject[property];
        if (!accumulator[key]) {
            accumulator[key] = [];
        }
        accumulator[key].push(currentObject);
        return accumulator;
    }, {});
}

let groupedPeople = groupBy(people, "age");
console.log(groupedPeople);

console.log("----------- FINISH ----------");

console.log("8. Create array from the string");
const data = 'new york;10.99;2000';
const transformedData = data.split(';');
console.log(transformedData);

console.log("8. Create string from array");
const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join(' ');
console.log(name);

console.log("8. Add elements from nameFragments to new array");
const nestedArray = [nameFragments];
const spreadArray = [...nameFragments];
console.log(nestedArray);
console.log(spreadArray);

console.log("----------- FINISH ----------");
