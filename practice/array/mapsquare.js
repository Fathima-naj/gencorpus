//Calculates the average value of the square number in an array

let nums = [25,45, 55,77,88,99];

//squaring nums arrays values , then find the average


let ans=nums.map(v=>v*v).reduce((a,v)=>a+v)/nums.length


console.log(ans);





















const square = nums.map(num => num*num);

//finding average of square numbers
let avg=square.reduce((acc,v)=>acc+v/square.length)
console.log(avg);
