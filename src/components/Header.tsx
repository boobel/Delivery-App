import React from "react";
import styled from "styled-components";
import cart from "../assets/images/cart.svg";
import logo from "../assets/images/logo.svg";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f47800;
  font-size: 2.5rem;
  padding: 24px 10px;
  font-weight: 900;
`;

const StyledImage = styled.img`
  height: 100px;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledImage alt="App Icon" src={logo} />
      <span>Yummy</span>
      <StyledImage alt="Cart Icon" src={cart} />
    </StyledHeader>
  );
};

export { Header };
