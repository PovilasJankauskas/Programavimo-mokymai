/*1 uztuodis 
1. Sukurkite dvi funkcijas, pirmoji funkcija turi kreiptis į antrąją. 
Funkcijos gali daryti bet ką. Užmockinkite
antrąją funkciją testo descriptione. Testo esmė - patikrinti ar mock buvo panaudotas (toHaveBeenCalled) */

function car(brand, mark) {
  return "Megstamiausia tacka , " + this.getCar(brand, mark);
}
function getCar(brand, mark) {
  return brand + " " + mark;
}

module.exports = { car, getCar };

//2 uztuodis
//3 uztuodis
