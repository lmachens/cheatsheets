import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-weight: bold;
`;

const Hashtag = styled.span`
  color: #09d3ac;
`;

const Highlight = styled.span`
  color: #c14b4b;
`;

export default function Logo() {
  return (
    <Container>
      <Hashtag>#</Hashtag>cheat<Highlight>sheets</Highlight>
    </Container>
  );
}
