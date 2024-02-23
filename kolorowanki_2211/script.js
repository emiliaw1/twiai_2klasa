const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const kolor = document.getElementById("kolor");

console.log(red, green, blue, kolor);

function pokaz() {
    let R = red.value;
    let G = green.value;
    let B = blue.value;
}
if(R>255||G>255||B>255) {
    alert("Nie");
}
else{
    kolor.style = `background-color: rgb(${R},${G},${B})`;
}
