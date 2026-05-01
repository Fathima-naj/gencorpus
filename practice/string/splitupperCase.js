//// Convert first letter of word to uppercase

//input - today is thursday
//output - Today Is Thursday

let a = 'today is thursday';

let s=a.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')

console.log(s);
























 //let a1 = a.split(' ').map(word => word.charAt(0).toUpperCase()+ word.slice(1)).join(' ') ;

// console.log(a1);  


// Explanation:
// a.split(' ')

// The split(' ') method splits the string into an array of words,
// using space (' ') as the delimiter.

// let a = 'today is thursday';
// console.log(a.split(' ')); 
// // Output: ["today", "is", "thursday"]


// .map(word => word.charAt(0).toUpperCase() + word.slice(1))

// .map() is used to iterate over each word in the array.
// word.charAt(0).toUpperCase() converts the first character of the word to uppercase.
// word.slice(1) extracts the remaining part of the word as it is.

// Example for each word:

// "today".charAt(0).toUpperCase() + "today".slice(1) // "Today"
// "is".charAt(0).toUpperCase() + "is".slice(1) // "Is"
// "thursday".charAt(0).toUpperCase() + "thursday".slice(1) // "Thursday"
// .join(' ')

// Joins the modified words back into a single string, using a space (' ') as the separator.
// Example:

// ["Today", "Is", "Thursday"].join(' ')
// // Output: "Today Is Thursday"