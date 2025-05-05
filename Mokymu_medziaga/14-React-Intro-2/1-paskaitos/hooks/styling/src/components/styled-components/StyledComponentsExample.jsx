import styled from "styled-components";

const ComponentTitle = styled.h1`
  color: red;
`;

const ComponentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ManoMygtukas = styled.button`
  color: ${(props) => (props.$danger ? "red" : "black")};
  background-color: ${(props) => (props.pavojingas ? "red" : "grey")};
`;

const Text = styled.p`
  color: ${(props) => (props.$spalva ? "red" : "pink")};
`;

const ComponentSubTitle = styled(ComponentTitle)`
  text-decoration: underline;
`;

const StyledComponentsExample = () => {
  return (
    <div>
      <h2> Styled Components example</h2>
      <ComponentContainer>
        <ComponentTitle>Mano pirmasis style-components</ComponentTitle>
        <ComponentSubTitle>Mano pirmasis style-components</ComponentSubTitle>
      </ComponentContainer>
      <ManoMygtukas> pvz </ManoMygtukas>
      <ManoMygtukas $danger={true}> pvz </ManoMygtukas>
      <ManoMygtukas pavojingas="true"> pvz </ManoMygtukas>
      <Text $spalva>pvz</Text>
    </div>
  );
};
export default StyledComponentsExample;
