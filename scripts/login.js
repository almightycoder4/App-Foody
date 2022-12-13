import { navbar, status, showBar } from "./utility/modules.js";
let header = document.getElementById("header");
header.innerHTML = navbar();

//let let
if (status == 0) {
  let data = JSON.parse(localStorage.getItem("loginData"));
  document.querySelector("#loginbtn").addEventListener("click", checkUser);
  function checkUser(logindata) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("pass").value;
    if (data.length != 0) {
      data.filter(function (element) {
        if (element.username == username) {
          if (element.password == password) {
            alert("Welcome " + element.name);
            localStorage.setItem("status", 1);
            localStorage.setItem("name", element.name);
            window.location.href = "index.html";
          } else {
            alert("Invalid Password");
            localStorage.setItem("status", 0);
            window.location.href = "login.html";
          }
        }
      });
    } else {
      alert("Invalid Password");
      window.location.href = "login.html";
    }

    console.log(username + " " + password);
  }
  console.log(data);
} else {
  showBar();
  document.querySelector("#container").innerHTML =
    "You have already Logged In.. Please signout first!!";
}
