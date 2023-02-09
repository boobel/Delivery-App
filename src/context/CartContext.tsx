/* eslint-disable */
import React, { useContext, createContext, useState } from "react";
import { ReactNode } from "react";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface ShoppingCartContext {
  getItemCount: (id: number) => number;
  removeFromCart: (id: number) => void;
  addToCart: (id: number, name: string, price: number) => void;
  cartItems: CartItem[];
}

export interface CartItem {
  id: number;
  count: number;
  name: string;
  price: number;
}

const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItemCount = (id: number) => {
    return cartItems.find((item) => item.id === id)?.count || 0;
  };

  const addToCart = (id: number, name: string, price: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, count: 1, name, price }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      }
    });
    console.log(cartItems);
  };

  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.count === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ getItemCount, addToCart, removeFromCart, cartItems }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, useShoppingCart };
