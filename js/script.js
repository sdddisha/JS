console.log("hello");

//arrow functions without parameter
//ex 1:
const z = () => 2 * 7;
console.log(z());
//ex 2:
let sayHi = () => console.log("Hello World!");
sayHi();

//method1- arrow functions with one argument
const x = (a) => 2 * a;
console.log(x(4));

//method2- arrow functions with one arguments
const y = (a) => 2 * a;
console.log(y(6));
//or you can also write it as
a = x(6);
// console.log(a)

// //arrow functions with two arguments
// let sum=(a,b)=> a+b;
//  console.log(sum(19,4))

// // Arrow functions can be used in the same way as Function Expressions.
// // For instance, to dynamically create a function:

//  let age = prompt("What is your age?",19);
//  let welcome = (age < 18) ?
//    () => console.log('Hello') :
//    () => console.log("Greetings!");
//  welcome();

//  Replace Function Expressions with arrow functions in the code below:
//  function ask(question, yes, no) {
//     if (confirm(question)) yes();
//      else no();
//    }

//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//      function() { alert("You canceled the execution."); }
//    );

//solution
//  function ask(question, yes, no) {
//      if (confirm(question)) yes();
//     else no();
//   }

//     ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//    () => alert("You canceled the execution.")
//  );

//rest syntax. The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
function qw(...args) {
  console.log(args);
  let total = 0;
  for (let i of args) { //for of loop of array is used
    total += i;
  }
  console.log("total is", total);
}
qw(10, 20, 30, 40);

//spread operator ...
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(numbers));
console.log(sum(numbers, 5, 6));
console.log(sum(...numbers)); // expected output: 6 , when passed using spread operator

//  //console.log(sum.apply(null, numbers)); // expected output: 6

let arr = [1, 3, 5];
arr2 = [...arr, 4, 8];
console.log(arr2);

// spread with objects
const oldObject = {
  name: "john",
};
const newObject = {
  ...oldObject,
  age_is: 25,
};
console.log(newObject);

//Array Destructuring
let arr1 = [100, 300, 400, 26];
// let [a1,b1]= arr1;
// console.log(a1) //100
// console.log(b1) //300
let [a1, , b1] = arr1; //omits 1st index value
console.log(a1); //100
console.log(b1); //400
//Object Destructuring
const myObj = {
  name: "Max",
  age: 28,
};
const { name } = myObj;
const { age } = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}
//function destructuring
const printName = ({ name }) => {
  console.log(name);
};
printName({ name: "Max", age: 28 }); // prints 'Max')

// map → Executes a function on each element of an array
// Every element of the array is passed to the callback function and returns a new array with the same length.
// When to use map: If we want to perform the same operation/transformation on each element
//of the array and get back a new array of the same length with the transformed values.
// Example 1 :
// var numbers = [1, 2, 3, 4, 5];
// var doubled = numbers.map((n) => n * 2);
// doubled; // [2,4,6,8,10]

// filter → Remove items which don’t satisfy a condition
// Every element of the array is passed to the callback function.
//  On each iteration, if the callback returns true, then that element will be added to the new array, otherwise, it is not added to the new array.

// var numbers = [1,2,3,4,5];
// var greaterThan2 = numbers.filter(n => n > 2);
// greaterThan2; // [3,4,5]

// Reduce → Creates a single value from elements of Array
// While using reduce, we need to declare the initial value of accumulator(final result).
// On each iteration, inside the callback we perform some operation and that will be added
// to the accumulator.
// Example 1: Sum of numbers

// var numbers = [1,2,3,4,5];
// var initialVal = 0;
// let result=numbers.reduce((accu, val) => val + accu , initialVal);
// console.log(result) // 15
