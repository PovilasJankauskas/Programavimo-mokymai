console.log("================================");
console.log("====   Funkcijos 2 dalis uzduotys    =====");

console.log("====     1 uzduotis:     =====");
/* Sukurkite funkciją pasisveikinimui, šiai funkcijai 
per argumentus perduokite vardą, funkcijoje išveskite
 tekstą labas ir gautą vardą. Sukurkite kitą funkciją,
  kuri irgi per argumentus gautų vardą, tačiau pasakytų 
  'viso gero' ir tą patį vardą. Ne funkcijose susikurkite
   kintamąjį vardui saugoti ir įrašykite vardą. 
   Iškvieskite abi funkcijas, perduodant kintamąjį joms.*/

function pasveikinimas(vardas) {
  console.log(`Labas ${vardas}`);
}

function atsisveikinimas(vardas) {
  console.log(`Ciau ${vardas}`);
}

pasveikinimas("Povilai");
atsisveikinimas("Povilai");

let vardas = "Jonai";

pasveikinimas(vardas);
atsisveikinimas(vardas);

console.log("====     2 uzduotis:     =====");
/* Sukurkite funkciją, kuriai perduotumėte du skaičius.
 Ši funkcija turi rasti kuris skaičius yra didesnis ir 
 išvesti gautą atsakymą, o jei skaičiai lygūs - tuomet 
 išvesti, kad skaičiai lygūs. Iškvieskite šią funkciją 
 keletą kartų, duodant skirtingus skaičius.*/

function numberiai(a, b) {
  if (a > b) {
    console.log(`skaicius a ${a} daugiau nei skaicius b ${b}`);
  } else if (a < b) {
    console.log("skaicius b", b, "daugiau uz skaiciu a,", a);
  } else {
    console.log(`skaiciai a ${a} ir ${b} b yra lygus`);
  }
}

let a = Math.floor(Math.random() * 20) + 1;
let b = Math.floor(Math.random() * 20) + 1;

console.log("skaicius a", a);
console.log(`skaicius b ${b}`);

for (let i = 0; i < 4; i++) {
  console.log(numberiai(a, b));
}

console.log("====     3 uzduotis:     =====");
/*Sukurkite funkciją, kuri per argumentus gautų automobilių
  duomenis (markė, modelis, gamybos metai, darbinis tūris).
   Ši funkcija turėtų šiuos duomenis išvesti kaip nors gražiai 
   formatuotai. Iškvieskite šią funkciją du kartus, perduodant 
   skirtingus duomenis jai. */

function auto(marke, modelis, gamybos_metai, darbinis_turis) {

  console.log("Marke:", marke);
  console.log("Modelis:", modelis);
  console.log("Gamybos metai:", gamybos_metai);
  console.log(`Darbinis turis: ${darbinis_turis}`);
}

auto("Audi", 100, 1982, 2.5);
console.log("--------------------------");
auto("SAAB", 95, 2011, 2.8);

console.log("====     4 uzduotis:     =====");

/*Sukurkite funkciją sumai skaičiuoti, ši funkcija per argumentus
 turėtų gauti du skaičius, bei išvesti patį veiksmą kartu su
  atsakymu (pvz 7 + 5 = 12). Sukurkite tokias pačias funkcijas 
  skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną funkciją,
   kuri sugeneruotų du atsitiktinius skaičius, bei iškviestų kitas 4 funkcijas, 
   perduodant joms sugeneruotus skaičius. Šią bendrąją funkciją 
   iškvieskite keletą kartų. */

function sudetis(sk1, sk2) {
  let rezultatas = sk1 + sk2;
  console.log(`${sk1} + ${sk2} = ${rezultatas}`);
}

function skirtumas(sk1, sk2) {
  let rezultatas= sk1 - sk2;
  console.log(`${sk1} - ${sk2} = ${rezultatas}`);
}

function dalmuo(sk1, sk2) {
  let rezultatas = (sk1 / sk2).toFixed(0);
  console.log(`${sk1} / ${sk2} = ${rezultatas}`);
}

function sandauga(sk1, sk2) {
  let rezultatas = sk1 * sk2;
  console.log(`${sk1} * ${sk2} = ${rezultatas}`);
}

sudetis(12, 4);
skirtumas(12, 4);
dalmuo(12, 4);
sandauga(12, 4);

console.log('-------------------------------------');
let betKokie = Math.floor(Math.random()* 10) +1;
let betKokie2 = Math.floor(Math.random()* 100) +1;

for ( let i=0; i <3; i++) {
sudetis(betKokie, betKokie2);
skirtumas(betKokie, betKokie2);
dalmuo(betKokie, betKokie2);
sandauga(betKokie, betKokie2);
console.log('-------------');
};