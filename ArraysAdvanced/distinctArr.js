function distinct(input) {
    const output = []

    for (const el of input) {
        if (!output.includes(el)) {
            output.push(el)
        }
    }
    
    console.log(output.join(' '));
}
distinct([1, 2, 3, 4])
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinct([20, 8, 12, 13, 4, 4, 8, 5])