

function keydownAction(event) {
    // TODO: Complete keydown function
}

ku = true
function keyupAction() {
    var statText;
    if (ku) {
        statText = "KEYUP Event";
    }
    else {
        statText = "KEYDOWN Event";
    }
    document.querySelector("#status").textContent = statText;
}
  
document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);
