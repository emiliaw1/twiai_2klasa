let wielkosc = prompt("Podaj wielkość tablicy:");
let tablica = [];
let trojki = 0;
let parzyste = 0;
let nieparzyste = 0;
let podzielnePrzez3 = 0;

//1
for(let i = 0; i<wielkosc; i++) {
    tablica[i] = Math.floor(Math.random()*10);
    console.log(tablica[i]);
}

//2
console.log(Math.min(...tablica));
console.log(Math.max(...tablica));

//3
let suma = 0;
for(let i = 0; i < tablica.length; i++) {
  suma += tablica[i];
}
const average = suma / tablica.length;
console.log(average);

//4
for(let i = 0; i < tablica.length; i++) {
    if (tablica[i] == 3){
        trojki++;
    }
}
console.log(trojki);

//5
tablica.sort((a,b)=>a-b);
console.log(tablica);

//6
let mediana = Math.floor(tablica.length/2);
if(tablica%2==0){
    console.log((tablica[mediana-1]+tablica[mediana]/2));
}
else{
    console.log(tablica[mediana]);
}

//7
console.log(tablica.slice(0,3));
console.log(tablica.slice(-3));

//8
for(let i = 0; i<tablica.length; i++){
    tablica[i] *= tablica[i];
}
console.log(tablica);

//9
for(let i = 0; i<tablica.length; i++){
    if(tablica[i]%2==0){
        parzyste++;
    }
    if(tablica[i]%2!=0){
        nieparzyste++;
    }
}
console.log(parzyste);
console.log(nieparzyste);

//10
for(let i=0; i<tablica.length; i++){
    if(tablica[i]%3==0){
        podzielnePrzez3++
    }
}
console.log(podzielnePrzez3);
