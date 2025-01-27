console.log("================================");
console.log("====   Objektai 1 dalis uzduotys    =====");

console.log("====     1 uzduotis:     =====");
/*Sukurkite objektą studento duomenims saugoti. Į šį objektą sudėkite tokias
 savybes su reikšmėmis: vardas, pavardė, amžius, studijų programa, atsiskaitytų
  kreditų skaičius, pažymiai, ūgis, kelintame kurse mokosi, kurioje mokykloje 
  mokosi. Šiuos duomenis galite grupuoti į vidinius objektus arba visus išrašyti
   atskirai. Išveskite šią informaciją per vieną console.log(). Taip pat,
    pamėginkite išvesti atskirose eilutėse tris skirtingas pasirinktas savybes.*/

let studentas = {
  vardas: "Povilas",
  pavarde: "Jankausaks",
  studijuProgama: "Greitieji JS mokymai",
  atsiskaitytukredituSkaicius: 14,
  pazymiai: [3, 4, 5, 3, 7, 4],
  ugis: "aukstas",
  kursas: 1,
  mokykla: "Vilnius coding school",
};

console.log(studentas);
console.log(studentas.vardas, studentas.pavarde, studentas.ugis);

console.log("====     2 uzduotis:     =====");
/*Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite
 tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek
  uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių
   sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto
    informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis
     - biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis).
      Paskaičiuokite kiek filmui yra metų (dabartinius metus tiesiog 
      galite įrašyti rankomis arba panaudoti new Date(Date.now()).getFullYear() funkciją).*/
let filmas = {
  pavadinimas: "Terminatorius",
  rezisierius: "J.kameronas",
  biudzetasMln: 400,
  boxOfficeMln: 1200,
  zanras: "fantastika",
  trukme: "190 min",
  metai: 1986,
  aktoriai: [
    "Svarcas",
    "berniukas",
    "motina",
    "policininkas",
    "niekas neatsimena jo pavardes",
    "as",
  ],
};

console.log(filmas);
console.log("pelnas", filmas.boxOfficeMln - filmas.biudzetasMln);
console.log(filmas.aktoriai.length);
console.log("filmo amzius", new Date(Date.now()).getFullYear() - filmas.metai);

console.log("====     3 uzduotis:     =====");
/*Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename objekte nurodykite
 tokias savybes su reikšmėmis: pavadinimas, autorius, žanras, kaina, puslapių kiekis,
  skyrių sąrašas (masyvas su pavadinimais), išleidimo metai, ar knygą galima rasti
   knygynuose. Išveskite šių knygų informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių),
    bei kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos kainą padvigintumėte,
     ar ji jau būtų brangesnė už kitą knygą?*/

let knyga1 = {
  pavadinimas: "Balta drobule",
  autorius: "Shkema",
  zanras: "fantastika",
  kaina: 10.99,
  puslapiuKiekis: 89,
  skyriai: ["prologas", "pazintis", "netektis", "isprotejimas"],
  metai: 1952,
  prekybosVeitos: "Vaga",
};

let knyga2 = {
  pavadinimas: "Vilniaus plovas",
  autorius: "Dima",
  zanras: "kovinis",
  kaina: 1.99,
  puslapiuKiekis: 189,
  skyriai: ["prologas", "apie mane", "kova", "amzinybe"],
  metai: 1982,
  prekybosVeitos: "Vaga",
};

console.log(knyga1);
console.log("======================");
console.log(knyga2);

if (knyga1.puslapiuKiekis < knyga2.puslapiuKiekis) {
  console.log(
    knyga1.pavadinimas,
    "turi maziau puslapiu",
    knyga1.puslapiuKiekis
  );
} else {
  console.log();
}

if (knyga1.skyriai.length < knyga2.skyriai.length) {
  console.log("Balta drobule turi daugiau skyriu", knyga1.skyriai);
} else if (knyga1.skyriai.length > knyga2.skyriai.length) {
  console.log("Vilniaus plovas turi daugiau skyriu", knyga2.skyriai);
} else {
  console.log("abi knygos turi tiek pat skyriu");
}

