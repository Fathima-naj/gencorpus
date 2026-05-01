// Pyramid Pattern



//     *
//    ***
//   *****
//  *******
// *********



// *********
//  *******
//   *****
//    ***
//     *


//     *
//    * *
//   *   *
//  *     *
// *********

let n=5
for(i=1;i<=n;i++){
    let r=""
    r+=" ".repeat(n-i);
    for(k=1;k<=2*i-1;k++){
        if(i==1||i==n||k==1||k==2*i-1){
            r+="*"
        }else{
            r+=" "
        }
    }
    console.log(r)
}




// *********
//  *     *
//   *   *
//    * *
//     *





// for(i=5;i>=1;i--){
//     let r=" ".repeat(5-i)+"*".repeat(2*i-1)
//     console.log(r);
// }

// for(i=1;i<=5;i++){
//     let r=""
//     r+=" ".repeat(5-i)
//     for(k=1;k<=(2*i-1);k++){
//         if(i==1||i==5||k==1||k==2*i-1){
//             r+="*"
//         }else{
//             r+=" "
//         }
//     }
//     console.log(r);
    
// }






























// let n=5
// for(i=1;i<=n;i++){
//     let row=""
//     row+=' '.repeat(n-i)+"*".repeat(2*i-1)
//     console.log(row);
    
// }





// Inverted Pyramid Pattern
// let n=5
// for(i=n;i>=1;i--){
//     let r=""
//     r+=" ".repeat(n-i)+"*".repeat(2*i-1)
//     console.log(r);
    
// }





// Hollow Pyramid Pattern
// const n2 = 5;
// let hollowPyramid = '';

// for (let i = 1; i <= n2; i++) {
//     let row = ' '.repeat(n2 - i);
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         if (j === 1 || j === 2 * i - 1 || i === n2) {
//             row += '*';
//         } else {
//             row += ' ';
//         }
//     }
//     hollowPyramid += row + '\n';
// }

// console.log(hollowPyramid);










// Inverted Hollow Pyramid Pattern
// const n3 = 5;
// let invertedHollowPyramid = '';

// for (let i = n3; i >= 1; i--) {
//     let row = ' '.repeat(n3 - i);
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         if (j === 1 || j === 2 * i - 1 || i === n3) {
//             row += '*';
//         } else {
//             row += ' ';
//         }
//     }
//     invertedHollowPyramid += row + '\n';
// }

// console.log(invertedHollowPyramid);


