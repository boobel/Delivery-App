import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9b9b9b;
  padding: 10px;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <span>Copyright Patryk Borowski</span>
    </StyledFooter>
  );
};

export { Footer };
