import { navbar, showBar, randomdata, status } from "./utility/modules.js";
//console.log(navbar());
let header = document.getElementById("header");
header.innerHTML = navbar();

let data = await randomdata(
  "https://www.themealdb.com/api/json/v1/1/random.php"
);
console.log(data);
if (status == 1) {
  displayData();
  showBar();
} else {
  document.querySelector("#container").innerHTML =
    "Please Login First!!! To See Recipes!!!";
}
function displayData() {
  data.forEach((element) => {
    let div = document.createElement("div");
    div.setAttribute("id", "recipediv");
    let h1 = document.createElement("h1");
    h1.setAttribute("id", "title");
    h1.innerText = element.strMeal;
    console.log(element.strMeal);
    let img = document.createElement("img");
    img.setAttribute("id", "image");
    img.src = element.strMealThumb;
    let div2 = document.createElement("div");
    div2.setAttribute("id", "category");
    let p1 = document.createElement("p");
    p1.innerText = "Category :" + element.strCategory;
    let p2 = document.createElement("p");
    p2.innerText = "Area :" + element.strArea;
    let p3 = document.createElement("p");
    p3.innerText = "Meal Id :" + element.idMeal;
    let p4 = document.createElement("p");
    p4.innerText = "Tags :" + element.strTags;
    div2.append(p1, p2, p3, p4);
    let div3 = document.createElement("div");
    div3.setAttribute("id", "ingd");
    let p5 = document.createElement("p");
    p5.innerText = element.strIngredient1 + ":" + element.strMeasure1;
    let p6 = document.createElement("p");
    p6.innerText = element.strIngredient2 + ":" + element.strMeasure2;
    let p7 = document.createElement("p");
    p7.innerText = element.strIngredient3 + ":" + element.strMeasure3;
    let p8 = document.createElement("p");
    p8.innerText = element.strIngredient4 + ":" + element.strMeasure4;
    let p9 = document.createElement("p");
    p9.innerText = element.strIngredient5 + ":" + element.strMeasure5;
    let p10 = document.createElement("p");
    p10.innerText = element.strIngredient6 + ":" + element.strMeasure6;
    let p11 = document.createElement("p");
    p11.innerText = element.strIngredient7 + ":" + element.strMeasure7;
    let p12 = document.createElement("p");
    p12.innerText = element.strIngredient8 + ":" + element.strMeasure8;
    let p13 = document.createElement("p");
    p13.innerText = element.strIngredient9 + ":" + element.strMeasure9;
    let p14 = document.createElement("p");
    p14.innerText = element.strIngredient10 + ":" + element.strMeasure10;
    let p15 = document.createElement("p");
    p15.innerText = element.strIngredient11 + ":" + element.strMeasure11;
    let p16 = document.createElement("p");
    p16.innerText = element.strIngredient12 + ":" + element.strMeasure12;
    let p17 = document.createElement("p");
    p17.innerText = element.strIngredient13 + ":" + element.strMeasure13;
    div3.append(p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17);
    let div4 = document.createElement("div");
    div4.setAttribute("id", "instruct");
    let p18 = document.createElement("p");
    p18.innerText = element.strInstructions;
    div4.append(p18);
    let button = document.createElement("button");
    button.setAttribute("id", "button");
    button.innerText = "Click here to Watch Video";
    button.addEventListener("click", function () {
      window.location.href = element.strYoutube;
    });
    div.append(h1, img, div2, div3, div4, button);
    document.querySelector("#container").append(div);
  });
}
