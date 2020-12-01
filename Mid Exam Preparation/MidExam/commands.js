function commands(input) {
    const arr = input.shift()
    let i = 0
    while (input[i] !== 'end') {
        let command = input[i].split(' ')

        if (command[0] == 'reverse') {
            let reversed = arr.splice(+command[2], +command[4]);
            for (let i = 0; i < reversed.length; i++) {
                arr.splice(+command[2], 0, reversed[i])
            }

        } else if (command[0] == 'sort') {
            let sorted = arr.splice(+command[2], +command[4])
            sorted.sort((a, b) => a.localeCompare(b))
            arr.splice(+command[2], 0, ...sorted)
        } else if (command[0] == 'remove') {
            arr.splice(0, command[1])
        }

        i++
    }
    console.log(arr.join(', '));
}
// commands(([["a", "2", "5", "c", "7", "3", "b", "6", "4", "9"],
//     "reverse from 2 count 4",
//     "end"]))
// commands([["1", "2", "5", "8", "7", "3", "10", "6", "4", "9"],
//     "sort from 2 count 4",
//     "end"])
// commands([["1", "2", "5", "8", "7", "3", "10", "6", "4", "9"],
//     "remove 2",
//     "end"])
commands(([["a", "2", "5", "c", "7", "3", "b", "6", "4", "9"],
    "sort from 2 count 4",
    "end"]))