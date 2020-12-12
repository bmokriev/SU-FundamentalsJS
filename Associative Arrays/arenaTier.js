function arena(input) {
    // set obj for data
    const gladiators = {};
    // while loop until Ave Cesar
    let el = input.shift()
    while (el !== 'Ave Cesar') {
        // -if el has -> then make arr and put in obj
        if (el.includes('->')) {
            let [name, tech, skill] = el.split(' -> ')
            skill = +skill
            if (!gladiators.hasOwnProperty(name)) {
                gladiators[name] = {}
                gladiators[name][tech] = skill;
            } else {
                if (!gladiators[name].hasOwnProperty(tech)) {
                    gladiators[name][tech] = skill;
                } else {
                    if (gladiators[name][tech] < skill) {
                        gladiators[name][tech] = skill;
                    }
                }
            }
        } else {
            // -else check if glads exist and if have same tech
            let [glad1, glad2] = el.split(' vs ')
            if (gladiators.hasOwnProperty(glad1)
                && gladiators.hasOwnProperty(glad2)) {
                let hasSameTech = false
                let techForBattle
                Object.keys(gladiators[glad1])
                    .forEach(e => {
                        if (gladiators[glad2].hasOwnProperty(e)) {
                            hasSameTech = true;
                            techForBattle = e;
                        }

                    })
                // -- if they do fight - less skill is deletedc
                if (hasSameTech) {
                    let glad1Tech = gladiators[glad1][techForBattle]
                    let glad2Tech = gladiators[glad2][techForBattle]

                    if (glad1Tech > glad2Tech) {
                        delete gladiators[glad2]
                    } else if (glad1Tech < glad2Tech) {
                        delete gladiators[glad1]
                    }
                }
            }
        }
        el = input.shift()
    }
    // sort and print
    // -make arr of keys 
    sumObj = {};
    for (const key in gladiators) {
        sumObj[key] = 0;
        Object.values(gladiators[key])
            .map(e => sumObj[key] += e)
    }

    // -- sort glads by total skill des then by name
    const sorted = Object.keys(gladiators)
        .sort((a, b) => sumObj[b] - sumObj[a] || a.localeCompare(b))
    // -loop on skils
    for (const name of sorted) {
        console.log(`${name}: ${sumObj[name]} skill`);
        Object.entries(gladiators[name])
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .forEach(e => console.log(`- ${e[0]} <!> ${e[1]}`))

    }
    // -- sort techs by skill then by name
    // -- print

}
// arena([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ])
arena([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])
