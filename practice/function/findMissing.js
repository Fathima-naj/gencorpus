//program to Find Missing Number in an array?

//1.find sum of given array
//2.expected sum
/// Since the array represents an arithmetic sequence, we use the sum formula:

// 𝑆𝑛 = 𝑛 ×(𝑎1 + 𝑎𝑛 ) / 2

// where:

// n = Total count of numbers in the complete sequence (including the missing one).

 // a1  = First number in the sequence (arr[0]).

// an  = Last number in the sequence (arr[arr.length - 1]).

let a=[1,2,3,5,6]

function missing(arr){
 let sum=arr.reduce((acc,n)=>{return acc+n},0)
 let n=arr.length+1
 let a1=arr[0]
 let an=arr[arr.length-1]
 let expected=n*(a1+an)/2
 return expected-sum
}

console.log(missing(a));






































// function findMissingNumber(arr) {
//     // Calculate the sum of the array
//     const sum = arr.reduce((a, b) => a + b, 0);
  
//     // Calculate the expected sum using the formula
//     const n = arr.length + 1; // +1 because one number is missing
//     const a1 = arr[0];
//     const an = arr[arr.length - 1];
//     const expectedSum = n * (a1 + an) / 2;
  
//     // Find the missing number
//     const missingNumber = expectedSum - sum;
  
//     return missingNumber;
//   }
  
//   // Test the function
//   const arr = [1, 2, 3, 5, 6];
//   console.log(findMissingNumber(arr));
























//   Step-by-Step Explanation

// 1. Calculate the sum of the given array

// const sum = arr.reduce((a, b) => a + b, 0);
// .reduce((a, b) => a + b, 0) calculates the sum of all elements in arr.
// For [1, 2, 3, 5, 6]:
// sum = 1 + 2 + 3 + 5 + 6 = 17




// 2. Calculate the expected sum
// Since the array represents an arithmetic sequence, we use the sum formula:

// 𝑆𝑛 = 𝑛 ×(𝑎1 + 𝑎𝑛 ) / 2

// where:

// n = Total count of numbers in the complete sequence (including the missing one).

 // a1  = First number in the sequence (arr[0]).

// an  = Last number in the sequence (arr[arr.length - 1]).

// const n = arr.length + 1;  // +1 because one number is missing
// const a1 = arr[0];  // First element
// const an = arr[arr.length - 1];  // Last element
// const expectedSum = (n * (a1 + an)) / 2;
// For our example:

// n=5+1=6
// 𝑎1  =1
// an  =6

// expectedSum= 6×(1+6) / 2 = 21



// 3. Find the Missing Number

// const missingNumber = expectedSum - sum;

// Subtract the actual sum from the expected sum:

// missingNumber = 21 - 17 = 4

// So, the missing number is 4, which is the correct answer.

// Final Output

// console.log(findMissingNumber([1, 2, 3, 5, 6])); // Output: 4



// Compute the sum of the given numbers.
// Compute the expected sum using the arithmetic series sum formula.
// The missing number is the difference between the expected sum and the actual sum.