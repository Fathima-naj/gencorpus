let a=[1,2,3,4,2,5,2,5]

// make an array by removing all duplicates
let u=a.filter(v=>a.indexOf(v)==a.lastIndexOf(v))
console.log(u);


//return a array of unique values

console.log(new Set(a));

let x=[...new Set(a)]
console.log(x);


















// let duplicate=a.filter(v=>a.indexOf(v)==a.lastIndexOf(v))
// let z=[...new Set(a)]
// console.log(z);























// let tot=a.length;
// let last=a[a.length-1]
// let even=a.filter(v=>v%2==0)
// let odd=a.filter(v=>v%2!=0)

// let s=["hello","hi","bye"]
// let up=s.map(v=>v.toUpperCase())

// let lg=a.reduce((n1,n2)=> n1>n2 ? n1:n2)

// let fe=a.find(v=>v%2==0)

// let neg=a.every(v=>v<0)

// let dup=a.filter(v=>a.indexOf(v)===a.lastIndexOf(v))

// let x=[...new Set(a)]

// let add=a.splice(2,0,6,7)
// // console.log(a)
// // console.log(add);
