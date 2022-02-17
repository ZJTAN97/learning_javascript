const PENDING = 0;
const FUFILLED = 1;
const REJECTED = 2;

function CustomPromise(executor) {
    let state = PENDING;
    let value = null;
    let handlers = [];
    let catches = [];

    function resolve(result) {
        if (state !== PENDING) return;

        state = FUFILLED;
        value = result;

        handlers.forEach((h) => h(value));
    }

    function reject(err) {
        if (state !== PENDING) return;

        state = REJECTED;
        value = err;

        catches.forEach((c) => c(err));
    }

    this.then = function(callback) {
        if (state === FUFILLED) {
            callback(value);
        } else {
            handlers.push(callback);
        }
    }
    executor(resolve, reject);
};


const doWork = (res, rej) => {
    setTimeout(() => { res("Hello World") }, 1000)
}
// let someText = new CustomPromise(doWork);
// someText.then((val) => {
//     console.log(val);
// })


// Actual Promise

let someTextActual = new Promise(doWork);
someTextActual
    .then((val) => {
        console.log(val);
        return "go to another promise"
    })
    .then((val) => console.log(val));



const someRandomFn = (res, rej) => {
    res("This is the random function.");
}

const randomPromise = new Promise(someRandomFn);
randomPromise.then((val) => {
    console.log(val);
})

const randomAsyncFn = async () => {
    try {
        const val = await randomPromise;
        console.log("From the async " + val);
    } catch (err) {
        console.log(err);
    }
}
randomAsyncFn();



// Comparison with standard promises and async/await
function getFetch(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err))
}


async function getFetch2(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}