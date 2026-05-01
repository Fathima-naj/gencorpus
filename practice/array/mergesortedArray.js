//Merge & sort arrays?

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

let a=arr1.concat(arr2).sort(function(a,b){
    return a-b
})

console.log(a);

























const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);

console.log(mergedArray); 