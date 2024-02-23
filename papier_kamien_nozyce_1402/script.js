const papier = document.querySelector('#papier');
const kamien = document.querySelector('#kamien');
const nozyce = document.querySelector('#nozyce');
const spock = document.querySelector('#spock');
const jaszczurka = document.querySelector('#jaszczurka');
const komputer = [papier, kamien, nozyce, spock, jaszczurka];
let licznik = 0;
let wynik_G = document.querySelector('.wynik_G');
let wynik_K = document.querySelector('.wynik_K');

papier.addEventListener('click', papierG())
kamien.addEventListener('click', kamienG())
nozyce.addEventListener('click', nozyceG())
spock.addEventListener('click', spockG())
jaszczurka.addEventListener('click', jaszczurkaG())



let wynik_gg = 0;
let wynik_kk = 0;
let wybor_g = "";


function wynik() {
    if (i == 10) {
        if (wynik_kk < wynik_gg){
            alert('Wygrana');
        }
        else if (wynik_kk > wynik_gg) {
            alert('Przegrana');
        }
        else{
        alert('Remis');
        }
    }
}

function papierG() {
    let losowa = Math.floor(Math.random() * 5);
    let wybor_k = komputer[losowa];
    if(wybor_k=="kamien" || wybor_k=="spock") {
        wynik_gg++;
        licznik++;
    }
    else if (wybor_k=="nozyce" || wybor_k=="jaszczurka") {
        wynik_kk++;
        licznik++;
    }
    else {
        licznik++;
    }
    console.log(losowa, licznik);
    //napis();
}

function kamienG() {
    let losowa = Math.floor(Math.random() * 5);
    let wybor_k = komputer[losowa];
    if(wybor_k=="papier" || wybor_k=="spock") {
        wynik_kk++;
        licznik++;
    }
    else if (wybor_k=="nozyce" || wybor_k=="jaszczurka") {
        wynik_gg++;
        licznik++;
    }
    else {
        licznik++;
    }
}

function nozyceG() {
    let losowa = Math.floor(Math.random() * 5);
    let wybor_k = komputer[losowa];
    if(wybor_k=="kamien" || wybor_k=="spock"){
        wynik_kk++;
        licznik++;
    }
    else if (wybor_k=="papier" || wybor_k=="jaszczurka"){
        wynik_gg++;
        licznik++;
    }
    else {
        licznik++;
    }
}

function spockG() {
    let losowa = Math.floor(Math.random() * 5);
    let wybor_k = komputer[losowa];
    if(wybor_k=="kamien" || wybor_k=="nozyce"){
        wynik_gg++;
        licznik++;
    }
    else if (wybor_k=="papier" || wybor_k=="jaszczurka"){
        wynik_kk++;
        licznik++;
    }
    else {
        licznik++;
    }
}

function jaszczurkaG() {
    let losowa = Math.floor(Math.random() * 5);
    let wybor_k = komputer[losowa];
    if(wybor_k=="kamien" || wybor_k=="nozyce"){
        wynik_kk++;
        licznik++;
    }
    else if (wybor_k=="papier" || wybor_k=="spock"){
        wynik_gg++;
        licznik++;
    }
    else {
        licznik++;
    }
}

function napis(){
    wynik_G.innerHTML=wynik_gg;
    wynik_K.innerHTML=wynik_kk;
}
