//Sum of natural numbers?
function findSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(findSum(5));

// 1, 2, 3, 4 ,5
// 1+2+3+4+5 = 15