import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { postOrder } from "../api/postOrder";
import { OrderData } from "../interfaces/shopModels";

const Checkout: React.FC = () => {
  const [currentOrder, SetCurrentOrder] = useState<OrderData>({})

  const handleInput = (e: any) => {
    SetCurrentOrder({
      ...currentOrder,
      [e.target.name]: e.target.value
    }
    )
    console.log(currentOrder)
  }


  return (
    <StyledWrapper>
      <Header />
      <StyledForm>
        <StyledHeader>Checkout</StyledHeader>
        <StyledGrid>
          <StyledItem>
            <span>Name</span>
            <input
            name="Name"
            onChange={handleInput}
            />
          </StyledItem>
          <StyledItem>
            <span>Surname</span>
            <input
            name="Surname"
            onChange={handleInput}
            />
          </StyledItem>
          <StyledItem>
            <span>Email</span>
            <input
            name="Email"
            onChange={handleInput}
            />        
            </StyledItem>
          <StyledItem>
            <span>Address</span>
            <input
            name="Address"
            onChange={handleInput}
            />          
            </StyledItem>
        </StyledGrid>
        <StyledHeader> Delivery Adress</StyledHeader>
        <StyledGrid>
          <StyledItem>
            <span>Street</span>
            <input
            name="Street"
            onChange={handleInput}
            />               
            </StyledItem>
          <StyledItem>
            <span>Building Number</span>
            <input
            name="BuildingNumber"
            onChange={handleInput}
            />               
            </StyledItem>
          <StyledItem>
            <span>City</span>
            <input
            name="City"
            onChange={handleInput}
            />     
            </StyledItem>
          <StyledItem>
            <span>Postal Code</span>
            <input
            name="Postal"
            onChange={handleInput}
            />               
            </StyledItem>
        </StyledGrid>
        <Link to="/payment">
          <StyledButton onClick={()=>{postOrder(currentOrder)}}>Proceed To Payment</StyledButton>
        </Link>
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
