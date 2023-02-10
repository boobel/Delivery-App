import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/CartContext";
import { CartMeal } from "../components/CartMeal";
import uuid from "react-uuid";

const EmptyCart: React.FC = () => {
  return (
    <>
      <StyledEmptyCart>
        <StyledTotal>Your Cart Is Empty</StyledTotal>
        <Link to="/shop">
          <StyledButton>Return To Shopping</StyledButton>
        </Link>
      </StyledEmptyCart>
    </>
  );
};

const FilledCart: React.FC = () => {
  const { cartItems, getCartTotal } = useShoppingCart();

  return (
    <StyledFilledCart>
      <StyledMeals>
        {cartItems.map((item) => {
          return (
            <CartMeal
              name={item.name}
              price={item.price}
              id={item.id}
              count={item.count}
              key={uuid()}
            />
          );
        })}
      </StyledMeals>
      <>
        <StyledTotal>Total: ${getCartTotal()} </StyledTotal>
        <Link to="/checkout">
          <StyledButton>Proceed To Checkout</StyledButton>
        </Link>
      </>
    </StyledFilledCart>
  );
};

const Cart: React.FC = () => {
  const { cartItems } = useShoppingCart();

  return (
    <StyledWrapper>
      <Header />
      <StyledCart>
        {cartItems.length > 0 ? <FilledCart /> : <EmptyCart />}
      </StyledCart>
      <Footer />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex-grow: 1;
`;

const StyledMeals = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  gap: 2rem;
  margin: 0.75rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const StyledCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  margin-bottom: 5rem;
`;

const StyledFilledCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const StyledEmptyCart = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  font-weight: 800;
  width: 20vw;
  padding: 0.5rem;
  color: white;
  background-color: var(--brand-300);
`;

const StyledTotal = styled.div`
  font-size: 125%;
  font-weight: 900;
`;

export { Cart };
