function minerTask(input) {
    // def map
    const mine = new Map
    // add to map
    for (let i = 0; i < input.length; i += 2) {
        let ore = input[i]
        let qty = +input[i + 1]
        if (mine.has(ore)) {
            qty += mine.get(ore)
        }
        mine.set(ore, qty)
    }
    // print
    const sorted = Array.from(mine)
        .forEach(e => {
            console.log(`${e[0]} -> ${e[1]}`);
        })

}
// minerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ])
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])