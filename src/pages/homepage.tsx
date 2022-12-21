import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";

const StyledWrapper = styled.div``;

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <StyledWrapper></StyledWrapper>
    </>
  );
};

export { Home };
