import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Payment: React.FC = () => {
  return (
    <StyledWrapper>
      <Header />
      <StyledMain>
        <StyledDetails>
          <span> Payment Details</span>
        </StyledDetails>
        <StyledOptions>
          <span> Payment Options</span>
        </StyledOptions>
        <StyledButton>Finalize Purchase</StyledButton>
      </StyledMain>
      <Footer />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin-bottom: 1rem;
`;

const StyledDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
`;

const StyledOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  font-weight: 800;
  width: 20vw;
  padding: 0.5rem;
  color: white;
  background-color: var(--brand-300);
`;

export { Payment };
