//Print row index number and all the
// elements of the following row in  an array

var arr = [
[1, 2, 1, 24],
[8, 11, 9, 4],
[3, 7, 13, 26],
[20, 25, 22, 22]
]

//output:=>
    // row 1
    // 1
    // 2
    // 1
    // 24

    for(let i in arr){
        console.log(`row ${Number(i)+1}`);
        for(let j in arr){
            console.log(arr[i][j]);
        }
    }

    for(let i in arr)
{
    console.log("row "+(Number(i)+1));
    for(let j in arr)
    {
        console.log(arr[i][j]);
        
    }
    
}


for(i=0;i<arr.length;i++){
    console.log("row "+(i+1));
    for(j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);
        
    }
    
}





