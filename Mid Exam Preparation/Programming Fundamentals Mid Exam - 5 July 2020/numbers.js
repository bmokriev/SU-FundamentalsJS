function numbers(input) {
    let numArr = input.split(' ')
        .map(x => x = +x)

    if (numArr.length < 5) {
        console.log('No');
        return
    }

    const avg = numArr.reduce((a, b) => a + b) / numArr.length

    numArr.sort((a, b) => b - a)
    const result = []
    for (let i = 0; i < 5; i++) {
        if (numArr[i] > avg) {
            result.push(numArr[i])
        }
    }
    console.log(result.join(' '));
}
numbers('-1 -2 -3 -4 -5 -6')