import styled from "styled-components";

const NavigationComponent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #eee36b;
`;

const CompanyName = styled.h4`
  color: black;
`;

const StyledComponent = () => {
  return (
    <NavigationComponent>
      <CompanyName>Pas Povka </CompanyName>
    </NavigationComponent>
  );
};
export default StyledComponent;
