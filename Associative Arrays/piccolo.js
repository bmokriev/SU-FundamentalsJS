function piccolo(input) {
    const parking = new Map;

    for (const log of input) {
        let [action, car] = log.split(', ');

        if (action === 'IN') {
            parking.set(car, 1);
        } else {
            parking.delete(car);
        }
    }

    const sorted = Array.from(parking.keys())
        .sort((a, b) => a.localeCompare(b))
        .forEach(e => console.log(e))

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU',
    'IN, CA2822UU'
])