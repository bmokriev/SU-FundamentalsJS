function race(input) {
    let results = {};
    let players = input.shift().split(', ');
    players.forEach(e => results[e] = 0);



    for (let i = 0; i < input.length - 1; i++) {
        let patternName = /[A-Za-z]/g
        let patternPoints = /[\d]/g
        let str = input[i];

        let name = str.match(patternName).join('')
        let points = str.match(patternPoints)
            .map(e => +e)
            .reduce((a, b) => a + b)

        if (results.hasOwnProperty(name)) {
            results[name] += points;
        }
    }

    players.sort((a, b) => results[b] - results[a])

    console.log(`1st place: ${players[0]}`);
    console.log(`2nd place: ${players[1]}`);
    console.log(`3rd place: ${players[2]}`);




}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])