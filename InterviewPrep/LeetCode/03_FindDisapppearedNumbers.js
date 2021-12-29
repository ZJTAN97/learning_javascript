/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const findDisappearedNumbers = function(nums) {
    const newArr = new Array(nums.length+1).fill(-1);

    for(let num of nums) {
        newArr[num] = num
    }

    return newArr.slice(1,).map((item, id) => { if(item === -1) return id +1 }).filter(item => item !== undefined)

};



console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));