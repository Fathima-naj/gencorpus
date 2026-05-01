const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 2750 },
    { name: 'Monitor', price: 300 },
];

let h=products.reduce((a,b)=>a.price>b.price?a:b)
console.log(h);


let z=products.reduce((acc,val)=>acc.price>val.price?acc:val)
console.log("max "+z.price);
z=products.reduce((acc,val)=>acc.price<val.price?acc:val)
console.log("min "+z.price);

//You have an array of objects called products.
//Each object has two properties: name and price.
//Use the reduce method to find the product with the highest price.
//reduce() is used to iterate through the array and accumulate a single result.



//Step-by-step reduce() execution:

// Initial value:
// prev = products[0] → Laptop (1000)

// First comparison:
// prev = Laptop (1000) vs current = Phone (500)

// 1000 > 500 → true → keep Laptop (1000)

// Second comparison:
// prev = Laptop (1000) vs current = Tablet (2750)

// 1000 > 2750 → false → switch to Tablet (2750)

// Third comparison:
// prev = Tablet (2750) vs current = Monitor (300)

// 2750 > 300 → true → keep Tablet (2750)