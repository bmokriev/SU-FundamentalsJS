function eSum(arr) {
    let isNon = true;
    for (let i = 0; i < arr.length; i++) {
        let totL = sum(0, i)
        let totR = sum((i+1), arr.length)
        
        if (totL === totR) {
            console.log(i);
            isNon = false;
            break
        }
        
    }

    if (isNon) {
        console.log('no');
    }


    
    function sum(x,y) {
        let t = 0
        for (x; x < y; x++) {
            t += arr[x]
            
        }
        return t
    }
    
    
}
eSum([1, 2, 3, 3])
eSum([1, 2])
eSum([1])
eSum([1, 2, 3])
eSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])