## 1. Synchronous vs Asynchronous JavaScript
<img src="https://user-images.githubusercontent.com/68308477/147720410-af6f4f23-e9cb-4f93-896d-955d5b8151db.png" width="450" height="300">

- JavaScript Functions are First-Class Citizens. you can create and modify a function, use it as an argument, return it
from another function, and assign it to a variable.
- We can classify most asynchronous JavaScript operations with two primary triggers:
  1. Browser API/Web Api event or functions (`setTimeout`, `onclick` etc..)
  2. Promises. unique JS object that allows us to perform asynchronous operations.

### Synchronous JavaScript - How Function Execution Stack works
- refer to AsyncSync.js for example.

<img src="https://user-images.githubusercontent.com/68308477/147720719-b402107c-7ea1-4b6c-be1a-ace04e3d068f.png" width="450" height="350">

### How JavaScript Callback Queue works (aka Task Queue)
<img src="https://user-images.githubusercontent.com/68308477/147720923-68922a3e-e143-44f3-a7ee-55fd68d2bb9a.png" width="350" height="280">

The famous `Event Loop`
- The engine creates a `loop` to look into the queue periodically to find what it needs to pull from there.
  1. It pulls a callback function from the queue to the call stack when the stack is empty.
  2. When Browser API (async stuffs) occur, park the callback functions in a queue.
  3. Keep executing code as usual in the stack.
  4. The event loop checks if there is a callback function in the queue.
  5. If so, pull callback function from the queue to the stack and execute.
  6. continue loop.
<hr>
<br>


## 2. JavaScript callback
- Any function that is passed as an argument to another function so that it can be executed in that
another function is called as a callback function.
### Need of callback function
- we need callback functions because many JavaScript actions are asynchronous, which means they do not really stop the program from running
until they are completed. 
- A callback's primary purpose is to execute code in response to an event. These events might be user-initiated, such as mouse clicks or typing.
- e.g. `button.addEventListener('click', callback)`

Example code

```
function firstFunction(){
  // Simulate a code delay
  setTimeout( function(){
    console.log('First function called');
  }, 1000 );
}
function secondFunction(){
  console.log('Second function called');
}
firstFunction();
secondFunction();

Output
// Second function called
// First function called
```

<hr>
<br>


## 3. What is the difference between a variable that is null, undefined and undeclared.
- `Undeclared` variables are created when you assign a value to an identifier that is not previously created using `var`, `let`, `const`.
such a variable is defined globally, outside of the current scope. In strict mode, a `ReferenceError` will be thrown when you try to assin
an undeclared variable. AVOID THIS.

- `undefined` is a variable that is declared but not assigned a value. type of `undefined`. 

- `null` variables will have been explicitly assigned to the `null` value. It represents no value and is different from `undefined` in the
sense that it has been explicitly assigned. if you use `typeof(null)` will return `object`
<hr>
<br>


## 4. What is a closure, and how/why would you use one?
- Closure is when you have a function defined inside of another function, that inner function has access to the variables
and scope of the outer function even if the outer function finishes executing and those variables are no longer accessible
outside of that function.

<img src="https://user-images.githubusercontent.com/68308477/147716546-1da62dfd-0341-44b4-8d26-aa182c6217ec.png" width="400" height="350">

- Closures from definition requires more memory and computation
- Use closures for data encapsulation

- The closure has three scope chains 
1. Own scope where variables defined between its curly brackets
2. Outer funcion's variables
3. Global Variables

Example Code

```
function Welcome(name){
  var greetingInfo = function(message){
   console.log(message+' '+name);
  }
return greetingInfo;
}
var myFunction = Welcome('John');
myFunction('Welcome '); //Output: Welcome John
myFunction('Hello Mr.'); //output: Hello Mr.John
```
As per the above code, the inner function `greetingInfo` has access to variables in outer function scope `Welcome`
even though the outer function has returned. 


<hr>
<br>


