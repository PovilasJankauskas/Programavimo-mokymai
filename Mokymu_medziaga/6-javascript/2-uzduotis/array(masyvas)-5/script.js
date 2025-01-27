console.log("====     1 uzduotis:     =====");

let masyvas = [1, 4, 6, 5, 7, 8, 9];

let lyginis = masyvas.find((lyginisSkaicius) => {
  return lyginisSkaicius % 2 === 0;
});
console.log("lyginiai skaiciai: ", lyginis);

console.log("====     2 uzduotis:     =====");

let masyvas2 = [-1, -3, 6, 5, -4, 8, 9];

let teigiamas = masyvas2.find((teigiamasSkaicius) => {
  return teigiamasSkaicius > 0;
});
console.log("Teigiamas skaicius: ", teigiamas);

console.log("====     3 uzduotis:     =====");

let masyvas3 = [1, 3, 6, 5, 4, 8, -9];

let neigiamas = masyvas3.findIndex(
  (neigiamasSkaicius) => neigiamasSkaicius < 0
);

console.log("neigiamo skaiciaus indexas: ", neigiamas);

console.log("====     4 uzduotis:     =====");

let masyvas4 = [1, -3, 6, 12, 4, 8, -9];
let desimt = masyvas4.findIndex((didesnis) => didesnis >= 10);

console.log("skaicius => 10: ", desimt);

console.log("====     5 uzduotis:     =====");

let masyvas5 = [1, 4, 6, 12, 4, 8, -9];
let rezultatas = masyvas5.find((dalmuo) => {
  return dalmuo % 3 === 0 && dalmuo > 10;
});

console.log("dalinasi is 3: ", rezultatas);

console.log("====     6 uzduotis:     =====");

let masyvas6 = [1, -3, -6, -12, 4, 8, -9];
let pirmasNeigiamas = masyvas6.find((pirmasN) => {
  return pirmasN % 2 === 0 && pirmasN < 0;
});

console.log("pirmas neigiamas lyginias: ", pirmasNeigiamas);

console.log("====     7 uzduotis:     =====");

let masyvas7 = [1, 3, 6, 12, 4, 8, 9];
let tikTeigiami = masyvas7.every((teigiami) => {
  return teigiami > 0;
});

console.log("Visi skaiciai teigiami: ", tikTeigiami);

console.log("====     8 uzduotis:     =====");

let masyvas8 = [2, 4, 6, 12, 4, 8, 9];
let lyginiai = masyvas8.every((lyginiai) => {
  return lyginiai % 2 === 0;
});

console.log("Visi skaiciai yra lyginiai: ", lyginiai);

console.log("====     9 uzduotis:     =====");

let masyvas9 = [10, 5, 6, 12, 7, 8, 9];
let penki = masyvas9.some((penki) => {
  return penki < 5;
});

console.log("Yra skaicius mazesnis uz 5: ", penki);

console.log("====     10 uzduotis:     =====");

let masyvas10 = [-10, -5, -6, 12];
let teigiamasSk = masyvas10.some((teigiamasSk) => {
  return teigiamasSk > 0;
});

console.log("Yra bent vienas teigiamas skaicius: ", teigiamasSk);

console.log("====     11 uzduotis:     =====");

let masyvas11 = [1, 5, 3, -12, 7, 11, 9];
let visiTeigiami = masyvas11.every((visiTeigiami) => {
  return visiTeigiami > 0;
});

console.log("Visi skaiciai yra teigiami: ", visiTeigiami);

let lyginisSk = masyvas11.some((lyginisSk) => {
  return lyginisSk % 2 === 0;
});
console.log("lyginiai skaiciai siame masyve yra:", lyginisSk);

console.log("====     12 uzduotis:     =====");

let masyvas12 = [1, -5, 3, -12, 7, 11, 9];

let teigiamiFiltras = masyvas12.filter((teigiamiFiltras) => {
  return teigiamiFiltras > 0;
});

console.log("Tik teigiami skaiciai:", teigiamiFiltras);

console.log("====     13 uzduotis:     =====");

let masyvas13 = [1, 3, 4, 5, 2, 1, 2, 5, 4, 3, 1];

let reitingas = masyvas13.filter((skaicius) => {
  return skaicius >= 1 && skaicius <= 2;
});

console.log("reitingai:", reitingas);

console.log("====     14 uzduotis:     =====");
let masyvas14 = [-2, 3, 4, 5, 2];

let filtras = masyvas14.filter((skaicius) => {
  return skaicius % 2 === 0 && skaicius > 0;
});

console.log("reitingai:", filtras);

console.log("====     15 uzduotis:     =====");

let masyvas15 = [14, 7, 12, 9, 6, 4];

let lyginiaiSk = masyvas15.filter((skaicius) => {
  return skaicius % 2 === 0;
});

let dvigubi = lyginiaiSk.map((skaicius) => skaicius * 2);

console.log("lyginiai skaiciai", lyginiaiSk && dvigubi);

console.log("====     16 uzduotis:     =====");

let masyvas16 = [4, 8, 7, 5, 9, 10];

let geriPazymiai = masyvas16.filter((pazymys) => pazymys >= 8);

console.log("geri pazymiai:", geriPazymiai);
console.log("geru pazymiu skaicius:", geriPazymiai.length);

console.log("====     17 uzduotis:     =====");
/* įdėti į masyvą n skaičių fibanačio sekos - pvz
 jei n yra lygus 5, tuomet reikia įdėti į masyvą penkisskaičius fibanačio sekos.
fibanačio sekos pvz: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 */

let fib = [];
let n = 5;

for (let i = 0; i < n; i++) {
  if (i > 1) {
    fib.push(fib[i - 1] + fib[i - 2]);
  } else {
    fib[i] = i;
  }
}
console.log(fib);
