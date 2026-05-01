//Rotate an array?

let arr=[1,2,3,4,5]
// [2,3,4,5,1]

function rotate(arr){
    arr.push(arr.shift())
   return arr;
}

console.log(rotate(arr));



















// function rotateArray(arr) {
//     arr.push(arr.shift());
//     return arr;
//   }
  


//   const originalArray = [1, 2, 3, 4, 5];

//   const rotatedArray = rotateArray(originalArray);

//   console.log(rotatedArray);


  


//   Explanation of the Code:

// The function rotateArray rotates an array by shifting its first element to the end.

// Step-by-step breakdown:
// arr.shift()

// The .shift() method removes the first element from the array and returns it.
// Example: If arr = [1, 2, 3, 4, 5], then arr.shift() removes 1 and returns it. 
// The array now becomes [2, 3, 4, 5].
// arr.push(...)

// The .push() method adds the removed element (which was returned by shift())
//  to the end of the array.
// Example: arr.push(1) makes the array [2, 3, 4, 5, 1].
// Returning the rotated array

// The function modifies the original array and returns the rotated version.



