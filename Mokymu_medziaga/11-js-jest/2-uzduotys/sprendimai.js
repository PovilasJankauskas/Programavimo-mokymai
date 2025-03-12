/* 1. Sukurkite funkciją, kuri apskaičiuotų apskritimo plotą. 
Plotas yra apskaičiuojamas pagal šią formulę: S=π*r^2. 
Jūsų funkcija turėtų priimti vieną argumentą, kuris būtų r reikšmė.
 Sukurkite unit test, naudojantis biblioteka Jest, kuris ištestuotų
  ar jūsų funkcija veikia tinkamai.
*/
//describe ('1 uzd: ', () => {});
function apskritimoPlotas(r) {
  return Math.PI * Math.pow(r, 2);
}

/*Sukurkite funkciją, kuri tikrintų ar pateiktas kaip argumentas žodis yra palindromas (skaitosi taip pat skaitant ir nuo priekio ir nuo galo, pvz ėmė). Ištestuokite ar jūsų funkcija veikia teisingai. Turėkite du testo scenarijus - vieną, kur paduodamas tinkamas žodis ir antrą, kur gautas žodis nėra palindromas Funkcija, kuri padės surasti palindromus:
function palindrome(str) {
const cleanStr = str.replace(/[\W_]/g, '').toLowerCase()
const reverseStr = cleanStr.split('').reverse().join('')
return cleanStr === reverseStr}
palindrome("A man, a plan, a canal. Panama")

describe("2 uzd: ", () => {}); */

function palindrome(str) {
  const cleanStr = str.replace(/[\W_]/g, "").toLowerCase();
  const reverseStr = cleanStr.split("").reverse().join("");
  return cleanStr === reverseStr;
}
palindrome("A man, a plan, a canal. Panama");

/* 3.  Sukurkite funkciją, kuri kaip argumentą priimtų skaičių masyvą. Funkcijos esmė grąžinti didžiausią skaičių. Parašykite keletą testų patikrinimui ar jūsų funkcija veikia tinkamai.
grazina max is teigiamu skaiciu
grazina max is neigiamu skaiciu
grazina klaida jei masyvas yra tuscias
grazinas klaida jei paduotas nemasyvas
*/
function rastiMax(skaiciai) {
  if (!Array.isArray(skaiciai) || !skaiciai.length) {
    throw new Error("neteisingai ivestas parametras skaiciai");
  }

  return Math.max(...skaiciai);
}

/* 4. Ištestuokite funkciją, kuri kaip argumentui pateiktam objektui prideda naują reikšmę "kaina: 50", jeigu objektas property kaina jau turėjo, jūsų funkciją turėtų grąžinti string - "Objektas jau turi kainą!" Ištestuokite abu funkcijos scenarijus. Teigiamą ir neigiamą.
prideta kaina prie objekto
rodo klaida, kai objektas jau turi kaina */

function pridetiKaina(objektas) {
  if (objektas.hasOwnProperty("kaina")) {
    return "Objektas jau turi kainą!";
  }
  objektas.kaina = 50;
  return objektas;
}

/* 5. Sukurkite async funkciją, kuri po tam tikro delay grąžins jum response. 
Ši funkcija kaip parametrą priima patį delay (tam galėsite panaudoti setTimeout) 
jeigu delay didesnis nei 5s funkcija turėtų grąžinti klaidą,
 jeigu ne - grąžins jūsų pasirinktą atsakymą. Jums teks ištestuoti abu scenarijus.
grazina ats po mazo delay
grazina ats po didelio delay
*/

function uzdelsimas(delay) {
  return new Promise((resolve, reject) => {
    if (delay > 1000) {
      reject(new Error("klaida: uzdelsimas ilgiau nei 1 sek"));
    } else {
      setTimeout(() => {
        resolve("uzdelsimas mazesnis nei 1 sek");
      }, delay);
    }
  });
}

/* 6. Sukurkite funkciją, kuri jums visada grąžins null.
 Naudojantis .toBeNull() patikrinkite ar jūsų funkcija veikia tinkamai.
patikrinti ar funkcija grazina null
*/
function grazinaNull() {
  return null;
}

module.exports = [
  apskritimoPlotas,
  palindrome,
  rastiMax,
  pridetiKaina,
  uzdelsimas,
  grazinaNull,
];
