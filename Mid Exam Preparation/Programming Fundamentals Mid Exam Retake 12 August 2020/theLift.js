function lift(arr) {
    let line = +arr.shift()
    const liftArr = arr.shift().split(' ').map(x => +x)

    for (let i = 0; i < liftArr.length; i++) {

        if (line == 0) {

            break
        }
        if (liftArr[i] > 3) {
            continue
        }

        if (liftArr[i] == 0) {
            if (line > 3) {
                liftArr[i] += 4;
                line -= 4;
            } else {
                liftArr[i] = line;
                line = 0;
            }


        } else {
            if ((4 - liftArr[i]) - line < 0) {
                line -= (4 - liftArr[i])
                liftArr[i] = 4
            } else {
                liftArr[i] += line;
                line = 0;
            }
        }
    }

    if (line == 0 && liftArr[liftArr.length - 1] < 4) {
        console.log('The lift has empty spots!');
        console.log(liftArr.join(' '));
    } else if (line > 0 && liftArr[liftArr.length - 1] == 4) {
        console.log(`There isn't enough space! ${line} people in a queue!`);
        console.log(liftArr.join(' '));
    } else {
        console.log(liftArr.join(' '));
    }


}
lift([
    "20",
    "0 2 0"
])