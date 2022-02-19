/**
 * @param {string} s
 * @return {string[]}
 */
 const letterCasePermutation = function(s) {

    /**
     * Idea behind this iterative approach
     * e.g. input abc
     * - abc
     * - Abc
     * - aBc
     * - ABc
     * - abC
     * - AbC
     * - aBC
     * - ABC
     */

    let output = [""]; // initialise empty string first

    for(let c of s) {
        let temp = [];
        if(isNaN(c)) {
            for (let o of output) {
                temp.push(o + c.toLowerCase());
                temp.push(o + c.toUpperCase());
            }
        } else {
            for (let o of output) {
                temp.push(o + c);
            }
        }
        output = temp;
    }
    return output;
};


const letterCasePermutationRecursive = function (s) {

    /**
     * Idea behind the recursive approach
     * Start with the input string fully lowercased
     * Make sure the DFS call itself down two branches, (unchanged and uppercased)
     */

    s = s.toLowerCase();
    let len = s.length;
    let output = [];

    const dfs = (i, res="") => {
        // only call itself down IF it hasn't reach last letter index.
        if (i < len) {
            // if its small letter, upper case it.
            if(s[i] >= 'a') dfs(i+1, res + s[i].toUpperCase()) 
            dfs(i+1, res+s[i]);
        }  else output.push(res)
    }
    dfs(0);
    console.log(output);
    return output;
}


const eg1 = "a1b2";
letterCasePermutation(eg1);
letterCasePermutationRecursive(eg1);