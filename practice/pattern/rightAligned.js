//     *  4
//    **  3
//   ***  2
//  ****  1
// *****  0

let n=5;
for(i=1;i<=n;i++){
    let row=""
    for(j=1;j<=5-i;j++){
        row+=" "
    }
    for(k=1;k<=i;k++){
        row+="*"
    }

    console.log(row);
    
}




























// let n=5

// for(i=1;i<=n;i++){
//     let row=""
//     for(j=1;j<=n-i;j++){
//         row+=" "
//     }
//     for(k=1;k<=i;k++){
//         row+="*"
//     }
//     console.log(row);
    
// }

