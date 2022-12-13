import { navbar, fetchdata, showBar, status } from "./utility/modules.js";
let header = document.getElementById("header");
header.innerHTML = navbar();

//// Search Food////////////

if (status == undefined) {
  localStorage.setItem("status", 0);
}

showBar();
let searchbar = document.getElementById("search");
searchbar.addEventListener("input", function () {
  if (status == 0) {
    document.querySelector("#container").innerHTML = "";
    document.querySelector("#container").innerHTML =
      "Please Login First!! Or Create Account!!";
  } else {
    searchfood();
  }
});

let getData = async () => {
  let input = document.getElementById("search").value;
  let data = await fetchdata(input);
  console.log(data);
  displayFood(data.meals);
};
function setTimer(func, timeout = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
let searchfood = setTimer(() => getData());
function displayFood(data) {
  document.querySelector("#foodlist").innerHTML = "";
  data.forEach((element) => {
    let div = document.createElement("div");
    div.setAttribute("id", "meals");
    let img = document.createElement("img");
    img.src = element.strMealThumb;
    let title = document.createElement("p");
    title.innerText = element.strMeal;

    let button1 = document.createElement("button");
    button1.setAttribute("id", "button1");
    button1.innerText = "See Recipe";
    button1.addEventListener("click", function () {
      window.location.href = `https://www.themealdb.com/meal/${element.idMeal}`;
    });
    let button2 = document.createElement("button");
    button2.setAttribute("id", "button2");
    button2.addEventListener("click", function () {
      window.location.href = element.strYoutube;
    });
    button2.innerText = "Watch Recipe Video";
    div.append(img, title, button1, button2);
    document.querySelector("#foodlist").append(div);
  });
}
