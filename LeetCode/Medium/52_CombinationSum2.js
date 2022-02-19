/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 const combinationSum2 = function(candidates, target) {
    
    const result = [];
    candidates = candidates.sort((a,b) => a - b);

    const backTrack = (index, combination) => {

        const sum = combination.reduce((a,b) => a+b, 0);

        if(sum === target) {
            result.push(combination.slice());
            return;
        }

        for(let i=index; i < candidates.length; i++) {
            // skip iteration to avoid duplication
            if(i !== index && candidates[i] === candidates[i-1]) continue;
            combination.push(candidates[i]);
            if(sum < target) {
                backTrack(i+1, combination);
            }
            combination.pop();
        }
    }
    backTrack(0, []);
    console.log(result);
    return result;

};

const candidates = [10,1,2,7,6,1,5];
const target = 8;

combinationSum2(candidates, target);