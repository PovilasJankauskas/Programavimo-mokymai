console.log('-------- 1 uzduotis -------------');

/*isvesti datas now ir now - n dienu.
isvesti lt formatu
pvz : n = 5,  2025-01-23 - 2025-01-18 */



let now = new Date();

console.log(now);
console.log(now.toLocaleDateString('lt'));

let now_n = new Date();
now_n.setDate(now_n.getDate() - 5);

console.log(`Išvesta data Now -5 dienų`);
console.log(now_n.toLocaleDateString('lt'));

console.log('-------- 2 uzduotis -------------');
/*palyginti dvi datas ir pasakyti kuri yra veliau uz kita. 
date 1 veliau uz date2 arba date2 veliau uz date1
*/

if (now > now_n) {
    console.log(` Data: ${now.toLocaleDateString('lt')} yra didesne, nei data: ${now_n.toLocaleDateString('lt')} `);
} else {     console.log(` Data: ${now_n.toLocaleDateString('lt')} yra didesne, nei data: ${now.toLocaleDateString('lt')} `);

};

console.log('-------- 3 uzduotis -------------');
/* 
datu skirtuma
dienas
valandas
metus
*/

let pirmaData = new Date();
console.log(pirmaData);
console.log(pirmaData.toLocaleDateString('lt'));

let antraData = new Date(2001, 3, 20);

console.log(antraData);
console.log(antraData.toLocaleDateString('lt'));

let datuSkirtumas = Math.abs(pirmaData - antraData);

console.log(datuSkirtumas);

