function email(input) {
    const data = {}

    while ((line = input.shift()) != 'Statistics') {
        let comArr = line.split('->');
        let comm = comArr.shift()

        if (comm === 'Add') {
            let name = comArr.shift();
            if (data.hasOwnProperty(name)) {
                console.log(`${name} is already registered`);
            } else {
                data[name] = [];
            }
        } else if (comm == 'Send') {
            let name = comArr.shift();
            let msg = comArr.shift();
            data[name].push(msg)
        } else if (comm === 'Delete') {
            let name = comArr.shift();
            if (data.hasOwnProperty(name)) {
                delete data[name]
            } else {
                console.log(`${name} not found!`);
            }
        }
    }

    let sorted = Object.keys(data)
    console.log(`Users count: ${sorted.length}`);
    sorted.sort((a, b) => data[b].length - data[a].length || a.localeCompare(b))

    for (const name of sorted) {
        console.log(name);
        for (const msg of data[name]) {
            console.log(` - ${msg}`);
        }
    }
}
email([
    // 'Add->Mike',
    // 'Add->George',
    // 'Send->George->Hello World',
    // 'Send->George->Some random test mail',
    // 'Send->Mike->Hello, do you want to meet up tomorrow?',
    // 'Send->George->It would be a pleasure',
    // 'Send->Mike->Another random test mail',
    'Statistics'
])
// email([
//     'Add->Mike',
//     'Add->George',
//     'Send->George->Hello World',
//     'Send->George->Your loan is overdue',
//     'Add->Mike',
//     'Send->Mike->Hello, do you want to meet up tomorrow?',
//     'Delete->Peter',
//     "Send->George->I'm busy",
//     'Send->Mike->Another random test mail',
//     'Delete->George',
//     'Statistics'
// ])
// email([
//     'Add->Annie',
//     'Add->George',
//     'Send->George->Hello World',
//     'Send->George->Some random test mail',
//     'Send->Annie->Hello, do you want to meet up tomorrow?',
//     'Send->George->It would be a pleasure',
//     'Send->Annie->Another random test mail',
//     'Delete->Annie',
//     'Delete->George',
//     'Statistics'
// ])