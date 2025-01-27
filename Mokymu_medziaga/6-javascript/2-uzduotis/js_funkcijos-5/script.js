console.log("================================");
console.log("====   Funkcijos 5 dalis uzduotys    =====");

console.log("====     1 uzduotis:     =====");
/* Susikurkite funkciją kuri priimtų skaičių masyvą per argumentus. Ši funkcija turėtų rasti duotųjų skaičių sumą ir grąžinti gautą atsakymą. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite juos duomenimis. Iškvieskite turimą funkciją du kartus, jai abu kartus perduodant skirtingą masyvą. Gautus atsakymus išveskite. Taip pat, raskite kuri suma gavosi didesnė ir išveskite atsakymą.*/

function skaiciuSuma(masyvas) {
  let suma = 0;
  for (let skaicius of masyvas) {
    suma += skaicius;
  }
  return suma;
}

console.log("---------------1 masyvas-----------------------");
let skaiciai = [];
for (i = 0; i < 6; i++) {
  skaiciai.push(Math.floor(Math.random() * 10) + 1);
}
let suma = skaiciuSuma(skaiciai);
console.log(skaiciai);
console.log("suma", suma);

console.log("---------------2 masyvas-----------------------");

let skaiciai2 = [];
for (i = 0; i < 6; i++) {
  skaiciai2.push(Math.floor(Math.random() * 10) + 1);
}
console.log(skaiciai2);
let suma2 = skaiciuSuma(skaiciai2);
console.log("suma", suma2);

console.log("---------didesne suma-------");
if (suma > suma2) {
  console.log(` Pirma skaičių suma didesne, ${suma}`);
} else if (suma < suma2) {
  console.log(`Antra skaičių suma didesnė, ${suma2}`);
} else {
  console.log(`skaičiai lygūs`);
}

console.log("====     2 uzduotis:     =====");
/* Susikurkite funkciją kuri per argumentus priimtų žodžių masyvą. Ji turėtų rasti ir grąžinti ilgiausią žodį masyve. Už funkcijos ribų susikurkite žodžių masyvą. Iškvieskite funkciją perduodant jai žodžių masyvą. Gautą atsakymą išveskite, taip pat, nurodykite šio žodžio ilgį.*/

function rastiIlgiausiaZodi(zodMasyvas) {
  let ilgiausiasZodis = "";
  for (let zodis of zodMasyvas) {
    if (zodis.length > ilgiausiasZodis.length) {
      ilgiausiasZodis = zodis;
    }
  }
  return ilgiausiasZodis;
}

let zodziai = ["Lietuva", "yra", "šalis"];
let ilgiausias = rastiIlgiausiaZodi(zodziai);

console.log(
  `Iš visų žodžių ${zodziai} ilgiausias yra ${ilgiausias}, o jį sudaro ${ilgiausias.length} raidės`
);

console.log("====     3 uzduotis:     =====");

/* Susikurkite funkciją kuri per argumentus priimtų pažymių masyvą. Ji turėtų patikrinti ar visi pažymiai teigiami: jei visi teigiami turėtų grąžintų true kaip atsakymą, o jei yra bent vienas neigiamas - false. Susikurkite du pažymių masyvus. Iškvieskite šią funkciją du kartus, abu kartus perduodant skirtingus masyvus. Gautus atsakymus paverskite į tekstą (jeigu gavote true - išveskite tekstą 'visi studento pažymiai teigiami', jei false - 'studentas turi bent vieną neigiamą pažymį'). Šiam iškonvertavimui iš true/false į tekstą galite pamėginti pasikurti atskirą funkciją, jai perduoti kitos funkcijos atsakymą.*/

function arVisiTeigiami(pazMasyvas) {
  //  geresnis sprendimas
  return pazMasyvas.every((pazymys) => pazymys > 5);
  // for (let pazymys of pazMasyvas) {
  //   if (pazymys < 5) {
  //     return false;
  //   }
  // }
  // return true;
}
let pazymiai = [7, 6, 8, 10, 8];
let pazymiai2 = [4, 6, 10, 6, 9, 7, 8];

let trueOrFalce = arVisiTeigiami(pazymiai);
let trueOrFalce2 = arVisiTeigiami(pazymiai2);

console.log(` pazymiai ${pazymiai} vien teigiami ${trueOrFalce}`);
console.log(`pazymiai ${pazymiai2} vien teigiami ${trueOrFalce2}`);

if (trueOrFalce) {
  console.log("Visi studento pažymiai teigiami");
} else {
  console.log("Studentas turi neigiamą pažymį");
}

if (trueOrFalce2) {
  console.log("Visi studento pažymiai teigiami");
} else {
  console.log("Studentas turi neigiamą pažymį");
}
