'use strict';

document.addEventListener("DOMContentLoaded", () => {
    /* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...", 
        ]
    };

    const movieList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector(".add"),
        input = addForm.querySelector(".adding__input"),
        favoriteBtn = addForm.querySelector("[type=checkbox]");


    const deleteAdv = () => {
        document.querySelectorAll(".promo__adv img").forEach(adv => adv.remove());
    }



    const makeChanges = function () {
        document.querySelector(".promo__genre").textContent = "драма";
        document.querySelector(".promo__bg").style.backgroundImage = 'url("img/bg.jpg")';
    }


    const sortArr = function (arr) {
        arr.sort();
    }

    const addMovie = function (movieName, films) {
        if (movieName.length > 21) {
            movieName = `${movieName.substring(0, 21)}...`;
        }
        films.push(movieName);
        createMovieList(films, movieList);
    }


    const createMovieList = function(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((movieName, movieIndex) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">
        ${movieIndex + 1}. ${movieName}
        <div class="delete"></div>
        </li>`;
        });

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, movieList);
            })
        })
    }


    addForm.addEventListener("submit", (event) => {
        const newFilm = input.value,
        favorite = favoriteBtn.checked;

        event.preventDefault();
        if (newFilm) {
            if (favorite) {
                console.log("Добавляем любимый фильм");
            }
            addMovie(newFilm, movieDB.movies);
        }
        event.target.reset();
    })


    deleteAdv();
    makeChanges();
    createMovieList(movieDB.movies, movieList)
})