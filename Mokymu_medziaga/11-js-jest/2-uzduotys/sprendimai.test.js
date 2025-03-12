const [
  apskritimoPlotas,
  palindrome,
  rastiMax,
  pridetiKaina,
  uzdelsimas,
  grazinaNull,
] = require("./sprendimai");

describe("1 uzd: ", () => {
  test("ar apskirtimo plotas teisingai paskaiciuotas", () => {
    expect(apskritimoPlotas(2)).toBeCloseTo(12.566370614359172);
  });
});

// 2 uzduotis

describe("2 uzd: ", () => {
  test("zodis yra palindormas", () => {
    const result = palindrome("eme");
    expect(result).toBe(true);
  });
  test("zodis nera palindromas", () => {
    expect(palindrome("uzduotys")).toBe(false);
  });
});

// 3 uzduotis

describe("3 uzd: ", () => {
  test("grazina max reiksme is teigiamu skaiciu", () => {
    const result = rastiMax([1, 2, 4, 78, 10]);
    expect(result).toBe(78);
  });
  test("grazina max reiksme is neigiamu skaiciu", () => {
    expect(rastiMax([-1, -22, -14, -8, -11])).toBe(
      -1
    ); /*trumpesnis variantas nei pirmas testas*/
  });
  test("grazina klaida jei masyvas yra tuscias", () => {
    expect(() => rastiMax([])).toThrow(
      "neteisingai ivestas parametras skaiciai"
    );
  });
  test("grazina klaida jei pateiktas parametras nera masyvas", () => {
    expect(() => rastiMax("masyvas")).toThrow(
      "neteisingai ivestas parametras skaiciai"
    );
  });
});

// 4 uzduotis

describe("4 uzd: ", () => {
  test("kaina reiksme prisidejo", () => {
    const objektas = { pavadinimas: " Preke 1" };
    const result = pridetiKaina(objektas);
    expect(result).toEqual({ pavadinimas: " Preke 1", kaina: 50 });
  });

  test("rodo klaida, jei kaina jau yra objekte", () => {
    const objektas = { kaina: 100 };
    const result = pridetiKaina(objektas);
    expect(result).toBe("Objektas jau turi kainą!");
  });
});

// 5 uzduotis

describe("5 uzd: ", () => {
  test("grazina atsakyma iki 1 sek", async () => {
    const result = await uzdelsimas(500);
    expect(result).toBe("uzdelsimas mazesnis nei 1 sek");
  });
  test("grazina klaida po didelio delay virs 1 sek", async () => {
    await expect(uzdelsimas(1500)).rejects.toThrow(
      "klaida: uzdelsimas ilgiau nei 1 sek"
    );
  });
});

// 6 uzduotis

describe("6 uzd: ", () => {
  test("visada bus null", () => {
    expect(grazinaNull()).toBeNull();
  });
});
