import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const itemsCollection = collection(db, "items");
    const q = categoryId
      ? query(itemsCollection, where("category", "==", categoryId))
      : itemsCollection;

    getDocs(q)
      .then((res) => {
        const items = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);
      })
      .catch((error) => {
        console.error("Error cargando productos:", error);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <h2>Cargando productos...</h2>;
  if (products.length === 0) return <h2>No hay productos en esta categoría.</h2>;

  return (
    <div style={{ padding: 20 }}>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
