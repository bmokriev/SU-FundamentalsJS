function arrModifier(input) {
    const arr = input.shift()
        .split(' ')
        .map(x => +x);

    let i = 0;
    while (input[i] !== 'end') {
        if (input[i].includes('swap')) {
            const swapArr = input[i].split(' ');
            let a = arr.splice(+swapArr[1], 1, arr[+swapArr[2]])[0];
            arr.splice(+swapArr[2], 1, a);
        } else if (input[i].includes('multiply')) {
            const multArr = input[i].split(' ');
            arr[multArr[1]] *= arr[multArr[2]];
        } else if (input[i] === 'decrease') {
            for (let i = 0; i < arr.length; i++) {
                arr[i] -= 1
            }
        }
        i++
    }
    console.log(arr.join(', '));
}
arrModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])