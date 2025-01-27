console.log("=================================");
console.log("=====     Switch uzduotys    ====");
console.log("=====       1 uzduotis:      ====");

let number1 = 1;

switch (number1) {
  case 1:
    console.log("Sveikiname! Laimejote vandens");
    break;
  case 2:
    console.log("Sveikiname! Laimejote limonada");
    break;
  case 3:
    console.log("Sveikiname! Laimejote arbatos");
    break;
  case 4:
    console.log("Sveikiname! Laimejote kavos");
    break;
  default:
    console.error("Bandyk dar karta");
}

console.log("=================================");
console.log("=====     Switch uzduotys    ====");
console.log("=====       2 uzduotis:      ====");

let n1 = 3, n2 = 6, n3 = 3;

switch (n1) {
  case 1 :
    console.log(n1 + n2 + n3);
    break;
  case 2:
    console.log(n2 * n3);
    break;
  case 3:
    console.log(n1 ** 2);
    break;
  default:
    console.error("Nemoku skaiciuoti");
}

console.log("=================================");
console.log("=====     Switch uzduotys    ====");
console.log("=====       3 uzduotis:      ====");

let klaida= 'A1';

switch (klaida) {
    case 'A1':
      console.log('Ivestas neteisingas slaptazodis');
      break;
    case 'A2':
      console.log('Ivestas neteisingas el.pastas');
      break;
    case 'A3':
      console.log('Ivestas senas slaptazodis');
      break;
    default:
      console.error('bendra kalida');
  }