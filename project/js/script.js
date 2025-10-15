/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Одержимость",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Скотт Пилигрим против...",
    ],
  };

  const bg = document.querySelector(".promo__bg"),
    genre = bg.querySelector(".promo__genre"),
    filmList = document.querySelector(".promo__interactive-list"),
    adv = document.querySelectorAll(".promo__adv img"),
    //дод ел зі стор
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector('[type="checkbox"]'), //по attr-гал все фо
    delBtn = filmList.getElementsByClassName("delete");
  //обробн події відпр ф , відм ст пов
  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = addInput.value; // пм на лет бо змінюєм знач в умові
    const favorite = checkbox.checked; //галочка true/false
    if (newFilm) {
      //true
      if (newFilm.length > 21) {
        //обрізання рядка
        newFilm = `${newFilm.substring(0, 22)}...`;
      }
      if (favorite) {
        console.log("Додано улюблений фільм");
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createMovieList(movieDB.movies, filmList);
    }
    // знов функціонал форм сп фі

    //очистка форми
    event.target.reset();
  });

  const delAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    genre.textContent = "ДРАМА";
    bg.style.backgroundImage = 'url("img/bg.jpg")';
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  // function moviesList() {
  //зм на парент і аргум
  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);
    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
    });
    //видалення фільму
    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1); //виріз з масиву почи з якого номера і  скільки
        createMovieList(films, parent); //рекурсія
      });
    });
  }
delAdv(adv);
  makeChanges(); // };
  // moviesList ();
  createMovieList(movieDB.movies, filmList);
});
