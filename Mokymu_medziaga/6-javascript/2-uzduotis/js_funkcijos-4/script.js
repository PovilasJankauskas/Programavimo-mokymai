console.log("================================");
console.log("====   Funkcijos 4 dalis uzduotys    =====");

console.log("====     1 uzduotis:     =====");
/* Susikurkite funkciją, kuri grąžintų bet kokį jūsų 
norimą sakinį. Iškvieskite šią funkciją ir išspausdinkite 
gautus rezultatus.*/

function norimasSakinys() {
  let tekstas = "mokslo šaknys karčios";
  return tekstas;
}
console.log(norimasSakinys());

let atsakymas = "Tačiau vaisiai saldūs";
console.log(atsakymas);

console.log("====     2 uzduotis:     =====");
/* Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą
 skaičių. Iškvieskite šią funkciją kelis kartus ir gautus
  atsakymus išveskite kokiu norite būdu. */

function atsitiktinisSkaicius() {
  console.log(skaicius);
}

let skaicius = Math.floor(Math.random() * 10) + 1;

atsitiktinisSkaicius();

console.log("---------------------------");

function atsitiktinisSkaicius2() {
  return skaicius2;
}

let skaicius2 = Math.floor(Math.random() * 10) + 1;
console.log(skaicius2);

console.log("====     3 uzduotis:     =====");
/* Susikurkite funkciją, kuri per argumentus priimtų 
  studento vardą ir vidurkį. Ši funkcija turėtų sugeneruoti 
  iš to sakinį (pvz Studentas Tomas turi vidurkį 8.7) 
  ir tai grąžinti kaip atsakymą. Iškvieskite šią funkciją
   bent porą kartų, perduodant vis skirtingus duomenis. 
   Gautus atsakymus išveskite. */

function priimtasStudentas(studentas) {
  return `Studentas ${studentas.vardas} ${
    studentas.pavarde
  } turi vidurki ${studentas.vidurkis.toFixed(1)}`;
}

let studentas1 = {
  vardas: "Laura",
  pavarde: "Laurinskaite",
  vidurkis: 6.2,
};
let studentas2 = {
  vardas: "Povilas",
  pavarde: "Povilaitis",
  vidurkis: 6.4,
};

let isvestasStudentas1 = priimtasStudentas(studentas1);
let isvestasStudentas2 = priimtasStudentas(studentas2);

console.log(isvestasStudentas1);
console.log(isvestasStudentas2);
console.log("-----------------------");

console.log("====     4 uzduotis:     =====");

/* Susikurkite funkciją, kuri per argumentus gautų skaičių.
 Ji turėtų surasti duoto skaičiaus mažiausią daliklį 
 (skaičių iš kurio dalinasi be liekanos). Už funkcijos 
 ribų sukite ciklą nuo 10 iki 30 ir kiekvienoje ciklo 
 iteracijoje iškvieskite šią funkciją, perduodant ciklo 
 kintamąjį.*/

function maziausiasDaliklis(skaicius) {
  for (let i = 2; i <= skaicius; i++) {
    if (skaicius % i === 0) {
      return i;
    }
  }
  return skaicius;
}

for (let i = 10; i <= 30; i++) {
  console.log(`${i} skaiciaus maziausias daliklis yra:
     ${maziausiasDaliklis(i)}`);
}

console.log("====     5 uzduotis:     =====");
/* Susikurkite funkciją, kuri per argumentus gautų skaičių.
 Ji turėtų patikrinti ar šis skaičius yra pirminis 
 (grąžina true jei pirminis, ir false jei ne pirminis).
  Už funkcijos ribų sukite ciklą nuo 2 iki 15, 
  kiekvienoje ciklo iteracijoje išveskite tikrinamą skaičių
   ir šalia jo iškviestos funkcijos atsakymą 
   (pvz 10 false, 11 true, ...).*/

function pirminisArne(skaicius) {
  for (let i = 2; i < skaicius; i++) {
    if (skaicius % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 2; i <= 15; i++) {
  console.log(`skaicius ${i}  yra pirminis ${pirminisArne(i)}`);
}

console.log("====     6 uzduotis:     =====");
/* Susikurkite bent 3 matematines funkcijas, 
priimančias reikiamus argumentus (pvz suma iš
 dviejų skaičių, suma iš trijų skaičių, skirtumas, 
 sandauga, dalyba) ir grąžinančias atitinkamus
  atsakymus. Taip pat, susikurkite funkciją, 
  kurioje būtų sugeneruojamas reikiamas kiekis 
  atsitiktinių skaičių ir išvedami visų skaičiavimų 
  atsakymai su veiksmais (iškviečiant atitinkamas 
  kitas funkcijas ir perduodant reikiamus kintamuosius)
   (pagal 7 pavyzdį). Iškvieskite šią pagrindinę 
   funkciją bent kartą.*/

function suma(a, b, c) {
  return a + b + c;
}
function sumadu(a, b) {
  return a + b;
}
function skirtumas(a, c) {
  return c - a;
}
function sandauga(a, b) {
  return a * b;
}
function dalyba(a, b) {
  if (a !== 0) return a / b;
}

function rezultatai(a, b, c) {
  console.log(`Suma ${a} + ${b} + ${c} = ${suma(a, b, c)} `);
  console.log(`Suma ${a} + ${b} = ${sumadu(a, b)} `);
  console.log(`skirtumas ${c} - ${a} = ${skirtumas(a, c)} `);
  console.log(`sandauga ${a} * ${b} = ${sandauga(a, b)} `);
  console.log(`dalyba ${a} / ${b} = ${dalyba(a, b).toFixed(2)} `);
}
rezultatai(3, 12, 37);
console.log("----------------");
rezultatai(201, 2, 84);
