function movies(arr) {
    let moviesArr = []



    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('addMovie')) {
            let currMovie = {}
            let title = arr[i].replace('addMovie ', '')
            currMovie.name = title;
            moviesArr.push(currMovie)

        } else if (arr[i].includes('directedBy')) {
            let [movieName, directorName] = arr[i].split(' directedBy ')
            let targetMovie = moviesArr.find(x => x.name === movieName)
            if (targetMovie) {
                targetMovie.director = directorName
            }
        } else if (arr[i].includes('onDate')) {
            let [movieName, date] = arr[i].split(' onDate ')
            let targetMovie = moviesArr.find(x => x.name === movieName)
            if (targetMovie) {
                targetMovie.date = date
            }
        }

    }


    moviesArr.forEach(x => {
        if (x.name && x.director && x.date) {
            console.log(JSON.stringify(x));
        }
    })




}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',

    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])