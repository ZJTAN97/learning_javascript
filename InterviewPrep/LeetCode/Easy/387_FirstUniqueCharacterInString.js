/**
 * @param {string} s
 * @return {number}
 */
 const firstUniqChar = function(s) {
    
    const cache = {};

    for(let i=0; i<s.length; i++) {
        if(s[i] in cache) {
            cache[s[i]] ++;
        } else {
            cache[s[i]] = 1;
        }
    }

    const filtered = Object.keys(cache)
        .filter(key => cache[key] === 1)
    
    console.log(s.indexOf(filtered[0]));

    return filtered[0];

};



firstUniqChar("leetcode");