/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 const combinationSum3 = function(k, n) {

    const result = [];
    const backTrack = (index, combination) => {

        const sum = combination.reduce((a,b) => a+b, 0);
        if(sum === n && combination.length === k) {
            result.push(combination.slice());
            return;
        }

        for(let i=index; i<10; i++) {
            combination.push(i);
            if(sum < n && combination.length < k+1) backTrack(i+1, combination);
            combination.pop();
        }
    }

    backTrack(1, []);
    console.log(result);
    return result;  
};

const k1 = 3;
const n1 = 7;

combinationSum3(k1, n1);
combinationSum3(2, 18);