/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const findTargetSumWays = function(nums, target) {

    // relook into memoizing

    let result = 0;
    let memo = new Map();
    
    const backTrack = (index, nums, target, currSum) => {

        // base case
        if( index === nums.length ) {
            if(currSum === target) result ++;
            return;
        }


        // positive branch
        currSum += nums[index];
        backTrack(index+1, nums, target, currSum);
        currSum -= nums[index];


        // negative branch
        currSum -= nums[index];
        backTrack(index+1, nums, target, currSum);
        currSum += nums[index];

    }

    backTrack(0, nums, target, 0);

    return result;

};



console.log(findTargetSumWays([1,1,1,1,1], 3));