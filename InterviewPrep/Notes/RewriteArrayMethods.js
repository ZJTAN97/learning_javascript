// forEach
const arr = [1, 2, 3];

Array.prototype.myForEach = function(callback){
    //this keyword reference to the array itself
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this)
    }
  }

arr.myForEach((item) => console.log(item));



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


console.log("---------------------------");

// map
Array.prototype.myMap = function(callback) {
    const newArr = [];
    for(let i=0; i<this.length; i++) {
        let mappedItem = callback(this[i], i, this);
        newArr.push(mappedItem);
    }
    return newArr;
}

arr.myMap((item) => console.log(item));


console.log("---------------------------");


// find
Array.prototype.myFind = function(callback) {
    let result;
    for(let i=0; i<this.length; i++) {
        let isFound = callback(this[i], i, this);
        if(isFound) {
            result = this[i];
            break;
        }
    }
    return result;
}


// filter
Array.prototype.myFilter = function(callback) {
    let result = [];
    for(let i=0; i<this.length; i++) {
        let isFiltered = callback(this[i], i, this);
        if(isFiltered) {
            result.push(this[i]);
        }
    }
    return result;
}

const filtered = arr.myFilter(item => item > 1);
console.log(filtered);