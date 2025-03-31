const Palindromas = () => {
  const tikrintiPolindroma = (text) => {
    const reversedText = text.split("").reverse().join("");
    return text === reversedText;
  };
  const inputHandler = (event) => {
    const inputValue = event.target.value;
    if (tikrintiPolindroma(inputValue)) {
      console.log(`${inputValue} yra palindromas`);
    } else {
      console.log(`${inputValue} nėra palindromas`);
    }
  };
  return (
    <div>
      <h1>Polindromas</h1>
      <input type="text" onChange={inputHandler} />
    </div>
  );
};
export default Palindromas;
