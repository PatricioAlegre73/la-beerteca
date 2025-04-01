import React from "react";

const ItemDetail = ({ item }) => {
  if (!item) return <p>Item no encontrado</p>;

  return (
    <div className="border p-6 rounded shadow-lg text-center">
      <h2 className="text-2xl font-bold">{item.name}</h2>
      <p className="text-gray-600">{item.brewery_type}</p>
      <p>{item.city}, {item.state}</p>
      {item.website_url && (
        <a href={item.website_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Visitar sitio
        </a>
      )}
    </div>
  );
};

export default ItemDetail;
