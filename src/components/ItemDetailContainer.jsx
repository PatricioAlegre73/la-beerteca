import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener el detalle:", err);
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="container mx-auto py-10 text-center">
      {loading ? <p>Cargando detalles...</p> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
