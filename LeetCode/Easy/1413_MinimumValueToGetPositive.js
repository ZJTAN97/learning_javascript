/**
 * @param {number[]} nums
 * @return {number}
 */
 const minStartValue = function(nums) {

    let min = 1;
    let currSum = 0;

    for(let i=0; i<nums.length; i++) {

        currSum += nums[i];
        min = Math.min(min, currSum);

    }

    if(min > 0) return 1;

    return (-1 * min + 1);

};


const input1 = [-3, 2, -3, 4, 2];

console.log(minStartValue(input1));