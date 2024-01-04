// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var e1 = (x < 25);
var e2 = (x > 50);

// Write Your JavaScript Code Here
if (e1 && e2) {
    console.log("YEAHHHHH BABYYY (they're both true)")
}
else if((e1 || e2) && e1 != e2) {
    console.log("Okay okay we're getting somewhere (just one of 'em)")
}
else {
    console.log("Oh no\nNONONONONO SILLY (do better)")
}