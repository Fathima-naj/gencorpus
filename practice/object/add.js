var employee = {
    id: 100,
    Name:"Karthika",
    designation:"Full stack developer",
    salary: 50000,
    exp:1
}

//Select a property value?
console.log(employee.Name); 

//Add a property?
employee['gender'] = 'Female'
console.log(employee);   


//end result display?
for(let emp in employee){
    console.log(`${emp}:${employee[emp]}`)
}


