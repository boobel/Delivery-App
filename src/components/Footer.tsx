import React from "react";
import styled from "styled-components";
import { useContext } from "react";

const StyledFooter = styled.div`
  background-color: #9b9b9b;
  height: 40px;
  text-align: center;
  line-height: 40px;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <span>Copyright Patryk Borowski</span>
      <button>x</button>
    </StyledFooter>
  );
};

export { Footer };
