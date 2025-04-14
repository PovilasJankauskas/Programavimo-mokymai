import Mygtukai from "./Mygtukai";

const apdorotiVaikoReiksme = (atejusiInfo) => {
  console.log("duomenys iš vaik komponento yra:" + atejusiInfo);
};

const Pasirinkimai = () => {
  return (
    <>
      <h3> Pasirinkimai </h3>
      <Mygtukai
        buttonText="click me"
        tevoKomponentoFunkcija={apdorotiVaikoReiksme}
      />

      <Mygtukai buttonText="add me" />
      <Mygtukai buttonText="delete me" />
    </>
  );
};
export default Pasirinkimai;
