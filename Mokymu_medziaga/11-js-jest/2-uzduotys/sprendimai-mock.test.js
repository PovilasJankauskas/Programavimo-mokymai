const app = require("./sprendimai-mock");

describe("1 uzd:", () => {
  test("Ieskom tackos", () => {
    const mock = jest.fn().mockReturnValue("Audi Silke");
    app.getCar = mock;

    const result = app.car("Audi", "Silke");
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith("Audi", "Silke");
  });
});

describe("2 uzd:", () => {
  test("Mock used", () => {
    const mock = jest.fn().mockReturnValue(10);
    app.getThirdNumber = mock;

    const result = app.skaiciuokSuma(1, 10);
    expect(mock).toHaveBeenCalledWith(10);
    expect(result).toBe(21); //trecios uzduoties testo sprendimas
  });
});

describe("3 uzd:", () => {});
