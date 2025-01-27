console.log("================================");
console.log("====   Objektai 5 dalis uzduotys    =====");

console.log("====     1 uzduotis:     =====");
/* Susikurkite studentų objektų masyvą, kur apie kiekvieną
 studentą būtų žinoma ši informacija: vardas ir pavardė,
  amžius, pažymiai, studijų programa, kursas. Kiekvieną 
  studentą išveskite taip: pirmoje eilutėje visi studento
   duomenys išskyrus jo pažymius, antroje eilutėje jo pažymiai,
    trečioje jo pažymių vidurkis su prierašu 'pažymių vidurkis'.
     Išvedus visus studentus dėkite brūkšnį (pvz.: -----) 
     ir išveskite bendrą visų studentų pažymių vidurkį.*/

let studentai = [
  {
    vardas: "Povilas",
    pavarde: "Povilaitis",
    amzius: 39,
    pazymiai: [4, 5, 6, 3, 4, 2, 7],
    studijuPrograma: "Greitieji JS mokymai",
    kursas: 1,
  },
  {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    amzius: 20,
    pazymiai: [8, 6, 6, 5, 9, 5, 7],
    studijuPrograma: "Greitieji JS mokymai",
    kursas: 1,
  },
  {
    vardas: "Rimas",
    pavarde: "Rimaitis",
    amzius: 29,
    pazymiai: [6, 7, 6, 8, 9, 2, 7],
    studijuPrograma: "Greitieji JS mokymai",
    kursas: 1,
  },
  {
    vardas: "Ieva",
    pavarde: "Ievaite",
    amzius: 32,
    pazymiai: [9, 9, 10, 7, 8, 8, 7],
    studijuProgama: "Greitieji JS mokymai",
    kursas: 1,
  },
];

let bendrasVidurkis = 0;

for (let studentas of studentai) {
  console.log("studentas (-e):", studentas);
  console.log("studento (-es) pazymiai: ", studentas.pazymiai);
  let suma = 0;
  for (let pazymiai of studentas.pazymiai) {
    suma += pazymiai;
  }
  let vidurkis = Math.round(suma / studentas.pazymiai.length);
  bendrasVidurkis += vidurkis;

  console.log(" pazymiu vidurkis:", vidurkis);

  console.log("---------------------------");
}
console.log(
  "visu studentu pazymiu vidurkis: ",
  bendrasVidurkis / studentai.length
);

console.log("====     2 uzduotis:     =====");
/* Susikurkite parduotuvės objektą, kuriame būtų ši informacija: 
pavadinimas, adresas, darbuotojų kiekis, prekių objektų 
masyvas. Apie kiekvieną prekę parduotuvėje žinoma ši informacija:
pavadinimas; kodas; kaina; savikaina; turimas kiekis. Išveskite
parduotuvės bendrą informaciją, tuomet užrašą "prekės" ir
atskirose eilutėse turimas prekes su kuria nors jų informacija
(pvz.: pavadinimai, kainos ir turimi kiekiai). Galiausiai
paskaičiuokite kiek iš viso parduotuvė turi visų prekių
(sudėkite jų kiekius). Raskite ir išveskite kurios prekės
turima daugiausiai, o kurios mažiausiai.*/

let parde = {
  parduotuve: "Pas Pofke",
  adresas: {
    miestas: "Vilnius,",
    gatve: "Zvaigzdiu g.,",
    namoNr: 8,
  },
  darbuotojuSk: 39,
  prekes: [
    {
      pavadinimas: "Nike batai",
      kodas: 3402,
      kaina: 83.99,
      svaikaina: 1.99,
      likutis: 121,
    },
    {
      pavadinimas: "Broliu kojines",
      kodas: 2803,
      kaina: 3.99,
      svaikaina: 0.03,
      likutis: 21,
    },
    {
      pavadinimas: "CK trusikai",
      kodas: 1645,
      kaina: 13.99,
      svaikaina: 0.39,
      likutis: 1001,
    },
    {
      pavadinimas: ' Pushka - "Colt"',
      kodas: 5091,
      kaina: 199.99,
      svaikaina: 129.39,
      likutis: 1,
    },
  ],
};

console.log('Parduotuve:', parde.parduotuve);
console.log('adresas:', parde.adresas.miestas, parde.adresas.gatve, parde.adresas.namoNr);

console.log("------Prekes-------");

let visosPrekes = 0;
let didziausiasLikutis = parde.prekes[0];
let maziausiasLikutis = parde.prekes[0];

for (let preke of parde.prekes) {
  visosPrekes += preke.likutis;
  console.log(
    "preke:",
    preke.pavadinimas,
    ", kaina:",
    preke.kaina,
    "eur",
    ", turime sandelyje:",
    preke.likutis
  );

if (preke.likutis > didziausiasLikutis.likutis) {
  didziausiasLikutis = preke;
}
if (preke.likutis < maziausiasLikutis.likutis) {
  maziausiasLikutis = preke;
}
};
console.log('Viso parduotuveje yra:', visosPrekes, 'prekes');
console.log(' Didziausias likutis:', didziausiasLikutis.likutis, 'vnt.', 'prekes', didziausiasLikutis.pavadinimas);
console.log(' Maziausias likutis:', maziausiasLikutis.likutis, 'vnt.', 'prekes', maziausiasLikutis.pavadinimas);
