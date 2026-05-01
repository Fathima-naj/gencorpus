accounts = [{
    acno: 1000,
    ac_type: 'savings',
    balance: 50000,
    transaction: [{
            to: 1001,
            amount: 5000,
            msg: 'ebill',
            mode: 'gpay'
        }, {
            to: 1002,
            amount: 2000,
            msg: 'emi',
            mode: "neft"
        },
        {
            to: 1003,
            amount: 1000,
            msg: 'recharge',
            mode: 'PhonePay'
        }
    ]
},
{
    acno: 1001,
    ac_type: 'current',
    balance: 150000,
    transaction: [{
            to: 1003,
            amount: 15000,
            msg: 'emi',
            mode: 'gpay'
        }, {
            to: 1002,
            amount: 12000,
            msg: 'emi',
            mode: "neft"
        },
        {
            to: 1004,
            amount: 1000,
            msg: 'recharge',
            mode: 'PhonePay'
        }
    ]
},
{
    acno: 1003,
    ac_type: 'current',
    balance: 10000,
    transaction: [{
            to: 1005,
            amount: 200,
            msg: 'ebill',
            mode: 'gpay'
        }, {
            to: 1009,
            amount: 1000,
            msg: 'emi',
            mode: "neft"
        },
        {
            to: 1007,
            amount: 3000,
            msg: 'Loan',
            mode: 'PhonePay'
        }
    ]
},
{
    acno: 1004,
    ac_type: 'fixed',
    balance: 1000000,
    transaction: []
},
{
    acno: 1005,
    ac_type: 'current',
    balance: 710000,
    transaction: [{
            to: 1003,
            amount: 20000,
            msg: 'emi',
            mode: 'upi'
        }, {
            to: 1009,
            amount: 11000,
            msg: 'loan',
            mode: "neft"
        },
        {
            to: 1007,
            amount: 13000,
            msg: 'Car Loan',
            mode: 'PhonePay'
}
]
}
]


// Q1)find total number of accounts ?
// Q2) Print account details whose account type is savings ?
// Q3) Print balance of the account number 1003
// Q4) print all gpay transactions
// Q5) Print all transactions whose amount>10000
// Q6) print debit transactions of acc no  1000
// Q7) print transaction history of 1005



// console.log('number of accnts :',accounts.length)
// console.log(accounts.filter(a=>a.ac_type=='savings').forEach(e=>console.log(e)))
// console.log(accounts.find(a=>a.acno==1003).balance)
// console.log(accounts.map(a=>a.transaction).flat().filter(a=>a.mode=="gpay"))

// console.log(accounts.map(a=>a.transaction).flat().filter(a=>a.amount>10000))
// console.log(accounts.find(a=>a.acno==1000).transaction)






/// find total number of accounts ?
// console.log("total number of accouts",accounts.length)










// Print account details whose account type is savings ?
// console.log(accounts.filter(data=>data.ac_type=="savings").forEach(e=>console.log(e)))










//Print balance of the account number 1003
// console.log(accounts.find(data=>data.acno==1003).balance)






//print all gpay transactions
// console.log(accounts.map(data=>data.transaction).flat().filter(t=>t.mode=="gpay"))







//Print all transactions whose amount>10000
// console.log(accounts.map(data=>data.transaction).flat().filter(t=>t.amount>10000))






//print debit transactions of acc no  1000
// const debitTransactions = accounts.filter(d => d.acno === 1000).map(d => d.transaction);
// console.log(debitTransactions);

// other way
//console.log(accounts.find(d => d.acno ===1000).transaction);






//print transaction history of 1005
// console.log(accounts.find(d => d.acno === 1005).transaction);


