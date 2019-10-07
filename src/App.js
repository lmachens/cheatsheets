import React from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Logo from "./components/Logo";
import List from "./components/List";
import ListItem from "./components/ListItem";
import { getGroupedCheatSheets } from "./api/cheatSheets";

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
  const [activeCheatSheet, setActiveCheatSheet] = React.useState(null);
  const groupedCheatSheets = getGroupedCheatSheets();

  return (
    <Container>
      <GlobalStyles />
      <Navigation>
        <Logo />
        <Hr />
        <Aside>
          <List>
            {Object.entries(groupedCheatSheets).map(([key, items]) => (
              <ListItem
                key={key}
                active={activeCheatSheet && activeCheatSheet.category === key}
                details={
                  <List indent>
                    {items.map(item => (
                      <ListItem
                        key={item.title}
                        onClick={() => setActiveCheatSheet(item)}
                      >
                        {item.title}
                      </ListItem>
                    ))}
                  </List>
                }
                onClick={() => setActiveCheatSheet(items[0])}
              >
                {key}
              </ListItem>
            ))}
          </List>
        </Aside>
        <Hr />
        Built with ❤️
      </Navigation>
      <Main>{activeCheatSheet && activeCheatSheet.title}</Main>
    </Container>
  );
}

export default App;
