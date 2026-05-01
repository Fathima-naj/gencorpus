//inverted triangle

// *****
// ****
// ***
// **
// *


for(i=5;i>=1;i--){
    
    let r=""
    for(j=5;j>=1;j--){
        if(j<=i){
            r+=j;
        }
    }
    console.log(r);
    
}


//54321
//5432
//543
//54
//5

for(let i=5;i>=1;i--)
{
    let r="";
    for(let j=5;j>=6-i;j--)
    {
        r+=j;
    }
    console.log(r);
    
}
// 1
// 2 3
// 4 5 6
// 7 8 9 10


let num=1;
for(i=1;i<=5;i++){
    let r=""
    for(j=1;j<=i;j++){
        r+=num+" ";
        num++;
    }
    console.log(r);
    
}















// for(i=5;i>=1;i--){
//     let p="";
//     for(j=1;j<=i;j++){
//          p+="*"
//     }
//     console.log(p);
    
// }