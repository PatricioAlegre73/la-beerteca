// src/components/ItemDetailContainer.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import db from "../firebase/db";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const productRef = doc(db, "products", id);

    getDoc(productRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        }
      })
      .catch((error) => {
        console.error("Error al obtener producto:", error);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return loading ? <p>Cargando detalles...</p> : <ItemDetail {...product} />;
};

export default ItemDetailContainer;
