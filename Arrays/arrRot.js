function arrRot(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        arr.push(arr.shift())
        
    }
    console.log(arr.join(' '));
    
}
arrRot([51, 47, 32, 61, 21], 2)
arrRot([32, 21, 61, 1], 4)
arrRot([2, 4, 15, 31], 5)