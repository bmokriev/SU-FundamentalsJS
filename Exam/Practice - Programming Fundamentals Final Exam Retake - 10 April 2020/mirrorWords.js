function mirrorWords(input) {
    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let regPicked = []

    // put potential pairs in an arr
    while ((regArr = pattern.exec(input)) !== null) {
        regPicked.push([regArr[2], regArr[3]])
    }

    if (regPicked.length > 0) {
        console.log(`${regPicked.length} word pairs found!`);
    } else {
        console.log("No word pairs found!");
        console.log("No mirror words!");
        return
    }

    let mirroredArr = [];
    // check if words are mirrored
    for (let i = 0; i < regPicked.length; i++) {
        let word = regPicked[i][0];
        let mirrored = regPicked[i][1].split('')
            .reverse().join('');

        if (word === mirrored) {
            mirroredArr.push(`${word} <=> ${regPicked[i][1]}`)
        }
    }

    if (mirroredArr.length > 0) {
        console.log("The mirror words are:");
        console.log(mirroredArr.join(', '));
    } else {
        console.log("No mirror words!");
    }




}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']
)
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']
)
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])