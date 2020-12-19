function cutAndReverse(str) {
    let middle = str.length / 2
    let halfL = str.slice(0, middle)
    let halfR = str.slice(middle)

    console.log(reverse(halfL));
    console.log(reverse(halfR));

    function reverse(input) {
        let arr = input.slice('');
        let result = [];
        for (const letter of arr) {
            result.unshift(letter)
        }
        return result.join('')
    }
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')