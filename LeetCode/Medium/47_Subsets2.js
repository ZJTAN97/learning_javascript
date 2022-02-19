/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const subsetsWithDup = function(nums) {
    
    const output = [];

    const dfs = (path, index) => {

        const duplicateCheck = output.some(
            r => r.length === path.length &&
             r.sort().every((value, index) => path.sort()[index] === value)
        )

        if(!duplicateCheck) {
            output.push(path);
        }

        for(let i=index; i <nums.length; i++) {
            dfs([...path, nums[i]], i+1);
        }

    }

    dfs([], 0);

    return output;

};



const eg1 = [1,2,2];

subsetsWithDup(eg1);
