// Decorators wrap a function in another function
// These wrappers "decorate" the original function with new capabilities
// Benefits: D.R.Y. and clean code through composition

// Example 1:
// Using closure to log how many times a function is called

let sum = (...args) => {
    return [...args].reduce((acc, num) => acc+ num);
}


const callCounter = (fn) => {
    let count = 0;
    return (...args) => {
        console.log(`Sum has been called ${count += 1} times`);
        return fn(...args);
    }
}

sum = callCounter(sum);
// console.log(sum(2,3,5));
// console.log(sum(2,3,5));
// console.log(sum(2,3,5));



// Example 2:
// Check for valid data and number of params

let rectangleArea = (length, width) => {
    return length * width;
}

const countParams = (fn) => {
    return (...params) => {
        if(params.length !== fn.length) {
            throw new Error(`Incorrect number of parameters for ${fn.name}`);
        }
        return fn(...params);
    }
}

const requireIntegers = (fn) => {
    return (...params) => {
        params.forEach(param => {
            if (!Number.isInteger(param)) {
                throw new TypeError(`Params must be integers`)
            }
        });
        return fn(...params);
    }
}

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);

// console.log(rectangleArea(20, 30));
// console.log(rectangleArea(20,"40"));



// Example 3:
// Decorating an async API call function
// Time data for requests during development


const fetch = require('node-fetch');

let requestData = async(url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

const dataResponseTime = (fn) => {
    return async(url) => {
        console.time('fn');
        const data = await fn(url);
        console.timeEnd('fn');
        return data;
    }
}

const myTestFunction = async () => {
    requestData = dataResponseTime(requestData);
    const data = await requestData('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
}

myTestFunction();