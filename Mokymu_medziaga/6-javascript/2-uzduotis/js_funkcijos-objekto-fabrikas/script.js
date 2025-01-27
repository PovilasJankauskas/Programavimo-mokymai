console.log('----------------uzduotis--------------');

/*Praeitame skyriuje sukurtą darbuotojo objektą pasikopijuokite į naują gamyklos (factory) funkciją, kuri galėtų sukurti daugiau tokių objektų. Pritaikykite objektą, kad duomenis prisiskirtų iš funkcijos argumentų. Už funkcijos ribų sukurkite ir sudėkite keletą tokių darbuotojų į masyvą. Tuomet mėginkite prasukti ciklą pro sukurtą darbuotojų masyvą ir išsiveskite darbuotojų duomenis, taip pat, pakvieskite skaičiavimų funkcijas ir pasižiūrėkite gaunamus rezultatus. */

function darbuotojuFactory (vardas, pavarde, atlyginimas, pareigos){

return{
    vardas,
    pavarde,
    atlyginimas,
    pareigos
  }
}
let darbuotojai = [
    darbuotojuFactory( 'Jonas' , 'Jonauskas', 1500, 'Vadovas'),
    darbuotojuFactory('Petras', 'Petrauskas', 1200, 'Vairuotojas'),
    darbuotojuFactory('Vaida', 'Vaidaite', 2000,'Gamybos Vadove'),
    darbuotojuFactory('Povilas', 'Povilaitis', 800, 'valytojas'),
    darbuotojuFactory('Ignas', 'Ignaitis', 1600, 'Vadybininkas'),
];

darbuotojai.forEach((darbuotojas) => {
    console.log('Vardas:', darbuotojas.vardas);
    console.log('Pavardė:', darbuotojas.pavarde);
    console.log('Atlyginimas:', darbuotojas.atlyginimas, 'EUR');
    console.log('Pareigos:', darbuotojas.pareigos);
});
