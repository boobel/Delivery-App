import React from "react";
import styled from "styled-components";

const StyledSortButton = styled.button`
  background-color: var(--brand-400);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 150%;
  padding: 0.75rem;
  margin: 0.5rem;
`;
const MealSort: React.FC = () => {
  return <StyledSortButton>Sort</StyledSortButton>;
};

export { MealSort };
