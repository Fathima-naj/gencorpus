const db =
   [{ "accno": 1000, "username": "joy", "password": 123, "balance": 15000, "transaction": [] },
   { "accno": 1001, "username": "ben", "password": 1234, "balance": 150000, "transaction": [] },
   { "accno": 1002, "username": "john", "password": 1231, "balance": 25000, "transaction":[]}

];

// function to check account number, if acc no in db then return true else false? 





function accexist(accno){
    
    return db.some(x => x.accno === accno);
};

console.log(accexist(1000));   // true
console.log(accexist(1005));  // false

//some() : checks atleast one element in the array satisfies the condition
// The some method returns true if atleast one element














// function to output access granted 
// if account number and password in db else permission denied ?

function exist(accno, password){
    for (let user of db){

        if (user["accno"] === accno && user["password"] === password){
            return console.log("access granted");
        }
    }

    return console.log("permission denied");
}

console.log(exist(1001, 1234));
console.log(exist(1005, 1444));

