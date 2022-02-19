/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 const combine = function(n, k) {

    const result = [];

    const dfs = (index, combination) => {

        if(combination.length === k) {
            result.push(combination.slice());
            return;
        }

        for(let i=index; i<n; i++) {
            if(combination.length < k) {
                combination.push(i+1);
                dfs(i+1, combination);
                combination.pop();
            }
        }
    };

    dfs(0, []);
    return result;
};


const n1 = 4;
const k1 = 2;

const n2 = 1;
const k2 = 1;

combine(n1, k1);
combine(n2, k2);