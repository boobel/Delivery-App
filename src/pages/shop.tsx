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
import { Pagination } from "../components/Pagination";

const StyledWrapper = styled.div`
  min-height: 100vh;
`;

const StyledMeals = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0.75rem;
  margin-bottom: -40px;
`;

const StyledFilters = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 0.5rem;
`;

const StyledPush = styled.div`
  height: 60px;
`;

const Shop: React.FC = () => {
  const [mealResult, setMealResult] = useState<mealProps[]>([]);
  const [filterResult, setFilterResult] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(8);

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

  //getting current page of posts
  const idxofLastPost = currentPage * postsPerPage;
  const idxofFirstPost = idxofLastPost - postsPerPage;
  const currentPosts = mealResult.slice(idxofFirstPost, idxofLastPost);

  //change page logic
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
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
          {currentPosts.map((meal) => {
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
        <StyledPush />

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={mealResult.length}
          paginate={paginate}
        />
        <Footer />
      </StyledWrapper>
    </>
  );
};

export { Shop };
