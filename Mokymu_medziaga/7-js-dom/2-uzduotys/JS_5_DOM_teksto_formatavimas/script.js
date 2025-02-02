function changeTextElementFontWeight(value) {
  textElement.style.fontWeight = value;
}

function toggleActiveButton(button) {
  if (button.classList.contains("active")) {
    button.classList.remove("active");
  } else {
    button.classList.add("active");
  }
}

let buttonBasic = document.getElementById("buttonBasic");
let buttonBold = document.getElementById("buttonBold");
let buttonItalic = document.getElementById("buttonItalic");
let inputFontSize = document.getElementById("inputFontSize");

let textElement = document.querySelector("p.text");

inputFontSize.addEventListener("input", () => {
  textElement.style.fontSize = inputFontSize.valueAsNumber + "px";
});

buttonBasic.addEventListener("click", () => {
  buttonBold.classList.remove("active");
  toggleActiveButton(buttonBasic);
  changeTextElementFontWeight(300);
});

buttonBold.addEventListener("click", () => {
  buttonBasic.classList.remove("active");
  toggleActiveButton(buttonBold);
  changeTextElementFontWeight(700);
});

buttonItalic.addEventListener("click", () => {
  toggleActiveButton(buttonItalic);
  const italicStyleName = "italic";

  if (textElement.style.fontStyle === italicStyleName) {
    textElement.style.fontStyle = "normal";
  } else {
    textElement.style.fontStyle = italicStyleName;
  }
  // textElement.style.fontStyle = "Italic";
  //   textElement.style.fontWeight = 500;
  // kitas galimas variantas
});
