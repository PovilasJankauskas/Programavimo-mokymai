console.log("================================");
console.log("====   Funkcijos 3 dalis uzduotys    =====");
console.log("====     1 uzduotis:     =====");
/* Susikurkite funkciją, kuri per argumentus priimtų
 žodžių masyvą. Funkcijoje išveskite visus žodžius 
 iš masyvo atskirose eilutėse, nurodant žodžio ilgį
  (simbolių kiekį). Už funkcijos ribų susikurkite žodžių 
  masyvą ir užpildykite jį duomenimis. Iškvieskite sukurtą
   funkciją perduodant turimą masyvą.
*/

function zodziu_masyvas(masyvas) {
  for (let zodis of masyvas) {
    console.log(zodis, "turi", zodis.length, "raides");
  }
}
let zodziai = ["Lietuva", "graži", "šalis"];

zodziu_masyvas(zodziai);

console.log("====     2 uzduotis:     =====");
/* Susikurkite funkciją, kuri per argumentus priimtų
 skaičių masyvą. Funkcija turėtų atspausdinti visus 
 skaičius, šalia jų išvedant to skaičiaus kvadratą 
 ir jį padalintą iš dviejų. Už funkcijos ribų susikurkite 
 du skaičių masyvus ir užpildykite jį duomenimis.
  Iškvieskite funkciją du kartus, kiekvieną kartą 
  perduodant skirtingą turimą masyvą.*/

function skaiciu_masyvas(komentaras, masyvas) {
  console.log(komentaras);

  for (let skaicius of masyvas) {
    let skaiciaiKvadratu = Math.pow(skaicius, 2) / 2;
    console.log(skaicius, skaiciaiKvadratu);
  }
}

let skaiciai = [];
for (let i = 0; i < 5; i++) {
  skaiciai.push(Math.floor(Math.random() * 10) + 1);
}

let skaiciai2 = [];
for (let i = 0; i < 5; i++) {
  skaiciai2.push(Math.floor(Math.random() * 7) + 1);
}

skaiciu_masyvas("Pirmi skaiciai", skaiciai);
console.log("---------------");
skaiciu_masyvas("Antri skaiciai", skaiciai2);

console.log("====     3 uzduotis:     =====");
/* Susikurkite funkciją, kuri per argumentus priimtų pažymių 
masyvą, bei studento vardą su pavarde. Funkcija turėtų išvesti 
studento vardą ir pavardę, jo pažymius. Taip pat, suskaičiuoti
 vidurkį, bei jį išvesti. Už funkcijos ribų susikurkite 
 reikiamus kintamuosius ir masyvus, arba objektus studentų 
 pažymiams saugoti ir užpildykite juos duomenimis. Iškvieskite
  šią funkciją perduodant visus reikalingus duomenis. */

function studentuMas(masyvas) {
  for (let studentas of masyvas)
    console.log("Vardas:", studentas.vardas, "Pavarde:", studentas.pavarde),
      console.log("Pazymiai:", studentas.pazymiai);
}

function studentoVidurkis(studentas) {
  let pazSuma = 0;
  for (let pazymys of studentas.pazymiai) {
    suma += pazymys;
  }
  let vidurkis = (pazSuma / studentas.pazymiai.length).toFixed(2);
  console.log("Vidurkis:", vidurkis);
}

let studentai = [
  {
    vardas: "Povilas",
    pavarde: "Povilatis",
    pazymiai: [4, 5, 6, 2, 4, 7, 3],
  },
  {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    pazymiai: [8, 7, 5, 9, 4, 7, 6],
  },
  {
    vardas: "Rasa",
    pavarde: "Rasaite",
    pazymiai: [10, 8, 9, 6, 7, 5],
  },
  {
    vardas: "Vaida",
    pavarde: "Vaidaite",
    pazymiai: [8, 7, 8, 6, 9, 7, 8],
  },
];

studentuMas(studentai);

console.log("====     4 uzduotis:     =====");
/* Susikurkite funkciją, kuri per argumentus priimtų 
skaičių masyvą. Funkcija turėtų rasti didžiausią 
skaičių iš masyvo bei išvesti gautą atsakymus. 
Taip pat, susikurkite funkciją, kuri per argumentus
 priimtų masyvą ir į jį sugeneruotų pasirinktą kiekį 
 atsitiktinių skaičių. Susikurkite tris tuščius masyvus. 
 Iškvieskite atsitiktinių skaičių generavimo funkciją 
 tris kartus, kiekvieną kartą perduodant funkcijai vis 
 kitą masyvą. Kai duomenys bus užpildyti, masyvuose
  esančią informaciją išsiveskite norimu būdu 
  (per console.log arba per dar atskirą funkciją).
   Tuomet kvieskite didžiausio skaičiaus paieškos 
   funkciją tris kartus, kiekvieną kartą perduodant 
   skirtingą masyvą į ją. */

function skaiciuPaieska(skaiciu_masyvas) {
  let didziausiasSkaicius = skaiciu_masyvas[0];
  for (let skaicius of skaiciu_masyvas) {
    if (skaicius > didziausiasSkaicius) {
      didziausiasSkaicius = skaicius;
    }
  }
  console.log("didziausias rastas skaicius:", didziausiasSkaicius);
}

function generuotiSkaiciai(kiek, min, max, skaiciu_masyvas) {
  for (let i = 0; i < kiek; i++) {
    skaiciu_masyvas.push(Math.floor(Math.random() * (max - min)) + min);
  }
}

function isvedimas(skaiciu_masyvas, zinute) {
  console.log(zinute);
  console.log(skaiciu_masyvas);
}

let skaiciukai = [];
let skaiciukai2 = [];
let skaiciukai3 = [];

generuotiSkaiciai(5, 1, 100, skaiciukai);
generuotiSkaiciai(10, 1, 200, skaiciukai2);
generuotiSkaiciai(15, 1, 400, skaiciukai3);

isvedimas(skaiciukai, "Pirmas masyvas");
skaiciuPaieska(skaiciukai);
isvedimas(skaiciukai2, "Antras masyvas");
skaiciuPaieska(skaiciukai2);
isvedimas(skaiciukai3, "Trecias masyvas");
skaiciuPaieska(skaiciukai3);
