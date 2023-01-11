import React from "react";
import { Link } from "react-router-dom";
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
`;

const StyledImage = styled.img`
  height: 75px;
`;

const StyledHeaderText = styled.div`
  font-weight: 900;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledImage alt="App Icon" src={logo} />
      </Link>
      <StyledHeaderText>Yummy</StyledHeaderText>
      <Link to="/cart">
        <StyledImage alt="Cart Icon" src={cart} />
      </Link>
    </StyledHeader>
  );
};

export { Header };
