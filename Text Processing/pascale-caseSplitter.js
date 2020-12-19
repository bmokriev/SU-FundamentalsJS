function splitter(str) {
    const result = []
    let startIndex = 0
    for (let i = 1; i < str.length; i++) {
        let code = str[i].charCodeAt()
        if (code > 64 && code < 91) {
            let word = str.slice(startIndex, i)
            startIndex = i;
            result.push(word);
        }
    }

    result.push(str.slice(startIndex))

    console.log(result.join(', '));
}
splitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
splitter('ThisIsSoAnnoyingToDo')