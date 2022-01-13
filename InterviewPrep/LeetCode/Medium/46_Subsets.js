/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const subsets = function(nums) {

    const output = [];

    const dfs = (path, index) => {
        output.push(path); // don't add new item branch
        for(let i=index; i < nums.length; i++) {
            dfs([...path, nums[i]], i+1); // add new item branch
        }
    }

    dfs([], 0);

    console.log(output);

    return output;

};


const eg1 = [1,2,3];
subsets(eg1);