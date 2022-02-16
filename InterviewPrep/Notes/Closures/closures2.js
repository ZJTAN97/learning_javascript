// Lexical scope defines how variable names are resolved in nested functions
// Nested (child) functions have access to the scope of their parent functions

// A closure is a function having access to the parent scope, even after the parent function has closed.
// A closure is created when we define a function, not when a function is executed.

// global scope
let x = 1;

const parentFunction = () => {
    // local scope
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue += 1);
    }
    
    return childFunction;
}

const result = parentFunction();
result(); // 6, 3 it works because of closures. Access to the parent, global scope even when the function is closed
result(); // 11, 4
result(); // 16, 5


// IIFE (Immediately Invoked Function Expression)
const privateCounter = (() => {
    let count = 0;
    console.log(`initial value: ${count}`);
    return () => { count += 1; console.log(`Count from inside: ${count}`) }
})();
privateCounter();
privateCounter();


// Closures with IIFE and parameter
const credits = ((nums) => {
    let credits = nums;
    console.log(`Initial credits value: ${credits}`);
    return () => {
        credits -= 1;
        if(credits > 0) {
            console.log(`playing game, ${credits} credit(s) remaining`)
        }
        if(credits <= 0) console.log(`Not enough credits.`);
    }
})(3);
credits();
credits();
credits();
credits();