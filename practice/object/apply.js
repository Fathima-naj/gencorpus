// call(), apply(), and bind() are JavaScript methods used to control 
// the value of this inside a function.

// Normally, this refers to the object that calls the function,
//  but these methods allow us to explicitly set this.

//call():-

// call() invokes the function immediately and allows passing arguments separately.

//The JavaScript apply() Method--

// The apply() method is similar to the call() method .

// In this example the fullName method of person is applied on person1:


let person={
    firstName:"Fathima",
    lastName:"Naja"
}

let user={
    fullName:function(age){
        return this.firstName+" "+this.lastName +":" +age
    }
}

console.log(user.fullName.call(person,20))
console.log(user.fullName.apply(person,[20]))
let binded=user.fullName.bind(person,20)
console.log(binded());



































// const person = {
//     fullName : function() {
//         return this.firstName + " " + this.lastName;
//     }
// }
// const person1 = {
//     firstName:"John",
//     lastName:"Doe"
// }
// //This will return "John Doe":
// console.log(person.fullName.apply(person1))





// The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.



// The apply() Method with Arguments
// The apply() method accepts arguments in an array:



// const person5 = {
//     fullName: function(city, country) {
//         return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
// }

// const person6 = {
//     firstName:"John",
//     lastName:"Doe"
// }

// console.log(person5.fullName.apply(person6, ["Oslo", "Norway"]))







