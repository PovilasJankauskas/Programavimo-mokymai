console.log('-------- 1 uzduotis -------------');
/* Apversti string tipo kintamojo reikšmę. pvz: labas -> sabal. for ir metodu. */

function apverstasZodis(string) {
    let apverstas = '';
    for (let i = string.length -1; i >=0; i--) {
        apverstas += string[i];
    }
    return apverstas;
}

console.log(apverstasZodis('Labas'));

function apverstasZodisNaudojantMethod(zodis) {
    return zodis.split('').reverse().join('');
}
let zodis = 'Labas';
console.log('Apverstas zodis naujodant method -',apverstasZodisNaudojantMethod(zodis));

console.log('-------- 2 uzduotis -------------');
/* Funkcija, kuri tikrins ar tekste yra tam tikras zodis/sakinys. 
naudojant tik for
true / false
pvz :  Funkcija, kuri tikrins ar tekste yra tam tikras sakinys.  
tekste -> true
tekstas -> false*/

let sakinys = 'sunkiau nei maniau';
let ieskomasZodis = 'nei';
function turiZodi(sakinys, ieskomasZodis) {
    return sakinys.includes(ieskomasZodis);
}
console.log(sakinys);
console.log('ieskomas zodis method budu', ieskomasZodis);
console.log('Ar sakinyje yra zodis "nei" ?', turiZodi(sakinys, ieskomasZodis));

console.log ('----paieska for budu-----------');

function patikrintiZodi(sakinys, ieskomasZodis) {
    for (let i = 0; i < sakinys.length; i++) {
        if (sakinys.substring(i, i + ieskomasZodis.length) === ieskomasZodis) {
            return true;
        }
    }
    return false;
}


console.log(patikrintiZodi(sakinys,ieskomasZodis));

ieskomasZodis = 'lengviau';
console.log(patikrintiZodi(sakinys, ieskomasZodis));

