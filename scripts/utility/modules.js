let navbar = () => {
  return `
  <div id="navbar">
  <div id="navbar1">
    <img
      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-app-icon-food-explorer-design-template-8ae900e41ccbc0a2e1b48a85d239e389_screen.jpg?ts=1585237320"
      width="100px"
      height="100px"
      alt=""
    />
  </div>

  <div id="navbar2">
    <a id="link" href="index.html">Home</a>
    <a id="link" href="recpofday.html">Recipie Of Day</a>
    <a id="login" href="login.html">Login</a>
    <a id="signup" href="signup.html">SignUP</a>
    <a id="hiddenUser" href="index.html"></a>
    <a id="hiddenSgout" href="login.html">Sign Out</a>
    
  </div>
</div>
    `;
};

let fetchdata = async (input) => {
  if (input == "") {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    let responce = await fetch(url);
    let data = await responce.json();
    return data;
  } else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${input}`;
    let responce = await fetch(url);
    let data = await responce.json();
    return data;
  }
};
let randomdata = async (input) => {
  const url = input;
  let responce = await fetch(url);
  let data = await responce.json();
  return data.meals;
};
let status = localStorage.getItem("status");
let name = localStorage.getItem("name");

function showBar() {
  if (status == 1) {
    document.getElementById("hiddenUser").id = "showUser";
    document.getElementById("showUser").innerText = name;
    document.getElementById("hiddenSgout").id = "showSgout";
    document.getElementById("login").id = "hiddenl";
    document.getElementById("signup").id = "hiddensgu";
    document.querySelector("#showSgout").addEventListener("click", signout);
    function signout() {
      localStorage.setItem("name", "");
      localStorage.setItem("status", 0);
      document.getElementById("showUser").id = "hiddenUser";
      document.getElementById("showSgout").id = "hiddenSgout";
      document.getElementById("hiddenl").id = "login";
      document.getElementById("hiddensgu").id = "signup";
    }
  }
}
export { navbar, fetchdata, status, showBar, randomdata };
