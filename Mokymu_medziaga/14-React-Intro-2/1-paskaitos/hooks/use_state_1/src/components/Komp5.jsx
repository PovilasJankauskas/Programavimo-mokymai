import { useState } from "react";

const Komp5 = () => {
  let [pasirinkimas, setPasirinkimas] = useState();

  /*const pasirinkimoHandler = (event) => {
    console.log("Pasirinkimas", "- " + event.target.innerText);
  }; */
  const pasirinkimoHandler = (event) => {
    console.log("Pasirinkimas", "- " + event.target.innerText);
    /* irgi tinka, iš esmės tas pats kas 14 eilutė 
    let naujasPasirinkimas = event.target.innerText;
    setPasirinkims(naujasPasirinkimas); */
    setPasirinkimas(event.target.innerText);
  };

  const tikrinti = () => {
    switch (pasirinkimas) {
      case "HTML":
        return "HTML - tai žymėjimo kalba";
      case "CSS":
        return "CSS - tai stiliaus kalba";
      case "JavScript":
        return "JavaScript - tai programavimo kalba";
      case "React":
        return "React - tai biblioteka";
      default:
        return "Nepasirinkta";
    }
  };

  return (
    <>
      <h4> Hooks Komp5 </h4>
      <h5> Pasirinkimas</h5>
      <p> Labiausiai patiko: </p>
      <button onClick={pasirinkimoHandler}> HTML </button>
      <button onClick={pasirinkimoHandler}> CSS </button>
      <button onClick={pasirinkimoHandler}> JavaScript </button>
      <button onClick={pasirinkimoHandler}> React </button>
      <p> Pasirinkote: {pasirinkimas} </p>
      <p> {tikrinti()} </p>
    </>
  );
};
export default Komp5;
