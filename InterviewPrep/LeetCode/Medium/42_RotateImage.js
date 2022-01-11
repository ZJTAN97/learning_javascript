/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 const rotate = function(matrix) {
    
    let n = matrix.length;

    let left = 0;
    let right = n - 1;

    while(left < right) {
        for(let i=0; i < right - left; i++) {
            let top = left;
            let bottom = right;

            // save top left value
            let topLeft = matrix[top][left + i];

            // move bottom left into top left
            matrix[top][left + i] = matrix[bottom - i][left];

            // move bottom right into bottom left
            matrix[bottom - i][left] = matrix[bottom][right - i];

            // move top right into bottom right
            matrix[bottom][right - i] = matrix[top + i][right];

            // move top left into top right
            matrix[top + i][right] = topLeft;
        }
        left += 1;
        right -= 1;
    }
    console.log(matrix);
};


const eg1 = [[1,2,3], [4,5,6], [7,8,9]];
const eg2 = [[5,1,9,11], [2,4,8,10], [13,3,6,7], [15,14,12,16]];


rotate(eg1);