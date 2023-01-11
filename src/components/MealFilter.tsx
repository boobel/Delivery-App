import React from "react";
import styled from "styled-components";
import { filterProps } from "../interfaces/shopModels";

const StyledButton = styled.button`
  background-color: white;
  border: 2px solid var(--brand-100);
  color: var(--brand-100);
  border-radius: 37px;
  padding: 5px 20px;
`;

const MealFilter: React.FC<filterProps> = ({ filter }) => {
  return <StyledButton>{filter}</StyledButton>;
};

export { MealFilter };
