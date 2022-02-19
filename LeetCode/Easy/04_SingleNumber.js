/**
 * @param {number[]} nums
 * @return {number}
 */
 const singleNumber = function(nums) {

    // XOR --> same inputs, output 0
    // different inputs, output 1

     let num = 0;
     for (let item of nums) {
         num ^= item;
     }
     console.log(num);
     return num;
};



const sample = [2,2,1];

singleNumber(sample);