function party(input) {
    const coming = [];

    for (const action of input) {
        if(action.includes('is going!')){
            let name = action.replace(' is going!', '')
            
            if (!coming.includes(name)) {
                coming.push(name);
            }else {
                console.log(`${name} is already in the list!`);
            }
        }else{
            let name = action.replace(' is not going!', '')

            // mahame go ot lista ako e tam
            if(coming.includes(name)){
                coming.splice(coming.indexOf(name), 1)
            }else{
                console.log(`${name} is not in the list!`);
            }
            // kazhvame che ne e v lista ako go nqma
        }

    }
    console.log(coming.join('\n'));
    
}
party(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])
party(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])