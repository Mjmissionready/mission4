import * as React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import About from "./About";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

function Home() {
  return (
    <Container>
      <Header />
      <About />
    </Container>
  );
}

export default Home;