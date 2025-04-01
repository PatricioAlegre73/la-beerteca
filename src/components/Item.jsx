import React from "react";

const Item = ({ item }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <h3 className="text-xl font-bold">{item.name}</h3>
      <p className="text-gray-600">{item.brewery_type}</p>
      {item.website_url && (
        <a href={item.website_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Visitar sitio
        </a>
      )}
    </div>
  );
};

export default Item;
