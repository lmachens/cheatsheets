import React from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Logo from "./components/Logo";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
const Navigation = styled.div`
  width: 300px;
  background-color: #414958;
  text-align: center;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
`;

const Aside = styled.aside`
  flex: 1;
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
`;

const Hr = styled.hr`
  height: 1px;
  width: 100%;
  background-color: #5b6270;
  border: none;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Navigation>
        <Logo />
        <Hr />
        <Aside>Aside</Aside>
        <Hr />
        Built with ❤️
      </Navigation>
      <Main>Main</Main>
    </Container>
  );
}

export default App;
