console.log("==============================");
console.log("===== Array (masyvas) 2 dalis ====");
console.log("====     1 uzduotis:     =====");

let programos = [
  "html",
  "css",
  "bootstrap",
  "sass",
  "js",
  "masyvai",
  "switch",
  "for",
  "while",
];

console.log("===for===");
for (let i = 0; i < programos.length; i++) {
  console.log(programos[i]);
}

console.log("====while====");

let index = 0;
while (index < programos.length) {
  console.log(programos[index]);
  index++;
}

console.log("====     2 uzduotis:     =====");

let salys = [
  "Lietuva",
  "Latvija",
  "Estija",
  "Lenkija",
  "Suomija",
  "Norge",
  "Swerige",
];

console.log("===for===");
for (let i = 0; i < salys.length; i++) {
  console.log("salis", salys[i]);
}

console.log("====while====");

let index2 = 0;
while (index2 < salys.length) {
  console.log("salis", salys[index2]);
  index2++;
}

console.log("====     3 uzduotis:     =====");

let projektas = [
  "Pamokos",
  "uzduotys",
  "testai",
  "pagrindai",
  "random",
  "silpnam",
  "stipriam",
];

console.log("===for===");
for (let i = 0; i < projektas.length; i++) {
  console.log(`${i + 1} -as projektas ${projektas[i]}`);
}

console.log("====while====");

let index3 = 0;
while (index3 < projektas.length) {
  console.log(index3 + 1 + "-as projektas", projektas[index3]);
  index3++;
}

console.log("====     4 uzduotis:     =====");

let skaiciai = [4, 3, 7, 9, 6, 5, 11, 2];

console.log("===for===");
for (let i = 0; i < skaiciai.length; i++) {
  if (skaiciai[i] > 5) console.log("Skaicius", skaiciai[i], "didesnis uz 5");
}

console.log("====while====");

let index4 = 0;
while (index4 < skaiciai.length) {
  if (skaiciai[index4] > 5)
    console.log("Skaicius", skaiciai[index4], "didesnis uz 5");
  index4++;
}

console.log("====     5 uzduotis:     =====");

let atsitiktiniaiSkaiciai = [];

let skaiciuSuma = 0;

console.log("===for===");
for (let i = 0; i < 8; i++) {
  let atsitiktinis = Math.floor(Math.random() * 8) + 1;
  atsitiktiniaiSkaiciai.push(atsitiktinis);
  if (atsitiktiniaiSkaiciai[i] % 4 == 0) {
    skaiciuSuma += atsitiktiniaiSkaiciai[i];
  }
}
console.log(atsitiktiniaiSkaiciai);
console.log("Skaiciu kurie dalinasi is 4 suma", skaiciuSuma);

console.log("====while====");

let index5 = 0;
while (index5 < 8) {
  let atsitiktinis = Math.floor(Math.random() * 8) + 1;
  atsitiktiniaiSkaiciai.push(atsitiktinis);
  if (atsitiktiniaiSkaiciai[index5] % 4 == 0) {
    skaiciuSuma += atsitiktiniaiSkaiciai[index5];
  }
  index5++;
}
console.log(atsitiktiniaiSkaiciai);
console.log("Skaiciu kurie dalinasi is 4 suma", skaiciuSuma);

console.log("====     6 uzduotis:     =====");

let pazymiai = [];
let suma = 0;
let vidurkis = 0;

console.log("===for===");
for (let i = 0; i < 6; i++) {
  let atsitiktinis = Math.floor(Math.random() * 10) + 1;
  pazymiai.push(atsitiktinis);
  suma += pazymiai[i];
}
vidurkis = suma / pazymiai.length;
console.log(pazymiai);
console.log("Vidurkis", vidurkis);

console.log("====while====");

let index6 = 0;
let suma6 = 0;
while (index6 < pazymiai.length) {
  suma6 += pazymiai[index6];
  index6++;
}
vidurkis = suma6 / pazymiai.length;
console.log(pazymiai);
console.log("Vidurkis", vidurkis);

console.log("====     7 uzduotis:     =====");

let pazymiai7 = [];
let vidurkis7 = 0;
let suma7 = 0;
console.log("===for===");

for (let i = 0; i < 4; i++) {
  let atsitiktinis = Math.floor(Math.random() * 8) + 1;
  pazymiai7.push(atsitiktinis);
suma7 += pazymiai7[i];
vidurkis7 = suma7 / pazymiai7.length;
}
let didesnisNeiVidurkis = [];
for (let i = 0; i < 10; i++) {
    if (pazymiai7[i] > vidurkis7) {
        didesnisNeiVidurkis.push(pazymiai7[i]);
    }
}
console.log(pazymiai7);
console.log("Vidurkis", vidurkis7);
console.log('Didesni nei vidurkis', didesnisNeiVidurkis);

console.log("====     8 uzduotis:     =====");

let skmasyvas = [];

for ( let i = 0; i < 10; i++) {
 let atsitiktinis = Math.floor(Math.random() * 10) + 1;
 skmasyvas.push(atsitiktinis);
 if (skmasyvas [i] % 2 ==0);
 
 
 console.log(skmasyvas[i]);


 }


console.log("====     9 uzduotis:     =====");
console.log("====     10 uzduotis:     =====");

