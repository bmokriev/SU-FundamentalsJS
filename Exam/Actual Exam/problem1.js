function solve(input) {
    let str = input.shift();

    while ((line = input.shift()) != 'End') {
        let comArr = line.split(' ');
        let comm = comArr.shift();


        if (comm == 'Translate') {
            let oldC = comArr.shift()
            let newC = comArr.shift()
            while (str.indexOf(oldC) > -1) {
                str = str.replace(oldC, newC)
            }
            console.log(str);
        } else if (comm === 'Includes') {
            let sub = comArr.shift()
            if (str.includes(sub)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (comm === 'Start') {
            let sub = comArr.shift()
            if (str.startsWith(sub)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (comm === 'Lowercase') {
            str = str.toLowerCase();
            console.log(str);
        } else if (comm == 'FindIndex') {
            let sub = comArr.shift()
            console.log(str.lastIndexOf(sub));
        } else if (comm === 'Remove') {
            let start = +comArr.shift();
            let count = +comArr.shift()
            let arr = str.split('')
            arr.splice(start, count)
            str = arr.join('')
            console.log(str);
        }
    }
}
solve([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
])