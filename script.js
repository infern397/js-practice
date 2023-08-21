const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

const firstMovieName = prompt("Один из последних просмотренных фильмов?"),
    firstMovieRate = prompt("На сколько оцените его?"),
    secondMovieName = prompt("Один из последних просмотренных фильмов?"),
    secondMovieRate = prompt("На сколько оцените его?");


personalMovieDB.movies[firstMovieName] = firstMovieRate;
personalMovieDB.movies[secondMovieName] = secondMovieRate;

console.log(personalMovieDB);