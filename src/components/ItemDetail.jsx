import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  const { addItem } = useCart();

  const handleAddToCart = (quantity) => {
    addItem({ ...item, quantity });
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <ItemCount stock={item.stock} onAdd={handleAddToCart} />
    </div>
  );
}

export default ItemDetail;
