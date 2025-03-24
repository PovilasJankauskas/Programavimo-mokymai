import { suma } from "../utils/calculator";
// importuojant iš utils kad nereikėtų funkcijos rašyti čia, galima kelias funkcijas importuoti laužtiniuose skliaustuose įrašant per kablelį.

const Komp1 = () => {
  let skaicius = 57;
  let pirmas = 6,
    antras = 6;

  const patikrinkSkaiciu = (skaiciukas) => {
    return skaiciukas === 55 ? "skaicius yra 55" : "skaicius nėra 55";

    // if (skaiciukas === 55) {
    //   return "skaicius yra 55"
    // }else {
    //   return "skaicius nera 55"
    // }
    // abu variantai yra geri, tačiau pirmas linijinis kodas patogesnis ir greitesnis
  };
  return (
    <div>
      <h2>Skaiciai ir skaiciavimas</h2>
      <p>{skaicius}</p>
      <p>{skaicius + 5}</p>
      <p>{skaicius - 5}</p>
      <p>{skaicius * 5}</p>
      <p>{skaicius / 5}</p>
      <p>{patikrinkSkaiciu(skaicius)}</p>
      <p>{suma(pirmas, antras)}</p>
    </div>
  );
};

export default Komp1;

/*const Komp1 = ()=> {
    return (
        <div>
            komp1
        </div>
    )
}

export default Komp1*/
