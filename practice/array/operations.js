let array = ['sleep', 'work', 'exercise','work'];

let newarray = ['eat'];

//sort
//first occurance of 'work'
//last occurance of 'work'
//give array ['work','exercise']
// merge array and newarray

let abc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//find the first element which is greater than 5
let e=abc.find(v=>v>5)
console.log(e);



// array.sort();
// console.log(array);

console.log(array.indexOf('work'));
console.log(array.lastIndexOf('work'));

let xt=array.slice(1,3)
console.log(xt);


let merge=array.concat(newarray)
console.log(merge);












//sort
array.sort();
console.log(array);

//indexOf
const position = array.indexOf('work');
console.log("position", position);

//lastIndexOf
const pos = array.lastIndexOf('work');
console.log("position", pos);



//slice
const slicearray = array.slice(1, 3);
console.log("slice", slicearray);




//concat
const routine = array.concat(newarray);
console.log("concat", routine);





//splice
const fruits =["apple","kiwi","orange","mango"]
const x=fruits.splice(1,2)
console.log(fruits)




//find
abc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const found = abc.find(element => element > 5); //first element greater than 5 = 6
console.log(found)                                   //   < 5 first element less than 5 = 1
