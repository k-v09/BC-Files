var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";
let foods = ["pizza", "pasta", "pizza pie", "pasta cake"];

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");
listEl.setAttribute("style", "background-color:black");
listEl.style.padding = "20px";

li1.setAttribute("style", "color:white");
li1.style.padding = "5px";
li1.style.marginLeft = "35px";
li1.style.backgroundColor = "green";
li2.setAttribute("style", "color:white");
li2.style.padding = "5px";
li2.style.marginLeft = "35px";
li2.style.backgroundColor = "blue";
li3.setAttribute("style", "color:white");
li3.style.padding = "5px";
li3.style.marginLeft = "35px";
li3.style.backgroundColor = "purple";
li4.setAttribute("style", "color:white");
li4.style.padding = "5px";
li4.style.marginLeft = "35px";
li4.style.backgroundColor = "brown";


// TODO: Add ordered list items containing four favorite foods
li1.textContent = foods[0];
li2.textContent = foods[1];
li3.textContent = foods[2];
li4.textContent = foods[3];
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
