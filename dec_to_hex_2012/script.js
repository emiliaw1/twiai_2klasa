// liczby
const liczbaD = document.querySelector("#liczbaD");
const liczbaH = document.querySelector("#liczbaH");
// console.log(liczba1 + liczba2);
// liczba1 = liczba1 + "";
// liczba2 = liczba2 + "";
// inne sposoby:
// liczba1 = liczba1.toString();
// liczba1 = liczba2.toString();

// liczba1 = String(liczba1);
// liczba1 = String(liczba2); !!!!!!

//console.log(String(liczba1) + String(liczba2));


function zamiana(){
    let D = liczbaD.value;
    let hex = [];
    let H = "";
    for(let i = 0; D!=0; i++){
        switch(D % 16){
        case 10:
            hex[i] = "A";
            break;
        case 11:
            hex[i] = "B";
            break;
        case 12:
            hex[i] = "C";
            break;
        case 13:
            hex[i] = "D";
            break;
        case 14:
            hex[i] = "E";
            break;
        case 15:
            hex[i] = "F";
            break;
        default:
            hex[i] = D % 16;
        }
        D = Math.floor(D / 16);
    }
    console.log(hex);
    let j=hex.length-1;
    console.log(hex,j);
    for(j ; j>=0; j--){
        H += hex[j];
        console.log(H, hex[i]);
    }
    liczbaH.innerHTML= H;
}


















// teksty

//let tekst1 = "Glupie nerdy🤓🤓🤓🤓🤓";
//let tekst2 = "To wszystko wina buciarzy🤓🤓🤓🤓🤓";

// const teksty = document.querySelector("#teksty")
// const winy = document.querySelector("#winy")

// console.log(tekst1);
// console.log(tekst2);

//function zoo(){
  //  let ilewin = winy.value;
    //for (let i=1; i<=ilewin; i++){
      //  tekst2 += `To wszystko wina buciarzy🤓🤓🤓🤓🤓`; 
    //}
    //teksty.innerHTML = tekst1+"<br/>"+tekst2;
//}


//skrocona wersja: document.getElementById("teksty").innerHTML=
