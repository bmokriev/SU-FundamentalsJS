function makeDictionary(arr) {
    let formated = arr.map(x => JSON.parse(x))
    const dict = {}
    for (const item of formated) {
        let termArr = Object.entries(item)
        dict[termArr[0][0]] = termArr[0][1]
    }

    Object.entries(dict)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(el => {
            console.log(`Term: ${el[0]} => Definition: ${el[1]}`);
        });




}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Boiler":".................................."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])