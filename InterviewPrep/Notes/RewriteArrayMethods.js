// forEach
const arr = [1, 2, 3];

const myForEach = (array, callback) => {
    for(let i=0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
myForEach(arr, function(item, index, array) {
    console.log(item, index, array);
})
arr.forEach((item, index, array) => {
    console.log(item, index, array);
})


console.log('-----------------------------')


// reduce
Array.prototype.myReduce = function(callback, initialValue) {
    for(let i=0; i <this.length; i++) {
        initialValue = callback(initialValue, this[i], i, this)
    }
    return initialValue
};

const sum = arr.myReduce(function(prev, current, currIndex, arr) {
    return prev + current;
}, 0);

const sum2 = arr.reduce((a, b) => a+b, 0);

console.log(sum);
console.log(sum2);