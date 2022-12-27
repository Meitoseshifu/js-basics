//Callback Promise Async Await
console.log("1. Create Callback Function and use it");
// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
// callback function
function callMe() {
    console.log('I am callback function');
}
// passing function as an argument
greet('Peter', callMe);
console.log("----------- FINISH ----------");

console.log("2. Create Callback Function with timeout and use it");
// Callback Function Example
function greet1(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet1() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet1, 2000, 'John', sayName);
console.log("----------- FINISH ----------");



console.log("3. Create s Promise");
const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);
console.log("----------- FINISH ----------");


console.log("4. Chain Promise with then");

let countValue1 = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
});

// executes when promise is resolved successfully

countValue1
    .then(function successValue(result) {
        console.log(result);
    })

    .then(function successValue1() {
        console.log("You can call multiple functions this way.");
    });

console.log("----------- FINISH ----------");


console.log("5. Chain Promise with catch");
let countValue2 = new Promise(function (resolve, reject) {
    reject('Promise rejected');
});

// executes when promise is resolved successfully
countValue2.then(
    function successValue(result) {
        console.log(result);
    },
)

    // executes if there is an error
    .catch(
        function errorValue(result) {
            console.log(result);
        }
    );

console.log("----------- FINISH ----------");

console.log("6. Chain Promise with finally");
let countValue3 = new Promise(function (resolve, reject) {
    // could be resolved or rejected
    resolve('Promise resolved');
});

// add other blocks of code
countValue3.finally(
    function greet() {
        console.log('This code is executed.');
    }
);

console.log("----------- FINISH ----------");


console.log("7. Callback hell example");

function pageLoader() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            console.log('Send request')
            console.log('Get respond')
            console.log(json)
            fetch('https://jsonplaceholder.typicode.com/users/' + json.userId)
                .then(json => {
                    console.log('Send request1')
                    console.log('Get respond1')
                    console.log(json)
                })
        })
};
pageLoader();


console.log("8. Create async function and chain it");

// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise resolved')}, 4000);
});

// async function
async function asyncFunc() {

    // wait until the promise resolves
    let result = await promise;

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc().then(r => console.log("hello from then" + result.toString()));

console.log("----------- FINISH ----------");


console.log("9. Create async function with try catch");

let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise resolved')}, 4000);
});

// async function
async function asyncFunc1() {
    try {
        // wait until the promise resolves
        let result = await promise1;

        console.log(result);
    }
    catch(error) {
        console.log(error);
    }
}

// calling the async function
asyncFunc1().then(); // Promise resolved

console.log("----------- FINISH ----------");