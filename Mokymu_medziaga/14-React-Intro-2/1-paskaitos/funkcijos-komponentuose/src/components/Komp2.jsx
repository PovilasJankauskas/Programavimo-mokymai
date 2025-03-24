const Komp2 = () => {
  let skaiciai = [10, 100, 21, 78, 45, 107];

  const didziausiasSk = (mas) => {
    return Math.max(...mas);
  };
  /* for arba while ciklas begam(kodas tikrina masyvo duomenis) per masyva ir ieskom didziausio. Taip geriau rašyti kai ieškai darbo

    const didziausiasSk = (mas) => {
      if (mas.length === 0) {
        return undefined;
      }
  
      let didziausias = mas[0];
  
      for (let i = 1; i < mas.length; i++) {
        if (mas[i] > didziausias) {
          didziausias = mas[i];
        }
      }


      "console.log("ciklas su while")


      const didziausiasSk = (mas) => {
    if (mas.length === 0) {
      return undefined;
    }

    let didziausias = mas[0];
    let i = 1;

    while (i < mas.length) {
      if (mas[i] > didziausias) {
        didziausias = mas[i];
      }
      i++;
    }

    return didziausias;
  }; */
  const maziausiasSk = (mas) => {
    return Math.min(...mas);
  };

  const vidurkisSk = (mas) => {
    /* ilgas kodas, standartinis ir plačiai naudojamas nes lengvesnis ir ne toks sudetingas kaip map.reduce 
    
    let suma = 0;
    mas.forEach((sk) => {
      suma += sk;
    });
    return (suma / mas.length).toFixed(2); */

    //vienos eilutės kodas. next level

    return mas.reduce((suma, skaicius) => suma + skaicius, 0) / mas.length; //čia 0 gale iš esmės tas pats kas "suma = 0" kituose koduose, pvz aukščiau parašytam.
  };

  return (
    <div>
      Komp2
      <p> {skaiciai.join(",")}</p>
      <p>
        didziausias bus skaičius yra :<strong>{didziausiasSk(skaiciai)}</strong>
      </p>
      <p>
        mažiausias skaičius yra : <strong>{maziausiasSk(skaiciai)}</strong>
      </p>
      <p> Vidurkis yra: {vidurkisSk(skaiciai)}</p>
    </div>
  );
};

export default Komp2;
