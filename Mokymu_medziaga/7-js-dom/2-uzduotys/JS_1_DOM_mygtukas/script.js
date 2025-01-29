let skaicius = 1;
let mygtukas = document.querySelector('button');
let tekstas = document.querySelector('p span');
let papildomasTekstas = document.querySelector('.info');



mygtukas.addEventListener('click', () => {
skaicius ++;
tekstas.innerHTML = skaicius;


if (skaicius <10 ){
    papildomasTekstas.style.font = 'black';
papildomasTekstas.innerHTML = 'Dar tik pradzia';
};
if (skaicius > 10 && skaicius <20 ){
    papildomasTekstas.style.font = 'black';
papildomasTekstas.innerHTML = 'nuo 10 iki 20';
};
if (skaicius >20 ){
    papildomasTekstas.style.font = 'black';
papildomasTekstas.innerHTML = 'Virs 20';
};


});