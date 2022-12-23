import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { fetchMeals } from "../api/fetchMeals";

const StyledWrapper = styled.div``;

const Shop: React.FC = () => {
  const [result, setResult] = useState<resultProps[]>([]);

  useEffect(() => {
    /* //TODO JAKI ZWRACAĆ TYP W PROMISE */
    setResult(fetchMeals());
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
