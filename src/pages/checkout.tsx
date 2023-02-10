import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Checkout: React.FC = () => {
  return (
    <StyledWrapper>
      <Header />
      <StyledForm>
        <StyledHeader>Checkout</StyledHeader>
        <StyledGrid>
          <StyledItem>
            <span>Name</span>
            <input></input>
          </StyledItem>
          <StyledItem>
            <span>Surname</span>
            <input></input>
          </StyledItem>
          <StyledItem>
            <span>Email</span>
            <input></input>
          </StyledItem>
          <StyledItem>
            <span>Address</span>
            <input></input>
          </StyledItem>
        </StyledGrid>
        <StyledHeader> Delivery Adress</StyledHeader>
        <StyledGrid>
          <StyledItem>
            <span>Street</span>
            <input></input>
          </StyledItem>
          <StyledItem>
            <span>Building Number</span>
            <input></input>
          </StyledItem>
          <StyledItem>
            <span>City</span>
            <input></input>
          </StyledItem>
          <StyledItem>
            <span>Postal Code</span>
            <input></input>
          </StyledItem>
        </StyledGrid>
        <StyledButton>Proceed To Payment</StyledButton>
      </StyledForm>
      <Footer />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1rem;
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

const StyledHeader = styled.span`
  font-weight: 900;
  font-size: 150%;
`;

export { Checkout };
