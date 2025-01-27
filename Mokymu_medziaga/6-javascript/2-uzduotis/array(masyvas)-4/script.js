console.log("==============================");
console.log("===== Array (masyvas) 4 dalis ====");
console.log("====     1 uzduotis:     =====");

let maistas = ["cepai", "šašlai", "blynai", "saldainiai", "tortai", "alus"];
console.log(maistas);

maistas.unshift("ledai");
maistas.push("duona");
maistas.splice(4, 0, "obuoliai");
maistas.splice(-6, "citrinos");

console.log("papildytas meniu:", maistas);

console.log("--------salinimas---------");

maistas.splice(0, 2).splice(4, 5).splice(7, 8);
console.log(maistas);

console.log("====     2 uzduotis:     =====");

let skaiciai = [4, 6, 7, 10, 12, 14, 15, 3, 5, 9];

let rastasSkaicius = skaiciai.includes(6);

console.log(skaiciai);
console.log("rastas skaicius", rastasSkaicius);

console.log("====     3 uzduotis:     =====");

let zodziai = ["bananai", "batai", "arklys", "tortas", "skanus"];

console.log(zodziai);
let sujungtiZodziai = zodziai.join(" ir ");
console.log(sujungtiZodziai);
let subruksniais = zodziai.join(" - ");
console.log(subruksniais);

console.log("====     4 uzduotis:     =====");

let pazymiai = [8, 9, 4, 10, 7, 5];

let surykiuoti = pazymiai.slice().sort((a, b) => b - a);

let iskarpa = surykiuoti.slice(0, 3);

console.log(pazymiai);
console.log(surykiuoti);
console.log(iskarpa);

console.log("====     5 uzduotis:     =====");

let biologai = ["Jonas", "Povilas", "Gediminas", "Viktorija", "Ieva"];
let matematikai = ["Ignas", "Tomas", "Petras", "Aloyzas"];

let klasiokai = [...biologai, ...matematikai];

console.log("biologai", biologai);
console.log("matematikai", matematikai);
console.log("klasiokai", klasiokai);

console.log("====     6 uzduotis:     =====");

let semestrasPirmas = [
  "ziniu patikrinimas",
  "kintamieji",
  "java script",
  "naujienos",
];
let semestrasAntras = ["sintakses", "js for", "js while", "masyvai"];

let visosTemos = [...semestrasPirmas, ...semestrasAntras];

console.log("pirmas semestras", semestrasPirmas);
console.log("antras semestras", semestrasAntras);
console.log("abu semestrai", visosTemos);

console.log("====     7 uzduotis:     =====");

let spalvos = ["geltona", "zalia", "raudona", "melyna", "zalia", "juoda"];

let spalvuKopija = [...spalvos];

spalvos = [];
console.log(spalvos);
console.log(spalvuKopija);

console.log("====     8 uzduotis:     =====");

let miestai = ["Utena", "Moletai", "Vilnius", "Kaunas", "Klaipeda"];
console.log(miestai);

let miestoIn = miestai.indexOf("Vilnius");
console.log("Vilniaus miesto indexas yra:", miestoIn);
let miestas = "Vilnius";
if (miestai.lastIndexOf(miestas) === -1) {
  console.log(miestas + "miestas sarase yra");
} else {
  console.log(miestas + "miestas yra");
}
console.log("====     9 uzduotis:     =====");

let dublikatai = [
  "mano",
  "batai",
  "buvo",
  "du",
  "dabar",
  "batai",
  "nerandu",
  "o",
  "buvo",
  "du",
];

console.log(dublikatai);

console.log("====     10 uzduotis:     =====");

let skaiciukai = [2, 11, 4, 18, 5, 10, 1, 21, 3];
let skaiciukaiNauji = [];
let chunkSize = 2;
let naujuSkaiciukuKiekis = Math.ceil(skaiciukai.length / chunkSize);

console.log(skaiciukaiNauji);

/*antras budas*/

for (let i = 0; i < skaiciukai.length; i += chunkSize) {
  skaiciukaiNauji.push(skaiciukai.slice(i, i + chunkSize));
}
console.log(skaiciukaiNauji);

console.log("====     11 uzduotis:     =====");

let skaiciuMas = [2, 6, 4, 18, 15, 10, 1, 12];
let skaiciaiMas2 = [1, 6, 7, 10, 12, 4, 15, 2];
let skaiciaiMas3 = [];

let sujungtasMas = [...skaiciuMas, ...skaiciaiMas2];

for (let skaicius of sujungtasMas) {
  if (!skaiciaiMas3.includes(skaicius)) {
    skaiciaiMas3.push(skaicius);
  }
}
let surykiuoti2 = skaiciaiMas3.slice().sort((a, b) => a - b);

console.log('Pirmas masyvas:' , skaiciuMas);
console.log('Antras masyvas: ', skaiciaiMas2);
console.log('Sujungtas masyvas:', skaiciaiMas3);

console.log("====     12 uzduotis:     =====");
console.log("====     13 uzduotis:     =====");
console.log("====     14 uzduotis:     =====");
console.log("====     15 uzduotis:     =====");
