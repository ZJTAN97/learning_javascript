/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 const combine = function(n, k) {


    const result = [];

    const backtrack = (start, combi) => {

        // base case 
        if(combi.length === k) {
            result.push(combi.slice());
            return;
        }

        for(let i=start; i<n+1; i++) {
            combi.push(i);
            backtrack(i+1, combi);
            combi.pop();
        }

    }

    backtrack(1, []);
    return result;
};


const n1 = 4;
const k1 = 2;

const n2 = 1;
const k2 = 1;

combine(n1, k1);
combine(n2, k2);