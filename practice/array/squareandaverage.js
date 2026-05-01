// Calculate the average value of the square numbers in an array

let num = [25, 45, 55, 77, 88, 99];

const square = num.map(num => num * num);

console.log(square);

let average = square.reduce((acc, cur) => acc + cur, 0) / num.length;

console.log("average : " + average);




















// .map() is used to create a new array where
// each element is the square of the corresponding element in num.

// Iteration of .map():
// Iteration	Current num	        Squared Value
// 1st	            25	                625
// 2nd             	45	                2025
// 3rd	            55	                3025
// 4th          	77	                5929
// 5th	            88	                7744
// 6th	            99              	9801


//Result of .map():

//[625, 2025, 3025, 5929, 7744, 9801]



// .reduce((acc, cur) => acc + cur, 0) sums all the elements in the square array.

// The sum is then divided by num.length (which is 6) to compute the average.

// Iteration of .reduce():
// Iteration	acc (Accumulated Sum)	    cur (Current Value)	            New acc
// 1st          	0	                      625                 	        625
// 2nd	            625	                        2025                    	2650
// 3rd	            2650	                    3025	                    5675
// 4th	            5675	                    5929	                    11604
// 5th          	11604	                        7744                	19348
// 6th	               19348	                    9801                	29149
// Final sum = 29149

// The final sum is divided by num.length (6)
// to get the average value of the square numbers in the array.