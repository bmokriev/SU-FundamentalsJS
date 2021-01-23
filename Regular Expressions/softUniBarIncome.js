function barIncome(input) {
    total = 0;
    for (const item of input) {
        let pattern = /%([A-Z][a-z]+)%[^\|\$\.%]*<([\w]+)>[^\|\$\.%]*\|([\d]+)\|([\d]+(\.[\d]+)?)\$/g
        let match = pattern.exec(item)
        if (match) {
            let pr = +match[4];
            let qty = +match[3]
            let price = pr * qty;
            console.log(`${match[1]}: ${match[2]} - ${price.toFixed(2)}`);
            total += price;
        }
    }

    console.log(`Total income: ${total.toFixed(2)}`);



}
barIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])