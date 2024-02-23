const wiersze = document.querySelector('#wiersze');
const kolumny = document.querySelector('#kolumny');
const tabela = document.querySelector('#tabela');
const parzyste = document.querySelector('#parzysta');
const nieparzyste = document.querySelector('#nieparzysta')
let ilew = 0;
let ilek = 0;
let los = 0;


function generuj(){
    let wynik = '<table>';
    ilew = wiersze.value; 
    ilek = kolumny.value;
    let ilep = 0;
    let ilenp = 0; 
    for(let i=1; i<=ilew; i++){
        wynik += '<tr>';

        for(let j=1; j<=ilek; j++){
            los = Math.floor(Math.random()*100);
            
            if(los%2==0){
                wynik += `<td class=parzysta>${los}</td>`;
                ilep++
            }
            else{
                wynik += `<td class=nieparzysta>${los}</td>`;
                ilenp++
            }
        
        }
        
        wynik += '</tr>'
    }
wynik += '</table>';
tabela.innerHTML = wynik;
parzyste.innerHTML = ilep;
nieparzyste.innerHTML = ilenp;
}
wiersze.addEventListener("input", generuj);
kolumny.addEventListener("input", generuj);
