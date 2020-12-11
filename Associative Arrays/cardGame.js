function cardGame(input) {
    // create holding object
    const stats = {};
    const pointsObj = {
        S: 4,
        H: 3,
        D: 2,
        C: 1,
        J: 11,
        Q: 12,
        K: 13,
        A: 14,
        1: 10,

    }
    result = {};

    // loop through input
    for (const item of input) {
        // -convert string to arr
        let [name, cards] = item.split(': ');
        const cardsArr = cards.split(', ')

        // -add cards to set
        if (!stats.hasOwnProperty(name)) {
            stats[name] = new Set(cardsArr);
        } else {
            cardsArr.forEach(e => stats[name].add(e))
        }
    }
    // -calc points and add to obj
    let people = Object.keys(stats)
    for (const name of people) {
        let cards = Array.from(stats[name])
        result[name] = 0;
        for (const el of cards) {
            let points = 0
            if (isNaN(el[0])) {
                points = pointsObj[el[0]]
            } else if (el[0] == 1) {
                points = 10;
            } else {
                points = +el[0];
            }
            let multiplier = pointsObj[el.charAt(el.length - 1)]
            points *= multiplier;
            result[name] += points;
        }
    }

    // print obj
    for (const name in result) {
        console.log(`${name}: ${result[name]}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])