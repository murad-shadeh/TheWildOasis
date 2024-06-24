import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
// retuning a react component

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
        <Heading as="h1">The Wild Oasis</Heading>

        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => alert("Check in!")}>Check in</Button>
        <Button onClick={() => alert("Check Out!")}>Check out</Button>
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests..." />
      </StyledApp>
    </>
  );
};

export default App;
