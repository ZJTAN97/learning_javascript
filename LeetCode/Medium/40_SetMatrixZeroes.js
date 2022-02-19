/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// my bruteforce ( O(N) space complexity )
 const setZeroes = function(matrix) {

    const colIds = [];
    
    for(let i=0; i < matrix.length; i++) {

        const row = matrix[i];

        for(let k=0; k < row.length; k++) {
            if(row[k] === 0) colIds.push(k);
        }

        if(row.includes(0)) {
            matrix[i] = new Array(matrix[i].length).fill(0);
        }
    }

    for (let j=0; j<colIds.length; j++) {
        if (colIds[j] !== -1) {
            for(let row of matrix) {
                row[colIds[j]] = 0;
            }
        }
    }

    console.log(matrix);
};

// optimal ( O(1) space complexity )
const setZeros2 = function(matrix) {

    const numRows = matrix.length;
    const numCols = matrix[0].length;

    let rowZero = false;

    // 1. determine which rows/cols need to be zero
    for(let r=0; r<numRows; r++) {
        for(let c=0; c<numCols; c++) {
            if (matrix[r][c] === 0) {
                matrix[0][c] = 0;
                if (r>0) matrix[r][0] = 0;
                else rowZero=true;
            }
        }
    }

    // 2. zero the respective rows/cols based on the marking done in the first step.
    for(let r=1; r<numRows; r++) {
        for(let c=1; c<numCols; c++) {
            if(matrix[0][c] === 0 || matrix[r][0] === 0) matrix[r][c] = 0
        }
    }

    // 3. zero out first col if need to
    if (matrix[0][0] === 0) {
        for(let r=0; r<numRows; r++) {
            matrix[r][0] = 0
        }
    } 

    // 4. zero out first row if need to
    if(rowZero) {
        matrix[0] = new Array(matrix[0].length).fill(0);
    }

    console.log(matrix);


};

const eg1 = [[1,1,1], [1,0,1], [1,1,1]];
const eg2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];


// setZeroes(eg1);
// setZeroes(eg2);

setZeros2(eg1);
setZeros2(eg2);