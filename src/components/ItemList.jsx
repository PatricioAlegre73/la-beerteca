import React from "react";
import Item from "./Item";

function ItemList({ products }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
