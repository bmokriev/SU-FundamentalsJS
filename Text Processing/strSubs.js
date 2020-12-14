function strSubs(word, str) {
    str = str.toLowerCase();
    word = word.toLowerCase();

    if (str.includes(' ' + word) || str.includes(word + ' ')) {
        console.log(word);
        return;
    } else {
        console.log(`${word} not found!`);
    }
}
strSubs('javascript',
    'JavaScript is the best programming language')
strSubs('python',
    'JavaScript is the best programming language')
