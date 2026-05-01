//Q2)

// const arr = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log("Sum of all elements:", sum);


// Q3)

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         continue; // Skip this iteration
//     }
//     console.log(i);
// }


// Q4)

// for (let i = 1; i <= 20; i++) {
//     if (i % 7 === 0) {
//         break; // Stop loop when first multiple of 7 is found
//     }
//     console.log(i);
// }


// Q5)

// let num = 10;

// do {
//     console.log(num);
//     num--;
// } while (num >= 1);



// Q6)

// let userInput;

// do {
//     userInput = parseInt(prompt("Enter a number greater than 10:"));
// } while (userInput <= 10);

// console.log("You entered:", userInput);


// Q7)

// let count = 1;
// let multiple = 3;

// do {
//     console.log(multiple * count);
//     count++;
// } while (count <= 5);


// Q8)


// let i = 1;

// do {
//     if (i === 10) {
//         break; // Stop loop when number is 10
//     }
//     console.log(i);
//     i++;
// } while (i <= 15);


// Q9)

// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0) {
//         continue; // Skip multiples of 5
//     }
//     console.log(i);
// }


// Q10)

// for (let i = 2; i <= 20; i++) { // start from 2 because 1 is not prime
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log("First prime number found:", i);
//         break; // stop after first prime
//     }
// }


// Q11)

// const numbersSet = new Set([5, 10, 15, 20, 25]);

// for (const value of numbersSet) {
//     console.log(value);
// }


// Q12)


// const set2 = new Set();

// for (let i = 1; i <= 5; i++) {
//     set2.add(i);
// }

// set2.forEach(value => console.log(value));


// Q13

// const words = ['apple', 'banana', 'apple', 'mango', 'banana'];
// const uniqueWords = new Set(words);

// uniqueWords.forEach(word => console.log(word));


// Q14)

// const numbers = new Set([1, 2, 3, 4, 5]);
// const numToCheck = 3;

// if (numbers.has(numToCheck)) {
//     console.log(numToCheck, "exists in the Set");
// } else {
//     console.log(numToCheck, "does not exist in the Set");
// }

// Q15)

// const mySet = new Set([10, 20, 30, 40, 50]);
// mySet.delete(30); // Remove 30

// console.log("Modified Set:");
// mySet.forEach(value => console.log(value));