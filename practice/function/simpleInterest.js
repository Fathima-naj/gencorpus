// Function to calculate simple interest

function interest(principal, time, rate){
    //calculate simple ineterst using the formula:
    let simpleInterest = (principal * time * rate)/100;

    // Print the result
    console.log("Simple Interest is: ", simpleInterest);
}

// Call the function with sample values
interest(1000, 2, 5); // Assuming rate is 5%


//simple intrest = (P * T * R) / 100
//after 2 years at the rate of 5% simple interest = 1000*2*5/100 = 100rs.