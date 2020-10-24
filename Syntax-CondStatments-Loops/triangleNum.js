function triangleNum(input) {
    let num = +input;
    let current = 1;
    let display = '';

    for (let i = 1; i <= num; i++) {

        for (let y = 1; y <= i; y++) {
            display += (i + ' ')
        }
        console.log(display);
        display = ''
    }

}
triangleNum(3)