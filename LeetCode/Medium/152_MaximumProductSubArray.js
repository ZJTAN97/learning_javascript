/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {

    let result = Math.max(...nums);
    let currMin = 1;
    let currMax = 1;

    for(let num of nums) {
        if(num === 0) {
            currMin = 1;
            currMax = 1;
            continue;
        }

        let temp = currMax * num;

        currMax = Math.max(num * currMax, num * currMin, num);
        currMin = Math.min(temp, num * currMin, num);

        result = Math.max(result, currMax, currMin);

    }

    console.log(result);
    return result;

};


const nums = [2, 3, -2, 4];
const nums2 = [-2, 3, -4];

maxProduct(nums2);