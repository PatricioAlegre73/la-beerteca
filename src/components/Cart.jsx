// src/components/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map(item => <CartItem key={item.id} {...item} />)}
      <p>Total: ${totalPrice}</p>
      <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  );
};

export default Cart;
