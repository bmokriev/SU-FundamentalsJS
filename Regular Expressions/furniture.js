function furniture(arr) {
    let total = 0;
    let list = [];
    let i = 0;
    const pattern = />>([A-Za-z]+)<<([\d]+(\.[\d]+)?)!([\d]+)/
    while (arr[i] != 'Purchase') {
        if (pattern.test(arr[i])) {
            let result = pattern.exec(arr[i])

            list.push(result[1])
            total += (+result[2] * +result[4])

        }
        i++
    }

    console.log('Bought furniture:');
    console.log(list.join('\n'));
    console.log(`Total money spend: ${total.toFixed(2)}`);

}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
])