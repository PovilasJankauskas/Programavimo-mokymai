import { useState } from "react";

const Vistos = () => {
  const dienosUzsakymai = 42;
  const [padetiKiausiniai, setPadetiKiausiniai] = useState("");

  const visoPadetiKiausiniaiHandler = (event) => {
    setPadetiKiausiniai(event.target.value);
  };

  const arPakaksKiausiniu = () => {
    const likutis = padetiKiausiniai - dienosUzsakymai;
    if (padetiKiausiniai >= dienosUzsakymai) {
      return `Vištos spėja padėti užsakytą kiekį kiaušinių ir yra perteklius ${likutis}`;
    } else if (padetiKiausiniai < dienosUzsakymai) {
      return `nespėja padėti užsakyto kiekio kiaušinių, trūkumas ${likutis}`;
    }
  };

  return (
    <>
      <h2> Vištos </h2>
      <label htmlFor="kiausiniaiInput"> Padėta kiaušinių: </label>
      <input
        type="number"
        onChange={visoPadetiKiausiniaiHandler}
        id="kiausiniaiInput"
      />

      <p>
        Klientų užsakymas: {dienosUzsakymai}
        <br></br>
        Viso padėta kiaušinių : {padetiKiausiniai}
        <br></br>
        Užsakymų įvykdimo būsena: {arPakaksKiausiniu()}
      </p>
    </>
  );
};
export default Vistos;
/* Komponentas „Vistos“
1. Susikurkite įvesties laukelį į kurį būtų galima suvesti kiek bendrai tą dieną vištos padėjo
kiaušinių.
2. Komponente susikurkite paprastą kintamąjį (be būsenos), kuriame būtų užfiksuota kiek
dienos užsakymų turėtų ūkis įgyvendinti (šis skaičius nesikeičia, nes turi pastovius
klientus).
3. Komponente susikurkite kintamąjį su būsena (state), prie kurio priskirsite reikšmę iš input.
4. Vartotojui įvedus reikšmę į įvesties laukelį, atnaujinkite atitinkamo kintamojo reikšmę.
5. Susikurkite funkciją, kuri įvertina ar ūkis įgyvendins šios dienos užsakymus (palygins
užsakymų kintamąjį su išperėtų kiaušinių kiekio kintamuoju). Jeigu įgyvendinti spėja –
funkcija išveda, kad viskas gerai ir parodo perteklių, o jeigu nespėja – parašo, kad nespėja
ir parodo trūkumą. Iškvieskite šią funkciją paragrafe. */
