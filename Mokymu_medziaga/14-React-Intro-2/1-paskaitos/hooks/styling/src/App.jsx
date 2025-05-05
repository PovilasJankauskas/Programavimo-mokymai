import "./App.css";
import InlineStylingObjects from "./components/CSS/inline-styling/InlineStylingObjects";
import BootstrapCss from "./components/CSS/library/Bootstrap";
import Plain from "./components/CSS/plain/plain";
//import "bootstrap/dist/css/bootstrap.min.css";
import SassStyling from "./components/Sass/SassStyling";
import StyledComponentsExample from "./components/styled-components/StyledComponentsExample";

function App() {
  return (
    <>
      <h1> CSS examples:</h1>
      <StyledComponentsExample />
      <hr />

      <SassStyling />
      <hr />
      <BootstrapCss />
      <hr />
      {/* <InlineStylingObjects /> */}
      <hr />
      <Plain />
      <hr />
    </>
  );
}

export default App;
