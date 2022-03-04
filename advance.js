//Codevolutin tut
//nested function and function scope example 1
// let a='hello from global scope'
// function outer(){
//     let b='outer function scope'
//     function inner(){
//         let c='inner function scope'
//         console.log(a,b,c);
//      }
//      inner()
// }
//  outer()

//nested function example 2 
// function outer(){
//     let counter=0
//     function inner(){
//         counter++
//         console.log(counter);
//     }
//     inner();
// }
// outer();
// outer();

//In JS it is possible to return a function inside the other function. The combination of function
//and its scope chain is called a closure in JS. A closure is created when a function is returned from another function. 
//Its scope is also returend i.e counter 0 will also be returned 
//ex 1-
// function outer(){
//     let counter=0
//     function inner(){
//         counter++
//         console.log(counter);
//     }
//     inner();
// }
// const fn=outer();
// fn()
// fn()

//closure ex 2:
// function addSquares(a, b) {
//     function square(x) {
//       return x * x;
      
//     }
//     return square(a) + square(b);
//   }
//   a = addSquares(2, 3);
// console.log(a); // returns 13

//function currying
// We transform a fun with multiple arguments into sequence of nesting function that take one argument
//at a time. ex function f(a,b,c)is tranformed to f(a)(b)(c )



//this Keyword ->Each and every fn in JS has access to this keyword
   
//      function sayName(name){
//         console.log(`My name is ${name}`);
// }
// sayName('Walter')

//There are 4 ways to invoke a function in JS and determine the value of this Keyword
//Implicit ,Explicit, new, default bindings

//1-implict binding
const person={
    name: 'disha',
     sayName:function(){
        console.log(`My name is ${this.name}`);
},
}
person.sayName() // implicit binding rule states that->when function is invoked with . operator 
//the object to the left of . is what this keyword is referencing. JS will treat {this.name}as {person.name}

//function borrowing


//2-explicit binding
const person1={
        name: 'Jesse',
        
    }
    function sayName(name){
        console.log(`My name is ${this.name}`);
}
//in this we have to explicity(clearly) specify the context when the function is called. Call keyword is used for it.
//first agrument passed to the 'call' is what this keyword inside the fn sayName is referncing
sayName.call(person1)