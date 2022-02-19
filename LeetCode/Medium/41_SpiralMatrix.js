/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {

    let left = 0;
    let right = matrix[0].length-1;
    let top = 0; 
    let bottom = matrix.length-1; 

    let result = [];

    while(left <= right && top <= bottom) {

        for(let i=left; i <= right; i++) {
            result.push(matrix[top][i]);
        }

        for(let i=top+1; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }

        if(left < right && top < bottom) {

            for (let i=right-1; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
    
            for(let i=bottom-1; i > top; i--) {
                result.push(matrix[i][left]);
            }
        }

        top ++, left++, bottom --, right--;
    }
    return result;
}


const eg1 = [[1,2,3], [4,5,6], [7,8,9]];

console.log(spiralOrder(eg1));