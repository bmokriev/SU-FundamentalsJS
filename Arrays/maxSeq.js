function maxSeq(arr) {

    let maxArr = []
    for (let i = 0; i < arr.length; i++) {
        let cArr = [arr[i]]
        for (let x = i +1; x < arr.length; x++) {
            if (arr[i] == arr[x]) {
                cArr.push(arr[x])
            
            }else{
                break;
            }

        }



        if (cArr.length > maxArr.length) {
            maxArr = cArr;
        }
    }
    console.log(maxArr.join(' '));
}
maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])