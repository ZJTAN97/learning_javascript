/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 const findLength = function(nums1, nums2) {

    let dp = [];
    let max = 0;

    for(let i=0; i < nums1.length+1; i++) {
        dp.push(new Array(nums2.length+1).fill(0));
    }


    for(let i=1; i<=nums1.length; i++) {

        for(let j=1; j<=nums2.length; j++) {

            if(nums1[i-1] === nums2[j-1]) {

                dp[i][j] = 1 + dp[i-1][j-1];

                max = Math.max(max, dp[i][j]);
            }
        }
    }

    console.log(max);
    console.log(dp);

    return max;
};


const input1 = [1, 2, 3, 2, 1];
const input2 = [3, 2, 1, 4, 7];
const input3 = [0, 0, 0, 0, 0];
const input4 = [0, 0, 0, 0, 0];

findLength(input1, input2);