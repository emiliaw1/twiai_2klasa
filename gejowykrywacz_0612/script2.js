const pytanie = document.querySelector(".pytanie");
console.log(pytanie);
function gej(){
    let x = Math.floor(Math.random()*1000 + 1);
    let y = Math.floor(Math.random()*500 + 1);
    pytanie.style = `margin-top: ${y}px; margin-left: ${x}px`
}
pytanie.addEventListener('mouseover', gej())
