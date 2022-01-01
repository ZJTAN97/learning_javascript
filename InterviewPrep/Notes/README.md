## Synchronous vs Asynchronous JavaScript
<img src="https://user-images.githubusercontent.com/68308477/147720410-af6f4f23-e9cb-4f93-896d-955d5b8151db.png" width="450" height="300">

- JavaScript Functions are First-Class Citizens. you can create and modify a function, use it as an argument, return it
from another function, and assign it to a variable.
- We can classify most asynchronous JavaScript operations with two primary triggers:
  1. Browser API/Web Api event or functions (`setTimeout`, `onclick` etc..)
  2. Promises. unique JS object that allows us to perform asynchronous operations.

### Synchronous JavaScript - How Function Execution Stack works
<img src="https://user-images.githubusercontent.com/68308477/147720719-b402107c-7ea1-4b6c-be1a-ace04e3d068f.png" width="250" height="350">
- refer to AsyncSync.js for example.

### How JavaScript Callback Queue works (aka Task Queue)
The famous `Event Loop`
<img src="https://user-images.githubusercontent.com/68308477/147720923-68922a3e-e143-44f3-a7ee-55fd68d2bb9a.png" width="350" height="280">
- The engine creates a `loop` to look into the queue periodically to find what it needs to pull from there.
  1. It pulls a callback function from the queue to the call stack when the stack is empty.
  2. When Browser API (async stuffs) occur, park the callback functions in a queue.
  3. Keep executing code as usual in the stack.
  4. The event loop checks if there is a callback function in the queue.
  5. If so, pull callback function from the queue to the stack and execute.
  6. continue loop.
<hr>
<br>


## JavaScript callback
- Any function that is passed as an argument to another function so that it can be executed in that
another function is called as a callback function.
### Need of callback function
- we need callback functions because many JavaScript actions are asynchronous, which means they do not really stop the program from running
until they are completed. 
- A callback's primary purpose is to execute code in response to an event. These events might be user-initiated, such as mouse clicks or typing.
- e.g. `button.addEventListener('click', callback)`
<hr>
<br>


## What is the difference between a variable that is null, undefined and undeclared.
- `Undeclared` variables are created when you assign a value to an identifier that is not previously created using `var`, `let`, `const`.
such a variable is defined globally, outside of the current scope. In strict mode, a `ReferenceError` will be thrown when you try to assin
an undeclared variable. AVOID THIS.

- `undefined` is a variable that is declared but not assigned a value. type of `undefined`. 

- `null` variables will have been explicitly assigned to the `null` value. It represents no value and is different from `undefined` in the
sense that it has been explicitly assigned. if you use `typeof(null)` will return `object`
<hr>
<br>


## What is a closure, and how/why would you use one?
- Closure is when you have a function defined inside of another function, that inner function has access to the variables
and scope of the outer function even if the outer function finishes executing and those variables are no longer accessible
outside of that function.
<img src="https://user-images.githubusercontent.com/68308477/147716546-1da62dfd-0341-44b4-8d26-aa182c6217ec.png" width="400" height="350">
- Closures from definition requires more memory and computation
- Use closures for data encapsulation
<hr>
<br>


## Describe main difference between `.forEach` and `.map()` and when to choose which
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


## What are the benefits of using spread syntax and how is it different from rest syntax?
- `spread` syntax is very useful when coding in a functional paradigm as we can easily create copies of arrays or
objects without resorting to `Object.create`, `slice` or a library function
- `rest` offers a shorthand for including an arbitary number of arguments to be passed to a function.
- refer to SpreadRest.js for examples.
<hr>
<br>


## Deep and Shallow Copy
- `Deep Copy` means that all of the values of the new variable are copied and disconnected from the original variable.
- `Shallow Copy` means that certain sub-values are still connected to the original variable.
- For Primitive data types (`Number`, `String`, `Boolean`, `undefined`, `null`), if you make a copy, it will be a real copy.
- For Composite data types (`Objects`, `Arrays`), it will result in shallow copy.


## Difference between attributes and properties
- An `attribute` is the initial state when rendered in the DOM
- `property` is the current state


## Describe difference between a cookie, sessionStorage and localStorage
- All are key-value storage mechanisms on client side. Only able to store value as strings.
<img src="https://user-images.githubusercontent.com/68308477/147715033-7504b723-e50a-4cfa-9685-f680f88f37a3.png" width="900" height="500">
- If user decides to clear browsing data, this will clear out any cookie, localstorage and session storage stored.
<hr>
<br>
