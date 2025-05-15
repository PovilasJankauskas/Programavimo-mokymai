import "./Header.scss";

const Header = ({ title, subtitle, button }) => {
  return (
    <div className="header_container">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <button>{button}</button>
    </div>
  );
};
export default Header;
