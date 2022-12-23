import React, { useEffect } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const StyledWrapper = styled.div``;

const Shop: React.FC = () => {
  useEffect(() => {
    /* //TODO JAKI ZWRACAĆ TYP W PROMISE */
    const fetchMeals = async (): Promise<undefined> => {
      try {
        const data = await fetch("http://localhost:3000/meals");
        const meals = await data.json();
        console.log(meals);
        return meals;
      } catch (e) {
        console.error(e);
      }
    };

    void fetchMeals();
  }, []);
  return (
    <StyledWrapper>
      <Header />
      <Footer />
    </StyledWrapper>
  );
};

export { Shop };
