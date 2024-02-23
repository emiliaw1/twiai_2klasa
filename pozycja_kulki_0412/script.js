const wartoscX = document.querySelector('#wartoscX');
const suwakX = document.querySelector('#suwakX');
const wartoscY = document.querySelector('#wartoscY');
const suwakY = document.querySelector('#suwakY');
const kulka = document.querySelector('#kulka');

console.log(suwakX, suwakY, wartoscX, wartoscY, kulka);

function pozycja(){
    let ileX = suwakX.value;
    let ileY = suwakY.value;
    wartoscX.innerHTML = ileX;
    wartoscY.innerHTML = ileY;
    let pozycjaXY = `margin-top: ${ileY}px; margin-left: ${ileX}px;`
    kulka.style = pozycjaXY;
}

suwakX.addEventListener("input", pozycja);
suwakY.addEventListener("input", pozycja);
