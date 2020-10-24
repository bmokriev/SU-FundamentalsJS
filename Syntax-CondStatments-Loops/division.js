function division(arg) {
    arg = +arg
    let result = ''


    if(arg % 10 === 0){
        result = 'The number is divisible by 10'
    }else if(arg % 7 === 0){
        result = 'The number is divisible by 7'
    }else if(arg % 6 === 0){
        result = 'The number is divisible by 6'
    }else if(arg % 3 === 0){
        result = 'The number is divisible by 3'
    }else if(arg % 2 === 0){
        result = 'The number is divisible by 2'
    }else{
        result = 'Not divisible'
    }

    console.log(result);

    
}
division('17')