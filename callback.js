const posts=[
    {title: 'Post one', body:'body 1'},
    {title: 'Post two', body:'body 2'}
];
// console.log(post);

// function getPost(){
//     setTimeout(function(){ //normal function

//     },1000);
// }

function getPost(){
    setTimeout(()=>{ //arrow function
        let output= '';

    },1000);
}

// function callback
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