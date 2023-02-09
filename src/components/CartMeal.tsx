import React from "react";
import styled from "styled-components";
import { cartMealProps } from "../interfaces/shopModels";
import { useShoppingCart } from "../context/CartContext";

const CartMeal: React.FC<cartMealProps> = ({ name, price, count, id }) => {
  const { addToCart, removeFromCart, getItemCount } = useShoppingCart();
  return (
    <StyledMeal>
      <StyledLeft>
        <StyledName>{name}</StyledName>
      </StyledLeft>
      <StyledRight>
        <StyledCount>
          <button
            onClick={() => {
              removeFromCart(id);
            }}
          >
            -
          </button>
          <StyledCountNumber>{count}</StyledCountNumber>
          <button
            onClick={() => {
              addToCart(id, name, price);
            }}
          >
            +
          </button>
        </StyledCount>
        <StyledPrice>${price * count}</StyledPrice>
      </StyledRight>
    </StyledMeal>
  );
};

const StyledMeal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 85vw;
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
`;

const StyledName = styled.span`
  font-size: 150%;
  font-weight: 900;
`;

const StyledCount = styled.div`
  display: inline-flex;
  font-size: 125%;
  font-weight: 900;
  gap: 0.5rem;
`;

const StyledCountNumber = styled.div`
  width: 15px;
  text-align: center;
`;

const StyledRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const StyledPrice = styled.div`
  font-size: 125%;
  font-weight: 900;
  width: 15vw;
  text-align: right;
`;

export { CartMeal };
