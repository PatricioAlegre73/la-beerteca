// src/components/CartItem.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ id, nombre, precio, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div>
      <h4>{nombre}</h4>
      <p>Precio: ${precio} x {quantity}</p>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
