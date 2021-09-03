
const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];

    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const reminder = targetSum - num;
        if (canSum(reminder, numbers, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
}

const canSum2 = (targetSum, numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const reminder = targetSum - num;
        if (canSum2(reminder, numbers)) return true;
    }

    return false;
}

console.log('result', canSum(7, [2, 3]));
console.log('result', canSum(7, [5, 3, 4, 7]));
console.log('result', canSum(7, [2, 4]));
console.log('result', canSum(8, [2, 3, 5]));
console.log('result', canSum(300, [7, 14]));
