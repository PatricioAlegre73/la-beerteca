import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "./ItemList";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "items");

    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then((snapshot) => {
        const productsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsData);
      })
      .catch((error) => {
        console.error("Error loading products: ", error);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <h2>Cargando productos...</h2>;

  return (
    <>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
