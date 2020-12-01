function compStore(input) {
    let total = 0;
    let specialDis = 0;

    for (const item of input) {
        if (item == 'special') {
            specialDis = 0.1;
            break;
        } else if (item == 'regular') {
            break;
        } else if (+item < 0) {
            console.log("Invalid price!");
            continue;
        }

        total += +item;
    }

    const totalPrice = total * 1.2 * (1 - specialDis);

    if (total == 0) {
        console.log('Invalid order!');
        return
    }

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${total.toFixed(2)}$`);
    console.log(`Taxes: ${(total * 0.2).toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);

}
compStore([
    'regular'
])