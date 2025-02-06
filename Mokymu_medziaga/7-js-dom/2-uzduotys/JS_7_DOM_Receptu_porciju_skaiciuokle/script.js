/* naujoku sprendimas

let vistienosReceptas = document.getElementById('vistienosSalotos');

vistienosReceptas.addEventListener('click', function() {
    let vistienosSalotos = {
        vistiena: 300,
        salotos: 400,
        pomidorai:200,
        agurkai: 100,
        padazas: 50
    };

console.log(vistienosSalotos);

let resultsDiv = document.getElementById('rezultatai');

resultsDiv.innerHTML = `<p><strong>Vištienos: </strong>${vistienosSalotos.vistiena} gramų </p>
<p><strong>Salotu: </strong>${vistienosSalotos.salotos} gramu </p> 
<p><strong>Pomidoru: </strong>${vistienosSalotos.pomidorai} gramu </p>
<p><strong>Agurku: </strong>${vistienosSalotos.agurkai} gramu </p>
<p><strong>Padazo: </strong>${vistienosSalotos.padazas} gramu </p>
`
});

let tortoReceptas = document.getElementById('tortas');

tortoReceptas.addEventListener('click', function() {
    let tortas = {
        miltu: 400,
        kiausiniu: 4,
        sviesto:200,
        melyniu: 100,
        grietineles: 50
    };

console.log(tortas);

let resultsDiv = document.getElementById('rezultatai');

resultsDiv.innerHTML = `<p><strong>miltu: </strong>${tortas.miltu} gramų </p>
<p><strong>Kiausiniu: </strong>${tortas.kiausiniu} vnt. </p> 
<p><strong>Sviesto: </strong>${tortas.sviesto} gramu </p>
<p><strong>Melyniu: </strong>${tortas.melyniu} gramu </p>
<p><strong>Grietineles: </strong>${tortas.grietineles} gramu </p>
`
});

let makaronuReceptas = document.getElementById('makaronai');

makaronuReceptas.addEventListener('click', function() {
    let makaronai = {
        makaronai: 100,
        farsas: 200,
        svogunai:1,
        pasta: 50,
        bazilikas: 1
    };

console.log(makaronai);

let resultsDiv = document.getElementById('rezultatai');

resultsDiv.innerHTML = `<p><strong>Makaronu: </strong>${makaronai.makaronai} gramų </p>
<p><strong>Farso: </strong>${makaronai.farsas} gramu </p> 
<p><strong>Svogunai: </strong>${makaronai.svogunai} vnt </p>
<p><strong>Pasta: </strong>${makaronai.pasta} ml </p>
<p><strong>Bazilikas: </strong>${makaronai.bazilikas} vnt </p>
`
});
*/

/* pro sprendimas */

let receptai = [
  {
     id: 1,
    pavadinimas: "Vištienos salotos",
    aprasymas:
      "Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus pu rus faucibus elit ut. Pellentesque montes.",
    imgUrl: "images/salotos.svg",
    receptas: [
      { pavadinimas: "Vištiena", kiekis: 100, matavimoVienetai: "g" },
      { pavadinimas: "salotos", kiekis: 90, matavimoVienetai: "g" },
      { pavadinimas: "pomidorai", kiekis: 50, matavimoVienetai: "g" },
      { pavadinimas: "agurkai", kiekis: 70, matavimoVienetai: "g" },
      { pavadinimas: "padazas", kiekis: 90, matavimoVienetai: "ml" },
    ],
  },
  {
    id: 2,
    pavadinimas: "Tortas su melynemis",
    aprasymas:
      "Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus pu rus faucibus elit ut. Pellentesque montes.",
    imgUrl: "images/tortas.svg",
    receptas: [
      { pavadinimas: "Miltai", kiekis: 300, matavimoVienetai: "g" },
      { pavadinimas: "Kiausiniai", kiekis: 2, matavimoVienetai: "g" },
      { pavadinimas: "Sviestas", kiekis: 80, matavimoVienetai: "g" },
      { pavadinimas: "Melynes", kiekis: 50, matavimoVienetai: "g" },
      { pavadinimas: "Grietinele", kiekis: 100, matavimoVienetai: "ml" },
    ],
  },
  {
    id: 3,
    pavadinimas: "Makaronai su mesa",
    aprasymas:
      "Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus pu rus faucibus elit ut. Pellentesque montes.",
      imgUrl: "images/makaronai.svg",
    receptas: [
      { pavadinimas: "Makaronai", kiekis: 300, matavimoVienetai: "g" },
      { pavadinimas: "Farsas", kiekis: 150, matavimoVienetai: "g" },
      { pavadinimas: "svogunai", kiekis: 1, matavimoVienetai: "vnt." },
      { pavadinimas: "pasta", kiekis: 30, matavimoVienetai: "ml" },
      { pavadinimas: "bazilikas", kiekis: 1, matavimoVienetai: "vnt." },
    ],
  },
];
let inputReiksme = document.querySelector(".porcijos p");
let porcijuSkaicius = 1;
let pasirinktasReceptas = null;
/*div kortele galima aprasyti su adeventlistener on load. Kad veiktu reikia istrinti div kortele HTMl'e
*/

window.addEventListener('load',() => {
    let korteliuHTML = '';
    console.log('load');
    
    for (let receptas of receptai) {
        korteliuHTML += `
        <div class="kortele"  id="receptas-${receptas.id}" onclick="onKortelesPaspaudimas(${receptas.id})">     
        <img src="${receptas.imgUrl}">
        <div class="text">
            <h4>${receptas.pavadinimas}</h4>
            <p>${receptas.aprasymas}</p>
            </div>
 <img id="recepto-statusas" src="images/check.svg" class="hide" />
        </div>
        `;
    }
         document.querySelector('.korteles').innerHTML = korteliuHTML;
});


function receptoHTMLgeneravimas(id) {
  let receptas = receptai.find((el) => el.id === id).receptas;
  let receptoHTML = "";
  for (let property in receptas) {
    receptoHTML += `<p>${receptas[property].pavadinimas}: 
      <strong>${receptas[property].kiekis * porcijuSkaicius} </strong>
      <strong>${receptas[property].matavimoVienetai} </strong></p>`;
    console.log(property);
  }
  return receptoHTML;
}

function onKortelesPaspaudimas(id) {
  pasirinktasReceptas = id;
  document.getElementById("rezultatai").innerHTML = receptoHTMLgeneravimas(id);
  
document.querySelectorAll("#recepto-statusas").forEach(element => {
element.classList.remove('active');
element.classList.add('hide');
});

let activeElement = document.getElementById('receptas-' + id).querySelector('#recepto-statusas');
activeElement.classList.remove('hide');
activeElement.classList.add('active');
}

document.querySelector(".porcijos input").addEventListener("input", (e) => {
  porcijuSkaicius = event.target.value;
  if (pasirinktasReceptas !== null) {
    document.getElementById("rezultatai").innerHTML =
      receptoHTMLgeneravimas(pasirinktasReceptas);
  }
});
