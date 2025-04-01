import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [breweries, setBreweries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = "https://api.openbrewerydb.org/v1/breweries";

    if (categoryId) {
      url += `?by_type=${categoryId}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBreweries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener cervecerías:", err);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-bold">{greeting}</h2>
      {loading ? <p>Cargando cervecerías...</p> : <ItemList items={breweries} />}
    </div>
  );
};

export default ItemListContainer;
