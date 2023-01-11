import React, { useEffect, useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { fetchMeals } from "../api/fetchMeals";
import { fetchFilters } from "../api/fetchFilters";
import { mealProps } from "../interfaces/shopModels";
import { Meal } from "../components/Meal";
import { MealFilter } from "../components/MealFilter";
import { MealSort } from "../components/SortMeals";

const StyledWrapper = styled.div`
  height: 100vh;
`;

const StyledMeals = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0.75rem;
`;

const StyledFilters = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 0.5rem;
`;

const Shop: React.FC = () => {
  const [mealResult, setMealResult] = useState<mealProps[]>([]);
  const [filterResult, setFilterResult] = useState<string[]>([]);

  useEffect(() => {
    const getMeals = async () => {
      setMealResult(await fetchMeals());
    };
    const getFilters = async () => {
      setFilterResult(await fetchFilters());
    };
    getFilters();

    getMeals();
  }, []);

  return (
    <StyledWrapper>
      <Header />
      <StyledFilters>
        {filterResult.map((filter) => {
          return (
            <>
              <MealFilter filter={filter} />
            </>
          );
        })}
      </StyledFilters>
      <MealSort />
      <StyledMeals>
        {mealResult.map((meal) => {
          return (
            <>
              <Meal
                name={meal.name}
                description={meal.description}
                price={meal.price}
                key={uuid()}
              />
            </>
          );
        })}
      </StyledMeals>
      <Footer />
    </StyledWrapper>
  );
};

export { Shop };
