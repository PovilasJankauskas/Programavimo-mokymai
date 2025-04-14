const CounterMygtukai = (props) => {
  const onClickCounterHandler = (value) => {
    props.addValue(value);
  };
  return (
    <div>
      <h2> Mygtukai</h2>

      <button onClick={() => onClickCounterHandler(1)}> +1 </button>
      <button onClick={() => onClickCounterHandler(2)}> +2 </button>
      <button onClick={() => onClickCounterHandler(5)}> +5 </button>
    </div>
  );
};
export default CounterMygtukai;

/*  1. Šiame komponente susikurkite bent 3 mygtukus, kur kiekvienas pasakytų skirtingą
counterio pokyčio modifikaciją (+1, +2, +5).
2. Padarykite, kad paspaudus ant atitinkamo mygtuko, būtų išsiųsta atitinkama paspaudimo
reikšmę į tėvinį komponentą.  */
