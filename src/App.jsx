import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
// retuning a react component
// keep this here too
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

// as a convention we name the parent styling for the app as StyledApp
// we can keep this here because we don't need it anywhere else
const StyledApp = styled.main`
  background-color: orange;
  padding: 20px;
`;
const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("Check in!")}>Check in</Button>
        <Button onClick={() => alert("Check Out!")}>Check out</Button>
        <Input type="number" placeholder="Number of guests..." />
      </StyledApp>
    </>
  );
};

export default App;
