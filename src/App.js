import styled from "styled-components"
import Hero from "./styles/Hero.styled";
import Navbar from "./styles/Navbar.styled";
import { createGlobalStyle } from "styled-components"

const Container = styled.div`
  background-color: white;
  height: 100vh;
`;

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: white;
  @import url("https://fonts.googleapis.com/css2?family=Splash&display=swap");
  *{
    font-family: 'Roboto', sans-serif;
  }
}
`;

function App() {
  return (
    <div>
    <GlobalStyles />
    <Container>
    
      <Navbar/>

      <Hero/>
      
    </Container>
    </div>
  );
}

export default App;
