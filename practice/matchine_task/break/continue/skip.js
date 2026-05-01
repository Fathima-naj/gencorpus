for (let i = 1; i <= 20; i++) {
    let isPrime = true;
    if (i == 1) {
        isPrime = false;
    }

    for (let j = 2; j <= Math.sqrt(i); j++) { 
        if (i % j == 0) {
            isPrime = false;
            break; 
        }
    }

    if (isPrime) {
        console.log("First prime found:", i);
        break;
    } else {
        console.log(i);
    }
}