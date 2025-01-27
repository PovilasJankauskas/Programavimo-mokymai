console.log("================================");
console.log("====   Funkcijos 1 dalis uzduotys    =====");

console.log("====     1 uzduotis:     =====");
/* Sukurkite funkciją, kuri išvestų jūsų vardą ir kodėl
 pasirinkote programavimą. Iškvieskite šią funkciją tris kartus.*/

function labas() {
  console.log("Povilas");
  console.log("Norejau isbandyti kazka naujo");
}
labas();

console.log("====     2 uzduotis:     =====");
/* Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį.
 Iškvieskite šią funkciją 5 kartus.*/

function eilerastis() {
  console.log("mano");
  console.log("batai");
  console.log("buvo");
  console.log("du");
  console.log("vienas");
  console.log("----------------------------");
}
eilerastis();
eilerastis();
eilerastis();
eilerastis();
eilerastis();

console.log("====     3 uzduotis:     =====");
/* Sukurkite tris funkcijas, kur kiekviena išvestų skirtingus tekstus.
 Iškvieskite visas tris funkcijas po vieną kartą.*/

function labas() {
  console.log("labas");
}

function kaip() {
  console.log("kaip");
}
function sekasi() {
  console.log("sekasi");
}

labas();
kaip();
sekasi();

console.log("====     4 uzduotis:     =====");

/* Sukurkite dvi funkcijas, kur vienoje būtų viena teksto 
eilutėje, kitoje kita. Sukurkite trečią funkciją, kuri 
iškviestų pirmas dvi funkcijas. Iškvieskite šią trečiąją 
funkciją už visų funkcijų ribų.*/

function labas() {
  console.log("Labas");
}

function ne_kazka() {
  console.log("ne kazka, sunku");
}
function labukas() {
  labas();
  ne_kazka();
}

labukas();

console.log("====     5 uzduotis:     =====");

/* Sukurkite funkciją, kurios viduje sugeneruotumėte
 du atsitiktinius skaičius. Funkcijoje suskaičiuokite
  ir išveskite šių dviejų skaičių sumą, kartu išvedant
   ir patį atliekamą veiksmą (pvz 7 + 2 = 9).
    Iškvieskite šią funkciją keletą kartų. */

function skaiciai() {
  let skaicius1 = Math.floor(Math.random() * 10) + 1;
  let skaicius2 = Math.floor(Math.random() * 10) + 1;

  let suma = skaicius1 + skaicius2;

  console.log(skaicius1, "+", skaicius2, "=", suma);
}

for (let i = 0; i < 7; i++) {
  skaiciai();
}

console.log("====    6 uzduotis:     =====");

/*Sukurkite ir iškvieskite funkciją, kurioje kintamuosiuose 
būtų saugoma informacija apie policininką (vardas, pavardė, 
amžius, alga, etatas, specializacija). Išveskite šią informaciją 
suformatuotai (pavyzdžiui įterpkite į sakinį, ar išveskite sąrašu ar pan.). */

function policininkas() {
  let policininkas = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    amzius: 30,
    alga: 1200,
    etatas: "Pilnas",
    specializacija: "tyrejas",
  };
  let premija = "400-800 eur";

  console.log(`Vardas: ${policininkas.vardas}`);
  console.log(`Pavarde: ${policininkas.pavarde}`);
  console.log(`Amzius: ${policininkas.amzius}`);
  console.log(`Etatas: ${policininkas.etatas}`);
  console.log(`Specializacija: ${policininkas.specializacija}`);
  console.log(`Atlyginimas: ${policininkas.alga} eur`);
  console.log(`Premija: ${premija}`);
}
policininkas();

console.log("====    7 uzduotis:     =====");

/* Sukurkite funkciją, kuri išvestų 10 atsitiktinių 
skaičių vienoje eilutėje, skaičius atskiriant tarpu. \
Šią funkciją iškvieskite 5 kartus.*/
// lektoriaus sprendimas gerokai greitesnis ir trumpesnis

function netyciukai() {
  let skaicius3 = Math.floor(Math.random() * 10) + 1;
  let skaicius4 = Math.floor(Math.random() * 10) + 1;
  let skaicius5 = Math.floor(Math.random() * 10) + 1;
  let skaicius6 = Math.floor(Math.random() * 10) + 1;
  let skaicius7 = Math.floor(Math.random() * 10) + 1;
  let skaicius8 = Math.floor(Math.random() * 10) + 1;
  let skaicius9 = Math.floor(Math.random() * 10) + 1;
  let skaicius10 = Math.floor(Math.random() * 10) + 1;

  
  console.log(`skaicius ${skaicius3} 
    skaicius ${skaicius4} 
    skaicius ${skaicius5} 
    skaicius ${skaicius6} 
    skaicius ${skaicius7} 
    skaicius ${skaicius8} 
    skaicius ${skaicius9} 
    skaicius ${skaicius10} `);
}

for (let i = 0; i < 5; i++) {
  netyciukai();
}

console.log("====    8 uzduotis:     =====");
/* Sukurkite funkciją, kuri išvestų atsitiktinį skaičių.
 Už funkcijos ribų sukurkite ciklą, kurį būtų 
 vykdomas 10 kartų. Iškvieskite sukurtą funkciją cikle.
  Turėtumėte pamatyti 10 atsitiktinių skaičių.*/

function randomsk() {
  let skaicius3 = Math.floor(Math.random() * 10) + 1;

  console.log(`${skaicius3}`);
}
for (let i = 0; i < 10; i++) {
  randomsk();
}
