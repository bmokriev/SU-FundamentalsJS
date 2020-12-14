function hashTag(input) {
    let arr = input.split(' ');

    for (const word of arr) {
        if (word[0] === "#" && word.length > 1) {
            let hasSymbol = false;
            for (let i = 1; i < word.length; i++) {

                if (word[i] < 67 || word[i] > 90 && word[i] > 97 || word[i] > 122) {
                    hasSymbol = true

                }

            }
            if (hasSymbol) {
                continue;
            }
            let result = word.substring(1)
            console.log(result);
        }
    }

}
hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')