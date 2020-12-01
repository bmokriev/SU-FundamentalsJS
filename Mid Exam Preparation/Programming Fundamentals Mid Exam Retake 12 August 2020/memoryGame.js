function memoryGame(input) {
    const arr = input.shift()
        .split(' ')
    let moves = 1



    for (let i = 0; i < input.length - 1; i++) {
        const elementsInd = input[i].split(' ').map(x => +x)
        let i1 = elementsInd[0];
        let i2 = elementsInd[1];

        if (arr.length == 0) {
            console.log(`You have won in ${moves - 1} turns!`);
            return
        }
        if (i1 === i2 || (arr[i1] == undefined || arr[i2] == undefined)) {
            console.log("Invalid input! Adding additional elements to the board");
            let penaltyIndex = arr.length / 2
            arr.splice(penaltyIndex, 0, `-${moves}a`, `-${moves}a`)
            continue
        }

        if (arr[i1] === arr[i2]) {
            console.log(`Congrats! You have found matching elements - ${arr[i1]}!`);
            if (i1 > i2) {
                arr.splice(i1, 1)
                arr.splice(i2, 1)
            } else {
                arr.splice(i2, 1)
                arr.splice(i1, 1)
            }

        } else {
            console.log("Try again!");
        }

        moves++
    }

    console.log('Sorry you lose :(');
    console.log(arr.join(' '));

}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])