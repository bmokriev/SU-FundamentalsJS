function merge(arr1, arr2) {
    let arr3 = [];

    // go tru arr
    // even - sum both el on i -> add to arr3
    // odd - conct both el on i -> add to arr3

    for (let i = 0; i < arr1.length; i++) {
        if(i % 2 == 0){
           arr3.push(+arr1[i] + +arr2[i])
        }else {
            arr3.push(arr1[i] + arr2[i])
        }
        
    }
    console.log(arr3.join(' - '));
}merge(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])