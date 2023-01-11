import React from "react";
import styled from "styled-components";

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

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img placeholder="App Icon" alt="App Icon" />
      <span>Yummy</span>
      <img placeholder="Cart Icon" alt="Cart Icon" />
    </StyledHeader>
  );
};

export { Header };
