/**
 * @param {string} s
 * @return {string[][]}
 */
 const partition = function(s) {
    
    let result = [];

    // const isPalindrome = (str) => {
    //     let j = str.length - 1;
    //     for(let i=0; i < j/2; i++) {
    //         let forwardChar = str[i];
    //         let backwardChar = str[j-i];
    //         if( forwardChar !== backwardChar) return false;
    //     }
    //     return true;
    // }

    const isPalindrome = str => str === str.split('').reverse().join('');

    const backTrack = (index, partition) => {
        if(index === s.length) {
            result.push(partition.slice());
            return;
        }

        for(let i=index+1; i <= s.length; i++) {
            const subString = s.substring(index, i);
            if(isPalindrome(subString)) {
                partition.push(subString);
                backTrack(i, partition);
                partition.pop();
            }
        }

    };

    backTrack(0, []);

    console.log(result);

    return result;

};


partition("aab");