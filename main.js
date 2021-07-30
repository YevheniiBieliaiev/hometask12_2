"use strict";

/*1)*/

/*массив с коллекцией фильмов*/
const filmCollection = ["Jurassic Park", "Schindler’s List", "Million Dollar Baby", "The Social Network", "The Silence of the Lambs", "The apple", "Phantom of the Opera", "The Iron Man"];

//создаем список фильмов
function createList(arr) {
  let wrapper = document.querySelector(".task-wrapper");
  let h1 = document.createElement("h1");
  let ul = document.createElement("ul");

  wrapper.append(h1);
  h1.textContent = "First task: Film list";

  wrapper.append(ul);
  ul.className = "film-list";

  for (let i = 0; i <= arr.length; i++) {
    let li = document.createElement("li");
    ul.append(li);
    li.textContent = arr[i];
  }
}

//создаем эллементы формы 
function formElem() {
  let wrapper = document.querySelector(".task-wrapper");
  let label = document.createElement("label");
  let input = document.createElement("input");
  let p = document.createElement("p");

  wrapper.append(label);
  label.textContent = "Search:";

  wrapper.append(input);
  input.id = "search";

  input.setAttribute("type", "text");
  wrapper.append(p);
  p.id = "filmsCount";
  p.textContent = "Please, enter a name of the film."
}

//создаем логику для поиска совпадений (трогать массив не буду, все из li)
function checkFilms() {
  let input = document.querySelector("#search");
  let p = document.querySelector("#filmsCount");

  function checking(event) {
    let list = document.querySelectorAll("li");
    let sortFilm = []; // ну, на всякий случай, вдруг нужно вывести список фильмов по совпадению :)
    let inpVal = event.target.value.toLowerCase().trim();

    for (let key of list) {
      let filmNameTransf = key.textContent.toLowerCase().trim();
      if (inpVal.split(" ").join("") === "") {
        p.textContent = "Please, enter a name of the film."
      } else if (filmNameTransf.includes(inpVal)) {
        sortFilm.push(key.textContent);
        p.textContent = `Match: ${sortFilm.length}`;
      } else {
        p.textContent = `Match: ${sortFilm.length}`;
      }
    }
  }

  let listener = input.addEventListener("input", checking);
  //listener.removeEventListener("input", checking, false);
}

/*запуск */
function startApp() {
  createList(filmCollection);
  formElem();
  checkFilms();
}
startApp();


/*2) 
upd: Обновите код так, чтобы по второму клику на li, список ингридиентов удалялся. */

const INGREDIENTS = {
  "cocoa": ["cocoa powder", "milk", "sugar"],
  "cappuccino": ["milk", "coffee"],
  "smoothie": ["banana", "orange", "sugar"],
  "matcha frappe": ["matcha", "milk", "ice"]
};

function createDrinkList(obj) {
  let wrapper = document.querySelector(".task-wrapper");
  let h1 = document.createElement("h1");
  let ul = document.createElement("ul");

  wrapper.append(h1);
  h1.textContent = "Second task: Menu";

  wrapper.append(ul);
  ul.id = "menu";

  /*создаем список из ключей объекта*/
  for (let key in obj) {
    let li = document.createElement("li");
    ul.append(li);
    li.textContent = key;
  }
  /*click -> sublist of Ingredients*/
  function showIngredients(event) {
    let value = event.target.textContent;

    let sublistUL = document.createElement("ul");
    event.target.append(sublistUL);

    for (let elem = 0; elem < obj[value].length; elem++) {
      let li = document.createElement("li");
      sublistUL.append(li);
      li.textContent = obj[value][elem];
    }
  }
  //вызов Listener
  let addSubList = document.querySelector("#menu");
  addSubList.addEventListener("click", showIngredients);

}

createDrinkList(INGREDIENTS);


