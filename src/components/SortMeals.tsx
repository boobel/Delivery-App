import React from "react";
import styled from "styled-components";
import arrow from "../assets/images/sort_arrow.svg";

const StyledSortButton = styled.button`
  background-color: var(--brand-400);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 150%;
  padding: 0.75rem;
  margin: 0.5rem;
`;

const StyledArrow = styled.img`
  height: 30px;
`;

const MealSort: React.FC = () => {
  return (
    <StyledSortButton>
      <span>Sort</span>
      <StyledArrow src={arrow} alt="sort arrow" />
    </StyledSortButton>
  );
};

export { MealSort };
