function travelTime(input) {
    let data = {};
    // take out info from str input and put it in nested objs
    for (const item of input) {
        let offer = item.split(' > ');
        let country = offer[0];
        let city = offer[1];
        let price = +offer[2];

        if (!data.hasOwnProperty(country)) {
            data[country] = {}
        }

        if (!data[country].hasOwnProperty(city) || price < data[country][city]) {
            data[country][city] = price;
        }
    }

    // sort and print
    let arrKeys = Object.keys(data)
        .sort((a, b) => a[0].localeCompare(b[0]))

    for (const key of arrKeys) {
        let result = key + ' ->';
        let resultArr = Object.entries(data[key])
            .sort((a, b) => a[1] - b[1])

        resultArr.forEach(e => {
            result += ` ${e[0]} -> ${e[1]}`
        });
        console.log(result);
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])