let students={
    name:"Basi",
    age:26,
    course:"MERN",
    city:"Calicut"
}

let {name,course}=students
console.log(name);
console.log(course);

let name1="Fathima";
let age1=20
let course1="Python"
let city1="Kannur"

let student1={
    name1,
    age1,
    course1,
    city1
}


console.log(student1)

let key=Object.keys(students)
console.log(key);

let value=Object.values(students)
console.log(value);

for(let [key,value] of Object.entries(students)){
    console.log(key,value);
    
}

let copy={...student1}
console.log(copy);

let deep=structuredClone(students)
console.log(deep);
