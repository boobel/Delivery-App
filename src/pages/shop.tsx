import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { fetchMeals } from "../api/fetchMeals";
import { resultProps } from "../interfaces/shopModels";

const StyledWrapper = styled.div``;

const Shop: React.FC = () => {
  const [result, setResult] = useState<resultProps[]>([]);

  useEffect(() => {
    void fetchMeals(setResult);
  }, []);

  return (
    <StyledWrapper>
      <Header />
      <div>
        {result.map((meal) => {
          return (
            <>
              <span>{meal.name}</span>
            </>
          );
        })}
      </div>
      <Footer />
    </StyledWrapper>
  );
};

export { Shop };
