/**
 * @param {string} s
 * @return {string}
 */
 const frequencySort = function(s) {
    
    const hash = {};
    let result = "";

    for(let char of s) {
        if(char in hash) {
            hash[char] ++;
        } else {
            hash[char] = 1;
        }
    } 

    const sortedHash = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);
    
    for(let item of sortedHash) {
        result += item.repeat(hash[item]);
    }

    console.log(result);

    return result;

};


const s = "tree";
const s2 = "raaeaedere";
frequencySort(s2);