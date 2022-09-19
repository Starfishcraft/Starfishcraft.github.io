let number = 0;
function increment() {
    document.getElementById("number").innerHTML = number;
    number++;
}
function reset() {
    number = 0;
    document.getElementById("number").innerHTML = number;
}
var slider = document.getElementById("range");
let number2 = 0;
slider.oninput = function() {
    number2 = this.value;
    document.getElementById("range2").style.width = number2 + "px";
}
setInterval(function changeWidth() {
    number2 = document.getElementById("range3");
    document.getElementById("range2").style.width = number2 + "px";
}, 1000)
