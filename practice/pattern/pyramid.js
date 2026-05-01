//pyramid

//     *
//    ***
//   *****
//  *******
// *********



//2*i-1



let n=5;

for(i=n;i>=1;i--){
    let r=""
    r+=" ".repeat(n-i)+"*".repeat(2*i-1)
    console.log(r)
}
// for(i=1;i<=n;i++){
//     let r=""
//     for(j=1;j<=n-i;j++){
//         r+=" "
//     }
//     for(k=1;k<=2*i-1;k++){
//         r+="*"
//     }
//     console.log(r);
    
// }






// for(i=1;i<=5;i++){
//     let r=""
//     for(j=1;j<=5-i;j++){
//       r+=" "
//     }
//     for(k=1;k<=2*i-1;k++){
//         r+="*"
//     }
//     console.log(r);
    
// }

















































// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let pattern = "";

//   // spaces
//   for (let j = 1; j <= n - i; j++) {
//     pattern += " ";
//   }

//   // stars
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     pattern += "*";
//   }

//   console.log(pattern);
// }