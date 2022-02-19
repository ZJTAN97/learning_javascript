/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const subsets = function(nums) {

    const paths = [];
    
    const dfs = (index, currPath) => {
        if(index > nums.length) return;
        paths.push(currPath); // just add currently what there is without appending new items.
        for(let i=index; i<nums.length; i++) {
            dfs(i+1, [...currPath, nums[i]]) // append new item to branch
        }

    }
    dfs(0, []);

    return paths;
};


const eg1 = [1,2,3];
subsets(eg1);