import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cart from "../assets/images/cart.svg";
import logo from "../assets/images/logo.svg";
import { useShoppingCart } from "../context/CartContext";


const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f47800;
  font-size: 2.5rem;
  padding: 24px 10px;
`;

const StyledImage = styled.img`
  height: 75px;
`;

const StyledHeaderText = styled.div`
  font-weight: 900;
`;

const StyledCart = styled.div`
  display: block;
  position: relative;
`

const StyledCount = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 70%;
`

const Header: React.FC = () => {
  const { cartItems, getItemsTotal } = useShoppingCart();


  return (
    <StyledHeader>
      <Link to="/">
        <StyledImage alt="App Icon" src={logo} />
      </Link>
      <StyledHeaderText>Yummy</StyledHeaderText>
        <StyledCart>
        <Link to="/cart">
          <StyledImage alt="Cart Icon" src={cart} />
          </Link>
          <StyledCount>{cartItems.length > 0 ? getItemsTotal(): null}</StyledCount>
        </StyledCart>
    </StyledHeader>
  );
};

export { Header };
