function reveal(words, str) {
    let wordsArr = words.split(', ')

    for (const word of wordsArr) {
        str = str.replace('*'.repeat(word.length), word)
    }
    console.log(str);
}
// reveal('great',
//     'softuni is ***** place for learning new programming languages')
reveal('great, learning',
    'softuni is ***** place for ******** new programming languages')