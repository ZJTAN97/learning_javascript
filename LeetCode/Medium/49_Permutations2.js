/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const permuteUnique = function(nums) {
    
    let result = [];

    const dfs = (nums, permutation, used, result) => {

        if(permutation.length === nums.length) {

            // question wants unique permutations, so no need sort
            // compared to subsets2.js
            const checkDuplicate = result.some(
                r => r.length === permutation.length && 
                 r.every((value, index) => permutation[index] === value)
            )

            if(!checkDuplicate) {
                result.push(permutation.slice());
            }

            return;
        }


        for(let i=0; i<nums.length; i++) {

            if(!used[i]) {

                permutation.push(nums[i]);
                used[i] = true;

                dfs(nums, permutation, used, result);

                permutation.pop(nums[i]);
                used[i] = false;
            }
        }
    }

    dfs(nums, [], Array(nums.length), result);

    console.log(result);

    return result;

};


const eg1 = [1, 1, 2]
permuteUnique(eg1);