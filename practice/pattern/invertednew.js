// inverted left triangle simple method

const n = 8;
let str = '';
for (let i = n; i >= 1; i--) {
    str += '*'.repeat(i) + '\n';
}
console.log(str);


// The repeat method is
//  used to generate a string 
// with a specified number of repetitions of a character




