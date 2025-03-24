import { useState } from "react";

const Card = ({ title, children }) => {
  const [counter, setCount] = useState(10);
  return (
    <div className="Card">
      <h2
        onClick={() => {
          setCount(counter - 1);
        }}
      >
        {title}
      </h2>
      <h3>{counter}</h3>
      <p>{children}</p>
    </div>
  );
};

export default Card;
