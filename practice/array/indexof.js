//Check if an element exists in an array

var army=[10,14,7,3,5];

console.log(army.includes(7));























if(army.indexOf(55) !== -1)        
                                //If an element is not found in an array, 
                                 // indexOf() will return -1.
{
    console.log("Yes, the value exists!")
}
else{
    console.log("No, the value is absent.")
}

//other way
console.log(army.includes(55))




