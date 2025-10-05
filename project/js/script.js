/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Одержимость",
        "Лига справедливости",
        "Ла-ла лэнд",
        
        "Скотт Пилигрим против..."
    ]
};

const bg= document.querySelector('.promo__bg'),
    genre= bg.querySelector('.promo__genre'),
    filmList= document.querySelector('.promo__interactive-list'),
    adv = document.querySelectorAll('.promo__adv img');


adv.forEach(item=>{
    item.remove();
});

genre.textContent='ДРАМА';

bg.style.backgroundImage = 'url("img/bg.jpg")';

filmList.innerHTML='';

const moviesSort=movieDB.movies.sort();

// function moviesList() {
   moviesSort.forEach((film, i) => {
        filmList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
    }
    );
// };
// moviesList ();

