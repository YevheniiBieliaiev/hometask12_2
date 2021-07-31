"use strict";

/*1)*/
//массив с коллекцией фильмов
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
      } else if (filmNameTransf.startsWith(inpVal)) {
        sortFilm.push(key.textContent);
        p.textContent = `Match: ${sortFilm.length}`;
      } else {
        p.textContent = `Match: ${sortFilm.length}`;
      }
    }
  }

  input.addEventListener("input", checking);
}

//запуск
function startApp() {
  createList(filmCollection);
  formElem();
  checkFilms();
}
startApp();


/*2)*/
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

  //создаем список из ключей объекта + подсписок
  wrapper.append(ul);
  ul.id = "menu";

  for (let key in obj) {
    let li = document.createElement("li");
    ul.append(li);
    li.textContent = key;
    let subUL = document.createElement("ul");
    li.append(subUL);
    for (let elem of obj[key]) {
      let subLi = document.createElement("li");
      subUL.append(subLi);
      subUL.hidden = true;
      subLi.textContent = elem;
    }
  }

  let parentLi = document.querySelectorAll("#menu > li");
  let colectSubUL = document.querySelectorAll("#menu ul");

  //click -> тоглер для класса в родительский li
  function showIngredients(event) {
    event.target.classList.toggle("show-ingr");
    for (let i = 0; i < colectSubUL.length; i++) {
      if (parentLi[i].className === "show-ingr") {
        colectSubUL[i].hidden = false;
      } else {
        colectSubUL[i].hidden = true;
      }
    }

  }
  //вызов Listener
  let addSubList = document.querySelector("#menu");
  addSubList.addEventListener("click", showIngredients);
}
createDrinkList(INGREDIENTS);


/*3)**/
function createClock() {
  let wrapper = document.querySelector(".task-wrapper");
  let h1 = document.createElement("h1");

  wrapper.append(h1);
  h1.textContent = "Third task: Actual Time";

  let buttonStart = document.createElement("button");
  let buttonStop = document.createElement("button");
  wrapper.append(buttonStart);
  wrapper.append(buttonStop);
  buttonStart.textContent = "Start";
  buttonStart.id = "start";
  buttonStop.textContent = "Stop";
  buttonStop.id = "stop";

  let h2 = document.createElement("h2");
  wrapper.append(h2);

  function getTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {
      hours = `0` + date.getHours();
    }
    if (minutes < 10) {
      minutes = `0` + date.getMinutes();
    }
    if (seconds < 10) {
      seconds = `0` + date.getSeconds();
    }

    h2.textContent = `${hours} : ${minutes} : ${seconds}`;
  }

  let clockStart = setInterval(getTime);

  document.querySelector("#stop").addEventListener("click", event => {
    if (event.target) { clearInterval(clockStart); }
  })
  document.querySelector("#start").addEventListener("click", event => {
    if (event.target) { clockStart = setInterval(getTime); }
  })
}

createClock();


