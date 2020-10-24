function leapYear(input) {
    let year = +input;
    let result = 'no'
    
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ){
        result = 'yes'
    }

    console.log(result);
}
leapYear(1900)