/**
 * @param {number[]} nums
 * @return {number}
 */
 const missingNumber = function(nums) {

    const newArr = new Array(nums.length+1).fill(-1);

    for(let num of nums){
        newArr[num] = num;
    }
    
    return newArr.indexOf(-1);

};


console.log((missingNumber([0, 1])))
console.log(missingNumber([3, 0, 1]))