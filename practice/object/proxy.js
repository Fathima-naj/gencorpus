// 🔹 What is a Proxy?

// A Proxy in JavaScript lets you intercept and customize operations performed on objects.

// Operations like getting a property, setting a property, deleting a property, etc. can be controlled.

// Think of it as a “middleman” object that stands between your code and the actual object.


// 🔹 Syntax

// const proxy = new Proxy(target, handler);


// target → The original object.

// handler → An object with "traps" (methods) to intercept operations.


// Original object
const person = {
  name: "Alice",
  age: 20
};

// Handler with basic traps
const handler = {
  // get trap: runs when you read a property
  get(target, prop) {
    console.log(`Getting property: ${prop}`);
    return target[prop];
  },

  // set trap: runs when you assign a property
  set(target, prop, value) {
    console.log(`Setting property: ${prop} = ${value}`);
    target[prop] = value;
    return true; // must return true to confirm success
  }
};

// Create proxy object
const proxyPerson = new Proxy(person, handler);

// --- Using the proxy ---
console.log(proxyPerson.name);   // Getting property: name → Alice
proxyPerson.age = 25;            // Setting property: age = 25
console.log(proxyPerson.age);    // Getting property: age → 25
console.log(person.age);         // 25 (original object is updated)




// get runs when you access a property (proxyPerson.name or proxyPerson.age).

// set runs when you change/add a property (proxyPerson.age = 25).

// So the proxy is just watching and intercepting what happens.

// You can add more traps for other operations like deleteProperty, has, etc.

// This allows you to customize behavior, add validation, logging, etc.