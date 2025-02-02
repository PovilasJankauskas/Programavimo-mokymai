let skaiciai = document.getElementById("skaiciai");

let skaicius = 1;
let riba = 5;

let skaiciuLoop = document.querySelector(".skaiciai span");

document.querySelector("button#atgal").addEventListener("click", () => {
  if (skaicius === 1) {
    skaicius = riba;
  } else {
    skaicius--;
  }
  skaiciuLoop.innerText = skaicius;
});

document.querySelector("button#pirmyn").addEventListener("click", () => {
  if (skaicius === riba) {
    skaicius = 1;
  } else {
    skaicius++;
  }
  skaiciuLoop.innerText = skaicius;
});
