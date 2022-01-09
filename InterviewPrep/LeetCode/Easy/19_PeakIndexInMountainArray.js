/**
 * @param {number[]} arr
 * @return {number}
 */
 const peakIndexInMountainArray = function(arr) {

    let low = 0;
    let high = arr.length - 1;

    while(low < high) {
        let mid = Math.floor((low + high) / 2);

        if(arr[mid] > arr[mid+1]) high = mid;
        else low = mid + 1;
    }
    return low;
};


const eg1 = [0, 1, 0];
const eg2 = [0, 2, 1, 0];
const eg3 = [0, 10, 5, 2];


console.log(peakIndexInMountainArray(eg1));
console.log(peakIndexInMountainArray(eg2));
console.log(peakIndexInMountainArray(eg3));