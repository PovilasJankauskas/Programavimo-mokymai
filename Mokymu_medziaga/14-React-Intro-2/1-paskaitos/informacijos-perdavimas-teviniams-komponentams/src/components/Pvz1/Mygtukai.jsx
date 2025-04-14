const Mygtukai = (props) => {
  const onClickButtonHandler = () => {
    console.log("onclick button event:" + props.buttonText);
    props.tevoKomponentoFunckija("onclick button event:" + props.buttonText);
  };
  return (
    <>
      <h4>Mygtukai</h4>
      <button onClick={onClickButtonHandler}>{props.buttonText}</button>
    </>
  );
};
export default Mygtukai;
