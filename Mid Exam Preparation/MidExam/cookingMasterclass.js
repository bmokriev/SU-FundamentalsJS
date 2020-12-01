function cookingMasterclass(budget, students, flourPr, eggPr, apronPr) {
    let flour = flourPr * (students - Math.floor(students / 5))
    let eggs = 10 * eggPr * students
    let aprons = apronPr * Math.ceil(students * 1.2)
    const total = flour + eggs + aprons


    if (total <= budget) {
        console.log(`Items purchased for ${total.toFixed(2)}$.`);
    } else {
        console.log(`${Math.abs(budget - total).toFixed(2)}$ more needed.`);
    }
}
// cookingMasterclass(50,
//     2,
//     1.0,
//     0.10,
//     10.0)
cookingMasterclass(100,
    25,
    4.0,
    1.0,
    6.0)
