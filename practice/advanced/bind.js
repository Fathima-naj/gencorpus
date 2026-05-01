///JAVASCRIPT BIND() METHOD--

// bind() does not execute the function immediately.

// Instead, it returns a new function with this bound.




















///With the bind() method, an object can borrow a method from another object.

//The example below creates 2 objects (person and member).

//The member object borrows the fullname method from the person object:


// const person = {
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// const member = {
//     firstName: "Karthika",
//     lastName: "Nikhil",
// }

// let hello = person.fullName.bind(member);

// console.log(hello())



//The let hello statement defines a variable that will hold a function (created by bind()).
//This function is a copy of the fullName property,
// but it will be bound to the member object when it is called.






/////Key Differences:
// call(): Immediately invokes the function with arguments passed individually.
// apply(): Immediately invokes the function with arguments passed as an array.
//  bind(): Returns a new function that, when invoked later, has the specified this value and optionally predefined arguments.