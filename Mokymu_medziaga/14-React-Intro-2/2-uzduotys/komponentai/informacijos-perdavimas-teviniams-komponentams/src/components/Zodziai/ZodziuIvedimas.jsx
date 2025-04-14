import { useRef } from "react";

const ZodziuIvedimas = (props) => {
  const inputRef = useRef();

  const submitHandle = (event) => {
    event.preventDefault();

    const inputValue = inputRef.current.value;
    if (inputValue !== "") {
      props.pridetiZodi(inputValue);
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <h4>ivedimas</h4>
      <form onSubmit={submitHandle}>
        <input type="text" ref={inputRef} />
        <button type="submit">add word</button>
      </form>
    </div>
  );
};

export default ZodziuIvedimas;

/*   Vaikinis komponentas „ZodziuIvedimas“
1. Sukurkite formą, kuri turėtų įvesties laukelį ir mygtuką. Padarykite, kad po formos
patvirtinimo (submit), įvesties laukelyje turimas žodis būtų paimtas ir išsiųstas į tėvinį
komponentą.
2. Taip pat, padarykite, kad jeigu žmogus bando patvirtinti tuščią įvesties laukelį (nieko
neįvedęs), tai kad submit funkcija nieko nedarytų (galima su if
(inputoRef.current.value == &#39;‘) { return }).
3. Po tvarkingo informacijos išsiuntimo į tėvinį komponentą, įvesties laukelis turėtų išsivalyti.  */
