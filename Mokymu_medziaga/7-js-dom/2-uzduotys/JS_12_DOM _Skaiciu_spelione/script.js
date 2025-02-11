let mygtSpeti = document.getElementById('speti');

mygtSpeti,addEventListener('click', () => {
let answer = 50;
let spejimas = document.getElementById('spejimas').value;
let resultDiv = document.getElementById('result');

if (spejimas > answer) {
    resultDiv.innerHTML = `<p>Spekite <span> mazesni </span> skaiciu</p>`
} else if (spejimas < answer) {
    resultDiv.innerHTML = `<p>Spekite <span> didesni </span> skaiciu</p>`
} 
document.querySelector('.atspetas-rezultatas').style.display = 'flex';

});