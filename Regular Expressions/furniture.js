function furniture2(arr) {

    let result = `Bought furniture:\n`
    let total = 0;
    for (const input of arr) {
        const pattern = />>([A-Za-z]+)<<([\d]+(\.[\d]+)?)!([\d]+)/g
        let match = pattern.exec(input);
        if (match) {
            result += match[1] + '\n'
            total += +match[2] * +match[4];
        }

    }
    result = result.slice(0, result.length - 1)
    console.log(result);
    console.log(`Total money spend: ${total.toFixed(2)}`);

}
furniture2(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
])