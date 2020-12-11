function oddOcurrences(input) {
    // transform sentence to array removing the spaces
    let sentenceArr = input.split(' ')

    // count how many times a word appears
    let stat = {}

    sentenceArr.forEach(e => {
        e = e.toLowerCase()
        if (stat.hasOwnProperty(e)) {
            stat[e]++;
        } else {
            stat[e] = 1;
        }
    })
    // log odd numbered elements
    const result = [];
    Object.entries(stat).sort((a, b) => b[1] - a[1])
        .forEach(e => {
            if (e[1] % 2 === 1) {
                result.push(e[0]);
            }
        })
    console.log(result.join(' '));

}
oddOcurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')