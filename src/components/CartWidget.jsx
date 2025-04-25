import { useCart } from "../context/CartContext";

function CartWidget() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <img src="/cart-icon.png" alt="Carrito" />
      <span>{totalItems}</span>
    </div>
  );
}

export default CartWidget;
