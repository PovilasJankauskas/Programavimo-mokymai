/*duomenys*/

let dl = 8;
console.log('darbo valandos per diena: ' , dl);

let k = 6;
console.log('iskepti kepalai per valanda:' , k);

let d = 4;
console.log('darbuotoju skaicius: ' , d);

let s = 0.69;
console.log('kepalo savikaina: ' , s);

let kaina = 3.80;
console.log ('kepalo kaina: ' , kaina);

let u = 200;
console.log ('uzsakymai per diena: ' , u);

/*Skaiciavimai*/

/*1*/

console.log ('Iskepama kepalu per diena: ', ((d * k)*dl));

let kp= (d * k)*dl ;
/*2*/

let us = kp * s;
console.log ('uzsakymo savaikaina: ', us);

let pp = kp * kaina;
console.log ('pardavimo pajamos: ' , (kp * kaina));

let p = pp - us;
console.log('pelnas: ', p);

/*3*/

if ( u < kp){
    console.log ('Spes pagaminti uzsakyma')
}; if ( u > kp ){
    console.log( 'Nespes pagaminti uzsakymo, truksta: ', (u -kp))
}; 


/*4*/
let nepard = 12;

if ( nepard <= kp){
console.log(((kp-nepard) * kaina))+ ('pajamos gaunamos tik uz parduotus kepalus: ')
}








