function legendaryFarming(input) {
    const keyMat = {
        'shards': 0,
        'fragments': 0,
        'motes': 0
    };
    const junk = {};

    // transform input on arr
    let arr = input.split(' ');
    // go trough input
    for (let i = 0; i < arr.length; i += 2) {
        let item = arr[i + 1].toLowerCase();
        let qty = +arr[i];
        // - put them in correct obj
        if (item === 'shards' || item === 'fragments' || item === 'motes') {
            keyMat[item] += qty;
        } else {
            if (!junk.hasOwnProperty(item)) {
                junk[item] = 0
            }
            junk[item] += qty;
        }
        // - keep track of key obj
        if (keyMat.shards > 249) {
            console.log(`Shadowmourne obtained!`);
            keyMat.shards -= 250;
            break;
        } else if (keyMat.fragments > 249) {
            console.log(`Valanyr obtained!`);
            keyMat.fragments -= 250;
            break;
        } else if (keyMat.motes > 249) {
            console.log(`Dragonwrath obtained!`);
            keyMat.motes -= 250;
            break;
        }
    }
    Object.entries(keyMat)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(e => console.log(`${e[0]}: ${e[1]}`))

    Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(e => console.log(`${e[0]}: ${e[1]}`))
}
// legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')