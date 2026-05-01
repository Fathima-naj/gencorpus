//Find the second largest element


let arr=[1,2,55,100]

let max=Math.max(...arr)
let sec=Math.max(...arr.filter(v=>v!==max))
console.log(sec);


function secLarge(arr){
let max=Math.max(...arr)
return Math.max(...arr.filter(v=>v!==max))
}

console.log(secLarge([22,50,95]));
console.log(secLarge([44,589,78]));


































// function findSecondLargest(arr) {
//     const max = Math.max(...arr);
//     const secondMax = Math.max(...arr.filter(x => x !== max));
//     return secondMax;
//   } 
  


//   const arr = [12, 35, 1, 10, 34, 1];

//   console.log(findSecondLargest(arr));