const r = document.querySelector("#r");
const g = document.querySelector("#g");
const b = document.querySelector("#b");

const kolor = document.querySelector("#kolor")

console.log(r, red);
r.addEventListener("input", function() {
    red.innerHTML = r.value; 
    pokaz();

}
)

console.log(g, green);
g.addEventListener("input", function() {
    green.innerHTML = g.value; 
    pokaz();
}
)

console.log(b, blue);
b.addEventListener("input", function() {
    blue.innerHTML = b.value; 
    pokaz();
}
)

function pokaz() {
    let R = r.value;
    let G = g.value;
    let B = b.value;
    console.log(R,G,B);
    kolor.style = `background-color: rgb(${R},${G},${B});`;
}
