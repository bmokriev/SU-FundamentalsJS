function pirates(input) {
    let towns = {};

    while ((line = input.shift()) != 'Sail') {
        let [town, pop, gold] = line.split('||')
        pop = +pop
        gold = +gold
        if (!towns.hasOwnProperty(town)) {
            towns[town] = {};
            towns[town]['pop'] = 0;
            towns[town]['gold'] = 0;

        }
        towns[town]['pop'] += pop;
        towns[town]['gold'] += gold;

    }

    while ((line = input.shift()) != 'End') {
        let comArr = line.split('=>')
        let command = comArr.shift();

        if (command == 'Plunder') {
            Plunder(towns, comArr)
        } else {
            Prosper(towns, comArr)
        }
    }

    let sorted = Object.keys(towns)
    if (sorted.length == 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
        return;
    }
    console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
    sorted.sort((a, b) => towns[b]['gold'] - towns[a]['gold'] || a.localeCompare(b))
    for (const town of sorted) {
        console.log(`${town} -> Population: ${towns[town]['pop']} citizens, Gold: ${towns[town]['gold']} kg`);
    }

    function Plunder(towns, [town, pop, gold]) {
        pop = +pop;
        gold = +gold;

        towns[town]['pop'] -= pop;
        towns[town]['gold'] -= gold;

        console.log(`${town} plundered! ${gold} gold stolen, ${pop} citizens killed.`);

        if (towns[town]['pop'] == 0 || towns[town]['gold'] == 0) {
            delete towns[town];
            console.log(`${town} has been wiped off the map!`);
        }
    }
    function Prosper(towns, [town, gold]) {
        gold = +gold;
        if (gold > 0) {
            towns[town]['gold'] += gold;
            console.log(`${gold} gold added to the city treasury. ${town} now has ${towns[town]['gold']} gold.`);
        } else {
            console.log("Gold added cannot be a negative number!");
        }
    }
}


pirates([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||1100',
    'Havana||410000||1100',
    'Sail',
    // 'Plunder=>Tortuga=>345000=>380',
    // 'Prosper=>Santo Domingo=>180',
    'End'
])
// pirates([
//     'Nassau||95000||1000',
//     'San Juan||930000||1250',
//     'Campeche||270000||690',
//     'Port Royal||320000||1000',
//     'Port Royal||100000||2000',
//     'Sail',
//     'Prosper=>Port Royal=>-200',
//     'Plunder=>Nassau=>94000=>750',
//     'Plunder=>Nassau=>1000=>150',
//     'Plunder=>Campeche=>150000=>690',
//     'End'
// ])