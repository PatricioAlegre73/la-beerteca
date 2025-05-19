import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function ItemDetail({ product }) {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addItem(product, quantity);
    alert(`${quantity} ${product.name} agregado(s) al carrito`);
  };

  return (
    <div style={{ display: "flex", gap: 20, padding: 20 }}>
      <img src={product.image} alt={product.name} style={{ width: 300, objectFit: "cover" }} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>Precio:</strong> ${product.price}</p>
        <p><strong>Categoría:</strong> {product.category}</p>

        <div>
          <label>Cantidad: </label>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <button onClick={handleAdd} style={{ marginTop: 10 }}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemDetail;
