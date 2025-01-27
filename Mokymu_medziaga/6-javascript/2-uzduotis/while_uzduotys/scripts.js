console.log ( '======= Uzduotis 13 ======== ');
let klientoPinigai = 2.45;
let kavosKaina = 0.6;

let graza = 0;

if (klientoPinigai > kavosKaina) {
    graza = klientoPinigai - kavosKaina;

}
console.log('grazos skaicius:' , graza);
 /* sprendimas be ciklo "while"*/
 console.log('be ciklo')
if (graza > 0 ) {
    let moneta50 = Math.floor(graza / 0.5);
    let moneta20 = Math.floor((graza -moneta50 *0.5) / 0.2);
    let moneta10 = Math.floor((graza -moneta50 *0.5 - moneta20 * 0.2) / 0.1);
    let moneta1 = Math.floor((graza -moneta50 *0.5 - moneta20 * 0.2 - moneta10 * 0.1) / 0.01);
    console.log('50:',moneta50);
    console.log('20:',moneta20);
    console.log('10:', moneta10);
    console.log('1:', moneta1)

/*sprendimas su "while" ciklu"*/
console.log('su ciklu');
 moneta50 = 0;
     moneta20 = 0;
     moneta10 = 0;
     moneta1 = 0;
     console.log(graza)
while (graza > 0) {
    if (graza >= 0.5){
        moneta50++;
        graza = parseFloat(graza - 0.5).toFixed(2)
        console.log(graza)
    } else if (graza >= 0.2) {
        moneta20++;
        graza = parseFloat(graza - 0.2).toFixed(2)
        console.log(graza)
    } else if (graza >= 0.1) {
        moneta10++;
        graza = parseFloat(graza - 0.1).toFixed(2)
        console.log(graza)
    } else if (graza > 0) {
        moneta1++;
        graza = parseFloat(graza - 0.01).toFixed(2)  
    }
}


console.log('50:',moneta50);
    console.log('20:',moneta20);
    console.log('10:', moneta10);
    console.log('1:', moneta1);
}