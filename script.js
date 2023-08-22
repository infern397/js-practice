let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let movieName = prompt("Один из последних просмотренных фильмов?");
        if (movieName == "" || movieName === null || movieName.length > 50) {
            i--;
            continue;
        }
        let movieRate = prompt("На сколько оцените его?");
        if (movieRate == "" || movieRate === null) {
            i--;
            continue;
        }
        personalMovieDB.movies[movieName] = movieRate;
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    switch (true) {
        case personalMovieDB.count < 10: {
            alert("Просмотрено довольно мало фильмов");
            break;
        }
        case personalMovieDB.count >= 10 || personalMovieDB.count <= 30: {
            alert("Вы классический зритель");
            break;
        }
        case personalMovieDB.count > 30: {
            alert("Вы киноман");
            break;
        }
        default: {
            alert("Произошла ошибка")
        }
    
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}

writeYourGenres();