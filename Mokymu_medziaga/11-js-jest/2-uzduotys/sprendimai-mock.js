/*1 uztuodis 
1. Sukurkite dvi funkcijas, pirmoji funkcija turi kreiptis į antrąją. 
Funkcijos gali daryti bet ką. Užmockinkite
antrąją funkciją testo descriptione. 
Testo esmė - patikrinti ar mock buvo panaudotas (toHaveBeenCalled) */

function car(brand, mark) {
  return "Megstamiausia tacka , " + this.getCar(brand, mark);
}
function getCar(brand, mark) {
  return brand + " " + mark;
}

//2 uztuodis Sukurkite dvi funkcijas, pirmoji funkcija turi kreiptis į antrąją.
//  Funkcijos gali daryti bet ką. Užmockinkite antrąją funkciją testo descriptione.
// Testo esmė - patikrinti kokie argumentai buvo perduoti (toHaveBeenCalledWith)

function skaiciuokSuma(a, b) {
  return a + b + this.getThirdNumber(b);
}
function getThirdNumber(c) {
  return c * 2;
}

//3 uztuodis 3. Sukurkite dvi funkcijas, pirmoji funkcija turi kreiptis į antrąją.
//  Funkcijos gali daryti bet ką. Užmockinkite antrąją funkciją testo descriptione ir
//  paduokite jai grąžinamą reikšmę (mockReturnValue()).
//  Testo esmė - patikrinti ar funkcija grąžina tinkamą rezultatą.

module.exports = { car, getCar, skaiciuokSuma, getThirdNumber };
