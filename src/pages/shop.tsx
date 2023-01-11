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
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledMeals = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: space;
  gap: 2rem;
  margin: 0.75rem;
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
  const [filteredMeals, setFilteredMeals] = useState<mealProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(8);

  useEffect(() => {
    const getMeals = async () => {
      setMealResult(await fetchMeals());
      setFilteredMeals(await fetchMeals());
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
  const currentPosts = filteredMeals.slice(idxofFirstPost, idxofLastPost);

  //change page logic
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  //filtering function
  const filterMeals = (cuisine: string) => {
    console.log(cuisine);
    console.log(filteredMeals);
    if (
      cuisine === filteredMeals[0].cuisine &&
      filteredMeals[0].cuisine === filteredMeals[1].cuisine
    ) {
      setCurrentPage(1);
      setFilteredMeals(mealResult);
    } else {
      setCurrentPage(1);
      let newMeals = mealResult.filter((meal) => meal.cuisine === cuisine);
      setFilteredMeals(newMeals);
    }
  };

  return (
    <StyledWrapper>
      <Header />
      <StyledFilters>
        {filterResult.map((filter) => {
          return (
            <>
              <MealFilter filter={filter} filterMeals={filterMeals} />
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
                cuisine={meal.cuisine}
                key={uuid()}
              />
            </>
          );
        })}
      </StyledMeals>
      <StyledPush />

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredMeals.length}
        paginate={paginate}
      />
      <Footer />
    </StyledWrapper>
  );
};

export { Shop };
