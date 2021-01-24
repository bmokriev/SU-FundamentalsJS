function secretChatt(input) {
    let msg = input.shift()

    // while ((line = input.shift()) != "Reveal") {
    for (const line of input) {
        let comArr = line.split(':|:');
        let command = comArr.shift()

        if (command === 'InsertSpace') {
            let index = +comArr.shift();
            let left = msg.substring(0, index);
            let right = msg.substring(index)
            msg = left + ' ' + right;
            console.log(msg);
        } else if (command === 'Reverse') {
            let sub = comArr.shift();
            let indexSub = msg.indexOf(sub)

            if (!msg.includes(sub)) {
                console.log('error');
                continue;
            } else if (msg.includes(sub)) {
                let reversed = sub.split('').reverse().join('');
                msg = msg.substring(0, indexSub) + reversed + msg.substring(indexSub + sub.length)
                console.log(msg);
            }


        } else if (command === 'ChangeAll') {
            let sub = comArr.shift();
            let repl = comArr.shift()
            let indexSub = msg.indexOf(sub)

            while (indexSub > -1) {
                msg = msg.replace(sub, repl)
                indexSub = msg.indexOf(sub)
            }
            console.log(msg);
        } else if (command === 'Reveal') {
            console.log(`You have a new text message: ${msg}`);
            break;
        }
    }

}
secretChatt([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])
secretChatt([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])