## 5. Describe main difference between `.forEach` and `.map()` and when to choose which
`forEach`
- Iterates through the elements in an array
- Executes a callback for each element.
- Does not return a value
`map`
- Iterates through the elements in an array
- "Maps" each element to a new element by calling the function on each element, creating a new array as a result.

- The main difference is that `.map()` returns a new array while `.forEach` does not (returns undefined)
- If you simply need to iterate over an array, `forEach` is a fine choice
- If you need the result but do not wish to mutate the original array, `.map()` is the clear choice.
<hr>
<br>


## 6. What are the benefits of using spread syntax and how is it different from rest syntax?
- `spread` syntax is very useful when coding in a functional paradigm as we can easily create copies of arrays or
objects without resorting to `Object.create`, `slice` or a library function
- `rest` offers a shorthand for including an arbitary number of arguments to be passed to a function.
- refer to SpreadRest.js for examples.
<hr>
<br>


## 7. Deep and Shallow Copy
- `Deep Copy` means that all of the values of the new variable are copied and disconnected from the original variable.
- `Shallow Copy` means that certain sub-values are still connected to the original variable.
- For Primitive data types (`Number`, `String`, `Boolean`, `undefined`, `null`), if you make a copy, it will be a real copy.
- For Composite data types (`Objects`, `Arrays`), it will result in shallow copy.
<hr>
<br>


## 8. Difference between attributes and properties
- An `attribute` is the initial state when rendered in the DOM
- `property` is the current state
<hr>
<br>


## 9. Hoisting
- Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or current function)
- go through the examples here would be the best. https://www.w3schools.com/js/js_hoisting.asp
<hr>
<br>


## 10. Difference between `==` and `===` operators
- Both are comparison operators. The difference between both the operators is that,“==” is used to compare values whereas, “ === “ is used to compare both value and types.
<hr>
<br>


## 11. What is NaN property in JavaScript?
- NaN property represents "Not-a-Number" value. It indicates a value which is not a legal number.
- `typeof` Nan will return `Number`
- check by using `isNan()` function
<hr>
<br>


## 12. Difference between Slice, Splice
`slice()`
- this method copies a given part of an array and returns the copied part as a new array
- does not change original array (immutable!!)
- Used to pick elements from array
```
let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0,2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2,3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
```

`splice()`
- this method changes the original array (mutable) by adding or removing elements
- The first argument specifies the array position for insertion or deletion
- The optional second argument indicates the number of elements to be deleted.
- Subsequent additional argument is added to the array.
```
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0,2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
```
<hr>
<br>


## 13. Describe difference between a cookie, sessionStorage and localStorage
- All are key-value storage mechanisms on client side. Only able to store value as strings.
<img src="https://user-images.githubusercontent.com/68308477/147715033-7504b723-e50a-4cfa-9685-f680f88f37a3.png" width="900" height="500">
- If user decides to clear browsing data, this will clear out any cookie, localstorage and session storage stored.
<hr>
<br>


## 14. Why use store management (redux) instead of app storage (localStorage, sesssionStorage)?
- Store management handles the rendering for us.
- If you use localStorage and sessionStorage, you will have to handle the re-rendering yourself.
<hr>
<br>


## 15. JavaScript `Array.prototype.some()`
- The `some()` method tests whether at least one element in the array passes the test implemented
by the provided function
- It does not modify the array
<hr>
<br>


## 16. JavaScript `Array.prototype.every()`
- The `every()` method tests whether all elements in the array pass the test implemented by the provided
function. 
<hr>
<br>


## 17. Difference between Call, Apply and Bind
Call: The `call()` method invokes a function with a given `this` value and arguments provided one by one
- with `call()`, an object can use a method belonging to another object.
```
var employee1 = {firstName: 'John', lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}

// first argument is to define your "this" object which is employee1 
invite.call(employee1, 'Hello', 'How are you?'); // Hello John Rodson, How are you?
invite.call(employee2, 'Hello', 'How are you?'); // Hello Jimmy Baily, How are you?
```

Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
```
var employee1 = {firstName: 'John', lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}

invite.apply(employee1, ['Hello', 'How are you?']); // Hello John Rodson, How are you?
invite.apply(employee2, ['Hello', 'How are you?']); // Hello Jimmy Baily, How are you?
```

