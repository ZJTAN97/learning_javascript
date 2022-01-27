/**
 * @param {number} n
 * @return {number[]}
 */
 const countBits = function(n) {
    
    let result = [0];
    for(let i=1; i <=n; i++) {
        const msb = i >> 1; // most significant bit, every 4 values, it shifts to left by 1
        const odd = i & 1;

        result[i] = result[msb] + odd;

    }

    console.log(result);
    return result;

};



countBits(5);