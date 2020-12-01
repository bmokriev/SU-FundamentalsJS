function reception(input) {
    const speed = +input[0] + +input[1] + +input[2];
    let students = +input[3];
    let hours = 0;

    while (students > 0) {
        hours++;
        if (hours % 4 !== 0) {
            students -= speed;
        }

    }

    console.log(`Time needed: ${hours}h.`);

}
reception(['3', '2', '5', '40'])