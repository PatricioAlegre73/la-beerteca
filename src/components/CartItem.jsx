import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div style={{ borderBottom: "1px solid gray", marginBottom: 10 }}>
      <h4>{item.name}</h4>
      <p>
        Cantidad: {item.quantity} x ${item.price} = ${item.quantity * item.price}
      </p>
      <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;
