import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledEmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  font-weight: 800;
  padding: 0.5rem;
  color: white;
  background-color: var(--brand-300);
`;

const EmptyCart: React.FC = () => {
  return (
    <>
      <StyledEmptyCart>
        <span>Cart Is Empty</span>
        <Link to="/shop">
          <StyledButton>Return To Shopping</StyledButton>
        </Link>
      </StyledEmptyCart>
    </>
  );
};

const FilledCart: React.FC = () => {
  return (
    <>
      <span>Placeholder cart fulled</span>
    </>
  );
};

const Cart: React.FC = () => {
  const isEmpty = true;

  return (
    <StyledWrapper>
      <Header />
      <StyledCart>{isEmpty ? <EmptyCart /> : <FilledCart />}</StyledCart>
      <Footer />
    </StyledWrapper>
  );
};

export { Cart };
