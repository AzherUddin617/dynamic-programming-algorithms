
const gridTraveler = (m, n, memo = {}) => {
    // if (m > n) {
    //     m = m + n;
    //     n = m - n;
    // }
    
    const key = m + ',' + n;
    if (key in memo) return memo[key];

    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
}

const gridTraveler2 = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    return gridTraveler2(m - 1, n) + gridTraveler2(m, n - 1);
}

console.log('result', gridTraveler(1, 1));
console.log('result', gridTraveler(2, 2));
console.log('result', gridTraveler(2, 3));
console.log('result', gridTraveler(3, 2));
console.log('result', gridTraveler(3, 3));
console.log('result', gridTraveler(18, 18));
console.log('result', gridTraveler(28, 38));
