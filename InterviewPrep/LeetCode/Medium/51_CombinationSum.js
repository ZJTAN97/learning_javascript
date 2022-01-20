/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 const combinationSum = function(candidates, target) {

    const result = [];

    const backTrack = (index, combination) => {

        const currSum = combination.reduce((a, b) => a+b, 0);

        if(currSum === target) {
            result.push(combination.slice());
            return;
        }

        for(let i=index; i<candidates.length; i++) {
            combination.push(candidates[i]);
            if(currSum <= target) {
                backTrack(i, combination);
            }
            combination.pop();
        }

    }

    backTrack(0, []);

    console.log(result);

    return result;
    
};



const candidates1 = [2, 3, 6, 7];
const target1 = 7;

const candidates2 = [2, 3, 5];
const target2 = 8;

combinationSum(candidates1, target1);