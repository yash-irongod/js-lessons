// previously :

// when the first function is called inside another function, it is pushed onto the call stack
// once the function execution is complete, it is popped off the stack
// for example:
function firstFunction(){
    console.log("Inside first function");
}
function secondFunction(){
    console.log("Inside second function");
    firstFunction(); // firstFunction is called inside secondFunction
}
secondFunction(); // calling secondFunction which in turn calls firstFunction


// -------------------------------------------------------------
// Callback function
function print(){
    console.log("Hello World");
}

// higher order function
function greet(num){
    console.log("Greetings!",num);
    num()
}

greet(print);
// if we use greet(print()), it will execute print immediately and pass undefined to greet
// print function is passed as a callback to greet function

console.log("-------------------------------------------------------------");

// Callback function
function info(name){
    console.log("Hello !!", name);
}

// higher order function
function welcome(num){
    console.log("Greetings!");
    setTimeout(() => {
        console.log("Inside setTimeout");
        let firstName = "Yash";
        num(firstName);
    }, 2000); // 2 seconds delay
}

welcome(info);

// -------------------------------------------------------------

// callback hell - when multiple callbacks are nested within each other
// it goes deeper and deeper (rightside keeps growing)
// making code hard to read and maintain
// it looks like a pyramid called "Pyramid of Doom"
// example of callback hell:

console.log("Starting homework...");

setTimeout(() => {
    console.log("Homework done");
    console.log("Starting dinner...");

    setTimeout(() => {
        console.log("Dinner done");
        console.log("Getting ready to go out...");

        setTimeout(() => {
            console.log("Going to the playground!");
        }, 1000); // 1 seconds delay for going out

    }, 1500); // 1.5 seconds delay for dinner

}, 2000); // 2 seconds delay for homework

// -------------------------------------------------------------

// Handeling Callback hell by giving names to functions

function finishHomework(callback){
    console.log("Starting homework...");
    setTimeout(() => {
        console.log("Homework done!");
        callback();
    }, 2000); // 2 seconds delay for homework
}

function eatDinner(callback) {
    console.log("Starting dinner...");
    setTimeout(() => {
        console.log("Dinner done");
        callback();
    }, 1500); // 1.5 seconds delay for dinner
}

function goToPlayground() {
    console.log("Going to the playground!");
}

finishHomework(() => {
    eatDinner(() => {
        goToPlayground();
    });
});

// -------------------------------------------------------------

