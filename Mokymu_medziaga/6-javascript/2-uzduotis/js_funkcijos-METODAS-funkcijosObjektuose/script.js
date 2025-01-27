console.log("================================");
console.log("====   Funkcijos Metodai dalis uzduotys    =====");

let darbuotojas = {
  vardas: "Vaida",
  pavarde: "Vaidaite",
  atlyginimas: 1500,
  etatas: 1,
  pakeltas_atlyginimas: function (procentai) {
    let pakeltas = (this.atlyginimas * procentai) / 100;
    return this.atlyginimas + pakeltas;
  },
  pakeistasEtatas: function(naujasEtatas) {
    return this.atlyginimas * naujasEtatas / this.etatas;
  },
};

console.log(darbuotojas);

let naujasAtlyginimas = darbuotojas.pakeltas_atlyginimas(20);
console.log('Naujas atlyginimas padidinus 20%', naujasAtlyginimas , 'EUR');

let naujasEtatas = darbuotojas.pakeistasEtatas(0.5);
console.log( ' Atyliginimas sumažinus etatą 0,5', naujasEtatas, 'EUR');