/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
 const construct2DArray = function(original, m, n) {
    
    if ((m*n) !== original.length) return [];

    const solution = [];
    let row = [];

    // settle row first
    for(let i = 0; i < original.length; i++) {
        row.push(original[i]);
        if ( (i+1) % n == 0) {
            solution.push(row);
            row = [];
        }
    }
    return solution;

};


console.log(construct2DArray([1,2,3,4], 2, 2));
console.log(construct2DArray([1,2],1,1));
console.log(construct2DArray([1,2,3], 1, 3));
console.log(construct2DArray([2], 1, 1));