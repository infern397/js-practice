const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
            this.movies[movieName] = movieRate;
        }
    },
    detectPersonalLevel: function() {
        switch (true) {
            case this.count < 10: {
                alert("Просмотрено довольно мало фильмов");
                break;
            }
            case this.count >= 10 || this.count <= 30: {
                alert("Вы классический зритель");
                break;
            }
            case this.count > 30: {
                alert("Вы киноман");
                break;
            }
            default: {
                alert("Произошла ошибка")
            }
        
        }
    },
    showMyDB: function() {
        if (!this.privat) {
            console.log(this);
        }
    },
    writeYourGenres: function() {
        let genere;
        for (let i = 0; i < 3; i++) {
            genere = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (genere == '' || genere == null) {
                i--;
                continue;
            }
            this.genres[i] = genere;
        }
        this.genres.forEach((gen, num) => console.log(
            `Любимый жанр ${num + 1} - это ${gen}`
        ))
    },
    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    }
}


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel()
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();