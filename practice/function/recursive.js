// counter with recursion

let count =0
function counter(){
   count++
   console.log(count);
   if(count<5){
    counter()
   }
   
}

counter()

















// let counter =0

// function printHello(){
//     console.log("hello")
//     counter++
//     console.log(counter)

//     if(counter < 4){
//         printHello()
//     }
//     return;
// }


// printHello()

//The function calls itself until the counter reaches 4.