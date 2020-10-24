function pyramid(base, incr) {
    base = +base;
    incr = +incr;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let count = 1;

    for (let i = base; i > 0; i -= 2) {
        if(i<3){
            gold += i **2
        }else if (count%5 ===0){
            stone += ((i - 2) ** 2)
            lapis += (i **2 - (i - 2) ** 2)
        }else{
            stone += ((i - 2) ** 2)
            marble += (i **2 - (i - 2) ** 2)
        }
        
        count++
    }
    console.log(`Stone required: ${(stone * incr).toFixed()}`);
    console.log(`Marble required: ${(marble * incr).toFixed()}`);
    console.log(`Lapis Lazuli required: ${(lapis * incr).toFixed()}`);
    console.log(`Gold required: ${(gold * incr).toFixed()}`);
    console.log(`Final pyramid height: ${Math.floor((count-1) * incr)}`);
}
pyramid(11,0.75)