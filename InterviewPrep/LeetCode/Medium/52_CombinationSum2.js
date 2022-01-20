/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 const combinationSum2 = function(candidates, target) {
    
    const result = [];

    const backTrack = (index, combination, used) => {

        
        const currSum = combination.reduce((a, b) => a+b, 0);

        if(currSum === target) {

            const checkDuplicate = result.some(
                r => r.length === combination.length &&
                 r.sort().every((value, index) => combination.sort()[index] === value)
            )

            if(!checkDuplicate) {
                result.push(combination.slice());
            }

            return;           
        }

        for(let i=index; i<candidates.length; i++) {
            if(!used[i]) {
                combination.push(candidates[i]);
                used[i] = true;
            }
            if(currSum < target) {
                backTrack(i+1, combination, used);
            }
            combination.pop();
            used[i] = false;
        }
    }

    backTrack(0, [], Array(candidates.length).fill(false));


    console.log(result);

    return result;

};

const candidates = [4,4,2,1,4,2,2,1,3];
const target = 6;

combinationSum2(candidates, target);