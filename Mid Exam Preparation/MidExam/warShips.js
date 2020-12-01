function warShips(input) {
    const pirateStat = input.shift().split('>').map(x => +x);
    const warShipStat = input.shift().split('>').map(x => +x);
    const maxHealth = +input.shift();

    let i = 0
    while (input[i] !== "Retire") {
        const command = input[i].split(' ')

        if (command[0] == 'Fire') {
            let target = warShipStat[+command[1]]
            let damage = +command[2]
            if (!target) {
                i++
                continue
            }

            if ((target - damage) <= 0) {
                console.log("You won! The enemy ship has sunken.");
                return
            } else {
                warShipStat[command[1]] -= damage
            }
        } else if (command[0] == 'Defend') {
            let start = +command[1]
            let end = +command[2]
            let damage = +command[3]

            for (let x = start; x <= end; x++) {
                if ((pirateStat[x] - damage) <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    return
                }
                pirateStat[x] -= damage
            }

        } else if (command[0] == 'Repair') {
            let index = +command[1]
            let health = +command[2]

            if (!pirateStat[index]) {
                i++;
                continue
            }

            if (pirateStat[index] + health > maxHealth) {
                pirateStat[index] = maxHealth;
            } else {
                pirateStat[index] += health;
            }
        } else if (command[0] == 'Status') {
            let count = 0;
            pirateStat.forEach(el => {
                if (el < maxHealth / 5) {
                    count++
                }
            });
            console.log(`${count} sections need repair.`);
        }


        i++
    }

    const pirateShipSum = pirateStat.reduce((a, b) => a + b)
    const warshipSum = warShipStat.reduce((a, b) => a + b)

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);
}
warShips((["2>3>4>5>6",
    "2>3>4>5>6>10>11",
    "15",
    "Fire -1 22",
    "Fire 22 44",
    "Fire 1 1",
    "Retire"]))
// warShips((["2>3>4>5>2",
//     "6>7>8>9>10>11",
//     "20",
//     "Status",
//     "Fire 2 3",
//     "Defend 0 4 11",
//     "Repair 3 18",
//     "Retire"]))