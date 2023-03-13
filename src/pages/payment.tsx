import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import paypayl from "../assets/images/ppicon.svg";
import venmo from "../assets/images/venmoicon.svg";
import cash from "../assets/images/cashicon.svg";
import card from "../assets/images/cardicon.svg";
import bank from "../assets/images/bankicon.svg";

const Payment: React.FC = () => {
  return (
    <StyledWrapper>
      <Header />
      <StyledMain>
        <StyledDetails>
          <StyledHeader> Payment Details</StyledHeader>
          <StyledItem>
            <span>Products Total</span>
            <span>12.23</span>
          </StyledItem>
          <StyledItem>
            <span>Delivery Fee</span>
            <span>1</span>
          </StyledItem>
          <StyledItem>
            <span>Service Fee</span>
            <span>2</span>
          </StyledItem>
          <StyledItem>
            <span>Total</span>
            <span>3</span>
          </StyledItem>
        </StyledDetails>
        <StyledOptions>
          <StyledHeader> Payment Options</StyledHeader>
          <label>
            <input type="radio" name="option" />
            <StyledImage src={paypayl} alt="paypal" />
            PayPal
          </label>
          <label>
            <input type="radio" name="option" />
            <StyledImage src={venmo} alt="paypal" />
            Venmo
          </label>
          <label>
            <input type="radio" name="option" />
            <StyledImage src={card} alt="paypal" />
            Credit Card
          </label>
          <label>
            <input type="radio" name="option" />
            <StyledImage src={cash} alt="paypal" />
            Cash
          </label>
          <label>
            <input type="radio" name="option" />
            <StyledImage src={bank} alt="paypal" />
            Bank Transfer
          </label>
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
  flex-grow: 5;
  height: 100%;
  margin: 1rem;
`;

const StyledHeader = styled.span`
  font-weight: 900;
  font-size: 200%;
`;

const StyledDetails = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
  margin: 1rem;
`;

const StyledOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  margin: 1rem;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  font-weight: 800;
  width: 30vw;
  padding: 1rem;
  color: white;
  background-color: var(--brand-300);
  margin: 1rem;
`;

const StyledItem = styled.div`
  display: inline-flex;
  gap: 2rem;
`;

const StyledImage = styled.img`
  height: 25px;
`;

export { Payment };
