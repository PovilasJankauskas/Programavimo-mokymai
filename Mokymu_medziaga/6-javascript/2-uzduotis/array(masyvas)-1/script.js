console.log('==============================');
console.log('===== Array (masyvas) 1 dalis ====');
console.log('====     1 uzduotis:     =====');

let komandos = [ 'Zalgiris', 'Rytas', 'Juve', 'Perlas']
console.log(komandos);

console.log('Pirma komanda:', komandos[0]);
console.log('Paskutine komanda:', komandos[3]);

console.log('Vidurine komanda-1:', komandos[1]);
console.log('Vidurine komanda-2:', komandos[2]);

komandos.length;
console.log('Komandu skaicius:', komandos.length);

console.log('====    2 uzduotis:     =====');

console.log(komandos);

komandos[0] = 'Olimpia';
komandos[3] = 'Statyba';

console.log(komandos);

console.log('====    3 uzduotis:     =====');

let komandos2 = [];

console.log(komandos2);

komandos2.push('Artojai');
komandos2.push('Dubleriai');
komandos2.push('Tinginiai');
komandos2.push('Exprofai');
komandos2.push('ApieKaMes');

console.log(komandos2);

console.log('====    4 uzduotis:     =====');

let skaiciai = [];

for (let i = 0; i < 20; i++) {
    let atsitiktinis = Math.floor(Math.random()*10) + 1;
skaiciai.push(atsitiktinis);
};
console.log(skaiciai);

console.log('====    5 uzduotis:     =====');

