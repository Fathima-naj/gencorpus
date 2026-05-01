const employee = {
  name: 'Nisha',
  adharCard: 1234567
};

const handler = {
  set(obj, prop, value) {
    if (prop === 'adharCard') {
      console.log("Can't modify Adhar Card!");
      return false; // prevent assignment
    } else {
      return Reflect.set(obj, prop, value); // safe and explicit
    }
  }
};

const empProxy = new Proxy(employee, handler);

// Test
empProxy.adharCard = 1233;   // Can't modify Adhar Card!
empProxy.name = "Nisha Singh"; // Allowed

console.log(employee);




// employee object has name and adharCard.

// handler.set is a trap → it intercepts any attempt to set/update properties.

// If someone tries to change adharCard, it blocks it and logs "Can't modify Adhar Card!".

// For other properties, it uses Reflect.set(...arguments) to allow changes.

// empProxy is the Proxy wrapper — you always interact with empProxy instead of employee.