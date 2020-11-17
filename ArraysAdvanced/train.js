function train(arr) {
    let train = arr.shift().split(' ').map(x => +x);
    const maxCapacity = +arr.shift();


    for (const el of arr) {
        if (el.includes('Add ')) {
            let elMod = +el.replace("Add ", '')
            train.push(elMod);
        } else {
            for (let i = 0; i < train.length; i++) {
                if ((train[i] + +el) <= maxCapacity) {
                    train[i] += +el;
                    break;
                }

            }

        }
    }

    console.log(train.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])