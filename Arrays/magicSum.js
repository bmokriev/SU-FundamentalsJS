function magicSum(arr, magic) {
    for (let i = 0; i < arr.length - 1; i++) {
        result = []
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[i] + arr[x] == magic) {
                result.push(arr[i], arr[x])
                console.log(result.join(' '));
                result = []
            }
            
        }
        
    }
    
}
// magicSum([14, 20, 60, 13, 7, 19, 8],
//     27)
    magicSum([1, 2, 3, 4, 5, 5],
        6)
