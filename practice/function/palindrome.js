/// A pallindrome is a number that reads the same forward and backward.
// For example, 121,1331, and 4554 are palindroms



let str="level" //["l","e","v","e","l"]

let rev=str.split('').reverse().join('')
if(str==rev){
    console.log("Palindrome");
    
}else{
    console.log("Not ");
    
}
























// function validatePalin(str) {
//     str = str.toString(); // convert to string if input is not a string
//     const len = str.length;


//     for (let i = 0; i < len / 2; i++) {

//         if (str[i] !== str[len - 1 - i]) {
//             console.log(str + ' is not a pallindrome');
//             return; //exit the function
//         }
//     }
//     console.log(str + ' is a pallindrome');
// }
// validatePalin(121); //call the function







// Step 1: Function Call

// validatePalin(121);
// The function validatePalin is called with the argument 121.


// Step 2: Convert to String

// str = str.toString();
// 121 is converted into a string "121".


// Step 3: Get String Length

// const len = str.length;
// "121" has a length of 3.


// Step 4: Start Loop

// for(let i = 0; i < len / 2; i++) {
// The loop runs from i = 0 to i < 3/2, which means i < 1.5.
// Since i is an integer, the loop will run for i = 0 and i = 1.


// Step 5: First Iteration (i = 0)

// if(str[i] !== str[len - 1 - i])
// str[0] = "1"
// str[len - 1 - 0] = str[3 - 1 - 0] = str[2] = "1"
// Since "1" === "1", the condition is false, so the loop continues.


// Step 6: Second Iteration (i = 1)
// The loop condition i < 1.5 means i = 1 is valid.

// if(str[1] !== str[3 - 1 - 1])
// str[1] = "2"
// str[3 - 1 - 1] = str[1] = "2"
// Since "2" === "2", the condition is false again.


// Step 7: Loop Ends
// Since there are no more iterations left, the loop exits.


// Step 8: Print Result

// console.log(str + ' is a pallindrome');
// "121 is a pallindrome" is printed.

// Final Output
// 121 is a pallindrome


// Iteration Summary
// Iteration    	i	    str[i]	    str[len-1-i]	    Comparison  	Result
// 1st	            0	    "1"	        "1"	                "1" === "1"	     ✅ Continue
// 2nd	            1	    "2"	          "2"	            "2" === "2" 	 ✅ Continue
// End	            -	      -	         -		               -           "121 is a pallindrome"