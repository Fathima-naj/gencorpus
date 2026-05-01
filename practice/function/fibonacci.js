//print fibonacci series

//each number is the sum of the two before it. It begins 0, 1, 1, 2, 3, 5, 8, 13, 21


// find first 10 Fibonacci numbers ?


function fibonacci(n){
    let num1=0
    let num2=1
    let result="";
   for(i=1;i<=n;i++){
    result+=num1 + " ";
    let sum=num1+num2;
    num1 =num2 ;
    num2=sum;
   }
   console.log(result);
   

}
fibonacci(10)













// function printFibonacci(n) {
//     let num1 = 0;
//     let num2 = 1;
//     let result = "";
  
//     for(let i =  1; i <= n; i++) {
//       result += num1 + " ";
//       let sum = num1 + num2;
//       num1 = num2;
//       num2 = sum;
//     }
  
//     console.log(result);
//   }
  
//   printFibonacci(10);


















//   Here, num1 and num2 store the first two Fibonacci numbers, and result is used to store the sequence.

// Loop Execution (for n = 10)
// The loop runs 10 times (i = 1 to i = 10).

// Iteration 1 (i = 1)
// result = "0 "
// sum = num1 + num2 = 0 + 1 = 1
// Update num1 = num2 (1), num2 = sum (1)

// Iteration 2 (i = 2)
// result = "0 1 "
// sum = num1 + num2 = 1 + 1 = 2
// Update num1 = num2 (1), num2 = sum (2)

// Iteration 3 (i = 3)
// result = "0 1 1 "
// sum = num1 + num2 = 1 + 2 = 3
// Update num1 = num2 (2), num2 = sum (3)

// Iteration 4 (i = 4)
// result = "0 1 1 2 "
// sum = num1 + num2 = 2 + 3 = 5
// Update num1 = num2 (3), num2 = sum (5)

// Iteration 5 (i = 5)
// result = "0 1 1 2 3 "
// sum = num1 + num2 = 3 + 5 = 8
// Update num1 = num2 (5), num2 = sum (8)

// Iteration 6 (i = 6)
// result = "0 1 1 2 3 5 "
// sum = num1 + num2 = 5 + 8 = 13
// Update num1 = num2 (8), num2 = sum (13)

// Iteration 7 (i = 7)
// result = "0 1 1 2 3 5 8 "
// sum = num1 + num2 = 8 + 13 = 21
// Update num1 = num2 (13), num2 = sum (21)

// Iteration 8 (i = 8)
// result = "0 1 1 2 3 5 8 13 "
// sum = num1 + num2 = 13 + 21 = 34
// Update num1 = num2 (21), num2 = sum (34)

// Iteration 9 (i = 9)
// result = "0 1 1 2 3 5 8 13 21 "
// sum = num1 + num2 = 21 + 34 = 55
// Update num1 = num2 (34), num2 = sum (55)

// Iteration 10 (i = 10)
// result = "0 1 1 2 3 5 8 13 21 34 "
// sum = num1 + num2 = 34 + 55 = 89
// Update num1 = num2 (55), num2 = sum (89)


// Final Output
// After the loop completes, console.log(result); prints:

// 0 1 1 2 3 5 8 13 21 34 
// This is the first 10 Fibonacci numbers.







