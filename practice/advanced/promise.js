/// Promise in JavaScript

//It has two possible outcomes - resolve for success and reject for failure


let myPromise=new Promise(function(resolve,reject){
    let success=true
    if(success){
        resolve("Successfull")
    }else{
        reject("Failed")
    }
})

myPromise.then(res=>console.log(res))
.catch(err=>console.log(err))























// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const sucess = true; 
//         if(sucess){
//             resolve("Data fetched successfully!");
//         }else{
//             reject("Error: Unable to fetch data");
//         }
//     },2000);
// });

// myPromise
// .then((res) =>{
//     console.log(res);
// })
// .catch((err)=> {
//     console.log(err);
// });