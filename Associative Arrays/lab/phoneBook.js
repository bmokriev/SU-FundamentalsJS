function phoneBook(input) {
    let data = input.map((e) => e.split(' '));
    let phoneBook = {}

    data.forEach(el => {
        phoneBook[el[0]] = el[1]
    })

    for (const key in phoneBook) {
        if (phoneBook.hasOwnProperty(key)) {
            console.log(`${key} -> ${phoneBook[key]}`);
        }
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])