import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import GlobalStyle from "./globalStyles";
import { Home } from "./pages/homepage";
import { Shop } from "./pages/shop";
import { Cart } from "./pages/cart";

const Router: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { Router };