bind: returns a new function, allowing you to pass any number of arguments
```
var employee1 = {firstName: 'John', lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?
inviteEmployee2('Hello', 'How are you?'); // Hello Jimmy Baily, How are you?
```

- `Call` and `apply` are very similar, both execute current function immediately. 
- To choose between `Call` and `apply` is to decide whether you want to send in an array or 
comma seperated list of arguments.
- `Bind` creates a new function that will have `this` set to the first parameter passed to bind().
<hr>
<br>


## 18. Comparing Object and Map
- Keys of an `Object` are strings and symbols while Map accepts any values (`function`, `object` and any primitive).
- Keys in `Map` are ordered while keys added to Object are not. Thus when iterating over, a `Map` object return keys
in order of insertion.
- Can get size of `Map` with size property but number of properties on Object must be determined manually.
- `Map` is iterable and thus can be directly iterated. Iterating over object requires obtaining its keys and iterating over them.
<hr>
<br>


## 19. What is memoization
- A technique which attempts to increase function's performance by caching its previously computed results.
- Each time a memoized function is called, parameters are used to index the cache
- If data is present, it will be returned without executing entire function
- otherwise function is executed and result is added to the cache.

```
const memoizAddition = () => {
  let cache = {};
 return (value) => {
  if (value in cache) {
   console.log('Fetching from cache');
   return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
  }
  else {
   console.log('Calculating result');
   let result = value + 20;
   cache[value] = result;
   return result;
  }
 }
}
// returned function from memoizAddition
const addition = memoizAddition();
console.log(addition(20)); //output: 40 calculated
console.log(addition(20)); //output: 40 cached
```
<hr>
<br>


## 20. What is Hoisting?
- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their
scope before execution
- JavaScript only hoists declarations, not initialisation.

```
console.log(message); //output : undefined
var message = 'The variable Has been hoisted';
```

above code looks like as below to the interpreter,

```
var message;
console.log(message);
message = 'The variable Has been hoisted';
```
<hr>
<br>


## 21. What are classes in ES6?
In ES6, JavaScript classes are primarily syntactic sugar over JavaScript's existing prototype-based inheritance.

```
function Bike(model,color) {
    this.model = model;
    this.color = color;
}

Bike.prototype.getDetails = function() {
    return this.model + ' bike has' + this.color + ' color';
};
```

Where in ES6 classes can be written as

```
class Bike{
  constructor(color, model) {
    this.color= color;
    this.model= model;
  }

  getDetails() {
    return this.model + ' bike has' + this.color + ' color';
  }
}
```
<hr>
<br>


## 22. More on Cookies

What is a cookie?

- piece of data that is stored on your computer to be accessed by your browser.
- Saved as key/value pairs

Why do you need a cookie?

- Cookies are used to remember information about the user. 
- When a user visits a webpage, the user profile can be stored in a cookie.
- Next time user visits the page, the cookie remembers the user profile.

What are the options in a cookie?

- By default, cookie is deleted when browser is closed but you can change this behavior by setting expiry date

```
document.cookie = "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC";
```

- By default, cookie belongs to a current page, but can tell the browser what path the cookie belongs to 

```
document.cookie = "username=John; path=/services";
```
<hr>
<br>


## 23. More on Promises

- Promises are used to handle asynchronous operations.
- Provide an alternative approach for callbacks by reducing the callback hell and writing cleaner code.

Three states of promises

1. `Pending`. Initial state of the promise before an operation begins.
2. `Fufilled`. Indicates the specified operation was completed.
3. `Rejected`. Indicate operation did not complete, error value will be thrown.


A promise must follow a specific set of rules,
1. A promise is an object that supplies a standard-compliant `.then()` method
2. A pending promise may transition into either fufilled or rejected state
3. A fufilled or rejected promise is settled must not transition into any other state.
4. Once a promise is settled, value must not change.