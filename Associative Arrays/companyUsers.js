function companyUsers(arr) {
    const usersData = {};

    // numbers in sets, sets as values of company
    for (const input of arr) {
        let [company, emplNum] = input.split(' -> ')

        if (!usersData.hasOwnProperty(company)) {
            usersData[company] = new Set;
        }
        usersData[company].add(emplNum)
    }
    // print
    // -keys of usersData to arr, sort arr
    let companyNames = Object.keys(usersData)
        .sort((a, b) => a.localeCompare(b))
    // -sets to arr, sort arr, print
    for (const company of companyNames) {
        console.log(company);
        let ids = Array.from(usersData[company])
            .sort((a, b) => a - b)
            .forEach(e => console.log(`-- ${e}`))
    }
}
// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'
// ])
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])