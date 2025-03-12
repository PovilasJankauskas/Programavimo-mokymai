const [
  maistoProduktai,
  duokMasyva,
  fakeAPI,
  atmerantiFunckija,
] = require("./examplesTesting");

describe("maistoProduktai:", () => {
  it(" yra pienas reiksme", () => {
    expect(maistoProduktai).toContain("pienas");
  });
});

/* pridedam duokMasyva*/
/*it('duok funkcija teisingai grazina masyvo reikmes', () => {
    expect(duokMasyva()).toGet(['bulves', 'pienas', 'duona', 'dešra', 'kefyras']);
}); blogas sprendimas, nes masyvas matomas kaip objektas, reikia naudoti žemiau naudojamą kodą */

describe("duokMasyva:", () => {
  it("duokMasyva funkcija teisingai grazina masyvo reikmes", () => {
    expect(duokMasyva()).toEqual([
      "bulves",
      "pienas",
      "duona",
      "dešra",
      "kefyras",
    ]);
  });

  it("masyve yra reikme duona", () => {
    const spy = jest.spyOn(duokMasyva);
    const data = duokMasyva();

    expect(spy).toHaveBeenCalled();
    expect(data).toContain("duona");
  });
});

/*pridedam fakeAPI*/
describe("fakeAPI:", () => {
  it(" teisingai grazina atsakyma iki 2sek.", async () => {
    const result = await fakeAPI(1000);
    expect(result).toBe("data data data");
  });

  it("ismeta klaida kai ats grazina ilgiau nei 2sek.", async () => {
    try {
      await fakeAPI(2500);
    } catch (error) {
      expect(error).toBe("per ilgas atsakymo laukimo laikas");
    }
  });

  test("fakeAPI teisingai grazina atsakyma iki 2sek.", async () => {
    const result = await fakeAPI(1000);
    expect(result).toBe("data data data");
  });

  //.toThrow() pavyzyds
  test("ismeta klaida kai ats grazina ilgiau nei 2sek.", async () => {
    try {
      await fakeAPI(2500);
    } catch (error) {
      expect(error).toBe("per ilgas atsakymo laukimo laikas");
    }
  });
});
//.rejects pavyzdys

// test('atmetantiFunckija error apdorojimas', async () => {
//     await expect(atmetantiFunckija()).rejects.toThrow('bad request');
// });
