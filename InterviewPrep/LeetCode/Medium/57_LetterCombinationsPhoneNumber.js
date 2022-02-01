/**
 * @param {string} digits
 * @return {string[]}
 */
 const letterCombinations = function(digits) {
    const hash = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    }

    let result = [];
    
    const backTrack = (index, str) => {

        if(index === digits.length) {
            result.push(str);
            return;
        }

        for(let c of hash[digits[index]]) {
            backTrack(index+1, str + c);
        }



    }

    backTrack(0, "");

    console.log(result);

};


letterCombinations("23");