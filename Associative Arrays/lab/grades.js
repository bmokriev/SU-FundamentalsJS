function grades(arr) {
    let data = arr.map(el => el.split(' '));
    let map = new Map();

    for (let item of data) {
        let name = item.shift()
        let grades = item.map(el => +el);
        if (map.has(name)) {
            let oldGr = map.get(name)
            grades = [...oldGr, ...grades]
        }
        map.set(name, grades)
    }

    let sorted = Array.from(map)
        .sort((a, b) => {
            let avgA = a[1].reduce((x, y) => x + y) / a[1].length;
            let avgB = b[1].reduce((x, y) => x + y) / b[1].length;
            return avgA - avgB;
        })

    for (const item of sorted) {
        console.log(`${item[0]}: ${item[1].join(', ')}`);
    }
}
grades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])