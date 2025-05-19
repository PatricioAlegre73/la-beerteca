import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map(item => (
        <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: 10 }}>
          <h3>{item.name}</h3>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio unitario: ${item.price}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${totalPrice()}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout" style={{ marginLeft: 20 }}>Finalizar compra</Link>
    </div>
  );
}

export default Cart;
