//Check prime number?
//Prime numbers are natural numbers that are divisible by only 1 and the number itself. 
// For example: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, etc. are prime numbers.

function prime(num){
let flag=true;
if(num<=1){
    flag=false
}
for(i=2;i<=num/2;i++){
    if(num%i==0){
        flag=false;
        break;
    }
}
if(flag){
    return "prime"
}
else{
    return "not prime"
}
}

console.log(prime(3));




























// function checkPrime(num) {
//     let res = true;
//     if (num <= 1) {
//         res = false;
//     }
//     for (let i = 2; i*i  <=num; i++) {
//         if (num % i === 0) {
//             res = false;
//             break;
//         }
//     }
//     if (res) {
//         console.log(num, " is a prime number. ");
//     } else {
//         console.log(num, " is not a prime number. ");
//     }
// }
// checkPrime(4);
// checkPrime(5);






