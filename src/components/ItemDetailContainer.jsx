import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "items", id);
    getDoc(docRef)
      .then(docSnap => {
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          setProduct(null);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h2>Cargando detalle...</h2>;
  if (!product) return <h2>Producto no encontrado</h2>;

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