if (knyga1.kaina < knyga2.kaina * 2) {
  console.log("taip");
} else {
  console.log("ne");
}

console.log("====     4 uzduotis:     =====");
/* Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte sudėkite
 šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas, turimas kiekis 
 sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). Išveskite visų trijų prekių 
 informaciją. Išveskite visų prekių kainas vienoje eilutėje (pirma prekė kainuoja 
 - …, antra prekė kainuoja - …, ir t.t.). Raskite ir išveskite kuri prekė yra
  brangiausia (jos pavadinimą ir kainą arba visą rastos prekės informaciją).
   Raskite ir išveskite atskirose eilutėse kiekvienos prekės dėžės tūrį.
    Raskite ir išveskite atskirose eilutėse kiekvienos prekės pelningumą
     ((kaina - savikaina) * kiekis sandėlyje).*/

let preke1 = {
  pavadinimas: "botai",
  kaina: 109.99,
  savikaina: 10,
  kodas: 8574342443,
  likutis: 2,
  matmenys: [120, 40, 80],
};

let preke2 = {
  pavadinimas: "kedai",
  kaina: 78.99,
  savikaina: 7,
  kodas: 53435334775,
  likutis: 189,
  matmenys: [60, 40, 70],
};

let preke3 = {
  pavadinimas: "tapkes",
  kaina: 199.79,
  savikaina: 2,
  kodas: 23435557675,
  likutis: 9,
  matmenys: [20, 50, 40],
};

console.log(
  "Botu kaina:",
  preke1.kaina,
  "Kedu kaina:",
  preke2.kaina,
  "Tapkiu kaina:",
  preke3.kaina
);

if (preke1.kaina > preke2.kaina && preke1.kaina > preke3.kaina) {
  console.log(
    "Brangiausia preke:" + preke1.pavadinimas,
    "kaina:" + preke1.kaina
  );
} else if (preke1.kaina > preke2.kaina && preke1.kaina > preke3.kaina) {
  console.log(
    "Brangiausia preke:" + preke2.pavadinimas,
    "kaina:" + preke2.kaina
  );
} else {
  console.log(
    "Brangiausia preke:" + preke3.pavadinimas,
    "kaina:" + preke3.kaina
  );
}

for (let asis of preke1.matmenys) {
  console.log(" Botu dezes turis:", asis);
}

pelningumas1 = (preke1.kaina - preke1.savikaina) * preke1.likutis;
pelningumas2 = (preke2.kaina - preke2.savikaina) * preke2.likutis;
pelningumas3 = (preke3.kaina - preke3.savikaina) * preke3.likutis;

console.log("Botu pelningumas:", pelningumas1.toFixed(2));
console.log("Kedu pelningumas:", pelningumas2.toFixed(2));
console.log("Tapkiu pelningumas:", pelningumas3.toFixed(2));

console.log("============   5 uzduotis ==============");
/*Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su reikšmėmis 
sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys). Sudėkite šias savybes 
su reikšmėmis: markė, modelis, rida, gamybos metai, spalva, darbinis tūris, ar daužta, 
ar parduodama. Išveskite visą automobilio informaciją. Paskaičiuokite ir išveskite kiek
 automobiliui yra metų (rankomis įrašykite dabartinius metus arba panaudokite new 
 Date(Date.now()).getFullYear() funkciją). Paskaičiuokite ir išveskite kiek vidutiniškai
  per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300 kilometrų, o automobiliui
   yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.). */

let automobilis = {};
console.log(automobilis);

automobilis.marke = "Audi";
automobilis.modelis = "RS6";
automobilis.rida = 289000;
automobilis.gm = 2016;
automobilis.spalva = "black";
automobilis.dt = 2.6;
automobilis.ardauztas = false;
automobilis.arparduodamas = true;

console.log(automobilis);

let automobilioAmzius = new Date(Date.now()).getFullYear() - automobilis.gm;
console.log("automobilio amzius:", automobilioAmzius, 'm.');
console.log(
  "vidutiniskai per metus nuvaziuota:",
  (automobilis.rida / automobilioAmzius).toFixed(2), 'km'
);
