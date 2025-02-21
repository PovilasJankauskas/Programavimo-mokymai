console.log('-------------1 uzduotis--------');
/* 1. Sukurkite JS funkciją, kurios parametras yra callback funkcija. Jūsų funkcija
turėtų vykdyti callback funkciją po 2s. */

function callBackPo2sekundziu(callback) {
    setTimeout(callback, 2000);

}

function sakykLabas() {
    console.log('labas')
}

callBackPo2sekundziu(sakykLabas)

console.log('-------------2 uzduotis--------');

/* 2. Sukurkite JS funkciją, kuri daro HTTP Request užklausą ir grąžina pažadą su
duomenimis. */


const people = async () => {
    const response = await fetch('https://api.tvmaze.com/people');

    if (response.status !== 200) {
        throw new Error('nepavyko gauti people duomenu')
    }
    return response.json();
}

people()
    .then(data => console.log(data))
    .catch(error => console.log(error));


console.log('-------------3 uzduotis--------');
/* Sukurti funkciją(1), kuri kaip parametrus priimtų skaičių masyvą ir callback
funkciją(2). Funkcija(1) turėtų iteruoti per masyvą ir siųsti kiekvieną jos narį
callback funkcijai(2). Callback funkcijos esmė - patikrinti ar gautas skaičius yra
lyginis ar nelyginis ir atitinkamą informaciją išvesti į konsolę.
Funkcija turėtų būti iškviečiama taip (pavadinimai gali būti kitokie):
pirmojiFunkcija(masyvas, callbackFunkcija)*/


function arLyginiai(mas, callback) {
    for (let item of mas) {
        callback(item);
    }
}

function patikrinkLyginisArNe(skaicius) {
    if (skaicius % 2 === 0) {
        console.log('lyginis')
    } else {
        console.log('nelyginis')
    };
}


let masyvas = [1, 2, 3, 4, 47, 52, 68];

arLyginiai(masyvas, patikrinkLyginisArNe)



console.log('-------------4 uzduotis--------');

/* 4. Sukurkite funkciją, kuri priima masyvą (kuris užpildytas "string" tipo
reikšmėmis(žodžiais)) ir callback funkciją. Funkcija turėtų iteruoti per masyvą ir
nusiųsti kiekvieną stringą esantį masyve callback funckijai. Callback funkcija turi
grąžinti atsiųsto "string" ilgį.
- susikurti funkciją patikrinkZodzioIlgi(masyvas, callbackFunkcija)
- funkcijos patikrinkZodzioIlgi esmė - panaudoti foreach ir kiekvienam masyvo

nariui iškviest funkciją koksIlgis(string) */



function patikrinkZodzioilgi(masyvas, callbackFunkcija) {
    masyvas.forEach(item => callbackFunkcija(item));
};

function koksIlgis(string) {
    console.log(
        `zodis ${string} ilgis yra - ${string.length}`
    )
}

let zodziai = ['labas', 'ate', 'kaip sekasi', 'batai'];

patikrinkZodzioilgi(zodziai, koksIlgis)

console.log('-------------5 uzduotis--------');

/* 5. Sukurkite funkciją, kuri kaip argumentus priima masyvą, sudarytą iš objektų ir
callback funkciją. Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną ten
esantį objektą (tarkim tai automobilis, turintis šias properties: rida, markė,
modelis, gamybos metai ir kaina (bet galite susikurti ir savo nuožiūra)) callback
funkcijai. Callback funkcija turėtų grąžinti naują objektą, kuriame būtų tik
atrinktos objekto properties, tarkim tik markė ir modelis) */

let auto = [
    { marke: 'audi', modelis: 'a7', kaina: 12300, rida: 156 },
    { marke: 'bmw', modelis: '325', kaina: 7453, rida: 5634 },
    { marke: 'skoda', modelis: 'Octavija', kaina: 10356, rida: 15615 },
];

function automobilis(masyvas, callbackFunkcija) {
    masyvas.forEach(item => callbackFunkcija(item));
}

function naujasObjektas(item) {
    console.log(
        {
            marke: item.marke,
            modelis: item.modelis
        }
    )
}

automobilis(auto, naujasObjektas);

console.log('-------------6 uzduotis--------');

/* 6. Sukurkite funkciją, kuri priims parametrą isUserLogedIn (reikšmė gali būti true
arba false). Jūsų funkcijos viduje, naudojantis Promise konstruktoriumi, sukursite
naują promise objektą, kuris tikrins ar isUserLogedIn yra true ar false, jeigu
paduotas parametras ar false, jūsų sukurtas promise turėtų reject’inti užklausą,
kitu atveju - resolvinam ir grąžinam pasirinktą pranešimą. Iškvieskite tą funkciją
naudojantis then ir catch, o gautą rezultatą atvaizduokite konsolėje. */

function checkUserLogin (isUserLogedIn) {
    return new Promise((resolve, reject) => {
        if (isUserLogedIn) {
            resolve ('user loged');
        } else {
            reject('user loged out');
        }
    })
}

checkUserLogin(true)
.then(message => console.log(message))
.catch(error => console.log(error));

checkUserLogin(false)
.then(message => console.log(message))
.catch(error => console.log(error));


console.log('-------------7 uzduotis--------');

/* 7. Sukurkite async funkciją, kuri priimtų parametrą "age". Funkcijos viduje
padarykite patikrinimą ar "age" yra paduotas ir ar jis yra skaičius - priešingu
atveju iškvieskite klaidą (throw). Toliau tikrinkite ar amžius yra daugiau nei 18,
jeigu taip, grąžinkite, kad “vartotojas gali laikyti vairuotojo egzaminą", priešingu
atveju iškvieskite klaidą (throw) ir parašykite, kad "jūsų amžius turi būti daugiau
nei 18". Iškvieskite šią funkciją naudojantis then ir catch. */

async function amziausPatikrinimas(age) {
    if (age === undefined || typeof age !== 'number') {
        throw new error ('amzius turi buti skaicius')
    } if (age > 18 ) {
        return 'Vartotojas gali laikyti vairuotojo egzamina'
    } else {
        throw new Error('jus turite buti pilnametis')
    }
}

amziausPatikrinimas(19)
.then(message => {
    console.log(message);
})
.catch(error => {
    console.log(error.message);
});