import { BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import GlobalStyle from "./globalStyles";

const Router: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
