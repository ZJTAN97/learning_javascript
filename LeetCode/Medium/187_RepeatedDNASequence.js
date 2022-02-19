/**
 * @param {string} s
 * @return {string[]}
 */
 const findRepeatedDnaSequences = function(s) {
    
    const cache = new Map();
    
    for(let i=0; i<s.length; i++) {
        let subStr = s.substring(i, i+10);
        if(cache.get(subStr)) {
            let currentCount = cache.get(subStr);
            cache.set(subStr, currentCount + 1);
        } else {
            cache.set(subStr, 1);
        }
        
    }
    
    let result = [];
    
    for(let [key, val] of cache.entries()) {
        if(val > 1) {
            result.push(key);
        }
    }
    
    return result;
    
};