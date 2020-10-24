function vacation(numP, type, day) {
    numP = +numP;
    let rate = 0;
    let total = 0;
    let discountRate = 1;

    if (type == 'Students') {
        if (numP >= 30) discountRate = 0.85;

        if (day == 'Friday') {
            rate = 8.45;
        } else if (day == 'Saturday') {
            rate = 9.8;
        } else if (day == 'Sunday') {
            rate = 10.46;
        }
    } else if (type == 'Business') {
        if (numP >= 100) numP -= 10;

        if (day == 'Friday') {
            rate = 10.9;
        } else if (day == 'Saturday') {
            rate = 15.6;
        } else if (day == 'Sunday') {
            rate = 16;
        }
    } else if (type == 'Regular') {
        if (numP >= 10 && numP < 21) discountRate = 0.95;

        if (day == 'Friday') {
            rate = 15;
        } else if (day == 'Saturday') {
            rate = 20;
        } else if (day == 'Sunday') {
            rate = 22.5;
        }
    }


    total = rate * discountRate * numP;

    console.log(`Total price: ${total.toFixed(2)}`);

}
vacation(40,
    "Regular",
    "Saturday"
    )