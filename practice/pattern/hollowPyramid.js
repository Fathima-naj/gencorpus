//hollow pyramid

//     *
//    * *
//   *   *
//  *     *
// *********



for(i=1;i<=5;i++){
let r=""
for(j=1;j<=5-i;j++){
    r+=" "
}
for(k=1;k<=2*i-1;k++){
    if(k==1 || k===(2*i-1) ||i==5){
        r+="*"
    }else{
        r+=" "
    }
}
console.log(r);

}




// *****
// *   *
// *   *
// *   *
// *****


for(i=1;i<=5;i++){
    let r=""
    for(j=1;j<=5;j++){
        if(i==1 || i==5 || j==1||j==5){
            r+="*"
        }else{
            r+=" "
        }
    }
    console.log(r);
    
}






































// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let p = "";

//   for (let j = 1; j <= n - i; j++) {
//     p += " ";
//   }

//   for (let k = 1; k <= 2 * i - 1; k++) {

//     if (k === 1 || k === 2 * i - 1 || i === n) {
//       p += "*";
//     } else {
//       p += " ";
//     }
//   }

//   console.log(p);
// }