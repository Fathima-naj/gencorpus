products = [
    { pid: 100, pname: 'apple', band: '5G', price: 120000, display: 'OLED' },
    { pid: 101, pname: 'samsung', band: '4G', price: 25000, display: 'AVOLED' },
    { pid: 102, pname: 'samsung', band: '5G', price: 150000, display: 'LED' },
    { pid: 103, pname: 'VIVO', band: '5G', price: 20000, display: 'OLED' },
    { pid: 104, pname: 'OPPO', band: '4G', price: 10000, display: 'LCD' },
    { pid: 105, pname: 'MI', band: '5G', price: 30000, display: 'OLED' },
    { pid: 106, pname: 'RENO', band: '4G', price: 15000, display:'LED' },
]

    //Print product name only
    //Print all mobiles with LED
    //Print 5G mobile phone names
    //Sort mobile names based on price

products.forEach(v=>console.log(v.pname))
let x=products.filter(v=>v.display=="LED")
console.log(x);

products.filter(v=>v.band=="5G").forEach(v=>console.log(v.pname))

let sort=products.sort((a,b)=>a.price-b.price)
console.log(sort);




   
//     ///Print product name only
//     console.log(products.forEach(element => console.log(element.pname)))




//     //Print all mobiles with LED
//     console.log(products.filter(v => v.display === 'LED')
//     .forEach(e => console.log(e.pname)))







//     //Print 5G mobile phone names
//     console.log(products.filter(element => element.band == "5G")
// .forEach(e => console.log(e.pname)))






// //Sort mobile names based on price
// console.log(products.sort((d1, d2) => d2.price - d1.price)           ///desending
//                                         // d1.price - d2.price          ///asending
// .forEach(e => console.log(e.pname)))

               



// //Print costly mobiles
// console.log(products.reduce((d1,d2) => (d1.price > d2.price? d1:d2)))





