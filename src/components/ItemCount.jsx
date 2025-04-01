import React, { useState } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="mt-4">
      <button onClick={decrease} className="bg-gray-300 px-4 py-2 rounded">-</button>
      <span className="mx-4">{count}</span>
      <button onClick={increase} className="bg-gray-300 px-4 py-2 rounded">+</button>
      <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded">Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
