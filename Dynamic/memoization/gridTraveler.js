const gridTravelerRecursive = (m, n) => {
    // brute force recursive
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTravelerRecursive(m-1, n) + gridTravelerRecursive(m, n-1);
};


// gridTraveler(a,b) = gridTraveler(b,a)

const gridTraveler = (m, n, memo = {}) => {
    // are the args in the memo
    const key = m + ',' + n
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo);
    return memo[key];
}


console.log(gridTraveler(18, 18)) // 2333606220