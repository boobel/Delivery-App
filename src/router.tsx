import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import GlobalStyle from "./globalStyles";
import { Home } from "./pages/homepage";
import { Shop } from "./pages/shop";

const Router: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { Router };
