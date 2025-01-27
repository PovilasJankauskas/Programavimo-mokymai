console.log("================================");
console.log("====   Objektai 3 dalis uzduotys    =====");

console.log("====     1 uzduotis:     =====");
/*Susikurkite knygų objektų masyvą. Apie kiekvieną knygą 
į atskirus knygų objektus sudėkite norimą informaciją 
(bent 3 savybes). Į masyvą įdėkite bent 3 knygas. 
Visas šias knygas išsiveskite. Tuomet parodykite 
pirmą knygą. Antros knygos kažkurią savybę. */

let knygynas = [
  {
    knyga: "Poltava",
    puslapiuSkaicius: 458,
    kaina: 10.99,
  },
  {
    knyga: "Darko",
    puslapiuSkaicius: 258,
    kaina: 12.99,
  },
  {
    knyga: "Mano knyga",
    puslapiuSkaicius: 658,
    kaina: 19.99,
  },
];

console.log(knygynas);

console.log("Knyga kuria dabar skaitau :", knygynas[0]);
console.log("trecios knygos puslapiu skaicius :", knygynas[2].puslapiuSkaicius);

console.log("====     2 uzduotis:     =====");
/* Susikurkite prekių objektų masyvą ir jį užpildykite 
pasirinktais duomenimis. Išveskite visų prekių pavadinimus
 su kainomis ir dar kokiais nors atributais atskirose eilutėse.*/

let dviraciai = [
  {
    brendas: "Trek",
    tipas: "Gravel",
    remoTipas: "aliuminis",
    spalva: "zalia",
    kaina: 1200,
  },
  {
    brendas: "Giant",
    tipas: "MTB",
    remoTipas: "karboninis",
    spalva: "auksine",
    kaina: 2000,
  },
  {
    brendas: "Scott",
    tipas: "plentinis",
    remoTipas: "karboninis",
    spalva: "balta",
    kaina: 2499,
  },
];
console.log(dviraciai);

for (dviratis of dviraciai) {
  console.log(
    "Dviracio brendas:",
    dviratis.brendas,
    "Dviracio kaina:",
    dviratis.kaina,
    "eur",
    "dviracio spalva",
    dviratis.spalva
  );
}

console.log("====     3 uzduotis:     =====");

/* Susikurkite automobilių objektų masyvą ir 
užpildykite jį pasirinktais duomenimis. Išveskite
 kiekvieno automobilio pavadinimą, metus ir 
 paskaičiuotą jo amžių (dabartiniai metai - gamybos metai). */

let automobiliai = [
  {
    marke: "Audi ",
    gamybosMetai: 1992,
  },
  {
    marke: "BMW",
    gamybosMetai: 2006,
  },
  {
    marke: "Porsche",
    gamybosMetai: 2023,
  },
];
console.log(automobiliai);

let metaiDabar = new Date(Date.now()).getFullYear();
console.log(metaiDabar);
for (let automobilis of automobiliai) {
  console.log(
    "Automobilis",
    automobilis.marke,
    "pagamintas",
    automobilis.gamybosMetai,
    "ir jam yra",
    metaiDabar - automobilis.gamybosMetai,
    "metai"
  );
}
