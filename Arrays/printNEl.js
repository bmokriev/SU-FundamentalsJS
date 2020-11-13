function printN(arr) {
    let step = +arr.pop();
    const result = []
    
    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i])   
        
    }
    console.log(result.join(' '));
    
}
printN(['dsa', 'asd', 'test', 'test', '2'])