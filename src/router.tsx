import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import GlobalStyle from "./globalStyles";
import { Home } from "./pages/homepage";
import { Shop } from "./pages/shop";
import { Cart } from "./pages/cart";
import { Checkout } from "./pages/checkout";
import { Payment } from "./pages/payment";
import { ShoppingCartProvider } from "./context/CartContext";

const Router: React.FC = () => {
  return (
    <ShoppingCartProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export { Router };
