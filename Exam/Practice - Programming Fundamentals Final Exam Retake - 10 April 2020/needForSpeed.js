function nfs(input) {
    const cars = {}
    let carsSize = +input.shift();
    // load cars data
    for (let i = 0; i < carsSize; i++) {
        let [model, km, fuel] = input.shift().split('|')
        cars[model] = {};
        cars[model]['km'] = +km;
        cars[model]['fuel'] = +fuel;
    }

    // commands
    while ((line = input.shift()) != 'Stop') {
        let comArr = line.split(' : ')
        let comm = comArr.shift()
        let carName = comArr.shift()
        let car = cars[carName]

        if (comm == 'Drive') {
            let distance = +comArr.shift()
            let fuelNeeded = +comArr.shift()
            if (fuelNeeded > car.fuel) {
                console.log("Not enough fuel to make that ride");
                continue;
            }
            car.km += distance;
            car.fuel -= fuelNeeded;
            console.log(`${carName} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);
            if (car.km > 99999) {
                console.log(`Time to sell the ${carName}!`);
                delete cars[carName]
            }
        } else if (comm == 'Refuel') {
            let fuel = +comArr.shift();
            if (car.fuel + fuel > 75) {
                fuel = 75 - car.fuel;
            }
            car.fuel += fuel
            console.log(`${carName} refueled with ${fuel} liters`);
        } else if (comm == 'Revert') {
            let km = +comArr.shift();

            car.km -= km;
            if (car.km >= 10000) {
                console.log(`${carName} mileage decreased by ${km} kilometers`);
            } else {
                car.km = 10000;
            }
        }
    }

    let sorted = Object.keys(cars)
        .sort((a, b) => cars[b].km - cars[a].km || a.localeCompare(b))

    for (const car of sorted) {
        console.log(`${car} -> Mileage: ${cars[car].km} kms, Fuel in the tank: ${cars[car].fuel} lt.`);

    }



}
nfs([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])
// nfs([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
// ])
