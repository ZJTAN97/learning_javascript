function flattenRecursively(arr) {
    let result = [];
    for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    console.log(result);
    return result;
}


const testcase1 = [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]];
flatten(testcase1);


// ES6 sytnax
const flattenRecursiveES6 = (arr) => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b));