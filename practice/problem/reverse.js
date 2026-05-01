//reverse number eg :- 123456  : 654321



let num=123456

let str=num.toString().split('').reverse().join('')
console.log( Number(str))







// let rev=0;
// let lastDigit;

// while(num>0){
//     lastDigit=num%10;
//     num=Math.floor(num/10)
//     rev=rev*10+lastDigit
// }






















// let rev=0;
// let num=123456
// let lastDigit;

// while(num>0){
//     lastDigit=num%10
//     rev=rev*10+lastDigit
//     num=Math.floor(num/10)
// }

// console.log(rev);

























// rev = 0;
// let num = 123456;
// let lastDigit;

// while(num != 0){
//     lastDigit = num % 10;
//     rev = rev *10 +lastDigit;
//     num = Math.floor(num/10);
// }

// console.log("Reverse number : " +rev);





// Explanation:
// Initialize Variables:

// rev = 0; → This variable will store the reversed number.
// let num = 123456; → The number to be reversed.
// let lastDigit; → This will store the last digit of num in each iteration.
// Loop until num becomes 0:

// lastDigit = num % 10; → Extracts the last digit of num using the modulus operator (%).
// rev = rev * 10 + lastDigit; → Appends the last digit to rev, shifting existing digits left.
// num = Math.floor(num / 10); → Removes the last digit by integer division.
// Reversing Process Step-by-Step:

// Initial num = 123456, rev = 0
// Iteration 1: lastDigit = 6, rev = 0 * 10 + 6 = 6, num = 12345
// Iteration 2: lastDigit = 5, rev = 6 * 10 + 5 = 65, num = 1234
// Iteration 3: lastDigit = 4, rev = 65 * 10 + 4 = 654, num = 123
// Iteration 4: lastDigit = 3, rev = 654 * 10 + 3 = 6543, num = 12
// Iteration 5: lastDigit = 2, rev = 6543 * 10 + 2 = 65432, num = 1
// Iteration 6: lastDigit = 1, rev = 65432 * 10 + 1 = 654321, num = 0
// Loop Terminates when num == 0

// console.log("Reverse number : " + rev); prints "Reverse number : 654321".



