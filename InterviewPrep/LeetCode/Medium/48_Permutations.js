/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const permute = function(nums) {

    let result = [];

    const dfs = (nums, permutation, used, result) => {

        // base case
        if(permutation.length === nums.length) {
            // make deep copy otherwise we will append same list over and over
            result.push(Array.from(permutation.slice()));
            return;
        }

        for(let i=0; i<nums.length; i++) {
            if(!used[i]) {
                // add num to permutation, mark as used.
                permutation.push(nums[i]);
                used[i] = true;

                // Branch 1. Continue digging depper
                dfs(nums, permutation, used, result);

                // Branch 2. Back track remove num from permutation and mark as unused
                permutation.pop();
                used[i] = false;
            }

        }
    }

    dfs(nums, [], Array(nums.length), result);
    console.log(result);

    return result;

};

const eg1 = [1, 2, 3];
permute(eg1);


/**
 * Backtracking Recipe
 * void BackTrack(res, args)
 *     if ( GOAL REACHED )
 *          add solution to res
 *          return
 *     for (int i=-; i< num_choices; i++)
 *          if(CHOICES[i] is valid)
 *              make choices[i]
 *              Backtrack(res, args)
 *              undo choices[i]
 */ 