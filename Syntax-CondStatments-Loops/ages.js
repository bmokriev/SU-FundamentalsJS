function ages(arg) {
    arg = +arg;
    let age = '';

    if (arg < 0) {
        age = 'out of bounds'
    } else if (arg <= 2) {
        age = 'baby'
    } else if (arg <= 13) {
        age = 'child'
    } else if (arg <= 19) {
        age = 'teenager'
    } else if (arg <= 65) {
        age = 'adult'
    } else {
        age = 'elder'
    }
    console.log(age);
}