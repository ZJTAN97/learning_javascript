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