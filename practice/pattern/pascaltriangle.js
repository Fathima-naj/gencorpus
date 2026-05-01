// ///PascalTriangle



// 1 
// 1 1 
// 1 2 1 
// 1 3 3 1 
// 1 4 6 4 1 

//  num = num * (i - j) / (j + 1) pascal formula


let n = 5;

for (let i = 0; i < n; i++) {
    let num = 1;
    let row = "";

    for (let j = 0; j <= i; j++) {
        row += num + " ";
        num = num * (i - j) / (j + 1);
    }

    console.log(row);
}



