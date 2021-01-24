function emojiDetect([input]) {
    const pattern = /(::|\*\*)[A-Z][a-z]{2,}\1/g;
    const patternDigits = /[\d]/g;
    const patternText = /[A-Za-z]+/

    // treshold calc
    let digitArr = input.match(patternDigits);
    let threshold = digitArr.reduce((a, b) => a * b);
    console.log(`Cool threshold: ${threshold}`);

    // detecting emojies count
    let emojiArr = input.match(pattern);
    console.log(`${emojiArr.length} emojis found in the text. The cool ones are:`);


    //calc cool
    for (const item of emojiArr) {
        let totalCool = 0;
        let emoji = item.match(patternText);
        [...emoji[0]].forEach(e => {
            totalCool += e[0].charCodeAt(0);
        })
        if (totalCool > threshold) {
            console.log(item);
        }

    }
}
emojiDetect([`In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**`])