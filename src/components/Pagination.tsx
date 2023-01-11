import React from "react";
import styled from "styled-components";
import { paginationProps } from "../interfaces/shopModels";

const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const StyledPageButton = styled.button``;

const Pagination: React.FC<paginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPagination>
      {pageNumbers.map((num) => {
        return (
          <StyledPageButton
            onClick={() => {
              paginate(num);
            }}
            onKeyDown={() => {
              paginate(num);
            }}
            key={num}
          >
            {num}
          </StyledPageButton>
        );
      })}
    </StyledPagination>
  );
};

export { Pagination };
