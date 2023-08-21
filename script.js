const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

for (let i = 0; i < personalMovieDB.count; i++) {
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

console.log(personalMovieDB);

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