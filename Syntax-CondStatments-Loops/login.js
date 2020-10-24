function login(input) {
    let user = input[0];
    let rev = user.split('').reverse().join('')
    let result = false;
    

    for (let i = 1; i < input.length; i++) {
        
        if(input[i] === rev){
            result = true;
            break;
        }
        if(i > 3) break;
        
        console.log('Incorrect password. Try again.');
    }

    if (result) {
        console.log(`User ${user} logged in.`);
    }else{
        console.log(`User ${user} blocked!`);
    }
    
}
login(['sunny','rainy','cloudy','sunny','not sunny'])
