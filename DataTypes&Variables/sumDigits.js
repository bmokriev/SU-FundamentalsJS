function sumDigits(input) {
    input = input.toString()
    let total = 0;

    for (let i = 0; i < input.length; i++) {
        total += +input[i];
        
    }
    console.log(total);
}
sumDigits(245678)