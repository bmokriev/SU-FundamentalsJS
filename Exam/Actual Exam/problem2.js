function solve(input) {
    let pattern = /[\*|@]([A-Z][a-z]{2,})[\*|@]: \[([A-Za-z])\]\|\[([A-Za-z])\]\|\[([A-Za-z])\]\|$/
    let num = Number(input.shift())

    for (let i = 0; i < num; i++) {
        let str = input[i]

        let match = str.match(pattern);
        // console.log(match);
        if (match !== null) {
            console.log(`${match[1]}: ${match[2].charCodeAt(0)} ${match[3].charCodeAt(0)} ${match[4].charCodeAt(0)}`);
        } else {
            console.log('Valid message not found!');
        }

    }
}


solve([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '@Taggy@: [f]|[f]|[f]| fgdgdfhhghfhg @Taggy@: [f]|[f]||',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
])
// solve([
//     '3',
//     '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
//     '*tAGged*: [i][i][i]|',
//     'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|'
// ])