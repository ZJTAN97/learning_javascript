const memoizedMultiplyBy10 = () => {
    const cache = {};

    return (num) => {
        if(num in cache) {
            console.log("used Cache");
            console.log(cache);
            return cache[num];
        }
        const result = num * 10;
        cache[num] = result;
        return result;
    }
}

const multiplyBy10 = memoizedMultiplyBy10();


console.log(multiplyBy10(50));
console.log(multiplyBy10(10));
console.log(multiplyBy10(50));



const memoize = (fn) => {
    // should only use on pure functions where same inputs produce same outputs
    // trading off memory for speed
    const cache = {};
    return (...args) => {
        if(args.toString() in cache) {
            console.log("used cache..");
            return cache[args.toString()];
        }
        const result = fn(...args);
        cache[args.toString()] = result;
        return result;
    }
}


const threeSum = (num1, num2, num3) => {
    return num1 + num2 + num3;
};

const addAll = (...nums) => {
    return nums.reduce((a,b) => a + b, 0);
};

const memoizedThreeSum = memoize(threeSum);

memoizedThreeSum(5, 5, 5);
memoizedThreeSum(5, 5, 5);
memoizedThreeSum(5, 5, 5);


const fib = (pos) => {
    if (pos < 2) return pos;
    return fib(pos-1) + fib(pos-2);
}

const memoizedFib = memoize(fib);
console.log(memoizedFib(10));