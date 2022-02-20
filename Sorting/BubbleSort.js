const bubbleSort = (arr) => {
    for (let i=0; i < arr.length - 1; i++) {
        for(let j =0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
} 


console.log(bubbleSort([1,2,3,4,5,123,345,4,435,123,6546,23,4]));