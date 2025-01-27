console.log("================================");
console.log("====   Povilo JS testas   =====");

console.log("====     1 uzduotis:     =====");
/*Sukurkite funkciją, kuri paverstų eurus į dolerius.

Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais. */

function sumaEurais(masyvas) {
  let euruSuma = 0;
  for (let euras of masyvas) {
    euruSuma += euras;
  }
  return euruSuma;
}
function sumaDoleriais(sumaEuriukais, dolleris) {
  let sumaDoleriais = (sumaEuriukais * dolleris).toFixed(2);
  console.log("Suma doleriais:", sumaDoleriais, "$");
  return sumaDoleriais;
}

let dolleris = 1.05;

let eurai = [];
for (let i = 0; i < 6; i++) {
  eurai.push(Math.floor(Math.random() * 1000) + 1);
}

console.log("eurai", eurai);
console.log("---------------");
let sumaEuriukais = sumaEurais(eurai);
console.log("Suma eurais:", sumaEuriukais, "eur");
console.log("---------------");
sumaDoleriais(sumaEuriukais, dolleris);

console.log("====     2 uzduotis:     =====");

/* Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.*/
function dolToEur(dol, eur) {
  if (eur !== 0) return (eur / dol).toFixed(2);
}

function visoDoleriais(masyvas) {
  let doleriuSuma = 0;
  for (let doleris of masyvas) {
    doleriuSuma += doleris;
  }
  return doleriuSuma;
}

function visoEurais(galutineDoleriuSuma, eurais) {
  let galutineEuruSuma = (galutineDoleriuSuma * eurais).toFixed(2);
  console.log("Doleriu suma konvertuota į eurus", galutineEuruSuma, "eur");
  return galutineEuruSuma;
}

let doleriai = [];
for (let i = 0; i < 6; i++) {
  doleriai.push(Math.floor(Math.random() * 1000) + 1);
}

let dol = 1.05;
let eur = 1;
let eurais = dolToEur(dol, eur);
console.log("doleris konvertuotas eurais", eurais, "eur");

console.log("----------------");

console.log("Doleriai", doleriai);
let galutineDoleriuSuma = visoDoleriais(doleriai);
console.log("Suma doleriais", galutineDoleriuSuma, "$");

console.log("----------------");
visoEurais(galutineDoleriuSuma, eurais);

console.log("====     3 uzduotis:     =====");

/* Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris.*/
function zmogausBMI(ugis, svoris) {
  let bmi = (svoris / ugis ** 2).toFixed(2);
  console.log("Žmogaus BMI", bmi);
}
let ugis = 1.94;
let svoris = 87;
console.log(`Žmogaus ūgis ${ugis} m svoris ${svoris} kg`);

zmogausBMI(ugis, svoris);

console.log("====     4 uzduotis:     =====");

/* Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.*/

let metaiDabar = new Date();
console.log("Siandien yra", metaiDabar);

let gimimoMetai = new Date(1986, 5, 30);
console.log("Gimimo metai:", gimimoMetai);

let amzius = metaiDabar.getFullYear() - gimimoMetai.getFullYear();

let dienosMetuose = 365;
let valandosDienoje = 24;
let minutesValandoje = 60;
let sekundesMinuteje = 60;

let amziusDienomis = amzius * dienosMetuose;
let amziusValandomis = amziusDienomis * valandosDienoje;
let amziusMinutemis = amziusValandomis * minutesValandoje;
let amziusSekundemis = amziusMinutemis * sekundesMinuteje;

console.log(
  " Asmeniui yra",
  amzius,
  " amzius dienomis:",
  amziusDienomis,
  ",amzius valandomis:",
  amziusValandomis,
  "h. amzius minutimemis:",
  amziusMinutemis,
  "min. amzius sekundemis:",
  amziusSekundemis,
  "s."
);

console.log("====     5 uzduotis:     =====");

/*Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.*/

const celcToFahr = (c) =>
  `${c} laipsniai Celsijaus lygus  ${(c * 9) / 5 + 32} Farenheito `;

const c = 0;
console.log(celcToFahr(c));

const fahrTocel = (f) =>
  `${f} laipsniai Farenheito lygu ${((f - 32) * 5) / 9} celsijaus`;

const f = 32;
console.log(fahrTocel(f));

console.log("====     6 uzduotis:     =====");

/*Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.*/

let skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
console.log(skaiciai);
{
  console.log( skaiciai.join('-'));
};

console.log("====     7 uzduotis:     =====");

/*Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.

*

* *

* * *

* * * *

* * * * * */
let x = 5;
let rezultatas = '';
for (let i = 0; i <x; i++) {
  let i = '* ';
  rezultatas += i;
  console.log(rezultatas);
};

console.log("====     8 uzduotis:     =====");

/* Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.*/

siandien = new Date();

let kaledos = new Date(siandien.getFullYear(), 11, 25);
if (siandien.getMonth() == 11 && siandien.getDate() > 25) {
  kaledos.setFullYear(kaledos.getFullYear() + 1);
}


let diena = 1000 * 60 * 60 * 24;

console.log(
  Math.ceil(
    (" iki Kalėdų liko", kaledos.getTime() - siandien.getTime()) / diena
  ),
  "dienos"
);

console.log("====     9 uzduotis:     =====");

/* Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas */

let zmones = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];
console.log(zmones.join(','));
console.log(zmones.join('+'));

console.log("====     10 uzduotis:     =====");

/* Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka. */

function password_generator( len ) {
  var length = (len)?(len):(12);
  var string = "abcdefghijklmnopqrstuvwxyz"; 
  var numeric = '0123456789';
  var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var password = "";
  var character = "";
  var crunch = true;
  while( password.length<length ) {
      entity1 = Math.ceil(string.length * Math.random()*Math.random());
      entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
      entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
      hold = string.charAt( entity1 );
      hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
      character += hold;
      character += numeric.charAt( entity2 );
      character += punctuation.charAt( entity3 );
      password = character;
  }
  password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
  return password.substr(0,len);
}

console.log( password_generator() );