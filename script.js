"use strict";
let numberOfFilms;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start:function () {
 personalMovieDB.count = +prompt("Скільки фільмів ви вже переглянули?", "");

  while (
    personalMovieDB.count === "" ||
    personalMovieDB.count == null ||
    isNaN(numberOfFilms)
  ) {
    personalMovieDB.count = +prompt("Скільки фільмів ви вже переглянули?", "");
  }
},

rememberMyFilms: function() {
  for (let i = 0; i < 2; i++) {
    const lastFilm = prompt("Один з останніх переглянутих фільмів?", ""),
      rating = +prompt("На скільки оціните його?", "");
    console.log(typeof rating);
    if (
      lastFilm != null &&
      rating != null &&
      lastFilm != "" &&
      rating != "" &&
      lastFilm.length < 50
    ) {
      personalMovieDB.movies[lastFilm] = rating;
    } else {
      i--;
    }
  }
},
 detectPersonalLevel: function() {
  if (personalMovieDB.count < 10) {
    console.log("Переглянуто досить мало фільмів");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви класичний глядач");
  } else if (personalMovieDB.count >= 30) {
    console.log("Ви кіноман");
  } else {
    console.log("error");
  }
},
 showMyDB: function(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }else {
    console.log("privacy");
  }
},

writeYourGenres:function() {
  for (let i = 1; i <= 3; i++) {
    let genre = prompt(`Ваш улюблений жанр під номером ${i}`);
   
    // альт варіант - через split
    // i<2
    // let genres = prompt(`Введіть ваші улюблені жанри через кому`);
    // if (genres === "" || genres == null) { 
    //   console.log("Ви ввели некоректні дані або не ввели їх взагалі");
    //   i--;
    // } else {
    //   personalMovieDB.genres = genres.split(", ");
    //  genres = genres.split(", ");
    //  genres.sort();
      //}
  
    
    if (genre === "" || genre == null) {
      console.log("Ви ввели некоректні дані або не ввели їх взагалі");
      i--;
    }else{
      personalMovieDB.genres[i-1] = genre;
    }
  }
  
  personalMovieDB.genres.forEach((item, i) => {
    console.log(`Улюблений жанр ${i + 1} - це ${item}`);
  });


},

  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  }

};
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();


// console.log(personalMovieDB);



// function showMyDB() {
//   if (personalMovieDB.privat == false) {
//     console.log(personalMovieDB);
//   } else {
//     console.log("privacy");
//   }
// }



// Lessons

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

// let a='14';

// console.log(parsefloat(a));


// function fg(lang, callback) {
//   console.log(`я вчу ${lang}`);
//   callback();

// }
// function done() {
//   console.log('я пройшов цей урок');
// }
// fg('JavaScript', done);
// fg('Python', function() {
//   console.log('я пройшов цей урок');
// });
// fg('Java', () => {
//   console.log('я пройшов цей урок');
// }); 

// const obj={
//     name:'fg',
//     do:'gh',
//     fg:55,
//     gg:{
//         fg:55,
//         gg:55
//     }
// };
// console.log(obj.fg);
// for (let o in obj){
//     console.log( `vhj ${o} in  ${obj[o]}` );
// }

//less
// const arr=['hjk','jk','bj'];


// arr.forEach(function(item,i,arr){
//   console.log(`num ${i+1} fhj ${item }  in ${arr}`)
// })
// console.log(arr.join('/'));

// less
// const sold={
//   name:'fg',
//   do:'gh',
//   fg:55,
// };

// const john= Object.create(sold);

// john.name='John';
// console.log(john);
// console.log(john.fg);