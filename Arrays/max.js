function max(arr) {
    const result = []


    for (let i = 0; i < arr.length; i++) {
        let isMax = true;
        for (let x = i + 1; x < (arr.length); x++) {
            if(arr[i] <= arr[x]) {
                isMax = false;
                break;
            }
            
        }

        if(isMax) {
            result.push(arr[i])
        }

        
    }
    console.log(result.join(' '));
}
max([1, 4, 3, 2])
max([14, 24, 3, 19, 15, 17])
max([41, 41, 34, 20])
max([27, 19, 42, 2, 13, 45, 48])