function wordsTracker(input) {
    const result = {};
    const keysArr = input.shift().split(' ')

    keysArr.forEach(el => {
        result[el] = 0
    });

    for (const word of input) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }

    Object.entries(result)
        .sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(`${e[0]} - ${e[1]}`))


}
wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])