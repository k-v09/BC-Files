var count = 0;
var inc = document.querySelector("#increment");
var dec = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
inc.addEventListener("mousedown", function(){ count++; setCounterText()});
// TODO: Add event listener to decrement button 
dec.addEventListener("mousedown", function(){ count--; setCounterText()});
