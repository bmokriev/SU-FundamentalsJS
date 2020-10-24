function printAndSum(start, stop) {
    start = +start;
    stop = +stop;
    let result = ''
    let sum = 0;

    for (let i = start; i <= stop; i++) {
        result += (i + ' ')
        sum += i;
    }
    console.log(result);
    console.log('Sum: ' + sum);

}
printAndSum(0, 26)