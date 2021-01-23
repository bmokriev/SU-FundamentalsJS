function starEnigma(input) {
    let numInput = Number(input.shift())
    let initialPettern = /[^STARstar]/g


    for (const item of input) {
        let count = 0;
        let result = item.match(initialPettern)
        count += item.length - result.length;
        // console.log(result);
        let command = ''
        for (let i = 0; i < result.length; i++) {
            let res = String.fromCharCode(result[i].charCodeAt(0) - count)
            command += res;
        }
        console.log(command);


    }


}
starEnigma([2,
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'])