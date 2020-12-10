function addressBook(input) {
    const addressB = {}
    let data = input.map((e) => e.split(':'));

    for (const el of data) {
        addressB[el[0]] = el[1];
    }

    let sorted = Object.entries(addressB)
        .sort((a, b) => {
            let nameA = a[0]
            let nameB = b[0]
            return nameA.localeCompare(nameB)
        })

    sorted.forEach(e => {
        console.log(`${e[0]} -> ${e[1]}`);
    });

}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])