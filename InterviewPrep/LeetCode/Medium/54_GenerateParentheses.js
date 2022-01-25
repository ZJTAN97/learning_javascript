/**
 * @param {number} n
 * @return {string[]}
 */
 const generateParenthesis = function(n) {
    
    const result = [];

    const backTrack = (leftCounter, rightCounter, combination) => {
        if(leftCounter > rightCounter) return;
        if(leftCounter === 0 && rightCounter === 0) {
            result.push(combination);
            return;
        }
        if(leftCounter > 0) backTrack(leftCounter - 1, rightCounter, combination + "(");
        if(rightCounter > 0) backTrack(leftCounter, rightCounter - 1, combination + ")" );        

    }
    backTrack(n, n, "");
    console.log(result);
    return result;

};


generateParenthesis(3);
