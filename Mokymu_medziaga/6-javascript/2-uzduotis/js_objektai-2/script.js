console.log("================================");
console.log("====   Objektai 2 dalis uzduotys    =====");
console.log("====     1 uzduotis:     =====");
/* Susikurkite objektą informacijai apie knygyną saugoti. 
Į šį objektą sudėkite tokias savybes su reikšmėmis: 
pavadinimas, adresas, plotas (kv. m.), kiek turi knygų, 
darbo valandos, ar atidarytas. Išveskite šio knygyno 
objekto raktus su reikšmėmis. Tuomet išveskite visas 
knygyno savybes, kurių reikšmės yra ne string tipo 
(plotas, kiek turi knygų ir pan.).*/

let knygynas = {
  pavadinimas: "Vaga Gedimino.pr",
  plotas: 102,
  knyguSkaicius: 10267000,
  darboValandos: {
    nuo: 8.00,
    iki: 17.00
  },
  arAtidarytas: true,
};

for (let raktas in knygynas) {
  console.log("savybe", raktas, "reiksme:", knygynas[raktas]);

  if (typeof knygynas[raktas] !== "string") {
    console.log("not string:", raktas);
  }
}
console.log("====     2 uzduotis:     =====");
/* Susikurkite du objektus, dviejų studentų informacijai 
saugoti. Abiejuose objektuose sudėkite šias savybes su
 reikšmėmis: vardas ir pavardė, studijų programos 
 pavadinimas, pažymiai. Raskite abiejų studentų pažymių 
 vidurkius. Išveskite abiejų studentų informaciją, bei
  pažymių vidurkius. Raskite ir išveskite, kurio
   studento pažymių vidurkis yra didesnis ir išveskite
    jo vardą su pavarde. */


let studentas1 = {
  vardas: "Povilas",
  pavarde: "Jankauskas",
  studijuPrograma: "Greitijei JS mokymai",
  pazymiai: [4, 3, 5, 2, 7, 6, 4],
};

let studentas2 = {
  vardas: "Jonas",
  pavarde: "Jonauskas",
  studijuPrograma: "Greitiejei JS mokymai",
  pazymiai: [10, 8, 9, 7, 7, 6, 8],
};

let pazymiuSuma = 0;

for (let pazymys of studentas1.pazymiai) {
  pazymiuSuma += pazymys;
}

console.log(studentas1);
studentas1.vidurkis = (pazymiuSuma / studentas1.pazymiai.length).toFixed();

console.log(studentas2);
let pazymiuSuma2 = 0;

for (let pazymys of studentas2.pazymiai) {
  pazymiuSuma2 += pazymys;
}
studentas2.vidurkis = (pazymiuSuma2 / studentas2.pazymiai.length).toFixed();

console.log(' Studento', studentas1.vardas, studentas1.pavarde,'vidurkis', studentas1.vidurkis, 'o', 
    ' Studento', studentas2.vardas, studentas2.pavarde,'vidurkis', studentas2.vidurkis,
);

if (studentas1.vidurkis > studentas2.vidurkis) {
    console.log(' Studento', studentas1.vardas, studentas1.pavarde,'vidurkis didesnis');
} else {
    console.log(' Studento', studentas2.vardas, studentas2.pavarde,'vidurkis didesnis');
} 


