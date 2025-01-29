let inputSkaicius = document.getElementById('inputSkaicius');

document.querySelector('button').addEventListener('click', () => {
let skaicius = inputSkaicius.valueAsNumber;
let rezultatas = document.querySelector('.result');
if (skaicius % 2 === 0 ) {
    rezultatas.innerText = 'Lyginis';
    rezultatas.style.cssText = 'color: #000; background-color: green';
} else {
    rezultatas.innerText = 'Neyginis';
    rezultatas.style.cssText = 'color: #000; background-color: red';
}
});