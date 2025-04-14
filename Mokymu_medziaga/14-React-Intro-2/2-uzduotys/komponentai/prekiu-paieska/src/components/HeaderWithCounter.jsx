const HeaderWithCounter = ({ title, count }) => {
  return (
    <>
      <h2>Produktų katalogas</h2>
      {title} ({count})
    </>
  );
};
export default HeaderWithCounter;
