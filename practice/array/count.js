// print the count of each item in array

arr = [10, 10, 20, 20, 30, 30, 40, 40, 50, 50, 50]
//output :wordcount= { '10': 2, '20': 2, '30': 2, '40': 2, '50': 3 }


wordcount = {}  // Initialize an empty object to store counts


// for (let word of arr) {             // Iterate through each element in the array
//     if (word in wordcount) {       // Check if the word already exists in the object
//                                   // If it exists, increment the count
//         wordcount[word] += 1
//     } else {                       // If it does not exist, initialize it to 1
//         wordcount[word] = 1
//     }
// }
// console.log(wordcount)








// Step-by-Step Execution
// Iteration	word	wordcount Object (after this iteration)
//1st	10	{10: 1} (First occurrence, initialize to 1)
//2nd	10	{10: 2} (Already exists, increment count)
//3rd	20	{10: 2, 20: 1} (First occurrence, initialize to 1)
//4th	20	{10: 2, 20: 2} (Already exists, increment count)
//5th	30	{10: 2, 20: 2, 30: 1} (First occurrence, initialize to 1)
//6th	30	{10: 2, 20: 2, 30: 2} (Already exists, increment count)
//7th	40	{10: 2, 20: 2, 30: 2, 40: 1} (First occurrence, initialize to 1)
//8th	40	{10: 2, 20: 2, 30: 2, 40: 2} (Already exists, increment count)
//9th	50	{10: 2, 20: 2, 30: 2, 40: 2, 50: 1} (First occurrence, initialize to 1)
//10th	50	{10: 2, 20: 2, 30: 2, 40: 2, 50: 2} (Already exists, increment count)
//11th	50	{10: 2, 20: 2, 30: 2, 40: 2, 50: 3} (Already exists, increment count)


//Key Concepts
//for...of Loop: Iterates through each element in the array.
//Object as a Dictionary: wordcount is used to store key-value pairs.
//Checking for Key Existence (word in wordcount): If the key exists, increment it; otherwise, initialize it.