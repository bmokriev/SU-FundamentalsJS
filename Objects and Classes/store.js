function store(currentArr, orderedArr) {
    const store = {}
    for (let i = 0; i < currentArr.length; i++) {
        if (i % 2 === 0) {
            store[currentArr[i]] = +currentArr[i + 1]
        }

    }

    for (let i = 0; i < orderedArr.length; i++) {

        if (store[orderedArr[i]]) {
            store[orderedArr[i]] += +orderedArr[i + 1]
        } else if (!store[orderedArr[i]] && i % 2 === 0) {
            store[orderedArr[i]] = +orderedArr[i + 1]
        }
    }

    for (const item of Object.keys(store)) {
        console.log(`${item} -> ${store[item]}`);
    }

}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])