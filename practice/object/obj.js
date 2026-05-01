const user={
   name:"Naja",
    age:20
}

console.log(Object.keys(user))

console.log(Object.values(user))
console.log(Object.entries(user))

for(let key in user){
    console.log(key,user[key]);
    
}