console.log("==================================");
console.log("=====     Logines uzduotys   =====");
console.log("=====       1 uzduotis:      =====");

let a = 7, b = 9, c =12;

if ( a > b && a > c) {
console.log ('Skaicius a didesnis');
} else if ( b > a && b > c) {
    console.log(' skaicius b didzesnis');
} else if ( c > a && c >b) {
    console.log('skaicius c didesnis')
}






console.log("==================================");
console.log("=====     Logines uzduotys   =====");
console.log("=====       2 uzduotis:      =====");

if ( a < b && a < c) {
    console.log ('Skaicius a maziausas');
    } else if ( b < a && b < c) {
        console.log(' skaicius b maziausas');
    } else if ( c < a && c < b) {
        console.log('skaicius c maziausias')
    }



console.log("==================================");
console.log("=====     Logines uzduotys   =====");
console.log("=====       3 uzduotis:      =====");

let p1 = 5, p2 = 8, p3 = 9;

let vidurkis=((p1 + p2 + p3)/3);

console.log('vidurkis yra: ' , vidurkis);

if (( 8 <= vidurkis) && (vidurkis <= 10)){
console.log('vidurkis 8-10');
} else if ((vidurkis <8) && (vidurkis >= 5)) {
    console.log('[5-8]');
} else {
    console.log(' vidurkis mazesnis uz 5');
}




console.log("==================================");
console.log("=====     Logines uzduotys   =====");
console.log("=====       4 uzduotis:      =====");


if ((a === 0) || (a > c)) {
    console.log('pirmas skaičius yra didesnis už antrąjį arba yra lygus 0');
} if ((c === 5) || (a < c)) {
    console.log('antras skaičius yra didesnis už pirmąjį arba yra lygus 5');
} if((a > c) && (c === 20)) {
    console.log('pirmasis skaicius didesnis uz antraji');
}if((a < c) && (c < 100)) {
    console.log('antrasis skaicius didesnis uz pirmaji');
}