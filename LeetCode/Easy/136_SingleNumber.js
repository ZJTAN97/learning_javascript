/**
 * @param {number[]} nums
 * @return {number}
 */
 const singleNumber = function(nums) {

    let number = 0;

    for (let num of nums) {
        number ^= num;       
    }
    
    return number;
};


// Using reduce
const singleNumber2 = function(nums) {
    return nums.reduce((prev, current) => prev ^= current);
}