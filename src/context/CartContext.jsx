import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const totalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalPrice, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
