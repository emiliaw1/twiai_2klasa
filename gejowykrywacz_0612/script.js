const kulka = document.querySelector("#kulka");
console.log(kulka);
function mrowka(){
    let x = Math.floor(Math.random()*1000 + 1);
    let y = Math.floor(Math.random()*500 + 1);
    kulka.style = `margin-top: ${y}px; margin-left${x}px`
}
kulka.addEventListener('mouseover', mrowka())
