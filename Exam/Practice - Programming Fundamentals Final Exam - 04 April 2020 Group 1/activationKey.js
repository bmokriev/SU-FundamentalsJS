function activationKey(input) {
    let actiKey = input.shift()

    while ((line = input.shift()) != 'Generate') {
        let comArr = line.split('>>>')
        let command = comArr.shift()

        if (command == "Contains") {
            Contains(actiKey, comArr)
        } else if (command == "Flip") {
            actiKey = Flip(actiKey, comArr)
        } else if (command == "Slice") {
            actiKey = Slice(actiKey, comArr)
        }
    }

    console.log(`Your activation key is: ${actiKey}`);

    function Contains(actiKey, [substr]) {
        if (actiKey.includes(substr)) {
            console.log(`${actiKey} contains ${substr}`);
        } else {
            console.log("Substring not found!");
        }
    }
    function Flip(actiKey, [mode, start, end]) {
        let first = actiKey.slice(0, start);
        let second = actiKey.slice(start, end);
        let third = actiKey.slice(end);

        if (mode == 'Upper') {
            second = second.toUpperCase();
        } else {
            second = second.toLowerCase();
        }

        let result = first + second + third;
        console.log(result);
        return result;
    }
    function Slice(actiKey, [start, end]) {
        let first = actiKey.slice(0, start);
        let third = actiKey.slice(end);

        let result = first + third;
        console.log(result);
        return result;
    }
}
// activationKey([
//     'abcdefghijklmnopqrstuvwxyz',
//     'Slice>>>2>>>6',
//     'Flip>>>Upper>>>3>>>14',
//     'Flip>>>Lower>>>5>>>7',
//     'Contains>>>def',
//     'Contains>>>deF',
//     'Generate'
// ])
activationKey([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
])