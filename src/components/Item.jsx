import React from "react";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 5, padding: 10, width: 200 }}>
      <Link to={`/item/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
        <img src={product.image} alt={product.name} style={{ width: "100%", height: 150, objectFit: "cover" }} />
        <h3>{product.name}</h3>
        <p>Precio: ${product.price}</p>
      </Link>
    </div>
  );
}

export default Item;
