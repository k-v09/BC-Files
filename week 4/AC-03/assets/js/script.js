var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

site1El.children[0].textContent = "Site 1";
site1El.children[1].setAttribute("href", "https://google.com");
site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Write Your Code Below

let h4s = document.querySelectorAll("h4");
console.log(h4s);

h4s[0].setAttribute("style", "color:blue");
h4s[0].style.fontSize = "30px";
h4s[0].style.fontWeight = "bold";
h4s[1].setAttribute("style", "color:blue");
h4s[1].style.fontSize = "30px";
h4s[1].style.fontWeight = "bold";
h4s[2].setAttribute("style", "color:blue");
h4s[2].style.fontSize = "30px";
h4s[2].style.fontWeight = "bold";

let tle = document.querySelectorAll("h1");
tle[0].setAttribute("style", "margin:0");
tle[0].style.paddingLeft = "10px";