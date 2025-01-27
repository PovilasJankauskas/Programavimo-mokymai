console.log("==============================");
console.log("===== Array (masyvas) 3 dalis ====");
console.log("====     1 uzduotis:     =====");

let studentai = [
  "Jonas",
  "Petras",
  "Juste",
  "Lina",
  "Rasa",
  "Antanas",
  "Rytis",
];

for (let indeksas in studentai) {
  console.log("indeksas", indeksas, "studentas", studentai[indeksas]);
}
console.log("====     2 uzduotis:     =====");

let produktai = [
  "Vodkė",
  "lašiniai",
  "duona",
  "mineralinis",
  "šampė",
  "traškučiai",
  "limonadas",
  "sasyskos",
];
console.log("Krepselis", produktai.length);
for (let indeksas in produktai) {
  console.log("-", produktai[indeksas]);
}

console.log("====     3 uzduotis:     =====");

let pazymiai = [4, 6, 7, 5, 8];
let suma = 0;

for (let sk of pazymiai) {
  suma += sk;
}
console.log("Pazymiai", pazymiai);
console.log("Vidurkis", suma / pazymiai.length);

console.log("====     4 uzduotis:     =====");

let kilometrai = [45, 49, 38, 67, 34, 52, 40];
let daugiau_km = 0;

console.log(kilometrai);
for (let km of kilometrai) {
  if (km > 39);
  console.log(km);
}

console.log("====     5 uzduotis:     =====");

let markes = [
  "audi",
  "Mersas",
  "Citrina",
  "China šlamštas",
  "SuBaru",
  "Nissan",
];

for (let marke of markes) {
  console.log(marke);
}

console.log("******** while ********");
let m = 0;
let viso_raidziu = 0;

while (m < markes.length) {
  let raidziu_skaicius = markes[m].length;
  viso_raidziu += raidziu_skaicius;
  console.log(markes[m], "sudaryta is", raidziu_skaicius);
  m++;
}

console.log("====     6 uzduotis:     =====");

let likuciai = [74, 54, 32];
let perDienaPerka = 5;

for (let likutis of likuciai) {
  console.log(
    likutis + "vnt uzteks mazdaug tiek d:" + Math.round(likutis / perDienaPerka)
  );
}

console.log("====     7 uzduotis:     =====");

let studentas = [];
let pazymiuSuma = 0;
let vidurkis = 0;

for (pazymys in studentas) {
  let pazymys = Math.floor(Math.random() * 10) + 1;
  studentas.push(pazymys);

  pazymiuSuma += studentas[i];
  vidurkis = pazymiuSuma / studentas.length;

  if (pazymys <= 5) {
    console.log("Pazimys neigiamas", studentas[i]);
  }
}

console.log("Pazymiai", studentas);
console.log("Vidurkis", vidurkis);

console.log("====     8 uzduotis:     =====");

let pazymiai2 = [3, 5, 8, 9, 7, 4, 7, 8, 4, 10, 10];
suma2 = 0;
vidurkis2 = 0;

let pazymiai3 = [4, 4, 8, 9, 6, 10, 7, 6, 8, 10, 10];
suma3 = 0;
vidurkis3 = 0;

for (let pazymys2 of pazymiai2) {
  suma2 += pazymys2;
}
vidurkis2 = suma2 / pazymiai2.length;

for (let pazymys3 of pazymiai3) {
  suma3 += pazymys3;
}
vidurkis3 = suma3 / pazymiai3.length;

console.log(`Pirmo studento pazymiai: ${pazymiai2}`);
console.log(`Pirmo studento vidurkis: ${vidurkis2}`);
console.log(`Antro studento pazymiai: ${pazymiai3}`);
console.log(`Antro studento vidurkis: ${vidurkis3}`);

if (vidurkis2 > vidurkis3) {
  console.log(
    `Pirmo studento vidurkis didesnis: ${parseFloat(vidurkis2).toFixed(
      2
    )} > ${parseFloat(vidurkis3).toFixed(2)}`
  );
} else {
  console.log(
    `Antro studento vidurkis didesnis: ${parseFloat(vidurkis3).toFixed(
      2
    )} > ${parseFloat(vidurkis2).toFixed(2)}`
  );
}
