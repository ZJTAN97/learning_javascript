/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 const isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const convert = {};
    for(let i=0; i < s.length; i++) {
        if(convert[s[i]]) {
            if(t[i] === convert[s[i]]) continue;
            else return false;
        } else {
            convert[s[i]] = t[i];
        }
        console.log(convert);
    }
    return true;
};

const s = "badc";
const t = "baba";

console.log(isIsomorphic(s, t));