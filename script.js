"use strict";
// let numberOfFilms;

// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start:function () {
//  personalMovieDB.count = +prompt("Скільки фільмів ви вже переглянули?", "");

//   while (
//     personalMovieDB.count === "" ||
//     personalMovieDB.count == null ||
//     isNaN(numberOfFilms)
//   ) {
//     personalMovieDB.count = +prompt("Скільки фільмів ви вже переглянули?", "");
//   }
// },

// rememberMyFilms: function() {
//   for (let i = 0; i < 2; i++) {
//     const lastFilm = prompt("Один з останніх переглянутих фільмів?", ""),
//       rating = +prompt("На скільки оціните його?", "");
//     console.log(typeof rating);
//     if (
//       lastFilm != null &&
//       rating != null &&
//       lastFilm != "" &&
//       rating != "" &&
//       lastFilm.length < 50
//     ) {
//       personalMovieDB.movies[lastFilm] = rating;
//     } else {
//       i--;
//     }
//   }
// },
//  detectPersonalLevel: function() {
//   if (personalMovieDB.count < 10) {
//     console.log("Переглянуто досить мало фільмів");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Ви класичний глядач");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("Ви кіноман");
//   } else {
//     console.log("error");
//   }
// },
//  showMyDB: function(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }else {
//     console.log("privacy");
//   }
// },

// writeYourGenres:function() {
  // for (let i = 1; i <= 3; i++) {
  //   let genre = prompt(`Ваш улюблений жанр під номером ${i}`);
   
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
    
//     if (genre === "" || genre == null) {
//       console.log("Ви ввели некоректні дані або не ввели їх взагалі");
//       i--;
//     }else{
//       personalMovieDB.genres[i-1] = genre;
//     }
//   }
  
//   personalMovieDB.genres.forEach((item, i) => {
//     console.log(`Улюблений жанр ${i + 1} - це ${item}`);
//   });


// },

//   toggleVisibleMyDB: function() {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat = false;
//     } else {
//       personalMovieDB.privat = true;
//     }
//   }

// };
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();


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

// let num=5; debugger

// function logNumber() {
//   let num=4;
//   console.log(num);
// } 
// num=6;
// logNumber(); debugger



// function counter() {
//   let counter = 0;  
//   const myFunction = function() {
//     counter = counter + 1; 
//     return counter;
//   } 
//   return myFunction;
// }

// const increment = counter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment(); 
// console.log(c1, c2, c3); 


console.log( +"Infinity" )
let a = [1, 2, 3],
b = [1, 2, 3]
if (a===b){
  console.log([ ] + 1 + 2) ; 
}


// •	Какое будет выведено значение: let x = 5; alert( x++ ); ?// 5, бо постфікс


// •	Чему равно такое выражение:  сonsole.log( [ ] + false - null + true )?//  nan

// •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); 2

// •	Чему равна сумма [ ] + 1 + 2? 12

// •	Что выведет этот код: alert( "1"[0] )? 1 

// •	Чему равно 2 && 1 && null && 0 && undefined ? null
 
// •	Есть ли разница между выражениями? !!( a && b ) и (a && b) boolean перетвор   

// •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ? 3  табл приор

// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? no пор не дані 
// а змінні а вони різні

// •	Что выведет этот код: alert( +"Infinity" );  inf зм на намб

// •	Верно ли сравнение: "Ёжик" > "яблоко"? ні бо юнікод prior

// •	Чему равно 0 || "" || 2 || undefined || true || falsе ? 2 пов 1е  тру зн 

const link = document.querySelectorAll('li');
link.forEach(item => {
  console.log(item);
  });

const li= document.querySelector('li');
console.log(li);
link[1].style.fontSize='30px';


link[2].style.cssText='color: orange; font-size: 14px';


let fgh='ghjk';
console.log(fgh[2]);

const btn = document.querySelector('button');
const del=(e)=> {
  console.log(e.target);
  e.target.remove();};

btn.addEventListener('click', 
  
  // (e) => {
  // e.preventDefault();
  // console.log('click'); 
  del);

function pow(x, n) {
let result = 1;
for (let i = 0; i < n; i++) {
  result *= x;

}
return result;
}
  pow(2, 1);//2 1 раз ц спрац
  pow(2, 2);//4 (прац з 0  і 1 )
  pow(2, 3);//8
  pow(2, 4);//16
//зам цикла зап її ж - рекурсія

function pow(x, n) {
  if (n === 1) {
    return x;
  }   else{
  return x * pow(x, n - 1);} //вклад функцій-
}

console.log( pow(2, 1) ); 
console.log( pow(2, 2) ); 
console.log( pow(2, 3) ); 


let st={
  js:[{
    name:'john', progress:100
  },{
    name:'ben', progress:60
  }  ],
  html:{
    basic:[{
      name:'peter',
       progress:20},
    {
      name:'ann', progress:18
    }  ,
    {
      name:'sam', progress:10
    }  ],
    pro:[{
      name:'test', 
      progress:100
    }],
    some:{
      st:[{
        name:'fg', progress:100
      }]
    }
}
};
function totProgrIt(data) {
  let total = 0;//заг прогр
  let st = 0;

  for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
      st += course.length;
      for (let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    } else {
      //якщо не масив а обєкт
      for (let subCourse of Object.values(course)) {
        st += subCourse.length;
        for (let i = 0; i < subCourse.length; i++) {
          total += subCourse[i].progress;
        }
      }
    }
  }
  return total/st;
}
// console.log(totProgrIt(st));


function totProgrRec(data) {
  if (Array.isArray(data)) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }
    return [total, data.length];
  } else {
    let total = [0, 0];
    for (let subData of Object.values(data)) {
      const subDataArr = totProgrRec(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }
    return total;
  }
}   

const result = totProgrRec(st);
console.log(result[0]/result[1]);
//leess

window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box'),
  btn = document.querySelector('.dis');
  box.addEventListener('touchstart', (e) => {
    e.preventDefault();
    console.log('start');
    console.log(e.touches);
  });
  btn.addEventListener('touchmove', (e) => {
    e.preventDefault();
    console.log('move');

  });
  box.addEventListener('touchend', (e) => {
    e.preventDefault();
    console.log('end');

  });
});

const shops=[
{rice:77},
{ol:5758},
{hjk:5758}
];

const budg=[555,444,555];

const map= new Map();

shops.forEach((shop,i)=>{
map.set(shop, budg[i]);
});

map.set(shops[0],554)
  .set(shops[1],621)
  .set(shops[2],621);

// console.log(map.has(shops[]));

// for (let shop of map.keys()){
//   console.log(shop)
// }
// console.log(map.keys(shops));
// const goods=[];
// for (let shop of map.keys()
// ){
//   goods.push(Object.keys(shop)[0])
// }
// console.log(goods)


// for (let price of map.values()){
//   console.log(price);
// }

map.forEach((value,key  ,map)=>
{

  console.log(key,value);
})
const k=BigInt('2345672345678934567890890');
console.log(k+5)