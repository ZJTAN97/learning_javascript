/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 const nextGreatestLetter = function(letters, target) {

    const length = letters.length;

    if(letters[length-1] <= target || target < letters[0]) {
        // Rmb it is sorted
        // if last letter less than target
        // or first letter more than target
        return letters[0];
    }
    let left = 0;
    let right = length - 1;
    while(left < right) {

        let middle = Math.floor((left + right) / 2);

        if(letters[middle] <= target) left = middle + 1;
        else if (letters[middle] > target) right = middle;
    }

    return letters[left];
};

const nextGreatestLetterIterative = function(letters, target) {
    for(let letter of letters) {
        if(letter > target) {
            return letter;
        }
    }
    return letters[0];
}


const input = ["c", "f", "j"];
const target = "c";

console.log(nextGreatestLetter(input, target));