//number triangle

// 1
// 12
// 123
// 1234
// 12345


// let num=1;
// for(i=1;i<=5;i++){
//     let row="";
//     for(j=1;j<=i;j++){
//         row=row+num+" " // row+=num => row =row+num
//         num++;
//     }
//     console.log(row);
    
// }


// 1
// 0 1
// 1 0 1
// 0 1 0 1

for(i=1;i<=5;i++){
    let r=""
    for(j=1;j<=i;j++){
      if((i+j)%2==0){
        r+=1
      }else{
        r+=0
      }
   
    }
    console.log(r);
    
}

