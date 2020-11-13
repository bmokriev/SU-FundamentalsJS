function ladybugs(input) {
    const size = input.shift();
    let indexesStr = input.shift();
    let indexes = indexesStr.split(' ')

    let start = []

    for (let i = 0; i < size; i++) {
        if(indexes.includes(String(i))){
            start.push(1)
        }else{
            start.push(0)
        }
    }
        console.log(start);

    // action
    for (let i = 0; i < input.length; i++) {
        let action = input[i].split(' ')
        let position = +action[0];
        let stepSize = +action[2];

        // mesti se kalinkata spored posokata s kra4ka
        //ako e prazno spira ako ne produljava

        

    }
}
ladybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ])