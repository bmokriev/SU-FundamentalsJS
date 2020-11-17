function sorting(input) {
    const output = [];
    let start = input.sort((a, b) => a - b)
    let period = input.length

    for (let i = 0; i < period; i++) {
        if (i%2==0) {
            let el = input.pop()
            output.push(el)
        }else {
            let el = input.shift()
            output.push(el)
        }
        
    }

    

   console.log(output.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])