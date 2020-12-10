function solve(arr) {
    let map = new Map();

    for (const e of arr) {
        let [item, qty] = e.split(' ');
        qty = +qty;

        if (map.has(item)) {
            qty += map.get(item)
        }
        map.set(item, qty)

    }

    for (const entry of map) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])