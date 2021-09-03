// memoization
let count = 0;

const fib = (n, memo = {}) => {
    count++;
    // console.log(n, memo);
    if (n in memo) return memo[n]
    if (n <= 2) return 1;
    
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

    return memo[n];
}

const fib2 = (n) => {
    count++;
    if (n <= 2) return 1;
    return fib2(n - 1) + fib2(n - 2);
}

console.log('result ', fib(10));
console.log('result ', fib(15));
console.log('result ', fib(20));
console.log('result ', fib(50));
console.log('result ', fib(70));
console.log(`count`, count)