//Remove falsy values in an array?

const originalArray = [0, 1, null, 2, undefined, 3, "", 4, NaN, 5];

let x=originalArray.filter(Boolean)
console.log(x);

// Step-by-Step Execution:


// Element	     Boolean(value)      	Kept in filteredArray
// 0        	false	                       ❌ (Removed)
// 1        	true	                       ✅ (Kept)
// null         false	                    ❌ (Removed)
// 2	         true                        ✅ (Kept)
// undefined	 false	                     ❌ (Removed)
// 3	         true            	        ✅ (Kept)
// ""  (empty string)	false   	        ❌ (Removed)
// 4	         true        	          ✅ (Kept)
// NaN	         false       	          ❌ (Removed)
// 5	         true        	          ✅ (Kept)






// const filteredArray = originalArray.filter(Boolean);

// console.log(filteredArray);

