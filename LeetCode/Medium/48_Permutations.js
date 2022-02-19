/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const permute = function(nums) {

    const result = [];
    
    const dfs = (combination, used) => {
        
        if(combination.length === nums.length) {
            result.push(combination.slice());
            return;
        }
        
        for(let i=0; i<nums.length; i++) {
            if(!used[i]) {
                combination.push(nums[i]);
                used[i] = true;
                dfs(combination, used);
                combination.pop();
                used[i] = false;
            }   
        }    
    }
    
    dfs([], Array(nums.length));
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