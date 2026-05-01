// diamond star pattern

//     *    
//    ***   
//   *****  
//  ******* 
// *********
//  ******* 
//   *****  
//    ***   
//     *
























// let n = 5

// // Upper Pyramid
// for (let i = 1; i <= n; i++) {
//     let r = ""
//     r += " ".repeat(n - i) + "*".repeat(2 * i - 1)
//     console.log(r)
// }

// // Lower Pyramid
// for (let i = n - 1; i >= 1; i--) {
//     let r = ""
//     r += " ".repeat(n - i) + "*".repeat(2 * i - 1)
//     console.log(r)
// }

// function printDiamond(n) {
//     // Upper part of the diamond (including the middle row)
//     for (let i = 1; i <= n; i += 2) {
//         let spaces = " ".repeat((n - i) / 2);
//         let stars = "*".repeat(i);
//         console.log(spaces + stars + spaces);
//     }

//     // Lower part of the diamond
//     for (let i = n - 2; i >= 1; i -= 2) {
//         let spaces = " ".repeat((n - i) / 2);
//         let stars = "*".repeat(i);
//         console.log(spaces + stars + spaces);
//     }
// }

// printDiamond(9);  // Change the number to adjust the size







// First Loop (Upper Half)
// Runs for i = 1, 3, 5, 7, 9

// i	Spaces ((n-i)/2)	Stars (* repeated i times)	Output Row
// 1	" ".repeat(4)	    "*".repeat(1)	            *
// 3	" ".repeat(3)	    "*".repeat(3)	            ***
// 5	" ".repeat(2)	   "*".repeat(5)	            *****
// 7	" ".repeat(1)	   "*".repeat(7)	            *******
// 9	" ".repeat(0)	   "*".repeat(9)	            *********








// Second Loop (Lower Half)
// Runs for i = 7, 5, 3, 1

// i	Spaces ((n-i)/2)	Stars (* repeated i times)	Output Row
// 7	" ".repeat(1)	  "*".repeat(7)	                *******
// 5	" ".repeat(2)	  "*".repeat(5)	                 *****
// 3	" ".repeat(3)	  "*".repeat(3)	                   ***
// 1	" ".repeat(4)	  "*".repeat(1)	                    *