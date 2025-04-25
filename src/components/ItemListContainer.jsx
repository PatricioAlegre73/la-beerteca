// src/containers/ItemListContainer.jsx

import React, { useState, useEffect } from "react";
import { db } from "../firebase/db"; // Asegúrate de importar correctamente la instancia de Firestore
import { collection, getDocs } from "firebase/firestore";
import ItemList from "../components/ItemList";  // Asegúrate de importar ItemList correctamente

const ItemListContainer = ({ category }) => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const itemsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(itemsData);
    };
    
    fetchItems();
  }, [category]);

  return (
    <div>
      <h2>Productos</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
