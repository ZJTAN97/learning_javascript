/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const findTargetSumWaysWithMemo = function(nums, target) {
    
    const backTrack = (index, nums, target) => {
        let memo = new Map();

        const currSerial = `${index},${target}`;

        if(memo.get(currSerial)) return memo.get(currSerial);


        // base case
        if( index === nums.length ) {
            if(target === 0) {
                return 1;
            }
            return 0;
        }


        // positive branch
        const positiveMethods = backTrack(index+1, nums, target - nums[index]);
        // negative branch
        const negativeMethods = backTrack(index+1, nums, target + nums[index]);

        const numWays = positiveMethods + negativeMethods;
        memo.set(currSerial, numWays);

        return numWays;

    }

    return backTrack(0, nums, target, 0);

};



const findTargetSumWays = function(nums, target) {
    
    let result = 0;
    
    const backTrack = (nums, target, index, currSum) => {
        
        if( index === nums.length ) {
            if(currSum === target) result += 1;
            return;
        }
        
        
        currSum += nums[index];
        backTrack(nums, target, index+1, currSum);
        currSum -= nums[index];
        
        
        currSum -= nums[index];
        backTrack(nums, target, index+1, currSum);
        currSum += nums[index];
        
    }
    
    
    backTrack(nums, target, 0, 0);
    
    return result;
    
};

console.log(findTargetSumWays([48,9,50,48,38,34,47,8,1,44,27,42,45,25,23,40,6,39,21,48], 29));
console.log(findTargetSumWaysWithMemo([48,9,50,48,38,34,47,8,1,44,27,42,45,25,23,40,6,39,21,48], 29));