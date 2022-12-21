import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ff8e20;
  font-size: 3rem;
  padding: 32px 20px;
  font-weight: bold;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img placeholder="App Icon" />
      <span>Yummy</span>
      <img placeholder="Cart Icon" />
    </StyledHeader>
  );
};

export { Header };
