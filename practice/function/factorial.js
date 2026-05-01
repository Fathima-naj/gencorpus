//Factorial of a number? 

// //Factorial of 5 is 5*4*3*2*1 = 120
                                             //   5! = 120


function factorial(n){
    if(n==1 || n==0){
        return 1
        }else{
            return n*factorial(n-1);
        }
}

console.log(factorial(5));


























                                             
// function factorial(n) {
//     if (n == 0 || n == 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);   // recursive function
//     }
//   }
//   console.log(factorial(5));






// First call: factorial(5)

// 5 is not 0 or 1, so it calls factorial(4).
// return 5 * factorial(4)
// Second call: factorial(4)

// 4 is not 0 or 1, so it calls factorial(3).
// return 4 * factorial(3)
// Third call: factorial(3)

// 3 is not 0 or 1, so it calls factorial(2).
// return 3 * factorial(2)
// Fourth call: factorial(2)

// 2 is not 0 or 1, so it calls factorial(1).
// return 2 * factorial(1)
// Fifth call (Base case): factorial(1)

// Since n == 1, it returns 1.
// Returning (Recursion Folding)


// factorial(1) = 1
// factorial(2) = 2 * 1 = 2
// factorial(3) = 3 * 2 = 6
// factorial(4) = 4 * 6 = 24
// factorial(5) = 5 * 24 = 120







