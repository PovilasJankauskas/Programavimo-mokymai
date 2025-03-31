const Komp5 = () => {
  const Handler = (event) => {
    console.log(event.target);
    {
      /* target nurodo iš kur ateina event, šiuo atveju pirmas arba antras button*/
    }
    alert("event handleris ");

    console.log(event.target.textContent);
    {
      /* gražina tai kas yra tago viduje */
    }
  };

  return (
    <>
      <h4> Komp5</h4>
      <button id="pvz" onClick={Handler}>
        Pirmas <hr /> <strong>abc</strong>
      </button>
      {/* atributas id nėra react todėl rodo console.log . Jei numatyta HTML tada rodo console.log, jei yra iš virtual dom tada nerodo console.log */}
      <button className="pvz2" onClick={Handler}>
        Antras
      </button>
      {/* atributas className ract virtual dom todėl neatvaizduoja className, rodo class console.log'e */}
    </>
  );
};
export default Komp5;
