'use strict';
const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один з останніх переглянутих фільмів?', ''),
        rating = +prompt('На скільки оціните його?', '');
        console.log(typeof(rating));
    if (lastFilm != null && rating != null && lastFilm !='' && rating != '' &&  lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = rating;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Переглянуто досить мало фільмів');
}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Ви класичний глядач');
} else if (personalMovieDB.count >= 30) {
    console.log('Ви кіноман');
}   else {
    console.log('error');

}

console.log(personalMovieDB);

// const a=25;
// const arr=[23,63];

// arr[2]=a;
// (a>0) ? console.log('ok') : console.log('error');

// switch (a) {
//      case 10:
//         console.log('error');
//         break;

//     case 26:
//         console.log('ok');
//         break;   
//     default:
//         console.log('default');
//         break;      
// }

// const obj = {
//     d:50 , 
//     e:60
// }
// obj.l=54;
// alert(obj.d);