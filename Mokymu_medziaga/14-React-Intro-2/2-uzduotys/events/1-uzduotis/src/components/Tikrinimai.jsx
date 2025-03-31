const Tikrinimai = () => {
  let skaicius = Math.floor(Math.random() * 100) + 1;
  const yraLyginis = () => {
    skaicius % 2 === 0
      ? alert(`Skaicius ${skaicius} - Lyginis good job`)
      : alert(`Skaicius ${skaicius} - nelyginis sad life`);
  };
  const arDidenisNei30 = () => {
    skaicius > 30
      ? alert(`Skaicius ${skaicius} - Didesnis uz 30`)
      : alert(`Skaicius ${skaicius} - mazesnis uz 30 sad life`);
  };

  const arPirminis = () => {
    let pirminis = true;
    if (skaicius < 2) {
      pirminis = false;
    }

    for (let i = 2; i < skaicius; i++) {
      if (skaicius % i === 0) {
        pirminis = false;
        break;
      }
    }

    if (pirminis) {
      alert(`Skaicius ${skaicius} pirminis`);
    } else {
      alert(`Skaicius ${skaicius} ne pirminis`);
    }
  };
  return (
    <div>
      <h3>Tikrinimai</h3>
      <button onClick={yraLyginis}>Tikrinam skaiciuka ar lyginis</button>
      <button onClick={arDidenisNei30}>
        Tikrinam skaiciuka ar didesnis nei 30
      </button>
      <button onClick={arPirminis}>Ar pirminis?</button>
    </div>
  );
};

export default Tikrinimai;
