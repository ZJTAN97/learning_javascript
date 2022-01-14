/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const permute = function(nums) {

    let result = [];

    const dfs = (nums, path, used, result) => {
        if(path.length === nums.length) {
            // make deep copy otherwise we will append same list over and over
            result.push(Array.from(path));
            return;
        }

        for(let i=0; i<nums.length; i++) {
            // skip used letters
            if(used[i]) continue;
            // add num to permutation, mark letter as read
            path.push(nums[i]);
            used[i] = true;
            dfs(nums, path, used, result);
            // remove letter from permutation, mark letter as unused
            path.pop();
            used[i] = false;
        }
    }

    dfs(nums, [], Array(nums.length), result);
    console.log(result);

    return result;

};



const eg1 = [1,2,3];

permute(eg1);