let turiniuSkirtukai = [];

let turinioSkirtukuSkaicius = 3;
let turinys = document.querySelector(".turinys");
for (let i = 1; i <= turinioSkirtukuSkaicius; i++) {
  turiniuSkirtukai.push({
    skirtukas: document.querySelector(".skirtukai .skirtukas" + i),
    turinys: document.querySelector(".turinys .skirtukas" + i + "-turinys"),
  });
}

console.log(turiniuSkirtukai);

turiniuSkirtukai.forEach((turinys) => {
  turinys.skirtukas.addEventListener("click", (event) => {
    turiniuSkirtukai.forEach((turinys) => {
      turinys.skirtukas.classList.remove("aktyvus");
      turinys.turinys.classList.remove("aktyvus");
    });

    turinys.skirtukas.classList.add("aktyvus");
    turinys.turinys.classList.add("aktyvus");
  });
});
