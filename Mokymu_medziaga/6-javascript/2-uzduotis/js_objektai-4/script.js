console.log("================================");
console.log("====   Objektai 4 dalis uzduotys    =====");
console.log("====     1 uzduotis:     =====");
/* Susikurkite objektų masyvą įmonių duomenims saugoti ir jį
 užpildykite duomenimis. Išveskite kiekvienos įmonės informaciją 
 atskirose eilutėse, gražiai suformatuotai (sakinio pavidalu 
 ar pan.). Taip pat, ką nors paskaičiuokite iš turimų skaitinių 
 duomenų (pvz.: vidutinis įmonės amžius, darbuotojų kiekis per 
 visas įmones, bendras pelnas, ar pan.).*/

let imones = [
  {
    pavadinimas: "DPD",
    ikurimoMetai: 1921,
    valstybes: 148,
    salis: "Vokietija",
    verteMln: 1245,
  },
  {
    pavadinimas: "Apple",
    ikurimoMetai: 1982,
    valstybes: 158,
    salis: "JAV",
    verteMln: 8319,
  },
  {
    pavadinimas: "Nestle",
    ikurimoMetai: 1889,
    valstybes: 122,
    salis: "Ausrija",
    verteMln: 245,
  },
  {
    pavadinimas: "Swebank",
    ikurimoMetai: 1594,
    valstybes: 23,
    salis: "Svedija",
    verteMln: 1765,
  },
];
let vertesSuma = 0;
for (let imone of imones) {
  vertesSuma += imone.verteMln;
  console.log(
    "Imone",
    imone.pavadinimas,
    "ikurta",
    imone.ikurimoMetai,
    "metais",
    ", salis kurioje imone ikurta",
    imone.salis,
    ", imone veikla vykdo",
    imone.valstybes,
    "salyse",
    ", imones verte:",
    imone.verteMln,
    "mln."
  );
}

console.log("Bendra imoniu verte:", Math.round(vertesSuma), "mln");

console.log("====     2 uzduotis:     =====");
/*Susikurkite objektų masyvą ligoninių duomenims saugoti
 ir užpildykite jį pasirinktais duomenimis. 
 Išveskite ligoninių pavadinimus su adresais skirtingose eilutėse.
  Suskaičiuokite ką nors iš skaitinių jų duomenų, pvz.:
   bendrą lankytojų kiekį, bendrą ar vidutinį darbuotojų kiekį, ar pan. */

let ligonines = [
  {
    pavadinimas: "Vilniaus Ligonine",
    adresas: {
      miestas: "Vilnius",
      gatve: "Vilniaus",
      pastatoNr: 101,
    },
    pastatuSkaicius: 8,
    palatos: 66794,
    darbuotojuSk: 111245,
  },
  {
    pavadinimas: "Kauno Ligonine",
    adresas: {
      miestas: "Kaunas",
      gatve: "Kauno",
      pastatoNr: 78,
    },
    pastatuSkaicius: 6,
    palatos: 57891,
    darbuotojuSk: 94924,
  },
  {
    pavadinimas: "Siauliu Ligonine",
    adresas: {
      miestas: "Siauliai",
      gatve: "Siauliu",
      pastatoNr: 10,
    },
    pastatuSkaicius: 7,
    palatos: 5997,
    darbuotojuSk: 99245,
  },
  {
    pavadinimas: "Utenos Ligonine",
    adresas: {
      miestas: "Utena",
      gatve: "Utenos",
      pastatoNr: 37,
    },
    pastatuSkaicius: 3,
    palatos: 26893,
    darbuotojuSk: 10893,
  },
];
let palatuSk = 0;
let bendrasDarbuotojusk = 0;
for (let ligonine of ligonines) {
  palatuSk += ligonine.palatos;
  bendrasDarbuotojusk += ligonine.darbuotojuSk;
  console.log(
    "ligonines",
    ligonine.pavadinimas,
    "randasi adresu",
    ligonine.adresas.miestas,
    ligonine.adresas.gatve,
    "g",
    ligonine.adresas.pastatoNr
  );
}
console.log(
  "bendras ligoniniu palatu skaicius:",
  palatuSk,
  "bendras darbuotoju skaicius",
  bendrasDarbuotojusk
);
console.log(
  "vidutinis darbuotoju skaicius",
  Math.round(bendrasDarbuotojusk) / ligonines.length,
  "darbuotojai"
);
