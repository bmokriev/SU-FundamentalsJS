function rounding(arg1, arg2) {
    let num = +arg1;
    let signsAfter = +arg2;

    if (signsAfter > 15) {
        signsAfter = 15
    }

    let result = num.toFixed(signsAfter);

    console.log(parseFloat(result));
}
rounding(10.5,3)