// Given an input array and another array that describes a new index for each element, 
// mutate the input array so that each element ends up in their new index. 
// Discuss the runtime of the algorithm and how you can be sure there won't be any infinite loops.


// eg.
/**
 * Input: 
 * arr[] = [10, 11, 12];
 * index[] = [1, 0, 2]
 * 
 * Output:
 * arr[] = [11, 10, 12]
 * index[] = [0, 1, 2]
 */


const reorder = (arr, index) => {
    hashmap = {}
    
    for (i = 0; i < index.length; i++) {
        hashmap[index[i]] = arr[i]; 
    }

    return Object.values(hashmap)

}

console.log(reorder([50, 40, 70, 60, 90], [3, 0, 4, 1, 2]))
console.log(reorder(["one", "two", "three", "four", "five", "six"], [2, 1, 3, 5, 4, 6]))