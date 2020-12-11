function party(arr) {
    const list = {
        'VIP': [],
        'reg': []
    }

    let name = arr.shift()
    while (name !== 'PARTY') {
        if (isNaN(name[0])) {
            list.reg.push(name);
        } else {
            list.VIP.push(name);
        }
        name = arr.shift()
    }

    arr.forEach(name => {
        if (list.VIP.includes(name)) {
            let i = list.VIP.indexOf(name);
            list.VIP.splice(i, 1);
        } else {
            let i = list.reg.indexOf(name);
            list.reg.splice(i, 1);
        }
    });
    console.log(list.VIP.length + list.reg.length);
    console.log(list.VIP.join('\n'));
    console.log(list.reg.join('\n'));

}
party(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])
party(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])