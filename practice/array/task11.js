rainfall_data = [
    [1, 'ernakulam', 300, 20, 80, 200, 50],
    [2, 'thrissur', 400, 15, 60, 180, 40],
    [3, 'waynad', 500, 10, 70, 220, 55],
    [4, 'calicut', 250, 25, 90, 190, 35],
    [5, 'kannur', 320, 18, 65, 210, 45],
    [6, 'tvm', 480, 22, 75, 230, 60],
]


//District Number
//District Name
//Total Rainfall (in mm)
//Rainy Days
//Sunny Days
//Rainfall in First Half of the Year (mm)
//Rainfall in Second Half of the Year (mm)




//1-Which district has the highest total rainfall?

a= rainfall_data.reduce((d1,d2) => d1[2] > d2[2] ? d1 : d2);
console.log(a[1])





//2-Which district has the highest rainfall in the first half of the year?

b= rainfall_data.reduce((d1,d2) => d1[5] > d2[5] ? d1 : d2);
console.log(b[1])




//3-Which district has the lowest number of rainy days?

c= rainfall_data.reduce((d1,d2) => d1[3] < d2[3] ? d1 : d2);
console.log(c[1])





//4-Sort the data by total rainfall in descending order?
rainfall_data.sort((a,b)=> b[2] - a[2])
console.log(rainfall_data)




//5-List the districts where total rainfall is less than 300 mm?

console.log(rainfall_data.filter(e => e[2] < 300).map(e => e[1]))




//6-Sort the data by rainfall in the first half of the year?
rainfall_data.sort((a,b) => a[5] - b[5])
console.log(rainfall_data)




//7-Print the details of the district 'thrissur'?
console.log(rainfall_data.filter(e => e[1] == 'thrissur'))



//8-Print the total number of rainy days across all districts?
console.log(rainfall_data.reduce((a,b)=>a + b[3], 0))



//9-Print the total number of sunny days across all districts?

console.log(rainfall_data.reduce((a,b)=>a + b[4], 0))



//10-Print the total rainfall for the second half of the year across all districts?

console.log(rainfall_data.reduce((a,b)=>a + b[6], 0))




//11-Find the number of sunny days in 'tvm'?
console.log(rainfall_data.filter(e => e[1] == 'tvm').map(e => e[4]))

