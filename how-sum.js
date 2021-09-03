const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];

    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const reminder = targetSum - num;
        const reminderResult = howSum(reminder, numbers, memo);
        if (reminderResult !== null) {
            // const arr = [ ...reminderResult, num ];
            reminderResult.push(num);
            memo[targetSum] = reminderResult;
            return reminderResult;
        }
    }

    memo[targetSum] = null;
    return null;
}

const howSum2 = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const reminder = targetSum - num;
        const reminderResult = howSum2(reminder, numbers);
        if (reminderResult !== null) {
            return [ ...reminderResult, num ];
        }
    }

    return null;
}

console.log('result', howSum(0, [2, 3]));
console.log('result', howSum(7, [2, 3]));
console.log('result', howSum(7, [5, 3, 4, 7]));
console.log('result', howSum(7, [2, 4]));
console.log('result', howSum(8, [2, 3, 5]));
console.log('result', howSum(300, [7, 14]));