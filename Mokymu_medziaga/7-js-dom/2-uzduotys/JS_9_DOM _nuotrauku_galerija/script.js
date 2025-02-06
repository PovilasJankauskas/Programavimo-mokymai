let mygtAtgal = document.querySelector(".selected-image button#back");
let mygtPirmyn = document.querySelector(".selected-image button#next");
let selectedImage = document.querySelector(".selected-image");
let cardItemName = "card-item";
let skaidreDabar = 1;
let skaidriuViso = 5;

function changeDivBGImage(source) {
  selectedImage.style.background = `url(${source})`;
  selectedImage.style.backgroundSize = `cover`;
  selectedImage.style.backgroundPosition = `center`;
}

mygtAtgal.addEventListener("click", () => {
  // jeigu pasiekem pradzia, einam i paskutine skaidre,
  // jei esam ne pirmoj skaidrej, paeinam viena atgal
  if (skaidreDabar == 1) {
    skaidreDabar = skaidriuViso;
  } else {
    skaidreDabar--;
  }
  let imgSource = document
    .querySelector(`.${cardItemName}${skaidreDabar} img`)
    .getAttribute("src");
  changeDivBGImage(imgSource);
  //console.log(skaidreDabar);

  // isjungiam dabartine aktyvia skaidre
  document.querySelector(".card.active").classList.remove("active");

  // ijungiam reikiama skaidre
  // generuojam klase .skaidre1 / .skaidre2 / ... ir uzdedam jai aktyvi
  document
    .querySelector("." + cardItemName + skaidreDabar)
    .classList.add("active");

  //console.log('ieskome klases:', '.skaidre' + skaidreDabar);
});

mygtPirmyn.addEventListener("click", () => {
  // jei esam paskutinej skaidre, einam i pirma
  // jei esam ne paskutinej, einam viena i prieki
  if (skaidreDabar == skaidriuViso) {
    skaidreDabar = 1;
  } else {
    skaidreDabar++;
  }

  let imgSource = document
    .querySelector(`.${cardItemName}${skaidreDabar} img`)
    .getAttribute("src");
  changeDivBGImage(imgSource);
  //console.log(skaidreDabar);

  // isjungiam dabartine aktyvia skaidre
  document.querySelector(".card.active").classList.remove("active");

  // ijungiam reikiama skaidre
  // generuojam klase .skaidre1 / .skaidre2 / ... ir uzdedam jai aktyvi
  document.querySelector(
    "." + cardItemName + skaidreDabar.classList.add("active")
  );

  //console.log('ieskome klases:', '.skaidre' + skaidreDabar);
});

let elementai = document.querySelectorAll(".image-gallery .card");

elementai.forEach((elementas) => {
  elementas.addEventListener("click", () => {
    let imgSource = elementas.querySelector("img").getAttribute("src");
    selectedImage.style.background = `url(${imgSource})`;
    changeDivBGImage(imgSource);
    skaidreDabar = [...elementas.classList]
      .find((elementas) => elementas.includes(cardItemName))
      .slice(cardItemName.length);
    document
      .querySelector(".image-gallery .card.active")
      .classList.remove("active");
    elementas.classList.add("active");
  });
});
