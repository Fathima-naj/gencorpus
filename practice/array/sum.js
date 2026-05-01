//print pairs whos sum=9 from the given array?

arr = [1, 2, 3, 4, 5, 6, 7]
sum = 9


for (let i of arr) {
    for (let j of arr) {
        if ((i + j) == sum) {
            console.log(`the numbers are, ${i} , ${j}`)
        }
    }
}














// Outer Loop (i loop): Iterates through each element of the array arr.

// Inner Loop (j loop): Iterates through each element of the array again.

// Condition (if statement): Checks if i + j == 9. If true, prints the pair.

// Step-by-step Iterations:

//First Outer Loop (i = 1)
// j = 1 → (1+1) = 2 (not 9)
// j = 2 → (1+2) = 3 (not 9)
// j = 3 → (1+3) = 4 (not 9)
// j = 4 → (1+4) = 5 (not 9)
// j = 5 → (1+5) = 6 (not 9)
// j = 6 → (1+6) = 7 (not 9)
// j = 7 → (1+7) = 8 (not 9)

//Second Outer Loop (i = 2)
// j = 1 → (2+1) = 3 (not 9)
// j = 2 → (2+2) = 4 (not 9)
// j = 3 → (2+3) = 5 (not 9)
// j = 4 → (2+4) = 6 (not 9)
// j = 5 → (2+5) = 7 (not 9)
// j = 6 → (2+6) = 8 (not 9)
// j = 7 → (2+7) = 9 ✅ → Prints: the numbers are, 2 , 7``
// Third Outer Loop (i = 3)
// j = 1 → (3+1) = 4 (not 9)
// j = 2 → (3+2) = 5 (not 9)
// j = 3 → (3+3) = 6 (not 9)
// j = 4 → (3+4) = 7 (not 9)
// j = 5 → (3+5) = 8 (not 9)
// j = 6 → (3+6) = 9 ✅ → Prints: the numbers are, 3 , 6```
// j = 7 → (3+7) = 10 (not 9)
// Fourth Outer Loop (i = 4)
// j = 1 → (4+1) = 5 (not 9)
// j = 2 → (4+2) = 6 (not 9)
// j = 3 → (4+3) = 7 (not 9)
// j = 4 → (4+4) = 8 (not 9)
// j = 5 → (4+5) = 9 ✅ → Prints: the numbers are, 4 , 5```
// j = 6 → (4+6) = 10 (not 9)
// j = 7 → (4+7) = 11 (not 9)
// Fifth Outer Loop (i = 5)
// j = 1 → (5+1) = 6 (not 9)
// j = 2 → (5+2) = 7 (not 9)
// j = 3 → (5+3) = 8 (not 9)
// j = 4 → (5+4) = 9 ✅ → Prints: the numbers are, 5 , 4```
// j = 5 → (5+5) = 10 (not 9)
// j = 6 → (5+6) = 11 (not 9)
// j = 7 → (5+7) = 12 (not 9)
// Sixth Outer Loop (i = 6)
// j = 1 → (6+1) = 7 (not 9)
// j = 2 → (6+2) = 8 (not 9)
// j = 3 → (6+3) = 9 ✅ → Prints: the numbers are, 6 , 3```
// j = 4 → (6+4) = 10 (not 9)
// j = 5 → (6+5) = 11 (not 9)
// j = 6 → (6+6) = 12 (not 9)
// j = 7 → (6+7) = 13 (not 9)
// Seventh Outer Loop (i = 7)
// j = 1 → (7+1) = 8 (not 9)
// j = 2 → (7+2) = 9 ✅ → Prints: the numbers are, 7 , 2```
// j = 3 → (7+3) = 10 (not 9)
// j = 4 → (7+4) = 11 (not 9)
// j = 5 → (7+5) = 12 (not 9)
// j = 6 → (7+6) = 13 (not 9)
// j = 7 → (7+7) = 14 (not 9)
