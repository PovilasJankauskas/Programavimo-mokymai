import { useRef } from "react";
import "./Search.css";
import Button from "../Button";
const Search = (props) => {
  let inputRef = useRef();
  let items = props.items;

  const onClickSearch = (e) => {
    e.preventDefault();
    const enteredValue = inputRef.current.value.toLowerCase();

    const newData = items.filter((item) =>
      item.name.toLowerCase().includes(enteredValue)
    );
    props.onSearchButtonClick(newData);
  };

  const onClickReset = () => {
    inputRef.current.value = "";
    props.onResetButtonClick();
  };
  return (
    <>
      <h2>Produktų katalogas</h2>
      <div className="input_container">
        <input ref={inputRef} type="text" placeholder="Ieškoti" />

        <Button title="Search" action={onClickSearch} />

        {inputRef.current?.value.length > 0 && (
          <Button title="Reset" action={onClickReset} />
        )}
      </div>
    </>
  );
};
export default Search;
