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
  getCartTotal: () => number;
  getItemsTotal: () => number;
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

  const getItemsTotal = () => {
    let number = 0;
    for(let item of cartItems) {
      number += item.count
    }
    return number
  }

  const getItemCount = (id: number) => {
    return cartItems.find((item) => item.id === id)?.count || 0;
  };

  const getCartTotal = () => {
    let sum: number = cartItems
      .map((a) => Math.round(a.price * a.count * 100) / 100)
      .reduce(function (a, b) {
        return a + b;
      });
    return sum;
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
      value={{
        getItemCount,
        addToCart,
        removeFromCart,
        cartItems,
        getCartTotal,
        getItemsTotal
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, useShoppingCart };
