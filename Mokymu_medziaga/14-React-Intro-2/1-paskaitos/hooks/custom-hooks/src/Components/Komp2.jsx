import useWindowSize from "../hooks/useWindowSize";

const Komp2 = () => {
  const displaySize = useWindowSize();

  const checkSize = () => {
    const width = displaySize.width;
    if (width <= 600) {
      return "mobile";
    } else if (width > 600 && width <= 1000) {
      return "tablet";
    } else if (width > 1000) {
      return "desktop";
    }
  };

  return (
    <div>
      <h3> ekrano dydžio pvz</h3>
      <p>height: {displaySize.height}</p>
      <p>
        width: {displaySize.width} {checkSize()}
      </p>
    </div>
  );
};
export default Komp2;
