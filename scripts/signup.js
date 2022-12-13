import { navbar } from "./utility/modules.js";
//console.log(navbar());
let header = document.getElementById("header");
header.innerHTML = navbar();
class createUser {
  constructor(name, username, password, email) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
let arr = JSON.parse(localStorage.getItem("loginData")) || [];
localStorage.setItem("loginData", JSON.stringify(arr));

document.querySelector("#submit").addEventListener("click", addUser);
function addUser() {
  let name = document.getElementById("name").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let add = new createUser(name, username, password, email);
  arr.push(add);
  localStorage.setItem("loginData", JSON.stringify(arr));
  window.location.href = "login.html";
  alert("Account Created Sucessfully...");
}
