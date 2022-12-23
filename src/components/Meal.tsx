import React from "react";
import styled from "styled-components";
import { resultProps } from "../interfaces/shopModels";

const Meal: React.FC<resultProps> = ({ name, description, price }) => {
  return (
    <StyledMeal>
      <StyledLeft>
        <StyledName>{name}</StyledName>
        <StyledDescription>{description}</StyledDescription>
      </StyledLeft>
      <StyledRight>
        <StyledPrice>${price}</StyledPrice>
        <StyledOrderBtn>Order Now</StyledOrderBtn>
      </StyledRight>
    </StyledMeal>
  );
};

const StyledMeal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledName = styled.span`
  font-size: 150%;
  font-weight: 900;
`;

const StyledDescription = styled.span`
  width: 50vw;
`;

const StyledRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const StyledPrice = styled.span`
  font-size: 125%;
  font-weight: 900;
`;

const StyledOrderBtn = styled.button`
  background-color: #ff8e20;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 700;
`;

export { Meal };
