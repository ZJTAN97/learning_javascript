
// fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34
// To generate the next number of the sequence, we sum the previous two.
// 1st and 2nd number of sequence is 1

const fibRecursive = (n) => {
    if ( n <= 2 ) return 1;
    return fib(n-1) + fib(n-2);
}

// memoization
const fib = (n, memo={}) => {
    
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
    
}


console.log(fib(50));