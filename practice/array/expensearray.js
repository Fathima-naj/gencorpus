// Find total expense
// Find maximum amount
// find minimum amount

let expense = [12000, 20000, 30000, 25000, 17000, 10000];
let sum=expense.reduce((acc,val)=>acc+val)


let total=0
let min=expense[0]
let temp;

for(let v of expense){
 
  if(v<min){
   temp=min;
   min=v;
  }
  
}

console.log(min);

console.log(total);











// for (let amount of expense) {
//     total += amount;

//     //Calculate maximum
//     if(maxexp < amount) {
//         maxexp = amount;
//     }

//     //Calculate minimum
//     if(amount < minexp){
//         minexp = amount;
//     }
// }

// console.log("total amount",total);
// console.log("max amount",maxexp);
// console.log("minimum amount",minexp);

// console.log("Maximum amount",Math.max(12000, 20000, 30000, 25000, 17000, 10000))
// console.log("Minimum amount",Math.min(12000, 20000, 30000, 25000, 17000, 10000))