import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../assets/images/sort_arrow.svg";
import { MenuProps, SortArrow, SortProps } from "../interfaces/shopModels";

const SortList: React.FC<MenuProps> = ({
  isOpen,
  sortPriceAsc,
  sortPriceDesc,
  sortAlphabetically,
}) => {
  return (
    <StyledSortList
      isOpen={isOpen}
      sortPriceAsc={sortPriceAsc}
      sortPriceDesc={sortPriceDesc}
      sortAlphabetically={sortAlphabetically}
    >
      <StyledList>
        <StyledItem
          onClick={() => {
            sortPriceAsc();
          }}
        >
          Price Desc
        </StyledItem>
        <StyledItem
          onClick={() => {
            sortPriceDesc();
          }}
        >
          Price Asc
        </StyledItem>
        <StyledItem
          onClick={() => {
            sortAlphabetically();
          }}
        >
          Alphabetically
        </StyledItem>
      </StyledList>
    </StyledSortList>
  );
};

const MealSort: React.FC<SortProps> = ({
  sortPriceAsc,
  sortPriceDesc,
  sortAlphabetically,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledSortButton>
      <StyledButtonContent
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>Sort</span>
        <StyledArrow src={arrow} alt="sort arrow" isOpen={isOpen} />
      </StyledButtonContent>

      <SortList
        isOpen={isOpen}
        sortPriceAsc={sortPriceAsc}
        sortPriceDesc={sortPriceDesc}
        sortAlphabetically={sortAlphabetically}
      ></SortList>
    </StyledSortButton>
  );
};

const StyledSortList = styled.nav<MenuProps>`
  display: flex;
  font-size: 50%;
  text-align: left;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const StyledList = styled.ul`
  padding-left: 0.5rem;
  list-style: none;
`;

const StyledItem = styled.li`
  padding-bottom: 0.75rem;
  font-weight: 500;
`;

const StyledButtonContent = styled.div`
  display: inline-flex;
  text-align: center;
  gap: 0.5rem;
`;

const StyledSortButton = styled.button`
  background-color: var(--brand-400);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 0.5rem;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 150%;
  padding: 0.75rem;
  margin: 0.5rem;
`;

const StyledArrow = styled.img<SortArrow>`
  height: 30px;
  rotate: ${(props) => (props.isOpen ? "0deg" : "-90deg")};
`;

export { MealSort };
