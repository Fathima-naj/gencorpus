//An Armstrong number is a number that is equal to the sum of its own digits,
//  each raised to the power of the number of digits in the number.
// For example, 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153. 
// 1 + 125 + 27 
//  153 = 153


// Program to checck an Armstrong number of three digits

// Armstrong number is a number that is equal to the sum of its own digits,
// each raised to the power of the number of digits in the number.

let sum = 0;
const number = 153

//Create a temporary variable
let temp = number;

while (temp > 0) {
    //finding the one's digit
    let remainder = temp % 10;
    // remainder will hold the last digit of the number(15.3) = 3

    sum += remainder * remainder * remainder; // cube of the digit

    //removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// Check the condition

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}







// ✅ Code Setup
// // Let's break down the code step by step to understand how it works.
// let number = 153;
// let sum = 0;
// let temp = number;

// 🔁 while (temp > 0) Loop Steps:
// We'll go step by step through the loop.

// ✅ Initial values:
// number = 153

// sum = 0

// temp = 153

// 🔄 1st Iteration

// let remainder = temp % 10;      // 153 % 10 = 3
// sum += remainder * remainder * remainder; // 3³ = 27 → sum = 0 + 27 = 27
// temp = Math.floor(temp / 10);   // 153 / 10 = 15.3 → floor = 15
// ✅ After 1st iteration:

// remainder = 3

// sum = 27

// temp = 15

// 🔄 2nd Iteration

// let remainder = temp % 10;      // 15 % 10 =  (1.5) = 5
// sum += 5 * 5 * 5 = 125 → sum = 27 + 125 = 152
// temp = Math.floor(15 / 10) = 1
// ✅ After 2nd iteration:

// remainder = 5

// sum = 152

// temp = 1

// 🔄 3rd Iteration

// let remainder = temp % 10;      // 1 % 10 = 1
// sum += 1 * 1 * 1 = 1 → sum = 152 + 1 = 153
// temp = Math.floor(1 / 10) = 0
// ✅ After 3rd iteration:

// remainder = 1

// sum = 153

// temp = 0

// ⛔ Exit Loop (since temp = 0)
// Now we compare sum with number:


// if (sum === number) {
//     console.log("153 is an Armstrong number");
// }
// ✅ Result: 153 is an Armstrong number