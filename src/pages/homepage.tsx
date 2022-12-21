import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const StyledWrapper = styled.div``;

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <StyledWrapper></StyledWrapper>
      <Footer />
    </>
  );
};

export { Home };
