/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 const exist = function(board, word) {

    const numRows = board.length;
    const numCols = board[0].length;
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    const search = (row, col, char) => {

        // base case 1
        if(board[row][col] !== word[char]) return false;
        // base case 2
        if(char === word.length - 1) return true;

        board[row][col] = "*" // to mark as visited

        for(let [dx, dy] of directions) {
            const x_pos = row + dx;
            const y_pos = col + dy;
            if(
                // if still within the board, continue searching
                x_pos >= 0 && 
                x_pos < numRows &&
                y_pos >= 0 &&
                y_pos < numCols
            ) {
                if( search(x_pos, y_pos, char+1) ) return true;
            }
        }
        // reset board
        // iteration of search is done, so next iteration can start with a clean board.
        board[row][col] = word[char]; 
        return false;
    };


    for(let i=0; i < numRows; i++) {
        for(let j=0; j < numCols; j++) {
            if(search(i, j, 0)) return true;
        }
    }

    return false;

};

const eg1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const word1 = "ABCCED";



console.log(exist(eg1, word1));