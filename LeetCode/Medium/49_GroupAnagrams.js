/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 const groupAnagrams = function(strs) {
    
    if(strs === [""]) return [[""]];
    if(strs.length === 1) return [strs];
    
    const hash = {};
    
    for(let str of strs) {
        
        let anagramCheck = str.split("").sort().join("");
        
        if(anagramCheck in hash) {
            hash[anagramCheck].push(str);
        } else {
            hash[anagramCheck] = [str];
        }    
    }
    
    return Object.values(hash);
    
};


const groupAnagrams2 = function(strs) {

    const cache = {};

    for(let str of strs) {

        let count = Array(26).fill(0);
        for(let c of str) {
            count[c.charCodeAt(0) - 97] += 1;
        }
        count.join(",");

        if(count in cache) {
            cache[count].push(str);
        } else {
            cache[count] = [str];
        }

    }

    return Object.values(cache);

}

const input = ["eat","tea","tan","ate","nat","bat"];

groupAnagrams2(input);